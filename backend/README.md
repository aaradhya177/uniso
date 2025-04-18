# Uniso Backend API

A scalable and modular backend built with Node.js, Express and PostgreSQL for the Uniso platform. This backend is designed to connect with the Next.js frontend through API endpoints.

## Features

- Express.js REST API 
- PostgreSQL database integration using pg-promise
- JWT authentication with protected routes
- Password hashing with bcrypt
- Environmental configuration
- Error handling middleware
- CORS configured for frontend integration

## Project Structure

```
├── controllers/          # Business logic
│   └── authController.js # Authentication logic
├── db/                   # Database related files
│   ├── index.js          # Database connection
│   └── dbInit.js         # Database initialization
├── middleware/           # Express middleware
│   ├── authMiddleware.js # JWT verification
│   └── errorHandler.js   # Global error handling
├── models/               # Database models
│   └── userModel.js      # User database queries
├── routes/               # API routes
│   └── auth.js           # Auth routes
├── .env                  # Environment variables (create from .env.example)
├── .env.example          # Example environment variables
├── index.js              # Application entry point
└── package.json          # Dependencies and scripts
```

## Setup

1. **Install dependencies**

```bash
cd backend
npm install
```

2. **Configure environment variables**

```bash
cp .env.example .env
```

Update the `.env` file with your specific configuration:

```
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=uniso_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password

# JWT Configuration
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:3000
```

3. **Set up PostgreSQL database**

Make sure you have PostgreSQL installed and running. Create a database with the name specified in your `.env` file.

The application will create the necessary tables when it starts.

4. **Start the server**

```bash
# Development mode with hot-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication

- **POST** `/api/auth/signup` - Register a new user
  - Request body: 
  ```json
  {
    "email": "user@harvard.edu",
    "password": "securepassword",
    "firstName": "John",
    "lastName": "Doe",
    "university": "harvard",
    "department": "cs"
  }
  ```
  - Response: User object and JWT token

- **POST** `/api/auth/login` - Log in an existing user
  - Request body: 
  ```json
  {
    "email": "user@harvard.edu",
    "password": "securepassword"
  }
  ```
  - Response: User object and JWT token

- **GET** `/api/auth/me` - Get current user information
  - Headers: `Authorization: Bearer <token>`
  - Response: User object

### Health Check

- **GET** `/api/health` - Check API status
  - Response: `{ "status": "success", "message": "API is running" }`

## Frontend Integration

The backend is configured to accept requests from the Next.js frontend running on `http://localhost:3000`. 

### Frontend Code Sample

```javascript
// Example of login request from the frontend
const loginUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    // Store token in localStorage or cookies
    localStorage.setItem('token', data.data.token);
    
    return data.data.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
```

## Extending the API

To add new functionalities:

1. Create models for database queries in `/models`
2. Create controllers for business logic in `/controllers`
3. Create routes in `/routes`
4. Register new routes in `index.js` 