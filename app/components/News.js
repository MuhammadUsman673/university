'use client';

import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, TrendingUp, Briefcase } from 'lucide-react';

const paths = [
  {
    id: 'tech',
    label: 'Technology',
    emoji: '💻',
    color: '#4ECDC4',
    bg: 'rgba(78,205,196,0.08)',
    border: 'rgba(78,205,196,0.2)',
    avgSalary: '£52,000',
    employed: '98%',
    topRoles: ['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer'],
    companies: ['Google', 'Amazon', 'HSBC Tech', 'Revolut', 'Monzo', 'Sky'],
    alumni: [
      { name: 'Priya Sharma', role: 'Senior Engineer @ Google', year: '2022', avatar: 'PS' },
      { name: 'Daniel Koch', role: 'PM @ Amazon', year: '2021', avatar: 'DK' },
      { name: 'Yemi Adeyemi', role: 'Data Scientist @ Revolut', year: '2023', avatar: 'YA' },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    emoji: '📈',
    color: '#FFD166',
    bg: 'rgba(255,209,102,0.08)',
    border: 'rgba(255,209,102,0.2)',
    avgSalary: '£58,000',
    employed: '96%',
    topRoles: ['Investment Analyst', 'Risk Manager', 'Financial Advisor', 'Actuary'],
    companies: ['Goldman Sachs', 'Barclays', 'KPMG', 'Deloitte', 'JP Morgan', 'PwC'],
    alumni: [
      { name: 'Olivia Chen', role: 'Analyst @ Goldman Sachs', year: '2022', avatar: 'OC' },
      { name: 'Marcus Webb', role: 'Risk Manager @ Barclays', year: '2020', avatar: 'MW' },
      { name: 'Aisha Patel', role: 'Consultant @ KPMG', year: '2023', avatar: 'AP' },
    ],
  },
  {
    id: 'health',
    label: 'Healthcare',
    emoji: '🏥',
    color: '#FF6B6B',
    bg: 'rgba(255,107,107,0.08)',
    border: 'rgba(255,107,107,0.2)',
    avgSalary: '£44,000',
    employed: '99%',
    topRoles: ['NHS Doctor', 'Clinical Researcher', 'Health Consultant', 'Pharmacist'],
    companies: ['NHS', 'AstraZeneca', 'GSK', 'Pfizer', 'Bupa', 'Nuffield Health'],
    alumni: [
      { name: 'Tom Adebayo', role: 'Junior Doctor @ NHS', year: '2022', avatar: 'TA' },
      { name: 'Sara Novak', role: 'Researcher @ AstraZeneca', year: '2021', avatar: 'SN' },
      { name: 'James Liu', role: 'Pharmacist @ Boots', year: '2023', avatar: 'JL' },
    ],
  },
  {
    id: 'creative',
    label: 'Creative',
    emoji: '🎨',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    avgSalary: '£38,000',
    employed: '92%',
    topRoles: ['Art Director', 'Brand Strategist', 'Copywriter', 'Film Producer'],
    companies: ['BBC', 'Channel 4', 'Ogilvy', 'Wieden+Kennedy', 'Nike', 'Spotify'],
    alumni: [
      { name: 'Fatima Al-Rashid', role: 'Art Director @ BBC', year: '2021', avatar: 'FA' },
      { name: 'Leo Santos', role: 'Brand Lead @ Spotify', year: '2022', avatar: 'LS' },
      { name: 'Chloe Park', role: 'Producer @ Channel 4', year: '2023', avatar: 'CP' },
    ],
  },
  {
    id: 'law',
    label: 'Law & Policy',
    emoji: '⚖️',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.2)',
    avgSalary: '£55,000',
    employed: '95%',
    topRoles: ['Solicitor', 'Barrister', 'Policy Advisor', 'Legal Counsel'],
    companies: ['Clifford Chance', 'Linklaters', 'Home Office', 'UN', 'CPS', 'Magic Circle'],
    alumni: [
      { name: 'Kwame Mensah', role: 'Solicitor @ Clifford Chance', year: '2020', avatar: 'KM' },
      { name: 'Isabelle Roy', role: 'Policy Advisor @ Home Office', year: '2022', avatar: 'IR' },
      { name: 'Ravi Gupta', role: "Barrister @ Gray's Inn", year: '2021', avatar: 'RG' },
    ],
  },
];

