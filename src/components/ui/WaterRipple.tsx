import React from 'react';

export const WaterRipple: React.FC = React.memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center" aria-hidden="true">
      {/* 
        Container for ripples. Opacity is kept extremely low (8%) 
        so it never distracts from the main UI content.
      */}
      <div className="relative w-[150vw] h-[150vw] md:w-[1200px] md:h-[1200px] opacity-[0.08]">
        <div className="water-ripple-layer border-blue-300 delay-0"></div>
        <div className="water-ripple-layer border-sky-300 delay-1"></div>
        <div className="water-ripple-layer border-cyan-300 delay-2"></div>
        <div className="water-ripple-layer border-blue-400 delay-3"></div>
      </div>
    </div>
  );
});

WaterRipple.displayName = 'WaterRipple';
