// src/naverApiService.js
import axios from 'axios';

const NAVER_CLIENT_ID = '3ivkb7jx6m';
const NAVER_CLIENT_SECRET = 'oBmfXHE3OJuxOvRWPBOMB1JVTfTEUbZFgXKlBM0m';

const getRestaurants = async (query, display = 5, start = 1) => {
  try {
    const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
      params: {
        query,
        display,
        start,
        sort: 'random',
      },
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};

export { getRestaurants };
