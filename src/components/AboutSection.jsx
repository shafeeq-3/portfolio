import React from 'react';
import { Code2, Database, Layers, Zap } from 'lucide-react';

const AboutSection = () => {
  const profile = [
    { label: 'ROLE', value: 'Full Stack Developer', icon: Code2 },
    { label: 'FOCUS', value: 'MERN / Production Web Applications', icon: Layers },
    { label: 'EXPERIENCE', value: '2+ Years', icon: Zap },
    { label: 'CURRENT', value: 'WebDevrs', icon: Database },
  ];

  const principles = [
    {
      title: 'BUILD',
      description: 'Design the system before writing features.',
      icon: '⚡',
    },
    {
      title: 'SECURE',
      description: 'Authentication and authorization are part of the architecture.',
      icon: '🔒',
    },
    {
      title: 'SCALE',
      description: 'Structure applications so features can grow without becoming chaotic.',
      icon: '📈',
    },
    {
      title: 'SHIP',
      description: 'Take features from idea to deployment.',
      icon: '🚀',
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="text-[10px] md:text-xs font-mono text-gray-500 tracking-widest">DEVELOPER PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100">
            About
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Profile Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {profile.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 md:p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm hover:border-cyan-500/50 transition-all group"
                >
                  <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="p-1.5 md:p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <item.icon size={16} className="md:w-[18px] md:h-[18px] text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-[10px] md:text-xs font-mono text-gray-500 mb-1 tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-200">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Story */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I work across the full application lifecycle — from{' '}
                <span className="text-cyan-400 font-semibold">database design</span> and{' '}
                <span className="text-cyan-400 font-semibold">backend architecture</span> to{' '}
                <span className="text-cyan-400 font-semibold">responsive React interfaces</span>,{' '}
                authentication, real-time systems, integrations, and deployment.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm font-mono text-gray-500 tracking-wider">EDUCATION</h3>
              <div className="space-y-3">
                <div className="p-3 md:p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg">
                  <div className="font-semibold text-gray-200 text-xs md:text-sm">FSc Pre-Engineering</div>
                  <div className="text-[10px] md:text-xs text-gray-500 mt-1">Punjab Board • 2019–2021</div>
                </div>
                <div className="p-3 md:p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg">
                  <div className="font-semibold text-gray-200 text-xs md:text-sm">MERN Stack Full Stack Web Development</div>
                  <div className="text-[10px] md:text-xs text-gray-500 mt-1">WebDevrs Bootcamp • 2023–2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Principles */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-3 md:mb-4">
                Engineering Mindset
              </h3>
              <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
                How I approach development and system architecture
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {principles.map((principle, idx) => (
                <div 
                  key={idx}
                  className="group p-4 md:p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="text-2xl md:text-3xl">{principle.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-bold text-gray-100 mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors">
                        {principle.title}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Teaching Experience */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-xl">
              <h4 className="text-base md:text-lg font-bold text-gray-100 mb-2 md:mb-3">
                MERN Stack Instructor
              </h4>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Experience teaching strengthened my communication, problem-solving, technical explanation, and mentoring abilities.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Communication', 'Problem Solving', 'Mentoring', 'Teamwork'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-2.5 md:px-3 py-1 text-[10px] md:text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
