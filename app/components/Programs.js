'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, Users, ArrowRight, Filter, GraduationCap } from 'lucide-react';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Business', 'Engineering', 'Medical', 'Arts', 'Computer Science', 'Law'];
  
  const locationFilters = ['All', 'UK', 'International'];

  const programs = [
    {
      id: 1,
      title: 'MBA - Master of Business Administration',
      category: 'Business',
      location: 'London',
      locationType: 'UK',
      duration: '2 Years',
      students: '250+',
      description: 'Transform your career with our prestigious MBA program designed for future leaders.',
      image: '/programs/mba.jpg',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 2,
      title: 'BSc Computer Science',
      category: 'Computer Science',
      location: 'Manchester',
      locationType: 'UK',
      duration: '3 Years',
      students: '180+',
      description: 'Master cutting-edge technologies and become a software engineering expert.',
      image: '/programs/cs.jpg',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'MBBS - Medicine & Surgery',
      category: 'Medical',
      location: 'Birmingham',
      locationType: 'UK',
      duration: '5 Years',
      students: '120+',
      description: 'Join our world-renowned medical program and save lives.',
      image: '/programs/medical.jpg',
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 4,
      title: 'BEng Mechanical Engineering',
      category: 'Engineering',
      location: 'Leeds',
      locationType: 'UK',
      duration: '4 Years',
      students: '200+',
      description: 'Design the future with our comprehensive engineering curriculum.',
      image: '/programs/engineering.jpg',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 5,
      title: 'LLB Law',
      category: 'Law',
      location: 'Nottingham',
      locationType: 'UK',
      duration: '3 Years',
      students: '150+',
      description: 'Build a prestigious legal career with our expert faculty.',
      image: '/programs/law.jpg',
      color: 'from-amber-600 to-yellow-600'
    },
    {
      id: 6,
      title: 'BA International Relations',
      category: 'Arts',
      location: 'Leicester',
      locationType: 'UK',
      duration: '3 Years',
      students: '100+',
      description: 'Understand global politics and diplomacy in depth.',
      image: '/programs/international.jpg',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 7,
      title: 'MBA Global Business',
      category: 'Business',
      location: 'Dubai',
      locationType: 'International',
      duration: '18 Months',
      students: '300+',
      description: 'Experience business education in the heart of the Middle East.',
      image: '/programs/dubai-mba.jpg',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 8,
      title: 'BSc Data Science',
      category: 'Computer Science',
      location: 'Malta',
      locationType: 'International',
      duration: '3 Years',
      students: '90+',
      description: 'Master AI and machine learning in Mediterranean paradise.',
      image: '/programs/data.jpg',
      color: 'from-violet-600 to-fuchsia-600'
    },
    {
      id: 9,
      title: 'BBA International Business',
      category: 'Business',
      location: 'Paris',
      locationType: 'International',
      duration: '3 Years',
      students: '220+',
      description: 'Study business in the fashion and culture capital of Europe.',
      image: '/programs/paris-bba.jpg',
      color: 'from-rose-600 to-pink-600'
    },
    {
      id: 10,
      title: 'MSc Artificial Intelligence',
      category: 'Computer Science',
      location: 'Heidelberg',
      locationType: 'International',
      duration: '2 Years',
      students: '140+',
      description: 'Advance AI research in Germany\'s oldest university town.',
      image: '/programs/ai.jpg',
      color: 'from-sky-600 to-cyan-600'
    },
    {
      id: 11,
      title: 'BSc Environmental Science',
      category: 'Engineering',
      location: 'Tampa USA',
      locationType: 'International',
      duration: '4 Years',
      students: '110+',
      description: 'Lead the fight against climate change with cutting-edge research.',
      image: '/programs/env.jpg',
      color: 'from-emerald-600 to-green-600'
    },
    {
      id: 12,
      title: 'BA Fine Arts',
      category: 'Arts',
      location: 'Madrid',
      locationType: 'International',
      duration: '4 Years',
      students: '80+',
      description: 'Unleash your creativity in Spain\'s vibrant artistic hub.',
      image: '/programs/arts.jpg',
      color: 'from-orange-600 to-red-600'
    }
  ];

  // Filter logic
  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || program.locationType === selectedLocation;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <GraduationCap className="w-4 h-4" />
            Our Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore World-Class Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover over 50 programs across 12 global locations designed to shape your future
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs or locations..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all text-gray-800 bg-white shadow-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Location Filters */}
          <div className="flex gap-3 justify-center">
            {locationFilters.map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedLocation === location
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <MapPin className="w-4 h-4" />
                {location}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8 text-gray-600"
        >
          Showing <span className="font-bold text-blue-600">{filteredPrograms.length}</span> programs
        </motion.div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + selectedLocation + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap className="w-20 h-20 text-white/30" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {program.locationType}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{program.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{program.students}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-700 transition-all group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredPrograms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No programs found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </motion.div>
        )}

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105">
            View All Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
}