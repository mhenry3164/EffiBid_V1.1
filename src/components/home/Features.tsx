import React from 'react';
import { Container } from '../ui/Container';
import { Brain, Clock, FileText, Zap } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Accuracy',
    description: 'Our intelligent system learns from your business to provide increasingly accurate estimates.',
    icon: Brain,
  },
  {
    name: 'Lightning Fast Quotes',
    description: 'Generate professional quotes in minutes, not hours. Save time and win more business.',
    icon: Zap,
  },
  {
    name: 'Smart Time Tracking',
    description: 'Automatically calculate labor costs based on your historical job data and current rates.',
    icon: Clock,
  },
  {
    name: 'Professional PDFs',
    description: 'Instantly generate branded, detailed quotes that you can send directly to clients.',
    icon: FileText,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center animate-fade-in">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Faster Estimates</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to streamline your estimating process
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stop spending hours on estimates. Our AI-powered platform helps you create accurate quotes in minutes.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="card p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="feature-icon" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}