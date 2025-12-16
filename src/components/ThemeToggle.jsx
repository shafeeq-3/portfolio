import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.background = 'linear-gradient(to bottom right, #111827, #000000, #111827)';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.background = 'linear-gradient(to bottom right, #f3f4f6, #ffffff, #e5e7eb)';
      document.body.style.color = '#111827';
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: '0 5px 20px rgba(6, 182, 212, 0.3)' }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed top-20 md:top-24 right-4 md:right-6 z-50 p-3 bg-gray-900/90 backdrop-blur-xl rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all shadow-lg"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 1.1 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {isDark ? (
          <FaSun className="text-yellow-400" size={18} />
        ) : (
          <FaMoon className="text-cyan-400" size={18} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
