import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (payload) => api.post('/auth/login', payload).then((res) => res.data);
export const register = (payload) => api.post('/auth/register', payload);
export const fetchProfiles = (token) =>
  api.get('/api/profile', { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
export const checkAdmin = (token) =>
  api.get('/api/admin', { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data);
