import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';

import cvFile from '../../assets/Omkar_Chandra_CV.pdf';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient background and particles can go here */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
          >
            Available for new opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Omkar Chandra</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium mb-8 h-[40px]"
          >
            <TypeAnimation
              sequence={[
                'Full Stack MERN Developer',
                2000,
                'AI/ML Engineer',
                2000,
                'Creative Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-10"
          >
            Building premium, scalable web applications and intelligent systems that solve real-world problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={cvFile} download="Omkar_Chandra_CV.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-full font-medium transition-all hover:-translate-y-1">
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
