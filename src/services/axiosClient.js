// src/utils/axiosClient.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const axiosClient = axios.create({
  // baseURL: "http://education.livoso.in/api",
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getDecodedToken = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded;
  } catch (error) {
    console.error("Invalid or expired token", error);
    return null;
  }
};

export const getUserRole = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.role;
  } catch (error) {
    console.error("Invalid or expired token", error);
    return null;
  }
};

export const getUserName = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.userName;
  } catch (error) {
    console.error("Invalid or expired token", error);
    return null;
  }
};
export const getUserId = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.id;
  } catch (error) {
    console.error("Invalid or expired token", error);
    return null;
  }
};

// Add token if available
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
