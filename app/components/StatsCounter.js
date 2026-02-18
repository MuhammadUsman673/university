'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Globe, Trophy } from 'lucide-react';

function CountUp({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsCounter() {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: 15000,
      suffix: '+',
      label: 'Students Enrolled',
      description: 'Across all global campuses',
    },
    {
      id: 2,
      icon: GraduationCap,
      value: 98,
      suffix: '%',
      label: 'Graduate Employment',
      description: 'Within 6 months of graduation',
    },
    {
      id: 3,
      icon: Globe,
      value: 50,
      suffix: '+',
      label: 'Countries Represented',
      description: 'A truly global community',
    },
    {
      id: 4,
      icon: Trophy,
      value: 25,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Delivering world-class education',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#355E47] via-[#2D5F3F] to-[#3A5F4A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto">
            Transforming lives through education across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-white/60 text-xs sm:text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}