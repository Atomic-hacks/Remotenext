'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Sliders, Briefcase, MapPin, Calendar, BarChart, DollarSign, ArrowRight } from 'lucide-react';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import ALL_JOBS from '@/constatnts/jobs-constants';
import { Job } from '@/constatnts/jobs-constants';
import { Button } from "@/components/ui/button";

// Define accent color theme for consistent use - matching the About page
const ACCENT_COLOR = {
  primary: 'rgb(255, 165, 0)', // Vivid orange
  light: 'rgb(255, 205, 100)', // Light orange-yellow
  dark: 'rgb(230, 140, 0)',    // Darker orange
  gradient: 'linear-gradient(135deg, rgb(255, 180, 50), rgb(255, 140, 0))',
  // Classes for Tailwind integration
  lightBg: "bg-amber-50",
  mediumBg: "bg-amber-100",
  text: "text-amber-600",
  hover: "hover:text-amber-600",
  border: "border-amber-200",
  hoverBg: "hover:bg-amber-50",
  button: "bg-amber-500",
  buttonHover: "hover:bg-amber-600",
};

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const MotionButton = motion(Button);


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

interface ChildrenProps {
  children: React.ReactNode;
}

// Parallax Section Component
const ParallaxSection = ({ children }: ChildrenProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ translateY }}>
        {children}
      </motion.div>
    </div>
  );
};

interface JobProps {
  job: Job; // Assuming Job type is already defined
  index: number;
}

