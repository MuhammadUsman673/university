'use client';
import { motion } from 'framer-motion';
import { MapPin, Users, GraduationCap, Building2 } from 'lucide-react';

export default function LocationHero({ location = {} }) {
  const stats = location.stats || {};

  return (
    <div className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #1a2e23, #2D5F3F, #1a2e23)' }}>
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
          className="flex items-center gap-2 text-sm mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}
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
              className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <MapPin className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.8)' }} />
              <span className="text-sm">{location?.country}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              {location?.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-8 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)' }}
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
                className="text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}
                onMouseEnter={e => e.target.style.background = 'linear-gradient(to right, #2D5F3F, #1a3d2a)'}
                onMouseLeave={e => e.target.style.background = 'linear-gradient(to right, #355E47, #2D5F3F)'}
              >
                View Programs
              </a>
              <a
                href="/contact"
                className="backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
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
            {[
              { icon: Users, value: stats.students, label: 'Students' },
              { icon: GraduationCap, value: `${stats.programs}+`, label: 'Programs' },
              { icon: Building2, value: stats.campusSize, label: 'Campus Size' },
              { icon: MapPin, value: stats.established, label: 'Established' },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="backdrop-blur-sm p-6 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <Icon className="w-10 h-10 mb-3" style={{ color: 'rgba(255,255,255,0.8)' }} />
                <div className="text-3xl font-bold mb-1">{value}</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}