import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { ClientSelect } from '../../components/customers/ClientSelect';
import { CustomerModal } from '../../components/customers/CustomerModal';
import { DeleteConfirmationModal } from '../../components/shared/DeleteConfirmationModal';
import { fetchCustomersByClient, deleteCustomer } from '../../api/customers';
import { Customer } from '../../types';

export function Customers() {
  const [selectedClientId, setSelectedClientId] = useState<string>('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [deletingCustomer, setDeletingCustomer] = useState<Customer | null>(null);
  
  const queryClient = useQueryClient();
  const { data: customers, isLoading } = useQuery(
    ['customers', selectedClientId],
    () => selectedClientId ? fetchCustomersByClient(selectedClientId) : Promise.resolve([]),
    { enabled: !!selectedClientId }
  );

  const deleteMutation = useMutation(deleteCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['customers', selectedClientId]);
      setDeletingCustomer(null);
    },
  });

  const handleEdit = (customer: Customer) => {
    setEditingCustomer(customer);
    setIsAddModalOpen(true);
  };

  const handleDelete = (customer: Customer) => {
    setDeletingCustomer(customer);
  };

  const confirmDelete = async () => {
    if (deletingCustomer) {
      await deleteMutation.mutateAsync(deletingCustomer.id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
        <Button
          onClick={() => setIsAddModalOpen(true)}
          disabled={!selectedClientId}
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Customer
        </Button>
      </div>

      <div className="max-w-xs">
        <ClientSelect
          value={selectedClientId}
          onChange={setSelectedClientId}
        />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {!selectedClientId ? (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                    Please select a client to view their customers.
                  </td>
                </tr>
              ) : isLoading ? (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center">
                    <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                  </td>
                </tr>
              ) : customers?.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                    No customers found. Add your first customer to get started.
                  </td>
                </tr>
              ) : (
                customers?.map((customer) => (
                  <tr
                    key={customer.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {customer.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {customer.contact}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleEdit(customer)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleDelete(customer)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <CustomerModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingCustomer(null);
        }}
        customer={editingCustomer}
        clientId={selectedClientId}
      />

      <DeleteConfirmationModal
        isOpen={!!deletingCustomer}
        onClose={() => setDeletingCustomer(null)}
        onConfirm={confirmDelete}
        title="Delete Customer"
        message="Are you sure you want to delete this customer? This action cannot be undone."
        isDeleting={deleteMutation.isLoading}
      />
    </div>
  );
}