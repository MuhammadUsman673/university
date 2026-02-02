'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Award, Globe } from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Uni Vivamus Ranks Top 5 in Global University Rankings 2026',
      category: 'Achievement',
      date: 'January 28, 2026',
      readTime: '5 min read',
      excerpt: 'Our commitment to excellence has placed us among the world\'s leading educational institutions for the third consecutive year.',
      image: '/news/ranking.jpg',
      icon: TrendingUp,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 2,
      title: 'New AI Research Center Opens in Manchester Campus',
      category: 'Innovation',
      date: 'January 25, 2026',
      readTime: '4 min read',
      excerpt: 'State-of-the-art facility to drive breakthrough research in artificial intelligence and machine learning.',
      image: '/news/ai-center.jpg',
      icon: Award,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'International Student Exchange Program Expands to 50 Countries',
      category: 'Global',
      date: 'January 22, 2026',
      readTime: '6 min read',
      excerpt: 'Students can now experience education across five continents with our enhanced partnership network.',
      image: '/news/exchange.jpg',
      icon: Globe,
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 4,
      title: 'Record Breaking Graduate Employment Rate: 98.5%',
      category: 'Success',
      date: 'January 20, 2026',
      readTime: '3 min read',
      excerpt: 'Our graduates continue to excel in the job market with top companies worldwide.',
      image: '/news/employment.jpg',
      icon: Users,
      color: 'from-amber-600 to-orange-600'
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            Latest Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings across our global campuses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Latest News - Left Side (2/3) */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Latest News</h3>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group">
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-6">
              {newsArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-90`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <article.icon className="w-16 h-16 text-white/40" />
                      </div>
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h4>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Events - Right Side (1/3) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
                  >
                    {/* Date Badge */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg p-3 text-center min-w-[60px]">
                        <div className="text-2xl font-bold leading-none mb-1">
                          {event.date.split(' ')[1].replace(',', '')}
                        </div>
                        <div className="text-xs uppercase">
                          {event.date.split(' ')[0]}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-semibold mb-2">
                          {event.type}
                        </div>
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {event.title}
                        </h4>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 text-sm text-gray-600 ml-[76px]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                        <span className="text-green-600 font-semibold text-xs">
                          {event.spots}
                        </span>
                        <button className="text-blue-600 font-semibold text-xs hover:underline">
                          Register →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Events Button */}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                View All Events
              </motion.button>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss an Update
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest news, events, and opportunities delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}