import axios from 'axios';
import URL from '../strapi/URL';

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url, params, displayMsg) => {
  try {
    const response = await axiosInstance.get(url, { params })
    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
      displayMsg: displayMsg || error.message,
    }
  }
};


export const post = async (url, data, displayMsg) => {
  try {
    const response = await axiosInstance.post(url, data)
    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: {
        message: error.message,
        displayMsg: displayMsg || error.message,
      }
    }
  }
};