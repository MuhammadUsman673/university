'use client';
import { motion } from 'framer-motion';
import { Users, Heart, Trophy, Sparkles } from 'lucide-react';

export default function StudentLifeHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-0">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(53,94,71,0.95), rgba(45,95,63,0.90), rgba(58,95,74,0.95))' }}></div>
        <div className="w-full h-full" style={{ background: 'linear-gradient(to bottom right, #1a2e23, #2D5F3F, #3A5F4A)' }}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
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
            className="flex items-center justify-center gap-2 mb-5"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            <span className="text-xs">Home</span>
            <span className="text-xs">/</span>
            <span className="text-white font-semibold text-xs">Student Life</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
          >
            <Heart className="w-3.5 h-3.5" />
            Campus Life
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Life at Uni-Vivamus
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            More than just academics - discover a vibrant community, endless opportunities,
            and memories that last a lifetime.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, value: '100+', label: 'Student Clubs' },
              { icon: Trophy, value: '50+', label: 'Sports Teams' },
              { icon: Sparkles, value: '200+', label: 'Annual Events' },
              { icon: Heart, value: '95%', label: 'Satisfaction' },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="backdrop-blur-md rounded-xl p-4 sm:p-5 border"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-2 text-white/80" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 