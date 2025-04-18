/**
 * API Utility for making requests to the backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Make a request to the API
 * @param {string} endpoint - The API endpoint
 * @param {Object} options - Request options
 * @returns {Promise<Object>} The response data
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Default options
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If there's a token in localStorage, add it to the headers
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      defaultOptions.headers.Authorization = `Bearer ${token}`;
    }
  }

  // Merge default options with provided options
  const fetchOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    console.log(`Making API request to: ${url}`);
    const response = await fetch(url, fetchOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'An error occurred');
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Authentication related API calls
 */
export const authApi = {
  /**
   * Login user
   * @param {Object} credentials - User credentials
   * @returns {Promise<Object>} The user data and token
   */
  login: async (credentials) => {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    // Store token in localStorage
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response;
  },

  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @returns {Promise<Object>} The user data and token
   */
  signup: async (userData) => {
    const response = await apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    // Store token in localStorage
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return response;
  },

  /**
   * Get current user data
   * @returns {Promise<Object>} The user data
   */
  getCurrentUser: async () => {
    return apiRequest('/auth/me', {
      method: 'GET',
    });
  },

  /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem('token');
  },
};

/**
 * Check if user is authenticated client-side
 * @returns {boolean} True if authenticated, false otherwise
 */
export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('token');
}

export default {
  authApi,
  isAuthenticated,
}; 