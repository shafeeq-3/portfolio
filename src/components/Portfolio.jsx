import React from 'react';

const Portfolio = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[14px] sm:text-[16px] font-bold text-stone-900 tracking-tight hover:opacity-70 transition-opacity"
          >
            Muhammad Shafeeq
          </button>
          <div className="flex items-center gap-3 sm:gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="hidden sm:block text-[15px] text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hidden sm:block text-[15px] text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-[13px] sm:text-[15px] text-stone-700 hover:text-stone-900 transition-colors font-medium"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[13px] sm:text-[15px] bg-stone-900 px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-stone-800 transition-colors font-medium"
              style={{ color: '#ffffff' }}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[900px]">
            <div className="text-[11px] sm:text-[13px] uppercase tracking-wider text-stone-500 mb-4 sm:mb-6 font-semibold">
              Self-Employed Full-Stack Developer
            </div>
            
            <h1 className="text-[32px] sm:text-[48px] lg:text-[72px] font-bold text-stone-900 mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight">
              Building web applications from frontend to backend
            </h1>
            
            <p className="text-[16px] sm:text-[19px] lg:text-[22px] text-stone-700 leading-[1.65] sm:leading-[1.6] mb-8 sm:mb-10 max-w-[720px]">
              I'm a freelance full-stack developer specializing in React, Node.js, and MongoDB. 
              I build complete web applications—from responsive interfaces to REST APIs, authentication, 
              payment integration, and deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('work')}
                className="text-[15px] sm:text-[16px] bg-stone-900 px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-stone-800 transition-colors font-medium text-center"
                style={{ color: '#ffffff' }}
              >
                View Selected Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[15px] sm:text-[16px] border-2 border-stone-900 text-stone-900 px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-stone-900 hover:text-white transition-all font-medium text-center"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 bg-white border-y border-stone-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-10 sm:gap-12 lg:gap-24">
            <div>
              <h2 className="text-[11px] sm:text-[13px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
                About
              </h2>
              <div className="w-12 h-[2px] bg-stone-900"></div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-stone-900 leading-[1.5]">
                I'm a self-employed full-stack developer building practical web applications 
                for businesses and startups.
              </p>
              
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-stone-700 leading-[1.7]">
                My work focuses on the complete development cycle—responsive frontend interfaces, 
                backend APIs, database architecture, authentication systems, payment integration, 
                and production deployment. I work primarily with React, Node.js, Express, and MongoDB 
                to deliver functional, deployed applications.
              </p>
              
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-stone-700 leading-[1.7]">
                Previously worked as a Web Developer at Webdevrs, where I strengthened my ability 
                to build and explain technical solutions clearly.
              </p>

              <div className="pt-3 sm:pt-4">
                <div className="text-[14px] sm:text-[15px] text-stone-600 space-y-2">
                  <div><span className="font-semibold text-stone-900">Current:</span> Freelance Full-Stack Developer</div>
                  <div><span className="font-semibold text-stone-900">Location:</span> Based in Pakistan</div>
                  <div><span className="font-semibold text-stone-900">Availability:</span> Open to opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-10 sm:gap-12 lg:gap-24">
            <div>
              <h2 className="text-[11px] sm:text-[13px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
                Skills & Technologies
              </h2>
              <div className="w-12 h-[2px] bg-stone-900"></div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
              <div>
                <h3 className="text-[13px] sm:text-[15px] font-bold text-stone-900 mb-3 sm:mb-4 uppercase tracking-wide">
                  Frontend
                </h3>
                <div className="space-y-2 sm:space-y-2.5 text-[14px] sm:text-[16px] text-stone-700">
                  <div>React</div>
                  <div>JavaScript (ES6+)</div>
                  <div>HTML & CSS</div>
                  <div>Tailwind CSS</div>
                  <div>Responsive UI</div>
                </div>
              </div>

              <div>
                <h3 className="text-[13px] sm:text-[15px] font-bold text-stone-900 mb-3 sm:mb-4 uppercase tracking-wide">
                  Backend
                </h3>
                <div className="space-y-2 sm:space-y-2.5 text-[14px] sm:text-[16px] text-stone-700">
                  <div>Node.js</div>
                  <div>Express.js</div>
                  <div>REST APIs</div>
                  <div>Authentication</div>
                </div>
              </div>

              <div>
                <h3 className="text-[13px] sm:text-[15px] font-bold text-stone-900 mb-3 sm:mb-4 uppercase tracking-wide">
                  Database & Services
                </h3>
                <div className="space-y-2 sm:space-y-2.5 text-[14px] sm:text-[16px] text-stone-700">
                  <div>MongoDB</div>
                  <div>JWT</div>
                  <div>Cloudinary</div>
                  <div>Stripe</div>
                  <div>EmailJS</div>
                </div>
              </div>

              <div>
                <h3 className="text-[13px] sm:text-[15px] font-bold text-stone-900 mb-3 sm:mb-4 uppercase tracking-wide">
                  Development
                </h3>
                <div className="space-y-2 sm:space-y-2.5 text-[14px] sm:text-[16px] text-stone-700">
                  <div>API Integration</div>
                  <div>Role-Based Access</div>
                  <div>Deployment</div>
                  <div>Git & GitHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-16 bg-white border-y border-stone-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-[11px] sm:text-[13px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
              Selected Work
            </h2>
            <div className="w-12 h-[2px] bg-stone-900 mb-4 sm:mb-6"></div>
            <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-stone-900 max-w-[600px] leading-tight">
              Full-stack applications built from concept to deployment
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Shopix */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              <div>
                <a 
                  href="https://shopix-store.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-stone-200 overflow-hidden hover:border-stone-400 transition-colors group"
                >
                  <img 
                    src="/shopix-store-pic.png"
                    alt="Shopix E-Commerce Platform Interface"
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </a>
              </div>

              <div className="lg:pt-4">
                <div className="inline-block px-3 py-1.5 bg-stone-900 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold mb-3 sm:mb-4" style={{ color: '#ffffff' }}>
                  E-Commerce Platform
                </div>
                
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-stone-900 mb-3 sm:mb-4 leading-tight">
                  Shopix E-Commerce Platform
                </h3>
                
                <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-stone-700 leading-[1.7] mb-5 sm:mb-6">
                  Full-stack e-commerce application with product catalog, shopping cart, 
                  wishlist, Stripe payment integration, JWT authentication, admin dashboard, 
                  Cloudinary uploads, and order management.
                </p>

                <div className="mb-5 sm:mb-6">
                  <div className="text-[12px] sm:text-[14px] font-semibold text-stone-900 mb-2 sm:mb-3 uppercase tracking-wide">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Cloudinary', 'Tailwind'].map(tech => (
                      <span key={tech} className="text-[12px] sm:text-[13px] px-2.5 sm:px-3 py-1 sm:py-1.5 bg-stone-100 text-stone-700 border border-stone-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://shopix-store.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] text-blue-800 font-semibold hover:text-blue-900 transition-colors"
                >
                  <span>View Live Project</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Education System */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              <div className="lg:pt-4 order-2 lg:order-1">
                <div className="inline-block px-3 py-1.5 bg-stone-900 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold mb-3 sm:mb-4" style={{ color: '#ffffff' }}>
                  Management Platform
                </div>
                
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-stone-900 mb-3 sm:mb-4 leading-tight">
                  Education Management System
                </h3>
                
                <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-stone-700 leading-[1.7] mb-5 sm:mb-6">
                  Complete education management platform with role-based access control, 
                  attendance tracking, assignment submission and grading, and dashboards 
                  for admins, teachers, and students.
                </p>

                <div className="mb-5 sm:mb-6">
                  <div className="text-[12px] sm:text-[14px] font-semibold text-stone-900 mb-2 sm:mb-3 uppercase tracking-wide">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'].map(tech => (
                      <span key={tech} className="text-[12px] sm:text-[13px] px-2.5 sm:px-3 py-1 sm:py-1.5 bg-stone-100 text-stone-700 border border-stone-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://education-system-hw2l.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] text-blue-800 font-semibold hover:text-blue-900 transition-colors"
                >
                  <span>View Live Project</span>
                  <span>→</span>
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <a 
                  href="https://education-system-hw2l.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-stone-200 overflow-hidden hover:border-stone-400 transition-colors group"
                >
                  <img 
                    src="/education-pic.png"
                    alt="Education Management System Dashboard"
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </a>
              </div>
            </div>

            {/* Carpet Repair */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              <div>
                <a 
                  href="https://carpet-wheat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-stone-200 overflow-hidden hover:border-stone-400 transition-colors group"
                >
                  <img 
                    src="/carpet-ss.png"
                    alt="Carpet Repair & Restoration Website"
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </a>
              </div>

              <div className="lg:pt-4">
                <div className="inline-block px-3 py-1.5 bg-stone-900 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold mb-3 sm:mb-4" style={{ color: '#ffffff' }}>
                  Business Website
                </div>
                
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-stone-900 mb-3 sm:mb-4 leading-tight">
                  Carpet Repair & Restoration
                </h3>
                
                <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-stone-700 leading-[1.7] mb-5 sm:mb-6">
                  Professional business website with service gallery, contact functionality, 
                  and repair quote requests.
                </p>

                <div className="mb-5 sm:mb-6">
                  <div className="text-[12px] sm:text-[14px] font-semibold text-stone-900 mb-2 sm:mb-3 uppercase tracking-wide">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Vite', 'Tailwind CSS', 'EmailJS'].map(tech => (
                      <span key={tech} className="text-[12px] sm:text-[13px] px-2.5 sm:px-3 py-1 sm:py-1.5 bg-stone-100 text-stone-700 border border-stone-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://carpet-wheat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] text-blue-800 font-semibold hover:text-blue-900 transition-colors"
                >
                  <span>View Live Project</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-[11px] sm:text-[13px] uppercase tracking-wider text-stone-500 font-semibold mb-4 sm:mb-6">
              Let's Work Together
            </h2>
            
            <h3 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-stone-900 mb-6 sm:mb-8 leading-tight">
              Have a project in mind?
            </h3>
            
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] text-stone-700 leading-[1.7] mb-10 sm:mb-12">
              I'm currently available for freelance projects and full-time opportunities. 
              If you need a full-stack developer to build or improve a web application, 
              let's discuss how I can help.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
              <a
                href="mailto:muhammadshafeeq4547@gmail.com"
                className="inline-block text-[15px] sm:text-[16px] bg-stone-900 px-6 sm:px-8 py-3 sm:py-4 hover:bg-stone-800 transition-colors font-medium text-center"
                style={{ color: '#ffffff' }}
              >
                Send an Email
              </a>
              <a
                href="https://linkedin.com/in/muhammad-shafeeq-full-stack/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[15px] sm:text-[16px] border-2 border-stone-900 text-stone-900 px-6 sm:px-8 py-3 sm:py-4 hover:bg-stone-900 hover:text-white transition-all font-medium text-center"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="border-t border-stone-200 pt-10 sm:pt-12">
              <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 text-left max-w-[600px] mx-auto">
                <div>
                  <div className="text-[11px] sm:text-[13px] uppercase tracking-wider text-stone-500 font-semibold mb-2 sm:mb-3">
                    Email
                  </div>
                  <div className="text-[14px] sm:text-[16px] text-stone-900 break-words">
                    muhammadshafeeq4547@gmail.com
                  </div>
                </div>
                <div>
                  <div className="text-[11px] sm:text-[13px] uppercase tracking-wider text-stone-500 font-semibold mb-2 sm:mb-3">
                    LinkedIn
                  </div>
                  <a 
                    href="https://linkedin.com/in/muhammad-shafeeq-full-stack/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] sm:text-[16px] text-blue-800 hover:text-blue-900 transition-colors font-medium"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-16 border-t border-stone-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[13px] sm:text-[14px] text-stone-600 text-center sm:text-left">
            <div>© 2024 Muhammad Shafeeq. All rights reserved.</div>
            <div>Based in Pakistan · Available for opportunities</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
