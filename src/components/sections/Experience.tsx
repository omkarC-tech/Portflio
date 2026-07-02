import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Full Stack MERN Developer Intern',
    company: 'Technewity Labs',
    date: 'Date Range (Please Provide)',
    description: 'Contributed to the development of web applications using MongoDB, Express.js, React, and Node.js. Collaborated with the team to implement new features, optimize performance, and ensure a seamless user experience.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">My Journey</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">Experience</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row items-start mb-12 last:mb-0">
              
              {/* Timeline Dot */}
              <div className="absolute left-[29px] md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-gray-900 md:-translate-x-1/2 mt-6 z-10" />

              {/* Date (Desktop left) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="hidden md:block w-1/2 pr-12 text-right pt-5"
              >
                <div className="flex items-center justify-end gap-2 text-gray-500 dark:text-gray-400 font-medium">
                  <Calendar size={18} />
                  <span>{exp.date}</span>
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full md:w-1/2 pl-16 md:pl-12"
              >
                <div className="bg-white dark:bg-gray-800/80 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Mobile Date */}
                  <div className="flex md:hidden items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>

                  <h4 className="text-xl font-bold font-heading mb-2">{exp.role}</h4>
                  
                  <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <Building2 size={18} />
                    <span>{exp.company}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
