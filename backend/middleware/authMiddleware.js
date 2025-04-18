const jwt = require('jsonwebtoken');

const authMiddleware = {
  /**
   * Verify JWT token from Authorization header
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   * @param {Function} next - Express next function
   */
  verifyToken: (req, res, next) => {
    try {
      // Get token from authorization header
      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
          success: false,
          message: 'Access denied. No token provided'
        });
      }

      // Extract token without "Bearer " prefix   Bearer jkndjksnjkndsfjknj
      const token = authHeader.split(' ')[1];

      if (!token) {
        return res.status(401).json({
          success: false,
          message: 'Access denied. Invalid token format'
        });
      }

      try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Set user in request object
        req.user = decoded;
        
        next();
      } catch (error) {
        return res.status(401).json({
          success: false,
          message: 'Invalid token'
        });
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = authMiddleware; 