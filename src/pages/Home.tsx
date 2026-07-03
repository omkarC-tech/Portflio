import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';

export const Home: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};
