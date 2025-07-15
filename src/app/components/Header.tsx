"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import React from "react";

const Header: React.FC = () => {
  const { t } = useTranslation("header");

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-slate-700 via-blue-700 to-blue-800 text-white p-6 sm:p-10 md:p-12 text-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" 
        />
      </div>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg"
      >
        {t('title')}
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 text-base sm:text-lg md:text-xl opacity-90"
      >
        {t('company')}
      </motion.div>
    </motion.div>
  );
};

export default Header; 