import React, { useState } from 'react';

const MobileNav = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 'shopix',
      number: '01',
      name: 'Shopix',
      category: 'E-Commerce Platform',
      preview: '/shopix-store-pic.png',
      status: 'LIVE',
      tech: 'React, Node.js, MongoDB'
    },
    {
      id: 'education',
      number: '02',
      name: 'Education System',
      category: 'Management Platform',
      preview: '/education-pic.png',
      status: 'LIVE',
      tech: 'React, Node.js, MongoDB'
    },
    {
      id: 'carpet',
      number: '03',
      name: 'Carpet Repair',
      category: 'Business Website',
      preview: '/carpet-ss.png',
      status: 'LIVE',
      tech: 'React, Vite, Tailwind CSS'
    }
  ];

  const handleNavigate = (view) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  // If viewing intro, show full project index
  if (!currentView || currentView === 'intro') {
    return (
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="bg-white border-b border-stone-200 px-6 py-6">
          <h1 className="text-[24px] font-bold text-stone-900 mb-1">
            Muhammad Shafeeq
          </h1>
          <p className="text-[15px] text-stone-600">
            Full-Stack Developer
          </p>
        </div>

        {/* Intro Content */}
        <div className="px-6 py-8 bg-stone-50">
          <p className="text-[17px] text-stone-700 leading-[1.65] mb-6">
            Building practical web applications from interface to backend.
          </p>
          
          <div className="text-[15px] text-stone-600 mb-6">
            <span>React</span>
            <span className="text-stone-400 mx-2">·</span>
            <span>Node.js</span>
            <span className="text-stone-400 mx-2">·</span>
            <span>MongoDB</span>
          </div>
          
          <p className="text-[15px] text-stone-600">
            2 years teaching experience · 100+ students taught
          </p>
        </div>

        {/* Projects Grid */}
        <div className="px-6 py-8">
          <h2 className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-6">
            Work
          </h2>
          
          <div className="space-y-8">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => handleNavigate(project.id)}
                className="w-full text-left"
              >
                <div className="mb-3">
                  <div className="text-[18px] font-semibold text-stone-900 mb-1">
                    {project.number} {project.name}
                  </div>
                  <div className="text-[15px] text-stone-600 mb-2">
                    {project.category}
                  </div>
                </div>
                
                <div className="screenshot-container mb-3">
                  <img 
                    src={project.preview} 
                    alt={`${project.name} preview`}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="text-[14px] text-stone-600 mb-2">
                  <span className="text-green-700 font-medium">{project.status}</span>
                  <span className="text-stone-400 mx-2">·</span>
                  <span>{project.tech}</span>
                </div>
                
                <div className="text-[15px] text-blue-800 font-medium">
                  → Explore project
                </div>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-stone-200 my-8"></div>

          {/* About & Contact */}
          <div className="space-y-4">
            <button
              onClick={() => handleNavigate('about')}
              className="block text-[17px] text-stone-900 font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="block text-[17px] text-stone-900 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If viewing a specific page, show back button header
  return (
    <div className="lg:hidden">
      <div className="bg-white border-b border-stone-200 px-6 py-4">
        <button
          onClick={() => handleNavigate('intro')}
          className="text-[16px] text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-2"
        >
          <span>←</span>
          <span>Back to Projects</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
