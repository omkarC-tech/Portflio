import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Code2, Award, Briefcase, MapPin } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 2, icon: <Briefcase className="w-6 h-6 text-primary" />, suffix: '+' },
  { label: 'Completed Projects', value: 4, icon: <Code2 className="w-6 h-6 text-primary" />, suffix: '+' },
  { label: 'Research Papers', value: 1, icon: <Award className="w-6 h-6 text-primary" /> },
  { label: 'Tech Stack', value: 4, icon: <User className="w-6 h-6 text-primary" />, suffix: ' (MERN)' },
];

const AnimatedCounter = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl font-bold text-gray-900 dark:text-white font-heading">
      {count}{suffix}
    </span>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 will-change-transform"
        >
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">Bridging Logic & Design</h3>
        </motion.div>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full text-center md:text-left will-change-transform"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a passionate Full Stack MERN Developer and AI/ML Engineer dedicated to building exceptional digital experiences. With a strong foundation in modern web technologies and a keen interest in artificial intelligence, I strive to create solutions that are both beautiful and functionally robust.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              My journey involves not just writing code, but solving complex problems through research and innovation. From crafting intuitive user interfaces to developing adaptive deep learning models for network security, I am constantly exploring the intersection of web development and AI.
            </p>

            {/* Location Badge */}
            <div className="flex items-center justify-center md:justify-start mb-10">
              <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 font-medium bg-cyan-50 dark:bg-cyan-500/10 px-5 py-3 rounded-2xl border border-cyan-100 dark:border-cyan-500/20 shadow-sm">
                <MapPin className="w-6 h-6 animate-bounce" />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold">Mumbai, Maharashtra</span>
                  <span className="text-xs text-cyan-600/80 dark:text-cyan-400/80">Goregaon West</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 cursor-pointer transition-all duration-300 group will-change-transform"
                >
                  <div className="mb-4 p-3 inline-block rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
