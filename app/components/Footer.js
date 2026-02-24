'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail,
  Phone,
  ChevronRight,
  ArrowRight,
  Clock
} from 'lucide-react';

const hours = [
  { day: 'Mon', time: '09:00 – 17:00' },
  { day: 'Tue', time: '09:00 – 17:00' },
  { day: 'Wed', time: '09:00 – 17:00' },
  { day: 'Thu', time: '09:00 – 17:00' },
  { day: 'Fri', time: '09:00 – 17:00' },
  { day: 'Sat', time: 'Closed' },
  { day: 'Sun', time: 'Closed' },
];

const today = new Date().toLocaleDateString('en-GB', { weekday: 'short' });

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Life', href: '/studentlife' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const programsLinks = [
    { name: 'All Programs', href: '/programs' },
    { name: 'Home Students (UK)', href: '/homestudents/london' },
    { name: 'International Students', href: '/international/dubai' },
    { name: 'Apply Now', href: '/apply' },
  ];

  const ukCampuses = [
    { name: 'London', href: '/homestudents/london' },
    { name: 'Birmingham', href: '/homestudents/birmingham' },
    { name: 'Manchester', href: '/homestudents/manchester' },
    { name: 'Leeds', href: '/homestudents/leeds' },
    { name: 'Nottingham', href: '/homestudents/nottingham' },
    { name: 'Leicester', href: '/homestudents/leicester' },
  ];

  const intlCampuses = [
    { name: 'Dubai', href: '/international/dubai' },
    { name: 'Paris', href: '/international/paris' },
    { name: 'Madrid', href: '/international/madrid' },
    { name: 'Heidelberg', href: '/international/heidelberg' },
    { name: 'Malta', href: '/international/malta' },
    { name: 'Tampa', href: '/international/tampa' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* Hours Banner */}
      <div className="border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-5">
            <Clock size={18} className="text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Opening Hours</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {hours.map(({ day, time }) => {
              const isToday = today === day;
              return (
                <div
                  key={day}
                  className={`rounded-xl px-3 py-2.5 text-center ${
                    isToday
                      ? 'bg-emerald-600/20 border border-emerald-500/40'
                      : 'bg-slate-800/50 border border-slate-700/50'
                  }`}
                >
                  <p className={`text-xs font-bold mb-1 ${isToday ? 'text-emerald-400' : 'text-gray-400'}`}>{day}</p>
                  <p className={`text-xs font-semibold ${time === 'Closed' ? 'text-gray-500' : isToday ? 'text-white' : 'text-gray-300'}`}>
                    {time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-gradient-to-br from-[#355E47] to-[#2D5F3F] rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
              >
                <Image
                  src="/logo.jpeg"
                  alt="Uni Vivamus Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority
                />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Uni Vivamus
                </h1>
                <p className="text-xs text-gray-400">Empowering Education</p>
              </div>
            </Link>
            <p className="text-gray-400 text-xs mb-5 leading-relaxed">
              Building futures and connecting worlds through innovative education and global opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-emerald-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Programs</h4>
            <ul className="space-y-2">
              {programsLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-emerald-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UK Campuses */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">UK Campuses</h4>
            <ul className="space-y-2">
              {ukCampuses.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-emerald-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* International Campuses + Contact */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">International</h4>
            <ul className="space-y-2 mb-6">
              {intlCampuses.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-emerald-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-base font-bold mb-3 text-emerald-400">Contact Us</h4>
            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-2 text-gray-400">
                <Phone size={14} className="mt-0.5 text-emerald-500" />
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-xs">+44 7466 685430</p>
                </div>
              </div>
              <a href="mailto:Admin@uni-vivamus.com" className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors group">
                <Mail size={14} className="mt-0.5 text-emerald-500" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-xs">Admin@uni-vivamus.com</p>
                </div>
              </a>
            </div>
            <Link 
              href="/apply"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Apply Online
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Uni Vivamus. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full flex items-center justify-center shadow-lg z-40"
        aria-label="Back to top"
      >
        <ChevronRight size={20} className="rotate-[-90deg]" />
      </motion.button>
    </footer>
  );
};

export default Footer;