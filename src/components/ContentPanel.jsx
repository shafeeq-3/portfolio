import React from 'react';

const ContentPanel = ({ currentView }) => {
  // Project data with verified features
  const projectsData = {
    shopix: {
      number: '01',
      category: 'E-COMMERCE PLATFORM',
      name: 'Shopix E-Commerce Platform',
      status: 'LIVE',
      image: '/shopix-store-pic.png',
      description: 'Full-stack e-commerce application with product catalog, shopping cart, wishlist, Stripe payment integration, JWT authentication, and admin dashboard for managing products and orders.',
      features: [
        'Product catalog with search and filtering',
        'Shopping cart and wishlist management',
        'Stripe payment integration',
        'JWT authentication system',
        'User account management',
        'Admin dashboard for products and orders',
        'Image uploads via Cloudinary',
        'Order management and tracking',
        'Email notifications'
      ],
      stack: 'React · Node.js · Express · MongoDB · Stripe · JWT · Cloudinary · Tailwind CSS',
      liveUrl: 'https://shopix-store.vercel.app/'
    },
    education: {
      number: '02',
      category: 'MANAGEMENT PLATFORM',
      name: 'Education Management System',
      status: 'LIVE',
      image: '/education-pic.png',
      description: 'Complete education management platform with role-based access control, attendance tracking, assignment submission and grading, and comprehensive dashboards for administrators, teachers, and students.',
      features: [
        'Role-based access control (Admin, Teacher, Student)',
        'Attendance tracking and reporting',
        'Assignment submission and grading system',
        'Student and teacher dashboards',
        'Class and subject management',
        'Grade management and reporting',
        'User profile management'
      ],
      stack: 'React · Node.js · Express · MongoDB · JWT · Cloudinary',
      liveUrl: 'https://education-system-hw2l.vercel.app/login'
    },
    carpet: {
      number: '03',
      category: 'BUSINESS WEBSITE',
      name: 'Carpet Repair & Restoration',
      status: 'LIVE',
      image: '/carpet-ss.png',
      description: 'Professional business website for a carpet repair and restoration service, featuring before/after gallery, service information, and contact functionality for repair quotes and requests.',
      features: [
        'Before/after image gallery',
        'Service information and pricing',
        'Contact form for repair requests',
        'Quote request functionality',
        'Fully responsive design',
        'SEO optimization'
      ],
      stack: 'React · Vite · Tailwind CSS · EmailJS',
      liveUrl: 'https://carpet-wheat.vercel.app/'
    }
  };

  // Render Intro State
  const renderIntro = () => (
    <div className="max-w-3xl">
      <h1 className="text-[48px] font-bold text-stone-900 mb-6 leading-tight">
        Full-Stack Developer
      </h1>
      
      <p className="text-[18px] text-stone-700 leading-[1.7] mb-6">
        Building practical web applications from interface to backend.
      </p>
      
      <p className="text-[17px] text-stone-700 leading-[1.65] mb-8">
        I work with React, Node.js, Express, and MongoDB to create web applications 
        with authentication, database-driven features, REST APIs, and responsive interfaces.
      </p>
      
      <p className="text-[17px] text-stone-700 leading-[1.65] mb-10">
        2 years of experience teaching MERN Stack development to 100+ students.
      </p>
      
      {/* Tech Stack */}
      <div className="mb-12">
        <div className="text-[15px] text-stone-600 space-x-2">
          <span>React</span>
          <span className="text-stone-400">·</span>
          <span>Node.js</span>
          <span className="text-stone-400">·</span>
          <span>Express</span>
          <span className="text-stone-400">·</span>
          <span>MongoDB</span>
          <span className="text-stone-400">·</span>
          <span>Authentication</span>
          <span className="text-stone-400">·</span>
          <span>REST APIs</span>
        </div>
      </div>
      
      {/* Selection Prompt */}
      <p className="text-[15px] text-stone-500">
        ← Select a project to explore
      </p>
    </div>
  );

  // Render Project Detail
  const renderProject = (projectId) => {
    const project = projectsData[projectId];
    if (!project) return null;

    return (
      <div className="max-w-5xl">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <h2 className="text-[16px] font-medium text-stone-900 uppercase tracking-wide">
              {project.number} — {project.category}
            </h2>
            <span className="text-[14px] text-green-700 font-medium">
              {project.status}
            </span>
          </div>
          <h1 className="text-[36px] font-bold text-stone-900 leading-tight">
            {project.name}
          </h1>
        </div>

        {/* Large Screenshot */}
        <div className="screenshot-container mb-8">
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
            />
          </a>
        </div>

        {/* Description */}
        <p className="text-[18px] text-stone-700 leading-[1.7] mb-10">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-10">
          <h3 className="text-[14px] font-semibold text-stone-900 uppercase tracking-wide mb-4">
            Key Features
          </h3>
          <div className="space-y-2">
            {project.features.map((feature, index) => (
              <div key={index} className="text-[16px] text-stone-700 leading-[1.65]">
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="mb-10">
          <h3 className="text-[14px] font-semibold text-stone-900 uppercase tracking-wide mb-3">
            Stack
          </h3>
          <p className="text-[16px] text-stone-700">
            {project.stack}
          </p>
        </div>

        {/* Live Link */}
        <div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[17px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
          >
            → View Live Project
          </a>
          <div className="text-[15px] text-stone-500 mt-1">
            {project.liveUrl.replace('https://', '')}
          </div>
        </div>
      </div>
    );
  };

  // Render About State
  const renderAbout = () => (
    <div className="max-w-3xl">
      <h1 className="text-[36px] font-bold text-stone-900 mb-8">
        About
      </h1>
      
      <p className="text-[18px] text-stone-700 leading-[1.7] mb-6">
        I'm Muhammad Shafeeq, a Full-Stack Developer focused on building practical 
        web applications with React, Node.js, Express, and MongoDB.
      </p>
      
      <p className="text-[17px] text-stone-700 leading-[1.65] mb-8">
        My work covers responsive frontend interfaces, backend APIs, authentication, 
        database-driven features, and deployment.
      </p>
      
      <p className="text-[17px] text-stone-700 leading-[1.65] mb-12">
        I have 2 years of experience teaching MERN Stack development to 100+ students, 
        which strengthened my ability to explain technical concepts clearly and approach 
        problems from both development and teaching perspectives.
      </p>
      
      {/* Capabilities */}
      <div className="mb-12">
        <h2 className="text-[14px] font-semibold text-stone-900 uppercase tracking-wide mb-4">
          Capabilities
        </h2>
        <div className="space-y-2 text-[16px] text-stone-700">
          <div>Frontend development with React</div>
          <div>Backend APIs with Node.js and Express</div>
          <div>Database design with MongoDB</div>
          <div>Authentication systems (JWT)</div>
          <div>Payment integration (Stripe)</div>
          <div>REST API development</div>
          <div>Responsive interface design</div>
          <div>Application deployment</div>
        </div>
      </div>
      
      {/* Background */}
      <div>
        <h2 className="text-[14px] font-semibold text-stone-900 uppercase tracking-wide mb-4">
          Background
        </h2>
        <div className="space-y-2 text-[16px] text-stone-700">
          <div>2 years development and teaching experience</div>
          <div>100+ students taught</div>
          <div>Based in Pakistan</div>
        </div>
      </div>
    </div>
  );

  // Render Contact State
  const renderContact = () => (
    <div className="max-w-3xl">
      <h1 className="text-[36px] font-bold text-stone-900 mb-6">
        Contact
      </h1>
      
      <p className="text-[24px] text-stone-900 font-medium mb-6 leading-snug">
        Have a project in mind?
      </p>
      
      <p className="text-[17px] text-stone-700 leading-[1.65] mb-12">
        If you need a full-stack web application, business website, or help 
        improving an existing project, let's start a conversation.
      </p>
      
      {/* Email Section */}
      <div className="mb-10 pb-10 border-b border-stone-200">
        <h2 className="text-[14px] font-semibold text-stone-900 uppercase tracking-wide mb-3">
          Email
        </h2>
        <p className="text-[17px] text-stone-900 mb-3">
          muhammadshafeeq4547@gmail.com
        </p>
        <a
          href="mailto:muhammadshafeeq4547@gmail.com"
          className="inline-block text-[16px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
        >
          → Send me a message
        </a>
      </div>
      
      {/* LinkedIn Section */}
      <div className="mb-12 pb-10 border-b border-stone-200">
        <h2 className="text-[14px] font-semibold text-stone-900 uppercase tracking-wide mb-3">
          LinkedIn
        </h2>
        <p className="text-[17px] text-stone-900 mb-3">
          linkedin.com/in/muhammad-shafeeq-full-stack
        </p>
        <a
          href="https://linkedin.com/in/muhammad-shafeeq-full-stack/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[16px] text-blue-800 font-medium hover:text-blue-900 transition-colors"
        >
          → View my profile
        </a>
      </div>
      
      {/* Availability */}
      <div className="text-[16px] text-stone-600">
        <div>Based in Pakistan</div>
        <div>Open to opportunities and collaborations</div>
      </div>
    </div>
  );

  // Main render logic
  const renderContent = () => {
    if (currentView === 'about') return renderAbout();
    if (currentView === 'contact') return renderContact();
    if (currentView === 'shopix' || currentView === 'education' || currentView === 'carpet') {
      return renderProject(currentView);
    }
    return renderIntro();
  };

  return (
    <div 
      className="min-h-screen p-8 lg:p-12 overflow-y-auto transition-content"
      style={{ marginLeft: '0' }}
    >
      {renderContent()}
    </div>
  );
};

export default ContentPanel;
