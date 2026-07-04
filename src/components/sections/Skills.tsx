import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, BrainCircuit, Terminal, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    description: "Building responsive, accessible, and highly interactive user interfaces.",
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-6 h-6 text-blue-400" />,
    description: "Architecting scalable and secure server-side applications.",
    skills: ['Node.js', 'Express.js', 'GraphQL', 'Python'],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="w-6 h-6 text-pink-400" />,
    description: "Developing intelligent models and data-driven solutions.",
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Deep Learning'],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    description: "Designing optimized schemas and managing data flow.",
    skills: ['MongoDB', 'PostgreSQL'],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1"
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    description: "Automating deployments and managing infrastructure.",
    skills: ['Git & GitHub', 'Docker', 'AWS'],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1"
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Code2 className="text-cyan-400 w-6 h-6" />
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em]">Technical Arsenal</h2>
          </div>
          <h3 className="text-5xl md:text-6xl font-heading font-bold text-white">Skills & Expertise</h3>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              className={`${category.colSpan} will-change-transform`}
            >
              <div className="h-full">
                <div className="glass-card h-full p-8 rounded-[2rem] border-white/5 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group relative overflow-hidden cursor-pointer">
                  {/* Background Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-colors duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-white font-heading">{category.title}</h4>
                    </div>

                    <p className="text-gray-400 text-sm mb-8">{category.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 text-gray-200 rounded-full group-hover:border-cyan-400/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
