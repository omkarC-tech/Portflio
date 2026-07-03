import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from '../ui/Icons';

const projects = [
  {
    title: 'ACCU DESIGN',
    description: 'A premium platform for design solutions, offering high-quality resources and tools for modern web creators.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: '#',
    live: 'https://www.accudesign.in/',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'OwnFresh',
    description: 'An innovative e-commerce application designed to connect local farmers with consumers, ensuring fresh produce delivery.',
    tech: ['MERN Stack', 'Redux', 'Stripe', 'Express'],
    github: '#',
    live: 'https://frontend-ownfresh.onrender.com/',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Kavach (Project)',
    description: 'An Adaptive Hybrid Deep Learning Model for Real-Time DDoS Detection and Active Network Defense. Implementing advanced ML algorithms for cybersecurity.',
    tech: ['Python', 'TensorFlow', 'Scikit-Learn', 'Deep Learning'],
    github: '#',
    live: null,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'LivePolling',
    description: 'A real-time interactive polling application allowing users to create, share, and vote on polls instantly with live updates.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-3">Selected Work</h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold">Featured Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass-card rounded-[2rem] overflow-hidden flex flex-col relative"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 overflow-hidden w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent z-10 opacity-80" />
                <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[0.33,1,0.68,1]"
                />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-20 -mt-20">
                <h4 className="text-3xl font-bold font-heading mb-4 text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-cyan-100 rounded-full backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                      <Github size={20} className="group-hover/link:text-blue-400 transition-colors" />
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link">
                      <ExternalLink size={20} className="group-hover/link:text-cyan-400 transition-colors" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
