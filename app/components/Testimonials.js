'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Business Administration Graduate',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'Uni Vivamus transformed my career prospects completely. The quality of education and support I received was exceptional. The lecturers were industry experts who genuinely cared about our success.',
      program: 'MBA Program',
      year: '2024'
    },
    {
      id: 2,
      name: 'Mohammed Al-Rashid',
      role: 'Computer Science Student',
      location: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      text: 'Studying at Uni Vivamus Dubai campus has been an incredible experience. The international environment and cutting-edge facilities prepared me for a global tech career.',
      program: 'BSc Computer Science',
      year: '2023'
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Marketing Professional',
      location: 'Manchester, UK',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 5,
      text: 'The networking opportunities and real-world projects at Uni Vivamus were invaluable. I landed my dream job before graduation thanks to the career services team.',
      program: 'MA Digital Marketing',
      year: '2024'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Finance Analyst',
      location: 'Birmingham, UK',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 5,
      text: 'The finance program at Uni Vivamus is world-class. The blend of theory and practical application gave me the confidence to excel in the competitive finance industry.',
      program: 'MSc Finance',
      year: '2023'
    },
    {
      id: 5,
      name: 'Sofia Martinez',
      role: 'International Relations Graduate',
      location: 'Madrid, Spain',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      rating: 5,
      text: 'Studying in Madrid through Uni Vivamus opened doors I never imagined. The multicultural environment and exceptional faculty created a perfect learning atmosphere.',
      program: 'BA International Relations',
      year: '2024'
    },
    {
      id: 6,
      name: 'David Kim',
      role: 'Engineering Graduate',
      location: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      rating: 5,
      text: 'The engineering program exceeded all my expectations. State-of-the-art labs, expert professors, and industry partnerships made this the best decision of my life.',
      program: 'MEng Mechanical Engineering',
      year: '2023'
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-['Playfair_Display']">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who are making their mark in the world
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          
          {/* Main Testimonial Card */}
          <div className="relative h-[500px] md:h-[450px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="absolute w-full"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-slate-200/50 to-transparent rounded-tr-full"></div>
                    
                    {/* Quote Icon */}
                    <div className="absolute top-8 left-8 opacity-10">
                      <Quote size={80} className="text-amber-500" />
                    </div>

                    <div className="relative z-10">
                      {/* Profile Section */}
                      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative"
                        >
                          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-amber-400 shadow-xl">
                            <img 
                              src={testimonials[currentIndex].image} 
                              alt={testimonials[currentIndex].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            {testimonials[currentIndex].year}
                          </div>
                        </motion.div>
                        
                        <div className="text-center md:text-left flex-1">
                          <h3 className="text-2xl font-bold text-slate-800 mb-1">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-amber-600 font-semibold mb-1">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-gray-500 text-sm mb-2">
                            {testimonials[currentIndex].location}
                          </p>
                          
                          {/* Rating Stars */}
                          <div className="flex gap-1 justify-center md:justify-start">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                              <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>

                        {/* Program Badge */}
                        <div className="bg-gradient-to-r from-slate-100 to-amber-50 px-4 py-2 rounded-full border border-amber-200">
                          <p className="text-sm font-semibold text-slate-700">
                            {testimonials[currentIndex].program}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl p-6 md:p-8">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                          "{testimonials[currentIndex].text}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white hover:bg-amber-500 text-slate-700 hover:text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white hover:bg-amber-500 text-slate-700 hover:text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all ${
                index === currentIndex 
                  ? 'w-12 h-3 bg-amber-500' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              } rounded-full`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '98%', label: 'Student Satisfaction' },
            { value: '15K+', label: 'Happy Graduates' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '95%', label: 'Employment Rate' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;