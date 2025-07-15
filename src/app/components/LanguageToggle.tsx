"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    setIsPressed(true);
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
    
    // Reset del estado de pulsación después de la animación
    setTimeout(() => setIsPressed(false), 200);
  };

  const isSpanish = currentLang === 'es';

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
      className={`fixed top-4 right-4 z-50 backdrop-blur-sm border rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
        isSpanish 
          ? 'bg-blue-50/90 border-blue-200 hover:bg-blue-100/90' 
          : 'bg-red-50/90 border-red-200 hover:bg-red-100/90'
      }`}
    >
      <div className="flex items-center gap-2">
        <motion.span 
          className={`text-sm font-medium transition-colors duration-300 ${
            isSpanish ? 'text-blue-700' : 'text-red-700'
          }`}
          animate={{ 
            scale: isPressed ? 1.1 : 1,
            rotate: isPressed ? [0, -10, 10, 0] : 0
          }}
          transition={{ duration: 0.2 }}
        >
          {isSpanish ? 'ES' : 'EN'}
        </motion.span>
        <motion.svg
          animate={{ 
            rotate: isPressed ? 180 : 0,
            scale: isPressed ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
          className={`w-4 h-4 transition-colors duration-300 ${
            isSpanish ? 'text-blue-500' : 'text-red-500'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </motion.svg>
      </div>
    </motion.button>
  );
};

export default LanguageToggle; 