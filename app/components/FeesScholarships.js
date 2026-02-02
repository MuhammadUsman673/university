'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DollarSign, Award, Percent, TrendingUp } from 'lucide-react';

const FeesScholarships = () => {
  const tuitionFees = [
    {
      level: 'Undergraduate',
      ukFee: '£9,250',
      intFee: '£15,000 - £20,000',
      duration: 'per year',
      color: 'from-blue-500 to-blue-600'
    },
    {
      level: 'Postgraduate',
      ukFee: '£10,500',
      intFee: '£18,000 - £25,000',
      duration: 'per year',
      color: 'from-purple-500 to-purple-600'
    },
    {
      level: 'PhD/Doctorate',
      ukFee: '£4,500',
      intFee: '£16,000 - £22,000',
      duration: 'per year',
      color: 'from-green-500 to-green-600'
    },
    {
      level: 'Online Programs',
      ukFee: '£6,000',
      intFee: '£8,000 - £12,000',
      duration: 'total program',
      color: 'from-amber-500 to-amber-600'
    },
  ];

  const scholarships = [
    {
      icon: Award,
      name: 'Merit Scholarship',
      amount: 'Up to 50%',
      eligibility: 'Outstanding academic performance (GPA 3.8+)',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: TrendingUp,
      name: 'International Excellence',
      amount: 'Up to 30%',
      eligibility: 'International students with strong academics',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Percent,
      name: 'Early Bird Discount',
      amount: '15% Off',
      eligibility: 'Apply 3+ months before program start',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: DollarSign,
      name: 'Need-Based Aid',
      amount: 'Up to 40%',
      eligibility: 'Based on financial need assessment',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-['Playfair_Display']">
            Tuition Fees & Scholarships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invest in your future with competitive tuition fees and generous financial aid
          </p>
        </motion.div>

        {/* Tuition Fees */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Annual Tuition Fees
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tuitionFees.map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-100"
              >
                <div className={`bg-gradient-to-r ${fee.color} p-4 text-white text-center`}>
                  <h4 className="text-xl font-bold">{fee.level}</h4>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">UK/EU Students</p>
                    <p className="text-3xl font-bold text-slate-800">{fee.ukFee}</p>
                    <p className="text-xs text-gray-500">{fee.duration}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 mb-1">International Students</p>
                    <p className="text-2xl font-bold text-amber-600">{fee.intFee}</p>
                    <p className="text-xs text-gray-500">{fee.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Available Scholarships
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${scholarship.color} rounded-full flex items-center justify-center`}>
                    <scholarship.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      {scholarship.name}
                    </h4>
                    <div className="mb-3">
                      <span className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        {scholarship.amount}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">Eligibility:</span> {scholarship.eligibility}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Financial Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">
                Payment Options
              </h3>
              <ul className="space-y-3">
                {[
                  'Full payment discount: 5% off',
                  'Semester-based installments',
                  'Monthly payment plans available',
                  'Interest-free payment plans',
                  'Student loans supported',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">
                What's Included
              </h3>
              <ul className="space-y-3">
                {[
                  'World-class teaching',
                  'Access to all facilities',
                  'Online learning resources',
                  'Career services support',
                  'Student welfare services',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="/apply"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Apply for Scholarship
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeesScholarships;