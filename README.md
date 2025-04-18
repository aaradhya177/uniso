# Uniso - University Social Platform

A full-stack application with a Next.js frontend and Express.js backend for connecting university students.

## Project Structure

The project consists of two main parts:

- `unisoo/` - Next.js frontend
- `backend/` - Express.js backend with PostgreSQL

## Prerequisites

- Node.js (v16 or higher)
- npm or pnpm
- PostgreSQL database server

## Backend Setup

### 1. Configure Environment Variables

```bash
cd backend
cp .env.example .env
```

Edit the `.env` file with your PostgreSQL credentials:

```
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=uniso_db
DB_USER=postgres     # Your PostgreSQL username
DB_PASSWORD=yourpassword  # Your PostgreSQL password

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration (Frontend URL)
FRONTEND_URL=http://localhost:3000
```

### 2. Create PostgreSQL Database

Create a database named `uniso_db` using pgAdmin or the PostgreSQL command line:

```sql
CREATE DATABASE uniso_db;
```

### 3. Install Dependencies

```bash
cd backend
npm install
```

### 4. Start the Backend Server

```bash
# Development mode with auto-reload
npm run dev

# OR Production mode
npm start
```

The backend will be available at `http://localhost:5000`. You can test it's running by visiting `http://localhost:5000/api/health`.

## Frontend Setup

### 1. Configure Environment Variables

```bash
cd unisoo
```

Create a `.env.local` file:

```
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 2. Install Dependencies

```bash
cd unisoo
npm install --legacy-peer-deps
```

We use `--legacy-peer-deps` because the project uses React 19, which has some dependency conflicts with other packages.

### 3. Start the Frontend Development Server

```bash
cd unisoo
npm run dev
```

The frontend will be available at `http://localhost:3000`.

## Running Both Together

To run both the frontend and backend simultaneously, open two terminal windows:

**Terminal 1 (Backend)**:
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend)**:
```bash
cd unisoo
npm run dev
```

## Using the Application

1. Visit `http://localhost:3000` in your browser
2. Register a new account on the signup page
3. Log in with your credentials
4. You'll be redirected to the dashboard upon successful authentication

## API Endpoints

### Authentication

- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Log in an existing user
- **GET** `/api/auth/me` - Get current user information (requires authentication)

### Health Check

- **GET** `/api/health` - Check API status

## Troubleshooting

### Frontend Dependency Issues

If you encounter package conflicts when installing frontend dependencies, try:

```bash
npm install --legacy-peer-deps
```

### Database Connection Issues

- Ensure PostgreSQL is running
- Verify your database credentials in the `.env` file
- Check that you've created the `uniso_db` database

### Authentication Issues

- Make sure the backend is running when attempting to log in
- Check that your `.env.local` file in the frontend has the correct API URL

## Development Notes

- The frontend uses Next.js 15 with React 19
- The backend uses Express.js with PostgreSQL
- Authentication is implemented using JWT tokens
- Always run both applications for full functionality