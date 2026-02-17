'use client';
import { motion } from 'framer-motion';
import { Calendar, Rocket, Trophy, Globe, Users, Award } from 'lucide-react';

export default function OurStory() {
  const milestones = [
    {
      year: "1999",
      icon: Rocket,
      title: "The Beginning",
      description: "Uni-Vivamus was founded with a vision to provide accessible, quality education to students worldwide.",
      color: "from-[#355E47] to-[#2D5F3F]"
    },
    {
      year: "2005",
      icon: Globe,
      title: "Global Expansion",
      description: "Opened our first international campus in Dubai, marking the start of our global presence.",
      color: "from-[#2D5F3F] to-[#355E47]"
    },
    {
      year: "2010",
      icon: Users,
      title: "10,000 Students",
      description: "Reached a milestone of 10,000 enrolled students across 6 locations worldwide.",
      color: "from-[#3A5F4A] to-[#355E47]"
    },
    {
      year: "2015",
      icon: Award,
      title: "Accreditation Excellence",
      description: "Received international accreditations from QAA, AACSB, and EQUIS.",
      color: "from-[#355E47] to-[#3A5F4A]"
    },
    {
      year: "2020",
      icon: Trophy,
      title: "Digital Innovation",
      description: "Launched cutting-edge online learning platform, adapting to the changing educational landscape.",
      color: "from-[#2D5F3F] to-[#3A5F4A]"
    },
    {
      year: "2024",
      icon: Globe,
      title: "12 Global Locations",
      description: "Expanded to 12 campuses across UK, Europe, Middle East, and Asia with 15,000+ students.",
      color: "from-[#355E47] to-[#2D5F3F]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#355E47]/10 text-[#355E47] px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Our History
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#355E47] to-[#2D5F3F]">Journey</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            25+ years of excellence, innovation, and transforming lives through education
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#355E47]/30 via-[#2D5F3F]/30 to-[#3A5F4A]/30"></div>

          {/* Timeline Items */}
          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-[#355E47]/5 rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all border border-[#355E47]/10 hover:scale-105 duration-300 group">
                    <div className={`inline-flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-xl md:text-2xl font-bold text-gray-900">{milestone.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg`}>
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-[#355E47] via-[#2D5F3F] to-[#3A5F4A] rounded-2xl p-6 md:p-8 text-center text-white">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium mb-3">
              <Trophy className="w-3.5 h-3.5" />
              Join Us
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Be Part of Our Story
            </h3>
            <p className="text-sm text-white/90 mb-6 max-w-xl mx-auto">
              Join thousands of students who are writing their success stories with us
            </p>
            <button className="bg-white text-[#355E47] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}