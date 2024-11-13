import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Menu, Bell, User } from 'lucide-react';
import { Button } from '../ui/Button';

interface DashboardNavbarProps {
  onMenuClick: () => void;
}

export function DashboardNavbar({ onMenuClick }: DashboardNavbarProps) {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button
              type="button"
              className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center">
              <Link to="/dashboard" className="text-2xl font-bold text-indigo-600">
                EffiBid
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  {user?.name}
                </span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => logout()}
                >
                  <User className="h-5 w-5 mr-2" />
                  Sign out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}