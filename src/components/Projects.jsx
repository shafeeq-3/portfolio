import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Enterprise E-Commerce Platform',
      category: 'Full-Stack',
      description: 'Scalable e-commerce system handling 10K+ concurrent users with microservices architecture, real-time inventory sync, Stripe integration, Redis caching for 40% faster load times.',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'Docker'],
      features: [
        'Microservices architecture with API gateway',
        'Real-time inventory synchronization',
        'Redis caching layer for performance',
        'Stripe webhook payment processing',
        'JWT authentication with refresh tokens',
        'Comprehensive error handling & logging'
      ],
      github: '#',
      live: '#',
      highlights: { users: '10K+', uptime: '99.9%', performance: '40%' }
    },
    {
      title: 'Real-Time Collaboration Platform',
      category: 'Real-Time',
      description: 'WebSocket-based messaging system with Socket.io clustering, room-based chat, presence detection, message persistence, file uploads to AWS S3.',
      image: '💬',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS S3'],
      features: [
        'WebSocket clustering for horizontal scaling',
        'Real-time presence detection',
        'Message persistence with MongoDB',
        'File upload to AWS S3 with presigned URLs',
        'Auto-reconnection with exponential backoff',
        'Room-based chat with typing indicators'
      ],
      github: '#',
      live: '#',
      highlights: { messages: '1M+', latency: '<50ms', uptime: '99.9%' }
    },
    {
      title: 'Social Network with Feed Algorithm',
      category: 'Full-Stack',
      description: 'Social platform with custom feed algorithm using MongoDB aggregation, infinite scroll with cursor pagination, real-time notifications, image optimization.',
      image: '📱',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Sharp', 'Redis'],
      features: [
        'Custom feed algorithm with engagement scoring',
        'Cursor-based pagination for infinite scroll',
        'Image processing pipeline with Sharp',
        'Real-time notifications via WebSockets',
        'Role-based access control (RBAC)',
        'Full-text search with MongoDB Atlas'
      ],
      github: '#',
      live: '#',
      highlights: { users: '5K+', posts: '50K+', engagement: '85%' }
    },
    {
      title: 'Project Management Dashboard',
      category: 'Productivity',
      description: 'Kanban-style task manager with drag-and-drop, team collaboration, real-time updates, advanced filtering with MongoDB aggregation, data visualization.',
      image: '✅',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Chart.js', 'Socket.io'],
      features: [
        'Drag-and-drop interface with React DnD',
        'Real-time collaboration with WebSockets',
        'Advanced filtering with aggregation pipelines',
        'Custom analytics dashboard with Chart.js',
        'Role-based permissions system',
        'Export to PDF and Excel functionality'
      ],
      github: '#',
      live: '#',
      highlights: { teams: '100+', tasks: '10K+', efficiency: '+45%' }
    },
    {
      title: 'Headless CMS Platform',
      category: 'Backend',
      description: 'Content management system with rich text editor, markdown support, custom field types, full-text search, image optimization, API versioning.',
      image: '📝',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Quill', 'Sharp'],
      features: [
        'Headless architecture with REST API',
        'Rich text editor with Quill.js',
        'Custom field types and validation',
        'Full-text search with MongoDB Atlas',
        'Image optimization pipeline',
        'API versioning and documentation'
      ],
      github: '#',
      live: '#',
      highlights: { content: '1K+', api: 'v2', speed: '3x' }
    },
    {
      title: 'API Gateway & Microservices',
      category: 'Backend',
      description: 'API gateway with rate limiting, request validation, service orchestration, circuit breaker pattern, centralized logging, health monitoring.',
      image: '🔧',
      tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'Winston'],
      features: [
        'Rate limiting with Redis',
        'Circuit breaker pattern for fault tolerance',
        'Service orchestration and routing',
        'Centralized logging with Winston',
        'Health check endpoints',
        'Swagger API documentation'
      ],
      github: '#',
      live: '#',
      highlights: { services: '12', requests: '1M/day', uptime: '99.99%' }
    }
  ];

  const categories = ['All', 'Full-Stack', 'Real-Time', 'Backend', 'Productivity'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
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
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white'
                    : 'bg-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{project.image}</div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <FaGithub className="text-gray-400 hover:text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-gray-400 hover:text-white" />
                      </motion.a>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-cyan-400">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-700/50">
                    {Object.entries(project.highlights).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-cyan-400 font-bold text-sm">{value}</div>
                        <div className="text-gray-500 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
