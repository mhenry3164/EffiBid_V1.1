import React from 'react';
import { Container } from '../ui/Container';

const testimonials = [
  {
    quote: "EffiBid understands exactly what we need. It's like it was built specifically for our excavation business.",
    author: "Mike Johnson",
    role: "Owner, Johnson Excavating",
    image: "https://images.unsplash.com/photo-1603816886044-0576ff25845a?q=80&w=1587&auto=format&fit=crop"
  },
  {
    quote: "The time we save on quotes means more time operating equipment and serving customers. It's been a game-changer.",
    author: "Sarah Martinez",
    role: "Operations Manager, Martinez Equipment Services",
    image: "https://images.unsplash.com/photo-1584437071278-da9b1c4a19b0?q=80&w=1740&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <Container className="py-24">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Trusted by Industry Experts
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
            <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
          </div>
        ))}
      </div>
    </Container>
  );
}