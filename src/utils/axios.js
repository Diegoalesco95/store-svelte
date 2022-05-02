import axios from 'axios';


const apiUrl = process?.env.API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
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


export const post = async (url, data, displayMsg, config = null) => {
  try {
    const response = await axiosInstance.post(url, data, config)
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