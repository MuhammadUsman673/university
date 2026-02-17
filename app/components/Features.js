'use client';
import { motion } from 'framer-motion';
import { 
  Award, 
  Globe, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Briefcase,
  Target,
  Heart,
  Zap,
  Shield,
  Star,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'World-Class Education',
      description: 'Ranked among the top 5 universities globally with internationally recognized degrees and certifications.',
      bgColor: 'rgba(53,94,71,0.07)',
      iconBg: 'rgba(53,94,71,0.12)',
      iconColor: '#355E47'
    },
    {
      id: 2,
      icon: Globe,
      title: '12 Global Locations',
      description: 'Study in world-renowned cities across UK, Europe, Middle East, and USA with seamless campus transfers.',
      bgColor: 'rgba(45,95,63,0.07)',
      iconBg: 'rgba(45,95,63,0.12)',
      iconColor: '#2D5F3F'
    },
    {
      id: 3,
      icon: Briefcase,
      title: '98% Employment Rate',
      description: 'Our graduates are employed within 6 months at top companies like Google, Microsoft, and more.',
      bgColor: 'rgba(58,95,74,0.07)',
      iconBg: 'rgba(58,95,74,0.12)',
      iconColor: '#3A5F4A'
    },
    {
      id: 4,
      icon: Users,
      title: 'Expert Faculty',
      description: '500+ industry professionals and PhD holders bringing real-world experience to the classroom.',
      bgColor: 'rgba(53,94,71,0.07)',
      iconBg: 'rgba(53,94,71,0.12)',
      iconColor: '#355E47'
    },
    {
      id: 5,
      icon: Target,
      title: 'Career Support',
      description: 'Dedicated career services, internship programs, and job placement assistance throughout your journey.',
      bgColor: 'rgba(45,95,63,0.07)',
      iconBg: 'rgba(45,95,63,0.12)',
      iconColor: '#2D5F3F'
    },
    {
      id: 6,
      icon: BookOpen,
      title: 'Flexible Learning',
      description: 'On-campus, online, and hybrid programs designed to fit your lifestyle and career goals.',
      bgColor: 'rgba(58,95,74,0.07)',
      iconBg: 'rgba(58,95,74,0.12)',
      iconColor: '#3A5F4A'
    },
    {
      id: 7,
      icon: Shield,
      title: 'Scholarship Programs',
      description: 'Over $10M in scholarships awarded annually to deserving students based on merit and need.',
      bgColor: 'rgba(53,94,71,0.07)',
      iconBg: 'rgba(53,94,71,0.12)',
      iconColor: '#355E47'
    },
    {
      id: 8,
      icon: Heart,
      title: 'Student Support',
      description: '24/7 student services including counseling, health services, and academic support programs.',
      bgColor: 'rgba(45,95,63,0.07)',
      iconBg: 'rgba(45,95,63,0.12)',
      iconColor: '#2D5F3F'
    },
    {
      id: 9,
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Access to state-of-the-art labs, research facilities, and entrepreneurship incubators.',
      bgColor: 'rgba(58,95,74,0.07)',
      iconBg: 'rgba(58,95,74,0.12)',
      iconColor: '#3A5F4A'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: 'rgba(53,94,71,0.06)' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" style={{ backgroundColor: 'rgba(45,95,63,0.06)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-xs font-semibold mb-4 shadow-md"
            style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}
          >
            <Star className="w-3.5 h-3.5" />
            Why Choose Uni Vivamus
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Excellence in Every Aspect
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for students worldwide seeking world-class education
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className="h-full rounded-2xl p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl cursor-pointer relative overflow-hidden"
                style={{ backgroundColor: feature.bgColor }}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom right, rgba(53,94,71,0.04), rgba(45,95,63,0.04))` }}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10 shadow-sm"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.iconColor }} />
                  </motion.div>
                </div>

                {/* Content */}
                <h3
                  className="text-base font-bold text-gray-900 mb-2 transition-colors duration-300"
                  onMouseEnter={e => e.currentTarget.style.color = '#355E47'}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Decorative Arrow */}
                <Link href="/admissions" className="mt-3 flex items-center gap-2 font-semibold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#355E47' }}>
                  <span>Learn more</span>
                  <Rocket className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-16 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to bottom right, #1a2e23, #2D5F3F, #3A5F4A)' }}></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 z-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-30">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Ready to Transform Your Future?
            </h3>
            <p className="text-sm mb-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Join 15,000+ students who have already started their journey to success with Uni Vivamus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-2.5 bg-white font-bold text-sm rounded-full hover:bg-gray-50 transition-all shadow-xl"
                  style={{ color: '#355E47' }}
                >
                  Apply Now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}