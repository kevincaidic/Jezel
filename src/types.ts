export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  year: string;
  role: string;
  client: string;
  gallery?: string[];
  stats?: { label: string; value: string };
}

export interface Skill {
  name: string;
  category: 'Design & Direction' | 'Tech & Development' | 'Strategy & Media';
  level: number;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  link?: string;
  tag: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
  isLatest?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  priceRange?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarSeed: string; // Used for picsum avatar seeding
  rating: number;
}
