'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

const ProgramFilters = ({ onFilterChange, onSearch }) => {
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'undergraduate', name: 'Undergraduate' },
    { id: 'postgraduate', name: 'Postgraduate' },
    { id: 'doctorate', name: 'Doctorate' },
    { id: 'online', name: 'Online' },
  ];

  const categories = [
    { id: 'all', name: 'All Fields' },
    { id: 'business', name: 'Business & Management' },
    { id: 'engineering', name: 'Engineering & Technology' },
    { id: 'arts', name: 'Arts & Humanities' },
    { id: 'sciences', name: 'Sciences' },
    { id: 'health', name: 'Health & Medicine' },
    { id: 'social', name: 'Social Sciences' },
  ];

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    onFilterChange({ level, category: activeCategory });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onFilterChange({ level: activeLevel, category });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search programs by name, keyword, or field..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#355E47] focus:ring-2 focus:ring-[#355E47]/20 transition-all"
            />
          </div>
        </div>

        {/* Level Filter */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-gray-600" />
            <h3 className="font-semibold text-gray-700">Study Level:</h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {levels.map((level) => (
              <motion.button
                key={level.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLevelChange(level.id)}
                className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                  activeLevel === level.id
                    ? 'bg-gradient-to-r from-[#355E47] to-[#2D5F3F] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-gray-600" />
            <h3 className="font-semibold text-gray-700">Field of Study:</h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#355E47] to-[#2D5F3F] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFilters;