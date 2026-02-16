'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Users, ArrowRight, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const categories = ['All', 'Business', 'Technology', 'Health', 'Law', 'Psychology', 'Hospitality'];

  const programs = [
    {
      id: 1,
      title: 'BA (Hons) Business and Management',
      category: 'Business',
      duration: '1, 2, 3, or 4 years',
      students: '350+',
      description: 'Develop the skills and knowledge to lead in today\'s competitive business world. Our flexible Business Management program lets you choose a study path to match your goals.',
      fullDescription: 'Develop the skills and knowledge to lead in today\'s competitive business world. Our flexible Business Management program lets you choose a 1, 2, 3, or 4-year study path to match your goals. Gain expertise in leadership, marketing, finance, and strategic planning—preparing you for a successful career in any industry.',
      image: '/hons.webp',
      icon: '📊'
    },
    {
      id: 2,
      title: 'BSc (Hons) Cyber Security',
      category: 'Technology',
      duration: '2, 3, or 4 years',
      students: '280+',
      description: 'Protect the digital world with our flexible Cybersecurity program. Gain hands-on skills in ethical hacking, network security, and digital forensics.',
      fullDescription: 'Protect the digital world with our flexible Cybersecurity program, offered over 2, 3, or 4 years. Gain hands-on skills in ethical hacking, network security, risk management, and digital forensics. This course prepares you for in-demand careers defending systems, data, and infrastructure in a rapidly evolving tech landscape.',
      image: '/cyber.webp',
      icon: '🔒'
    },
    {
      id: 3,
      title: 'BSc (Hons) Accounting and Finance',
      category: 'Business',
      duration: '2 or 4 years',
      students: '320+',
      description: 'Build a strong foundation for a successful career in finance with our Accounting and Finance program. Learn essential skills in financial management and investment analysis.',
      fullDescription: 'Build a strong foundation for a successful career in finance with our 2 or 4-year Accounting and Finance program. Learn essential skills in financial management, auditing, taxation, and investment analysis. This course combines theory with practical application to prepare you for professional roles in accounting, banking, and corporate finance.',
      image: '/accouting.webp',
      icon: '💰'
    },
    {
      id: 4,
      title: 'BSc (Hons) Health and Social Care',
      category: 'Health',
      duration: '1, 2, 3, or 4 years',
      students: '240+',
      description: 'Prepare for a rewarding career supporting individuals and communities. Gain practical skills and essential knowledge in care, safeguarding, and health systems.',
      fullDescription: 'Prepare for a rewarding career supporting individuals and communities. Our flexible Health and Social Care program offers 1, 2, 3, or 4-year options to suit your needs. You\'ll gain practical skills and essential knowledge in care, safeguarding, communication, and health systems—perfect for roles in healthcare, social work, or community support.',
      image: '/health.webp',
      icon: '🏥'
    },
    {
      id: 5,
      title: 'BSc Computer Science',
      category: 'Technology',
      duration: '3 or 4 years',
      students: '400+',
      description: 'Build a future in tech with our flexible Computing program. Learn core skills in programming, networking, cybersecurity, and software development.',
      fullDescription: 'Build a future in tech with our flexible Computing program, available in 3 or 4-year study options. Learn core skills in programming, networking, cybersecurity, and software development. Whether you\'re starting out or advancing your knowledge, this course prepares you for a wide range of roles in the digital and IT industries.',
      image: '/computer.webp',
      icon: '💻'
    },
    {
      id: 6,
      title: 'BSc (Hons) Data Science',
      category: 'Technology',
      duration: '3 or 4 years',
      students: '180+',
      description: 'Turn data into insight with our comprehensive Data Science program. Develop expertise in data analysis, programming, statistics, and machine learning.',
      fullDescription: 'Turn data into insight with our comprehensive Data Science program, available over 3 or 4 years. Develop expertise in data analysis, programming, statistics, and machine learning. This course equips you with the practical and analytical skills needed to solve real-world problems and succeed in today\'s data-driven industries.',
      image: '/data science.webp',
      icon: '📈'
    },
    {
      id: 7,
      title: 'BSc Psychology',
      category: 'Psychology',
      duration: '3 or 4 years',
      students: '290+',
      description: 'Explore the science of the mind and human behavior with our Psychology program. Gain a deep understanding of cognitive, social, developmental, and clinical psychology.',
      fullDescription: 'Explore the science of the mind and human behavior with our Psychology program, available over 3 or 4 years. Gain a deep understanding of cognitive, social, developmental, and clinical psychology while developing strong research and analytical skills. This course prepares you for diverse careers in mental health, education, research, and beyond.',
      image: '/pycholgy.webp',
      icon: '🧠'
    },
    {
      id: 8,
      title: 'BA (Hons) Criminology and Psychology',
      category: 'Psychology',
      duration: '3 or 4 years',
      students: '160+',
      description: 'Explore the relationship between crime, behavior, and society. Combines the scientific study of the mind with an in-depth understanding of criminal behavior.',
      fullDescription: 'Explore the relationship between crime, behavior, and society with our BA (Hons) Criminology and Psychology degree. Available over 3 or 4 years, this course combines the scientific study of the mind with an in-depth understanding of criminal behavior, justice systems, and social impact. Develop critical thinking, research, and analytical skills to prepare for careers in criminal justice, psychology, law enforcement, and social services.',
      image: '/criminology.webp',
      icon: '⚖️'
    },
    {
      id: 9,
      title: 'LLB (Hons) Law',
      category: 'Law',
      duration: '3 or 4 years',
      students: '220+',
      description: 'Gain a solid foundation in legal knowledge and critical thinking. Covers criminal law, contract law, constitutional law, and human rights.',
      fullDescription: 'Gain a solid foundation in legal knowledge and critical thinking with our LLB (Hons) Law degree, available over 3 or 4 years. This course covers key areas such as criminal law, contract law, constitutional law, and human rights, while developing your analytical, research, and advocacy skills. Prepare for a successful career in law, business, or public service with a degree that opens doors to diverse professional pathways.',
      image: '/llb.webp',
      icon: '⚖️'
    },
    {
      id: 10,
      title: 'BSc (Hons) International Hospitality and Tourism Management',
      category: 'Hospitality',
      duration: '3 or 4 years',
      students: '150+',
      description: 'Discover the dynamic world of global hospitality and tourism. Combines business management principles with practical industry insights.',
      fullDescription: 'Discover the dynamic world of global hospitality and tourism with our BSc (Hons) International Hospitality and Tourism Management degree. Offered over 3 or 4 years, this course combines business management principles with practical industry insights. Explore key skills in customer service, leadership, and project management.',
      image: '/international.webp',
      icon: '🏨'
    },
    {
      id: 11,
      title: 'BSc (Hons) Digital Marketing',
      category: 'Business',
      duration: '3 or 4 years',
      students: '200+',
      description: 'Master the art of online engagement with our Digital Marketing degree. Covers social media marketing, SEO, analytics, branding, and digital advertising.',
      fullDescription: 'Master the art of online engagement with our BSc (Hons) Digital Marketing degree, available over 3 or 4 years. This course blends creativity with data-driven strategy, covering key areas such as social media marketing, SEO, analytics, branding, and digital advertising. Gain the skills needed to succeed in today\'s digital economy.',
      image: '/digital marketing.webp',
      icon: '📱'
    },
    {
      id: 12,
      title: 'BSc (Hons) Project Management',
      category: 'Business',
      duration: '3 or 4 years',
      students: '170+',
      description: 'Develop the skills to lead projects successfully across industries. Learn key principles in planning, risk management, budgeting, and leadership.',
      fullDescription: 'Develop the skills to lead projects successfully across industries with our BSc (Hons) Project Management degree, offered over 3 or 4 years. Learn key principles in planning, risk management, budgeting, and leadership while gaining practical experience through real-world projects.',
      image: '/project.webp',
      icon: '📋'
    }
  ];

  // Filter logic
  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleDescription = (id) => {
    setExpandedDescriptions(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isExpanded = (id) => expandedDescriptions.includes(id);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <GraduationCap className="w-4 h-4" />
            Academic Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Flexible Degree Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a wide range of programs with flexible duration options to match your career goals
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
              placeholder="Search programs or keywords..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-all text-gray-800 bg-white shadow-sm"
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
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {category}
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
          Showing <span className="font-bold text-emerald-600">{filteredPrograms.length}</span> programs
        </motion.div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
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
                {/* Image without overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-lg text-xs font-bold">
                    {program.icon} {program.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {program.title}
                  </h3>

                  {/* Description with See More link */}
                  <div className="mb-4 flex-grow">
                    <p className={`text-gray-600 ${!isExpanded(program.id) ? 'line-clamp-3' : ''}`}>
                      {isExpanded(program.id) ? program.fullDescription : program.description}
                    </p>
                    <button
                      onClick={() => toggleDescription(program.id)}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-sm mt-2 flex items-center gap-1 transition-colors"
                    >
                      {isExpanded(program.id) ? (
                        <>
                          Show less <ChevronUp className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          See more <ChevronDown className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>

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
                  <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-emerald-700 hover:to-teal-700 transition-all group-hover:shadow-lg shadow-emerald-500/30 mt-auto">
                    View Program Details
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
          <p className="text-gray-500 text-sm mt-4">Contact our admissions team for personalized guidance</p>
        </motion.div>
      </div>
    </section>
  );
}