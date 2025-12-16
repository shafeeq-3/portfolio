import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaBug, FaDatabase, FaRocket } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    {
      icon: FaCode,
      title: 'Clean Code Architecture',
      description: 'Writing maintainable, scalable code following SOLID principles and design patterns',
      percentage: 98
    },
    {
      icon: FaBug,
      title: 'Debugging Expert',
      description: 'Rapid issue identification and resolution with comprehensive error handling',
      percentage: 99
    },
    {
      icon: FaDatabase,
      title: 'Database Optimization',
      description: 'Schema design, indexing strategies, and query optimization for peak performance',
      percentage: 97
    },
    {
      icon: FaRocket,
      title: 'Fast Learner',
      description: 'Quick adaptation to new technologies, frameworks, and complex codebases',
      percentage: 98
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-cyan-400">MERN Stack Specialist</h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). 
                With over 2 years of hands-on experience, I've built and deployed numerous production-ready applications 
                that serve thousands of users.
              </p>
              
              <p>
                My expertise lies in creating robust backend architectures with RESTful APIs, implementing real-time 
                features with WebSockets, and designing efficient database schemas. I don't just write code that works—I 
                write code that scales, performs, and fails gracefully.
              </p>
              
              <p>
                What sets me apart is my debugging prowess and ability to quickly understand complex codebases. I thrive 
                on solving challenging problems, optimizing performance bottlenecks, and implementing best practices for 
                error handling and logging.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'REST APIs', 'WebSockets', 'Redis'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-400/20 transition-colors cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">{skill.title}</h4>
                      <span className="text-cyan-400 font-bold">{skill.percentage}%</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{skill.description}</p>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
