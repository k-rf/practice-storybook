import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '~/configs';

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  // Todo: set token
  return config;
};

export const axios = Axios.create({ baseURL: API_URL });

// https://github.com/axios/axios#interceptors
axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // const message = error.response?.data?.message || error.message;
    // Todo: notice error
    return Promise.reject(error);
  }
);
