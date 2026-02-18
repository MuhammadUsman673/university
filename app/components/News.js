'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, TrendingUp, Users, Award, Globe, Mail } from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Uni Vivamus Ranks Top 5 in Global University Rankings 2026',
      category: 'Achievement',
      date: 'January 28, 2026',
      readTime: '5 min read',
      excerpt: 'Our commitment to excellence has placed us among the world\'s leading educational institutions for the third consecutive year.',
      icon: TrendingUp,
      bgColor: 'bg-[#355E47]/10'
    },
    {
      id: 2,
      title: 'New AI Research Center Opens in Manchester Campus',
      category: 'Innovation',
      date: 'January 25, 2026',
      readTime: '4 min read',
      excerpt: 'State-of-the-art facility to drive breakthrough research in artificial intelligence and machine learning.',
      icon: Award,
      bgColor: 'bg-[#2D5F3F]/10'
    },
    {
      id: 3,
      title: 'International Student Exchange Program Expands to 50 Countries',
      category: 'Global',
      date: 'January 22, 2026',
      readTime: '6 min read',
      excerpt: 'Students can now experience education across five continents with our enhanced partnership network.',
      icon: Globe,
      bgColor: 'bg-[#3A5F4A]/10'
    },
    {
      id: 4,
      title: 'Record Breaking Graduate Employment Rate: 98.5%',
      category: 'Success',
      date: 'January 20, 2026',
      readTime: '3 min read',
      excerpt: 'Our graduates continue to excel in the job market with top companies worldwide.',
      icon: Users,
      bgColor: 'bg-[#355E47]/10'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Open Day - London Campus',
      date: 'Feb 15, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'London',
      type: 'Campus Tour',
      spots: '50 spots left'
    },
    {
      id: 2,
      title: 'Virtual Information Session',
      date: 'Feb 18, 2026',
      time: '2:00 PM - 3:30 PM',
      location: 'Online',
      type: 'Webinar',
      spots: 'Unlimited'
    },
    {
      id: 3,
      title: 'International Student Fair - Dubai',
      date: 'Feb 22, 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Dubai',
      type: 'Fair',
      spots: '200 spots left'
    },
    {
      id: 4,
      title: 'Career Development Workshop',
      date: 'Feb 25, 2026',
      time: '1:00 PM - 5:00 PM',
      location: 'Manchester',
      type: 'Workshop',
      spots: '30 spots left'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#355E47]/10 text-[#355E47] px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Latest Updates
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            News & Events
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings across our global campuses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News - Left Side (2/3) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Latest News</h3>
            <div className="space-y-4">
              {newsArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-50 to-[#355E47]/5 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="p-5">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`${article.bgColor} p-2.5 rounded-lg`}>
                        <article.icon className="w-5 h-5 text-[#355E47]" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block bg-[#355E47]/10 text-[#355E47] px-2 py-1 rounded text-xs font-semibold mb-2">
                          {article.category}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#355E47] transition-colors">
                          {article.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{article.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Events - Right Side (1/3) — sticky removed */}
          <div className="lg:col-span-1">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-[#355E47] hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="bg-gradient-to-br from-[#355E47] to-[#2D5F3F] text-white rounded-lg p-2.5 text-center min-w-[50px]">
                        <div className="text-lg font-bold leading-none mb-1">
                          {event.date.split(' ')[1].replace(',', '')}
                        </div>
                        <div className="text-[10px] uppercase">
                          {event.date.split(' ')[0]}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="inline-block bg-[#355E47]/10 text-[#355E47] px-2 py-0.5 rounded text-xs font-semibold mb-1.5">
                          {event.type}
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#355E47] transition-colors">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600 ml-[62px]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="pt-1.5 border-t border-gray-200 mt-1.5">
                        <span className={`text-xs font-semibold ${event.spots === 'Unlimited' ? 'text-[#355E47]' : 'text-amber-600'}`}>
                          {event.spots}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-[#355E47] via-[#2D5F3F] to-[#3A5F4A] rounded-2xl p-6 md:p-8 text-center text-white"
        >
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            Stay Connected
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3">Never Miss an Update</h3>
          <p className="text-white/90 text-sm mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and get the latest news, events, and opportunities delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-sm"
            />
            <button className="bg-white text-[#355E47] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all shadow-sm">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}