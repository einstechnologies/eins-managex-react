import axios from "axios";

// Read API URL from runtime config.js
const API_URL = window.__APP_CONFIG__?.API_URL;

if (!API_URL) {
  throw new Error("API_URL is not defined in config.js");
}

// Create ONE shared axios instance
export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});