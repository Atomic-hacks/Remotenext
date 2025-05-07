"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

export const ModernFAQ = ({
  items,
  columns = 1,
  categories = [],
}: {
  items: FAQItem[];
  columns?: 1 | 2;
  categories?: string[];
}) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  // Store original heights of answers for animations
  useEffect(() => {
    const newHeights = items.map((_, i) => {
      return answerRefs.current[i]?.scrollHeight || 0;
    });
    setHeights(newHeights);
  }, [items]);

  // Filter items based on category and search
  const filteredItems = items.filter((item) => {
    const matchesCategory = !filter || item.category === filter;
    const matchesSearch =
      !searchQuery ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggle = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="w-full bg-neutral-300 dark:bg-neutral-900 px-6 py-20 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4">
            Got questions?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Everything you need to know about our product and services
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>

          {/* Category filters */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === null
                    ? "bg-neutral-800 text-white dark:bg-white dark:text-neutral-900"
                    : "bg-neutral-300 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 hover:bg-neutral-400 dark:hover:bg-neutral-700"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category
                      ? "bg-neutral-800 text-white dark:bg-white dark:text-neutral-900"
                      : "bg-neutral-300 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 hover:bg-neutral-400 dark:hover:bg-neutral-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* FAQ Items Grid */}
        <div
          className={`grid gap-6 ${
            columns === 2 ? "md:grid-cols-2" : "grid-cols-1 max-w-3xl mx-auto"
          }`}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const actualIndex = items.indexOf(item);
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => handleToggle(actualIndex)}
                    className="w-full flex items-center justify-between p-6 text-left border-b border-transparent"
                    aria-expanded={activeItem === actualIndex}
                  >
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white pr-8">
                      {item.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center transition-colors ${
                        activeItem === actualIndex
                          ? "bg-neutral-800 dark:bg-white"
                          : "bg-neutral-100 dark:bg-neutral-700"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform ${
                          activeItem === actualIndex
                            ? "rotate-45 text-white dark:text-neutral-900"
                            : "text-neutral-600 dark:text-neutral-300"
                        }`}
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      height:
                        activeItem === actualIndex ? heights[actualIndex] : 0,
                    }}
                  >
                    <div
                      ref={(el) => {
                        answerRefs.current[actualIndex] = el;
                      }}
                      className="p-6 text-neutral-600 dark:text-neutral-300"
                    >
                      <p className="whitespace-pre-line">{item.answer}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full text-center p-12 bg-white dark:bg-neutral-800 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4 text-neutral-400 dark:text-neutral-500"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Try adjusting your search or filter to find what you&apos;re looking
                for.
              </p>
            </div>
          )}
        </div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-2xl overflow-hidden relative"
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 z-30 relative">
            <div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
              <img src="/texture1.jpg" alt="texture" className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-neutral-300 max-w-lg">
                Can&apos;t find the answer you&apos;re looking for? Please contact our
                friendly support team.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-white dark:bg-neutral-900 text-neutral-800 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Contact Support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};