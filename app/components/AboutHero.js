'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Award } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-teal-900/85 to-green-900/90 z-10"></div>
        {/* Replace with actual image: */}
        <div className="w-full h-full bg-gradient-to-br from-emerald-800 via-teal-700 to-green-800">
          {/* <img src="/about-hero.jpg" alt="About Us" className="w-full h-full object-cover" /> */}
        </div>
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
            className="flex items-center justify-center gap-2 text-emerald-200 mb-6"
          >
            <span className="text-sm">Home</span>
            <span>/</span>
            <span className="text-white font-semibold text-sm">About Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300">Uni-Vivamus</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering students worldwide with world-class education, innovation, 
            and a commitment to excellence since our founding.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">15,000+</div>
                <div className="text-sm text-emerald-200">Students</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">12</div>
                <div className="text-sm text-emerald-200">Locations</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">25+</div>
                <div className="text-sm text-emerald-200">Years</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}