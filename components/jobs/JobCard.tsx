/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, MapPin, Calendar, ArrowRight, DollarSign, BarChart } from 'lucide-react';
import { Job } from '@/constatnts/jobs-constants';

interface JobCardProps {
  job: Job;
  index: number;
  variants: any;
  accentColor: {
    light: string;
    medium: string;
    text: string;
    hover: string;
    border: string;
    hoverBg: string;
    button: string;
    buttonHover: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job, index, variants, accentColor }) => {
  return (
    <Link href={`/jobs/${job.id}`}>
      <motion.div
        variants={variants}
        custom={index}
        className={`bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md hover:border-amber-200 transition-all duration-300 h-full group relative overflow-hidden`}
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.07)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Subtle accent background on hover */}
        <div className={`absolute inset-0 ${accentColor.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="relative z-10">
          {/* Company Section */}
          <div className="flex items-center mb-4">
            <div className={`h-12 w-12 rounded-full ${accentColor.medium} flex items-center justify-center overflow-hidden transition-colors duration-300`}>
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
              <p className="text-lg font-medium text-neutral-600">{job.company}</p>
            </div>
          </div>
          
          {/* Job Title */}
          <h3 className={`text-xl font-semibold text-neutral-800 group-hover:${accentColor.text} mb-3 transition-colors duration-300`}>{job.title}</h3>
          
          {/* Job Details */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center text-sm text-neutral-600">
              <MapPin className={`w-4 h-4 mr-1.5 group-hover:${accentColor.text} transition-colors duration-300`} />
              {job.location}
            </div>
            <span className="text-neutral-400">|</span>
            <div className="flex items-center text-sm text-neutral-600">
              <Briefcase className={`w-4 h-4 mr-1.5 group-hover:${accentColor.text} transition-colors duration-300`} />
              {job.type}
            </div>
            <span className="text-neutral-400">|</span>
            <div className="flex items-center text-sm text-neutral-600">
              <Calendar className={`w-4 h-4 mr-1.5 group-hover:${accentColor.text} transition-colors duration-300`} />
              {job.postedDate}
            </div>
          </div>

          {/* Additional Job Details */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center text-sm text-neutral-600 bg-neutral-50 px-2 py-1 rounded">
              <DollarSign className={`w-3.5 h-3.5 mr-1 group-hover:${accentColor.text} transition-colors duration-300`} />
              {job.salary}
            </div>
            <div className="flex items-center text-sm text-neutral-600 bg-neutral-50 px-2 py-1 rounded">
              <BarChart className={`w-3.5 h-3.5 mr-1 group-hover:${accentColor.text} transition-colors duration-300`} />
              {job.experience}
            </div>
          </div>
          
          {/* Job Description */}
          <p className="text-sm text-neutral-600 mb-5 line-clamp-2">{job.description}</p>
          
          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {job.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className={`${accentColor.light} ${accentColor.text} text-xs font-medium px-3 py-1 rounded-full group-hover:${accentColor.medium} transition-colors duration-300`}
              >
                {skill}
              </span>
            ))}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100 group-hover:border-amber-200 transition-colors duration-300">
            <span className="text-sm text-neutral-500">{job.category}</span>
            
            <motion.div
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              <div className={`text-sm font-medium text-neutral-700 ${accentColor.hover} flex items-center gap-1.5 transition-colors duration-300`}>
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
        </div>
        
        {/* Featured Badge */}
        {job.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className={`${accentColor.medium} ${accentColor.text} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
              🔥 Featured
            </span>
          </div>
        )}
      </motion.div>
    </Link>
  );
};

export default JobCard;