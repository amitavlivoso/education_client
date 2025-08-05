// src/utils/axiosClient.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://livoso.in/education/education-backend/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token if available
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;


