'use client';

import React, { useRef } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { JOB_CATEGORIES } from "@/lib/constants";
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';

// Sample job listings based on the screenshot
const FEATURED_JOBS = [
  {
    id: "1",
    company: "Outlier",
    companyLogo: "/logos/outlier.png",
    title: "Spanish (Mexico) Freelance Writer",
    location: "Remote",
    type: "Project-based",
    postedDate: "04 Jan",
    skills: ["Writing", "es Spanish"],
    category: "Humanities & Social Sciences",
    featured: true
  },
  {
    id: "2",
    company: "Outlier",
    companyLogo: "/logos/outlier.png",
    title: "Arabic (Egypt) Freelance Writer (US)",
    location: "Remote",
    type: "Project-based",
    postedDate: "04 Jan",
    skills: ["Writing", "ar Arabic"],
    category: "Humanities & Social Sciences",
    featured: true
  },
  {
    id: "3",
    company: "Outlier",
    companyLogo: "/logos/outlier.png",
    title: "French Freelance Writer",
    location: "Remote",
    type: "Project-based",
    postedDate: "03 Jan",
    skills: ["Writing", "fr French"],
    category: "Humanities & Social Sciences",
    featured: false
  },
  {
    id: "4",
    company: "RemoteNext",
    companyLogo: "/logos/remotenext.png",
    title: "Senior React Developer",
    location: "Remote",
    type: "Full-time",
    postedDate: "05 Jan",
    skills: ["React", "TypeScript", "NextJS"],
    category: "Software Development",
    featured: true
  },
  {
    id: "5",
    company: "TechGlobal",
    companyLogo: "/logos/techglobal.png",
    title: "UX/UI Designer",
    location: "Remote",
    type: "Contract",
    postedDate: "02 Jan",
    skills: ["Figma", "Design Systems", "User Research"],
    category: "Design",
    featured: false
  },
  {
    id: "6",
    company: "HealthTech",
    companyLogo: "/logos/healthtech.png",
    title: "Medical Content Writer",
    location: "Remote",
    type: "Project-based",
    postedDate: "06 Jan",
    skills: ["Medical Writing", "Research", "Content Strategy"],
    category: "Healthcare",
    featured: true
  }
];

const JobCategories: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-neutral-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto rounded-xl overflow-hidden"
    >
      <motion.div 
        className="text-center mb-12 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          variants={headerVariants}
          className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-800"
        >
          Featured Job Listings
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="mt-4 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
        >
          Discover top remote opportunities from leading companies worldwide
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {FEATURED_JOBS.map((job, index) => (
          <JobCard 
            key={job.id}
            job={job}
            index={index}
            variants={cardVariants}
          />
        ))}
      </motion.div>
      
      <motion.div
        className="mt-12 text-center"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link href="/jobs">
          <motion.button
            className="bg-neutral-800 hover:bg-neutral-900 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Jobs
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
      
      <motion.div 
        className="mt-24 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3
          variants={headerVariants}
          className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-800 text-center mb-10"
        >
          Browse Job Categories
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {JOB_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href={`/jobs?category=${category.slug}`}>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300 h-full text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-neutral-100 rounded-full p-3">
                      <Briefcase className="w-5 h-5 text-neutral-700" />
                    </div>
                  </div>
                  <h4 className="font-medium text-neutral-800">{category.title}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface JobCardProps {
  job: {
    id: string;
    company: string;
    companyLogo?: string;
    title: string;
    location: string;
    type: string;
    postedDate: string;
    skills: string[];
    category: string;
    featured: boolean;
  };
  index: number;
  variants: any;
}

const JobCard: React.FC<JobCardProps> = ({ job, index, variants }) => {
  return (
    <Link href={`/jobs/${job.id}`}>
      <motion.div
        variants={variants}
        custom={index}
        className="bg-white p-6 md:p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300 h-full"
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.07)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden">
            {job.companyLogo ? (
              <img 
                src={job.companyLogo} 
                alt={job.company} 
                className="w-full h-full object-cover"
              />
            ) : (
              <Briefcase className="w-6 h-6 text-neutral-500" />
            )}
          </div>
          <div className="ml-3">
            <p className="text-lg font-medium text-neutral-600">{job.company}</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-800 mb-3">{job.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center text-sm text-neutral-600">
            <MapPin className="w-4 h-4 mr-1.5" />
            {job.location}
          </div>
          <span className="text-neutral-400">|</span>
          <div className="flex items-center text-sm text-neutral-600">
            <Briefcase className="w-4 h-4 mr-1.5" />
            {job.type}
          </div>
          <span className="text-neutral-400">|</span>
          <div className="flex items-center text-sm text-neutral-600">
            <Calendar className="w-4 h-4 mr-1.5" />
            {job.postedDate}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {job.skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100">
          <span className="text-sm text-neutral-500">{job.category}</span>
          
          <motion.div
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="text-sm font-medium text-neutral-700 hover:text-neutral-900 flex items-center gap-1.5">
              View details
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
          </motion.div>
        </div>
        
        {job.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              🔥
            </span>
          </div>
        )}
      </motion.div>
    </Link>
  );
};

export default JobCategories;