import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-[#FAFAF9] border-b border-stone-200 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Left: Name and Role */}
          <div>
            <div className="text-[22px] font-semibold text-stone-900">
              Muhammad Shafeeq
            </div>
            <div className="text-[15px] text-stone-600">
              Full-Stack Developer
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-6 text-[15px]">
            <a 
              href="https://www.linkedin.com/in/muhammad-shafeeq-full-stack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-blue-800 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#contact"
              className="text-stone-900 font-medium hover:text-blue-800 transition-colors"
            >
              Contact →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
