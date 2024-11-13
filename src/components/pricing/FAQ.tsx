import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="card overflow-hidden hover:shadow-lg transition-all duration-200"
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`px-6 transition-all duration-200 ${
                openIndex === index ? 'pb-6 max-h-40' : 'max-h-0'
              } overflow-hidden`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}