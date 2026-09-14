import React, { useState } from 'react';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 'shopix',
      name: 'Shopix E-Commerce Platform',
      status: 'LIVE',
      tech: 'React, Node.js, MongoDB, Stripe',
      description: 'Full-stack e-commerce application with product catalog, shopping cart, Stripe checkout, JWT authentication, and admin dashboard.',
      image: '/shopix-store-pic.png',
      liveUrl: 'https://shopix-store.vercel.app/',
      layout: 'primary',
      features: [
        'Product catalog with search and filtering',
        'Shopping cart and wishlist management',
        'Stripe payment integration',
        'JWT authentication system',
        'Admin dashboard for products and orders',
        'Image uploads via Cloudinary'
      ],
      fullTech: 'React · Node.js · Express · MongoDB · Stripe · JWT · Cloudinary · Tailwind CSS'
    },
    {
      id: 'education',
      name: 'Education Management System',
      status: 'LIVE',
      tech: 'React, Node.js, MongoDB',
      description: 'Management platform for educational institutions with role-based access, attendance tracking, and assignment systems.',
      image: '/education-pic.png',
      liveUrl: 'https://education-system-hw2l.vercel.app/login',
      layout: 'horizontal',
      features: [
        'Role-based access control (Admin, Teacher, Student)',
        'Attendance tracking and reporting',
        'Assignment submission and grading',
        'Student and teacher dashboards',
        'Class and subject management'
      ],
      fullTech: 'React · Node.js · Express · MongoDB · JWT · Cloudinary'
    },
    {
      id: 'carpet',
      name: 'Carpet Repair & Restoration',
      status: 'LIVE',
      tech: 'React, Vite, Tailwind CSS',
      description: 'Business website with before/after gallery and contact form integration.',
      image: '/carpet-ss.png',
      liveUrl: 'https://carpet-wheat.vercel.app/',
      layout: 'reverse',
      features: [
        'Before/after image gallery',
        'Service information pages',
        'Contact form with EmailJS',
        'Fully responsive design',
        'SEO optimization'
      ],
      fullTech: 'React · Vite · Tailwind CSS · EmailJS'
    }
  ];

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <main className="bg-[#FAFAF9] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-4xl">
          <h2 className="text-[24px] font-bold text-stone-900 mb-3">
            Selected Work
          </h2>
          <p className="text-[16px] text-stone-600">
            A collection of full-stack applications and client-focused web projects.
          </p>
        </div>

        {/* Projects */}
        {projects.map((project, index) => (
          <div key={project.id} className={index > 0 ? 'mt-24 lg:mt-32' : ''}>
            {/* PRIMARY LAYOUT - Shopix */}
            {project.layout === 'primary' && (
              <div>
                {/* Title and metadata above screenshot */}
                <div className="mb-6">
                  <h3 className="text-[28px] font-bold text-stone-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="text-[15px] text-stone-600">
                    <span className="text-green-700 font-medium">{project.status}</span>
                    <span className="text-stone-400 mx-2">·</span>
                    <span>{project.tech}</span>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="mb-6 bg-white border border-stone-200 rounded-sm overflow-hidden">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-auto"
                      loading="eager"
                    />
                  </a>
                </div>

                {/* Description */}
                <p className="text-[17px] text-stone-700 leading-[1.65] mb-6 max-w-4xl">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
                  >
                    → {project.liveUrl.replace('https://', '')}
                  </a>
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-[16px] text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    {expandedProject === project.id ? '[Close]' : '[Expand Details]'}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedProject === project.id && (
                  <div className="mt-8 pt-8 border-t border-stone-200">
                    <div className="space-y-6 max-w-4xl">
                      <div>
                        <h4 className="text-[15px] font-semibold text-stone-900 mb-3 uppercase tracking-wide">
                          Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-[16px] text-stone-700 leading-[1.65]">
                              · {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[15px] font-semibold text-stone-900 mb-2 uppercase tracking-wide">
                          Stack
                        </h4>
                        <p className="text-[16px] text-stone-700">
                          {project.fullTech}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* HORIZONTAL LAYOUT - Education System */}
            {project.layout === 'horizontal' && (
              <div className="grid lg:grid-cols-[540px,1fr] gap-8 lg:gap-12 items-start">
                {/* Screenshot left */}
                <div className="bg-white border border-stone-200 rounded-sm overflow-hidden">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* Content right */}
                <div>
                  <h3 className="text-[28px] font-bold text-stone-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="text-[15px] text-stone-600 mb-4">
                    <span className="text-green-700 font-medium">{project.status}</span>
                    <span className="text-stone-400 mx-2">·</span>
                    <span>{project.tech}</span>
                  </div>

                  <p className="text-[17px] text-stone-700 leading-[1.65] mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
                    >
                      → {project.liveUrl.replace('https://', '').split('/')[0]}...
                    </a>
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-[16px] text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      {expandedProject === project.id ? '[Close]' : '[Expand Details]'}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {expandedProject === project.id && (
                    <div className="pt-6 border-t border-stone-200 space-y-6">
                      <div>
                        <h4 className="text-[15px] font-semibold text-stone-900 mb-3 uppercase tracking-wide">
                          Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-[16px] text-stone-700 leading-[1.65]">
                              · {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[15px] font-semibold text-stone-900 mb-2 uppercase tracking-wide">
                          Stack
                        </h4>
                        <p className="text-[16px] text-stone-700">
                          {project.fullTech}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* REVERSE LAYOUT - Carpet Website */}
            {project.layout === 'reverse' && (
              <div className="grid lg:grid-cols-[1fr,440px] gap-8 lg:gap-12 items-start">
                {/* Content left */}
                <div>
                  <h3 className="text-[28px] font-bold text-stone-900 mb-2">
                    {project.name}
                  </h3>
                  <div className="text-[15px] text-stone-600 mb-4">
                    <span className="text-green-700 font-medium">{project.status}</span>
                    <span className="text-stone-400 mx-2">·</span>
                    <span>{project.tech}</span>
                  </div>

                  <p className="text-[17px] text-stone-700 leading-[1.65] mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
                    >
                      → {project.liveUrl.replace('https://', '')}
                    </a>
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-[16px] text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      {expandedProject === project.id ? '[Close]' : '[Expand Details]'}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {expandedProject === project.id && (
                    <div className="pt-6 border-t border-stone-200 space-y-6">
                      <div>
                        <h4 className="text-[15px] font-semibold text-stone-900 mb-3 uppercase tracking-wide">
                          Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-[16px] text-stone-700 leading-[1.65]">
                              · {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[15px] font-semibold text-stone-900 mb-2 uppercase tracking-wide">
                          Stack
                        </h4>
                        <p className="text-[16px] text-stone-700">
                          {project.fullTech}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Screenshot right - Mobile order-first to show image on top */}
                <div className="order-first lg:order-last bg-white border border-stone-200 rounded-sm overflow-hidden">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsSection;
