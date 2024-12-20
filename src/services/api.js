import axios from 'axios';

const API_BASE_URL = 'https://auth-api-nvdempim.fly.dev';

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
