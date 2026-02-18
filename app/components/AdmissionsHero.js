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

      {/* Responsive Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        
        {/* Breadcrumb - Responsive text size */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide" 
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href={location?.isInternational ? "/international" : "/homestudents"} className="hover:text-white transition-colors">
            {location?.isInternational ? "International" : "Home Students"}
          </a>
          <span>/</span>
          <span className="text-white font-medium truncate">{location?.name}</span>
        </motion.div>

        {/* Responsive Grid - Stack on mobile, side by side on larger screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Content - Full width on mobile */}
          <div className="w-full text-center lg:text-left">
            
            {/* Location Badge - Responsive sizing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 mx-auto lg:mx-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'rgba(255,255,255,0.8)' }} />
              <span className="text-xs sm:text-sm">{location?.country}</span>
            </motion.div>

            {/* Heading - Responsive font sizes */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight"
            >
              {location?.name}
            </motion.h1>

            {/* Tagline - Responsive text */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              {location?.tagline}
            </motion.p>

            {/* Buttons - Responsive layout */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="/programs"
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-center"
                style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}
                onMouseEnter={e => e.target.style.background = 'linear-gradient(to right, #2D5F3F, #1a3d2a)'}
                onMouseLeave={e => e.target.style.background = 'linear-gradient(to right, #355E47, #2D5F3F)'}
              >
                View Programs
              </a>
              <a
                href="/contact"
                className="backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all text-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                Contact Campus
              </a>
            </motion.div>
          </div>

          {/* Right Stats - Responsive grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full grid grid-cols-2 gap-3 sm:gap-4"
          >
            {[
              { icon: Users, value: stats.students || '5,000+', label: 'Students' },
              { icon: GraduationCap, value: stats.programs ? `${stats.programs}+` : '50+', label: 'Programs' },
              { icon: Building2, value: stats.campusSize || '50 acres', label: 'Campus Size' },
              { icon: MapPin, value: stats.established || '1995', label: 'Established' },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl text-center lg:text-left"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2 sm:mb-3 mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.8)' }} />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">{value}</div>
                <div className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}