'use client';
import { motion } from 'framer-motion';
import { Music, Palette, Code, Globe, Heart, Mic, Camera, Rocket } from 'lucide-react';

export default function StudentClubs() {
  const clubCategories = [
    {
      category: "Arts & Culture",
      icon: Palette,
      clubs: ["Drama Society", "Photography Club", "Art Collective", "Film Society"],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Technology",
      icon: Code,
      clubs: ["Coding Club", "Robotics Society", "AI & ML Group", "Gaming Community"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Music & Performance",
      icon: Music,
      clubs: ["Band Society", "Dance Troupe", "A Cappella Group", "DJ Club"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "International",
      icon: Globe,
      clubs: ["Model UN", "Cultural Exchange", "Language Society", "Travel Club"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Community Service",
      icon: Heart,
      clubs: ["Volunteer Network", "Sustainability Club", "Charity Society", "Mentorship Program"],
      color: "from-red-500 to-pink-500"
    },
    {
      category: "Media & Communication",
      icon: Mic,
      clubs: ["Debate Society", "Student Newspaper", "Podcast Network", "Public Speaking"],
      color: "from-amber-500 to-orange-500"
    },
    {
      category: "Innovation",
      icon: Rocket,
      clubs: ["Entrepreneurship Club", "Startup Society", "Innovation Lab", "Design Thinking"],
      color: "from-indigo-500 to-violet-500"
    },
    {
      category: "Visual Media",
      icon: Camera,
      clubs: ["Video Production", "Content Creators", "Vlogging Society", "Streaming Community"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Clubs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join over 100 student-led clubs and organizations. Find your passion, make friends, and create memories.
          </p>
        </motion.div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clubCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>

                {/* Clubs List */}
                <ul className="space-y-2">
                  {category.clubs.map((club, clubIndex) => (
                    <li key={clubIndex} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} mt-2 flex-shrink-0`}></span>
                      <span className="text-gray-600 text-sm">{club}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Can't Find Your Club?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your own! We support student initiatives and provide resources to launch new clubs.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
            Start a New Club
          </button>
        </motion.div>
      </div>
    </section>
  );
}