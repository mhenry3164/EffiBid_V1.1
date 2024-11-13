import React from 'react';
import { Button } from '../ui/Button';
import { Check, LucideIcon } from 'lucide-react';

interface PricingCardProps {
  name: string;
  description: string;
  price: number | string;
  features: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  icon: LucideIcon;
  isPopular?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function PricingCard({
  name,
  description,
  price,
  features,
  buttonText,
  buttonVariant,
  icon: Icon,
  isPopular,
  className = '',
  style,
}: PricingCardProps) {
  return (
    <div
      className={`relative card p-8 ${
        isPopular ? 'ring-2 ring-indigo-600' : ''
      } ${className}`}
      style={style}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-sm font-medium text-white">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <Icon className="h-12 w-12 text-indigo-600 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-x-2">
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          {typeof price === 'number' && (
            <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant={buttonVariant} className="w-full">
        {buttonText}
      </Button>
    </div>
  );
}