'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function WhyChooseLocation({ location, benefits }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-[#355E47]">{location}?</span>
            </h2>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Experience world-class education in one of the most vibrant and culturally rich cities. Our campus offers everything you need for academic excellence and personal growth.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-r from-[#355E47]/10 to-[#2D5F3F]/10 p-4 rounded-xl"
                >
                  <div className="bg-[#355E47] w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-0.5 text-sm">{benefit.title}</h4>
                    <p className="text-slate-600 text-xs">{benefit.description}</p>
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
            className="grid grid-cols-2 gap-3"
          >
            <div className="space-y-3">
              <div className="bg-gradient-to-br from-[#355E47]/20 to-[#2D5F3F]/20 rounded-2xl h-44 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#355E47] mb-1">95%</div>
                  <div className="text-xs text-slate-700">Employment Rate</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2D5F3F]/20 to-[#355E47]/30 rounded-2xl h-56 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#355E47] mb-1">4.8/5</div>
                  <div className="text-xs text-slate-700">Student Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="space-y-3 pt-6">
              <div className="bg-gradient-to-br from-[#355E47]/30 to-[#2D5F3F]/20 rounded-2xl h-56 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#355E47] mb-1">Top 50</div>
                  <div className="text-xs text-slate-700">Global Ranking</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2D5F3F]/20 to-[#355E47]/20 rounded-2xl h-44 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#355E47] mb-1">85+</div>
                  <div className="text-xs text-slate-700">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}