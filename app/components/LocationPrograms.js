'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, GraduationCap } from 'lucide-react';
import { useState } from 'react';

// ─── Keyword → Unsplash image map ────────────────────────────────────────────
// Each entry: if ANY keyword matches the program name, use this image.
// Order matters — more specific entries should come first.
const IMAGE_RULES = [
  { keywords: ['cyber', 'security'],                    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop' },
  { keywords: ['data science', 'data analytics'],       url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop' },
  { keywords: ['digital marketing', 'marketing'],       url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop' },
  { keywords: ['project management'],                   url: 'https://images.unsplash.com/photo-1507208773393-40d9fc670c8e?w=800&auto=format&fit=crop' },
  { keywords: ['computer', 'computing', 'software'],    url: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&auto=format&fit=crop' },
  { keywords: ['health', 'social care', 'nursing', 'medicine', 'medical', 'pharmacy', 'physiotherapy'], url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop' },
  { keywords: ['psychology', 'counselling', 'mental'],  url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop' },
  { keywords: ['criminology', 'criminal', 'forensic'],  url: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&auto=format&fit=crop' },
  { keywords: ['law', 'llb', 'legal', 'llm'],           url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop' },
  { keywords: ['hospitality', 'tourism', 'hotel'],      url: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&auto=format&fit=crop' },
  { keywords: ['accounting', 'accountant', 'acca', 'finance', 'financial'], url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop' },
  { keywords: ['international relations', 'diplomacy', 'politics', 'political'], url: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop' },
  { keywords: ['engineering', 'mechanical', 'electrical', 'civil'], url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop' },
  { keywords: ['architecture', 'design', 'interior'],   url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop' },
  { keywords: ['education', 'teaching', 'pgce', 'early childhood'], url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop' },
  { keywords: ['environment', 'sustainability', 'ecology'], url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop' },
  { keywords: ['media', 'journalism', 'communication', 'film'], url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop' },
  { keywords: ['sport', 'fitness', 'physical'],         url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop' },
  { keywords: ['art', 'creative', 'graphic'],           url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop' },
  { keywords: ['social work', 'social science', 'sociology'], url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop' },
  { keywords: ['human resource', 'hr ', 'hrm'],         url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop' },
  { keywords: ['logistics', 'supply chain'],            url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop' },
  { keywords: ['entrepreneurship', 'innovation', 'startup'], url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop' },
  { keywords: ['economics', 'economy'],                 url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop' },
  { keywords: ['biology', 'biomedical', 'life science'], url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop' },
  { keywords: ['artificial intelligence', 'ai ', 'machine learning'], url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop' },
  { keywords: ['fashion', 'textile', 'textiles', 'clothing', 'hnd fashion'], url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop' },
  // Generic business/management as a broad catch-all — keep near bottom
  { keywords: ['business', 'management', 'mba', 'commerce'], url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop' },
];

// Pool of generic academic images used as final fallback (rotated by card index)
const GENERIC_IMAGES = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop',
];

function getImageForProgram(name, index) {
  const lower = name.toLowerCase();
  for (const rule of IMAGE_RULES) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.url;
    }
  }
  // Always return a real image — cycle through generics
  return GENERIC_IMAGES[index % GENERIC_IMAGES.length];
}

// ─── Individual card with its own error-safe image state ─────────────────────
function ProgramCard({ program, index }) {
  const initialSrc = getImageForProgram(program.name, index);
  const fallbackSrc = GENERIC_IMAGES[index % GENERIC_IMAGES.length];
  const [src, setSrc] = useState(initialSrc);
  const [errored, setErrored] = useState(false);

  const handleError = () => {
    if (!errored) {
      setErrored(true);
      setSrc(fallbackSrc);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="bg-[#1a3328] rounded-2xl overflow-hidden border border-[#355E47]/40 hover:border-[#6DB890] transition-all duration-300"
    >
      <div className="w-full h-52 overflow-hidden bg-[#243d30] relative">
        <img
          src={src}
          alt={program.name}
          onError={handleError}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 leading-snug">{program.name}</h3>

        <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {program.duration || '3 Years'}
          </span>
          <span className="flex items-center gap-2">
            <Users size={16} />
            {program.students || '120 Students'}
          </span>
        </div>

        <button className="flex items-center gap-2 text-[#6DB890] hover:text-white transition">
          Apply Now
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function LocationPrograms({ programs = [] }) {
  if (!programs || programs.length === 0) return null;

  return (
    <section className="py-20 bg-[#0f1f16] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold">Available Programs</h2>
          <p className="text-gray-300 mt-3">Explore courses offered at this campus</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.name + index} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}