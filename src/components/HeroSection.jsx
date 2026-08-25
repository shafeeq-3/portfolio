import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [activeNode, setActiveNode] = useState(null);

  const architectureNodes = [
    { id: 'client', label: 'CLIENT', x: 50, y: 20, color: 'cyan' },
    { id: 'api', label: 'API', x: 50, y: 40, color: 'violet' },
    { id: 'server', label: 'SERVER', x: 50, y: 60, color: 'cyan' },
    { id: 'database', label: 'DATABASE', x: 50, y: 80, color: 'violet' },
    { id: 'auth', label: 'AUTH', x: 15, y: 50, color: 'emerald' },
    { id: 'realtime', label: 'REAL-TIME', x: 85, y: 50, color: 'amber' },
    { id: 'media', label: 'MEDIA', x: 15, y: 70, color: 'pink' },
    { id: 'payments', label: 'PAYMENTS', x: 85, y: 70, color: 'orange' },
  ];

  const connections = [
    { from: 'client', to: 'api' },
    { from: 'api', to: 'server' },
    { from: 'server', to: 'database' },
    { from: 'server', to: 'auth' },
    { from: 'server', to: 'realtime' },
    { from: 'server', to: 'media' },
    { from: 'api', to: 'payments' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(architectureNodes[Math.floor(Math.random() * architectureNodes.length)].id);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getNodeColor = (color, isActive) => {
    const colors = {
      cyan: isActive ? 'bg-cyan-500 shadow-cyan-500/50' : 'bg-cyan-500/30',
      violet: isActive ? 'bg-violet-500 shadow-violet-500/50' : 'bg-violet-500/30',
      emerald: isActive ? 'bg-emerald-500 shadow-emerald-500/50' : 'bg-emerald-500/30',
      amber: isActive ? 'bg-amber-500 shadow-amber-500/50' : 'bg-amber-500/30',
      pink: isActive ? 'bg-pink-500 shadow-pink-500/50' : 'bg-pink-500/30',
      orange: isActive ? 'bg-orange-500 shadow-orange-500/50' : 'bg-orange-500/30',
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <div className="inline-block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 md:w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                  <span className="text-[10px] md:text-xs font-mono text-gray-500 tracking-widest">FULL STACK DEVELOPER</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  MUHAMMAD
                </span>
                <br />
                <span className="text-gray-100">SHAFEEQ</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                I build <span className="text-cyan-400 font-semibold">production-ready web systems</span> from database architecture to the interface.
              </p>
              <p className="text-gray-500 text-sm md:text-base">
                Engineering systems, not just websites.
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'REST APIs', 'Socket.io', 'JWT'].map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 md:px-3 py-1 text-[10px] md:text-xs font-mono bg-gray-800/50 text-gray-400 border border-gray-700/50 rounded backdrop-blur-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('#projects')}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
              >
                VIEW MY WORK
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('#contact')}
                className="px-6 md:px-8 py-3 md:py-4 bg-gray-800/50 text-gray-300 font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all backdrop-blur-sm text-sm md:text-base"
              >
                LET'S TALK
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 md:gap-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-gray-800/50 text-gray-400 rounded-lg border border-gray-700/50 hover:border-cyan-500 hover:text-cyan-400 transition-all backdrop-blur-sm"
                aria-label="GitHub"
              >
                <Github size={18} className="md:w-5 md:h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-shafeeq-full-stack/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-gray-800/50 text-gray-400 rounded-lg border border-gray-700/50 hover:border-cyan-500 hover:text-cyan-400 transition-all backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a 
                href="mailto:muhammadshafeeq4547@gmail.com"
                className="p-2.5 md:p-3 bg-gray-800/50 text-gray-400 rounded-lg border border-gray-700/50 hover:border-cyan-500 hover:text-cyan-400 transition-all backdrop-blur-sm"
                aria-label="Email"
              >
                <Mail size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Right - Architecture Diagram */}
          <div className="relative h-[400px] md:h-[500px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {connections.map((conn, idx) => {
                  const fromNode = architectureNodes.find(n => n.id === conn.from);
                  const toNode = architectureNodes.find(n => n.id === conn.to);
                  if (!fromNode || !toNode) return null;
                  
                  return (
                    <line
                      key={idx}
                      x1={`${fromNode.x}%`}
                      y1={`${fromNode.y}%`}
                      x2={`${toNode.x}%`}
                      y2={`${toNode.y}%`}
                      stroke="rgba(100, 116, 139, 0.2)"
                      strokeWidth="1"
                      className="transition-all"
                    />
                  );
                })}
              </svg>

              {/* Nodes */}
              {architectureNodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <div
                    key={node.id}
                    className="absolute transition-all duration-500"
                    style={{ 
                      left: `${node.x}%`, 
                      top: `${node.y}%`, 
                      transform: 'translate(-50%, -50%)',
                      zIndex: 2
                    }}
                  >
                    <div className="relative group">
                      {/* Node Circle */}
                      <div 
                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                          getNodeColor(node.color, isActive)
                        } ${isActive ? 'shadow-lg scale-125' : ''}`}
                      ></div>
                      
                      {/* Label */}
                      <div className={`absolute left-1/2 -translate-x-1/2 top-6 whitespace-nowrap text-xs font-mono tracking-wider transition-all ${
                        isActive ? 'text-cyan-400' : 'text-gray-600'
                      }`}>
                        {node.label}
                      </div>

                      {/* Pulse Effect */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full animate-ping opacity-75"
                          style={{ 
                            backgroundColor: node.color === 'cyan' ? '#06b6d4' : 
                                           node.color === 'violet' ? '#8b5cf6' : 
                                           node.color === 'emerald' ? '#10b981' : 
                                           node.color === 'amber' ? '#f59e0b' : 
                                           node.color === 'pink' ? '#ec4899' : '#f97316'
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central System Label */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none" style={{ zIndex: 0 }}>
              <div className="text-gray-800 text-6xl font-bold opacity-10">
                FULL STACK
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(100, 116, 139, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
