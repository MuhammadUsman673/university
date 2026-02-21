'use client';
import { motion } from 'framer-motion';
import { MapPin, Users, GraduationCap, Building2 } from 'lucide-react';

export default function LocationHero({ location = {} }) {
  const {
    name = "Unknown Campus",
    country = "Unknown Country",
    tagline = "",
    isInternational = false,
    stats = {}
  } = location;

  const {
    students = 0,
    programs = 0,
    campusSize = "N/A",
    established = "N/A"
  } = stats;

  return (
    <div className="relative bg-gradient-to-br from-[#1a2e23] via-[#2D5F3F] to-[#355E47] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-[#a3c9b3] mb-6"
        >
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white">{name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4"
            >
              <MapPin className="w-3.5 h-3.5 text-[#a3c9b3]" />
              <span className="text-xs">{country}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-[#d0e3d7] to-white bg-clip-text text-transparent"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base text-[#d0e3d7] mb-6 leading-relaxed"
            >
              {tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all border border-white/20"
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
            className="grid grid-cols-2 gap-3"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <Users className="w-8 h-8 text-[#a3c9b3] mb-2" />
              <div className="text-xl font-bold mb-0.5">{students}</div>
              <div className="text-xs text-[#d0e3d7]">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <GraduationCap className="w-8 h-8 text-[#a3c9b3] mb-2" />
              <div className="text-xl font-bold mb-0.5">{programs}+</div>
              <div className="text-xs text-[#d0e3d7]">Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <Building2 className="w-8 h-8 text-[#a3c9b3] mb-2" />
              <div className="text-xl font-bold mb-0.5">{campusSize}</div>
              <div className="text-xs text-[#d0e3d7]">Campus Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <MapPin className="w-8 h-8 text-[#a3c9b3] mb-2" />
              <div className="text-xl font-bold mb-0.5">{established}</div>
              <div className="text-xs text-[#d0e3d7]">Established</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}