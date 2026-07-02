import React from 'react';
import { FloatingNavbar } from './FloatingNavbar';
import { CustomCursor } from '../ui/CustomCursor';
import { ScrollProgress } from '../ui/ScrollProgress';
import { ThemeProvider } from '../../context/ThemeContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollProgress />
      <FloatingNavbar />
      
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
      </div>
      
      <main className="w-full flex flex-col min-h-screen">
        {children}
      </main>
    </ThemeProvider>
  );
};
