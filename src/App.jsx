import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let rafId = null;
    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        rafId = null;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Loading Portfolio...
          </h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
        }}
      />

      <ParticleBackground />
      <ThemeToggle />
      <ProgressBar />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
