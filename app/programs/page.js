'use client';

import { useState } from 'react';
import ProgramsHero from '../components/ProgramsHero';
import ProgramFilters from '../components/ProgramFilters';
import ProgramCards from '../components/ProgramCards';

export default function ProgramsPage() {
  // All programs data
  const allPrograms = [
    // Business & Management - Undergraduate
    {
      id: 1,
      name: 'Bachelor of Business Administration (BBA)',
      slug: 'bachelor-business-administration',
      level: 'Undergraduate',
      category: 'Business',
      duration: '3-4 Years',
      location: 'London, Birmingham, Dubai',
      students: '2,500+',
      accreditation: 'AACSB Accredited',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      description: 'Comprehensive business education covering management, finance, marketing, and entrepreneurship.',
      features: [
        'Industry placements',
        'International exchange programs',
        'Real-world business projects',
        'Professional mentorship'
      ]
    },
    {
      id: 2,
      name: 'Bachelor of Commerce (B.Com)',
      slug: 'bachelor-commerce',
      level: 'Undergraduate',
      category: 'Business',
      duration: '3 Years',
      location: 'Manchester, Leeds',
      students: '1,800+',
      accreditation: 'ACCA Recognized',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      description: 'Focus on accounting, finance, taxation, and commercial law.',
      features: [
        'ACCA exemptions',
        'Industry certifications',
        'Accounting software training',
        'Tax and audit experience'
      ]
    },
    // Business - Postgraduate
    {
      id: 3,
      name: 'Master of Business Administration (MBA)',
      slug: 'master-business-administration',
      level: 'Postgraduate',
      category: 'Business',
      duration: '1-2 Years',
      location: 'London, Dubai, Paris',
      students: '1,200+',
      accreditation: 'Triple Accredited',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
      description: 'Executive MBA program for experienced professionals seeking leadership roles.',
      features: [
        'Executive coaching',
        'Global immersion trips',
        'C-suite networking',
        'Capstone projects'
      ]
    },
    {
      id: 4,
      name: 'MSc Financial Management',
      slug: 'msc-financial-management',
      level: 'Postgraduate',
      category: 'Business',
      duration: '1 Year',
      location: 'London, Birmingham',
      students: '800+',
      accreditation: 'CFA Recognized',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800',
      description: 'Advanced financial analysis, investment management, and corporate finance.',
      features: [
        'CFA Level 1 prep',
        'Bloomberg terminals',
        'Trading simulations',
        'Financial modeling'
      ]
    },
    // Engineering - Undergraduate
    {
      id: 5,
      name: 'BEng Computer Science',
      slug: 'beng-computer-science',
      level: 'Undergraduate',
      category: 'Engineering',
      duration: '3-4 Years',
      location: 'London, Manchester, Dubai',
      students: '3,200+',
      accreditation: 'BCS Accredited',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      description: 'Comprehensive computer science education with AI, machine learning, and software development.',
      features: [
        'AI & Machine Learning',
        'Cloud computing labs',
        'Industry placements',
        'Hackathon participation'
      ]
    },
    {
      id: 6,
      name: 'BEng Mechanical Engineering',
      slug: 'beng-mechanical-engineering',
      level: 'Undergraduate',
      category: 'Engineering',
      duration: '4 Years',
      location: 'Birmingham, Leeds',
      students: '1,500+',
      accreditation: 'IET Accredited',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      description: 'Design, analysis, and manufacturing of mechanical systems.',
      features: [
        'CAD/CAM training',
        'Robotics lab',
        'F1 racing team',
        'Industrial partnerships'
      ]
    },
    // Engineering - Postgraduate
    {
      id: 7,
      name: 'MSc Artificial Intelligence',
      slug: 'msc-artificial-intelligence',
      level: 'Postgraduate',
      category: 'Engineering',
      duration: '1 Year',
      location: 'London, Dubai',
      students: '900+',
      accreditation: 'IEEE Recognized',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      description: 'Advanced AI, deep learning, neural networks, and natural language processing.',
      features: [
        'GPU computing cluster',
        'Research opportunities',
        'Industry projects',
        'AI ethics training'
      ]
    },
    {
      id: 8,
      name: 'MSc Data Science',
      slug: 'msc-data-science',
      level: 'Postgraduate',
      category: 'Engineering',
      duration: '1 Year',
      location: 'London, Manchester, Paris',
      students: '1,100+',
      accreditation: 'Data Science Council',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      description: 'Big data analytics, machine learning, and statistical modeling.',
      features: [
        'Python & R programming',
        'Big data platforms',
        'Visualization tools',
        'Capstone projects'
      ]
    },
    // Arts & Humanities - Undergraduate
    {
      id: 9,
      name: 'BA International Relations',
      slug: 'ba-international-relations',
      level: 'Undergraduate',
      category: 'Arts',
      duration: '3 Years',
      location: 'Paris, Madrid, London',
      students: '1,600+',
      accreditation: 'UN Recognized',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      description: 'Global politics, diplomacy, international law, and conflict resolution.',
      features: [
        'UN internships',
        'Diplomatic simulations',
        'Foreign language training',
        'Study abroad programs'
      ]
    },
    {
      id: 10,
      name: 'BA Media & Communications',
      slug: 'ba-media-communications',
      level: 'Undergraduate',
      category: 'Arts',
      duration: '3 Years',
      location: 'London, Paris',
      students: '2,000+',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      description: 'Journalism, digital media, public relations, and content creation.',
      features: [
        'Media production studios',
        'Industry placements',
        'Digital marketing',
        'Portfolio development'
      ]
    },
    // Sciences - Undergraduate
    {
      id: 11,
      name: 'BSc Psychology',
      slug: 'bsc-psychology',
      level: 'Undergraduate',
      category: 'Sciences',
      duration: '3 Years',
      location: 'London, Birmingham, Manchester',
      students: '2,200+',
      accreditation: 'BPS Accredited',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800',
      description: 'Human behavior, cognitive processes, mental health, and research methods.',
      features: [
        'Research labs',
        'Clinical placements',
        'BPS accreditation',
        'Professional practice'
      ]
    },
    {
      id: 12,
      name: 'BSc Environmental Science',
      slug: 'bsc-environmental-science',
      level: 'Undergraduate',
      category: 'Sciences',
      duration: '3 Years',
      location: 'London, Leeds',
      students: '1,400+',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800',
      description: 'Climate change, sustainability, conservation, and environmental policy.',
      features: [
        'Field trips',
        'Lab research',
        'Sustainability projects',
        'Industry partnerships'
      ]
    },
    // Health & Medicine - Undergraduate
    {
      id: 13,
      name: 'BSc Nursing',
      slug: 'bsc-nursing',
      level: 'Undergraduate',
      category: 'Health',
      duration: '3 Years',
      location: 'London, Birmingham, Dubai',
      students: '1,900+',
      accreditation: 'NMC Approved',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      description: 'Professional nursing education with clinical placements and patient care training.',
      features: [
        'Clinical placements',
        'Simulation labs',
        'NMC registration',
        'Specialist pathways'
      ]
    },
    {
      id: 14,
      name: 'BSc Biomedical Science',
      slug: 'bsc-biomedical-science',
      level: 'Undergraduate',
      category: 'Health',
      duration: '3 Years',
      location: 'London, Manchester',
      students: '1,700+',
      accreditation: 'IBMS Accredited',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
      description: 'Human biology, disease mechanisms, diagnostics, and laboratory techniques.',
      features: [
        'Advanced labs',
        'Research projects',
        'Hospital placements',
        'IBMS accreditation'
      ]
    },
    // Health - Postgraduate
    {
      id: 15,
      name: 'MSc Public Health',
      slug: 'msc-public-health',
      level: 'Postgraduate',
      category: 'Health',
      duration: '1 Year',
      location: 'London, Birmingham',
      students: '800+',
      accreditation: 'WHO Recognized',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      description: 'Epidemiology, health policy, disease prevention, and global health.',
      features: [
        'WHO partnerships',
        'Field research',
        'Health policy analysis',
        'Global health focus'
      ]
    },
    // Social Sciences - Undergraduate
    {
      id: 16,
      name: 'BA Sociology',
      slug: 'ba-sociology',
      level: 'Undergraduate',
      category: 'Social',
      duration: '3 Years',
      location: 'London, Manchester',
      students: '1,500+',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
      description: 'Social structures, inequality, culture, and societal change.',
      features: [
        'Research methods',
        'Social policy',
        'Field work',
        'Community projects'
      ]
    },
    {
      id: 17,
      name: 'BA Economics',
      slug: 'ba-economics',
      level: 'Undergraduate',
      category: 'Social',
      duration: '3 Years',
      location: 'London, Birmingham, Paris',
      students: '2,100+',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
      description: 'Microeconomics, macroeconomics, econometrics, and economic policy.',
      features: [
        'Quantitative analysis',
        'Economic modeling',
        'Policy research',
        'Industry internships'
      ]
    },
    // Doctorate Programs
    {
      id: 18,
      name: 'PhD Business Administration',
      slug: 'phd-business-administration',
      level: 'Doctorate',
      category: 'Business',
      duration: '3-4 Years',
      location: 'London, Dubai',
      students: '150+',
      image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800',
      description: 'Advanced research in business strategy, management, and organizational behavior.',
      features: [
        'Research funding',
        'Publishing support',
        'Conference attendance',
        'Teaching opportunities'
      ]
    },
    {
      id: 19,
      name: 'PhD Computer Science',
      slug: 'phd-computer-science',
      level: 'Doctorate',
      category: 'Engineering',
      duration: '3-4 Years',
      location: 'London, Manchester',
      students: '200+',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      description: 'Cutting-edge research in AI, cybersecurity, and software engineering.',
      features: [
        'Research grants',
        'International collaboration',
        'Lab facilities',
        'Industry partnerships'
      ]
    },
    // Online Programs
    {
      id: 20,
      name: 'Online MBA',
      slug: 'online-mba',
      level: 'Online',
      category: 'Business',
      duration: '2 Years (Flexible)',
      location: 'Global - Online',
      students: '3,500+',
      accreditation: 'AMBA Accredited',
      image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800',
      description: 'Flexible online MBA for working professionals with live and recorded sessions.',
      features: [
        '100% online',
        'Live workshops',
        'Global networking',
        'Flexible schedule'
      ]
    },
    {
      id: 21,
      name: 'Online MSc Data Analytics',
      slug: 'online-msc-data-analytics',
      level: 'Online',
      category: 'Engineering',
      duration: '18 Months (Flexible)',
      location: 'Global - Online',
      students: '2,800+',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
      description: 'Learn data analytics, visualization, and machine learning entirely online.',
      features: [
        'Flexible learning',
        'Industry tools',
        'Career support',
        'Global cohort'
      ]
    },
  ];

  const [filteredPrograms, setFilteredPrograms] = useState(allPrograms);
  const [displayPrograms, setDisplayPrograms] = useState(allPrograms);

  const handleFilterChange = ({ level, category }) => {
    let filtered = allPrograms;

    if (level !== 'all') {
      filtered = filtered.filter(p => p.level.toLowerCase() === level);
    }

    if (category !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category);
    }

    setFilteredPrograms(filtered);
    setDisplayPrograms(filtered);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setDisplayPrograms(filteredPrograms);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    const searched = filteredPrograms.filter(program =>
      program.name.toLowerCase().includes(searchLower) ||
      program.description.toLowerCase().includes(searchLower) ||
      program.category.toLowerCase().includes(searchLower) ||
      program.level.toLowerCase().includes(searchLower)
    );

    setDisplayPrograms(searched);
  };

  return (
    <div>
      <ProgramsHero />
      <ProgramFilters onFilterChange={handleFilterChange} onSearch={handleSearch} />
      <ProgramCards programs={displayPrograms} />
    </div>
  );
}