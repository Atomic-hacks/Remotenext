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
    <section ref={sectionRef} className="relative w-full h-[70vh] md:h-[120vh] overflow-hidden rounded-2xl ">
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

      {/* Overlay with its own subtle parallax effect */}
      <div 
        className="absolute inset-0 bg-black/30 z-10"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-black via-neutral-700 to-black">
              RemoteNext
            </span>
          </h1>
          <p className="text-neutral-300 text-md md:text-xl mb-8 max-w-2xl mx-auto">
            Your Gateway to Global Remote Jobs <br />
            At RemoteNext, we equip you with the skills and support you need to
            land remote roles in AI, Data Entry, and more — wherever you are in
            the world.
          </p>
          <MagicButton
            title="Get started"
            icon={<ArrowRight />}
            position="right"
            buttonClasses="!w-[175px]"
          ></MagicButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;