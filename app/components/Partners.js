'use client';
import { motion } from 'framer-motion';
import { Award, MapPin } from 'lucide-react';

export default function Partners() {
  // University Partners & Locations
  const partners = [
    { id: 1, name: 'London Campus', logo: 'LONDON', country: 'United Kingdom' },
    { id: 2, name: 'Manchester Campus', logo: 'MANCHESTER', country: 'United Kingdom' },
    { id: 3, name: 'Birmingham Campus', logo: 'BIRMINGHAM', country: 'United Kingdom' },
    { id: 4, name: 'Leeds Campus', logo: 'LEEDS', country: 'United Kingdom' },
    { id: 5, name: 'Dubai Campus', logo: 'DUBAI', country: 'United Arab Emirates' },
    { id: 6, name: 'Paris Campus', logo: 'PARIS', country: 'France' },
    { id: 7, name: 'Madrid Campus', logo: 'MADRID', country: 'Spain' },
    { id: 8, name: 'Tampa Campus', logo: 'TAMPA', country: 'United States' },
    { id: 9, name: 'Malta Campus', logo: 'MALTA', country: 'Malta' },
    { id: 10, name: 'Heidelberg Campus', logo: 'HEIDELBERG', country: 'Germany' }
  ];

  const recognitions = [
    'QAA Accredited',
    'AACSB Accredited',
    'EQUIS Accredited',
    'AMBA Accredited'
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Smaller font sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Global Presence
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Global Campuses
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Study across 3 continents in world-renowned locations
          </p>
        </motion.div>

        {/* University Locations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Universities Locations
          </h3>
          
          {/* Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll-partners">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 bg-emerald-50 rounded-lg px-6 py-5 border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all group cursor-pointer min-w-[160px]"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:from-emerald-700 group-hover:to-teal-700 transition-all">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{partner.logo}</p>
                    <p className="text-xs text-gray-600">{partner.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-2 bg-white rounded-lg p-3 hover:shadow-sm transition-all"
              >
                <Award className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 font-medium">{recognition}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}