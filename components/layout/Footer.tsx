"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link 
        href={href} 
        className="text-neutral-300 hover:text-white transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
};

interface FooterHeadingProps {
  children: React.ReactNode;
}

const FooterHeading: React.FC<FooterHeadingProps> = ({ children }) => {
  return (
    <h3 className="text-xl font-semibold text-white mb-6">
      {children}
    </h3>
  );
};

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  
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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-neutral-900 z-10">
      {/* Texture background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <img src="/texture1.jpg" alt="" className="object-cover w-full h-full" />
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
        >
          {/* Company Information */}
          <motion.div variants={itemVariants}>
            <FooterHeading>RemoteAIJobs</FooterHeading>
            <p className="text-neutral-400 mb-6">
              Finding your perfect AI and remote job opportunity, fast and easy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/jobs">Browse Jobs</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/testimonials">Testimonials</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <FooterHeading>Resources</FooterHeading>
            <ul className="space-y-3">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/resources">Remote Work Guide</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/ai-career-tips">AI Career Tips</FooterLink>
              <FooterLink href="/resume-builder">Resume Builder</FooterLink>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <FooterHeading>Get In Touch</FooterHeading>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 mr-3 mt-1">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-neutral-400">support@remoteaijobs.com</span>
              </li>
              <li>
                <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors duration-200">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 py-8 px-6 md:px-10 rounded-xl bg-neutral-800 bg-opacity-50 backdrop-blur-sm border border-neutral-700"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:max-w-md">
              <h3 className="text-xl font-semibold text-white mb-2">Stay updated with job alerts</h3>
              <p className="text-neutral-400">Get the latest AI and remote job opportunities delivered directly to your inbox.</p>
            </div>
            <div className="flex-grow max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all"
                />
                <button className="whitespace-nowrap px-6 py-3 rounded-lg bg-white text-neutral-900 font-semibold hover:bg-neutral-200 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} RemoteAIJobs. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/terms" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 