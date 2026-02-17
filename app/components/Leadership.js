'use client';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Users } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. James Anderson",
      image: "/team/chancellor.jpg",
      bio: "Leading educational innovation with 30+ years of academic excellence",
      linkedin: "#",
      email: "j.anderson@univavamus.com"
    },
    {
      name: "Prof. Sarah Mitchell",
      image: "/team/vc-academic.jpg",
      bio: "Former Oxford professor, pioneering modern curriculum development",
      linkedin: "#",
      email: "s.mitchell@univavamus.com"
    },
    {
      name: "Dr. Michael Chen",
      image: "/team/vc-international.jpg",
      bio: "Architect of our global expansion across 12 countries",
      linkedin: "#",
      email: "m.chen@univavamus.com"
    },
    {
      name: "Emma Williams",
      image: "/team/coo.jpg",
      bio: "20+ years optimizing operations for educational institutions",
      linkedin: "#",
      email: "e.williams@univavamus.com"
    }
  ];

  return (
    <section className="py-16" style={{ background: 'linear-gradient(to bottom right, #f9fafb, rgba(53,94,71,0.05))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: 'rgba(53,94,71,0.1)', color: '#355E47' }}>
            <Users className="w-3.5 h-3.5" />
            Our Team
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #355E47, #2D5F3F)' }}>Leadership</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Guided by world-class educators and industry leaders committed to your success
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-52 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #355E47, #2D5F3F)' }}>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                    {leader.name.charAt(0)}
                  </div>
                  {/* <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" /> */}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">{leader.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <a
                      href={leader.linkedin}
                      className="flex items-center justify-center w-8 h-8 rounded-full transition-all"
                      style={{ backgroundColor: 'rgba(53,94,71,0.1)', color: '#355E47' }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#355E47'; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(53,94,71,0.1)'; e.currentTarget.style.color = '#355E47'; }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white transition-all"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}