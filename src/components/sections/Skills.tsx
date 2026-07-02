import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, BrainCircuit, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Python']
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose']
  },
  {
    title: 'AI/ML',
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Deep Learning', 'Neural Networks', 'Pandas', 'NumPy']
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ['Git/GitHub', 'Docker', 'AWS', 'Linux', 'VS Code', 'Postman']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">My Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">Technical Skills</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900 group-hover:bg-primary/10 transition-colors">
                  {category.icon}
                </div>
                <h4 className="font-heading font-bold text-lg">{category.title}</h4>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span className="font-medium text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
