'use client';
import { motion } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';

export default function Partners() {
  const partners = [
    { id: 1, logo: 'LONDON', country: 'United Kingdom' },
    { id: 2, logo: 'MANCHESTER', country: 'United Kingdom' },
    { id: 3, logo: 'BIRMINGHAM', country: 'United Kingdom' },
    { id: 4, logo: 'LEEDS', country: 'United Kingdom' },
    { id: 5, logo: 'DUBAI', country: 'United Arab Emirates' },
    { id: 6, logo: 'PARIS', country: 'France' },
    { id: 7, logo: 'MADRID', country: 'Spain' },
    { id: 8, logo: 'TAMPA', country: 'United States' },
    { id: 9, logo: 'MALTA', country: 'Malta' },
    { id: 10, logo: 'HEIDELBERG', country: 'Germany' },
  ];

  const recognitions = ['QAA Accredited','AACSB Accredited','EQUIS Accredited','AMBA Accredited'];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-inner:hover { animation-play-state: paused; }
        .marquee-outer { overflow: hidden; position: relative; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#355E47]/10 text-[#355E47] px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" /> Global Presence
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Global Campuses</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Study across 3 continents in world-renowned locations</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-10 sm:mb-12">
          <h3 className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">University Locations</h3>

          <div className="marquee-outer">
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, white, transparent)', zIndex: 10 }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, white, transparent)', zIndex: 10 }} />
            <div className="marquee-inner py-2">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="flex-shrink-0 mx-2 bg-[#355E47]/5 rounded-lg px-5 py-4 border border-[#355E47]/20 hover:border-[#355E47] hover:shadow-md transition-all group cursor-pointer" style={{ minWidth: '140px' }}>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#355E47] to-[#2D5F3F] rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:opacity-80 transition-all">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm mb-1 truncate" style={{ maxWidth: 120 }}>{partner.logo}</p>
                    <p className="text-xs text-gray-500 truncate" style={{ maxWidth: 120 }}>{partner.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-gradient-to-r from-[#355E47]/5 to-[#2D5F3F]/5 rounded-xl p-4 sm:p-6 border border-[#355E47]/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {recognitions.map((recognition, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-2 bg-white rounded-lg p-3 hover:shadow-sm transition-all">
                <Award className="w-4 h-4 text-[#355E47] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 font-medium leading-tight">{recognition}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}