'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_mnyveua';
const EMAILJS_TEMPLATE_ID = 'template_822havh';
const EMAILJS_PUBLIC_KEY  = 'oZeXWmfniEfCZEWu3';

const UK_CAMPUSES = [
  { value: 'London, UK',     label: 'London' },
  { value: 'Birmingham, UK', label: 'Birmingham' },
  { value: 'Manchester, UK', label: 'Manchester' },
  { value: 'Leeds, UK',      label: 'Leeds' },
  { value: 'Leicester, UK',  label: 'Leicester' },
  { value: 'Nottingham, UK', label: 'Nottingham' },
];

const INTL_CAMPUSES = [
  { value: 'Dubai, UAE',         label: 'Dubai, UAE' },
  { value: 'Malta',              label: 'Malta' },
  { value: 'Paris, France',      label: 'Paris, France' },
  { value: 'Heidelberg, Germany',label: 'Heidelberg, Germany' },
  { value: 'Tampa, USA',         label: 'Tampa, USA' },
  { value: 'Madrid, Spain',      label: 'Madrid, Spain' },
];

const SUBJECTS = [
  { value: 'Admissions Inquiry',   label: 'Admissions Inquiry' },
  { value: 'Programs Information', label: 'Programs Information' },
  { value: 'Scholarships',         label: 'Scholarships' },
  { value: 'Campus Visit',         label: 'Campus Visit' },
  { value: 'Other',                label: 'Other' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', campus: '', message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', campus: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{ background: 'linear-gradient(to right, #1a2e23, #2D5F3F)' }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-base md:text-lg text-white/85">
              Reach out to our admissions team and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Success Message */}
            {status === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="text-green-800 font-semibold">Message Sent!</h3>
                    <p className="text-green-700">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <h3 className="text-red-800 font-semibold">Submission Failed</h3>
                    <p className="text-red-700">Please try again or contact us directly.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 text-sm">All fields marked * are required</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                    onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                    onBlur={e => e.target.style.boxShadow = ''}
                    placeholder="John Doe" />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''}
                      placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''}
                      placeholder="+44 20 1234 5678" />
                  </div>
                </div>

                {/* Subject & Campus */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''}>
                      <option value="">Select Subject</option>
                      {SUBJECTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Campus</label>
                    <select name="campus" value={formData.campus} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''}>
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

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition resize-none"
                    onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                    onBlur={e => e.target.style.boxShadow = ''}
                    placeholder="Tell us more about your inquiry..."></textarea>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button type="submit" disabled={loading}
                    className="w-full text-white font-bold py-4 px-8 rounded-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}
                    onMouseEnter={e => !loading && (e.currentTarget.style.background = 'linear-gradient(to right, #2D5F3F, #1a2e23)')}
                    onMouseLeave={e => !loading && (e.currentTarget.style.background = 'linear-gradient(to right, #355E47, #2D5F3F)')}>
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </div>

              </form>
            </div>

            {/* Info Cards */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(53,94,71,0.1)' }}>
                  <svg className="w-8 h-8" style={{ color: '#355E47' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-1">Call Us</h3>
                <p className="text-gray-600 text-sm">+44 7466 685430</p>
                <p className="text-gray-400 text-xs mt-1">Mon–Fri 9AM–6PM GMT</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(53,94,71,0.1)' }}>
                  <svg className="w-8 h-8" style={{ color: '#355E47' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-1">Email Us</h3>
                <p className="text-gray-600 text-sm">Admin@uni-vivamus.com</p>
                <p className="text-gray-400 text-xs mt-1">We respond within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(53,94,71,0.1)' }}>
                  <svg className="w-8 h-8" style={{ color: '#355E47' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-1">Global Campuses</h3>
                <p className="text-gray-600 text-sm">12 campuses worldwide</p>
                <p className="text-gray-400 text-xs mt-1">UK & International</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}