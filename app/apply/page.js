'use client';
import { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_mnyveua';
const EMAILJS_TEMPLATE_ID = 'template_822havh';
const EMAILJS_PUBLIC_KEY  = 'oZeXWmfniEfCZEWu3';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    program: '',
    level: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    `${formData.firstName} ${formData.lastName}`,
          email:   formData.email,
          phone:   formData.phone,
          subject: 'Application Form Submission',
          campus:  `${formData.program} — ${formData.level} (${formData.country})`,
          message: formData.message || 'No additional information provided.',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', country: '', program: '', level: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey</h1>
            <p className="text-base md:text-lg text-white/85">
              Apply now to join thousands of students achieving their dreams at Uni Vivamus
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {status === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h3 className="text-green-800 font-semibold">Application Submitted!</h3>
                    <p className="text-green-700">Our admissions team will contact you within 48 hours.</p>
                  </div>
                </div>
              </div>
            )}

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
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Form</h2>
                <p className="text-gray-600 text-sm">Fill in your details below to start your application process</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''} placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''} placeholder="Doe" />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''} placeholder="john.doe@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''} placeholder="+44 123 456 7890" />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country of Residence *</label>
                  <select name="country" value={formData.country} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                    onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                    onBlur={e => e.target.style.boxShadow = ''}>
                    <option value="">Select Country</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Malta">Malta</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="United States">United States</option>
                    <option value="Spain">Spain</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Program & Level */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Program Interest *</label>
                    <select name="program" value={formData.program} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''}>
                      <option value="">Select Program</option>
                      <option value="Business & Management">Business & Management</option>
                      <option value="Computing & IT">Computing & IT</option>
                      <option value="Health & Social Care">Health & Social Care</option>
                      <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                      <option value="Law">Law</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Arts & Design">Arts & Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Study Level *</label>
                    <select name="level" value={formData.level} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition"
                      onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                      onBlur={e => e.target.style.boxShadow = ''}>
                      <option value="">Select Level</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Certificate">Certificate</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition resize-none"
                    onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(53,94,71,0.3)'}
                    onBlur={e => e.target.style.boxShadow = ''}
                    placeholder="Tell us about your educational background, career goals, or any questions you have..."></textarea>
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
                        Submitting...
                      </span>
                    ) : 'Submit Application'}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </div>
              </form>
            </div>

            {/* Why Apply Section */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(53,94,71,0.1)' }}>
                  <svg className="w-8 h-8" style={{ color: '#355E47' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">Get a response within 48 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(53,94,71,0.1)' }}>
                  <svg className="w-8 h-8" style={{ color: '#355E47' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-2">Easy Process</h3>
                <p className="text-gray-600 text-sm">Simple application steps</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(53,94,71,0.1)' }}>
                  <svg className="w-8 h-8" style={{ color: '#355E47' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Dedicated admissions advisors</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}