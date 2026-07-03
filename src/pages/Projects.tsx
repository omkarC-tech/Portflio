import React from 'react';
import { Projects as ProjectsSection } from '../components/sections/Projects';
import { Research } from '../components/sections/Research';
import { Skills } from '../components/sections/Skills';

export const Projects: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24">
      <ProjectsSection />
      <Research />
      <Skills />
    </div>
  );
};
