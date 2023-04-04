/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DB,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
http.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    const token = Cookies.get('access_token');
    const clonedConfig = { ...config };
    clonedConfig.headers['Content-Type'] = 'application/json';
    if (token) {
      clonedConfig.headers['Authorization'] = `Bearer ${token}`;
    }
    return clonedConfig;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response: AxiosResponse) {
    if (response) {
      return response;
    }
    return response;
  },
  function (error) {
    const statusCode = error?.message;
    if (statusCode === '404') {
      window.location.href = '/not-found';
      return;
    }
    if (statusCode === '401') {
      window.location.href = '/login';
      return;
    }

    if (statusCode === '403') {
      window.location.href = '/forbidden';
      return;
    }

    if (statusCode === '500') {
      // show notification
      console.log('error', error);
    }

    throw error;
  }
);

export default http;
