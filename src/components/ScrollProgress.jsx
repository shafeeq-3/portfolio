import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const updateScrollProgress = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPx = document.documentElement.scrollTop;
          const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (scrollPx / winHeightPx) * 100;
          setScrollProgress(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-transform duration-150 will-change-transform"
        style={{ transform: `scaleX(${scrollProgress / 100})`, transformOrigin: 'left' }}
      />
    </div>
  );
};

export default ScrollProgress;
