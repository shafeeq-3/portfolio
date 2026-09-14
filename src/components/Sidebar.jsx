import React from 'react';

const Sidebar = ({ currentView, onNavigate }) => {
  const projects = [
    {
      id: 'shopix',
      number: '01',
      name: 'Shopix',
      category: 'E-Commerce Platform',
      preview: '/shopix-store-pic.png'
    },
    {
      id: 'education',
      number: '02',
      name: 'Education System',
      category: 'Management Platform',
      preview: '/education-pic.png'
    },
    {
      id: 'carpet',
      number: '03',
      name: 'Carpet Repair',
      category: 'Business Website',
      preview: '/carpet-ss.png'
    }
  ];

  return (
    <aside className="sidebar fixed top-0 left-0 h-screen overflow-y-auto hidden lg:block" style={{ width: '320px' }}>
      <div className="p-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[24px] font-bold text-stone-900 mb-1">
            Muhammad Shafeeq
          </h1>
          <p className="text-[15px] text-stone-600">
            Full-Stack Developer
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-200 mb-8"></div>

        {/* Work Section */}
        <div className="mb-8">
          <h2 className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-4">
            Work
          </h2>
          
          <div className="space-y-6">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => onNavigate(project.id)}
                className={`w-full text-left project-preview ${currentView === project.id ? 'project-selected' : ''}`}
              >
                {/* Project Number and Name */}
                <div className="mb-2">
                  <div className={`text-[16px] mb-0.5 ${currentView === project.id ? 'font-semibold' : 'font-normal'} text-stone-900`}>
                    {project.number} {project.name}
                  </div>
                  <div className="text-[14px] text-stone-600">
                    {project.category}
                  </div>
                </div>
                
                {/* Small Preview Image */}
                <div className="overflow-hidden rounded-sm">
                  <img 
                    src={project.preview} 
                    alt={`${project.name} preview`}
                    className="w-full h-auto"
                    style={{ maxHeight: '70px', objectFit: 'cover' }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-200 mb-6"></div>

        {/* About & Contact Links */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('about')}
            className={`block w-full text-left text-[16px] transition-colors ${
              currentView === 'about' 
                ? 'font-semibold text-stone-900' 
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            About
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`block w-full text-left text-[16px] transition-colors ${
              currentView === 'contact' 
                ? 'font-semibold text-stone-900' 
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
