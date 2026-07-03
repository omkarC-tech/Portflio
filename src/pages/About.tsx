import React from 'react';
import { About as AboutSection } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';

export const About: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24">
      <AboutSection />
      <Experience />
      <Education />
    </div>
  );
};
