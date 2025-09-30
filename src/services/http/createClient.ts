import axios from "axios";
import { getAuthHeader } from "./interceptors";

export const api = axios.create({
  baseURL: '/api', 
  withCredentials: true,
});

api.interceptors.request.use(
  (config: { headers: any; }) => {
    config.headers = {
      ...(config.headers || {}),
      ...getAuthHeader(),
    };
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
