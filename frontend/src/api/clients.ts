import api from './axios';
import { Client } from '../types';

export const getClients = async (): Promise<Client[]> => {
  const { data } = await api.get('/clients');
  return data;
};

export const createClient = async (client: Omit<Client, 'id'>): Promise<Client> => {
  const { data } = await api.post('/clients', client);
  return data;
};

export const updateClient = async (id: string, client: Partial<Client>): Promise<Client> => {
  const { data } = await api.put(`/clients/${id}`, client);
  return data;
};

export const deleteClient = async (id: string): Promise<void> => {
  await api.delete(`/clients/${id}`);
};