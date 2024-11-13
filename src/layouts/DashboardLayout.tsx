import React from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar onMenuClick={() => setSidebarOpen(true)} />
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}