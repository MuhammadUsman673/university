'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, TrendingUp, Users, Award, Globe, ArrowRight, Mail, Send } from 'lucide-react';
import Link from 'next/link';

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
      color: 'from-[#355E47] to-[#2D5F3F]',
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
      color: 'from-[#2D5F3F] to-[#355E47]',
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
      color: 'from-[#3A5F4A] to-[#355E47]',
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
      color: 'from-[#355E47] to-[#2D5F3F]',
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
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Latest News</h3>
              <Link href="/news" className="group flex items-center gap-1 text-sm text-[#355E47] hover:text-[#2D5F3F] font-medium transition-colors">
                View all
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

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

                    <p className="text-sm text-gray-600">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Events - Right Side (1/3) */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
              <Link href="/events" className="group flex items-center gap-1 text-sm text-[#355E47] hover:text-[#2D5F3F] font-medium transition-colors">
                View all
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

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
                  {/* Date Badge */}
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

                  {/* Details */}
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

        {/* Action Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-[#355E47] via-[#2D5F3F] to-[#3A5F4A] rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Left Text */}
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold mb-1">Ready to Begin?</h3>
                <p className="text-sm text-white/80">Join our global community today</p>
              </div>

              {/* Action Buttons */}
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 justify-end">
                <Link href="/admissions">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-[#355E47] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Apply Now
                  </motion.button>
                </Link>
                
                <a href="mailto:admissions@univivamus.edu">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </motion.button>
                </a>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-transparent text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all border-2 border-white/30 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Contact
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}