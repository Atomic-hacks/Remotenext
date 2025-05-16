import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, MapPin, Calendar, ArrowRight, DollarSign, BarChart, Star } from 'lucide-react';

// Define a sample job for preview
const sampleJob = {
  id: "1",
  company: "TechGlobal",
  companyLogo: "/api/placeholder/100/100",
  title: "Senior UX Designer",
  location: "Remote, Worldwide",
  type: "Full-time",
  postedDate: "2 days ago",
  salary: "$90k-120k",
  experience: "3-5 years",
  description: "We're looking for an experienced UX Designer to join our growing product team to help create exceptional user experiences for our enterprise SaaS platform.",
  skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
  category: "Design",
  featured: true
};

// Color accent theme options
const ACCENT_COLORS = {
  amber: {
    light: "bg-amber-50",
    medium: "bg-amber-100",
    dark: "bg-amber-200",
    text: "text-amber-600",
    hover: "hover:text-amber-600",
    border: "border-amber-200",
    hoverBg: "hover:bg-amber-50",
    button: "bg-amber-500",
    buttonHover: "hover:bg-amber-600",
  },
  blue: {
    light: "bg-blue-50",
    medium: "bg-blue-100",
    dark: "bg-blue-200", 
    text: "text-blue-600",
    hover: "hover:text-blue-600",
    border: "border-blue-200",
    hoverBg: "hover:bg-blue-50",
    button: "bg-blue-500",
    buttonHover: "hover:bg-blue-600",
  },
  emerald: {
    light: "bg-emerald-50",
    medium: "bg-emerald-100",
    dark: "bg-emerald-200",
    text: "text-emerald-600",
    hover: "hover:text-emerald-600",
    border: "border-emerald-200",
    hoverBg: "hover:bg-emerald-50",
    button: "bg-emerald-500",
    buttonHover: "hover:bg-emerald-600",
  }
};

// JobCard Component
const JobCard = ({ 
  job = sampleJob, 
  accentColor = ACCENT_COLORS.emerald,
  variant = "standard" // "standard", "minimal", or "detailed"
}) => {
  // Simple animation variants
  const cardAnimation = {
    rest: { 
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      y: -8, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  return (
    <Link href={`/jobs/${job.id}`} className="block no-underline">
      <motion.div
        className={`bg-white rounded-xl border border-neutral-100 h-full group relative overflow-hidden`}
        initial="rest"
        whileHover="hover"
        variants={cardAnimation}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Hover background effect */}
        <div className={`absolute inset-0 ${accentColor.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Featured tag */}
        {job.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1">
              <Star className={`w-4 h-4 ${accentColor.text} fill-current`} />
              <span className={`${accentColor.medium} ${accentColor.text} text-xs font-semibold px-2.5 py-1 rounded-full`}>
                Featured
              </span>
            </div>
          </div>
        )}
        
        <div className="relative z-10 p-6">
          {/* Company Section */}
          <div className="flex items-center mb-4">
            <div className={`h-12 w-12 rounded-full ${accentColor.medium} flex items-center justify-center overflow-hidden transition-colors duration-300 shadow-sm`}>
              {job.companyLogo ? (
                <img 
                  src={job.companyLogo} 
                  alt={job.company} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Briefcase className={`w-6 h-6 ${accentColor.text}`} />
              )}
            </div>
            <div className="ml-3">
              <p className="font-medium text-neutral-700">{job.company}</p>
            </div>
          </div>
          
          {/* Job Title */}
          <h3 className={`text-xl font-bold text-neutral-800 group-hover:${accentColor.text} mb-3 transition-colors duration-300`}>
            {job.title}
          </h3>
          
          {/* Core Job Details */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center text-sm text-neutral-600">
              <MapPin className={`w-4 h-4 mr-1.5 group-hover:${accentColor.text}`} />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-neutral-600">
              <Briefcase className={`w-4 h-4 mr-1.5 group-hover:${accentColor.text}`} />
              {job.type}
            </div>
            <div className="flex items-center text-sm text-neutral-600">
              <Calendar className={`w-4 h-4 mr-1.5 group-hover:${accentColor.text}`} />
              {job.postedDate}
            </div>
          </div>

          {/* Additional Job Details - Show only in detailed variant */}
          {(variant === "detailed" || variant === "standard") && (
            <div className="flex flex-wrap gap-3 mb-4">
              <div className={`flex items-center text-sm text-neutral-600 ${accentColor.light} px-2 py-1 rounded-md`}>
                <DollarSign className={`w-3.5 h-3.5 mr-1 ${accentColor.text}`} />
                {job.salary}
              </div>
              <div className={`flex items-center text-sm text-neutral-600 ${accentColor.light} px-2 py-1 rounded-md`}>
                <BarChart className={`w-3.5 h-3.5 mr-1 ${accentColor.text}`} />
                {job.experience}
              </div>
            </div>
          )}
          
          {/* Job Description - Show only in detailed variant */}
          {variant === "detailed" && (
            <p className="text-sm text-neutral-600 mb-5 line-clamp-2">{job.description}</p>
          )}
          
          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {job.skills.slice(0, variant === "minimal" ? 2 : job.skills.length).map((skill, idx) => (
              <span 
                key={idx} 
                className={`${accentColor.light} ${accentColor.text} text-xs font-medium px-3 py-1 rounded-full group-hover:${accentColor.medium} transition-colors duration-300`}
              >
                {skill}
              </span>
            ))}
            {variant === "minimal" && job.skills.length > 2 && (
              <span className="text-xs font-medium text-neutral-500 px-2 py-1">
                +{job.skills.length - 2} more
              </span>
            )}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100 group-hover:border-opacity-0 transition-all duration-300">
            <span className={`text-sm text-neutral-500 px-2 py-0.5 rounded ${accentColor.light} group-hover:${accentColor.medium} transition-colors duration-300`}>
              {job.category}
            </span>
            
            <motion.div
              className={`text-sm font-medium ${accentColor.text} flex items-center gap-1.5`}
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              View details
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

// Preview component to show different variants
export default function JobCardPreview() {
  return (
    <div className="grid grid-cols-1 gap-8 p-6 bg-neutral-50">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-neutral-800">Emerald Theme (Standard)</h2>
        <JobCard variant="standard" accentColor={ACCENT_COLORS.emerald} />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4 text-neutral-800">Blue Theme (Detailed)</h2>
        <JobCard variant="detailed" accentColor={ACCENT_COLORS.blue} />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4 text-neutral-800">Amber Theme (Minimal)</h2>
        <JobCard variant="minimal" accentColor={ACCENT_COLORS.amber} />
      </div>
    </div>
  );
}