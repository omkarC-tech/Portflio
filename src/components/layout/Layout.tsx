import React from 'react';
import { FloatingNavbar } from './FloatingNavbar';
import { Footer } from './Footer';
import { WaterRipple } from '../ui/WaterRipple';
import { ThemeProvider } from '../../context/ThemeContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <FloatingNavbar />

      {/* Optimized Background - Removed heavy blurs and mix-blend-modes */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50 dark:bg-[#112240] transition-colors duration-500">
        <WaterRipple />
      </div>

      <main className="w-full flex flex-col min-h-[100dvh] relative z-0">
        {children}
      </main>

      <Footer />
    </ThemeProvider>
  );
};
