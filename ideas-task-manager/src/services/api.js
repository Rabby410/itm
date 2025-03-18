import axios from 'axios';

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: '/api',
});

// Optionally, attach a token (if stored in localStorage) to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
