import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1671022406737-c51dfa332edf?q=80&w=1740&auto=format&fit=crop"
          alt="Compact excavator on residential job site"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <Building2 className="h-16 w-16 text-indigo-500" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            AI-Powered Estimates for Service Businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Transform your estimation process with intelligent, accurate quotes in minutes. Perfect for earthmoving, grading, and equipment services.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asLink to="/register" size="lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asLink to="/demo" variant="outline" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}