import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 2) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 1000); // Wait 1 second per step
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // Wait 1 second on final step before hiding
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a192f] text-white"
        >
          <div className="flex flex-col items-center justify-center text-3xl md:text-5xl font-heading font-bold overflow-hidden text-center h-40">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-3"
                >
                  <span className="text-cyan-400">Hello,</span>
                  <span className="text-gray-400">Omkar Chandra Here</span>
                </motion.div>
              )}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-gray-300">AIML Graduate</span>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-gray-300">Full Stack Engineer</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Loading progress bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 150, opacity: 1 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
