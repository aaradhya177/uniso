const pgp = require('pg-promise')();

// Database connection configuration
const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

// Initialize the database instance
const db = pgp(config);

// Test database connection
db.connect()
  .then(obj => {
    console.log('Database connection successful');
    obj.done(); // release the connection
  })
  .catch(error => {
    console.error('ERROR:', error.message || error);
  });

module.exports = db; 