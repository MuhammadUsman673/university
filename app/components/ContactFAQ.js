'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does the admissions process take?",
      answer: "The admissions process typically takes 2-4 weeks from the time you submit your complete application. We review applications on a rolling basis and will notify you via email once a decision has been made."
    },
    {
      question: "Can I visit the campus before applying?",
      answer: "Absolutely! We encourage prospective students to visit our campuses. You can book a campus tour through our website or by calling our admissions office. Virtual tours are also available for international students."
    },
    {
      question: "What are the tuition fees and payment options?",
      answer: "Tuition fees vary by program and campus location. We offer flexible payment plans, scholarships, and financial aid options. Contact our financial aid office for detailed information specific to your program of interest."
    },
    {
      question: "Do you offer scholarships for international students?",
      answer: "Yes! We offer merit-based and need-based scholarships for international students. Scholarship applications are reviewed automatically when you apply for admission. We award over $10M annually in scholarships."
    },
    {
      question: "What English language requirements do you have?",
      answer: "We accept IELTS (minimum 6.5), TOEFL (minimum 90), or equivalent qualifications. Some programs may have higher requirements. English language support courses are available if needed."
    },
    {
      question: "Can I transfer credits from another university?",
      answer: "Yes, we accept transfer credits from accredited institutions. Each transfer request is evaluated individually. Please submit your transcripts along with course descriptions for evaluation."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions. Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll respond as soon as possible.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105">
            Contact Support Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}