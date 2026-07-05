import React from 'react';
import { FloatingNavbar } from './FloatingNavbar';
import { Footer } from './Footer';
import { LiquidBackground } from '../LiquidBackground';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <FloatingNavbar />

      {/* Optimized Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-slate-50 dark:bg-[#112240] transition-colors duration-500">
        <LiquidBackground />
      </div>

      <main className="w-full flex flex-col min-h-[100dvh] relative z-0">
        {children}
      </main>

      <Footer />
    </>
  );
};
