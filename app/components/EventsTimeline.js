'use client';
import { motion } from 'framer-motion';
import { Calendar, PartyPopper, GraduationCap, Trophy, Music, Globe } from 'lucide-react';

export default function EventsTimeline() {
  const events = [
    {
      month: "September",
      icon: PartyPopper,
      title: "Freshers Week",
      description: "Welcome week packed with orientations, parties, and club fairs",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80"
    },
    {
      month: "October",
      icon: Trophy,
      title: "Sports Festival",
      description: "Inter-campus tournaments and athletic competitions",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80"
    },
    {
      month: "November",
      icon: Globe,
      title: "International Day",
      description: "Cultural celebrations featuring food, performances, and traditions",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80"
    },
    {
      month: "December",
      icon: Music,
      title: "Winter Gala",
      description: "Annual formal dance and entertainment showcase",
      color: "from-indigo-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
    },
    {
      month: "February",
      icon: Calendar,
      title: "Career Fair",
      description: "Connect with top employers and explore internship opportunities",
      color: "from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80"
    },
    {
      month: "March",
      icon: PartyPopper,
      title: "Spring Festival",
      description: "Music concerts, art exhibitions, and outdoor activities",
      color: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80"
    },
    {
      month: "April",
      icon: Trophy,
      title: "Innovation Showcase",
      description: "Student project presentations and startup pitch competitions",
      color: "from-violet-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
    },
    {
      month: "May",
      icon: GraduationCap,
      title: "Graduation Week",
      description: "Commencement ceremonies and farewell celebrations",
      color: "from-blue-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Annual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Events</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Over 200 events throughout the year - something exciting happening every month!
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  {/* Month Badge overlaid on image */}
                  <div className={`absolute top-3 left-3 inline-block px-3 py-1 rounded-full bg-gradient-to-r ${event.color} text-white text-xs font-bold`}>
                    {event.month}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Event Info */}
                  <h3 className="text-base font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-sm text-gray-600">Events Annually</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
            <div className="text-sm text-gray-600">Student Participation</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Major Festivals</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}