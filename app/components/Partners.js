'use client';
import { motion, useAnimation } from 'framer-motion';
import { Shield, CheckCircle2, Star } from 'lucide-react';
import { useEffect } from 'react';

export default function Partners() {
  const floatControls = useAnimation();

  useEffect(() => {
    floatControls.start({
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    });
  }, [floatControls]);

  const checkItems = [
    'Internationally Recognised Certification',
    'Trusted by Students Worldwide',
    'Committed to Ethical Practices',
  ];

  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1f16 0%, #1a3328 50%, #0f1f16 100%)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

        .bc-container { font-family: 'Jost', sans-serif; }
        .bc-serif { font-family: 'Cormorant Garamond', serif; }

        /* Shine sweep */
        .bc-shine { position: relative; overflow: hidden; }
        .bc-shine::after {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 45%; height: 200%;
          background: linear-gradient(to right, rgba(109,184,144,0) 0%, rgba(109,184,144,0.08) 50%, rgba(109,184,144,0) 100%);
          transform: skewX(-20deg);
          animation: bc-shine 6s ease-in-out infinite;
        }
        @keyframes bc-shine { 0% { left: -75%; } 65%, 100% { left: 130%; } }

        /* Dot texture */
        .bc-dots {
          background-image: radial-gradient(circle, rgba(109,184,144,0.06) 1px, transparent 1px);
          background-size: 10px 10px;
        }

        /* Floating particles */
        .bc-particle {
          position: absolute;
          border-radius: 50%;
          background: #6DB890;
          opacity: 0;
          animation: bc-particle-float 6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes bc-particle-float {
          0%   { transform: translateY(0) scale(0); opacity: 0; }
          20%  { opacity: 0.5; }
          80%  { opacity: 0.2; }
          100% { transform: translateY(-90px) scale(0.2); opacity: 0; }
        }

        /* Pulse rings */
        .bc-pulse {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(53,94,71,0.5);
          animation: bc-pulse-expand 3s ease-out infinite;
          pointer-events: none;
        }
        @keyframes bc-pulse-expand {
          0%   { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(1.7); opacity: 0; }
        }

        /* Green glow text */
        .green-glow {
          text-shadow: 0 0 20px rgba(109,184,144,0.5), 0 0 40px rgba(53,94,71,0.4);
        }

        /* Divider */
        .bc-divider { display: flex; align-items: center; gap: 12px; }
        .bc-divider::before, .bc-divider::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(to right, transparent, #355E47, transparent);
        }

        /* Watermark */
        .bc-watermark {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none;
        }

        /* Corner flourishes */
        .bc-corner { position: absolute; width: 28px; height: 28px; }
        .bc-corner-tl { top: 14px; left: 14px; border-top: 1.5px solid rgba(53,94,71,0.6); border-left: 1.5px solid rgba(53,94,71,0.6); }
        .bc-corner-tr { top: 14px; right: 14px; border-top: 1.5px solid rgba(53,94,71,0.6); border-right: 1.5px solid rgba(53,94,71,0.6); }
        .bc-corner-bl { bottom: 14px; left: 14px; border-bottom: 1.5px solid rgba(53,94,71,0.6); border-left: 1.5px solid rgba(53,94,71,0.6); }
        .bc-corner-br { bottom: 14px; right: 14px; border-bottom: 1.5px solid rgba(53,94,71,0.6); border-right: 1.5px solid rgba(53,94,71,0.6); }
      `}</style>

      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#355E47' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#2D9B5A' }} />
      </div>

      {/* Top & bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #355E47, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #355E47, transparent)' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bc-container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#355E47' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6DB890' }}>
              Recognised Excellence
            </span>
            <div className="h-px w-8" style={{ backgroundColor: '#355E47' }} />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Our{' '}
            <span style={{ WebkitTextStroke: '1.5px #355E47', color: 'transparent' }}>
              Certifications
            </span>
          </h2>

          <div className="bc-divider max-w-xs mx-auto">
            <span style={{ color: '#6DB890' }} className="text-lg">✦</span>
          </div>
        </motion.div>

        {/* Badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            animate={floatControls}
            className="relative"
          >
            {/* Pulse rings */}
            {[0, 1, 2].map(i => (
              <div key={i} className="bc-pulse" style={{
                width: 360, height: 360,
                top: '50%', left: '50%',
                animationDelay: `${i}s`,
              }} />
            ))}

            {/* Ambient glow */}
            <div className="absolute -z-10 rounded-full blur-[80px] opacity-30"
              style={{
                background: 'radial-gradient(ellipse, #2D9B5A 0%, #355E47 50%, transparent 80%)',
                inset: '-40%',
              }} />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bc-particle" style={{
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                left: `${8 + i * 15}%`,
                bottom: `${8 + (i % 3) * 10}%`,
                animationDelay: `${i * 1.1}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }} />
            ))}

            {/* Animated green border */}
            <motion.div
              className="p-[2px] rounded-[20px]"
              style={{ background: 'linear-gradient(45deg, #355E47, #6DB890, #2D9B5A, #355E47)' }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              {/* Static inner shell to counter-rotate content */}
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ borderRadius: '18px', overflow: 'hidden' }}
              >

                {/* Main card */}
                <motion.div
                  className="bc-shine relative text-white"
                  style={{
                    background: 'linear-gradient(145deg, #0f1f16 0%, #1a3328 45%, #112619 70%, #0a180f 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(109,184,144,0.08), inset 0 -1px 0 rgba(0,0,0,0.4), 0 0 0 1px rgba(53,94,71,0.3)',
                    width: 360,
                    maxWidth: '90vw',
                    padding: '48px 40px',
                  }}
                  whileHover={{ scale: 1.012 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Dot texture */}
                  <div className="bc-dots absolute inset-0" />

                  {/* Watermark shield */}
                  <div className="bc-watermark">
                    <Shield style={{ width: 220, height: 220, color: 'rgba(53,94,71,0.08)' }} strokeWidth={0.5} />
                  </div>

                  {/* Corner flourishes */}
                  <div className="bc-corner bc-corner-tl" />
                  <div className="bc-corner bc-corner-tr" />
                  <div className="bc-corner bc-corner-bl" />
                  <div className="bc-corner bc-corner-br" />

                  {/* Content */}
                  <div className="relative flex flex-col items-center">

                    {/* Crest */}
                    <motion.div
                      className="relative mb-6"
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 120 }}
                    >
                      {/* Halo rings */}
                      <motion.div
                        className="absolute rounded-full"
                        style={{ inset: -20, border: '1px solid rgba(53,94,71,0.4)' }}
                        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute rounded-full"
                        style={{ inset: -34, border: '1px solid rgba(53,94,71,0.2)' }}
                        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      />

                      {/* Green crest circle */}
                      <motion.div
                        className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #6DB890 0%, #355E47 50%, #2D9B5A 100%)',
                          boxShadow: '0 8px 30px rgba(53,94,71,0.7), 0 0 0 3px rgba(53,94,71,0.3), inset 0 2px 0 rgba(109,184,144,0.3)',
                        }}
                        animate={{
                          boxShadow: [
                            '0 8px 30px rgba(53,94,71,0.5)',
                            '0 8px 50px rgba(45,155,90,0.9)',
                            '0 8px 30px rgba(53,94,71,0.5)',
                          ],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        <Shield className="text-white" style={{ width: 44, height: 44 }} strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>

                    {/* Title block */}
                    <motion.div
                      className="text-center mb-6"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <p className="text-[10px] font-bold tracking-[0.5em] uppercase mb-2" style={{ color: '#6DB890' }}>
                        Certified
                      </p>
                      <h3 className="bc-serif green-glow text-3xl font-bold text-white leading-tight mb-1">
                        British Council
                      </h3>
                      <p className="bc-serif text-xl italic font-light" style={{ color: 'rgba(109,184,144,0.75)' }}>
                        Education Agent
                      </p>
                    </motion.div>

                    {/* Stars divider */}
                    <motion.div
                      className="w-full flex items-center gap-2 mb-6"
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                    >
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(53,94,71,0.8))' }} />
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <motion.div key={i}
                          animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, delay }}
                        >
                          <Star className="w-3 h-3" style={{ color: '#6DB890', fill: '#6DB890' }} />
                        </motion.div>
                      ))}
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(53,94,71,0.8))' }} />
                    </motion.div>

                    {/* Check items */}
                    <div className="space-y-3 w-full">
                      {checkItems.map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.7 + i * 0.12 }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                          >
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#6DB890' }} />
                          </motion.div>
                          <span className="text-xs font-light tracking-wide" style={{ color: 'rgba(255,255,255,0.65)' }}>
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer seal */}
                    <motion.div
                      className="mt-7 pt-5 w-full text-center"
                      style={{ borderTop: '1px solid rgba(53,94,71,0.3)' }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      <p className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'rgba(109,184,144,0.4)' }}>
                        Officially Accredited Education Partner
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}