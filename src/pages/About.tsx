import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { FounderStory } from '../components/about/FounderStory';
import { Stats } from '../components/about/Stats';
import { Testimonials } from '../components/about/Testimonials';
import { CallToAction } from '../components/about/CallToAction';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <FounderStory />
      <Stats />
      <Testimonials />
      <CallToAction />
    </div>
  );
}