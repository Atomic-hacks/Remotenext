'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import MagicButton from "../ui/MagicButton";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
 
  const [width, setWidth] = useState("100%");
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

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
    { name: "jobs", link: "/jobs" },
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
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
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

        {/* Desktop Navigation - added flex-shrink-0 to prevent shrinking */}
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
          className="lg:hidden p-2 text-amber-500 hover:bg-amber-100 rounded-full transition-colors flex-shrink-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {navOpen ? <FaXmark size={24} /> : <BiMenu size={24} />}
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
            className="md:hidden fixed inset-y-0 right-0 w-full sm:w-[350px] bg-gradient-to-br from-neutral-900 to-neutral-800 opacity-95 backdrop-blur-2xl p-6 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end">
                <motion.button
                  onClick={() => setNavOpen(false)}
                  className="p-2 text-amber-400 hover:bg-amber-500/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaXmark size={24} />
                </motion.button>
              </div>

              <nav className="flex flex-col space-y-6 mt-10">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    className={`text-white/90 hover:text-amber-400 px-4 py-2 text-lg font-medium transition-colors border-l-4 ${
                      activeLink === link.name ? "border-l-amber-500 text-amber-400 bg-amber-500/10" : "border-l-transparent"
                    }`}
                    whileHover={{ x: 10, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                    onClick={() => {
                      setActiveLink(link.name);
                      setNavOpen(false);
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pb-8">
                <motion.a
                  href="/get-started"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setNavOpen(false)}
                >
                  <MagicButton title="Get In Touch" icon={<ArrowRight />} position="right" buttonClasses="!w-full !bg-amber-500 hover:!bg-amber-600" />
                </motion.a>
                
                {/* Added subtle design element */}
                <div className="flex justify-center mt-6">
                  <div className="w-16 h-1 bg-amber-500/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;