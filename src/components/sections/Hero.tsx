import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

import cvFile from '../../assets/Omkar_Chandra_CV.pdf';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-gray-300 font-medium text-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Massive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-6xl md:text-8xl lg:text-[140px] font-bold font-heading mb-4 tracking-tighter leading-none"
          >
            Omkar Chandra
          </motion.h1>

          {/* Typing Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-xl md:text-3xl text-gray-400 font-medium mb-10 h-[40px] tracking-wide"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'AI/ML Engineer',
                2000,
                'Creative Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
          >
            Building premium, scalable web applications and intelligent systems that solve real-world problems. Elevating digital experiences through code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link to="/projects" className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold transition-all hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <a href={cvFile} download="Omkar_Chandra_CV.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 px-8 py-4 glass text-white border border-white/20 hover:bg-white/10 rounded-full font-medium transition-all hover:scale-105 backdrop-blur-md">
              <Download size={18} className="text-gray-300 group-hover:text-white transition-colors" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
