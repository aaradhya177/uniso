const userModel = require('../models/userModel');

/**
 * Initialize database with required tables
 */
const initializeDatabase = async () => {
  try {
    console.log('Initializing database...');
    
    // Create users table
    await userModel.initializeDb();
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
};

module.exports = { initializeDatabase }; 