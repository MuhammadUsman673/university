'use client';
import { motion } from 'framer-motion';
import { MapPin, Users, GraduationCap, Building2 } from 'lucide-react';

export default function LocationHero({ location = {} }) {
  const stats = location.stats || {};

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-blue-200 mb-8"
        >
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href={location?.isInternational ? "/international" : "/homestudents"} className="hover:text-white transition-colors">
            {location?.isInternational ? "International" : "Home Students"}
          </a>
          <span>/</span>
          <span className="text-white">{location?.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm">{location?.country}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            >
              {location?.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              {location?.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/programs"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                View Programs
              </a>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Contact Campus
              </a>
            </motion.div>
          </div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Users className="w-10 h-10 text-blue-300 mb-3" />
              <div className="text-3xl font-bold mb-1">{stats.students}</div>
              <div className="text-sm text-blue-200">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <GraduationCap className="w-10 h-10 text-blue-300 mb-3" />
              <div className="text-3xl font-bold mb-1">{stats.programs}+</div>
              <div className="text-sm text-blue-200">Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Building2 className="w-10 h-10 text-blue-300 mb-3" />
              <div className="text-3xl font-bold mb-1">{stats.campusSize}</div>
              <div className="text-sm text-blue-200">Campus Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <MapPin className="w-10 h-10 text-blue-300 mb-3" />
              <div className="text-3xl font-bold mb-1">{stats.established}</div>
              <div className="text-sm text-blue-200">Established</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
