export const locationData = {

  // ============= UK LOCATIONS =============

  london: {
    name: "London",
    country: "United Kingdom",
    isInternational: false,
    tagline: "Study in the heart of one of the world's most iconic cities",
    stats: { students: "3,500+", programs: "12", campusSize: "15 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Modern Campus", description: "State-of-the-art facilities in the heart of London with cutting-edge technology and collaborative learning spaces." },
      { icon: "BookOpen", title: "Extensive Library", description: "Access to over 250,000 books, journals, and digital resources with 24/7 study areas." },
      { icon: "Users", title: "Diverse Community", description: "Students from 80+ countries creating a truly global learning environment." },
      { icon: "Award", title: "Industry Links", description: "Strong partnerships with London's leading businesses and organizations for internships and placements." },
      { icon: "Globe", title: "Global City", description: "Experience world-class culture, entertainment, and career opportunities in one of the world's leading cities." },
      { icon: "Wifi", title: "Smart Campus", description: "High-speed WiFi, smart classrooms, and digital learning platforms throughout campus." }
    ],
    programs: [
      { name: "BA (Hons) Business and Management", level: "BA (Hons)", department: "Business School", duration: "1–4 years", intake: "350+", accreditation: "AACSB", description: "Develop the skills and knowledge to lead in today's competitive business world. Our flexible Business Management program lets you choose a 1, 2, 3, or 4-year study path to match your goals. Gain expertise in leadership, marketing, finance, and strategic planning—preparing you for a successful career in any industry.", slug: "ba-business-management" },
      { name: "BSc (Hons) Health and Social Care", level: "BSc (Hons)", department: "School of Health", duration: "1–4 years", intake: "240+", accreditation: "QAA", description: "Prepare for a rewarding career supporting individuals and communities. Our flexible Health and Social Care program offers 1, 2, 3, or 4-year options to suit your needs. You'll gain practical skills and essential knowledge in care, safeguarding, communication, and health systems.", slug: "bsc-health-social-care" },
      { name: "BSc Computer Science", level: "BSc", department: "School of Technology", duration: "3–4 years", intake: "400+", accreditation: "BCS", description: "Build a future in tech with our flexible Computing program, available in 3 or 4-year study options. Learn core skills in programming, networking, cybersecurity, and software development.", slug: "bsc-computer-science" },
      { name: "BSc (Hons) Cyber Security", level: "BSc (Hons)", department: "School of Technology", duration: "2–4 years", intake: "280+", accreditation: "NCSC", description: "Protect the digital world with hands-on skills in ethical hacking, network security, risk management, and digital forensics.", slug: "bsc-cyber-security" },
      { name: "BSc (Hons) Data Science", level: "BSc (Hons)", department: "School of Technology", duration: "3–4 years", intake: "180+", accreditation: "QAA", description: "Turn data into insight. Develop expertise in data analysis, programming, statistics, and machine learning for data-driven industries.", slug: "bsc-data-science" },
      { name: "BSc Psychology", level: "BSc", department: "School of Social Sciences", duration: "3–4 years", intake: "290+", accreditation: "BPS", description: "Explore the science of the mind and human behavior with our Psychology program, available over 3 or 4 years. Gain a deep understanding of cognitive, social, developmental, and clinical psychology.", slug: "bsc-psychology" },
      { name: "BSc (Hons) Accounting and Finance", level: "BSc (Hons)", department: "Business School", duration: "2–4 years", intake: "320+", accreditation: "ACCA", description: "Build a strong foundation for a successful career in finance. Learn essential skills in financial management, auditing, taxation, and investment analysis.", slug: "bsc-accounting-finance" },
      { name: "BA (Hons) Criminology and Psychology", level: "BA (Hons)", department: "School of Social Sciences", duration: "3–4 years", intake: "160+", accreditation: "QAA", description: "Explore the relationship between crime, behaviour, and society. Combines the scientific study of the mind with an in-depth understanding of criminal behaviour, justice systems, and social impact.", slug: "ba-criminology-psychology" },
      { name: "LLB (Hons) Law", level: "LLB (Hons)", department: "School of Law", duration: "3–4 years", intake: "220+", accreditation: "SRA", description: "Gain a solid foundation in legal knowledge and critical thinking. Covers criminal law, contract law, constitutional law, and human rights.", slug: "llb-law" },
      { name: "BSc (Hons) International Hospitality and Tourism Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "150+", accreditation: "QAA", description: "Discover the dynamic world of global hospitality and tourism. Combines business management principles with practical industry insights.", slug: "bsc-hospitality-tourism" },
      { name: "BSc (Hons) Digital Marketing", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "200+", accreditation: "CIM", description: "Master the art of online engagement. Covers social media marketing, SEO, analytics, branding, and digital advertising.", slug: "bsc-digital-marketing" },
      { name: "BSc (Hons) Project Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "170+", accreditation: "APM", description: "Develop the skills to lead projects across industries. Learn planning, risk management, budgeting, and Agile methodology.", slug: "bsc-project-management" }
    ],
    benefits: [
      { title: "Prime Location", description: "Situated in Zone 2 with excellent transport links to all of London's attractions and business districts." },
      { title: "Career Opportunities", description: "Access to thousands of internships and graduate jobs in London's thriving job market." },
      { title: "Cultural Hub", description: "Surrounded by world-famous museums, theaters, galleries, and entertainment venues." },
      { title: "Networking Events", description: "Regular industry meetups, career fairs, and alumni networking events with London's top employers." },
      { title: "Student Support", description: "Dedicated support services including accommodation, visa help, and career guidance." }
    ]
  },

  birmingham: {
    name: "Birmingham",
    country: "United Kingdom",
    isInternational: false,
    tagline: "Discover excellence in the UK's second city",
    stats: { students: "2,800+", programs: "12", campusSize: "12 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "City Centre Campus", description: "Located in Birmingham's vibrant city centre with modern facilities and excellent transport links." },
      { icon: "BookOpen", title: "Research Excellence", description: "Award-winning research facilities focusing on innovation and practical applications." },
      { icon: "Users", title: "Strong Community", description: "Close-knit student community with diverse backgrounds and shared ambitions." },
      { icon: "Award", title: "Industry Partnerships", description: "Collaborations with Midlands' leading employers including Jaguar Land Rover and HSBC." },
      { icon: "Globe", title: "Multicultural City", description: "Experience one of Europe's youngest and most diverse cities with vibrant cultural scenes." },
      { icon: "Wifi", title: "Digital Learning", description: "Advanced online learning platforms and virtual collaboration tools." }
    ],
    programs: [
      { name: "BA (Hons) Business and Management", level: "BA (Hons)", department: "Business School", duration: "1–4 years", intake: "350+", accreditation: "AACSB", description: "Develop the skills and knowledge to lead in today's competitive business world. Our flexible Business Management program lets you choose a 1, 2, 3, or 4-year study path to match your goals.", slug: "ba-business-management" },
      { name: "BSc (Hons) Health and Social Care", level: "BSc (Hons)", department: "School of Health", duration: "1–4 years", intake: "240+", accreditation: "QAA", description: "Prepare for a rewarding career supporting individuals and communities. Gain practical skills and essential knowledge in care, safeguarding, communication, and health systems.", slug: "bsc-health-social-care" },
      { name: "BSc Computer Science", level: "BSc", department: "School of Technology", duration: "3–4 years", intake: "400+", accreditation: "BCS", description: "Build a future in tech with our flexible Computing program. Learn core skills in programming, networking, cybersecurity, and software development.", slug: "bsc-computer-science" },
      { name: "BSc (Hons) Cyber Security", level: "BSc (Hons)", department: "School of Technology", duration: "2–4 years", intake: "280+", accreditation: "NCSC", description: "Protect the digital world with hands-on skills in ethical hacking, network security, risk management, and digital forensics.", slug: "bsc-cyber-security" },
      { name: "BSc (Hons) Data Science", level: "BSc (Hons)", department: "School of Technology", duration: "3–4 years", intake: "180+", accreditation: "QAA", description: "Turn data into insight. Develop expertise in data analysis, programming, statistics, and machine learning.", slug: "bsc-data-science" },
      { name: "BSc Psychology", level: "BSc", department: "School of Social Sciences", duration: "3–4 years", intake: "290+", accreditation: "BPS", description: "Explore the science of the mind and human behavior. Gain a deep understanding of cognitive, social, developmental, and clinical psychology.", slug: "bsc-psychology" },
      { name: "BSc (Hons) Accounting and Finance", level: "BSc (Hons)", department: "Business School", duration: "2–4 years", intake: "320+", accreditation: "ACCA", description: "Build a strong foundation for a career in finance. Learn financial management, auditing, taxation, and investment analysis.", slug: "bsc-accounting-finance" },
      { name: "BA (Hons) Criminology and Psychology", level: "BA (Hons)", department: "School of Social Sciences", duration: "3–4 years", intake: "160+", accreditation: "QAA", description: "Explore the relationship between crime, behaviour, and society combined with the scientific study of the mind.", slug: "ba-criminology-psychology" },
      { name: "LLB (Hons) Law", level: "LLB (Hons)", department: "School of Law", duration: "3–4 years", intake: "220+", accreditation: "SRA", description: "Gain a solid foundation in legal knowledge covering criminal law, contract law, constitutional law, and human rights.", slug: "llb-law" },
      { name: "BSc (Hons) International Hospitality and Tourism Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "150+", accreditation: "QAA", description: "Discover the dynamic world of global hospitality and tourism combining business management with practical industry insights.", slug: "bsc-hospitality-tourism" },
      { name: "BSc (Hons) Digital Marketing", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "200+", accreditation: "CIM", description: "Master the art of online engagement covering social media marketing, SEO, analytics, branding, and digital advertising.", slug: "bsc-digital-marketing" },
      { name: "BSc (Hons) Project Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "170+", accreditation: "APM", description: "Develop the skills to lead projects across industries. Learn planning, risk management, budgeting, and Agile methodology.", slug: "bsc-project-management" }
    ],
    benefits: [
      { title: "Affordable Living", description: "Lower cost of living compared to London while maintaining high quality of life." },
      { title: "Growing Economy", description: "Part of the fastest-growing regional economy in the UK with expanding job opportunities." },
      { title: "Excellent Transport", description: "Major transport hub with direct trains to London, Manchester, and across the UK." },
      { title: "Student-Friendly", description: "Vibrant student scene with affordable entertainment, dining, and nightlife options." },
      { title: "Innovation District", description: "Located near Birmingham's innovation quarter with tech startups and creative industries." }
    ]
  },

  manchester: {
    name: "Manchester",
    country: "United Kingdom",
    isInternational: false,
    tagline: "Study in the UK's most exciting city for students",
    stats: { students: "3,200+", programs: "12", campusSize: "14 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Modern Facilities", description: "Contemporary campus with award-winning architecture and sustainable design." },
      { icon: "BookOpen", title: "Innovation Labs", description: "Cutting-edge laboratories and maker spaces for hands-on learning." },
      { icon: "Users", title: "Active Student Life", description: "Over 100 student societies and clubs with thriving social scene." },
      { icon: "Award", title: "Media & Tech Hub", description: "Strong connections with MediaCityUK and Manchester's booming tech sector." },
      { icon: "Globe", title: "Sports Capital", description: "Home to world-famous football clubs and excellent sports facilities." },
      { icon: "Wifi", title: "Digital Innovation", description: "5G enabled campus with advanced digital infrastructure." }
    ],
    programs: [
      { name: "BA (Hons) Business and Management", level: "BA (Hons)", department: "Business School", duration: "1–4 years", intake: "350+", accreditation: "AACSB", description: "Develop the skills and knowledge to lead in today's competitive business world. Our flexible Business Management program lets you choose a 1, 2, 3, or 4-year study path to match your goals.", slug: "ba-business-management" },
      { name: "BSc (Hons) Health and Social Care", level: "BSc (Hons)", department: "School of Health", duration: "1–4 years", intake: "240+", accreditation: "QAA", description: "Prepare for a rewarding career supporting individuals and communities. Gain practical skills and essential knowledge in care, safeguarding, communication, and health systems.", slug: "bsc-health-social-care" },
      { name: "BSc Computer Science", level: "BSc", department: "School of Technology", duration: "3–4 years", intake: "400+", accreditation: "BCS", description: "Build a future in tech with our flexible Computing program. Learn core skills in programming, networking, cybersecurity, and software development.", slug: "bsc-computer-science" },
      { name: "BSc (Hons) Cyber Security", level: "BSc (Hons)", department: "School of Technology", duration: "2–4 years", intake: "280+", accreditation: "NCSC", description: "Protect the digital world with hands-on skills in ethical hacking, network security, risk management, and digital forensics.", slug: "bsc-cyber-security" },
      { name: "BSc (Hons) Data Science", level: "BSc (Hons)", department: "School of Technology", duration: "3–4 years", intake: "180+", accreditation: "QAA", description: "Turn data into insight. Develop expertise in data analysis, programming, statistics, and machine learning.", slug: "bsc-data-science" },
      { name: "BSc Psychology", level: "BSc", department: "School of Social Sciences", duration: "3–4 years", intake: "290+", accreditation: "BPS", description: "Explore the science of the mind and human behavior. Gain a deep understanding of cognitive, social, developmental, and clinical psychology.", slug: "bsc-psychology" },
      { name: "BSc (Hons) Accounting and Finance", level: "BSc (Hons)", department: "Business School", duration: "2–4 years", intake: "320+", accreditation: "ACCA", description: "Build a strong foundation for a career in finance. Learn financial management, auditing, taxation, and investment analysis.", slug: "bsc-accounting-finance" },
      { name: "BA (Hons) Criminology and Psychology", level: "BA (Hons)", department: "School of Social Sciences", duration: "3–4 years", intake: "160+", accreditation: "QAA", description: "Explore the relationship between crime, behaviour, and society combined with the scientific study of the mind.", slug: "ba-criminology-psychology" },
      { name: "LLB (Hons) Law", level: "LLB (Hons)", department: "School of Law", duration: "3–4 years", intake: "220+", accreditation: "SRA", description: "Gain a solid foundation in legal knowledge covering criminal law, contract law, constitutional law, and human rights.", slug: "llb-law" },
      { name: "BSc (Hons) International Hospitality and Tourism Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "150+", accreditation: "QAA", description: "Discover the dynamic world of global hospitality and tourism combining business management with practical industry insights.", slug: "bsc-hospitality-tourism" },
      { name: "BSc (Hons) Digital Marketing", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "200+", accreditation: "CIM", description: "Master the art of online engagement covering social media marketing, SEO, analytics, branding, and digital advertising.", slug: "bsc-digital-marketing" },
      { name: "BSc (Hons) Project Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "170+", accreditation: "APM", description: "Develop the skills to lead projects across industries. Learn planning, risk management, budgeting, and Agile methodology.", slug: "bsc-project-management" }
    ],
    benefits: [
      { title: "Cultural Scene", description: "World-class music venues, theaters, museums, and festivals throughout the year." },
      { title: "Tech Ecosystem", description: "Growing tech startup scene with accelerators and co-working spaces." },
      { title: "Student City", description: "One of the UK's largest student populations creating a vibrant atmosphere." },
      { title: "Career Hub", description: "Major employers including BBC, ITV, and tech companies based in the city." },
      { title: "Great Transport", description: "Excellent connections across the UK and Manchester Airport for international travel." }
    ]
  },

  leeds: {
    name: "Leeds",
    country: "United Kingdom",
    isInternational: false,
    tagline: "Your gateway to professional success in Yorkshire",
    stats: { students: "2,400+", programs: "10", campusSize: "10 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Business District", description: "Campus located in Leeds' thriving business quarter with modern learning spaces." },
      { icon: "BookOpen", title: "Professional Focus", description: "Career-oriented programs with strong emphasis on employability." },
      { icon: "Users", title: "Industry Mentors", description: "One-on-one mentoring from professionals in your chosen field." },
      { icon: "Award", title: "Legal Excellence", description: "Strong reputation for law and legal studies with top-tier law firms nearby." },
      { icon: "Globe", title: "Regional Hub", description: "Yorkshire's largest city offering big-city opportunities with community feel." },
      { icon: "Wifi", title: "Connected Campus", description: "Ultra-fast internet and modern IT infrastructure throughout." }
    ],
    programs: [
      { name: "BA (Hons) Business and Management", level: "BA (Hons)", department: "Business School", duration: "1–4 years", intake: "350+", accreditation: "AACSB", description: "Develop the skills and knowledge to lead in today's competitive business world. Our flexible Business Management program lets you choose a 1, 2, 3, or 4-year study path to match your goals.", slug: "ba-business-management" },
      { name: "BSc (Hons) Health and Social Care", level: "BSc (Hons)", department: "School of Health", duration: "1–4 years", intake: "240+", accreditation: "QAA", description: "Prepare for a rewarding career supporting individuals and communities. Gain practical skills and essential knowledge in care, safeguarding, communication, and health systems.", slug: "bsc-health-social-care" },
      { name: "BSc Computer Science", level: "BSc", department: "School of Technology", duration: "3–4 years", intake: "400+", accreditation: "BCS", description: "Build a future in tech with our flexible Computing program. Learn core skills in programming, networking, cybersecurity, and software development.", slug: "bsc-computer-science" },
      { name: "BSc Psychology", level: "BSc", department: "School of Social Sciences", duration: "3–4 years", intake: "290+", accreditation: "BPS", description: "Explore the science of the mind and human behavior. Gain a deep understanding of cognitive, social, developmental, and clinical psychology.", slug: "bsc-psychology" },
      { name: "BSc (Hons) Accounting and Finance", level: "BSc (Hons)", department: "Business School", duration: "2–4 years", intake: "320+", accreditation: "ACCA", description: "Build a strong foundation for a career in finance. Learn financial management, auditing, taxation, and investment analysis.", slug: "bsc-accounting-finance" },
      { name: "BA (Hons) Criminology and Psychology", level: "BA (Hons)", department: "School of Social Sciences", duration: "3–4 years", intake: "160+", accreditation: "QAA", description: "Explore the relationship between crime, behaviour, and society combined with the scientific study of the mind.", slug: "ba-criminology-psychology" },
      { name: "LLB (Hons) Law", level: "LLB (Hons)", department: "School of Law", duration: "3–4 years", intake: "220+", accreditation: "SRA", description: "Gain a solid foundation in legal knowledge covering criminal law, contract law, constitutional law, and human rights.", slug: "llb-law" },
      { name: "BSc (Hons) International Hospitality and Tourism Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "150+", accreditation: "QAA", description: "Discover the dynamic world of global hospitality and tourism combining business management with practical industry insights.", slug: "bsc-hospitality-tourism" },
      { name: "BSc (Hons) Digital Marketing", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "200+", accreditation: "CIM", description: "Master the art of online engagement covering social media marketing, SEO, analytics, branding, and digital advertising.", slug: "bsc-digital-marketing" },
      { name: "BSc (Hons) Project Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "170+", accreditation: "APM", description: "Develop the skills to lead projects across industries. Learn planning, risk management, budgeting, and Agile methodology.", slug: "bsc-project-management" }
    ],
    benefits: [
      { title: "Strong Economy", description: "Third largest UK economy outside London with diverse employment sectors." },
      { title: "Quality of Life", description: "Excellent blend of city amenities and Yorkshire countryside accessibility." },
      { title: "Professional Services", description: "Major hub for finance, law, and professional services firms." },
      { title: "Student Discounts", description: "Fantastic shopping and dining with student-friendly prices." },
      { title: "Support Network", description: "Comprehensive career services and employer partnerships." }
    ]
  },

  leicester: {
    name: "Leicester",
    country: "United Kingdom",
    isInternational: false,
    tagline: "Experience diversity and innovation in England's heart",
    stats: { students: "2,100+", programs: "6", campusSize: "9 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Compact Campus", description: "Friendly, accessible campus with modern facilities and collaborative spaces." },
      { icon: "BookOpen", title: "Applied Learning", description: "Practical, hands-on approach to education with real-world projects." },
      { icon: "Users", title: "Diverse Community", description: "One of the UK's most multicultural cities reflected in our student body." },
      { icon: "Award", title: "Creative Excellence", description: "Strong programs in fashion, design, and digital technology." },
      { icon: "Globe", title: "Cultural Diversity", description: "Experience rich cultural festivals and international cuisine year-round." },
      { icon: "Wifi", title: "Tech-Enabled", description: "Modern learning technology and digital resources." }
    ],
    programs: [
      { name: "BA (Hons) Business and Management", level: "BA (Hons)", department: "Business School", duration: "1–4 years", intake: "350+", accreditation: "AACSB", description: "Develop the skills and knowledge to lead in today's competitive business world. Our flexible Business Management program lets you choose a 1, 2, 3, or 4-year study path to match your goals.", slug: "ba-business-management" },
      { name: "BSc (Hons) Health and Social Care", level: "BSc (Hons)", department: "School of Health", duration: "1–4 years", intake: "240+", accreditation: "QAA", description: "Prepare for a rewarding career supporting individuals and communities. Gain practical skills and essential knowledge in care, safeguarding, communication, and health systems.", slug: "bsc-health-social-care" },
      { name: "HND Digital Technology", level: "HND", department: "School of Technology", duration: "2 years", intake: "120+", accreditation: "BCS", description: "Build a future in tech with our flexible IT program. Learn core skills in programming, networking, cybersecurity, and software development.", slug: "hnd-digital-technology" },
      { name: "Foundation Degree in Human Resource Management", level: "Foundation Degree", department: "Business School", duration: "2 years", intake: "80+", accreditation: "CIPD", description: "Build a strong foundation for a career in people management. Covers recruitment, employee relations, performance management, and organisational development.", slug: "foundation-hrm" },
      { name: "HND Fashion & Textiles", level: "HND", department: "School of Creative Arts", duration: "2 years", intake: "60+", accreditation: "UAL", description: "Unleash your creativity and develop professional design skills. Explores fabric design, garment construction, trend forecasting, and fashion marketing.", slug: "hnd-fashion-textiles" },
      { name: "BSc (Hons) Business with Management (Top-up)", level: "BSc (Hons)", department: "Business School", duration: "1 year", intake: "100+", accreditation: "AACSB", description: "Complete your studies and earn a full honours degree. Designed for students who have completed a foundation or HND-level qualification, focusing on advanced business strategy, leadership, and project management.", slug: "bsc-business-management-topup" }
    ],
    benefits: [
      { title: "Affordable City", description: "One of the most affordable UK cities for students with low living costs." },
      { title: "Central Location", description: "Excellent rail links to London, Birmingham, and other major cities." },
      { title: "Community Feel", description: "Welcoming, friendly atmosphere with strong sense of community." },
      { title: "Creative Hub", description: "Growing fashion, design, and digital industries with career opportunities." },
      { title: "Rich Heritage", description: "2,000 years of history with modern amenities and cultural attractions." }
    ]
  },

  nottingham: {
    name: "Nottingham",
    country: "United Kingdom",
    isInternational: false,
    tagline: "Where tradition meets innovation",
    stats: { students: "2,600+", programs: "7", campusSize: "11 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Green Campus", description: "Beautiful campus with extensive green spaces and sustainable buildings." },
      { icon: "BookOpen", title: "Research Active", description: "Faculty engaged in cutting-edge research across multiple disciplines." },
      { icon: "Users", title: "Student Union", description: "Award-winning student union with excellent facilities and support." },
      { icon: "Award", title: "Law & Psychology", description: "Recognized for law, psychology, and social science programs." },
      { icon: "Globe", title: "City of Literature", description: "UNESCO City of Literature with vibrant arts and culture scene." },
      { icon: "Wifi", title: "Smart Learning", description: "AI-powered learning platforms and virtual labs." }
    ],
    programs: [
      { name: "BSc Psychology", level: "BSc", department: "School of Social Sciences", duration: "3–4 years", intake: "290+", accreditation: "BPS", description: "Explore the science of the mind and human behavior. Gain a deep understanding of cognitive, social, developmental, and clinical psychology.", slug: "bsc-psychology" },
      { name: "BSc (Hons) Accounting and Finance", level: "BSc (Hons)", department: "Business School", duration: "2–4 years", intake: "320+", accreditation: "ACCA", description: "Build a strong foundation for a career in finance. Learn financial management, auditing, taxation, and investment analysis.", slug: "bsc-accounting-finance" },
      { name: "BA (Hons) Criminology and Psychology", level: "BA (Hons)", department: "School of Social Sciences", duration: "3–4 years", intake: "160+", accreditation: "QAA", description: "Explore the relationship between crime, behaviour, and society combined with the scientific study of the mind.", slug: "ba-criminology-psychology" },
      { name: "LLB (Hons) Law", level: "LLB (Hons)", department: "School of Law", duration: "3–4 years", intake: "220+", accreditation: "SRA", description: "Gain a solid foundation in legal knowledge covering criminal law, contract law, constitutional law, and human rights.", slug: "llb-law" },
      { name: "BSc (Hons) International Hospitality and Tourism Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "150+", accreditation: "QAA", description: "Discover the dynamic world of global hospitality and tourism combining business management with practical industry insights.", slug: "bsc-hospitality-tourism" },
      { name: "BSc (Hons) Digital Marketing", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "200+", accreditation: "CIM", description: "Master the art of online engagement covering social media marketing, SEO, analytics, branding, and digital advertising.", slug: "bsc-digital-marketing" },
      { name: "BSc (Hons) Project Management", level: "BSc (Hons)", department: "Business School", duration: "3–4 years", intake: "170+", accreditation: "APM", description: "Develop the skills to lead projects across industries. Learn planning, risk management, budgeting, and Agile methodology.", slug: "bsc-project-management" }
    ],
    benefits: [
      { title: "Student City", description: "Large student population creating vibrant social scene and community." },
      { title: "Innovation Quarter", description: "Growing tech and creative industries cluster near campus." },
      { title: "Great Nightlife", description: "Renowned for entertainment, bars, clubs, and live music venues." },
      { title: "Green Spaces", description: "Surrounded by parks, forests, and countryside for outdoor activities." },
      { title: "Career Support", description: "Strong employer links and dedicated careers service." }
    ]
  },

  // ============= INTERNATIONAL LOCATIONS =============

  dubai: {
    name: "Dubai",
    country: "United Arab Emirates",
    isInternational: true,
    tagline: "Study in the world's most dynamic global city",
    stats: { students: "1,800+", programs: "9", campusSize: "8 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Ultra-Modern Campus", description: "State-of-the-art facilities in Dubai's academic hub with world-class infrastructure." },
      { icon: "BookOpen", title: "Global Curriculum", description: "Internationally recognized programs designed for global careers." },
      { icon: "Users", title: "International Mix", description: "Students from 100+ nationalities creating truly global networking." },
      { icon: "Award", title: "British Council Certified", description: "Officially certified education agent delivering UK-quality programs in the UAE." },
      { icon: "Globe", title: "Gateway to Middle East", description: "Access to emerging markets and opportunities across the Middle East and Asia." },
      { icon: "Wifi", title: "Future Ready", description: "AI labs, robotics facilities, and innovation centers." }
    ],
    programs: [
      { name: "Basic Certificate — International Diploma in Business (Level 2)", level: "Certificate", department: "Business School", duration: "6 months", intake: "Open", accreditation: "KHDA", description: "Start your journey into the world of business with our 6-month Level 2 International Diploma. Builds essential skills in communication, marketing, customer service, and business operations.", slug: "basic-certificate-business" },
      { name: "Foundation Preparatory Year — Extended Diploma in IT (Level 3)", level: "Foundation", department: "School of Technology", duration: "1 year", intake: "Open", accreditation: "KHDA", description: "Begin your path to a successful IT career. Provides essential knowledge in computing, programming, networking, and digital technologies.", slug: "foundation-it-level3" },
      { name: "Preparatory Year — Extended Diploma in Business (Level 3)", level: "Foundation", department: "Business School", duration: "1 year", intake: "Open", accreditation: "KHDA", description: "Kick-start your business career. Introduces key concepts in marketing, finance, management, and entrepreneurship.", slug: "preparatory-business-level3" },
      { name: "Higher National Diploma (Levels 4 & 5)", level: "HND", department: "Multiple Schools", duration: "2 years", intake: "Open", accreditation: "KHDA", description: "Advance your career with our 2-year HND program. Covers Levels 4 and 5, offering practical, career-focused learning combining academic theory with real-world application.", slug: "hnd-levels-4-5" },
      { name: "ACCA Certified Accountants Programme", level: "Professional", department: "Business School", duration: "Flexible", intake: "Open", accreditation: "ACCA", description: "Achieve global recognition as a qualified accountant. Study at your own pace while gaining skills in accounting, finance, and business management.", slug: "acca-programme" },
      { name: "HND in Healthcare Practices (Healthcare Management)", level: "HND", department: "School of Health", duration: "2 years", intake: "Open", accreditation: "KHDA", description: "Develop the skills to lead and manage within the healthcare sector. Combines practical training with knowledge in healthcare policy, leadership, and patient care.", slug: "hnd-healthcare-management" },
      { name: "HND in Digital Technologies (Cyber Security)", level: "HND", department: "School of Technology", duration: "2 years", intake: "Open", accreditation: "KHDA", description: "Protect the digital world. Provides hands-on experience in network security, ethical hacking, data protection, and risk management.", slug: "hnd-cyber-security" },
      { name: "HND in Construction Management", level: "HND", department: "School of Engineering", duration: "2 years", intake: "Open", accreditation: "KHDA", description: "Build your future in the construction industry. Combines technical knowledge with practical skills in project planning, site management, and sustainable construction.", slug: "hnd-construction-management" },
      { name: "HND International in Business (Online)", level: "HND", department: "Business School", duration: "2 years", intake: "Open", accreditation: "KHDA", description: "Gain a globally recognised qualification from anywhere in the world. Develops understanding of international business, marketing, finance, and management.", slug: "hnd-business-online" }
    ],
    benefits: [
      { title: "Tax-Free Income", description: "Graduate into Dubai's tax-free employment market with high salaries." },
      { title: "Global Hub", description: "Connect with multinational corporations and international businesses." },
      { title: "Luxury Lifestyle", description: "Experience world-class dining, shopping, and entertainment." },
      { title: "Career Growth", description: "Rapidly expanding job market with opportunities across all sectors." },
      { title: "Safe Environment", description: "One of the world's safest cities with excellent quality of life." }
    ]
  },

  malta: {
    name: "Malta",
    country: "Malta",
    isInternational: true,
    tagline: "Mediterranean excellence in education",
    stats: { students: "1,200+", programs: "6", campusSize: "6 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Island Campus", description: "Beautiful Mediterranean campus with modern facilities and sea views." },
      { icon: "BookOpen", title: "EU Education", description: "European Union-accredited programs with multilingual instruction." },
      { icon: "Users", title: "Close-Knit", description: "Small class sizes ensuring personalized attention and support." },
      { icon: "Award", title: "British Council Certified", description: "Officially certified education agent delivering UK-quality programs in the EU." },
      { icon: "Globe", title: "English Speaking", description: "Study in English in a beautiful EU location with Mediterranean climate." },
      { icon: "Wifi", title: "Digital Island", description: "Excellent digital infrastructure and tech startup ecosystem." }
    ],
    programs: [
      { name: "Award in Information Technology and Study Skills", level: "Award", department: "School of Technology", duration: "1 year", intake: "Open", accreditation: "MQF", description: "Build a strong academic and technical foundation. Introduces essential IT concepts alongside key study and communication skills to prepare you for further education or entry-level roles in the digital sector.", slug: "award-it-study-skills" },
      { name: "Award in Business Management and Study Skills", level: "Award", department: "Business School", duration: "1 year", intake: "Open", accreditation: "MQF", description: "Develop essential business knowledge and academic skills. Covers fundamental business principles alongside study techniques, communication, and time management skills.", slug: "award-business-study-skills" },
      { name: "Masters of Business Administration", level: "MBA", department: "Business School", duration: "1 year", intake: "Open", accreditation: "MQF", description: "Fast-track your leadership career with our intensive 1-year MBA. Develops advanced skills in strategic management, finance, marketing, and organisational leadership.", slug: "mba" },
      { name: "BA (Hons) Business Management", level: "BA (Hons)", department: "Business School", duration: "3 years", intake: "Open", accreditation: "MQF", description: "Develop the skills and knowledge to lead and innovate in the business world. Covers leadership, marketing, finance, and strategic planning.", slug: "ba-business-management" },
      { name: "MA Business & Management", level: "MA", department: "Business School", duration: "1 year", intake: "Open", accreditation: "MQF", description: "Enhance your expertise and advance your career. Offers in-depth knowledge of contemporary business practices, leadership strategies, and organisational development.", slug: "ma-business-management" },
      { name: "MA Marketing & Brand Management", level: "MA", department: "Business School", duration: "1 year", intake: "Open", accreditation: "MQF", description: "Elevate your marketing career. Gain advanced skills in brand strategy, digital marketing, consumer behaviour, and market research.", slug: "ma-marketing-brand" }
    ],
    benefits: [
      { title: "EU Member", description: "Study in EU with Schengen benefits and European job opportunities." },
      { title: "Lifestyle", description: "Mediterranean climate, beaches, and outdoor activities year-round." },
      { title: "Affordable", description: "Lower tuition and living costs compared to mainland Europe." },
      { title: "English Language", description: "Official English-speaking country making transition easy." },
      { title: "Growing Economy", description: "Expanding tech, gaming, and finance sectors with career opportunities." }
    ]
  },

  paris: {
    name: "Paris",
    country: "France",
    isInternational: true,
    tagline: "Experience excellence in the City of Light",
    stats: { students: "2,200+", programs: "12", campusSize: "7 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Historic Location", description: "Campus in the heart of Paris with blend of historic and modern architecture." },
      { icon: "BookOpen", title: "Arts & Culture", description: "Unparalleled access to world-class museums, galleries, and cultural institutions." },
      { icon: "Users", title: "International Body", description: "Diverse student community from across Europe and beyond." },
      { icon: "Award", title: "British Council Certified", description: "Officially certified education agent delivering UK-quality programs in France." },
      { icon: "Globe", title: "European Capital", description: "Study in one of Europe's most influential cultural and business capitals." },
      { icon: "Wifi", title: "Bilingual Learning", description: "Programs in English with optional French language support." }
    ],
    programs: [
      { name: "BSc International Business", level: "BSc", department: "Business School", duration: "3 years", intake: "Open", accreditation: "RNCP", description: "Prepare for a global career. Explore international trade, cross-cultural management, global marketing, and finance to navigate complex global markets.", slug: "bsc-international-business" },
      { name: "BSc Computer Science", level: "BSc", department: "School of Technology", duration: "3 years", intake: "Open", accreditation: "RNCP", description: "Build a strong foundation in computing. Learn programming, algorithms, software development, and computer systems through projects and labs.", slug: "bsc-computer-science" },
      { name: "BA International Relations and Diplomacy", level: "BA", department: "School of Social Sciences", duration: "3 years", intake: "Open", accreditation: "RNCP", description: "Explore global politics, diplomacy, and international affairs. Develop critical skills in negotiation, policy analysis, and cross-cultural communication.", slug: "ba-international-relations" },
      { name: "BSc International Hospitality and Tourism Management", level: "BSc", department: "Business School", duration: "3 years", intake: "Open", accreditation: "RNCP", description: "Prepare for a dynamic career in the global hospitality and tourism industry. Learn hotel management, event planning, sustainable tourism, and customer service excellence.", slug: "bsc-hospitality-tourism" },
      { name: "BSc International Marketing", level: "BSc", department: "Business School", duration: "3 years", intake: "Open", accreditation: "RNCP", description: "Gain the expertise to navigate global markets. Covers consumer behaviour, digital marketing, branding, and international market strategies.", slug: "bsc-international-marketing" },
      { name: "BSc Business Analytics", level: "BSc", department: "Business School", duration: "3 years", intake: "Open", accreditation: "RNCP", description: "Unlock the power of data. Learn to analyse complex data, develop predictive models, and support strategic business decisions.", slug: "bsc-business-analytics" },
      { name: "BSc Applied Mathematics and Artificial Intelligence", level: "BSc", department: "School of Technology", duration: "3 years", intake: "Open", accreditation: "RNCP", description: "Combine the power of mathematics with cutting-edge AI. Develop analytical skills while exploring machine learning, data modelling, and algorithm design.", slug: "bsc-maths-ai" },
      { name: "Master of Business Administration (MBA)", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "RNCP", description: "Elevate your leadership and management skills. Covers strategic management, finance, marketing, and organisational leadership for senior management roles globally.", slug: "mba" },
      { name: "MBA in International Business", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "RNCP", description: "Expand your global business expertise. Focuses on international trade, cross-cultural management, global marketing, and strategic leadership.", slug: "mba-international-business" },
      { name: "MSc Sustainability Management — UNITAR", level: "MSc", department: "Business School", duration: "2 years", intake: "Open", accreditation: "UNITAR", description: "Join the global movement toward sustainable development. Equips you with knowledge to lead environmental, social, and economic initiatives.", slug: "msc-sustainability-unitar" },
      { name: "MSc Data Science", level: "MSc", department: "School of Technology", duration: "2 years", intake: "Open", accreditation: "RNCP", description: "Advance your expertise in data analysis, machine learning, and big data technologies. Solve real-world problems across finance, healthcare, and technology.", slug: "msc-data-science" },
      { name: "MA International Relations and Diplomacy — UNITAR", level: "MA", department: "School of Social Sciences", duration: "2 years", intake: "Open", accreditation: "UNITAR", description: "Deepen your understanding of global politics and diplomacy. Gain advanced skills in negotiation, policy analysis, and cross-cultural communication.", slug: "ma-international-relations-unitar" }
    ],
    benefits: [
      { title: "Cultural Capital", description: "Immerse yourself in art, history, and culture at every corner." },
      { title: "Global Networks", description: "Access to Paris's international business and diplomatic communities." },
      { title: "Gastronomy", description: "Experience world-renowned French cuisine and culinary excellence." },
      { title: "European Network", description: "Easy travel to other European cities and international opportunities." },
      { title: "French Language", description: "Learn French while studying, enhancing your global career prospects." }
    ]
  },

  heidelberg: {
    name: "Heidelberg",
    country: "Germany",
    isInternational: true,
    tagline: "Academic excellence in Germany's oldest university town",
    stats: { students: "1,600+", programs: "5", campusSize: "8 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Historic Setting", description: "Study in one of Europe's most beautiful and historic university cities." },
      { icon: "BookOpen", title: "Research Focus", description: "Strong emphasis on research and academic rigor in German tradition." },
      { icon: "Users", title: "Academic Community", description: "Part of Heidelberg's centuries-old scholarly tradition." },
      { icon: "Award", title: "British Council Certified", description: "Officially certified education agent delivering UK-quality programs in Germany." },
      { icon: "Globe", title: "Central Europe", description: "Gateway to European opportunities and German job market." },
      { icon: "Wifi", title: "Innovation Labs", description: "Access to cutting-edge research facilities and technology parks." }
    ],
    programs: [
      { name: "BSc International Business", level: "BSc", department: "Business School", duration: "3 years", intake: "Open", accreditation: "FIBAA", description: "Prepare to excel in the global marketplace. Covers international trade, global marketing, cross-cultural management, and business strategy.", slug: "bsc-international-business" },
      { name: "BA International Relations and Diplomacy", level: "BA", department: "School of Social Sciences", duration: "3 years", intake: "Open", accreditation: "FIBAA", description: "Explore the complexities of global politics and diplomacy. Develop skills in negotiation, international policy analysis, and cross-cultural communication.", slug: "ba-international-relations" },
      { name: "Master of Business Administration (MBA)", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "FIBAA", description: "Enhance your leadership and strategic management skills. Covers advanced finance, marketing, operations, and organisational leadership.", slug: "mba" },
      { name: "MBA in International Business", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "FIBAA", description: "Broaden your global business acumen. Focus on international trade, cross-cultural leadership, global marketing, and strategic management.", slug: "mba-international-business" },
      { name: "MA International Relations and Diplomacy — UNITAR", level: "MA", department: "School of Social Sciences", duration: "2 years", intake: "Open", accreditation: "UNITAR", description: "Deepen your expertise in global diplomacy and international affairs. Develop advanced skills in negotiation, policy analysis, and cross-cultural communication.", slug: "ma-international-relations-unitar" }
    ],
    benefits: [
      { title: "Low Tuition", description: "Affordable education with high quality German academic standards." },
      { title: "Job Market", description: "Access to Germany's strong economy and engineering opportunities." },
      { title: "Beautiful City", description: "Picturesque location with castle, old town, and river views." },
      { title: "German Language", description: "Free German language courses to enhance career opportunities." },
      { title: "EU Access", description: "Study visa allows travel throughout Schengen area." }
    ]
  },

  tampa: {
    name: "Tampa",
    country: "United States",
    isInternational: true,
    tagline: "American education with Florida sunshine",
    stats: { students: "1,900+", programs: "6", campusSize: "12 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Sunshine Campus", description: "Modern facilities in sunny Florida with outdoor learning spaces." },
      { icon: "BookOpen", title: "US Curriculum", description: "American-style education with optional practical training opportunities." },
      { icon: "Users", title: "Diverse Community", description: "International students from Latin America, Asia, and beyond." },
      { icon: "Award", title: "British Council Certified", description: "Officially certified education agent delivering UK-quality programs in the USA." },
      { icon: "Globe", title: "Gateway to Americas", description: "Strategic location connecting North and South America." },
      { icon: "Wifi", title: "Tech Corridor", description: "Part of Florida's growing tech corridor with major companies nearby." }
    ],
    programs: [
      { name: "BSc International Business", level: "BSc", department: "Business School", duration: "3 years", intake: "Open", accreditation: "SACSCOC", description: "Prepare for a successful career in the global marketplace. Study international trade, global marketing, cross-cultural management, and business strategy.", slug: "bsc-international-business" },
      { name: "BSc Computer Science", level: "BSc", department: "School of Technology", duration: "3 years", intake: "Open", accreditation: "SACSCOC", description: "Build a solid foundation in computing. Learn programming, algorithms, software development, and computer systems with hands-on experience.", slug: "bsc-computer-science" },
      { name: "BA International Relations and Diplomacy", level: "BA", department: "School of Social Sciences", duration: "3 years", intake: "Open", accreditation: "SACSCOC", description: "Explore global politics, diplomacy, and international affairs. Develop critical skills in negotiation, policy analysis, and cross-cultural communication.", slug: "ba-international-relations" },
      { name: "Master of Business Administration (MBA)", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "SACSCOC", description: "Advance your leadership and management skills. Covers strategic management, finance, marketing, and organisational leadership for success in the global business environment.", slug: "mba" },
      { name: "MBA in International Business", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "SACSCOC", description: "Expand your expertise in global business. Focuses on international trade, cross-cultural leadership, global marketing, and strategic management.", slug: "mba-international-business" },
      { name: "MA International Relations and Diplomacy — UNITAR", level: "MA", department: "School of Social Sciences", duration: "2 years", intake: "Open", accreditation: "UNITAR", description: "Deepen your understanding of global politics and diplomacy. Develop advanced skills in negotiation, policy analysis, and cross-cultural communication.", slug: "ma-international-relations-unitar" }
    ],
    benefits: [
      { title: "OPT Opportunities", description: "Optional Practical Training allows work experience in the US after graduation." },
      { title: "Sunshine State", description: "Year-round warm weather and beautiful Gulf Coast beaches." },
      { title: "Growing Economy", description: "Florida's expanding tech and business sectors with no state income tax." },
      { title: "Cultural Diversity", description: "Experience American culture with strong Latin American influences." },
      { title: "Major Hub", description: "Close to theme parks, Tampa Bay, and excellent entertainment options." }
    ]
  },

  madrid: {
    name: "Madrid",
    country: "Spain",
    isInternational: true,
    tagline: "Study in Spain's vibrant capital of culture and innovation",
    stats: { students: "1,700+", programs: "10", campusSize: "7 acres", established: "2025" },
    features: [
      { icon: "Building2", title: "Central Campus", description: "Modern campus in Madrid's business district with excellent transport links." },
      { icon: "BookOpen", title: "Bilingual Programs", description: "Study in English or Spanish with bilingual MBA options." },
      { icon: "Users", title: "International Mix", description: "Students from Spain, Latin America, Europe, and worldwide." },
      { icon: "Award", title: "British Council Certified", description: "Officially certified education agent delivering UK-quality programs in Spain." },
      { icon: "Globe", title: "European Capital", description: "Experience Spanish culture in one of Europe's most exciting cities." },
      { icon: "Wifi", title: "Digital Learning", description: "Modern technology infrastructure supporting innovative teaching." }
    ],
    programs: [
      { name: "BSc International Business", level: "BSc", department: "Business School", duration: "3 years", intake: "Open", accreditation: "ANECA", description: "Prepare for a successful career in the global marketplace. Study international trade, global marketing, cross-cultural management, and business strategy.", slug: "bsc-international-business" },
      { name: "BSc Computer Science", level: "BSc", department: "School of Technology", duration: "3 years", intake: "Open", accreditation: "ANECA", description: "Build a strong foundation in computing. Learn programming, algorithms, software development, and computer systems through practical projects and labs.", slug: "bsc-computer-science" },
      { name: "BA International Relations and Diplomacy", level: "BA", department: "School of Social Sciences", duration: "3 years", intake: "Open", accreditation: "ANECA", description: "Explore the complexities of global politics and diplomacy. Develop skills in negotiation, policy analysis, and cross-cultural communication.", slug: "ba-international-relations" },
      { name: "BSc International Hospitality and Tourism Management", level: "BSc", department: "Business School", duration: "3 years", intake: "Open", accreditation: "ANECA", description: "Prepare for a dynamic career in global hospitality and tourism. Study hotel management, event planning, sustainable tourism, and customer service excellence.", slug: "bsc-hospitality-tourism" },
      { name: "MBA (English)", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "ANECA", description: "Advance your career with our 2-year MBA delivered in English. Covers strategic management, finance, marketing, and leadership for senior management roles globally.", slug: "mba-english" },
      { name: "MBA (Spanish)", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "ANECA", description: "Enhance your leadership skills with our 2-year MBA taught in Spanish. Prepares you for senior roles in Spanish-speaking business environments and global markets.", slug: "mba-spanish" },
      { name: "MBA in International Business", level: "MBA", department: "Business School", duration: "2 years", intake: "Open", accreditation: "ANECA", description: "Expand your global business expertise. Focuses on international trade, cross-cultural leadership, global marketing, and strategic management.", slug: "mba-international-business" },
      { name: "MSc Sustainability Management — UNITAR", level: "MSc", department: "Business School", duration: "2 years", intake: "Open", accreditation: "UNITAR", description: "Join the global movement toward sustainable development. Equips you with skills to lead environmental, social, and economic initiatives promoting sustainable business practices.", slug: "msc-sustainability-unitar" },
      { name: "MSc Data Science", level: "MSc", department: "School of Technology", duration: "2 years", intake: "Open", accreditation: "ANECA", description: "Enhance your expertise in data analysis, machine learning, and big data technologies. Gain skills to extract meaningful insights from complex datasets.", slug: "msc-data-science" },
      { name: "MA International Relations and Diplomacy — UNITAR", level: "MA", department: "School of Social Sciences", duration: "2 years", intake: "Open", accreditation: "UNITAR", description: "Deepen your understanding of global politics, diplomacy, and international affairs. Develop advanced skills in negotiation, policy analysis, and cross-cultural communication.", slug: "ma-international-relations-unitar" }
    ],
    benefits: [
      { title: "Cultural Experience", description: "Immerse yourself in Spanish culture, tapas, and vibrant nightlife." },
      { title: "EU Member", description: "Study in EU with access to European job market and travel opportunities." },
      { title: "Latin Connection", description: "Gateway to Latin American business and career opportunities." },
      { title: "Affordable Living", description: "Lower cost of living compared to other Western European capitals." },
      { title: "Perfect Weather", description: "Enjoy sunny Mediterranean climate and outdoor lifestyle." }
    ]
  }
};