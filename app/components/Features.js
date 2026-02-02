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

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'World-Class Education',
      description: 'Ranked among the top 5 universities globally with internationally recognized degrees and certifications.',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      icon: Globe,
      title: '12 Global Locations',
      description: 'Study in world-renowned cities across UK, Europe, Middle East, and USA with seamless campus transfers.',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      icon: Briefcase,
      title: '98% Employment Rate',
      description: 'Our graduates are employed within 6 months at top companies like Google, Microsoft, and more.',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      icon: Users,
      title: 'Expert Faculty',
      description: '500+ industry professionals and PhD holders bringing real-world experience to the classroom.',
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      id: 5,
      icon: Target,
      title: 'Career Support',
      description: 'Dedicated career services, internship programs, and job placement assistance throughout your journey.',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'bg-cyan-50',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      id: 6,
      icon: BookOpen,
      title: 'Flexible Learning',
      description: 'On-campus, online, and hybrid programs designed to fit your lifestyle and career goals.',
      color: 'from-rose-600 to-red-600',
      bgColor: 'bg-rose-50',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      id: 7,
      icon: Shield,
      title: 'Scholarship Programs',
      description: 'Over $10M in scholarships awarded annually to deserving students based on merit and need.',
      color: 'from-violet-600 to-purple-600',
      bgColor: 'bg-violet-50',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600'
    },
    {
      id: 8,
      icon: Heart,
      title: 'Student Support',
      description: '24/7 student services including counseling, health services, and academic support programs.',
      color: 'from-pink-600 to-rose-600',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      id: 9,
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Access to state-of-the-art labs, research facilities, and entrepreneurship incubators.',
      color: 'from-yellow-600 to-amber-600',
      bgColor: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Why Choose Uni Vivamus
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Excellence in Every Aspect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for students worldwide seeking world-class education
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className={`h-full ${feature.bgColor} rounded-2xl p-8 border-2 border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl cursor-pointer`}>
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center relative z-10`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-xl filter blur-xl transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span>Learn more</span>
                  <Rocket className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join 15,000+ students who have already started their journey to success with Uni Vivamus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-blue-50 transition-all shadow-xl hover:scale-105">
                Apply Now
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105">
                Schedule a Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}