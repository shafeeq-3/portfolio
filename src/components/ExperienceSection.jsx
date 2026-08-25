import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const [selectedSystem, setSelectedSystem] = useState('ecommerce');

  const experience = {
    company: 'WebDevrs',
    role: 'Full Stack Developer',
    period: 'February 2024 – Present',
    location: 'Remote',
  };

  const systems = [
    {
      id: 'ecommerce',
      name: 'E-COMMERCE',
      type: 'Full-Stack Web Application',
      color: 'cyan',
      modules: [
        'PRODUCT CATALOG',
        'PAYMENTS',
        'WEBHOOKS',
        'ORDERS',
        'ADMIN',
        'AUTHENTICATION',
        'MEDIA',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Cloudinary'],
      features: [
        'Product catalog with filtering and search',
        'Stripe checkout integration',
        'Stripe webhook handling for order confirmation',
        'Order management system',
        'Admin dashboard with full CRUD',
        'Refresh-token authentication flow',
        'Cloudinary media management',
      ],
    },
    {
      id: 'chat',
      name: 'REAL-TIME CHAT',
      type: 'Real-Time Communication System',
      color: 'emerald',
      modules: [
        'MESSAGING',
        'ROOMS',
        'PRESENCE',
        'INDICATORS',
        'RECEIPTS',
        'PERSISTENCE',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      features: [
        'Real-time bidirectional messaging',
        'Room-based chat organization',
        'Typing indicators',
        'Read receipts',
        'Live user presence tracking',
        'Persistent message history',
      ],
    },
    {
      id: 'social',
      name: 'SOCIAL PLATFORM',
      type: 'Social Media Application',
      color: 'violet',
      modules: [
        'FEEDS',
        'POSTS',
        'INTERACTIONS',
        'FOLLOWS',
        'NOTIFICATIONS',
        'PROFILES',
        'MEDIA',
      ],
      technologies: ['MERN', 'REST API', 'Cloudinary', 'JWT'],
      features: [
        'Paginated activity feeds',
        'Post creation and management',
        'Likes and comments system',
        'Follow/unfollow relationships',
        'Real-time notifications',
        'Public user profiles',
        'Media upload functionality',
      ],
    },
    {
      id: 'lms',
      name: 'LMS',
      type: 'Learning Management System',
      color: 'amber',
      modules: [
        'ADMIN',
        'INSTRUCTOR',
        'STUDENT',
        'COURSES',
        'ENROLLMENT',
        'PROGRESS',
        'ANALYTICS',
        'RBAC',
      ],
      technologies: ['MERN', 'REST API', 'RBAC'],
      features: [
        'Multi-role system (Admin, Instructor, Student)',
        'Course creation and management',
        'Student enrollment system',
        'Progress tracking',
        'Instructor analytics dashboard',
        'Role-based access control',
      ],
    },
  ];

  const currentSystem = systems.find(s => s.id === selectedSystem);

  const responsibilities = [
    'Architecture',
    'Backend',
    'Database',
    'Authentication',
    'Frontend',
    'Real-Time',
    'Integrations',
    'Deployment',
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/50',
        text: 'text-cyan-400',
        hover: 'hover:border-cyan-500',
      },
      emerald: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/50',
        text: 'text-emerald-400',
        hover: 'hover:border-emerald-500',
      },
      violet: {
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/50',
        text: 'text-violet-400',
        hover: 'hover:border-violet-500',
      },
      amber: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/50',
        text: 'text-amber-400',
        hover: 'hover:border-amber-500',
      },
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="experience" className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="text-xs font-mono text-gray-500 tracking-widest">PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="mb-16 p-8 bg-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Briefcase size={20} className="text-cyan-400" />
                <h3 className="text-xl font-bold text-gray-100">{experience.role}</h3>
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">{experience.company}</div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              <div className="font-mono text-cyan-400 text-2xl font-bold">4</div>
              <div className="text-xs">Production Systems</div>
            </div>
          </div>
        </div>

        {/* System Selector */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Production Systems Built</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {systems.map((system) => {
              const colors = getColorClasses(system.color);
              const isActive = selectedSystem === system.id;
              
              return (
                <button
                  key={system.id}
                  onClick={() => setSelectedSystem(system.id)}
                  className={`p-4 rounded-lg border transition-all text-left ${
                    isActive 
                      ? `${colors.bg} ${colors.border} ${colors.text}` 
                      : 'bg-gray-900/30 border-gray-800/50 text-gray-400 hover:border-gray-700'
                  }`}
                >
                  <div className="font-bold text-sm">{system.name}</div>
                  <div className="text-xs mt-1 opacity-70">{system.type.split(' ')[0]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* System Details */}
        {currentSystem && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - System Info */}
            <div className="space-y-6">
              <div className={`p-8 rounded-xl border ${getColorClasses(currentSystem.color).bg} ${getColorClasses(currentSystem.color).border} backdrop-blur-sm`}>
                <h4 className={`text-3xl font-bold mb-2 ${getColorClasses(currentSystem.color).text}`}>
                  {currentSystem.name}
                </h4>
                <p className="text-gray-400 text-sm mb-6">{currentSystem.type}</p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-gray-500 mb-3 tracking-wider">TECHNOLOGIES</div>
                  <div className="flex flex-wrap gap-2">
                    {currentSystem.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-gray-900/50 text-gray-300 border border-gray-700/50 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* System Modules */}
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-3 tracking-wider">SYSTEM MODULES</div>
                  <div className="grid grid-cols-2 gap-2">
                    {currentSystem.modules.map((module) => (
                      <div 
                        key={module}
                        className="px-3 py-2 bg-gray-900/50 border border-gray-800/50 rounded text-xs font-mono text-gray-400"
                      >
                        {module}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Features & Responsibilities */}
            <div className="space-y-6">
              {/* Key Features */}
              <div className="p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm">
                <h5 className="text-sm font-mono text-gray-500 mb-4 tracking-wider">KEY FEATURES</h5>
                <ul className="space-y-3">
                  {currentSystem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className={`mt-1 ${getColorClasses(currentSystem.color).text}`}>→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Responsibilities */}
              <div className="p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm">
                <h5 className="text-sm font-mono text-gray-500 mb-4 tracking-wider">ENGINEERING RESPONSIBILITIES</h5>
                <div className="flex flex-wrap gap-2">
                  {responsibilities.map((resp) => (
                    <span 
                      key={resp}
                      className="px-3 py-1.5 text-xs font-mono bg-gray-800/50 text-gray-300 border border-gray-700/50 rounded hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
