import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering / Technology',
    institution: 'Alamuri Ratnamala Institute of Technology',
    date: 'Recent',
    description: 'Affiliated with the University of Mumbai.'
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Academic Background</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">Education</h3>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <GraduationCap className="text-primary w-8 h-8" />
            <h4 className="text-2xl font-bold font-heading">Academic Journey</h4>
          </div>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/80 p-8 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm"
              >
                <span className="text-sm font-medium text-primary mb-2 block">{item.date}</span>
                <h5 className="text-xl font-bold font-heading mb-1">{item.degree}</h5>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">{item.institution}</p>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
