'use client';
import { motion } from 'framer-motion';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';

const programImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop",
];

export default function LocationPrograms({ programs }) {
  const programList = Array.isArray(programs) && programs.length > 0 ? programs : [
    {
      name: "Business Administration",
      level: "Undergraduate",
      department: "Business School",
      duration: "3 years",
      intake: "120",
      accreditation: "AMBA",
      description: "Comprehensive business program covering management, finance, marketing, and entrepreneurship with real-world applications and internship opportunities.",
      slug: "business-administration"
    },
    {
      name: "LLB Law",
      level: "Undergraduate",
      department: "School of Law",
      duration: "3 years",
      intake: "85",
      accreditation: "SRA/BSB",
      description: "Qualifying law degree covering criminal law, contract law, tort law, human rights, and legal practice. Includes mock trials and opportunities at law firms.",
      slug: "llb-law"
    },
    {
      name: "Computer Science",
      level: "Undergraduate",
      department: "Engineering",
      duration: "3 years",
      intake: "90",
      accreditation: "BCS",
      description: "Learn programming, algorithms, artificial intelligence, and software development with state-of-the-art labs and industry partnerships.",
      slug: "computer-science"
    },
    {
      name: "International Relations",
      level: "Postgraduate",
      department: "Social Sciences",
      duration: "1 year",
      intake: "45",
      accreditation: "QAA",
      description: "Study global politics, diplomacy, and international law with opportunities at United Nations and other international organizations.",
      slug: "international-relations"
    },
    {
      name: "Medicine",
      level: "Undergraduate",
      department: "Medical School",
      duration: "5 years",
      intake: "150",
      accreditation: "GMC",
      description: "Comprehensive medical training with clinical placements at leading hospitals and state-of-the-art simulation facilities.",
      slug: "medicine"
    },
    {
      name: "Psychology",
      level: "Undergraduate",
      department: "Social Sciences",
      duration: "3 years",
      intake: "75",
      accreditation: "BPS",
      description: "Study cognitive, developmental, and social psychology with research opportunities and practical placements.",
      slug: "psychology"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white to-[#355E47]/5">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#355E47]/5 to-white" />
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <pattern id="programLeafPattern" patternUnits="userSpaceOnUse" width="40" height="40">
                <path d="M20,10 Q25,5 30,10 Q35,15 25,20 Q15,25 10,20 Q5,15 20,10" fill="none" stroke="#355E47" strokeWidth="0.3" />
                <circle cx="15" cy="25" r="1.5" fill="#355E47" />
                <circle cx="25" cy="15" r="1.5" fill="#2D5F3F" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#programLeafPattern)" />
          </svg>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#355E47]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#2D5F3F]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#355E47] to-transparent" />
            <span className="text-sm uppercase tracking-[0.2em] text-[#355E47]/70 font-light">Academic Excellence</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#355E47] to-transparent" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="relative">
              <span className="bg-gradient-to-r from-[#355E47] to-[#2D5F3F] bg-clip-text text-transparent">Programs</span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#355E47] to-transparent" />
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our popular programs available at this campus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programList.map((program, index) => {
            let imageIndex = index;
            if (program.name.includes("LLB") || program.name.includes("Law")) imageIndex = 8;
            else if (program.name.includes("Business")) imageIndex = 6;
            else if (program.name.includes("Computer")) imageIndex = 11;
            else if (program.name.includes("International")) imageIndex = 5;
            else if (program.name.includes("Medicine")) imageIndex = 0;
            else if (program.name.includes("Psychology")) imageIndex = 2;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/80 hover:border-[#355E47]/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={programImages[imageIndex]}
                    alt={program.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#355E47]/90 via-[#355E47]/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/30">
                    {program.level}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#355E47] transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-sm text-[#355E47] mb-4">{program.department}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-[#355E47]/5 rounded-xl">
                    <div className="text-center">
                      <Clock className="w-4 h-4 text-[#355E47] mx-auto mb-1" />
                      <div className="text-xs font-semibold text-slate-900">{program.duration}</div>
                      <div className="text-xs text-slate-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-[#355E47] mx-auto mb-1" />
                      <div className="text-xs font-semibold text-slate-900">{program.intake}</div>
                      <div className="text-xs text-slate-500">Intake</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-4 h-4 text-[#355E47] mx-auto mb-1" />
                      <div className="text-xs font-semibold text-slate-900">{program.accreditation}</div>
                      <div className="text-xs text-slate-500">Accredited</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {program.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={`/programs/${program.slug || program.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1 bg-[#355E47] text-white py-2.5 rounded-lg font-semibold text-sm text-center hover:bg-[#2D5F3F] transition-all group-hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Learn more about {program.name}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/apply"
                      className="px-5 py-2.5 border-2 border-[#355E47] text-[#355E47] rounded-lg font-semibold text-sm hover:bg-[#355E47] hover:text-white transition-all"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/programs"
            className="inline-flex items-center gap-2 bg-[#355E47] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#2D5F3F] transition-all shadow-lg hover:shadow-xl group"
          >
            View All Programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}