import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDashboardStats = async () => {
  const token = localStorage.getItem('token');
  const { data } = await api.get('/dashboard/stats', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};