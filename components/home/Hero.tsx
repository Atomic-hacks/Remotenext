"use client";
import React, { useEffect, useRef, useState } from "react";
import MagicButton from "../ui/MagicButton";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  videoSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ videoSrc = "/remote1.mp4" }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Handle video autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax translation
  const parallaxOffset = scrollPosition * 0.4; // Adjust this multiplier to control parallax intensity

  return (
    <section ref={sectionRef} className="relative w-full h-[70vh] md:h-[120vh] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Video container with parallax effect */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(1.1)`, // Scale up slightly to avoid edges showing
            transition: "transform 0.05s ease-out", // Smooths the parallax effect
            height: "120%", // Make video container taller than viewport to allow movement
          }}
        >
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Overlay with subtle orange-yellow gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/30 to-amber-500/10 z-10"
        style={{
          transform: `translateY(${parallaxOffset * 0.2}px)`, // Slower parallax for overlay
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      {/* Content container with reverse parallax for depth */}
      <div
        className="relative z-20 h-full flex items-center justify-center"
        style={{
          transform: `translateY(${parallaxOffset * -0.1}px)`, // Reverse direction for content
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Welcome to{" "}
            <span 
              className={`transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r ${
                isHovered 
                  ? 'from-amber-400 via-amber-500 to-amber-400 scale-105' 
                  : 'from-neutral-900 via-amber-500 to-neutral-900'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              RemoteNext
            </span>
          </h1>
          <p className="text-neutral-300 text-md md:text-xl mb-8 max-w-2xl mx-auto">
            Your Gateway to Global Remote Jobs <br />
            At RemoteNext, we equip you with the skills and support you need to
            land remote roles in 
            <span className="text-amber-400 font-medium"> AI</span>, 
            <span className="text-amber-400 font-medium"> Data Entry</span>, and more — wherever you are in
            the world.
          </p>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-25 group-hover:opacity-70 transition duration-300"></div>
            <MagicButton
              title="Get started"
              icon={<ArrowRight className="group-hover:text-amber-400 transition-colors duration-300" />}
              position="right"
              buttonClasses="!w-[175px] bg-gradient-to-r hover:from-neutral-900 hover:to-neutral-800 group-hover:border-amber-400/50 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      
      {/* Subtle animated accent elements */}
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400/20 to-amber-300/10 blur-md animate-pulse hidden md:block"></div>
      <div className="absolute top-12 right-12 w-8 h-8 rounded-full bg-gradient-to-bl from-amber-400/20 to-amber-300/10 blur-md animate-ping animate-duration-[3000ms] hidden md:block"></div>
      
      {/* Adding a subtle glow effect when logo is hovered */}
      {isHovered && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse z-5"></div>
      )}
    </section>
  );
};

export default Hero;