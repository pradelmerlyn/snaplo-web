import axios from "axios";

export const customAxios = axios.create({
  baseURL: process.env.API_URL, 
  withCredentials: true,
});

customAxios.interceptors.request.use(
  (config: { headers: any; }) => {
    config.headers = {
      ...(config.headers || {}),
    };
    return config;
  },
  (error) => Promise.reject(error)
);

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;