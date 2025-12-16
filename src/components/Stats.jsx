import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaCoffee, FaAward } from 'react-icons/fa';

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    coffee: 0,
    awards: 0
  });

  const finalCounts = {
    projects: 15,
    clients: 12,
    coffee: 500,
    awards: 8
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setCounts(prev => ({
          projects: Math.min(prev.projects + Math.ceil(finalCounts.projects / steps), finalCounts.projects),
          clients: Math.min(prev.clients + Math.ceil(finalCounts.clients / steps), finalCounts.clients),
          coffee: Math.min(prev.coffee + Math.ceil(finalCounts.coffee / steps), finalCounts.coffee),
          awards: Math.min(prev.awards + Math.ceil(finalCounts.awards / steps), finalCounts.awards)
        }));
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const stats = [
    {
      icon: FaCode,
      count: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: FaUsers,
      count: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: FaCoffee,
      count: counts.coffee,
      suffix: '+',
      label: 'Cups of Coffee',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FaAward,
      count: counts.awards,
      suffix: '+',
      label: 'Awards Won',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-cyan-900/10" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all text-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                {stat.count}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
