'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Globe, FileCheck } from 'lucide-react';

const AdmissionRequirements = () => {
  const requirements = [
    {
      icon: GraduationCap,
      title: 'Undergraduate Programs',
      color: 'from-[#355E47] to-[#2D5F3F]',
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
      color: 'from-[#2D5F3F] to-[#3A5F4A]',
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
      color: 'from-[#3A5F4A] to-[#355E47]',
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
      color: 'from-[#355E47] to-[#3A5F4A]',
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
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-[#355E47]/5">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#355E47]/10 text-[#355E47] px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            Admissions
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Entry Requirements
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Review the requirements for your chosen program level
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
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
              <div className={`bg-gradient-to-r ${req.color} p-5 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <req.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold">{req.title}</h3>
                </div>
              </div>

              {/* List */}
              <div className="p-5">
                <ul className="space-y-3">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
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
          className="mt-10 rounded-2xl p-8 text-center border border-[#355E47]/20"
          style={{ background: 'linear-gradient(to right, rgba(53,94,71,0.05), rgba(45,95,63,0.08))' }}
        >
          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
              <FileCheck size={28} className="text-white" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-800">
              Need Help with Requirements?
            </h3>

            <p className="text-sm text-gray-600 max-w-xl">
              Our admissions team will guide you step-by-step through eligibility,
              documents, and the complete application process.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <a
                href="mailto:admissions@uni-vivamus.com"
                className="text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg"
                style={{ backgroundColor: '#355E47' }}
              >
                Email Admissions
              </a>
              <a
                href="tel:+447466685430"
                className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg"
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