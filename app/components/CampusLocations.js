'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function CampusLocations() {
  const locations = [
    {
      region: "United Kingdom",
      campuses: [
        {
          city: "London",
          address: "123 Education Street, Westminster",
          phone: "+44 20 7123 4567",
          email: "london@univavamus.com",
          students: "3,500+",
          color: "from-blue-500 to-cyan-500"
        },
        {
          city: "Manchester",
          address: "45 Academic Road, City Centre",
          phone: "+44 161 234 5678",
          email: "manchester@univavamus.com",
          students: "2,000+",
          color: "from-indigo-500 to-blue-500"
        },
        {
          city: "Birmingham",
          address: "78 University Lane, Central",
          phone: "+44 121 345 6789",
          email: "birmingham@univavamus.com",
          students: "1,800+",
          color: "from-purple-500 to-indigo-500"
        }
      ]
    },
    {
      region: "Europe",
      campuses: [
        {
          city: "Paris",
          address: "56 Rue de l'Université",
          phone: "+33 1 23 45 67 89",
          email: "paris@univavamus.com",
          students: "1,500+",
          color: "from-pink-500 to-rose-500"
        },
        {
          city: "Berlin",
          address: "89 Bildungsstraße, Mitte",
          phone: "+49 30 1234 5678",
          email: "berlin@univavamus.com",
          students: "1,200+",
          color: "from-amber-500 to-orange-500"
        }
      ]
    },
    {
      region: "Middle East & Asia",
      campuses: [
        {
          city: "Dubai",
          address: "Dubai Knowledge Park, Block 12",
          phone: "+971 4 123 4567",
          email: "dubai@univavamus.com",
          students: "2,500+",
          color: "from-emerald-500 to-teal-500"
        },
        {
          city: "Singapore",
          address: "88 Education Boulevard",
          phone: "+65 6123 4567",
          email: "singapore@univavamus.com",
          students: "1,800+",
          color: "from-cyan-500 to-blue-500"
        },
        {
          city: "Kuala Lumpur",
          address: "KL Education City, Tower B",
          phone: "+60 3 1234 5678",
          email: "kl@univavamus.com",
          students: "1,200+",
          color: "from-violet-500 to-purple-500"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Campuses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            12 world-class campuses across 3 continents, bringing quality education closer to you
          </p>
        </motion.div>

        {/* Locations by Region */}
        <div className="space-y-12">
          {locations.map((region, regionIndex) => (
            <motion.div
              key={regionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: regionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Region Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                {region.region}
              </h3>

              {/* Campus Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.campuses.map((campus, campusIndex) => (
                  <motion.div
                    key={campusIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: campusIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                      {/* City Name with Gradient */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-1">{campus.city}</h4>
                          <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${campus.color} text-white text-sm font-semibold`}>
                            {campus.students} Students
                          </div>
                        </div>
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${campus.color} flex items-center justify-center`}>
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-3 text-gray-600">
                          <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                          <span className="text-sm">{campus.address}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Phone className="w-5 h-5 flex-shrink-0 text-gray-400" />
                          <a href={`tel:${campus.phone}`} className="text-sm hover:text-blue-600 transition-colors">
                            {campus.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Mail className="w-5 h-5 flex-shrink-0 text-gray-400" />
                          <a href={`mailto:${campus.email}`} className="text-sm hover:text-blue-600 transition-colors">
                            {campus.email}
                          </a>
                        </div>
                      </div>

                      {/* Visit Button */}
                      <button className="w-full mt-4 py-3 bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-gray-700 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                        <span>Visit Campus</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Can't Find a Campus Near You?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our online programs and bring world-class education to your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
              Explore Online Programs
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all hover:scale-105">
              Book Virtual Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}