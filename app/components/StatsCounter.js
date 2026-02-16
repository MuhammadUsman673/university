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
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
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
      color: 'from-teal-600 to-emerald-600',
      bgColor: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      id: 4,
      icon: Award,
      value: 50,
      suffix: '+',
      label: 'Programs Offered',
      description: 'Undergraduate & Graduate',
      color: 'from-amber-600 to-emerald-600',
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
      color: 'from-cyan-600 to-teal-600',
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
      color: 'from-emerald-600 to-green-600',
      bgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Even smaller font sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Our Impact
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Numbers That Speak
          </h2>
          <p className="text-base text-emerald-200 max-w-2xl mx-auto">
            Join thousands of students who have transformed their future with us
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`${stat.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>

                {/* Number - Even smaller font sizes */}
                <div className="mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    <AnimatedCounter value={stat.value} duration={2.5} />
                    {stat.suffix}
                  </span>
                </div>

                {/* Label - Even smaller font size */}
                <h3 className="text-base font-bold text-white mb-1.5">
                  {stat.label}
                </h3>

                {/* Description - Smaller font size */}
                <p className="text-emerald-200 text-xs">
                  {stat.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-3 right-3 w-12 h-12 bg-gradient-to-br ${stat.color} opacity-10 rounded-full filter blur-lg`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Even smaller font sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-emerald-200 text-sm mb-3">
            Ready to become part of our success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm rounded-full hover:shadow-md hover:shadow-emerald-500/30 transition-all hover:scale-105">
              Start Your Application
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}