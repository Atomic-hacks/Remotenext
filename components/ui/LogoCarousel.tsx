"use client"
import { useState, useEffect } from 'react';

const LogoCarouselFade = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(40);
  // Fix: Type the state properly with number | null
  const [highlightedLogo, setHighlightedLogo] = useState<number | null>(null);
  
  // Using actual company logo URLs
  const logos = [
    { 
        src: "https://cdn.worldvectorlogo.com/logos/airbnb-2.svg", 
        alt: "Airbnb" 
    },
    { 
        src: "https://cdn.worldvectorlogo.com/logos/slack-2.svg", 
        alt: "Slack" 
    },
    { 
        src: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg", 
        alt: "Spotify" 
    },
    { 
        src: "https://cdn.worldvectorlogo.com/logos/netflix-4.svg", 
        alt: "Netflix" 
    },
    { 
        src: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg", 
        alt: "Dropbox" 
    },
    { 
        src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", 
        alt: "Stripe" 
    },
    { 
        src: "https://cdn.worldvectorlogo.com/logos/apple-1.svg", 
        alt: "Apple" 
    },
    { 
        src: "https://cdn.worldvectorlogo.com/logos/github-2.svg", 
        alt: "GitHub" 
    }
  ];
  
  // Create duplicate sets for seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Adjust animation speed based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setAnimationDuration(20); // Faster on mobile
      } else if (width < 1024) {
        setAnimationDuration(30); // Medium speed on tablets
      } else {
        setAnimationDuration(40); // Original speed on desktops
      }
    };

    // Set initial value
    handleResize();
    
    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-neutral-300 via-neutral-300 to-neutral-200 py-6 md:py-8 lg:py-12 rounded-xl my-8 md:my-12 lg:my-20 shadow-inner relative overflow-hidden">
      {/* Subtle accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
      <div className="absolute -left-12 top-0 h-32 w-32 rounded-full bg-amber-300/10 blur-xl"></div>
      <div className="absolute -right-12 bottom-0 h-32 w-32 rounded-full bg-amber-300/10 blur-xl"></div>
      
      <h3 className="text-center relative z-10">
        <span className="inline-block text-base md:text-lg font-medium text-gray-800 mb-4 md:mb-6 lg:mb-8 px-4">
          Trusted by <span className="text-amber-600 font-semibold">innovative companies</span> worldwide
        </span>
        <span className="block h-[2px] w-16 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto mt-1 rounded-full"></span>
      </h3>
      
      {/* Main container with overflow mask */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-12 md:w-16 lg:w-24 z-10 bg-gradient-to-r from-neutral-300 to-transparent"></div>
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-12 md:w-16 lg:w-24 z-10 bg-gradient-to-l from-neutral-300 to-transparent"></div>
        
        {/* Scrolling logos container */}
        <div
          className="flex items-center py-2 md:py-3 lg:py-4"
          style={{
            animation: !isHovered ? `scrollFade ${animationDuration}s linear infinite` : "none",
            willChange: "transform" // Performance optimization
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 lg:mx-8 transition-all duration-300 ease-in-out hover:scale-110"
              onMouseEnter={() => setHighlightedLogo(index)}
              onMouseLeave={() => setHighlightedLogo(null)}
            >
              <div className={`h-8 sm:h-10 md:h-12 lg:h-16 w-20 sm:w-24 md:w-32 lg:w-40 flex items-center justify-center relative ${highlightedLogo === index ? 'z-20' : 'z-0'}`}>
                {highlightedLogo === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-400/10 to-amber-300/0 rounded-lg animate-pulse"></div>
                )}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-6 sm:max-h-8 md:max-h-10 lg:max-h-12 max-w-16 sm:max-w-20 md:max-w-24 lg:max-w-32 object-contain transition-all duration-300 ${highlightedLogo === index ? 'drop-shadow-md' : ''}`}
                  // Logos now display in color by default with no grayscale filter
                  style={{
                    filter: "contrast(1) brightness(1)",
                    transition: "all 0.3s ease"
                  }}
                />
                {highlightedLogo === index && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-[2px] w-8 bg-amber-400 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Interactive prompt - only shown when carousel is paused */}
      {isHovered && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm text-xs text-gray-700 py-1 px-3 rounded-full border border-amber-300/50 shadow-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-1 animate-pulse"></span> Carousel paused - click to continue
        </div>
      )}
      
      {/* Animation styles with dynamic calculation */}
      <style jsx>{`
        @keyframes scrollFade {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </div>
  );
};

export default LogoCarouselFade;