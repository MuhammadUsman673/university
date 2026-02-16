'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-xs font-medium mb-5"
          >
            🎓 Applications Open for 2026
          </motion.div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Start Your Journey to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300">
              Excellence Today
            </span>
          </h2>

          <p className="text-base text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 15,000+ students across 12 global locations. Your world-class education awaits.
            Apply now and take the first step toward transforming your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-base rounded-full shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Trust Badge - Smaller */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span>No Application Fee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span>Scholarships Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span>Rolling Admissions</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions Grid - 2 columns instead of 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Talk to Admissions */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
          >
            <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Talk to Admissions</h3>
            <p className="text-emerald-200 text-sm mb-3">
              Get personalized guidance from our admissions team
            </p>
            <button className="text-emerald-300 font-semibold text-xs flex items-center gap-1.5 group-hover:gap-2 transition-all">
              Contact Us
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Request Information */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
          >
            <div className="bg-teal-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-teal-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Request Information</h3>
            <p className="text-emerald-200 text-sm mb-3">
              Receive detailed information about programs & admissions
            </p>
            <button className="text-emerald-300 font-semibold text-xs flex items-center gap-1.5 group-hover:gap-2 transition-all">
              Get Info
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Contact Info - Smaller */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-6 border-t border-white/10 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-emerald-200 text-sm">
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              <span>+44 20 1234 5678</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              <span>Admin@uni-vivamus.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>12 Global Locations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}