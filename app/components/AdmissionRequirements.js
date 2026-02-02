'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Globe, FileCheck } from 'lucide-react';

const AdmissionRequirements = () => {
  const requirements = [
    {
      icon: GraduationCap,
      title: 'Undergraduate Programs',
      color: 'from-blue-500 to-blue-600',
      items: [
        'High School Diploma or equivalent (A-Levels, IB, etc.)',
        'Minimum GPA: 3.0/4.0 or equivalent',
        'English Language: IELTS 6.0+ or TOEFL 80+',
        'Personal Statement (500-800 words)',
        'Two Letters of Recommendation',
        'Passport Copy',
      ]
    },
    {
      icon: BookOpen,
      title: 'Postgraduate Programs',
      color: 'from-purple-500 to-purple-600',
      items: [
        "Bachelor's Degree (2:1 or higher)",
        'Minimum GPA: 3.3/4.0 or equivalent',
        'English Language: IELTS 6.5+ or TOEFL 90+',
        'Statement of Purpose (1000 words)',
        'Two Academic References',
        'CV/Resume',
        'Portfolio (for creative programs)',
      ]
    },
    {
      icon: Globe,
      title: 'International Students',
      color: 'from-amber-500 to-amber-600',
      items: [
        'Valid Passport',
        'Student Visa (we provide support)',
        'Proof of Financial Support',
        'English Language Proficiency',
        'Academic Transcripts (certified translation)',
        'Health Insurance',
      ]
    },
    {
      icon: FileCheck,
      title: 'PhD/Doctorate Programs',
      color: 'from-green-500 to-green-600',
      items: [
        "Master's Degree (Merit or Distinction)",
        'Research Proposal (2000-3000 words)',
        'English Language: IELTS 7.0+ or TOEFL 100+',
        'Three Academic References',
        'Publications (if available)',
        'Interview Required',
      ]
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50">
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
            Entry Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Review the requirements for your chosen program level
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${req.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <req.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{req.title}</h3>
                </div>
              </div>

              {/* List */}
              <div className="p-6">
                <ul className="space-y-4">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-10 border border-amber-200 text-center"
        >
          <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
              <FileCheck size={32} className="text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
              Need Help with Requirements?
            </h3>

            <p className="text-gray-600 text-lg">
              Our admissions team will guide you step-by-step through eligibility,
              documents, and the complete application process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="mailto:admissions@uni-vivamus.com"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Email Admissions
              </a>
              <a
                href="tel:+447466685430"
                className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AdmissionRequirements;
