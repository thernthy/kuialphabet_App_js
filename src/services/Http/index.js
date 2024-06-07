import axios from "axios";

// Create an axios instance with the base URL
const HttpClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASED_URL}api/admin/`  // Set the base URL to the provided endpoint
});

// Add a request interceptor to include the API key in the headers
HttpClient.interceptors.request.use(
  (config) => {
    config.headers['api_key'] = '$2y$10$7WvBGNDjnaXVj6lVN./AguQjkLHoSO3.nMR1Rxvdi8iiRWaa9sP9K';  // Include the API key in the headers
    return config;
  },
  (error) => {
    return Promise.reject(error);  // Handle request error
  }
);


export default HttpClient