function PathTab({ path, active, onClick, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      className="relative flex flex-col items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 flex-1 min-w-0"
      style={{
        background: active ? path.bg : 'rgba(255,255,255,0.02)',
        border: `1px solid ${active ? path.border : 'rgba(255,255,255,0.06)'}`,
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="text-xl">{path.emoji}</span>
      <span
        className="text-xs font-black uppercase tracking-wider hidden sm:block"
        style={{ color: active ? path.color : 'rgba(255,255,255,0.4)' }}
      >
        {path.label}
      </span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
          style={{ background: path.color }}
        />
      )}
    </motion.button>
  );
}

function AlumniCard({ alumni, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-3 p-4 rounded-xl"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
        style={{ background: `${color}20`, color, border: `1px solid ${color}30` }}
      >
        {alumni.avatar}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold text-white truncate">{alumni.name}</p>
        <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>{alumni.role}</p>
      </div>
      <span className="flex-shrink-0 text-xs ml-auto" style={{ color: 'rgba(255,255,255,0.25)' }}>'{alumni.year.slice(2)}</span>
    </motion.div>
  );
}

export default function LifeAfterGraduation() {
  const [active, setActive] = useState(paths[0]);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #060e09 0%, #0b1a11 50%, #060e09 100%)' }}
    >
      {/* Parallax grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: bgY,
          backgroundImage: `
            linear-gradient(rgba(53,94,71,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(53,94,71,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '55px 55px',
        }}
      />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 50% at 50% 10%, ${active.color}12 0%, transparent 70%)`, transition: 'background 0.6s ease' }}
      />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #355E47, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #355E47, transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={headingRef} className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-widest"
            style={{ borderColor: 'rgba(109,184,144,0.3)', color: '#6DB890', background: 'rgba(53,94,71,0.12)' }}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Graduate Outcomes
          </motion.div>

          {/* Title — matches StatsCounter: text-2xl md:text-3xl */}
          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: 60 }}
              animate={headingInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              Life After{' '}
              <span className="relative inline-block" style={{ color: active.color, transition: 'color 0.4s ease' }}>
                Graduation
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                  style={{ background: active.color, transition: 'background 0.4s ease' }}
                  initial={{ width: 0 }}
                  animate={headingInView ? { width: '100%' } : {}}
                  transition={{ duration: 0.9, delay: 0.5 }}
                />
              </span>
            </motion.h2>
          </div>

          {/* Subtitle — matches StatsCounter: text-base max-w-2xl */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Explore where our graduates go — real roles, real companies, real salaries.
          </motion.p>
        </div>

        {/* ── Path Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex gap-3 mb-10"
        >
          {paths.map((path, i) => (
            <PathTab
              key={path.id}
              path={path}
              active={active.id === path.id}
              onClick={() => setActive(path)}
              index={i}
            />
          ))}
        </motion.div>

        {/* ── Content Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {/* Left — Overview */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: active.bg, border: `1px solid ${active.border}` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl" style={{ background: active.color }} />
                <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: active.color }}>
                  {active.label} Snapshot
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-black text-white">{active.avgSalary}</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Avg. starting salary</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">{active.employed}</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Employed within 6 months</p>
                  </div>
                </div>
                <div className="mt-5 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: active.color }}
                    initial={{ width: 0 }}
                    animate={{ width: active.employed }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Top Roles
                </p>
                <div className="flex flex-col gap-2">
                  {active.topRoles.map((role, i) => (
                    <motion.div
                      key={role}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: active.color }} />
                      <span className="text-sm font-semibold text-white">{role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle — Companies */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <div
                className="rounded-2xl p-6 flex-1"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Building2 className="w-4 h-4" style={{ color: active.color }} />
                  <p className="text-xs font-black uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Hiring Our Graduates
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.companies.map((company, i) => (
                    <motion.span
                      key={company}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold"
                      style={{ background: `${active.color}15`, color: active.color, border: `1px solid ${active.color}25` }}
                    >
                      {company}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${active.color}20, ${active.color}08)`,
                  border: `1px solid ${active.color}30`,
                }}
              >
                <p className="text-sm font-black text-white mb-1">Explore {active.label} courses</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Find the right programme for your career path</p>
              </motion.div>
            </div>

            {/* Right — Alumni */}
            <div className="lg:col-span-1">
              <div
                className="rounded-2xl p-6 h-full"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Briefcase className="w-4 h-4" style={{ color: active.color }} />
                  <p className="text-xs font-black uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Alumni Spotlight
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {active.alumni.map((a, i) => (
                    <AlumniCard key={a.name} alumni={a} color={active.color} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs mt-10"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          Data sourced from Graduate Outcomes Survey 2025 · 6 months after graduation
        </motion.p>
      </div>
    </section>
  );
}