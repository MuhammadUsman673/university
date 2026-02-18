'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      category: 'Rankings',
      emoji: '🏆',
      title: 'Uni Vivamus Ranks Top 5 in Global University Rankings 2026',
      excerpt: 'Our institution has climbed to the top 5 in the latest global university rankings, reflecting our commitment to academic excellence.',
      date: 'Feb 12, 2026',
      readTime: '4 min',
      author: 'Communications Team',
      featured: true,
    },
    {
      id: 2,
      category: 'Partnership',
      emoji: '🤝',
      title: 'New Partnership with Leading Tech Companies for Student Placements',
      excerpt: 'We have secured partnerships with over 50 leading technology firms to offer guaranteed placement opportunities for graduates.',
      date: 'Feb 8, 2026',
      readTime: '3 min',
      author: 'Careers Office',
      featured: false,
    },
    {
      id: 3,
      category: 'Research',
      emoji: '🔬',
      title: 'Groundbreaking Research Initiative Launched in Sustainability',
      excerpt: 'A £2M research fund established to support student-led sustainability projects across all faculties.',
      date: 'Feb 3, 2026',
      readTime: '5 min',
      author: 'Research Department',
      featured: false,
    },
  ];

  const events = [
    {
      id: 1,
      title: 'Open Day — London Campus',
      day: '15',
      month: 'MAR',
      time: '10:00 AM – 4:00 PM',
      type: 'Open Day',
      spots: 12,
      urgent: true,
    },
    {
      id: 2,
      title: 'International Student Webinar',
      day: '20',
      month: 'MAR',
      time: '2:00 PM GMT',
      type: 'Webinar',
      spots: 45,
      urgent: false,
    },
    {
      id: 3,
      title: 'Postgraduate Info Evening',
      day: '25',
      month: 'MAR',
      time: '6:00 PM – 8:00 PM',
      type: 'Info Evening',
      spots: 8,
      urgent: true,
    },
    {
      id: 4,
      title: 'Scholarship Application Deadline',
      day: '01',
      month: 'APR',
      time: '11:59 PM GMT',
      type: 'Deadline',
      spots: null,
      urgent: false,
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f1f16 0%, #1a3328 50%, #0f1f16 100%)' }}>

      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#355E47' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#2D9B5A' }} />
      </div>

      {/* Top & bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #355E47, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #355E47, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: '#355E47' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6DB890' }}>
                  Latest from Uni Vivamus
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                News &{' '}
                <span style={{ WebkitTextStroke: '1.5px #355E47', color: 'transparent' }}>
                  Events
                </span>
              </h2>
            </div>
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-all"
              style={{ color: '#6DB890' }}
            >
              View all stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">

          {/* News Articles — 3 cols */}
          <div className="lg:col-span-3 space-y-4">

            {/* Featured article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden border"
              style={{
                background: 'linear-gradient(135deg, rgba(53,94,71,0.4), rgba(53,94,71,0.15))',
                borderColor: 'rgba(53,94,71,0.5)',
              }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" style={{ backgroundColor: '#355E47' }} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-lg">{newsArticles[0].emoji}</span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(53,94,71,0.5)', color: '#6DB890' }}>
                    {newsArticles[0].category}
                  </span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{newsArticles[0].date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-snug group-hover:text-green-300 transition-colors">
                  {newsArticles[0].title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    By {newsArticles[0].author} · {newsArticles[0].readTime} read
                  </span>
                  <span className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#6DB890' }}>
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>

            {/* Smaller articles */}
            {newsArticles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="group flex items-start gap-4 rounded-xl p-4 cursor-pointer border transition-all hover:border-green-800"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ backgroundColor: 'rgba(53,94,71,0.3)' }}>
                  {article.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#6DB890' }}>
                      {article.category}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>· {article.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-green-300 transition-colors mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs line-clamp-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {article.excerpt}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: '#6DB890' }} />
              </motion.article>
            ))}
          </div>

          {/* Events Panel — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden border h-full flex flex-col"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(53,94,71,0.3)' }}>

              {/* Events header */}
              <div className="px-5 py-4 border-b flex items-center justify-between flex-shrink-0"
                style={{ borderColor: 'rgba(53,94,71,0.3)', background: 'rgba(53,94,71,0.2)' }}>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" style={{ color: '#6DB890' }} />
                  <span className="text-sm font-black text-white uppercase tracking-wide">Upcoming</span>
                </div>
                <Link href="/events" className="text-xs font-semibold" style={{ color: '#6DB890' }}>
                  All events →
                </Link>
              </div>

              {/* Events list */}
              <div className="flex-1 divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group flex gap-4 px-5 py-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 text-center w-10">
                      <div className="text-xs font-black uppercase" style={{ color: '#6DB890' }}>{event.month}</div>
                      <div className="text-2xl font-black text-white leading-none">{event.day}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white leading-tight group-hover:text-green-300 transition-colors">
                        {event.title}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{event.time}</p>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ backgroundColor: 'rgba(53,94,71,0.4)', color: '#6DB890' }}>
                          {event.type}
                        </span>
                        {event.urgent && event.spots && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-red-900/40 text-red-400">
                            {event.spots} spots left
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="px-5 py-4 border-t flex-shrink-0"
                style={{ borderColor: 'rgba(53,94,71,0.3)', background: 'rgba(53,94,71,0.1)' }}>
                <p className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" style={{ color: '#6DB890' }} />
                  Get updates in your inbox
                </p>
                <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Weekly digest of news and events.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 text-xs px-3 py-2 rounded-lg min-w-0 outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(53,94,71,0.5)',
                      color: 'white',
                    }}
                  />
                  <button
                    className="text-white text-xs px-3 py-2 rounded-lg font-bold flex-shrink-0 hover:opacity-90 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, #355E47, #2D9B5A)' }}
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}