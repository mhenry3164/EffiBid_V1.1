import React from 'react';
import { Container } from '../ui/Container';

export function AboutHero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629818572083-3ceb38e34322?q=80&w=1674&auto=format&fit=crop"
          alt="Equipment operator working on site"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Built for Operators, by an Operator
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            EffiBid was created to help service business owners like you streamline their job estimation process with simplicity and precision.
          </p>
        </div>
      </Container>
    </div>
  );
}