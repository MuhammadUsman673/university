'use client';
import { motion } from 'framer-motion';
import { Library, Dumbbell, Coffee, Wifi, BookOpen, Home } from 'lucide-react';

export default function CampusFacilities() {
  const facilities = [
    {
      icon: Library,
      title: "Modern Libraries",
      description: "24/7 access to extensive collections, quiet study spaces, and digital resources",
      color: "from-blue-500 to-cyan-500",
      image: "/facilities/library.jpg"
    },
    {
      icon: Dumbbell,
      title: "Fitness Centers",
      description: "State-of-the-art gyms, swimming pools, yoga studios, and sports facilities",
      color: "from-green-500 to-emerald-500",
      image: "/facilities/gym.jpg"
    },
    {
      icon: Coffee,
      title: "Cafés & Dining",
      description: "Multiple dining options with international cuisine, cafés, and food courts",
      color: "from-amber-500 to-orange-500",
      image: "/facilities/cafe.jpg"
    },
    {
      icon: Home,
      title: "Student Housing",
      description: "Comfortable accommodation options with modern amenities and community spaces",
      color: "from-purple-500 to-pink-500",
      image: "/facilities/housing.jpg"
    },
    {
      icon: BookOpen,
      title: "Study Spaces",
      description: "Collaborative areas, private pods, and technology-equipped learning zones",
      color: "from-indigo-500 to-blue-500",
      image: "/facilities/study.jpg"
    },
    {
      icon: Wifi,
      title: "Tech Infrastructure",
      description: "High-speed WiFi, computer labs, maker spaces, and innovation hubs",
      color: "from-violet-500 to-purple-500",
      image: "/facilities/tech.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to learn, grow, and thrive on campus
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className={`relative h-48 bg-gradient-to-br ${facility.color} overflow-hidden`}>
                  {/* Placeholder - Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <facility.icon className="w-20 h-20 text-white opacity-30" />
                  </div>
                  {/* <img src={facility.image} alt={facility.title} className="w-full h-full object-cover" /> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <facility.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}