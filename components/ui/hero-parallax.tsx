/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

// Define the Feature type
export type Feature = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
};

interface RemoteHiringFeaturesProps {
  features?: Feature[];
  horizontalTitle?: string;
  verticalTitle?: string;
  mainTitle?: string;
  subtitle?: string;
}

const RemoteHiringFeatures: React.FC<RemoteHiringFeaturesProps> = ({
  features = [],
  horizontalTitle = "Transform Your Hiring Process",
  verticalTitle = "Key Benefits",
  mainTitle = "Powerful Features to Transform Your Hiring Process",
  subtitle = "Experience the future of remote recruitment with our streamlined human-centered approach."
}) => {
  // Section reference for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // If no features provided, use default sample data
  const featureData = features.length > 0 ? features : sampleFeatures;
  
  const horizontalFeatures = featureData.slice(0, 4);
  const verticalFeatures = featureData.slice(0, 3);

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0]  // Smooth easing
      }
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

  return (
    <div 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-neutral-300 via-neutral-300 to-neutral-400 py-16 md:py-24 px-4 md:px-6 rounded-xl md:rounded-2xl overflow-hidden"
    >
      {/* Enhanced background elements with amber accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/6 w-48 h-48 bg-amber-300 rounded-full opacity-5 blur-2xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section with enhanced styling */}
        <motion.div 
          className="mb-16 md:mb-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1 
            variants={titleVariants}
            className="text-3xl md:text-5xl font-bold text-neutral-800 mb-5 leading-tight"
          >
            {mainTitle.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word === "Transform" ? (
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">{word}</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-200/30 -z-0"></span>
                  </span>
                ) : (
                  <span>{word} </span>
                )}
              </React.Fragment>
            ))}
          </motion.h1>
          <motion.p 
            variants={titleVariants}
            className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
          
          {/* Decorative element */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-8 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Horizontal Cards Section */}
        <section className="mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-neutral-800 mb-8 md:mb-12 px-1 flex items-center"
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center mr-3 text-white text-xs">
              1
            </span>
            {horizontalTitle}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            variants={containerVariants}
          >
            {horizontalFeatures.map((feature, index) => (
              <FeatureCardHorizontal
                key={feature.id}
                feature={feature}
                index={index}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </section>

        {/* Vertical Cards Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-neutral-800 mb-8 md:mb-12 px-1 flex items-center"
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center mr-3 text-white text-xs">
              2
            </span>
            {verticalTitle}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {verticalFeatures.map((feature, index) => (
              <FeatureCardVertical
                key={feature.id}
                feature={feature}
                index={index}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

// Sample feature data with real images
const sampleFeatures: Feature[] = [
  {
    id: "1",
    title: "Smart Resume Screening",
    description: "Our expert team handles the heavy lifting by carefully screening resumes that match your specific criteria, ensuring you only spend time on the best candidates.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Candidate Matching", "Quality Screening", "Time-Saving"]
  },
  {
    id: "2",
    title: "Effortless Interview Scheduling",
    description: "Eliminate the back-and-forth with our streamlined interview scheduling. Our team seamlessly coordinates between candidates and recruiters, freeing up valuable time.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Calendar Management", "Global Coordination", "Seamless"]
  },
  {
    id: "3",
    title: "Remote Onboarding Solutions",
    description: "Bring new team members up to speed effectively with our comprehensive remote onboarding packages tailored to your company culture and needs.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Culture Integration", "Process Management", "Training"]
  },
  {
    id: "4",
    title: "Global Talent Acquisition",
    description: "Access worldwide talent pools with our specialized recruitment strategies designed for remote and distributed teams across different time zones.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["International", "Diverse Hiring", "Talent Networks"]
  },
];

// Horizontal Feature Card Component with amber accents
const FeatureCardHorizontal: React.FC<{
  feature: Feature;
  index?: number;
  variants: any;
}> = ({ feature, variants }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      variants={variants}
      className="feature-card-horizontal bg-white rounded-xl shadow-md h-full overflow-hidden group"
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.08)",
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-44 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${feature.image})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Amber accent on hover */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-amber-400"
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.4 }}
        ></motion.div>
        
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-amber-400/20">
            Featured
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-neutral-800 text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">{feature.title}</h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3 leading-relaxed">{feature.description}</p>
        
        {feature.tags && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {feature.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-300 ${
                  isHovered 
                    ? "bg-amber-100 text-amber-700" 
                    : "bg-neutral-100 text-neutral-600"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Vertical Feature Card with enhanced Framer Motion and amber accents
const FeatureCardVertical: React.FC<{
  feature: Feature;
  index?: number;
  variants: any;
}> = ({ feature, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={variants}
      className="feature-card-vertical bg-white rounded-xl overflow-hidden relative "
      whileHover={{ 
        y: -12, 
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-12 h-12">
        <div className="absolute top-0 right-0 w-full h-full bg-amber-400/10"></div>
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-r-[48px] border-t-transparent border-r-amber-400/20"></div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-semibold text-neutral-800 text-xl mb-2">{feature.title}</h3>
            <motion.div 
              className="h-1 w-12 rounded-full mb-4"
              animate={{ 
                width: isHovered ? '80px' : '48px',
                backgroundColor: isHovered ? '#f59e0b' : '#262626', 
                opacity: isHovered ? 1 : 0.2 
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <p className="text-neutral-500 text-sm font-medium tracking-wide uppercase">
              Remote Solution
            </p>
          </div>
          <motion.div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            animate={{ 
              backgroundColor: isHovered ? '#f59e0b' : '#f5f5f5', 
              color: isHovered ? '#ffffff' : '#737373' 
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiArrowUpRight size={18} />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="text-neutral-600 text-sm mb-6 leading-relaxed">
          <p>{feature.description}</p>
        </div>
        
        {feature.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {feature.tags.map((tag) => (
              <span 
                key={tag} 
                className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-300 ${
                  isHovered 
                    ? "bg-amber-100 text-amber-700" 
                    : "bg-neutral-200 text-neutral-600"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-4">
          <motion.button
            className="group flex items-center text-center gap-2 px-4 py-2 rounded-lg transition-colors border"
            animate={{ 
              backgroundColor: isHovered ? '#f59e0b' : '#f5f5f5',
              borderColor: isHovered ? '#f59e0b' : 'transparent',
              color: isHovered ? '#ffffff' : '#404040'
            }}
            transition={{ duration: 0.3 }}
          >
            <span>Explore Feature</span>
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaAngleRight />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default RemoteHiringFeatures;