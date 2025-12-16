import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { 
  FaCode, FaServer, FaDatabase, FaMobile, 
  FaRocket, FaBug, FaShieldAlt, FaChartLine 
} from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using MERN stack with modern best practices and scalable architecture.',
      features: ['React & Next.js', 'Node.js & Express', 'RESTful APIs', 'State Management'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: FaServer,
      title: 'Backend Architecture',
      description: 'Robust backend systems with microservices, API gateways, authentication, and efficient data processing.',
      features: ['Microservices', 'API Design', 'Authentication', 'Rate Limiting'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      description: 'Optimized database schemas, indexing strategies, aggregation pipelines, and query optimization for peak performance.',
      features: ['MongoDB', 'Schema Design', 'Indexing', 'Query Optimization'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: FaMobile,
      title: 'Real-Time Features',
      description: 'WebSocket implementation for live chat, notifications, presence detection, and collaborative features.',
      features: ['Socket.io', 'Live Updates', 'Chat Systems', 'Notifications'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Code optimization, caching strategies, lazy loading, and performance monitoring for lightning-fast applications.',
      features: ['Redis Caching', 'Code Splitting', 'CDN Integration', 'Load Balancing'],
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: FaBug,
      title: 'Debugging & Testing',
      description: 'Comprehensive error handling, logging systems, unit testing, and integration testing for reliable code.',
      features: ['Error Tracking', 'Unit Testing', 'Integration Tests', 'Logging'],
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Implementation',
      description: 'JWT authentication, OAuth integration, input validation, SQL injection prevention, and security best practices.',
      features: ['JWT & OAuth', 'Input Validation', 'XSS Prevention', 'CORS Setup'],
      color: 'from-teal-400 to-cyan-500'
    },
    {
      icon: FaChartLine,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with proper documentation, versioning, error handling, and rate limiting.',
      features: ['REST APIs', 'GraphQL', 'API Docs', 'Versioning'],
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive MERN stack solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#06b6d4"
                glarePosition="all"
                scale={1.02}
              >
                <div className="h-full bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
