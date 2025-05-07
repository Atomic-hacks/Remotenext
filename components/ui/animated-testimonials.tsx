"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Generate random rotation values for non-active cards
  const randomRotateY = () => {
    return Math.floor(Math.random() * 15) - 7;
  };

  return (
    <div className="rounded-2xl bg-neutral-300 mx-auto w-full px-4 py-16 md:py-24 font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-10 md:gap-16 lg:gap-20 md:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="relative h-96 md:h-[28rem] w-full overflow-visible">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/30 to-neutral-50/30 dark:from-neutral-900/30 dark:to-neutral-800/30 rounded-3xl -z-10 blur-xl opacity-80"></div>
          
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.65,
                  scale: isActive(index) ? 1 : 0.94,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -30, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.88,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className="absolute inset-0 origin-center"
              >
                <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full object-cover object-center transition-transform duration-700"
                  />
                  {isActive(index) && (
                    <motion.div 
                      className="absolute bottom-6 left-6 right-6 z-10 md:hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-white/80">
                        {testimonial.designation}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Navigation indicators */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className="p-1"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div 
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    isActive(index)
                      ? "bg-neutral-800 dark:bg-white"
                      : "bg-neutral-300 dark:bg-neutral-700"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between py-4 md:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mt-1">
                  {testimonials[active].designation}
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 -top-2 text-5xl font-serif text-neutral-300 dark:text-neutral-700">"</div>
                <motion.p className="relative mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(8px)",
                        opacity: 0,
                        y: 3,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.015 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 pt-12 md:pt-6">
            <button
              onClick={handlePrev}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft className="h-5 w-5 text-neutral-700 transition-transform duration-300 group-hover:-translate-x-0.5 dark:text-neutral-300" />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <IconArrowRight className="h-5 w-5 text-neutral-700 transition-transform duration-300 group-hover:translate-x-0.5 dark:text-neutral-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};