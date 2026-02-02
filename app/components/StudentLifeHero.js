'use client';
import { motion } from 'framer-motion';
import { Users, Heart, Trophy, Sparkles } from 'lucide-react';

export default function StudentLifeHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-0">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/85 to-pink-900/90 z-10"></div>
        {/* Placeholder - Replace with actual campus life image */}
        <div className="w-full h-full bg-gradient-to-br from-blue-800 via-purple-700 to-pink-800">
          {/* <img src="/student-life-hero.jpg" alt="Student Life" className="w-full h-full object-cover" /> */}
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
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
            className="flex items-center justify-center gap-2 text-blue-200 mb-6"
          >
            <span className="text-sm">Home</span>
            <span>/</span>
            <span className="text-white font-semibold text-sm">Student Life</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500">Uni-Vivamus</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            More than just academics - discover a vibrant community, endless opportunities, 
            and memories that last a lifetime.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-blue-200">Student Clubs</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-blue-200">Sports Teams</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-blue-200">Annual Events</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Heart className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-sm text-blue-200">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}