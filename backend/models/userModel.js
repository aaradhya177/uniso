const db = require('../db');

const userModel = {
  /**
   * Create a new user in the database
   * @param {Object} userData - User data containing email, password, firstName, lastName, university, department
   * @returns {Promise<Object>} - The created user object
   */
  createUser: async (userData) => {
    const query = `
      INSERT INTO users (email, password, first_name, last_name, university, department)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, email, first_name, last_name, university, department, created_at
    `;
    
    return db.one(query, [
      userData.email, 
      userData.password,
      userData.firstName,
      userData.lastName,
      userData.university,
      userData.department
    ]);
  },

  /**
   * Find a user by email
   * @param {string} email - User's email address
   * @returns {Promise<Object|null>} - The user object or null if not found
   */
  findByEmail: async (email) => {
    const query = `
      SELECT * FROM users
      WHERE email = $1
    `;
    
    return db.oneOrNone(query, [email]);
  },

  /**
   * Find a user by ID
   * @param {number} id - User's ID
   * @returns {Promise<Object|null>} - The user object or null if not found
   */
  findById: async (id) => {
    const query = `
      SELECT id, email, first_name, last_name, university, department, created_at FROM users
      WHERE id = $1
    `;
    
    return db.oneOrNone(query, [id]);
  },

  /**
   * Initialize database with users table
   * @returns {Promise<void>}
   */
  initializeDb: async () => {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        university TEXT NOT NULL,
        department TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    return db.none(query);
  }
};

module.exports = userModel; 