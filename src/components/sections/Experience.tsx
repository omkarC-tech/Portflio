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
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-3">My Journey</h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold">Experience</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Glowing Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row items-start mb-16 last:mb-0 group">
              
              {/* Timeline Dot */}
              <div className="absolute left-[29px] md:left-1/2 w-4 h-4 rounded-full bg-[#0a192f] border-2 border-blue-400 md:-translate-x-1/2 mt-6 z-10 group-hover:bg-blue-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300" />

              {/* Date (Desktop left) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="hidden md:block w-1/2 pr-16 text-right pt-5"
              >
                <div className="flex items-center justify-end gap-3 text-cyan-200/70 font-semibold tracking-wide">
                  <span>{exp.date}</span>
                  <Calendar size={18} className="text-cyan-400" />
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-full md:w-1/2 pl-16 md:pl-16"
              >
                <div className="glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden group-hover:border-blue-400/30 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Mobile Date */}
                  <div className="flex md:hidden items-center gap-2 text-sm text-cyan-200/70 font-semibold mb-6">
                    <Calendar size={16} className="text-cyan-400" />
                    <span>{exp.date}</span>
                  </div>

                  <h4 className="text-2xl font-bold font-heading mb-3 text-white">{exp.role}</h4>
                  
                  <div className="flex items-center gap-2 text-blue-400 font-medium mb-6">
                    <Building2 size={18} />
                    <span>{exp.company}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 relative z-20">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-300 rounded-full backdrop-blur-sm group-hover:border-blue-400/30 transition-colors">
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
