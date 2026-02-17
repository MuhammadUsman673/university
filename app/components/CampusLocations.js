'use client';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CampusLocations() {
  const locations = [
    {
      region: "United Kingdom",
      campuses: [
        {
          city: "London",
          address: "123 Education Street, Westminster",
          students: "3,500+",
          image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80"
        },
        {
          city: "Manchester",
          address: "45 Academic Road, City Centre",
          students: "2,000+",
          image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80"
        },
        {
          city: "Birmingham",
          address: "78 University Lane, Central",
          students: "1,800+",
          image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80"
        }
      ]
    },
    {
      region: "Europe",
      campuses: [
        {
          city: "Paris",
          address: "56 Rue de l'Université",
          students: "1,500+",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80"
        },
        {
          city: "Berlin",
          address: "89 Bildungsstraße, Mitte",
          students: "1,200+",
          image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=80"
        }
      ]
    },
    {
      region: "Middle East & Asia",
      campuses: [
        {
          city: "Dubai",
          address: "Dubai Knowledge Park, Block 12",
          students: "2,500+",
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
        },
        {
          city: "Singapore",
          address: "88 Education Boulevard",
          students: "1,800+",
          image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80"
        },
        {
          city: "Kuala Lumpur",
          address: "KL Education City, Tower B",
          students: "1,200+",
          image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80"
        }
      ]
    }
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
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: 'rgba(53,94,71,0.1)', color: '#355E47' }}>
            <MapPin className="w-3.5 h-3.5" />
            Global Campuses
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Global <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>Campuses</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            12 world-class campuses across 3 continents, bringing quality education closer to you
          </p>
        </motion.div>

        {/* Locations by Region */}
        <div className="space-y-10">
          {locations.map((region, regionIndex) => (
            <motion.div
              key={regionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: regionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Region Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <div className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #355E47, #2D5F3F)' }}></div>
                {region.region}
              </h3>

              {/* Campus Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {region.campuses.map((campus, campusIndex) => (
                  <motion.div
                    key={campusIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: campusIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                      
                      {/* City Photo */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={campus.image}
                          alt={campus.city}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        {/* Students badge overlaid on image */}
                        <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-white text-xs font-semibold" style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>
                          {campus.students} Students
                        </div>
                      </div>

                      <div className="p-5">
                        {/* City Name */}
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-bold text-gray-900">{campus.city}</h4>
                          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Address Only */}
                        <div className="space-y-2 mb-3">
                          <div className="flex items-start gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                            <span className="text-xs">{campus.address}</span>
                          </div>
                        </div>

                        {/* Apply Now Button - Clickable */}
                        <Link href="/apply" className="block w-full">
                          <button
                            className="w-full mt-3 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                            style={{ backgroundColor: '#f9fafb', color: '#374151' }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(to right, #355E47, #2D5F3F)'; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#f9fafb'; e.currentTarget.style.color = '#374151'; }}
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}