import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Publications</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">Research Work</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 md:p-[2px] overflow-hidden group shadow-2xl">
            {/* Animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50 group-hover:opacity-100 transition-opacity animate-gradient-xy" />
            
            <div className="relative bg-white dark:bg-gray-900 rounded-[22px] md:rounded-[30px] p-8 md:p-12 h-full">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <BookOpen size={32} />
                </div>

                <div className="flex-grow">
                  <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                    IEEE ACROSET 2026
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold font-heading mb-4 leading-tight">
                    Kavach: An Adaptive Hybrid Deep Learning Model for Real-Time DDoS Detection and Active Network Defense
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                    This paper presents a novel approach to cybersecurity using adaptive hybrid deep learning. Kavach significantly improves the real-time detection of Distributed Denial of Service (DDoS) attacks and implements active network defense mechanisms, showcasing the powerful intersection of AI and network security.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <Zap className="text-accent" size={20} />
                      <span className="font-medium">Real-time Detection</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <ShieldCheck className="text-primary" size={20} />
                      <span className="font-medium">Active Defense</span>
                    </div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-1">
                    Read Publication
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
