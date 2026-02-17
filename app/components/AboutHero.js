'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Award } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to right, rgba(26,46,35,0.92), rgba(45,95,63,0.87), rgba(58,95,74,0.92))' }}
        ></div>
        <div
          className="w-full h-full"
          style={{ background: 'linear-gradient(to bottom right, #1a2e23, #2D5F3F, #3A5F4A)' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            <span className="text-xs">Home</span>
            <span>/</span>
            <span className="text-white font-semibold text-xs">About Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            About{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.75), rgba(255,255,255,0.95))' }}
            >
              Uni-Vivamus
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Empowering students worldwide with world-class education, innovation,
            and a commitment to excellence since our founding.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-white">15,000+</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Students</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-white">12</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Locations</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xl md:text-2xl font-bold text-white">25+</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Years</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}