'use client'

import { AboutSection } from "@/components/AboutSection";
import { AuthModal } from "@/components/AuthModal";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedJobsSection } from "@/components/FeaturedJobs";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsLetter";
import { ServicesSection } from "@/components/Services";
import { TestimonialsSection } from "@/components/TestimonialSection";
import { Users } from "lucide-react";
import { useState } from "react";

export default function RemoteConnectApp() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar/>
      <HeroSection/>
      <ServicesSection />
      <FeaturedJobsSection/>
      <TestimonialsSection />
      <AboutSection />
      <NewsletterSection/>
      <ContactSection />
      <Footer />
      
      {showAuthModal && (
        <AuthModal 
          isLogin={isLogin} 
          onClose={() => setShowAuthModal(false)} 
        />
      )}
      
      {/* Floating CTA Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => {
            setIsLogin(true);
            setShowAuthModal(true);
          }}
          className="h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition"
        >
          <Users className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}