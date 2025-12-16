import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'shafeeq@example.com',
      link: 'mailto:shafeeq@example.com',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+92 300 1234567',
      link: 'tel:+923001234567',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: '#',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: '#333' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    // Simulate API call
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm always open to new challenges and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all group"
                  >
                    <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg group-hover:scale-110 transition-transform`}>
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.title}</div>
                      <div className="font-medium group-hover:text-cyan-400 transition-colors">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="p-4 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gray-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-2xl p-6 border border-cyan-400/20"
            >
              <h4 className="text-xl font-bold mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Clean, maintainable, and scalable code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Strong focus on performance and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Excellent debugging and problem-solving skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Fast learner and adaptable to new technologies</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status.type === 'success' ? 'bg-green-500/20 border border-green-500/50 text-green-400' :
                      status.type === 'error' ? 'bg-red-500/20 border border-red-500/50 text-red-400' :
                      'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status.type === 'loading'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