// Job Card Component
const JobCard = ({ job, index }: JobProps) => {
  return (
    <Link href={`/jobs/${job.id}`}>
      <motion.div
        variants={itemVariants}
        custom={index}
        className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md hover:border-amber-200 transition-all duration-300 h-full group relative overflow-hidden"
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.07)",
          transition: { duration: 0.3 }
        }}
      >
        {/* Subtle accent background on hover */}
        <div className="absolute inset-0 bg-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          {/* Company Section */}
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden transition-colors duration-300">
              {job.companyLogo ? (
                <img 
                  src={job.companyLogo} 
                  alt={job.company} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Briefcase className="w-6 h-6 text-amber-600" />
              )}
            </div>
            <div className="ml-3">
              <p className="text-lg font-medium text-neutral-600">{job.company}</p>
            </div>
          </div>
          
          {/* Job Title */}
          <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-amber-600 mb-3 transition-colors duration-300">{job.title}</h3>
          
          {/* Job Details */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center text-sm text-neutral-600">
              <MapPin className="w-4 h-4 mr-1.5 group-hover:text-amber-600 transition-colors duration-300" />
              {job.location}
            </div>
            <span className="text-neutral-400">|</span>
            <div className="flex items-center text-sm text-neutral-600">
              <Briefcase className="w-4 h-4 mr-1.5 group-hover:text-amber-600 transition-colors duration-300" />
              {job.type}
            </div>
            <span className="text-neutral-400">|</span>
            <div className="flex items-center text-sm text-neutral-600">
              <Calendar className="w-4 h-4 mr-1.5 group-hover:text-amber-600 transition-colors duration-300" />
              {job.postedDate}
            </div>
          </div>

          {/* Additional Job Details */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center text-sm text-neutral-600 bg-neutral-50 px-2 py-1 rounded">
              <DollarSign className="w-3.5 h-3.5 mr-1 group-hover:text-amber-600 transition-colors duration-300" />
              {job.salary}
            </div>
            <div className="flex items-center text-sm text-neutral-600 bg-neutral-50 px-2 py-1 rounded">
              <BarChart className="w-3.5 h-3.5 mr-1 group-hover:text-amber-600 transition-colors duration-300" />
              {job.experience}
            </div>
          </div>
          
          {/* Job Description */}
          <p className="text-sm text-neutral-600 mb-5 line-clamp-2">{job.description}</p>
          
          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {job.skills.map((skill: string, idx: number) => (
              <span 
                key={idx} 
                className="bg-amber-50 text-amber-600 text-xs font-medium px-3 py-1 rounded-full group-hover:bg-amber-100 transition-colors duration-300"
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
              <div className="text-sm font-medium text-neutral-700 hover:text-amber-600 flex items-center gap-1.5 transition-colors duration-300">
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
            <span className="bg-amber-100 text-amber-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
              🔥 Featured
            </span>
          </div>
        )}
      </motion.div>
    </Link>
  );
};

// Categories data (sample)
const JOB_CATEGORIES = [
  { id: 'software-dev', name: 'Software Development', icon: <Briefcase className="w-3.5 h-3.5" /> },
  { id: 'data-science', name: 'Data Science', icon: <BarChart className="w-3.5 h-3.5" /> },
  { id: 'design', name: 'Design', icon: <BarChart className="w-3.5 h-3.5" /> },
  { id: 'marketing', name: 'Marketing', icon: <BarChart className="w-3.5 h-3.5" /> },
  { id: 'product', name: 'Product', icon: <BarChart className="w-3.5 h-3.5" /> },
];

const JobListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter jobs based on search query and category
  const filteredJobs = ALL_JOBS.filter(job => {
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || job.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Animation */}
      <motion.section 
        className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-neutral-50"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut"
          }
        }}
      >
        {/* Subtle background elements with orange-yellow accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl"></div>
          <div 
            className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: ACCENT_COLOR.light, mixBlendMode: 'soft-light' }}
          ></div>
          <div 
            className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-10 blur-3xl"
            style={{ background: ACCENT_COLOR.primary }}
          ></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              variants={titleVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800"
            >
              Find Your Perfect <span style={{ color: ACCENT_COLOR.primary }}>Remote Job</span>
            </motion.h1>
            <motion.p 
              variants={titleVariants}
              className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8"
            >
              Browse through our curated list of top remote opportunities from leading companies worldwide
            </motion.p>

            {/* Search and Filter Section with improved styling */}
            <motion.div 
              variants={itemVariants}
              className="relative max-w-2xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search jobs, skills, or companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
                  />
                </div>

                {/* Filter Button */}
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center justify-center gap-2 transition-all duration-300 text-white shadow-sm"
                  style={{ 
                    background: ACCENT_COLOR.gradient,
                    border: 'none'
                  }}
                >
                  <Sliders className="w-5 h-5" />
                  <span>Filters</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    <FiArrowUpRight />
                  </motion.span>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filters Section */}
      <section className="py-6 border-t border-b border-neutral-200 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 justify-center"
          >
            <motion.button
              variants={itemVariants}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === null 
                  ? 'bg-amber-100 text-amber-600 shadow-sm' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              All Jobs
            </motion.button>
            
            {JOB_CATEGORIES.map(category => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  selectedCategory === category.id 
                    ? 'bg-amber-100 text-amber-600 shadow-sm' 
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.icon}
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Filters Panel - conditionally rendered */}
      {showFilters && (
        <motion.section 
          className="py-6 bg-neutral-100 border-b border-neutral-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Experience Level Filter */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 mb-3">Experience Level</h3>
                <div className="space-y-2">
                  {['Entry Level', 'Mid Level', 'Senior', 'Lead'].map(level => (
                    <label key={level} className="flex items-center gap-2 text-neutral-600 cursor-pointer">
                      <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
                      {level}
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Job Type Filter */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 mb-3">Job Type</h3>
                <div className="space-y-2">
                  {['Full-time', 'Part-time', 'Contract', 'Freelance'].map(type => (
                    <label key={type} className="flex items-center gap-2 text-neutral-600 cursor-pointer">
                      <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Salary Range Filter */}
              <div>
                <h3 className="text-sm font-medium text-neutral-700 mb-3">Salary Range</h3>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="200000" 
                    step="10000" 
                    className="w-full accent-amber-600" 
                  />
                  <div className="flex justify-between text-xs text-neutral-500 mt-1">
                    <span>$0</span>
                    <span>$100K</span>
                    <span>$200K+</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Filter Actions */}
            <div className="flex justify-end mt-6 gap-3">
              <button className="text-neutral-600 hover:text-neutral-800 text-sm font-medium">
                Clear All
              </button>
              <Button
                className="shadow-sm"  
                style={{ 
                  background: ACCENT_COLOR.gradient,
                  border: 'none'
                }}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </motion.section>
      )}

      {/* Job Results Section with Parallax Effect */}
      <ParallaxSection>
        <section className="py-12 bg-gradient-to-b from-amber-50/50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6 flex justify-between items-center">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold text-neutral-700"
              >
                <span className="text-amber-600">{filteredJobs.length}</span> Jobs Found
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-sm text-neutral-500 bg-white px-3 py-1.5 rounded-full shadow-sm border border-neutral-100"
              >
                <MapPin className="w-4 h-4" />
                <span>Remote Only</span>
              </motion.div>
            </div>

            {/* Job Cards Grid with Staggered Animation */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05 }}
            >
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    index={index}
                  />
                ))
              ) : (
                <motion.div 
                  variants={itemVariants} 
                  className="col-span-1 md:col-span-2 lg:col-span-3 py-12 text-center"
                >
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
                    <p className="text-neutral-500 text-lg mb-4">
                      No jobs matching your search criteria. Try adjusting your filters.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory(null);
                      }}
                      className="shadow-sm"  
                      style={{ 
                        background: ACCENT_COLOR.gradient,
                        border: 'none'
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Load More Button */}
            {filteredJobs.length > 0 && (
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <MotionButton 
  variant="outline" 
  className="border-2 hover:bg-transparent shadow-sm transition-all duration-300"
  style={{ 
    borderColor: ACCENT_COLOR.primary,
    color: ACCENT_COLOR.primary
  }}
  whileHover={{ 
    scale: 1.03,
    transition: { duration: 0.2 }
  }}
  whileTap={{ scale: 0.98 }}
>
  <span className="flex items-center gap-2">
    Load More Jobs
    <motion.span
      animate={{ x: [0, 4, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: 1.5,
        ease: "easeInOut"
      }}
    >
      <FiArrowUpRight />
    </motion.span>
  </span>
</MotionButton>
              </motion.div>
            )}
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-16 mt-12 relative rounded-none md:rounded-2xl overflow-hidden mx-4" style={{ 
        background: 'linear-gradient(to bottom, rgba(60, 60, 60, 0.9), rgba(40, 40, 40, 0.95))',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)'
      }}>
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/texture1.jpg)' }}></div>
        </div>
        
        {/* Orange accent design elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: ACCENT_COLOR.primary }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full opacity-15 blur-xl"
            style={{ background: ACCENT_COLOR.light }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={titleVariants}
              className="text-3xl font-bold text-neutral-200 mb-6"
            >
              Can't Find What You're Looking For?
            </motion.h2>
            <motion.p 
              variants={titleVariants}
              className="text-lg text-neutral-400 mb-8"
            >
              Create a job alert and we'll notify you when new opportunities matching your criteria become available.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <Button 
                size="lg" 
                className="group hover:scale-105 transition-all duration-300"
                style={{ 
                  background: ACCENT_COLOR.gradient,
                  border: 'none'
                }}
              >
                <span className="flex items-center gap-2">
                  Create Job Alert
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    <FiArrowUpRight />
                  </motion.span>
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group transition-all duration-300 border-2 hover:bg-transparent"
                style={{ 
                  borderColor: ACCENT_COLOR.primary,
                  color: ACCENT_COLOR.light
                }}
              >
                <span className="flex items-center gap-2">
                  Upload Your Resume
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    <FiArrowUpRight />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JobListingPage;
