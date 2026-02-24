'use client';
import { motion } from 'framer-motion';
import { Quote, MapPin, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StudentTestimonials() {
  const router = useRouter();

  const testimonials = [
    {
      name: "Emma Thompson",
      program: "Business Administration",
      year: "3rd Year",
      location: "London Campus",
      image: "/students/emma.jpg",
      quote: "The vibrant campus life and diverse community have made my university experience unforgettable. I've made lifelong friends from around the world!",
      highlight: "President of Business Society"
    },
    {
      name: "Ahmed Hassan",
      program: "Computer Science",
      year: "2nd Year",
      location: "Dubai Campus",
      image: "/students/ahmed.jpg",
      quote: "From hackathons to sports tournaments, there's always something exciting happening. The facilities are world-class and the support is amazing.",
      highlight: "Tech Club Founder"
    },
    {
      name: "Sofia Martinez",
      program: "International Relations",
      year: "4th Year",
      location: "Paris Campus",
      image: "/students/sofia.jpg",
      quote: "Being part of Model UN and cultural exchange programs has shaped my perspective. This university truly prepares you for a global career.",
      highlight: "Model UN Director"
    },
    {
      name: "James Chen",
      program: "Engineering",
      year: "3rd Year",
      location: "Leeds Campus",
      image: "/students/james.jpg",
      quote: "The innovation labs and maker spaces have been incredible for bringing my ideas to life. Plus, the sports facilities are top-notch!",
      highlight: "Robotics Team Captain"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: 'rgba(53,94,71,0.1)', color: '#355E47' }}>
            <Quote className="w-3.5 h-3.5" />
            Student Stories
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Student <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>Stories</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their experiences, adventures, and growth at Uni-Vivamus
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  "{student.quote}"
                </p>

                {/* Student Info */}
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
                    {student.name.charAt(0)}
                  </div>

                  {/* Details */}
                  <div className="flex-grow">
                    <h4 className="text-base font-bold text-gray-900 mb-1">{student.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{student.program} • {student.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{student.location}</span>
                    </div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(53,94,71,0.1)', color: '#355E47' }}>
                      {student.highlight}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center rounded-2xl p-6 md:p-8"
          style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Ready to Write Your Story?
          </h3>
          <p className="text-sm mb-6 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Join our vibrant community and create memories that will last a lifetime
          </p>
          <button
            onClick={() => router.push('/apply')}
            className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: 'white', color: '#355E47' }}
          >
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}