'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Users, MapPin, ArrowRight, Award, BookOpen } from 'lucide-react';

const ProgramCards = ({ programs }) => {
  if (programs.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">No programs found</h3>
        <p className="text-gray-600">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Results Count */}
        <div className="mb-8 pt-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Showing <span style={{ color: '#355E47' }}>{programs.length}</span> Programs
          </h2>
        </div>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              {/* Program Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span style={{ backgroundColor: '#355E47' }} className="text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {program.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {program.category}
                  </span>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-slate-800 mb-3 transition-colors"
                  style={{ '--hover-color': '#355E47' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#355E47'}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                >
                  {program.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {program.description}
                </p>

                {/* Program Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} style={{ color: '#355E47' }} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} style={{ color: '#355E47' }} />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} style={{ color: '#355E47' }} />
                    <span>{program.students} students</span>
                  </div>
                  {program.accreditation && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award size={16} style={{ color: '#355E47' }} />
                      <span>{program.accreditation}</span>
                    </div>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} style={{ color: '#355E47' }} />
                    <span className="text-sm font-semibold text-gray-700">Key Features:</span>
                  </div>
                  <ul className="space-y-1">
                    {program.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <span style={{ color: '#355E47' }} className="mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/programs/${program.slug}`}
                    style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}
                    className="flex-1 text-white py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-lg text-center hover:opacity-90"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/apply"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;