'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import { ArrowRight } from "lucide-react";
import MagicButton from "../ui/MagicButton";


const Navbar = () => {
  const [width, setWidth] = useState("100%");
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const newWidth = 100 - (scrollPosition / 20);
      
      // Minimum width increased to 90% to prevent text collisions
      setWidth(`${Math.max(newWidth, 90)}%`);
      setIsScrolled(scrollPosition > 20); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Jobs", link: "/jobs" },
    { name: "Contact", link: "/contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { 
      x: "100%", 
      opacity: 0,
      borderTopLeftRadius: "100%",
      borderBottomLeftRadius: "100%",
    },
    visible: {
      x: 0,
      opacity: 1,
      borderTopLeftRadius: "0%",
      borderBottomLeftRadius: "0%",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        borderRadius: { delay: 0.1, duration: 0.4 }
      },
    },
  };

  const linkVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5
      }
    }),
    hover: {
      x: 15,
      backgroundColor: "rgba(245, 158, 11, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto fixed left-1/2 transform -translate-x-1/2 top-0 w-full py-5 px-4 sm:px-6 lg:px-8 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div
        style={{ width }}
        className={`flex bg-white justify-between mx-auto h-fit rounded-xl px-4 py-2 items-center transition-all duration-300 shadow-2xl ${
          isScrolled
            ? " backdrop-blur-3xl opacity-90 "
            : " backdrop-blur-lg"
        }`}
      >
        {/* Logo */}
        <motion.div className="flex items-center gap-2 flex-shrink-0" whileHover={{ scale: 1.05 }}>
          <img src='/logo.jpg' alt="RemoteNext" className="h-8 sm:h-10" />
          <p className="sm:text-[28px] text-xl text-transparent bg-clip-text bg-gradient-to-tr from-black via-amber-500 to-black">RemoteNext</p>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <nav className="flex items-center space-x-1">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                className={`text-black flex items-center justify-center text-center rounded-full hover:border hover:border-amber-400 px-2 py-1 font-normal transition-all duration-600 whitespace-nowrap ${
                  activeLink === link.name ? "border border-amber-400 bg-amber-50 text-amber-700" : ""
                }`}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="/get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <MagicButton title="Get In Touch" icon={<ArrowRight />} position="right" buttonClasses="!w-full !bg-amber-500 hover:!bg-amber-600" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setNavOpen(!navOpen)}
          className="lg:hidden relative p-2 text-amber-500 hover:bg-amber-100 rounded-full transition-colors flex-shrink-0 overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {navOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaXmark size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BiMenu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div 
            className="absolute inset-0 bg-amber-200 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 2, opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden fixed inset-y-0 right-0 w-full sm:w-[350px] bg-gradient-to-br from-neutral-900 to-neutral-800 opacity-95 backdrop-blur-2xl shadow-xl overflow-hidden"
          >
            {/* Background animation elements */}
            <motion.div 
              className="absolute top-32 right-12 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute bottom-32 left-12 w-48 h-48 rounded-full bg-amber-500/15 blur-3xl"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2 
              }}
            />
            
            <div className="flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center p-4">
                <motion.div 
                  className="flex items-center gap-2" 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <img src='/logo.jpg' alt="RemoteNext" className="h-10 rounded-full border-2 border-amber-400" />
                  <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">RemoteNext</p>
                </motion.div>
                <motion.button
                  onClick={() => setNavOpen(false)}
                  className="p-2 text-amber-400 hover:bg-amber-500/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaXmark size={24} />
                </motion.button>
              </div>

              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-4"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
              
              <nav className="flex flex-col mt-8 px-4">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={linkVariants}
                    onHoverStart={() => setHoverIndex(index)}
                    onHoverEnd={() => setHoverIndex(null)}
                    className={`relative text-white/90 px-6 py-4 text-lg font-medium transition-all duration-300 border-l-4 mb-2 rounded-r-lg flex items-center ${
                      activeLink === link.name 
                        ? "border-l-amber-500 text-amber-400 bg-amber-500/10" 
                        : "border-l-transparent"
                    }`}
                    onClick={() => {
                      setActiveLink(link.name);
                      setNavOpen(false);
                    }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Interactive hover indicator */}
                    {hoverIndex === index && activeLink !== link.name && (
                      <motion.div
                        className="absolute inset-0 bg-amber-500/5 rounded-r-lg"
                        layoutId="hoverIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    
                    {/* Active indicator */}
                    {activeLink === link.name && (
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      />
                    )}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto mb-8 px-6">
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.a
                    href="/get-started"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setNavOpen(false)}
                    className="block"
                  >
                    <MagicButton title="Get In Touch" icon={<ArrowRight />} position="right" buttonClasses="!w-full !bg-amber-500 hover:!bg-amber-600" />
                  </motion.a>
                </motion.div>
                
                {/* Social/additional links */}
                <motion.div 
                  className="flex justify-center gap-4 mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {/* Social indicators - simplified circles for minimalism */}
                  {[0, 1, 2, 3].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-amber-500/60 rounded-full hover:bg-amber-400 cursor-pointer"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </motion.div>
                
                {/* Bottom design element */}
                <motion.div 
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="w-16 h-1 bg-amber-500/30 rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;