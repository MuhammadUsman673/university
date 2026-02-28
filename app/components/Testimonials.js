'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
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

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 })
  };

  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const t = testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#355E47]/5 via-white to-[#2D5F3F]/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
              Student Success Stories
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates who are making their mark in the world
            </p>
          </motion.div>
        </div>

        {/* Carousel Wrapper — no fixed height, let content dictate */}
        <div className="relative px-8 sm:px-12">

          {/* Slide Area */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -8000) nextTestimonial();
                  else if (swipe > 8000) prevTestimonial();
                }}
                className="w-full cursor-grab active:cursor-grabbing"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-7 md:p-8 relative overflow-hidden">

                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-[#355E47]/20 to-transparent rounded-bl-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-[#2D5F3F]/20 to-transparent rounded-tr-full pointer-events-none" />

                    {/* Large quote icon */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 opacity-10 pointer-events-none">
                      <Quote size={48} className="text-[#355E47]" />
                    </div>

                    <div className="relative z-10">
                      {/* Profile row — stacks on mobile, row on md+ */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-5 sm:mb-6">

                        {/* Avatar */}
                        <div className="relative flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-[#355E47] shadow-lg">
                            <img
                              src={t.image}
                              alt={t.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-[#355E47] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                            {t.year}
                          </div>
                        </div>

                        {/* Name / role / location / stars */}
                        <div className="text-center sm:text-left flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-0.5 leading-tight">
                            {t.name}
                          </h3>
                          <p className="text-[#355E47] font-semibold text-sm mb-0.5 truncate">
                            {t.role}
                          </p>
                          <p className="text-gray-500 text-xs mb-2">{t.location}</p>
                          <div className="flex gap-0.5 justify-center sm:justify-start">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} size={14} className="fill-[#355E47] text-[#355E47]" />
                            ))}
                          </div>
                        </div>

                        {/* Program badge — sits below on mobile, right on sm+ */}
                        <div className="flex-shrink-0 bg-gradient-to-r from-[#355E47]/10 to-[#2D5F3F]/10 px-3 py-1.5 rounded-full border border-[#355E47]/20 self-center sm:self-start">
                          <p className="text-xs font-semibold text-[#355E47] whitespace-nowrap">
                            {t.program}
                          </p>
                        </div>
                      </div>

                      {/* Quote text */}
                      <div className="bg-gradient-to-br from-[#355E47]/10 to-[#2D5F3F]/5 rounded-xl p-4 sm:p-5">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                          "{t.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next arrows — positioned outside the card via negative margin on parent */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white hover:bg-[#355E47] text-slate-700 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-20 touch-manipulation"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white hover:bg-[#355E47] text-slate-700 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-20 touch-manipulation"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all rounded-full touch-manipulation ${
                index === currentIndex
                  ? 'w-8 h-2 bg-[#355E47]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { value: '98%', label: 'Student Satisfaction' },
            { value: '15K+', label: 'Happy Graduates' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '95%', label: 'Employment Rate' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-xl sm:text-2xl font-bold text-[#355E47] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-medium leading-tight">
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