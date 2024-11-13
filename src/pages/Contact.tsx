import React from 'react';
import { Container } from '../components/ui/Container';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden bg-gray-900 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584437071278-da9b1c4a19b0?q=80&w=1740&auto=format&fit=crop"
            alt="Equipment operator reviewing work orders"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We're here to help with your questions, requests, or feedback.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </div>
  );
}