import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.querySelector('#work');
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

  return (
    <section className="relative min-h-screen bg-[#FDFBF7] pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Identity & Positioning */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
                  Muhammad<br />Shafeeq
                </h1>
                <div className="text-lg lg:text-xl text-stone-600 font-medium">
                  Full-Stack Developer
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-stone-800 leading-relaxed">
                  I build web applications from API design and database architecture to responsive user interfaces.
                </p>
                <p className="text-base lg:text-lg text-stone-600 leading-relaxed">
                  Working with React, Node.js, Express, and MongoDB to create production systems with authentication, real-time features, and third-party integrations.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-mono bg-white border border-stone-300 text-stone-700 rounded">
                  React
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-white border border-stone-300 text-stone-700 rounded">
                  Node.js
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-white border border-stone-300 text-stone-700 rounded">
                  MongoDB
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-white border border-stone-300 text-stone-700 rounded">
                  Express
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-white border border-stone-300 text-stone-700 rounded">
                  REST APIs
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-white border border-stone-300 text-stone-700 rounded">
                  JWT
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-all btn-primary"
              >
                View All Work
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-stone-300 text-stone-700 font-medium rounded-lg hover:border-blue-800 hover:text-blue-800 transition-all btn-secondary"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right: Featured Project */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-stone-300"></div>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                  Featured Project
                </span>
                <div className="h-px flex-1 bg-stone-300"></div>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
              {/* Project Image */}
              <div className="relative overflow-hidden bg-stone-100 project-image-wrapper">
                <a 
                  href="https://shopix-store.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="/shopix-store-pic.png" 
                    alt="Shopix E-Commerce Platform"
                    className="w-full h-auto transition-transform duration-500"
                    loading="eager"
                  />
                </a>
              </div>

              {/* Project Info */}
              <div className="p-6 lg:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-3">
                    Shopix E-Commerce Platform
                  </h3>
                  <p className="text-base lg:text-lg text-stone-600 leading-relaxed">
                    A full-stack e-commerce application where users can browse products, manage their cart and wishlist, and complete purchases through Stripe. Built with authentication, an admin dashboard for product and order management, and email notifications.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-mono uppercase tracking-wider text-stone-500">
                    What I Built
                  </div>
                  <ul className="space-y-2 text-sm lg:text-base text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-800 mt-1">•</span>
                      <span>Authentication system with JWT and Google OAuth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-800 mt-1">•</span>
                      <span>Product catalog with search and filtering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-800 mt-1">•</span>
                      <span>Shopping cart and wishlist management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-800 mt-1">•</span>
                      <span>Stripe payment integration for checkout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-800 mt-1">•</span>
                      <span>Admin dashboard with sales analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-800 mt-1">•</span>
                      <span>Order tracking and email notifications</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Passport.js', 'Cloudinary'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-stone-50 border border-stone-200 text-stone-600 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <a
                    href="https://shopix-store.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-800 font-medium hover:text-blue-900 transition-colors"
                  >
                    <span>View Live Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-blue-800 transition-colors font-medium"
              >
                <span>Explore all projects</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
