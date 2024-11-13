import api from './axios';
import { User, LoginCredentials } from '../types';

export const login = async (credentials: LoginCredentials): Promise<User> => {
  try {
    const { data } = await api.post('/auth/login', credentials);
    
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return data.user;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};