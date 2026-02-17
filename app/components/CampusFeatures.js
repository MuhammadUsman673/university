'use client';
import { motion } from 'framer-motion';
import { Building2, BookOpen, Users, Award, Globe, Wifi } from 'lucide-react';

const iconMap = {
  Building2, BookOpen, Users, Award, Globe, Wifi
};

// Image mapping for each feature type
const featureImages = {
  Building2: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop", // Modern building
  BookOpen: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop", // Library
  Users: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop", // Students collaborating
  Award: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&auto=format&fit=crop", // Graduation/achievement
  Globe: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&auto=format&fit=crop", // International/global
  Wifi: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop", // Tech/lab
};

export default function CampusFeatures({ features }) {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Elegant Green Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#355E47]/5 to-white" />
        
        {/* Organic flowing shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="greenFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#355E47" stopOpacity="0.03" />
                <stop offset="50%" stopColor="#2D5F3F" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#1a2e23" stopOpacity="0.03" />
              </linearGradient>
              <pattern id="campusGrid" patternUnits="userSpaceOnUse" width="60" height="60">
                <path d="M30 0 L30 60 M0 30 L60 30" stroke="#355E47" strokeWidth="0.2" opacity="0.1" />
                <circle cx="30" cy="30" r="2" fill="#355E47" opacity="0.05" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#greenFlow)" />
            <rect width="100" height="100" fill="url(#campusGrid)" />
          </svg>
        </div>
      </div>

      {/* Animated gradient orbs - with fixed positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#355E47]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#2D5F3F]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#355E47]/5 to-[#2D5F3F]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Decorative title accent */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#355E47] to-transparent" />
            <span className="text-sm uppercase tracking-[0.2em] text-[#355E47]/70 font-light">Premium</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#355E47] to-transparent" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Campus <span className="relative">
              <span className="bg-gradient-to-r from-[#355E47] to-[#2D5F3F] bg-clip-text text-transparent">
                Features
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#355E47] to-transparent" />
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto relative">
            <span className="relative inline-block">
              World-class facilities and resources for your success
              <span className="absolute -bottom-1 left-1/4 right-1/4 h-px bg-[#355E47]/20" />
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features && features.length > 0 ? features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Building2;
            const imageUrl = featureImages[feature.icon] || featureImages.Building2;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-2xl transition-all duration-500 border border-slate-200/80 hover:border-[#355E47]/30 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={feature.title || "Campus feature"}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop";
                    }}
                  />
                  {/* Gradient overlay over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#355E47]/80 via-[#355E47]/20 to-transparent" />
                  
                  {/* Icon on image */}
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/30">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Card background with green tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#355E47]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#355E47]/0 to-[#355E47]/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#355E47]/0 to-[#355E47]/10 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#355E47] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-4 flex items-center gap-2 text-[#355E47] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Explore facility</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Bottom highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#355E47]/30 to-transparent translate-y-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          }) : (
            // Fallback content if no features
            <div className="col-span-full text-center py-12">
              <p className="text-slate-600">No features available at this time.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}