// src/services/axiosInstance.ts
import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Define a base URL and any other config options
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor to add authentication headers or any other custom behavior
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Optionally add token or any other authorization here
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle request errors
    return Promise.reject(error);
  },
);

// Response interceptor to handle responses and errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response here if needed
    return response;
  },
  (error: AxiosError) => {
    // Call custom error handler
    handleAxiosError(error);
    return Promise.reject(error);
  },
);

// Error handler for Axios errors
function handleAxiosError(error: AxiosError): void {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error('Error response:', error.response);
    switch (error.response.status) {
      case 400:
        console.error('Bad request.'); // Or show toast notification
        break;
      case 401:
        console.error('Unauthorized. Redirecting to login...');
        // Optionally redirect to login page
        break;
      case 403:
        console.error('Forbidden. You do not have permission.');
        break;
      case 404:
        console.error('Not found.');
        break;
      case 500:
        console.error('Server error.');
        break;
      default:
        console.error(`Unexpected error: ${error.response.status}`);
    }
  } else if (error.request) {
    // No response received from server
    console.error('No response received from server:', error.request);
  } else {
    // Error during setting up the request
    console.error('Error setting up request:', error.message);
  }
}

export default axiosInstance;
