import axios from 'axios';

const BASE_URL = 'https://auth-api-nvdempim.fly.dev';

export const isMockMode = () => {
  return new URLSearchParams(window.location.search).get('mock') === '1';
};

export const api = axios.create({
  baseURL: isMockMode() ? '' : BASE_URL
});

// Add response interceptor to handle common error cases
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', {
        url: error.config.url,
        method: error.config.method,
        status: error.response.status,
        data: error.response.data
      });
      return Promise.reject(error);
    }
    console.error('Network Error:', error);
    return Promise.reject(new Error('网络错误，请稍后重试'));
  }
);
