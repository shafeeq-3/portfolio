import React, { useState } from 'react';
import { Code2, Database, Server, Lock, Zap, Package } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'FRONTEND',
      icon: Code2,
      color: 'cyan',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Advanced' },
      ],
    },
    {
      id: 'backend',
      name: 'BACKEND',
      icon: Server,
      color: 'violet',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'REST APIs', level: 'Advanced' },
        { name: 'Middleware', level: 'Advanced' },
        { name: 'MVC Architecture', level: 'Advanced' },
      ],
    },
    {
      id: 'database',
      name: 'DATABASE',
      icon: Database,
      color: 'emerald',
      skills: [
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Mongoose', level: 'Advanced' },
        { name: 'Schema Design', level: 'Advanced' },
        { name: 'Aggregation', level: 'Intermediate' },
        { name: 'Indexing', level: 'Intermediate' },
      ],
    },
    {
      id: 'auth',
      name: 'AUTH & SECURITY',
      icon: Lock,
      color: 'amber',
      skills: [
        { name: 'JWT', level: 'Advanced' },
        { name: 'Refresh Tokens', level: 'Advanced' },
        { name: 'bcrypt', level: 'Advanced' },
        { name: 'RBAC', level: 'Advanced' },
        { name: 'CORS', level: 'Advanced' },
      ],
    },
    {
      id: 'realtime',
      name: 'REAL-TIME',
      icon: Zap,
      color: 'pink',
      skills: [
        { name: 'Socket.io', level: 'Advanced' },
        { name: 'WebSockets', level: 'Advanced' },
        { name: 'Event-Driven Architecture', level: 'Advanced' },
        { name: 'Room Management', level: 'Advanced' },
      ],
    },
    {
      id: 'integrations',
      name: 'INTEGRATIONS',
      icon: Package,
      color: 'orange',
      skills: [
        { name: 'Stripe', level: 'Advanced' },
        { name: 'Cloudinary', level: 'Advanced' },
        { name: 'Postman', level: 'Advanced' },
        { name: 'Vercel', level: 'Intermediate' },
        { name: 'Render', level: 'Intermediate' },
        { name: 'Git/GitHub', level: 'Advanced' },
      ],
    },
  ];

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/50',
        text: 'text-cyan-400',
        hover: 'hover:border-cyan-500',
      },
      violet: {
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/50',
        text: 'text-violet-400',
        hover: 'hover:border-violet-500',
      },
      emerald: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/50',
        text: 'text-emerald-400',
        hover: 'hover:border-emerald-500',
      },
      amber: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/50',
        text: 'text-amber-400',
        hover: 'hover:border-amber-500',
      },
      pink: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/50',
        text: 'text-pink-400',
        hover: 'hover:border-pink-500',
      },
      orange: {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/50',
        text: 'text-orange-400',
        hover: 'hover:border-orange-500',
      },
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="text-xs font-mono text-gray-500 tracking-widest">TECHNOLOGY STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Full-stack expertise across modern web technologies and production systems.
          </p>
        </div>

        {/* Architecture Visualization */}
        <div className="mb-12 p-8 bg-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex items-center gap-3 px-6 py-4 rounded-lg border transition-all ${
                    isActive 
                      ? `${colors.bg} ${colors.border} ${colors.text}` 
                      : 'bg-gray-900/30 border-gray-800/50 text-gray-400 hover:border-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-mono text-sm tracking-wider">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        {currentCategory && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-8 rounded-xl border ${getColorClasses(currentCategory.color).bg} ${getColorClasses(currentCategory.color).border} backdrop-blur-sm`}>
              <div className="flex items-center gap-3 mb-6">
                <currentCategory.icon size={32} className={getColorClasses(currentCategory.color).text} />
                <h3 className={`text-2xl font-bold ${getColorClasses(currentCategory.color).text}`}>
                  {currentCategory.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {currentCategory.skills.map((skill, idx) => (
                  <div key={idx} className="p-4 bg-gray-900/50 border border-gray-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-xs font-mono text-gray-500 px-2 py-1 bg-gray-800/50 rounded">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connections Visual */}
            <div className="p-8 bg-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm">
              <h4 className="text-sm font-mono text-gray-500 mb-6 tracking-wider">CONNECTED SYSTEMS</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                  <div className="text-sm font-semibold text-gray-200 mb-2">Production Applications</div>
                  <p className="text-xs text-gray-500">
                    These skills power 4 production systems serving real users
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg text-center">
                    <div className="text-cyan-400 font-bold text-xl mb-1">E-Commerce</div>
                    <div className="text-xs text-gray-500">Payment System</div>
                  </div>
                  <div className="p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg text-center">
                    <div className="text-emerald-400 font-bold text-xl mb-1">Chat</div>
                    <div className="text-xs text-gray-500">Real-Time</div>
                  </div>
                  <div className="p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg text-center">
                    <div className="text-violet-400 font-bold text-xl mb-1">Social</div>
                    <div className="text-xs text-gray-500">Media Platform</div>
                  </div>
                  <div className="p-3 bg-gray-800/30 border border-gray-700/50 rounded-lg text-center">
                    <div className="text-amber-400 font-bold text-xl mb-1">LMS</div>
                    <div className="text-xs text-gray-500">Education</div>
                  </div>
                </div>

                {/* Tech Stack Summary */}
                <div className="p-4 bg-gradient-to-br from-gray-800/30 to-gray-800/10 border border-gray-700/50 rounded-lg">
                  <div className="text-sm font-semibold text-gray-200 mb-3">Full-Stack Architecture</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Frontend → Backend</span>
                      <span className="text-cyan-400">✓ Connected</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">API → Database</span>
                      <span className="text-cyan-400">✓ Connected</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Auth → Security</span>
                      <span className="text-cyan-400">✓ Connected</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Real-Time → Events</span>
                      <span className="text-cyan-400">✓ Connected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Core Stack Highlight */}
        <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-cyan-500/10 border border-gray-800/50 rounded-xl backdrop-blur-sm">
          <div className="text-center">
            <h4 className="text-sm font-mono text-gray-500 mb-4 tracking-wider">CORE TECHNOLOGY STACK</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'REST APIs', 'Tailwind CSS'].map((tech) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-sm font-mono text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
