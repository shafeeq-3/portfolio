import React, { useState } from 'react';
import { ExternalLink, Github, ShoppingCart, MessageSquare, Users, GraduationCap } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'shopix',
      name: 'Shopix - Full-Stack E-Commerce Platform',
      tagline: 'Modern, production-ready e-commerce platform with enterprise-grade security',
      icon: ShoppingCart,
      color: 'cyan',
      image: '/shopix-store-pic.png',
      technologies: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT', 'Passport.js', 'Cloudinary', 'Socket.IO', 'Tailwind CSS'],
      systemType: 'Full-Stack E-Commerce Platform',
      liveDemo: 'https://shopix-store.vercel.app/',
      features: [
        '🔐 Multi-layered Authentication - JWT, Google OAuth, 2FA with QR code',
        '🛍️ Product Browsing - Advanced filters and search functionality',
        '🛒 Shopping Cart & Wishlist - Complete cart management system',
        '💳 Secure Stripe Integration - Payment processing with webhooks',
        '📦 Real-time Order Tracking - Live order status updates',
        '📧 Email Notifications - OTP, order confirmations via Nodemailer',
        '👤 Profile Management - Avatar upload and user preferences',
        '📊 Admin Dashboard - Sales analytics with Recharts visualization',
        '📈 Revenue Tracking - Performance metrics and insights',
        '🔒 Security Features - Rate limiting, XSS protection, NoSQL injection prevention',
      ],
      engineering: [
        'RESTful API design with MVC architecture pattern',
        'Role-based access control (RBAC) for admin/user permissions',
        'Real-time updates via WebSocket for notifications',
        'Automated tasks with Node-Cron for scheduled operations',
        'Comprehensive error logging with Winston',
        'Image optimization and CDN delivery via Cloudinary',
        'Security implementation: Helmet, Rate Limiting, HPP, MongoDB Sanitization',
        'Responsive mobile-first design with Framer Motion animations',
      ],
      security: [
        '✅ HTTP Parameter Pollution protection',
        '✅ NoSQL injection prevention',
        '✅ Input validation and sanitization',
        '✅ Secure session management',
        '✅ Rate limiting per IP/user',
        '✅ Account lockout mechanism',
      ],
    },
    {
      id: 'carpet',
      name: 'Carpet Repair & Restoration Website',
      tagline: 'Modern responsive website for professional carpet repair business',
      icon: MessageSquare,
      color: 'emerald',
      image: '/carpet-ss.png',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'EmailJS'],
      systemType: 'Business Website',
      liveDemo: 'https://carpet-wheat.vercel.app/',
      features: [
        '🎨 Interactive Before/After Gallery - Showcasing repair work with image comparisons',
        '📱 Fully Responsive Design - Optimized for all devices and screen sizes',
        '📧 Integrated Contact Form - EmailJS integration for instant quotes',
        '🗓️ Online Booking System - Service appointment scheduling',
        '💬 Customer Reviews Section - Testimonials and feedback display',
        '📊 Service Pricing Calculator - Dynamic pricing estimation',
        '🔍 SEO-Optimized Pages - Better search engine visibility',
        '📞 Quick Contact Integration - Direct phone and email access',
      ],
      engineering: [
        'Built with React for dynamic UI components',
        'Fast performance with Vite build tool',
        'Clean, maintainable component architecture',
        'Modern CSS with TailwindCSS utilities',
        'Form validation and email integration with EmailJS',
        'Multi-page routing with smooth navigation',
        'Mobile-first approach for better accessibility',
      ],
      impact: [
        '✅ Streamlined customer inquiry process',
        '✅ Enhanced online presence for local business',
        '✅ Mobile-first approach for better accessibility',
        '✅ Professional showcase of services and past projects',
      ],
    },
    {
      id: 'social',
      name: 'Social Media Platform',
      tagline: 'Feature-rich social networking application',
      icon: Users,
      color: 'violet',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      technologies: ['MERN', 'REST API', 'Cloudinary', 'JWT'],
      systemType: 'Social Media Application',
      features: [
        'Dynamic paginated activity feeds',
        'Post creation with media uploads',
        'Engagement system (likes, comments)',
        'Follow/unfollow functionality',
        'Real-time notification system',
        'Customizable user profiles',
        'Media optimization and CDN delivery',
      ],
      engineering: [
        'Designed scalable feed algorithm',
        'Implemented relationship graph system',
        'Built notification infrastructure',
        'Created efficient pagination',
        'Optimized media upload pipeline',
      ],
    },
    {
      id: 'ems',
      name: 'Education Management System',
      tagline: 'Comprehensive full-stack educational institution management platform',
      icon: GraduationCap,
      color: 'amber',
      image: '/education-pic.png',
      technologies: ['React 19', 'Node.js', 'MongoDB', 'Express.js', 'Socket.IO', 'JWT', 'Cloudinary', 'Tailwind CSS'],
      systemType: 'Full-Stack Education Management System',
      liveDemo: 'https://education-system-hw2l.vercel.app/login',
      features: [
        '🔐 Secure Authentication - JWT-based login with role-based access',
        '👥 User Management - Manage students, teachers, and administrators',
        '🎓 Academic System - Complete academic structure with programs, subjects, and classes',
        '📊 Attendance Tracking - Digital attendance with reports',
        '📝 Assignments - Create, submit, and grade assignments with file uploads',
        '📄 Digital Marksheets - Generate and view results with GPA calculation',
        '💰 Finance Module - Fee and salary management with payment tracking',
        '📈 Analytics Dashboard - Real-time insights and performance reports',
        '🔔 Live Notifications - Real-time updates using Socket.IO',
        '📅 Timetable Management - Class scheduling for students and teachers',
      ],
      engineering: [
        'Designed RESTful API architecture with 50+ endpoints',
        'MongoDB schema design with 24+ models',
        'Responsive UI with role-specific dashboards (Admin, Teacher, Student)',
        'Real-time features with Socket.IO for live notifications',
        'Cloud file storage integration with Cloudinary',
        'Secure authentication and authorization system with JWT',
        'MVC Architecture with production-ready deployment',
      ],
      highlights: [
        '✅ MVC Architecture',
        '✅ Real-time communication',
        '✅ Cloud file storage',
        '✅ Role-based access control',
        '✅ Responsive design',
        '✅ Production-ready deployment',
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: {
        gradient: 'from-cyan-500 to-blue-500',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/50',
        text: 'text-cyan-400',
        hover: 'hover:border-cyan-500',
      },
      emerald: {
        gradient: 'from-emerald-500 to-teal-500',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/50',
        text: 'text-emerald-400',
        hover: 'hover:border-emerald-500',
      },
      violet: {
        gradient: 'from-violet-500 to-purple-500',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/50',
        text: 'text-violet-400',
        hover: 'hover:border-violet-500',
      },
      amber: {
        gradient: 'from-amber-500 to-orange-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/50',
        text: 'text-amber-400',
        hover: 'hover:border-amber-500',
      },
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="projects" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="text-xs font-mono text-gray-500 tracking-widest">PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Production-ready web applications built from database architecture to deployment.
          </p>
        </div>

        {/* Project Grid */}
        {selectedProject === null ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const colors = getColorClasses(project.color);
              const Icon = project.icon;
              
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-gray-700 transition-all h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-900">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-20`}></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4">
                        <div className={`p-3 ${colors.bg} ${colors.border} border rounded-lg backdrop-blur-sm`}>
                          <Icon className={colors.text} size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className={`text-2xl font-bold mb-2 ${colors.text} group-hover:text-cyan-300 transition-colors`}>
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {project.tagline}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 text-xs font-mono bg-gray-800/50 text-gray-400 border border-gray-700/50 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs font-mono bg-gray-800/50 text-gray-400 border border-gray-700/50 rounded">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-cyan-400 transition-colors">
                        <span>View Details</span>
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Project Detail View */
          (() => {
            const project = projects.find(p => p.id === selectedProject);
            const colors = getColorClasses(project.color);
            const Icon = project.icon;

            return (
              <div className="space-y-8">
                {/* Back Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <span>←</span>
                  <span>Back to Projects</span>
                </button>

                {/* Project Header */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800/50">
                  <div className="relative h-96">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover opacity-30"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-30`}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center max-w-3xl px-6">
                        <div className={`inline-block p-4 ${colors.bg} ${colors.border} border rounded-xl backdrop-blur-sm mb-6`}>
                          <Icon className={colors.text} size={48} />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                          {project.name}
                        </h3>
                        <p className="text-xl text-gray-400 mb-6">
                          {project.tagline}
                        </p>
                        <div className="inline-block px-4 py-2 bg-gray-900/70 border border-gray-700 rounded-lg backdrop-blur-sm">
                          <span className="text-sm text-gray-400">{project.systemType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Technologies & Features */}
                  <div className="space-y-6">
                    <div className="p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl">
                      <h4 className="text-sm font-mono text-gray-500 mb-4 tracking-wider">TECHNOLOGIES</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className={`px-3 py-1.5 text-sm font-mono ${colors.bg} ${colors.text} ${colors.border} border rounded`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl">
                      <h4 className="text-sm font-mono text-gray-500 mb-4 tracking-wider">KEY FEATURES</h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className={colors.text}>✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Engineering Details */}
                  <div className="space-y-6">
                    <div className="p-6 bg-gray-900/30 border border-gray-800/50 rounded-xl">
                      <h4 className="text-sm font-mono text-gray-500 mb-4 tracking-wider">ENGINEERING DETAILS</h4>
                      <ul className="space-y-3">
                        {project.engineering.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className={colors.text}>→</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/50 rounded-xl">
                      <h4 className="text-sm font-mono text-gray-500 mb-4 tracking-wider">PROJECT LINKS</h4>
                      <div className="space-y-3">
                        {project.liveDemo && (
                          <a 
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all group"
                          >
                            <ExternalLink size={20} />
                            <span className="text-sm">Live Demo</span>
                            <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        )}
                        <a 
                          href="#" 
                          className="flex items-center gap-3 p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all group"
                        >
                          <Github size={20} />
                          <span className="text-sm">View Source Code</span>
                          <ExternalLink size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()
        )}
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

export default ProjectsSection;
