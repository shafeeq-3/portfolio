import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#contact', label: 'Email' }
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-xl border-t border-gray-800/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4"
            >
              &lt;MS /&gt;
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-4">
              MERN Stack Developer passionate about building scalable web applications 
              and solving complex technical challenges.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-2 duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-cyan-400">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 shafeeq@example.com</li>
              <li>📱 +92 300 1234567</li>
              <li>📍 Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Muhammad Shafeeq. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
