import React from 'react';
import { Container } from '../ui/Container';

export function FeatureHero() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Everything You Need to Excel in Construction Estimation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our platform integrates AI innovation with industry insights to streamline your entire workflow.
          </p>
        </div>
      </Container>
    </div>
  );
}