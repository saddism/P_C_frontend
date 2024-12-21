import axios from 'axios';

const API_BASE_URL = 'https://auth-api-nvdempim.fly.dev';
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add request interceptor for debugging
apiClient.interceptors.request.use(
  config => {
    console.log('API Request:', {
      url: config.url,
      method: config.method,
      data: config.data,
      headers: config.headers
    });
    return config;
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
apiClient.interceptors.response.use(
  response => {
    console.log('API Response:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    });
    return response;
  },
  error => {
    console.error('API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

export const api = {
  async getProducts(useMock = false) {
    if (useMock) {
      return {
        data: {
          products: [
            {
              id: 1,
              name: 'Jetson Orin Nano Super Developer Kit',
              description: 'Most affordable generative AI supercomputer',
              tags: ['Robots', 'Hardware'],
              icon: '🤖',
              bp: '1234',
              prd: '4565'
            },
            {
              id: 2,
              name: 'PontaHR',
              description: 'Ditch the chaos, discover a better way to hire',
              tags: ['Hiring', 'SaaS', 'Human Resources'],
              icon: '😊',
              bp: '1234',
              prd: '4565'
            },
            {
              id: 3,
              name: 'Hercaress',
              description: 'Clover',
              tags: ['Couples', 'Inclusivity', 'Intimacy'],
              icon: 'H',
              bp: '1234',
              prd: '4565'
            },
            {
              id: 4,
              name: 'Amazon Project Amelia',
              description: 'A powerful new generative AI-based selling assistant',
              tags: ['Artificial Intelligence', 'E-Commerce'],
              icon: '📦',
              bp: '1234',
              prd: '4565'
            },
            {
              id: 5,
              name: 'Soothe',
              description: 'Anonymous app for kindness',
              tags: ['Anonymous', 'Health', 'Community'],
              icon: '😌',
              bp: '1234',
              prd: '4565'
            }
          ]
        }
      };
    }
    return axios.get(`${API_BASE_URL}/api/videos`);
  },

  async getTestimonials(useMock = false) {
    if (useMock) {
      return {
        data: {
          testimonials: [
            {
              id: 1,
              text: '这里是一段证言',
              name: 'Barry McCardel',
              title: 'CEO and co-founder at Hex'
            },
            {
              id: 2,
              text: '这里是一段证言',
              name: 'Barry McCardel',
              title: 'CEO and co-founder at Hex'
            },
            {
              id: 3,
              text: '这里是一段证言',
              name: 'Barry McCardel',
              title: 'CEO and co-founder at Hex'
            }
          ]
        }
      };
    }
    return axios.get(`${API_BASE_URL}/api/testimonials`);
  }
};

export const auth = {
  register: async (data, useMock = false) => {
    if (useMock) {
      console.log('Using mock data for registration:', data);
      return {
        data: {
          status: 201,
          message: '注册成功',
          data: {
            email: data.email,
            username: data.username
          }
        }
      };
    }
    try {
      console.log('Sending registration request:', data);
      const response = await apiClient.post('/api/auth/register', data);
      return response;
    } catch (error) {
      console.error('Registration error:', error.response?.data || error);
      throw error;
    }
  },
  verifyEmail: async (data, useMock = false) => {
    if (useMock) {
      console.log('Using mock data for email verification:', data);
      return {
        data: {
          status: 200,
          message: '邮箱验证成功'
        }
      };
    }
    try {
      const response = await apiClient.post('/api/auth/verify-email', data);
      console.log('Email verification response:', response);
      return response;
    } catch (error) {
      console.error('Email verification error:', error.response?.data || error);
      throw error;
    }
  },
  resendVerification: async (data, useMock = false) => {
    if (useMock) {
      return {
        data: {
          status: 200,
          message: '验证码已发送'
        }
      };
    }
    try {
      const response = await apiClient.post('/api/auth/resend-verification', data);
      console.log('Resend verification response:', response);
      return response;
    } catch (error) {
      console.error('Resend verification error:', error.response?.data || error);
      throw error;
    }
  }
};
