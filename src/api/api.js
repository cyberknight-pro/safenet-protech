import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// 🚪 Authentication Endpoints
export const registerUser = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);

export const loginUser = (userData) => axios.post(`${API_BASE_URL}/auth/login`, userData);

export const fetchUserProfile = (token) =>
  axios.get(`${API_BASE_URL}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// 🔐 Password Manager Endpoints
export const createPassword = (passwordData, token) =>
  axios.post(`${API_BASE_URL}/passwords/create`, passwordData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getPasswords = (token) =>
  axios.get(`${API_BASE_URL}/passwords`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updatePassword = (passwordId, updatedData, token) =>
  axios.put(`${API_BASE_URL}/passwords/update/${passwordId}`, updatedData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deletePassword = (passwordId, token) =>
  axios.delete(`${API_BASE_URL}/passwords/delete/${passwordId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// 🎯 Protected Routes Example (Optional)
export const fetchProtectedData = (token) =>
  axios.get(`${API_BASE_URL}/protected/data`, {
    headers: { Authorization: `Bearer ${token}` },
  });
