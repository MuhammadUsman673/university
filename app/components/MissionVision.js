'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Globe } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50">
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
            <Globe className="w-3.5 h-3.5" />
            Who We Are
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>Purpose</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Guided by our mission and driven by our vision to transform education globally
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}></div>
            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                At Uni Vivamus, we're all about making education open and awesome for everyone. We believe that no matter who you are or where you're from, you should have the chance to learn, grow, and chase your dreams. Whether you're just starting out or ready to take the next big step, we're here to support you every step of the way. Come join a community where your potential matters, and your future is bright!
              </p>
              <ul className="space-y-2.5">
                {[
                  'Open and accessible education for all',
                  'Supportive community for every student',
                  'Personal growth and dream chasing',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(53,94,71,0.1)' }}>
                      <span className="text-xs" style={{ color: '#355E47' }}>✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
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
            <div className="absolute inset-0 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, #2D5F3F, #355E47)' }}></div>
            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(to bottom right, #2D5F3F, #355E47)' }}>
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                At Uni Vivamus, we envision a world where every student feels confident, inspired, and empowered to make their mark. We strive to be a place where curiosity sparks innovation, friendships last a lifetime, and learning opens doors to amazing opportunities. Together, we're building the future — one student, one dream, one success story at a time.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Confident, inspired, and empowered students',
                  'Curiosity that sparks innovation',
                  'Building futures one success story at a time',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(45,95,63,0.1)' }}>
                      <span className="text-xs" style={{ color: '#2D5F3F' }}>✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}