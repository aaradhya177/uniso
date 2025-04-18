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
      const { email, password, firstName, lastName, university, department } = req.body;

      // Validate input
      if (!email || !password || !firstName || !lastName || !university || !department) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }

      // Check if email is a valid university email (simple check)
      if (!email.includes('@') || !email.endsWith('.edu')) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please use a valid university email' 
        });
      }

      // Check if user already exists
      const existingUser = await userModel.findByEmail(email);
      if (existingUser) {
        return res.status(409).json({ 
          success: false, 
          message: 'User with this email already exists' 
        });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const newUser = await userModel.createUser({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        university,
        department
      });

      // Generate token
      const token = generateToken(newUser);

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
      next(error);
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
      next(error);
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
      next(error);
    }
  }
};

module.exports = authController; 