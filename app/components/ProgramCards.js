'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

const categoryColors = {
  Business: 'bg-amber-100 text-amber-700',
  Technology: 'bg-blue-100 text-blue-700',
  Health: 'bg-rose-100 text-rose-700',
  Psychology: 'bg-purple-100 text-purple-700',
  Law: 'bg-slate-100 text-slate-700',
  Hospitality: 'bg-teal-100 text-teal-700',
};

export default function ProgramCards({ programs }) {
  if (!programs || programs.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-4xl mb-3">🔍</p>
        <h3 className="text-xl font-bold text-gray-900 mb-1">No programs found</h3>
        <p className="text-sm text-gray-500">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={program.image}
                alt={program.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Category badge */}
              <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[program.category] || 'bg-gray-100 text-gray-600'}`}>
                {program.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#355E47] transition-colors">
                {program.name}
              </h3>

              <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                {program.description}
              </p>

              {/* Duration + accreditation */}
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {program.duration}
                </span>
                {program.accreditation && (
                  <span className="text-[#355E47] font-medium">{program.accreditation}</span>
                )}
              </div>

              {/* CTA */}
              <Link
                href="/apply"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#355E47] hover:bg-[#2D5F3F] text-white text-sm font-semibold transition-all group-hover:shadow-md mt-auto"
              >
                Apply Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}