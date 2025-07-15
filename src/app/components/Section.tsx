"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="mb-6 md:mb-8 p-4 sm:p-6 md:p-8 bg-white rounded-xl border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 text-slate-800 text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4"
      >
        <motion.span 
          initial={{ scale: 0 }}
          animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="inline-block w-3 h-3 bg-blue-600 rounded-full shadow-sm"
        />
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Section; 