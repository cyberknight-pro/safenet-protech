import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

console.log("API Base URL =>", API_BASE_URL);




// Create instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptor to auto-attach token from localStorage/sessionStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or sessionStorage.getItem()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Now use `api` instead of `axios` directly
export const registerUser = (userData) => api.post(`/auth/register`, userData);
export const loginUser = (userData) => api.post(`/auth/login`, userData);
export const fetchUserProfile = () => api.get(`/auth/profile`);
export const createPassword = (passwordData) => api.post(`/passwords/create`, passwordData);
export const getPasswords = () => api.get(`/passwords`);
export const updatePassword = (passwordId, updatedData) => api.put(`/passwords/update/${passwordId}`, updatedData);
export const deletePassword = (passwordId) => api.delete(`/passwords/delete/${passwordId}`);
export const fetchProtectedData = () => api.get(`/protected/data`);

export default api;
