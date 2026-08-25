import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setStatus(null);
      }, 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhammadshafeeq4547@gmail.com',
      href: 'mailto:muhammadshafeeq4547@gmail.com',
      color: 'cyan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muhammad-shafeeq-full-stack',
      href: 'https://www.linkedin.com/in/muhammad-shafeeq-full-stack/',
      color: 'violet',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shafeeq',
      href: 'https://github.com',
      color: 'emerald',
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20',
      violet: 'bg-violet-500/10 border-violet-500/50 text-violet-400 hover:bg-violet-500/20',
      emerald: 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/20',
    };
    return colorMap[color] || colorMap.cyan;
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <span className="text-[10px] md:text-xs font-mono text-gray-500 tracking-widest">GET IN TOUCH</span>
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4 md:mb-6">
            Have a system to build?
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            LET'S BUILD IT.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                Let's Connect
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Open to discussing full-stack development opportunities, technical collaborations, 
                or building production-ready web systems.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 md:space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-3 md:gap-4 p-4 md:p-5 border rounded-xl transition-all ${getColorClasses(method.color)}`}
                  >
                    <div className="p-2 md:p-3 bg-gray-900/50 rounded-lg flex-shrink-0">
                      <Icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] md:text-xs font-mono text-gray-500 mb-1">{method.label}</div>
                      <div className="text-xs md:text-sm font-semibold truncate">{method.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability Status */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-semibold text-gray-200">Available for Opportunities</span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">
                Open to full-time positions, contract work, and technical collaborations.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-3 md:p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg text-center">
                <div className="text-cyan-400 font-bold text-xl md:text-2xl mb-1">2+</div>
                <div className="text-[10px] md:text-xs text-gray-500">Years Experience</div>
              </div>
              <div className="p-3 md:p-4 bg-gray-900/30 border border-gray-800/50 rounded-lg text-center">
                <div className="text-violet-400 font-bold text-xl md:text-2xl mb-1">4</div>
                <div className="text-[10px] md:text-xs text-gray-500">Production Systems</div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 p-6 md:p-8 bg-gray-900/30 border border-gray-800/50 rounded-xl backdrop-blur-sm">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-mono text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-mono text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-mono text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-900/50 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 md:px-6 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={16} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 md:p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg text-emerald-400 text-xs md:text-sm">
                  <CheckCircle size={16} className="md:w-[18px] md:h-[18px] flex-shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 md:p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs md:text-sm">
                  <AlertCircle size={16} className="md:w-[18px] md:h-[18px] flex-shrink-0" />
                  <span>Please fill in all fields correctly.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <div className="text-lg md:text-xl font-bold text-gray-100 mb-1">
                MUHAMMAD SHAFEEQ
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                Full Stack Developer • MERN Stack Specialist
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2.5 md:p-3 bg-gray-900/50 border border-gray-800/50 rounded-lg text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                    aria-label={method.label}
                  >
                    <Icon size={18} className="md:w-5 md:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center text-xs md:text-sm text-gray-600 mt-6 md:mt-8">
            © {new Date().getFullYear()} Muhammad Shafeeq. Built with React & Tailwind CSS.
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

export default ContactSection;
