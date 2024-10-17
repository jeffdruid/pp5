import axios from 'axios';

axios.defaults.baseURL = 'https://drf-api-jeff-00b8a22f06d7.herokuapp.com/';
axios.defaults.withCredentials = true;  // Ensure session cookies are sent with requests

// Retrieve CSRF token from cookies
const getCsrfToken = () => {
  const cookieValue = document.cookie.match('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)')?.pop() || '';
  return cookieValue;
};

// Add CSRF token to all requests if present
axios.interceptors.request.use((config) => {
  const token = getCsrfToken();
  if (token) {
    config.headers['X-CSRFToken'] = token;
  }
  return config;
}, (error) => Promise.reject(error));

export const axiosReq = axios.create();
export const axiosRes = axios.create();
