import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#112240]/50 backdrop-blur-lg mt-auto overflow-hidden">
      {/* Footer Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="container mx-auto px-6 py-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand & Intro */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-heading font-black tracking-tighter text-white flex items-center gap-2 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Prtfl.
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting premium digital experiences through elegant code and dynamic design.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 transition-all duration-300 group">
                <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 text-gray-300 hover:text-blue-400 transition-all duration-300 group">
                <FaLinkedinIn size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 text-gray-300 hover:text-blue-400 transition-all duration-300 group">
                <FaTwitter size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About & Experience</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-white font-heading font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm group">
                <Mail size={16} className="text-blue-400/70 group-hover:text-blue-400" />
                <span>omkarchandra206@gmail.com</span>
              </a>
              <p className="text-gray-400 text-sm mt-4 italic">
                Currently open for new opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
