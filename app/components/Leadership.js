'use client';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. James Anderson",
      position: "Chancellor",
      image: "/team/chancellor.jpg", // Replace with actual image
      bio: "Leading educational innovation with 30+ years of academic excellence",
      linkedin: "#",
      email: "j.anderson@univavamus.com"
    },
    {
      name: "Prof. Sarah Mitchell",
      position: "Vice Chancellor - Academic Affairs",
      image: "/team/vc-academic.jpg", // Replace with actual image
      bio: "Former Oxford professor, pioneering modern curriculum development",
      linkedin: "#",
      email: "s.mitchell@univavamus.com"
    },
    {
      name: "Dr. Michael Chen",
      position: "Vice Chancellor - International",
      image: "/team/vc-international.jpg", // Replace with actual image
      bio: "Architect of our global expansion across 12 countries",
      linkedin: "#",
      email: "m.chen@univavamus.com"
    },
    {
      name: "Emma Williams",
      position: "Chief Operating Officer",
      image: "/team/coo.jpg", // Replace with actual image
      bio: "20+ years optimizing operations for educational institutions",
      linkedin: "#",
      email: "e.williams@univavamus.com"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by world-class educators and industry leaders committed to your success
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden">
                  {/* Placeholder - Replace with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                    {leader.name.charAt(0)}
                  </div>
                  {/* <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" /> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <a
                      href={leader.linkedin}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white transition-all"
                    >
                      <Mail className="w-5 h-5" />
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