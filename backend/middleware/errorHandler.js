/**
 * Global error handling middleware
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);

  // Set default values
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Customize error responses based on error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: err.errors || message
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized Access'
    });
  }

  if (err.code === '23505') { // PostgreSQL unique violation error
    return res.status(409).json({
      success: false,
      message: 'Resource already exists'
    });
  }

  // Generic error response
  return res.status(statusCode).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? message : message + (err.stack ? `\n${err.stack}` : '')
  });
};

module.exports = errorHandler; 