'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, Building } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    campus: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      campus: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const focusStyle = (e) => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)';
  const blurStyle = (e) => e.target.style.boxShadow = '';

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Send us a <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>Message</span>
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl transition-all"
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl transition-all"
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl transition-all"
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject & Campus */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl transition-all appearance-none bg-white"
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      >
                        <option value="">Select Subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="programs">Programs Information</option>
                        <option value="scholarships">Scholarships</option>
                        <option value="campus">Campus Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Campus</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="campus"
                        value={formData.campus}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl transition-all appearance-none bg-white"
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      >
                        <option value="">Select Campus</option>
                        <option value="london">London, UK</option>
                        <option value="manchester">Manchester, UK</option>
                        <option value="birmingham">Birmingham, UK</option>
                        <option value="paris">Paris, France</option>
                        <option value="berlin">Berlin, Germany</option>
                        <option value="dubai">Dubai, UAE</option>
                        <option value="singapore">Singapore</option>
                        <option value="online">Online Program</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl transition-all resize-none"
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white py-3.5 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(to right, #355E47, #2D5F3F)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(to right, #2D5F3F, #1a2e23)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(to right, #355E47, #2D5F3F)'}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Other Ways to <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>Connect</span>
            </h2>

            {/* Call Us */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Speak directly with our admissions team</p>
              <p className="text-xl font-bold mb-2" style={{ color: '#355E47' }}>+44 20 7123 4567</p>
              <p className="text-xs text-gray-500">
                Mon-Fri: 9:00 AM - 6:00 PM GMT<br />
                Sat: 10:00 AM - 2:00 PM GMT
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(to bottom right, #2D5F3F, #3A5F4A)' }}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Send us an email anytime</p>
              <a
                href="mailto:info@univavamus.com"
                className="text-lg font-bold transition-colors"
                style={{ color: '#355E47' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2D5F3F'}
                onMouseLeave={e => e.currentTarget.style.color = '#355E47'}
              >
                info@univavamus.com
              </a>
              <p className="text-xs text-gray-500 mt-2">We respond within 24 hours</p>
            </div>

            {/* Visit */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(to bottom right, #355E47, #3A5F4A)' }}>
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Visit a Campus</h3>
              <p className="text-gray-600 text-sm mb-3">Schedule a campus tour</p>
              <button
                className="font-semibold transition-colors flex items-center gap-2 text-sm"
                style={{ color: '#355E47' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2D5F3F'}
                onMouseLeave={e => e.currentTarget.style.color = '#355E47'}
              >
                Book a Tour
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}