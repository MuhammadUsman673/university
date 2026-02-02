'use client';
import { motion } from 'framer-motion';
import { Quote, MapPin, GraduationCap } from 'lucide-react';

export default function StudentTestimonials() {
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
      location: "Singapore Campus",
      image: "/students/james.jpg",
      quote: "The innovation labs and maker spaces have been incredible for bringing my ideas to life. Plus, the sports facilities are top-notch!",
      highlight: "Robotics Team Captain"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students about their experiences, adventures, and growth at Uni-Vivamus
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{student.quote}"
                </p>

                {/* Student Info */}
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {student.name.charAt(0)}
                  </div>
                  {/* <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" /> */}

                  {/* Details */}
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{student.program} • {student.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{student.location}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
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
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Story?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our vibrant community and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105">
              Apply Now
            </button>
            <button className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-blue-800 transition-all hover:scale-105">
              Book Campus Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}