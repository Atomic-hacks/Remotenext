export interface JobCategory {
    id: string;
    title: string;
    slug: string;
    description?: string;
    icon?: string;
  }
  
  export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string; // "Full-time", "Part-time", "Contract", etc.
    category: string;
    salary?: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    postedDate: string;
    applicationLink: string;
    featured?: boolean;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    quote: string;
    image: string;
  }
  
  export interface PremiumService {
    id: string;
    title: string;
    description: string;
    price?: string;
    features: string[];
    image?: string;
  }