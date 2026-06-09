import { Project, Skill, Certificate, ExperienceItem, ServiceItem, TestimonialItem } from './types';

export const PORTFOLIO_OWNER = {
  name: "Jezel Salcedo Batingal",
  title: "Brand Designer & Creative Developer",
  tagline: "Creating impactful brand identities and digital experiences that resonate.",
  bioShort: "A creative professional specializing in brand design, visual identity, and frontend development. Passionate about transforming ideas into compelling visual stories.",
  bioLong: "I am a brand designer and developer with experience in creating comprehensive brand identities, marketing materials, and digital solutions. My work spans various industries including food & beverage, industrial services, and technology. I combine creative design thinking with technical skills in web development, IoT systems, and cybersecurity. My approach focuses on understanding client needs and delivering designs that are not only visually appealing but also strategically effective in communicating brand values and achieving business goals.",
  portraitUrl: "/profile/profile.jpg",
  socials: {
    github: "https://github.com/jezel-batingal",
    linkedin: "https://linkedin.com/in/jezel-batingal",
    dribbble: "https://dribbble.com/jezel-batingal",
    behance: "https://behance.net/jezel-batingal",
    email: "batingal.jezel@dnsc.edu.ph"
  },
  stats: [
    { value: "5", label: "Brand Design Projects" },
    { value: "4", label: "Certifications Earned" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "1", label: "IoT Capstone Project" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "proj_1",
    title: "AquaFlow",
    category: "Brand Identity & Marketing Design",
    description: "Complete branding and marketing materials for a modern water refilling business, featuring clean aesthetics and customer-focused messaging.",
    longDescription: "AquaFlow is a premium water refilling station that needed a fresh, trustworthy brand identity. Created comprehensive branding including logo design, color schemes, promotional materials, and customer-facing marketing collateral. The design emphasizes purity, reliability, and modern convenience with a blue color palette that evokes trust and cleanliness.",
    image: "/brochure/Aquaflow.jpg",
    tags: ["Brand Identity", "Print Design", "Marketing Collateral", "Logo Design"],
    link: "#",
    year: "2024",
    role: "Brand Designer",
    client: "AquaFlow Water Refilling",
    gallery: [
      "/brochure/aquaflow-1.jpg",
      "/brochure/aquaflow-2.jpg"
    ],
    stats: { label: "Customer Recognition", value: "+45%" }
  },
  {
    id: "proj_2",
    title: "MacFac",
    category: "Corporate Branding & Print Design",
    description: "Professional branding and promotional materials for an industrial machinery and fabrication company.",
    longDescription: "MacFac required a strong, industrial brand identity that communicates reliability and technical expertise. Developed comprehensive branding materials including business collateral, promotional brochures, and marketing materials that showcase their manufacturing capabilities and professional services.",
    image: "/brochure/Macfac.jpg",
    tags: ["Corporate Design", "Industrial Branding", "Print Materials", "Professional Identity"],
    link: "#",
    year: "2024",
    role: "Brand Designer",
    client: "MacFac Industrial",
    gallery: [
      "/brochure/moncofaco.jpg",
      "/brochure/thynk unlimited.jpg"
    ],
    stats: { label: "Client Inquiries Increase", value: "+32%" }
  },
  {
    id: "proj_5",
    title: "IoT Smart Trash Bin System",
    category: "Capstone Project - IoT & Product Design",
    description: "Intelligent waste management solution using IoT technology for real-time monitoring and efficient trash collection.",
    longDescription: "Capstone project developing an innovative IoT-enabled smart trash bin system that monitors fill levels, optimizes collection routes, and provides real-time data analytics for waste management. The system includes sensor integration, mobile app interface, and cloud-based monitoring dashboard to revolutionize urban waste collection efficiency.",
    image: "/capstone/trash bin.jpg",
    tags: ["IoT", "Product Design", "Smart Systems", "Capstone Project"],
    link: "#",
    year: "2023",
    role: "Project Lead & Designer",
    client: "Academic Capstone",
    gallery: [
      "/capstone/iot.jpg"
    ],
    stats: { label: "Collection Efficiency", value: "+40%" }
  }
];

export const SKILLS: Skill[] = [
  // Design & Direction
  {
    name: "Brand Identity Design",
    category: "Design & Direction",
    level: 92,
    description: "Creating cohesive brand systems including logos, color palettes, typography, and visual guidelines."
  },
  {
    name: "Print & Marketing Design",
    category: "Design & Direction",
    level: 90,
    description: "Designing promotional materials, brochures, business cards, and marketing collateral for various industries."
  },
  {
    name: "UI/UX Design",
    category: "Design & Direction",
    level: 85,
    description: "Crafting user-centered interfaces and experiences that are intuitive, accessible, and visually appealing."
  },
  
  // Tech & Development
  {
    name: "React & TypeScript",
    category: "Tech & Development",
    level: 88,
    description: "Building modern web applications with React, TypeScript, and component-based architecture."
  },
  {
    name: "Frontend Development",
    category: "Tech & Development",
    level: 87,
    description: "Implementing responsive designs with HTML, CSS, Tailwind CSS, and modern JavaScript frameworks."
  },
  {
    name: "IoT & Smart Systems",
    category: "Tech & Development",
    level: 82,
    description: "Developing IoT solutions with sensor integration, data monitoring, and real-time system control."
  },

  // Strategy & Media
  {
    name: "Visual Communication",
    category: "Strategy & Media",
    level: 90,
    description: "Translating brand messages into compelling visual narratives that resonate with target audiences."
  },
  {
    name: "Cybersecurity Awareness",
    category: "Strategy & Media",
    level: 80,
    description: "Understanding security principles, ethical hacking concepts, and safe development practices."
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert_1",
    title: "Capstone Project Award",
    issuer: "University/College",
    date: "2023",
    description: "Recognition for outstanding capstone project in IoT Smart Trash Bin System, demonstrating innovation in waste management technology and practical application of IoT principles.",
    tag: "Academic Achievement",
    image: "/cert/capstone cert.jpg"
  },
  {
    id: "cert_2",
    title: "Ethical Hacker Certification",
    issuer: "Cybersecurity Institute",
    date: "2023",
    description: "Professional certification in ethical hacking and cybersecurity, covering penetration testing, vulnerability assessment, and security best practices for protecting digital systems.",
    tag: "Cybersecurity",
    image: "/cert/ethical hacker.jpg"
  },
  {
    id: "cert_3",
    title: "Exhibit Participation Certificate",
    issuer: "Technology Exhibition",
    date: "2023",
    description: "Recognition for participation and presentation in technology exhibition, showcasing innovative projects and contributing to knowledge sharing in the tech community.",
    tag: "Exhibition",
    image: "/cert/exhibit.jpg"
  },
  {
    id: "cert_4",
    title: "Presenter Certificate",
    issuer: "Conference/Seminar",
    date: "2023",
    description: "Certificate of recognition for presenting technical projects and research findings, demonstrating effective communication and knowledge sharing skills.",
    tag: "Presentation",
    image: "/cert/presenter.jpg"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp_1",
    role: "Brand Designer & Creative Developer",
    company: "Freelance",
    location: "Philippines (Remote)",
    period: "2022 - Present",
    description: [
      "Design comprehensive brand identities for various industries including F&B, industrial services, and tech startups.",
      "Create marketing collateral, promotional materials, and visual systems that effectively communicate brand values.",
      "Develop web applications and IoT solutions, combining creative design with technical implementation.",
      "Collaborate directly with clients to understand their vision and deliver impactful design solutions."
    ],
    tags: ["Brand Design", "Visual Identity", "Web Development", "Client Management"],
    isLatest: true
  },
  {
    id: "exp_2",
    role: "Capstone Project Lead",
    company: "Academic Project",
    location: "Philippines",
    period: "2023",
    description: [
      "Led development of IoT Smart Trash Bin System, an innovative waste management solution using sensor technology.",
      "Designed system architecture, user interfaces, and data monitoring dashboard for real-time trash collection optimization.",
      "Presented project at technology exhibitions, earning recognition and certification for innovation.",
      "Collaborated with team members on hardware integration, software development, and project documentation."
    ],
    tags: ["IoT", "Project Management", "Product Design", "Innovation"],
    isLatest: false
  },
  {
    id: "exp_3",
    role: "Design & Development Student",
    company: "Academic Training",
    location: "Philippines",
    period: "2020 - 2023",
    description: [
      "Studied brand design, visual communication, and digital development principles.",
      "Completed cybersecurity training and earned Ethical Hacker certification.",
      "Participated in exhibitions and presentations to showcase technical and creative projects.",
      "Built foundation in graphic design, web development, and IoT systems."
    ],
    tags: ["Brand Design", "Web Development", "Cybersecurity", "IoT"],
    isLatest: false
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "serv_1",
    title: "Brand Identity & Visual Design",
    description: "Creating memorable brand identities that capture your business essence and resonate with your audience.",
    details: [
      "Complete brand identity system (logo, colors, typography)",
      "Brand guidelines and style documentation",
      "Business cards, letterheads, and corporate materials",
      "Social media branding and digital assets"
    ],
    priceRange: "$500 - $2,000",
    featured: true
  },
  {
    id: "serv_2",
    title: "Marketing & Print Design",
    description: "Professional marketing materials that effectively communicate your message and drive customer engagement.",
    details: [
      "Brochures, flyers, and promotional materials",
      "Product packaging and label design",
      "Posters, banners, and signage design",
      "Menu design for restaurants and cafes"
    ],
    priceRange: "$300 - $1,500",
    featured: true
  },
  {
    id: "serv_3",
    title: "Web Development & Digital Solutions",
    description: "Modern, responsive websites and web applications built with the latest technologies.",
    details: [
      "Custom website design and development",
      "React and TypeScript applications",
      "Responsive and mobile-friendly interfaces",
      "Portfolio and business websites"
    ],
    priceRange: "$800 - $3,000",
    featured: false
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test_1",
    name: "Maria Santos",
    role: "Owner",
    company: "Moncofaco Coffee",
    quote: "Jezel created a beautiful brand identity for our coffee shop that perfectly captures the warm, welcoming atmosphere we wanted. Our customers love the design, and we've seen increased recognition since the rebrand.",
    avatarSeed: "maria",
    rating: 5
  },
  {
    id: "test_2",
    name: "Roberto Cruz",
    role: "Operations Manager",
    company: "AquaFlow",
    quote: "The branding materials Jezel designed for our water refilling station helped us stand out in a competitive market. Professional, clean, and exactly what we needed to build customer trust.",
    avatarSeed: "roberto",
    rating: 5
  },
  {
    id: "test_3",
    name: "Jennifer Lim",
    role: "Creative Director",
    company: "Thynk Unlimited",
    quote: "Working with Jezel was a great experience. She understood our vision for the agency brand and delivered creative work that exceeded our expectations. Highly recommended for brand design projects.",
    avatarSeed: "jennifer",
    rating: 5
  }
];
