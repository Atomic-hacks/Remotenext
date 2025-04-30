import { JobCategory, Job, Testimonial, PremiumService } from "@/types";

export const JOB_CATEGORIES: JobCategory[] = [
  {
    id: "ai-training",
    title: "AI Training Jobs",
    slug: "ai-training",
    description: "Jobs focused on training AI models and systems"
  },
  {
    id: "data-labeling",
    title: "Data Labeling Jobs",
    slug: "data-labeling",
    description: "Jobs focused on labeling and categorizing data for AI systems"
  },
  {
    id: "content-moderation",
    title: "Content Moderation Jobs",
    slug: "content-moderation",
    description: "Jobs focused on moderating online content and platforms"
  },
  {
    id: "audio-transcription",
    title: "Audio Transcription Jobs",
    slug: "audio-transcription",
    description: "Jobs focused on transcribing audio content"
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant Jobs",
    slug: "virtual-assistant",
    description: "Jobs focused on providing virtual assistance services"
  }
];

export const FEATURED_JOBS: Job[] = [
  {
    id: "job-1",
    title: "AI Training Specialist",
    company: "TechLearn Inc.",
    location: "Remote",
    type: "Full-time",
    category: "ai-training",
    salary: "$60,000 - $80,000",
    description: "We're looking for an AI Training Specialist to help improve our machine learning models.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Experience with machine learning frameworks",
      "Strong analytical skills"
    ],
    responsibilities: [
      "Train and evaluate AI models",
      "Analyze model performance",
      "Implement improvements"
    ],
    postedDate: "2025-04-15",
    applicationLink: "/apply/job-1",
    featured: true
  },
  {
    id: "job-2",
    title: "Data Labeling Expert",
    company: "DataPrecision",
    location: "Remote",
    type: "Contract",
    category: "data-labeling",
    salary: "$25 - $35/hour",
    description: "Looking for data labeling experts to help improve our AI systems.",
    requirements: [
      "Detail-oriented",
      "Basic understanding of AI/ML concepts",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Label data accurately",
      "Follow project guidelines",
      "Meet quality standards"
    ],
    postedDate: "2025-04-20",
    applicationLink: "/apply/job-2",
    featured: true
  },
  {
    id: "job-3",
    title: "Content Moderator",
    company: "SocialGuard",
    location: "Remote",
    type: "Part-time",
    category: "content-moderation",
    salary: "$20 - $25/hour",
    description: "Join our team of content moderators ensuring safe online communities.",
    requirements: [
      "Strong attention to detail",
      "Good judgment",
      "Ability to work with sensitive content"
    ],
    responsibilities: [
      "Review user-generated content",
      "Apply community guidelines",
      "Flag inappropriate content"
    ],
    postedDate: "2025-04-22",
    applicationLink: "/apply/job-3",
    featured: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    position: "AI Trainer",
    company: "TechInnovate",
    quote: "This platform helped me secure a remote AI training position within two weeks. The process was seamless and the job perfectly matched my skills.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    position: "Data Labeling Specialist",
    company: "DataPro",
    quote: "Finding specialized remote work was challenging until I discovered this platform. Now I'm working on exciting projects from the comfort of my home.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    position: "Content Moderator",
    company: "SafeSpace",
    quote: "The job listings were accurate and detailed, which made finding the right position so much easier. I'm extremely satisfied with my new role.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

export const PREMIUM_SERVICES: PremiumService[] = [
  {
    id: "service-1",
    title: "VIP network job access",
    description: "Get access to our exclusive high-paying remote jobs not available to the public",
    price: "$29.99/month",
    features: [
      "Early access to premium job listings",
      "Direct contact with hiring managers",
      "Resume and profile prioritization"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "service-2",
    title: "Career Coaching",
    description: "One-on-one coaching sessions with industry experts",
    price: "$99.99/session",
    features: [
      "Personalized career guidance",
      "Interview preparation",
      "Skill development planning"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "service-3",
    title: "Resume & Portfolio Enhancement",
    description: "Professional enhancement of your resume and portfolio",
    price: "$79.99",
    features: [
      "Resume optimization for AI screening",
      "Portfolio review and improvement",
      "LinkedIn profile enhancement"
    ],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];