import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: string;
}

export function FeatureCard({ title, description, icon: Icon, highlight }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-x-4 mb-6">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {highlight && (
        <p className="text-indigo-600 font-medium">{highlight}</p>
      )}
    </div>
  );
}