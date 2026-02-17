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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: 'rgba(53,94,71,0.1)', color: '#355E47' }}>
            <Rocket className="w-3.5 h-3.5" />
            Student Life
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Clubs & <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>Activities</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Join over 100 student-led clubs and organizations. Find your passion, make friends, and create memories.
          </p>
        </motion.div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {clubCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                {/* Category Name */}
                <h3 className="text-base font-bold text-gray-900 mb-3">{category.category}</h3>

                {/* Clubs List */}
                <ul className="space-y-1.5">
                  {category.clubs.map((club, clubIndex) => (
                    <li key={clubIndex} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} mt-1.5 flex-shrink-0`}></span>
                      <span className="text-gray-600 text-xs">{club}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Can't Find Your Club */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center rounded-2xl p-6 md:p-8 border"
          style={{ background: 'linear-gradient(to right, rgba(53,94,71,0.05), rgba(45,95,63,0.08))', borderColor: 'rgba(53,94,71,0.15)' }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Can't Find Your Club?
          </h3>
          <p className="text-sm text-gray-600 mb-5 max-w-xl mx-auto">
            Start your own! We support student initiatives and provide resources to launch new clubs.
          </p>
          <button
            className="text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition-all hover:scale-105"
            style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}
          >
            Start a New Club
          </button>
        </motion.div>
      </div>
    </section>
  );
}