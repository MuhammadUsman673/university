'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Play, ChevronDown, GraduationCap, Globe, Users, Award, X } from 'lucide-react';

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentText, setCurrentText] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const heroTexts = [
    "Empower Your Learning Journey",
    "Shape Your Global Future",
    "Transform Your Ambitions"
  ];

  // All searchable data
  const searchableData = [
    // Programs
    { title: 'Business & Management', type: 'Program', url: '/programs', category: 'Business' },
    { title: 'Computing & IT', type: 'Program', url: '/programs', category: 'Technology' },
    { title: 'Health & Social Care', type: 'Program', url: '/programs', category: 'Healthcare' },
    { title: 'Hospitality & Tourism', type: 'Program', url: '/programs', category: 'Hospitality' },
    { title: 'Law', type: 'Program', url: '/programs', category: 'Legal' },
    { title: 'Engineering', type: 'Program', url: '/programs', category: 'Engineering' },
    { title: 'MBA', type: 'Program', url: '/programs', category: 'Business' },
    { title: 'Data Science', type: 'Program', url: '/programs', category: 'Technology' },
    
    // UK Locations
    { title: 'London', type: 'Location', url: '/homestudents/london', category: 'UK' },
    { title: 'Birmingham', type: 'Location', url: '/homestudents/birmingham', category: 'UK' },
    { title: 'Manchester', type: 'Location', url: '/homestudents/manchester', category: 'UK' },
    { title: 'Leeds', type: 'Location', url: '/homestudents/leeds', category: 'UK' },
    { title: 'Leicester', type: 'Location', url: '/homestudents/leicester', category: 'UK' },
    { title: 'Nottingham', type: 'Location', url: '/homestudents/nottingham', category: 'UK' },
    
    // International Locations
    { title: 'Dubai', type: 'Location', url: '/international/dubai', category: 'International' },
    { title: 'Malta', type: 'Location', url: '/international/malta', category: 'International' },
    { title: 'Paris', type: 'Location', url: '/international/paris', category: 'International' },
    { title: 'Heidelberg', type: 'Location', url: '/international/heidelberg', category: 'International' },
    { title: 'Tampa', type: 'Location', url: '/international/tampa', category: 'International' },
    { title: 'Madrid', type: 'Location', url: '/international/madrid', category: 'International' },
    
    // Pages
    { title: 'About Us', type: 'Page', url: '/about', category: 'Information' },
    { title: 'Contact', type: 'Page', url: '/contact', category: 'Information' },
    { title: 'Student Life', type: 'Page', url: '/student-life', category: 'Information' },
    { title: 'Admissions', type: 'Page', url: '/admissions', category: 'Information' },
    { title: 'Apply Now', type: 'Page', url: '/apply', category: 'Information' },
  ];

  // Fix SSR issue
  useEffect(() => {
    setMounted(true);
  }, []);

  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = searchableData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      router.push(searchResults[0].url);
    }
  };

  // Handle result click
  const handleResultClick = (url) => {
    setSearchQuery('');
    setShowResults(false);
    router.push(url);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  const quickStats = [
    { icon: Users, value: "15,000+", label: "Students Worldwide" },
    { icon: Globe, value: "12", label: "Global Locations" },
    { icon: GraduationCap, value: "98%", label: "Graduate Success" },
    { icon: Award, value: "50+", label: "Programs Offered" }
  ];

  // Get badge color based on type
  const getBadgeColor = (type) => {
    switch(type) {
      case 'Program': return 'bg-blue-100 text-blue-700';
      case 'Location': return 'bg-green-100 text-green-700';
      case 'Page': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95 z-10"></div>
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
        </div>
        
        {/* Animated particles */}
        {mounted && (
          <div className="absolute inset-0 z-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                initial={{ 
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0
                }}
                animate={{
                  y: [null, Math.random() * -100 - 50],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4"
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {heroTexts[currentText]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto px-4"
          >
            Discover world-class education across 12 global locations. 
            From London to Dubai, your future starts here.
          </motion.p>

          {/* Search Bar with Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-6 md:mb-8 px-4 relative"
          >
            <form onSubmit={handleSearch}>
              <div className="relative group">
                <Search className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6 z-10" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search programs, courses, or locations..."
                  className="w-full pl-12 sm:pl-16 pr-24 sm:pr-32 py-3 sm:py-4 md:py-5 rounded-full bg-white/95 backdrop-blur-sm text-gray-800 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition-all shadow-2xl"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-24 sm:right-32 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute w-full mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto"
              >
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => handleResultClick(result.url)}
                    className="flex items-center justify-between px-6 py-4 hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                        {result.type === 'Program' && <GraduationCap className="w-5 h-5 text-blue-600" />}
                        {result.type === 'Location' && <Globe className="w-5 h-5 text-green-600" />}
                        {result.type === 'Page' && <Search className="w-5 h-5 text-purple-600" />}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">{result.title}</div>
                        <div className="text-sm text-gray-500">{result.category}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(result.type)}`}>
                      {result.type}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* No Results */}
            {showResults && searchResults.length === 0 && searchQuery.trim() !== '' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute w-full mt-2 bg-white rounded-2xl shadow-2xl p-6 z-50 text-center"
              >
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-2">Try searching for programs, locations, or pages</p>
              </motion.div>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-10 md:mb-12 px-4"
          >
            <button 
              onClick={() => router.push('/apply')}
              className="group relative w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-base md:text-lg rounded-full overflow-hidden shadow-2xl hover:shadow-amber-500/50 transition-all hover:scale-105"
            >
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </button>

            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-base md:text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105">
              <Play className="w-5 h-5 md:w-6 md:h-6" />
              <span>Virtual Tour</span>
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-4"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-400 mx-auto mb-2 md:mb-3" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}