"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const ContactInfo: React.FC = () => {
  const { t } = useTranslation("contact");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gradient-to-r from-blue-50 to-slate-50 p-4 sm:p-5 rounded-lg border border-blue-200 my-3 sm:my-4 shadow-sm"
    >
      <p className="text-slate-700">
        <strong className="text-slate-900">{t('label')}</strong> {t('email')}
      </p>
    </motion.div>
  );
};

export default ContactInfo; 