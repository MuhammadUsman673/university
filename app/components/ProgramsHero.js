'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Users, Globe, Award } from 'lucide-react';

const ProgramsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center mt-0" style={{ background: 'linear-gradient(to bottom right, #1a2e23, #2D5F3F, #1a2e23)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-5"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          <Link href="/" className="hover:text-white transition-colors text-xs">Home</Link>
          <span className="text-xs">/</span>
          <span className="text-white font-semibold text-xs">Programs</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          Academic Programs
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Explore Our
          <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.7))' }}>
            Academic Programs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10"
          style={{ color: 'rgba(255,255,255,0.8)' }}
        >
          Choose from our diverse range of undergraduate and postgraduate programs designed to shape future leaders and innovators.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: GraduationCap, value: '150+', label: 'Programs' },
            { icon: Users, value: '15K+', label: 'Students' },
            { icon: Globe, value: '12', label: 'Global Campuses' },
            { icon: Award, value: '98%', label: 'Success Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-sm rounded-xl p-4 sm:p-5 border"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <stat.icon className="mx-auto mb-2 w-6 h-6 sm:w-7 sm:h-7" style={{ color: 'rgba(255,255,255,0.85)' }} />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsHero;