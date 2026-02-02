'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar, Phone, Mail, MapPin } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            🎓 Applications Open for 2026
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your Journey to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
              Excellence Today
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 15,000+ students across 12 global locations. Your world-class education awaits.
            Apply now and take the first step toward transforming your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all flex items-center gap-3"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </motion.button>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>No Application Fee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Scholarships Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Rolling Admissions</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/* Schedule a Tour */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
          >
            <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-blue-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Schedule a Campus Tour</h3>
            <p className="text-blue-200 text-sm mb-4">
              Visit our campuses and experience student life firsthand
            </p>
            <button className="text-amber-400 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Talk to Admissions */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
          >
            <div className="bg-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Talk to Admissions</h3>
            <p className="text-blue-200 text-sm mb-4">
              Get personalized guidance from our admissions team
            </p>
            <button className="text-amber-400 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Request Information */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
          >
            <div className="bg-amber-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-amber-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Request Information</h3>
            <p className="text-blue-200 text-sm mb-4">
              Receive detailed information about programs & admissions
            </p>
            <button className="text-amber-400 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Get Info
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+44 20 1234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>admissions@uni-vivamus.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>12 Global Locations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}