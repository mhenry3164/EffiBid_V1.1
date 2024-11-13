import React from 'react';
import { Container } from '../ui/Container';
import { Users, Award, Clock, Wrench } from 'lucide-react';

const stats = [
  { label: 'Customers', value: '500+', icon: Users },
  { label: 'Years Experience', value: '15+', icon: Clock },
  { label: 'Projects Completed', value: '10,000+', icon: Wrench },
  { label: 'Industry Awards', value: '25+', icon: Award },
];

export function Stats() {
  return (
    <div className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 mb-4">
                <stat.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}