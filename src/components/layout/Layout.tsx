import React, { useEffect, useRef } from 'react';
import { FloatingNavbar } from './FloatingNavbar';
import { Footer } from './Footer';
import { CustomCursor } from '../ui/CustomCursor';
import { ScrollProgress } from '../ui/ScrollProgress';
import { ThemeProvider } from '../../context/ThemeContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(6, 182, 212, 0.08), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollProgress />
      <FloatingNavbar />
      
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50 dark:bg-[#112240] overflow-hidden transition-colors duration-500">
        
        {/* Interactive Spotlight Effect */}
        <div 
          ref={spotlightRef}
          className="absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at 50% 50%, rgba(6, 182, 212, 0.08), transparent 80%)`
          }}
        />

        {/* Water Ripple Effect (Restored & Smoothed) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[1000px] md:h-[1000px] pointer-events-none opacity-30 mix-blend-screen z-0">
          <div className="absolute inset-0 rounded-full border-cyan-400 animate-ripple" />
          <div className="absolute inset-0 rounded-full border-blue-400 animate-ripple" style={{ animationDelay: '5s' }} />
          <div className="absolute inset-0 rounded-full border-cyan-300 animate-ripple" style={{ animationDelay: '10s' }} />
        </div>

        {/* Subtle noise texture (Optimized: mix-blend-mode removed, just opacity) */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Cloudy ambient orbs (Charcoal/Grey shade - 20% presence) */}
        <div className="absolute top-[-10%] left-[-5%] w-[35vw] h-[35vw] rounded-full bg-slate-400/5 blur-[120px] animate-float mix-blend-screen z-0" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gray-500/5 blur-[120px] animate-float mix-blend-screen z-0" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[35%] left-[65%] w-[30vw] h-[30vw] rounded-full bg-zinc-400/5 blur-[100px] animate-float mix-blend-screen z-0" style={{ animationDelay: '1s' }} />
      </div>
      
      <main className="w-full flex flex-col min-h-screen relative z-0">
        {children}
      </main>
      
      <Footer />
    </ThemeProvider>
  );
};
