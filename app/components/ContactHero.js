'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-0"
      style={{ background: 'linear-gradient(to bottom right, #1a2e23, #2D5F3F, #3A5F4A)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
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
            <span className="text-white font-semibold text-xs">Contact Us</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Get in <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.7))' }}>Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg max-w-3xl mx-auto mb-10"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </motion.p>

          {/* Quick Contact Info - Clickable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="tel:+447466685430" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Call Us</div>
                <div className="text-base font-semibold text-white group-hover:text-white/80 transition-colors">+44 7466 685430</div>
              </div>
            </a>

            <a href="mailto:Admin@uni-vivamus.com" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Email Us</div>
                <div className="text-base font-semibold text-white group-hover:text-white/80 transition-colors">Admin@uni-vivamus.com</div>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Visit Us</div>
                <div className="text-base font-semibold text-white">12 Global Locations</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}