/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, BarChart3, Database, Key, Server } from 'lucide-react';

export default function WhyChooseRemoteNext() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "AI-Powered Efficiency",
      description: "Automate hiring tasks like resume screening and candidate assessments."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Groups",
      description: "Seamless recruitment with automated scheduling and personalized communication."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Audit Logs",
      description: "Make smarter hires using real-time analytics and insights."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SCIM / Active Directory Sync",
      description: "Tailor RemoteNext to your unique recruitment process."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Enforceable SSO",
      description: "RemoteNext scales with your growing needs, whether you're a startup or enterprise."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "Keep your data safe with enterprise-grade security and compliance."
    }
  ];

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
          Why Choose RemoteNext?
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="mt-4 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
        >
          Experience the future of recruitment with AI-powered automation.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            feature={feature}
            index={index}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </div>
  );
}

interface FeatureCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
  variants: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, variants }) => {
  return (
    <motion.div
      variants={variants}
      custom={index}
      className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300"
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.07)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex items-start mb-5">
        <motion.div 
          className="flex-shrink-0 bg-neutral-800 rounded-lg p-3 text-white"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#111111",
            transition: { duration: 0.2 }
          }}
        >
          {feature.icon}
        </motion.div>
        <h3 className="ml-4 text-lg font-semibold text-neutral-800 pt-1">{feature.title}</h3>
      </div>
      
      <p className="text-neutral-600 leading-relaxed pl-1">{feature.description}</p>
      
      <motion.div 
        className="mt-6 pl-1"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <button className="text-sm font-medium text-neutral-700 hover:text-neutral-900 flex items-center gap-1.5 group">
          Learn more 
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            →
          </motion.span>
        </button>
      </motion.div>
    </motion.div>
  );
};