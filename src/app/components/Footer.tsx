"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const { t } = useTranslation("footer");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-900 text-white text-center p-4 sm:p-5 text-xs sm:text-sm shadow-lg"
    >
      <p>{t('copyright')}</p>
    </motion.footer>
  );
};

export default Footer; 