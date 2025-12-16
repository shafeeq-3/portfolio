import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaClock, FaArrowRight, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const Blog = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const articles = [
    {
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'Learn how to design and implement RESTful APIs that can handle millions of requests with proper error handling, rate limiting, and caching strategies.',
      date: 'Dec 10, 2024',
      readTime: '8 min read',
      category: 'Backend',
      icon: FaServer,
      color: 'from-green-400 to-emerald-500',
      tags: ['Node.js', 'Express', 'API Design']
    },
    {
      title: 'MongoDB Aggregation Pipelines Mastery',
      excerpt: 'Deep dive into MongoDB aggregation framework with real-world examples. Learn complex queries, performance optimization, and indexing strategies.',
      date: 'Dec 5, 2024',
      readTime: '12 min read',
      category: 'Database',
      icon: FaDatabase,
      color: 'from-purple-400 to-pink-500',
      tags: ['MongoDB', 'Database', 'Performance']
    },
    {
      title: 'React Performance Optimization Techniques',
      excerpt: 'Discover advanced React patterns including memoization, code splitting, lazy loading, and custom hooks to build lightning-fast applications.',
      date: 'Nov 28, 2024',
      readTime: '10 min read',
      category: 'Frontend',
      icon: FaCode,
      color: 'from-cyan-400 to-blue-500',
      tags: ['React', 'Performance', 'Optimization']
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
            Latest <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge about web development, best practices, and technical insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${article.color}`} />
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${article.color} rounded-lg group-hover:scale-110 transition-transform`}>
                    <article.icon className="text-white" size={20} />
                  </div>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${article.color} bg-clip-text text-transparent`}>
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <FaClock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-cyan-400 flex items-center gap-2 text-sm font-medium"
                  >
                    Read More <FaArrowRight size={14} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
