'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Users, Globe, Award } from 'lucide-react';

const ProgramsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 mt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-gray-400 mb-8"
        >
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-400">Programs</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Playfair_Display']"
        >
          Explore Our
          <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Academic Programs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Choose from our diverse range of undergraduate and postgraduate programs designed to shape future leaders and innovators.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
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
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <stat.icon className="mx-auto mb-3 text-amber-400" size={32} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsHero;