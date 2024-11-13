export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  role: 'admin' | 'user';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface Client {
  id: string;
  name: string;
  contact: string;
  userId: string;
}

export interface Customer {
  id: string;
  name: string;
  contact: string;
  clientId: string;
}

export interface Estimate {
  id: string;
  jobScope: string;
  materials: string[];
  laborHours: number;
  totalCost: number;
  customerId: string;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
  customer?: Customer;
}