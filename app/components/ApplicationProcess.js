'use client';
import Link from "next/link";

import { motion } from 'framer-motion';
import { FileText, Upload, CreditCard, CheckCircle, Users } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Create Account',
      description: 'Register on our application portal with your email and create a secure password.',
      duration: '5 minutes',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      icon: Upload,
      title: 'Submit Documents',
      description: 'Upload required documents including transcripts, ID, and recommendation letters.',
      duration: '15 minutes',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Pay Application Fee',
      description: 'Pay the £50 application fee securely through our payment portal.',
      duration: '5 minutes',
      color: 'from-amber-500 to-amber-600'
    },
    {
      number: 4,
      icon: Users,
      title: 'Interview (If Required)',
      description: 'Selected candidates will be invited for an online or in-person interview.',
      duration: '30-45 minutes',
      color: 'from-green-500 to-green-600'
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Receive Decision',
      description: 'Get your admission decision within 2-4 weeks via email and student portal.',
      duration: '2-4 weeks',
      color: 'from-pink-500 to-pink-600'
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
            Application Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to complete your application and join our global community
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4 lg:justify-end">
                      <span className="text-sm font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl relative z-10`}
                  >
                    <step.icon size={40} className="text-white" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full blur-xl opacity-50"></div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-slate-800 shadow-lg z-20 border-4 border-amber-200">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden lg:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-['Playfair_Display']">
            Ready to Begin?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your application today and take the first step towards your dream education.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Start Application Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;