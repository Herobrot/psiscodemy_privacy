"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Highlight: React.FC = () => {
  const { t } = useTranslation("sections");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 p-4 sm:p-5 rounded-lg my-3 sm:my-4 border-l-4 border-amber-500 shadow-sm"
    >
      <p className="text-slate-700 leading-relaxed">
        <strong className="text-slate-900">{t('whereToConsult.highlight.title')}</strong><br />
        {t('whereToConsult.highlight.description')}
      </p>
    </motion.div>
  );
};

export default Highlight; 