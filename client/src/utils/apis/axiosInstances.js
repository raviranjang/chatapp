import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  }
})

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token")
  if(token) {
    config.headers = { ...config.headers, "auth-token": token }
  }
  return config;

}, function (error) {
    return Promise.reject(error);
})

export { axiosInstance }