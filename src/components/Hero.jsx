import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'MERN Stack Developer',
    'Full-Stack Engineer',
    'API Architect',
    'Problem Solver',
    'Code Optimizer'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="relative w-48 h-48 mx-auto mb-6"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/logo.svg" 
              alt="Muhammad Shafeeq Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
          Muhammad <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Shafeeq</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="h-20 mb-8">
          <span className="text-2xl md:text-4xl font-semibold text-cyan-400">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting scalable, high-performance web applications with the MERN stack. 
          Specialized in clean architecture, API design, and solving complex technical challenges.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/30 transition-all text-center"
          >
            View Projects
          </motion.a>
          <motion.button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '#';
              link.download = 'Muhammad_Shafeeq_CV.pdf';
              alert('CV download feature - Connect your actual CV file here!');
            }}
            whileHover={{ scale: 1.05, borderColor: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-cyan-400/50 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all backdrop-blur-sm"
          >
            <HiDownload /> Download CV
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          {[
            { Icon: FaGithub, href: '#', label: 'GitHub' },
            { Icon: FaLinkedin, href: '#', label: 'LinkedIn' },
            { Icon: FaEnvelope, href: '#contact', label: 'Email' }
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label={label}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiArrowDown className="text-cyan-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
