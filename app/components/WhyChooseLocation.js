'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function WhyChooseLocation({ location, benefits }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{location}?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Experience world-class education in one of the most vibrant and culturally rich cities. Our campus offers everything you need for academic excellence and personal growth.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-slate-700">Employment Rate</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">4.8/5</div>
                  <div className="text-sm text-slate-700">Student Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">Top 50</div>
                  <div className="text-sm text-slate-700">Global Ranking</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-pink-600 mb-2">85+</div>
                  <div className="text-sm text-slate-700">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}