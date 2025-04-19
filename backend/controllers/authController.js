const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// Helper to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email,
      name: `${user.first_name} ${user.last_name}`,
      university: user.university,
      department: user.department
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

const authController = {
  /**
   * User signup
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Express next function
   */
  signup: async (req, res, next) => {
    try {
      console.log('Signup request received:', req.body);
      const { email, password, firstName, lastName, university, department } = req.body;

      // Validate input
      if (!email || !password || !firstName || !lastName || !university || !department) {
        console.log('Validation failed: Missing fields');
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }

      // Basic email validation
      if (!email.includes('@')) {
        console.log('Validation failed: Invalid email format');
        return res.status(400).json({ 
          success: false, 
          message: 'Please enter a valid email' 
        });
      }

      // Check if user already exists
      try {
        const existingUser = await userModel.findByEmail(email);
        if (existingUser) {
          console.log('User already exists:', email);
          return res.status(409).json({ 
            success: false, 
            message: 'User with this email already exists' 
          });
        }
      } catch (dbError) {
        console.error('Error checking for existing user:', dbError);
        return res.status(500).json({
          success: false,
          message: 'Database error while checking existing user'
        });
      }

      // Hash password
      let hashedPassword;
      try {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
      } catch (hashError) {
        console.error('Error hashing password:', hashError);
        return res.status(500).json({
          success: false,
          message: 'Error processing your request'
        });
      }

      // Create user
      let newUser;
      try {
        newUser = await userModel.createUser({
          email,
          password: hashedPassword,
          firstName,
          lastName,
          university,
          department
        });
        console.log('User created successfully:', newUser.id);
      } catch (createError) {
        console.error('Error creating user:', createError);
        return res.status(500).json({
          success: false,
          message: 'Database error while creating user'
        });
      }

      // Generate token
      let token;
      try {
        token = generateToken(newUser);
      } catch (tokenError) {
        console.error('Error generating token:', tokenError);
        return res.status(500).json({
          success: false,
          message: 'Error generating authentication token'
        });
      }

      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: {
          user: {
            id: newUser.id,
            name: `${newUser.first_name} ${newUser.last_name}`,
            email: newUser.email,
            university: newUser.university,
            department: newUser.department
          },
          token
        }
      });
    } catch (error) {
      console.error('Unhandled signup error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error during signup'
      });
    }
  },

  /**
   * User login
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Express next function
   */
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({ 
          success: false, 
          message: 'Email and password are required' 
        });
      }

      // Find user
      const user = await userModel.findByEmail(email);
      if (!user) {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid credentials' 
        });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid credentials' 
        });
      }

      // Generate token
      const token = generateToken(user);

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            university: user.university,
            department: user.department
          },
          token
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error during login'
      });
    }
  },

  /**
   * Get current user (me)
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Express next function
   */
  me: async (req, res, next) => {
    try {
      // User is already set in req.user by auth middleware
      const user = await userModel.findById(req.user.id);
      
      if (!user) {
        return res.status(404).json({ 
          success: false, 
          message: 'User not found' 
        });
      }

      res.status(200).json({
        success: true,
        data: {
          user: {
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            university: user.university,
            department: user.department
          }
        }
      });
    } catch (error) {
      console.error('Get current user error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error while retrieving user data'
      });
    }
  }
};

module.exports = authController; 