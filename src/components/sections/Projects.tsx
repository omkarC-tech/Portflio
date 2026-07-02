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
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">My Work</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">Featured Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                      <ExternalLink size={18} />
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
