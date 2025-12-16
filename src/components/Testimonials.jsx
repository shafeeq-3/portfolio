import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'CTO, Tech Innovations',
      image: '👨‍💼',
      rating: 5,
      text: 'Muhammad delivered an exceptional e-commerce platform that exceeded our expectations. His expertise in MERN stack and attention to detail is remarkable. The application handles thousands of users seamlessly.'
    },
    {
      name: 'Sarah Ali',
      role: 'Product Manager, Digital Solutions',
      image: '👩‍💼',
      rating: 5,
      text: 'Working with Muhammad was a pleasure. He quickly understood our complex requirements and implemented a real-time collaboration system that transformed our workflow. His debugging skills saved us weeks of development time.'
    },
    {
      name: 'Usman Malik',
      role: 'Founder, StartupHub',
      image: '👨‍💻',
      rating: 5,
      text: 'Muhammad built our entire backend infrastructure from scratch. His knowledge of microservices, API design, and database optimization is outstanding. He delivered clean, well-documented code that our team can easily maintain.'
    },
    {
      name: 'Fatima Hassan',
      role: 'CEO, Creative Agency',
      image: '👩‍💻',
      rating: 5,
      text: 'The social network platform Muhammad developed for us is incredible. The custom feed algorithm and real-time features work flawlessly. He is professional, responsive, and truly understands modern web development.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-700/50"
            >
              <FaQuoteLeft className="text-cyan-400 text-4xl mb-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="text-5xl">{testimonials[currentIndex].image}</div>
                <div>
                  <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-cyan-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-gray-900/50 backdrop-blur-xl rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all"
            >
              <FaChevronLeft className="text-cyan-400" size={20} />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-cyan-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-gray-900/50 backdrop-blur-xl rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-all"
            >
              <FaChevronRight className="text-cyan-400" size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
