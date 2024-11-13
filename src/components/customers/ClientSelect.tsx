import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchClients } from '../../api/clients';

interface ClientSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function ClientSelect({ value, onChange }: ClientSelectProps) {
  const { data: clients, isLoading } = useQuery(['clients'], fetchClients);

  return (
    <div>
      <label
        htmlFor="client"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Select Client
      </label>
      <select
        id="client"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        disabled={isLoading}
      >
        <option value="">Select a client...</option>
        {clients?.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>
    </div>
  );
}