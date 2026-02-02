'use client';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function Partners() {
  // University Partners & Accreditations
  const partners = [
    { id: 1, name: 'Harvard University', logo: 'HARVARD' },
    { id: 2, name: 'MIT', logo: 'MIT' },
    { id: 3, name: 'Stanford', logo: 'STANFORD' },
    { id: 4, name: 'Oxford', logo: 'OXFORD' },
    { id: 5, name: 'Cambridge', logo: 'CAMBRIDGE' },
    { id: 6, name: 'Yale', logo: 'YALE' },
    { id: 7, name: 'Princeton', logo: 'PRINCETON' },
    { id: 8, name: 'Berkeley', logo: 'BERKELEY' }
  ];

  const accreditations = [
    { id: 1, name: 'QAA Accredited', logo: 'QAA' },
    { id: 2, name: 'AACSB', logo: 'AACSB' },
    { id: 3, name: 'EQUIS', logo: 'EQUIS' },
    { id: 4, name: 'AMBA', logo: 'AMBA' }
  ];

  const recognitions = [
    'Top 5 Global University Rankings 2026',
    'Excellence in Teaching Award',
    'Research Excellence Framework',
    'Outstanding Student Experience'
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Trusted Globally
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Accredited & Recognized Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnered with leading institutions and accredited by top educational bodies
          </p>
        </motion.div>

        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accreditations.map((acc, index) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 flex items-center justify-center border-2 border-blue-100 hover:border-blue-300 transition-all group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{acc.logo}</h3>
                  <p className="text-xs text-gray-600 mt-1">{acc.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* University Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Partnership Universities
          </h3>
          
          {/* Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-partners">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 bg-gray-50 rounded-xl px-8 py-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group cursor-pointer min-w-[180px]"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                      <span className="text-white font-bold text-xs">{partner.logo.substring(0, 3)}</span>
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{partner.logo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
        >
          <h3 className="text-center text-lg font-bold text-gray-900 mb-6">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white rounded-xl p-4 hover:shadow-md transition-all"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 font-medium">{recognition}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}