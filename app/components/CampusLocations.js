'use client';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CampusLocations() {
  const ukCampuses = [
    { city: 'London',     address: '123 Education Street, Westminster',   students: '3,500+', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80' },
    { city: 'Birmingham', address: '78 University Lane, Central',          students: '1,800+', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80' },
    { city: 'Manchester', address: '45 Academic Road, City Centre',        students: '2,000+', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80' },
    { city: 'Leeds',      address: '12 Campus Drive, Leeds City Centre',   students: '1,600+', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { city: 'Leicester',  address: '34 Scholar Avenue, Leicester',         students: '1,200+', image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&q=80' },
    { city: 'Nottingham', address: '67 Lace Market, Nottingham',           students: '1,100+', image: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=600&q=80' },
  ];

  const globalCampuses = [
    { code: 'AE', city: 'Dubai',       country: 'United Arab Emirates', address: 'Dubai Knowledge Park, Block 12', students: '2,500+', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
    { code: 'MT', city: 'Malta',       country: 'Malta',                address: 'Valletta Education Centre',      students: '900+',   image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=600&q=80' },
    { code: 'FR', city: 'Paris',       country: 'France',               address: "56 Rue de l'Université",        students: '1,500+', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80' },
    { code: 'DE', city: 'Heidelberg',  country: 'Germany',              address: '23 Universitätsstraße',         students: '1,000+', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80' },
    { code: 'US', city: 'Tampa USA',   country: 'United States',        address: '890 Academic Blvd, Tampa FL',   students: '1,300+', image: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=600&q=80' },
    { code: 'ES', city: 'Madrid',      country: 'Spain',                address: '14 Calle de la Universidad',    students: '1,100+', image: 'https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=600&q=80' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: 'rgba(53,94,71,0.1)', color: '#355E47' }}>
            <MapPin className="w-3.5 h-3.5" />
            Global Campuses
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Global <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>Campuses</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            12 world-class campuses across 3 continents — study where the world meets
          </p>
        </motion.div>

        {/* ── UK Locations ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #355E47, #2D5F3F)' }} />
            United Kingdom
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ukCampuses.map((campus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <img src={campus.image} alt={campus.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* City name on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-bold text-sm leading-tight">{campus.city}</p>
                    <p className="text-white/70 text-[10px]">{campus.students} students</p>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="bg-white px-3 py-2.5">
                  <Link href="/apply">
                    <button
                      className="w-full text-xs font-semibold py-1.5 rounded-md flex items-center justify-center gap-1 transition-all duration-200"
                      style={{ backgroundColor: 'rgba(53,94,71,0.08)', color: '#355E47' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(to right, #355E47, #2D5F3F)'; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(53,94,71,0.08)'; e.currentTarget.style.color = '#355E47'; }}
                    >
                      Apply <ArrowRight className="w-3 h-3" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Global Campuses ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #355E47, #2D5F3F)' }} />
            Global Campuses
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {globalCampuses.map((campus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img src={campus.image} alt={campus.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/25" />
                  {/* Country code badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #355E47, #2D5F3F)' }}>
                    <span className="text-white text-[10px] font-black tracking-wide">{campus.code}</span>
                  </div>
                  {/* Students badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-white text-xs font-semibold" style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>
                    {campus.students}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{campus.city}</h4>
                      <p className="text-xs text-gray-500">{campus.country}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 text-gray-500 mb-4">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                    <span className="text-xs">{campus.address}</span>
                  </div>

                  <Link href="/apply" className="block w-full">
                    <button
                      className="w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#f9fafb', color: '#374151' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(to right, #355E47, #2D5F3F)'; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#f9fafb'; e.currentTarget.style.color = '#374151'; }}
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}