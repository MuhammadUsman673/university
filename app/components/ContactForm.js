'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, Building, MapPin, Clock, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_mnyveua';
const EMAILJS_TEMPLATE_ID = 'template_822havh';
const EMAILJS_PUBLIC_KEY  = 'oZeXWmfniEfCZEWu3';

const UK_CAMPUSES = [
  { value: 'london',     label: 'London' },
  { value: 'birmingham', label: 'Birmingham' },
  { value: 'manchester', label: 'Manchester' },
  { value: 'leeds',      label: 'Leeds' },
  { value: 'leicester',  label: 'Leicester' },
  { value: 'nottingham', label: 'Nottingham' },
];

const INTL_CAMPUSES = [
  { value: 'dubai',      label: 'Dubai, UAE' },
  { value: 'malta',      label: 'Malta' },
  { value: 'paris',      label: 'Paris, France' },
  { value: 'heidelberg', label: 'Heidelberg, Germany' },
  { value: 'tampa',      label: 'Tampa, USA' },
  { value: 'madrid',     label: 'Madrid, Spain' },
];

const SUBJECTS = [
  { value: 'admissions',   label: 'Admissions Inquiry' },
  { value: 'programs',     label: 'Programs Information' },
  { value: 'scholarships', label: 'Scholarships' },
  { value: 'campus',       label: 'Campus Visit' },
  { value: 'other',        label: 'Other' },
];

const INFO_CARDS = [
  {
    icon: Phone,
    title: 'Call Us',
    subtitle: 'Mon–Fri 9AM–6PM GMT · Sat 10AM–2PM GMT',
    value: '+44 20 7123 4567',
    href: 'tel:+442071234567',
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    icon: Mail,
    title: 'Email Us',
    subtitle: 'We respond within 24 hours',
    value: 'Admin@uni-vivamus.com',
    href: 'mailto:Admin@uni-vivamus.com',
    gradient: 'from-teal-600 to-emerald-800',
  },
  {
    icon: MapPin,
    title: 'Global Campuses',
    subtitle: '12 campuses across UK & worldwide',
    value: 'Find Your Campus →',
    href: '#',
    gradient: 'from-emerald-700 to-teal-600',
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', campus: '', message: ''
  });
  const [status, setStatus] = useState('idle');
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', campus: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputBase = "w-full bg-gray-50 border-2 rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 transition-all duration-200 outline-none text-sm font-medium";
  const inputClass = (name) => `${inputBase} ${focused === name
    ? 'border-emerald-500 bg-white shadow-[0_0_0_4px_rgba(16,185,129,0.1)]'
    : 'border-gray-200 hover:border-gray-300'}`;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 py-20 px-4">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-emerald-600 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full mb-4">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
          We'd love to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            hear from you
          </span>
        </h1>
        <p className="text-gray-500 text-base leading-relaxed">
          Reach out to our admissions team and we'll get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 items-start">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/80 border border-gray-100 overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />

            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-black text-gray-900 mb-1">Send us a Message</h2>
              <p className="text-gray-400 text-sm mb-8">All fields marked * are required</p>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="John Doe"
                      className={`${inputClass('name')} pl-10`}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        placeholder="john@example.com"
                        className={`${inputClass('email')} pl-10`}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+44 20 1234 5678"
                        className={`${inputClass('phone')} pl-10`}
                        onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject & Campus */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Subject *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                      <select
                        name="subject" value={formData.subject} onChange={handleChange} required
                        className={`${inputClass('subject')} pl-10 pr-10 appearance-none cursor-pointer`}
                        onFocus={() => setFocused('subject')} onBlur={() => setFocused('')}
                      >
                        <option value="">Select Subject</option>
                        {SUBJECTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Preferred Campus</label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
                      <select
                        name="campus" value={formData.campus} onChange={handleChange}
                        className={`${inputClass('campus')} pl-10 pr-10 appearance-none cursor-pointer`}
                        onFocus={() => setFocused('campus')} onBlur={() => setFocused('')}
                      >
                        <option value="">Select Campus</option>
                        <optgroup label="🇬🇧 United Kingdom">
                          {UK_CAMPUSES.map(c => <option key={c.value} value={c.value}>{c.label}, UK</option>)}
                        </optgroup>
                        <optgroup label="🌍 International">
                          {INTL_CAMPUSES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Your Message *</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required
                    rows="5" placeholder="Tell us more about your inquiry..."
                    className={`${inputClass('message')} resize-none`}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  />
                </div>

                {/* Status */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-3 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3"
                    >
                      <span className="text-lg">✅</span>
                      <span><strong>Message sent!</strong> We'll get back to you within 24 hours.</span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                    >
                      <span className="text-lg">❌</span>
                      <span><strong>Something went wrong.</strong> Please try again or email us directly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group w-full relative overflow-hidden text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #059669, #0d9488, #047857)' }}
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">{status === 'sending' ? 'Sending your message...' : 'Send Message'}</span>
                  <Send className={`relative w-4 h-4 transition-transform group-hover:translate-x-1 ${status === 'sending' ? 'animate-pulse' : ''}`} />
                </button>

              </form>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-4"
        >
          {/* Info Cards */}
          {INFO_CARDS.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group flex items-start gap-4 bg-white rounded-2xl p-5 shadow-lg shadow-gray-100 border border-gray-100 hover:border-emerald-200 hover:shadow-emerald-100/60 transition-all duration-300 block no-underline"
            >
              <div className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{card.title}</p>
                <p className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{card.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{card.subtitle}</p>
              </div>
            </motion.a>
          ))}

          {/* Campus List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl p-5 shadow-lg shadow-gray-100 border border-gray-100"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Our Campuses</p>

            <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">🇬🇧 United Kingdom</p>
            <div className="grid grid-cols-2 gap-1.5 mb-4">
              {UK_CAMPUSES.map(c => (
                <div key={c.value} className="flex items-center gap-1.5 text-xs text-gray-600 bg-emerald-50/60 rounded-lg px-2.5 py-1.5 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {c.label}
                </div>
              ))}
            </div>

            <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">🌍 International</p>
            <div className="grid grid-cols-2 gap-1.5">
              {INTL_CAMPUSES.map(c => (
                <div key={c.value} className="flex items-center gap-1.5 text-xs text-gray-600 bg-teal-50/60 rounded-lg px-2.5 py-1.5 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  {c.label.split(',')[0]}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Response badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-4"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Fast Response Guarantee</p>
              <p className="text-xs text-gray-500">Our team replies within <strong className="text-emerald-600">24 hours</strong> on business days</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}