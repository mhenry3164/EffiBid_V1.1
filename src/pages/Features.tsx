import React from 'react';
import { Container } from '../components/ui/Container';
import { FeatureCard } from '../components/features/FeatureCard';
import { FeatureHero } from '../components/features/FeatureHero';
import { 
  Brain, 
  MessageSquare, 
  Users, 
  BarChart3, 
  FileText, 
  Shield, 
  Clock, 
  Settings 
} from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Estimations',
    description: 'Harness the precision of AI to generate accurate construction estimates in minutes.',
    icon: Brain,
    highlight: 'Cut estimation time by 70%'
  },
  {
    title: 'Smart Project Assistant',
    description: 'Receive instant insights and recommendations from our AI assistant, tailored to your project needs.',
    icon: MessageSquare,
    highlight: 'Expert guidance 24/7'
  },
  {
    title: 'Client Relationship Management',
    description: 'Organize and strengthen client relationships with centralized management tools.',
    icon: Users,
    highlight: 'Enhanced client satisfaction'
  },
  {
    title: 'Comprehensive Project Analytics',
    description: 'Leverage data insights to track performance and make informed business decisions.',
    icon: BarChart3,
    highlight: 'Data-driven project success'
  },
  {
    title: 'Professional PDF Generation',
    description: 'Create polished, branded estimates and proposals with just a few clicks.',
    icon: FileText,
    highlight: 'Customizable templates'
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Rest easy knowing your data is protected by industry-leading security measures.',
    icon: Shield,
    highlight: 'SOC 2 Type II Compliant'
  },
  {
    title: 'Real-Time Updates',
    description: 'Stay on top of project changes and updates with instant notifications.',
    icon: Clock,
    highlight: 'Never miss a deadline'
  },
  {
    title: 'Custom Workflows',
    description: 'Configure the platform to match your specific business processes and requirements.',
    icon: Settings,
    highlight: 'Fully customizable'
  }
];

export function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FeatureHero />
      
      <Container className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              highlight={feature.highlight}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}