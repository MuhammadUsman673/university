'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
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
    { name: 'About Us', href: '/about' },
    { name: 'Our Mission', href: '/about#mission' },
    { name: 'Leadership Team', href: '/about/leadership' },
    { name: 'Accreditations', href: '/about/accreditations' },
    { name: 'News & Events', href: '/news' },
    { name: 'Careers', href: '/careers' },
  ];

  const programsLinks = [
    { name: 'Home Students (UK)', href: '/home-students' },
    { name: 'International Students', href: '/international' },
    { name: 'Undergraduate Programs', href: '/programs/undergraduate' },
    { name: 'Postgraduate Programs', href: '/programs/postgraduate' },
    { name: 'Online Courses', href: '/programs/online' },
    { name: 'Summer Programs', href: '/programs/summer' },
  ];

  const supportLinks = [
    { name: 'Student Portal', href: '/portal' },
    { name: 'Library Services', href: '/library' },
    { name: 'Financial Aid', href: '/admissions/fees' },
    { name: 'Housing', href: '/student-life/housing' },
    { name: 'Career Services', href: '/career' },
    { name: 'Help Center', href: '/help' },
  ];

  const ukLocations = [
    { name: 'London', href: '/home-students/london' },
    { name: 'Birmingham', href: '/home-students/birmingham' },
    { name: 'Manchester', href: '/home-students/manchester' },
  ];

  const internationalLocations = [
    { name: 'Dubai', href: '/international/dubai' },
    { name: 'Paris', href: '/international/paris' },
    { name: 'Madrid', href: '/international/madrid' },
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
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">UV</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Uni Vivamus</h3>
                  <p className="text-xs text-gray-400">Empowering Education</p>
                </div>
              </motion.div>
            </Link>
            <p className="text-gray-400 text-xs mb-5 leading-relaxed">
              Building futures and connecting worlds through innovative education and global opportunities.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-8 h-8 bg-slate-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
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
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Locations */}
          <div>
            <h4 className="text-base font-bold mb-4 text-emerald-400">Contact Us</h4>
            
            {/* Contact Details */}
            <div className="space-y-3 mb-5">
              <a href="tel:+447466685430" className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors group">
                <Phone size={14} className="mt-0.5 text-emerald-500" />
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-xs">+44 7466 685430</p>
                </div>
              </a>
              
              <a href="mailto:Admin@uni-vivamus.com" className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors group">
                <Mail size={14} className="mt-0.5 text-emerald-500" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-xs">Admin@uni-vivamus.com</p>
                </div>
              </a>
              
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={14} className="mt-0.5 text-emerald-500" />
                <div>
                  <p className="font-medium text-sm mb-1">Locations</p>
                  <div className="text-xs space-y-0.5">
                    <p className="text-emerald-400 font-medium">UK</p>
                    {ukLocations.map((loc) => (
                      <Link key={loc.name} href={loc.href} className="block hover:text-white transition-colors">
                        {loc.name}
                      </Link>
                    ))}
                    <p className="text-emerald-400 font-medium mt-1">International</p>
                    {internationalLocations.map((loc) => (
                      <Link key={loc.name} href={loc.href} className="block hover:text-white transition-colors">
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <Link 
              href="/apply"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Apply Now
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
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
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
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full flex items-center justify-center shadow-lg z-40"
        aria-label="Back to top"
      >
        <ChevronRight size={20} className="rotate-[-90deg]" />
      </motion.button>
    </footer>
  );
};

export default Footer;