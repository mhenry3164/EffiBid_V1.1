import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function FounderStory() {
  return (
    <Container className="py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey Begins in the Field</h2>
          <p className="text-lg text-gray-600 mb-6">
            EffiBid is the result of years of experience in equipment sales and working hands-on with machinery. Growing up running equipment on our farm and doing side projects for clients, we understood the challenges service business owners face in creating professional, effective quotes while managing their time in the field.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We built EffiBid to bridge that gap, offering a simple yet powerful tool to help businesses streamline quoting and keep track of customer relationships, all while maintaining the personal touch that makes your service business special.
          </p>
          <Button size="lg">Learn More About Our Mission</Button>
        </div>
        <div className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-xl animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1690337086141-dd6b04c7f94a?q=80&w=1740&auto=format&fit=crop"
            alt="Compact excavator working on a residential project"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}