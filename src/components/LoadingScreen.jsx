import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl px-6">
        {/* Technical Loading Animation */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full"></div>
          
          {/* Rotating Ring */}
          <div 
            className="absolute inset-0 border-2 border-transparent border-t-cyan-500 rounded-full animate-spin"
            style={{ animationDuration: '1.5s' }}
          ></div>
          
          {/* Inner Ring */}
          <div 
            className="absolute inset-4 border-2 border-transparent border-b-violet-500 rounded-full animate-spin"
            style={{ animationDuration: '2s', animationDirection: 'reverse' }}
          ></div>
          
          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-100 tracking-tight">
            MUHAMMAD SHAFEEQ
          </h2>
          <p className="text-sm text-gray-400 font-mono tracking-wider">
            FULL STACK DEVELOPER
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 font-mono mt-2">{progress}%</p>
        </div>

        {/* System Status */}
        <div className="text-xs text-gray-600 font-mono space-y-1">
          <p className={progress > 30 ? 'text-cyan-500' : ''}>
            {progress > 30 ? '✓' : '○'} INITIALIZING SYSTEM
          </p>
          <p className={progress > 60 ? 'text-cyan-500' : ''}>
            {progress > 60 ? '✓' : '○'} LOADING COMPONENTS
          </p>
          <p className={progress > 90 ? 'text-cyan-500' : ''}>
            {progress > 90 ? '✓' : '○'} READY
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
