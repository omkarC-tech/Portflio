import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const FloatingNavbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'w-[90%] md:w-[70%] max-w-5xl rounded-full shadow-lg shadow-blue-500/10 border border-blue-500/20 bg-[#112240]/80 backdrop-blur-md px-6 py-3' 
            : 'w-full px-6 py-6 bg-transparent'
        } ${isScrolled ? 'top-4 md:top-6' : 'top-0'} flex items-center justify-between`}
      >
        <Link 
          to="/" 
          className="text-2xl font-bold font-heading tracking-tighter text-white"
        >
          OC<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => `px-4 py-2 rounded-full text-sm font-medium transition-colors relative ${
                isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-cyan-400/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 ml-4 rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-50 md:hidden bg-[#112240]/95 backdrop-blur-xl border-b border-blue-500/20 shadow-xl"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => `p-4 rounded-xl text-center font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-400/10 text-cyan-400'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
