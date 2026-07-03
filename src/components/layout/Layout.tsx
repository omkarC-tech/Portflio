import React from 'react';
import { FloatingNavbar } from './FloatingNavbar';
import { Footer } from './Footer';
import { CustomCursor } from '../ui/CustomCursor';
import { ScrollProgress } from '../ui/ScrollProgress';
import { ThemeProvider } from '../../context/ThemeContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollProgress />
      <FloatingNavbar />
      
      {/* Animated Navy Blue Background Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#112240] overflow-hidden">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Water Ripple Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20 mix-blend-screen">
          <div className="absolute inset-0 rounded-full border-[2px] border-cyan-400 animate-ripple" />
          <div className="absolute inset-0 rounded-full border-[2px] border-blue-400 animate-ripple" style={{ animationDelay: '1.33s' }} />
          <div className="absolute inset-0 rounded-full border-[2px] border-blue-400 animate-ripple" style={{ animationDelay: '2.66s' }} />
        </div>
        
        {/* Moving glowing orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[120px] animate-float mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[150px] animate-float mix-blend-screen" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-blue-600/5 blur-[100px] animate-float mix-blend-screen" style={{ animationDelay: '1s' }} />
      </div>
      
      <main className="w-full flex flex-col min-h-screen relative z-0">
        {children}
      </main>
      
      <Footer />
    </ThemeProvider>
  );
};
