import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from '../../api/dashboard';
import { Container } from '../../components/ui/Container';
import { Building2, Users, FileText } from 'lucide-react';

export function Dashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: getDashboardStats
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-gray-600">Total Clients</p>
              <p className="text-2xl font-bold">{stats?.totalClients || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold">{stats?.totalCustomers || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-gray-600">Total Estimates</p>
              <p className="text-2xl font-bold">{stats?.totalEstimates || 0}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Estimates</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {stats?.recentEstimates?.map((estimate) => (
                <tr key={estimate.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{estimate.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{estimate.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${estimate.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(estimate.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}