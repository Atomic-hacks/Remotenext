'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

// Ensure Framer Motion is configured to work with Next.js
// This prevents SSR-related warnings and ensures smooth animations

// Define orange-yellow theme color for consistent use
const accentColor = {
  primary: 'rgb(255, 165, 0)', // Vivid orange
  light: 'rgb(255, 205, 100)', // Light orange-yellow
  dark: 'rgb(230, 140, 0)',    // Darker orange
  gradient: 'linear-gradient(135deg, rgb(255, 180, 50), rgb(255, 140, 0))'
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Alex has over 15 years of experience in tech recruitment and AI. Previously worked at leading tech companies before founding remotenext to connect talented professionals with remote opportunities.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "member-2",
    name: "Jamie Wilson",
    role: "Head of Talent Acquisition",
    bio: "With a background in HR and talent sourcing, Jamie leads our efforts to find the best AI jobs and connect companies with top talent in the space.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "member-3",
    name: "Taylor Reed",
    role: "Tech Lead",
    bio: "Taylor brings extensive experience in AI and machine learning, helping to vet opportunities and ensure our platform connects the right talent with the right positions.",
    image:  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
];

interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    id: "milestone-1",
    year: "2022",
    title: "Our Beginning",
    description:
      "remotenext was founded with a mission to connect AI professionals with quality remote opportunities.",
  },
  {
    id: "milestone-2",
    year: "2023",
    title: "1,000+ Placements",
    description:
      "We celebrated helping over 1,000 professionals find remote AI jobs across various industries.",
  },
  {
    id: "milestone-3",
    year: "2024",
    title: "Global Expansion",
    description:
      "We expanded our reach to serve job seekers and companies from over 50 countries worldwide.",
  },
  {
    id: "milestone-4",
    year: "2025",
    title: "Premium Services",
    description:
      "Launched our suite of premium services to help professionals advance their remote AI careers.",
  },
];

// Reusable Animation Variants
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
      ease: [0.25, 0.1, 0.25, 1.0]
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

// Parallax Component
const ParallaxSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

const AboutPage: React.FC = () => {
  return (
    <main className="bg-gradient-to-b min-h-screen">
      {/* Hero Section with Continuous Animation */}
      <motion.section 
        className="relative py-20 overflow-hidden"
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
            style={{ background: accentColor.light, mixBlendMode: 'soft-light' }}
          ></div>
          <div 
            className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-10 blur-3xl"
            style={{ background: accentColor.primary }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h1 
              variants={titleVariants}
              className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6"
            >
              About <span style={{ color: accentColor.primary }}>RemoteNext</span>
            </motion.h1>
            <motion.p 
              variants={titleVariants}
              className="text-xl text-neutral-600 mb-8"
            >
              We&apos;re on a mission to connect AI talent with the best remote opportunities worldwide.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section with Parallax */}
      <ParallaxSection>
        <section className="py-16 rounded-2xl bg-gradient-to-b from-neutral-300 to-neutral-400">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                  Our <span style={{ color: accentColor.primary }}>Mission</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-4">
                  At remotenext, we believe that talent shouldn&apos;t be limited by geography. Our platform connects AI professionals with remote opportunities that allow them to work from anywhere while advancing their careers.
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  We&apos;re dedicated to bridging the gap between companies seeking specialized AI talent and professionals looking for flexible, remote work arrangements.
                </p>
                <Button 
                  size="lg" 
                  asChild 
                  className="group transition-all duration-300"
                  style={{ 
                    background: accentColor.gradient,
                    border: 'none'
                  }}
                >
                  <Link href="/jobs" className="flex items-center gap-2">
                    Browse Jobs
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
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative group">
                  <div 
                    className="absolute -inset-1 opacity-0 group-hover:opacity-100 rounded-xl blur-sm transition-all duration-500"
                    style={{ background: accentColor.gradient, zIndex: -1 }}
                  ></div>
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Team collaboration"
                    className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300 relative z-10"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Milestones Section */}
      <section className="py-16 rounded-2xl bg-gradient-to-b from-neutral-300 to-neutral-400">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={titleVariants}
              className="text-3xl font-bold text-neutral-800 mb-4"
            >
              Our <span style={{ color: accentColor.primary }}>Journey</span>
            </motion.h2>
            <motion.p 
              variants={titleVariants}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              Since our founding, we&apos;ve been on a mission to transform how AI professionals find remote work
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            {MILESTONES.map((milestone) => (
              <motion.div 
                key={milestone.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.08)",
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full group overflow-hidden relative border">
                  <div 
                    className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:opacity-10"
                    style={{ background: accentColor.gradient }}
                  ></div>
                  <CardContent className="pt-6 relative z-10">
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: accentColor.primary }}
                    >
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 text-neutral-700">
                      {milestone.title}
                    </h3>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="my-24 py-16 bg-gradient-to-b rounded-2xl from-neutral-300 to-neutral-400">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={titleVariants}
              className="text-3xl font-bold text-neutral-800 mb-4"
            >
              Meet Our <span style={{ color: accentColor.primary }}>Team</span>
            </motion.h2>
            <motion.p 
              variants={titleVariants}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              The passionate individuals behind remotenext dedicated to your success
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div 
                key={member.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full flex flex-col group overflow-hidden">
                  <div className="w-full h-64 overflow-hidden rounded-t-xl relative">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: accentColor.gradient }}
                    ></div>
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-1 text-neutral-800 group-hover:text-neutral-800 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p 
                      className="font-medium mb-3 transition-colors duration-300"
                      style={{ color: accentColor.primary }}
                    >
                      {member.role}
                    </p>
                    <p className="text-neutral-500">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative rounded-2xl z-20 overflow-hidden" style={{ 
        background: 'linear-gradient(to bottom, rgba(60, 60, 60, 0.9), rgba(40, 40, 40, 0.95))',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)'
      }}>
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-20 opacity-30">
          <img src="/texture1.jpg" alt="texture" className="object-cover" />
        </div>
        
        {/* Orange accent design elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div 
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: accentColor.primary }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full opacity-15 blur-xl"
            style={{ background: accentColor.light }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6">
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
              Ready to Find Your Next <span style={{ color: accentColor.light }}>Remote AI Job</span>?
            </motion.h2>
            <motion.p 
              variants={titleVariants}
              className="text-lg text-neutral-400 mb-8"
            >
              Join thousands of professionals who&apos;ve found their dream remote positions through our platform.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <Button 
                size="lg" 
                asChild 
                className="group hover:scale-105 transition-all duration-300"
                style={{ 
                  background: accentColor.gradient,
                  border: 'none'
                }}
              >
                <Link href="/signup" className="flex items-center gap-2">
                  Sign Up Now
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
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="group transition-all duration-300 border-2 hover:bg-transparent"
                style={{ 
                  borderColor: accentColor.primary,
                  color: accentColor.light
                }}
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us
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
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;