import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, 
  SiTypescript, SiRedis, SiSocketdotio, SiGit, SiDocker,
  SiPostman, SiJest, SiTailwindcss, SiNextdotjs
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'React.js', icon: SiReact, level: 98, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 92, color: '#000000' },
        { name: 'JavaScript', icon: SiJavascript, level: 99, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, level: 93, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 96, color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 97, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, level: 98, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, level: 96, color: '#47A248' },
        { name: 'Redis', icon: SiRedis, level: 91, color: '#DC382D' },
        { name: 'Socket.io', icon: SiSocketdotio, level: 95, color: '#010101' }
      ]
    },
    {
      title: 'Tools & DevOps',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Git', icon: SiGit, level: 96, color: '#F05032' },
        { name: 'Docker', icon: SiDocker, level: 88, color: '#2496ED' },
        { name: 'Postman', icon: SiPostman, level: 94, color: '#FF6C37' },
        { name: 'Jest', icon: SiJest, level: 90, color: '#C21325' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
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
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-gray-800/50 rounded-lg group-hover:bg-gray-800 transition-colors">
                        <skill.icon size={48} style={{ color: skill.color }} />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                      <div className="w-full bg-gray-800 rounded-full h-2 mb-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                      <span className="text-cyan-400 font-bold text-sm">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-400/20"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'RESTful APIs', 'GraphQL', 'JWT Authentication', 'OAuth 2.0', 'WebSockets',
              'Microservices', 'CI/CD', 'AWS', 'Nginx', 'PM2', 'Webpack', 'Vite',
              'Redux', 'Context API', 'React Query', 'Mongoose', 'Prisma', 'Sequelize'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-full text-sm hover:border-cyan-400/50 transition-colors cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
