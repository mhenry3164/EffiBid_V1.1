import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function CallToAction() {
  return (
    <div className="bg-indigo-50 py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to transform your estimation process?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join other service business owners who are streamlining their operations with EffiBid.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="secondary" size="lg">Contact Sales</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}