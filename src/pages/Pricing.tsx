import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Check, FileSpreadsheet, Package, Shield } from 'lucide-react';
import { PricingToggle } from '../components/pricing/PricingToggle';
import { PricingCard } from '../components/pricing/PricingCard';
import { FAQ } from '../components/pricing/FAQ';

const features = [
  'AI-powered estimation accuracy up to 98%',
  'Comprehensive client and estimate management tools',
  'Seamless team collaboration features',
  'Custom reporting and template library',
  'Enterprise-grade security and compliance',
];

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'Start your free trial with full access to all Professional plan features. No credit card required. At the end of the trial, choose the plan that best fits your needs.',
  },
  {
    question: 'Can I switch plans after signing up?',
    answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'Is my data secure?',
    answer: 'We employ industry-leading security measures, including end-to-end encryption and regular security audits, to protect your data.',
  },
  {
    question: 'Do you offer support for annual billing?',
    answer: 'Yes, we offer a 20% discount for annual billing on all plans. Switch to annual billing at any time to save.',
  },
  {
    question: 'Can Enterprise customers request custom features?',
    answer: 'Absolutely! Enterprise plans include custom feature development and dedicated support for your specific needs.',
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'Get started with AI-driven estimation',
      price: isAnnual ? 79 : 99,
      icon: FileSpreadsheet,
      features: [
        'AI-powered estimation tools',
        'Basic project analytics',
        'Up to 40 projects per month',
        'Standard templates',
        'Basic client management tools',
        'Email support',
        'Single user license',
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'secondary' as const,
    },
    {
      name: 'Professional',
      description: 'The complete estimation toolkit',
      price: isAnnual ? 159 : 199,
      icon: Package,
      features: [
        'Everything in Basic, plus:',
        'Advanced AI estimations',
        'Unlimited projects',
        'Customizable templates and reports',
        'Full project and client management',
        'Priority email and chat support',
        'Up to 5 user licenses',
        'Integrated knowledge base',
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'primary' as const,
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'Customized solutions for large organizations',
      price: 'Custom',
      icon: Shield,
      features: [
        'Everything in Professional, plus:',
        'Custom AI model training',
        'Enterprise-grade analytics',
        'Dedicated account manager',
        'Custom integrations and workflows',
        'Onboarding and training',
        'Unlimited user licenses',
        'On-premise deployment options',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary' as const,
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Flexible Plans for Every Business
          </h1>
          <p className="text-xl text-gray-600">
            Select the plan that fits your needs and budget.
          </p>
          <div className="mt-8">
            <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              {...plan}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose EffiBuild Pro?</h2>
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Check className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <FAQ items={faqs} />

        <div className="text-center max-w-3xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-4">
            Ready to transform your estimation process?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your 14-day free trial today. No credit card required.
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