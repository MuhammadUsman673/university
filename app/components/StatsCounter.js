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
      iconBg: 'rgba(53,94,71,0.25)',
      iconColor: 'rgba(255,255,255,0.9)'
    },
    {
      id: 2,
      icon: GraduationCap,
      value: 98,
      suffix: '%',
      label: 'Graduate Success Rate',
      description: 'Employed within 6 months',
      iconBg: 'rgba(45,95,63,0.25)',
      iconColor: 'rgba(255,255,255,0.9)'
    },
    {
      id: 3,
      icon: Globe,
      value: 12,
      suffix: '',
      label: 'Global Locations',
      description: 'Across 3 continents',
      iconBg: 'rgba(58,95,74,0.25)',
      iconColor: 'rgba(255,255,255,0.9)'
    },
    {
      id: 4,
      icon: Award,
      value: 50,
      suffix: '+',
      label: 'Programs Offered',
      description: 'Undergraduate & Graduate',
      iconBg: 'rgba(53,94,71,0.25)',
      iconColor: 'rgba(255,255,255,0.9)'
    },
    {
      id: 5,
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Student Satisfaction',
      description: 'Based on annual survey',
      iconBg: 'rgba(45,95,63,0.25)',
      iconColor: 'rgba(255,255,255,0.9)'
    },
    {
      id: 6,
      icon: BookOpen,
      value: 500,
      suffix: '+',
      label: 'Expert Faculty',
      description: 'Industry professionals',
      iconBg: 'rgba(58,95,74,0.25)',
      iconColor: 'rgba(255,255,255,0.9)'
    }
  ];

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom right, #1a2e23, #2D5F3F, #3A5F4A)' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full filter blur-3xl" style={{ backgroundColor: '#355E47' }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full filter blur-3xl" style={{ backgroundColor: '#2D5F3F' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
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
              <div
                className="relative bg-white/10 backdrop-blur-lg rounded-lg p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to bottom right, rgba(53,94,71,0.2), rgba(45,95,63,0.2))' }}
                ></div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: stat.iconBg }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.iconColor }} />
                </div>

                {/* Number */}
                <div className="mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    <AnimatedCounter value={stat.value} duration={2.5} />
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-base font-bold text-white mb-1.5">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {stat.description}
                </p>

                {/* Decorative Element */}
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full filter blur-lg opacity-10"
                  style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}
                ></div>
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
          className="mt-10 text-center"
        >
          <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Ready to become part of our success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-6 py-2.5 text-white font-semibold text-sm rounded-full transition-all hover:scale-105"
              style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.1))', border: '1px solid rgba(255,255,255,0.3)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(to right, rgba(255,255,255,0.25), rgba(255,255,255,0.15))'}
              onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.1))'}
            >
              Start Your Application
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}