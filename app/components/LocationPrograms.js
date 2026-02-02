'use client';
import { motion } from 'framer-motion';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';

export default function LocationPrograms({ programs }) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our popular programs available at this campus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Program Header */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {program.level}
                </div>
                <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                <p className="text-blue-100 text-sm">{program.department}</p>
              </div>

              {/* Program Details */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-slate-900">{program.duration}</div>
                    <div className="text-xs text-slate-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-slate-900">{program.intake}</div>
                    <div className="text-xs text-slate-500">Intake</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-slate-900">{program.accreditation}</div>
                    <div className="text-xs text-slate-500">Accredited</div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href="/programs"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-indigo-700 transition-all group-hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/admissions"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/programs"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            View All Programs
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}