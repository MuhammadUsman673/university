'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeStudentsLocations = [
    { name: 'London', href: '/homestudents/london' },
    { name: 'Birmingham', href: '/homestudents/birmingham' },
    { name: 'Manchester', href: '/homestudents/manchester' },
    { name: 'Leeds', href: '/homestudents/leeds' },
    { name: 'Leicester', href: '/homestudents/leicester' },
    { name: 'Nottingham', href: '/homestudents/nottingham' },
  ];

  const internationalLocations = [
    { name: 'Dubai', href: '/international/dubai', flag: '🇦🇪' },
    { name: 'Malta', href: '/international/malta', flag: '🇲🇹' },
    { name: 'Paris', href: '/international/paris', flag: '🇫🇷' },
    { name: 'Heidelberg', href: '/international/heidelberg', flag: '🇩🇪' },
    { name: 'Tampa USA', href: '/international/tampa', flag: '🇺🇸' },
    { name: 'Madrid', href: '/international/madrid', flag: '🇪🇸' },
  ];

  const aboutLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Mission & Vision', href: '/about#mission' },
    { name: 'Leadership', href: 'about#mission' },
    // { name: 'Accreditations', href: '/about/accreditations' },
  ];

  const admissionLinks = [
    { name: 'How to Apply', href: '/admissions' },
    { name: 'Entry Requirements', href: '/admissions' },
    { name: 'Tuition & Fees', href: '/admissions' },
    { name: 'Scholarships', href: '/admissions' },
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-2 px-4 hidden lg:block"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+447466685430" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Phone size={14} />
              <span>+44 7466 685430</span>
            </a>
            <a href="mailto:info@uni-vivamus.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Mail size={14} />
              <span>info@uni-vivamus.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Globe size={14} />
              <span>Student Portal</span>
            </button>
            <Link href="/apply" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-1 rounded-full font-semibold transition-all hover:scale-105">
              Apply Now
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-2xl">UV</span>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Uni Vivamus
                </h1>
                <p className="text-xs text-slate-500">Empowering Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium flex items-center gap-1 transition-colors">
                  About
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
                    >
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-6 py-3 hover:bg-amber-50 hover:text-amber-600 transition-colors border-b border-slate-50 last:border-0"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home Students Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('home')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium flex items-center gap-1 transition-colors">
                  Home Students
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'home' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'home' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
                    >
                      <div className="p-4 bg-gradient-to-r from-slate-50 to-amber-50 border-b border-slate-100">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2">
                          <MapPin size={16} className="text-amber-600" />
                          UK Locations
                        </h3>
                        <p className="text-xs text-slate-600 mt-1">Study in leading UK cities</p>
                      </div>
                      <div className="grid grid-cols-2 p-2">
                        {homeStudentsLocations.map((location) => (
                          <Link
                            key={location.name}
                            href={location.href}
                            className="px-4 py-3 hover:bg-amber-50 hover:text-amber-600 transition-colors rounded-lg m-1"
                          >
                            {location.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* International Students Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('international')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium flex items-center gap-1 transition-colors">
                  International
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'international' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'international' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
                    >
                      <div className="p-4 bg-gradient-to-r from-slate-50 to-amber-50 border-b border-slate-100">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2">
                          <Globe size={16} className="text-amber-600" />
                          Global Campuses
                        </h3>
                        <p className="text-xs text-slate-600 mt-1">Experience world-class education globally</p>
                      </div>
                      <div className="p-2">
                        {internationalLocations.map((location) => (
                          <Link
                            key={location.name}
                            href={location.href}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 hover:text-amber-600 transition-colors rounded-lg m-1"
                          >
                            <span className="text-2xl">{location.flag}</span>
                            <span>{location.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Admissions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('admissions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium flex items-center gap-1 transition-colors">
                  Admissions
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'admissions' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'admissions' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden"
                    >
                      {admissionLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-6 py-3 hover:bg-amber-50 hover:text-amber-600 transition-colors border-b border-slate-50 last:border-0"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/studentlife" className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium transition-colors">
                Student Life
              </Link>
              
              <Link href="/contact" className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                
              </button>
              
              <Link 
                href="/apply"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-200"
            >
              <div className="px-4 py-6 space-y-4">
                <Link href="/about" className="block py-2 text-slate-700 hover:text-amber-600 font-medium">
                  About
                </Link>
                
                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-2">Home Students (UK)</p>
                  <div className="pl-4 space-y-2">
                    {homeStudentsLocations.map((location) => (
                      <Link key={location.name} href={location.href} className="block py-1 text-slate-600 hover:text-amber-600">
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500 mb-2">International</p>
                  <div className="pl-4 space-y-2">
                    {internationalLocations.map((location) => (
                      <Link key={location.name} href={location.href} className="block py-1 text-slate-600 hover:text-amber-600">
                        {location.flag} {location.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/admissions" className="block py-2 text-slate-700 hover:text-amber-600 font-medium">
                  Admissions
                </Link>
                <Link href="/student-life" className="block py-2 text-slate-700 hover:text-amber-600 font-medium">
                  Student Life
                </Link>
                <Link href="/contact" className="block py-2 text-slate-700 hover:text-amber-600 font-medium">
                  Contact
                </Link>

                <Link 
                  href="/apply"
                  className="block text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg mt-4"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;