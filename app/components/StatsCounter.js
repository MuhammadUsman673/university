'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Users, GraduationCap, Globe, Award, TrendingUp, BookOpen } from 'lucide-react';

function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
}

export default function StatsCounter() {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: 15000,
      suffix: '+',
      label: 'Active Students',
      description: 'Learning across our campuses',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      icon: GraduationCap,
      value: 98,
      suffix: '%',
      label: 'Graduate Success Rate',
      description: 'Employed within 6 months',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      icon: Globe,
      value: 12,
      suffix: '',
      label: 'Global Locations',
      description: 'Across 3 continents',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      icon: Award,
      value: 50,
      suffix: '+',
      label: 'Programs Offered',
      description: 'Undergraduate & Graduate',
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      id: 5,
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Student Satisfaction',
      description: 'Based on annual survey',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      id: 6,
      icon: BookOpen,
      value: 500,
      suffix: '+',
      label: 'Expert Faculty',
      description: 'Industry professionals',
      color: 'from-rose-600 to-red-600',
      bgColor: 'bg-rose-100',
      iconColor: 'text-rose-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Numbers That Speak
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Join thousands of students who have transformed their future with us
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>

                {/* Number */}
                <div className="mb-3">
                  <span className="text-5xl md:text-6xl font-bold text-white">
                    <AnimatedCounter value={stat.value} duration={2.5} />
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-blue-200 text-sm">
                  {stat.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-full filter blur-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-200 text-lg mb-6">
            Ready to become part of our success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105">
              Start Your Application
            </button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}