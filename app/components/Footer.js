'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail,
  Phone,
  Send,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your newsletter logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing!');
    }, 1000);
  };

  const quickLinks = [
    { name: 'About Us' },
    { name: 'Our Mission' },
    { name: 'Leadership Team' },
    { name: 'Accreditations' },
    { name: 'News & Events' },
    { name: 'Careers' },
  ];

  const programsLinks = [
    { name: 'Home Students (UK)' },
    { name: 'International Students' },
    { name: 'Undergraduate Programs' },
    { name: 'Postgraduate Programs' },
    { name: 'Online Courses' },
    { name: 'Summer Programs' },
  ];

  const supportLinks = [
    { name: 'Student Portal' },
    { name: 'Library Services' },
    { name: 'Financial Aid' },
    { name: 'Housing' },
    { name: 'Career Services' },
    { name: 'Help Center' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for the latest updates, news, and opportunities.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                <Send size={16} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column - EXACT SAME LOGO AS NAVBAR */}
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

          {/* Quick Links - Non-clickable */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <span className="text-gray-400 text-sm flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-emerald-500" />
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs - Non-clickable */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Programs</h4>
            <ul className="space-y-2">
              {programsLinks.map((link) => (
                <li key={link.name}>
                  <span className="text-gray-400 text-sm flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-emerald-500" />
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Resources - Non-clickable */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <span className="text-gray-400 text-sm flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-emerald-500" />
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Only Email is clickable */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Contact Us</h4>
            
            {/* Contact Details - Phone (non-clickable), Email (clickable) */}
            <div className="space-y-3 mb-5">
              {/* Phone - Non-clickable */}
              <div className="flex items-start gap-2 text-gray-400">
                <Phone size={14} className="mt-0.5 text-emerald-500" />
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-xs">+44 7466 685430</p>
                </div>
              </div>
              
              {/* Email - Clickable (ONLY ONE) */}
              <a href="mailto:Admin@uni-vivamus.com" className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors group">
                <Mail size={14} className="mt-0.5 text-emerald-500" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-xs">Admin@uni-vivamus.com</p>
                </div>
              </a>
            </div>

            {/* Apply Online - Clickable (ONLY ONE) */}
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {/* All bottom links - Non-clickable */}
              <span className="hover:text-white transition-colors cursor-default">
                Privacy Policy
              </span>
              <span className="hover:text-white transition-colors cursor-default">
                Terms of Service
              </span>
              <span className="hover:text-white transition-colors cursor-default">
                Cookie Policy
              </span>
              <span className="hover:text-white transition-colors cursor-default">
                Accessibility
              </span>
            </div>
            <div className="text-center md:text-right">
              <p>© {new Date().getFullYear()} Uni Vivamus. All rights reserved.</p>
            </div>
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