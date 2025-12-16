import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaAward, FaCode } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timeline = [
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Senior MERN Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading development of enterprise applications, architecting scalable microservices, mentoring junior developers.',
      achievements: [
        'Reduced API response time by 60% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 80%',
        'Led team of 5 developers on major e-commerce project',
        'Introduced error tracking system reducing bugs by 45%'
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Full-Stack Developer',
      company: 'Digital Innovations',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects using MERN stack, implemented real-time features, optimized database queries.',
      achievements: [
        'Built real-time chat system serving 5K+ concurrent users',
        'Optimized MongoDB queries improving performance by 70%',
        'Implemented JWT authentication with refresh token rotation',
        'Created reusable component library used across 10+ projects'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'Bachelor in Computer Science',
      company: 'University of Technology',
      period: '2018 - 2022',
      description: 'Focused on software engineering, data structures, algorithms, and web development.',
      achievements: [
        'Graduated with 3.8 GPA',
        'Led final year project on distributed systems',
        'Published research paper on API optimization',
        'Won hackathon for innovative web application'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      type: 'certification',
      icon: FaAward,
      title: 'Professional Certifications',
      company: 'Various Platforms',
      period: '2020 - Present',
      description: 'Continuous learning and skill development through professional certifications.',
      achievements: [
        'MongoDB Certified Developer',
        'AWS Certified Solutions Architect',
        'Node.js Application Developer',
        'React Advanced Patterns & Best Practices'
      ],
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '2+', icon: FaBriefcase },
    { label: 'Projects Completed', value: '15+', icon: FaCode },
    { label: 'Happy Clients', value: '12+', icon: FaAward },
    { label: 'Code Commits', value: '5K+', icon: FaCode }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
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
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all text-center group"
            >
              <stat.icon className="text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-600 to-cyan-400" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${item.color} rounded-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <div className="text-cyan-400 font-medium mb-1">{item.company}</div>
                        <div className="text-gray-400 text-sm">{item.period}</div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10" />

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
