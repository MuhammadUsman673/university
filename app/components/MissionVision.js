'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Globe } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by our mission and driven by our vision to transform education globally
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Uni Vivamus, we're all about making education open and awesome for everyone. We believe that no matter who you are or where you're from, you should have the chance to learn, grow, and chase your dreams. Whether you're just starting out or ready to take the next big step, we're here to support you every step of the way. Come join a community where your potential matters, and your future is bright!
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Open and accessible education for all</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Supportive community for every student</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Personal growth and dream chasing</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Uni Vivamus, we envision a world where every student feels confident, inspired, and empowered to make their mark. We strive to be a place where curiosity sparks innovation, friendships last a lifetime, and learning opens doors to amazing opportunities. Together, we're building the future — one student, one dream, one success story at a time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Confident, inspired, and empowered students</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Curiosity that sparks innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Building futures one success story at a time</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}