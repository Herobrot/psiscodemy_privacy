"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Address: React.FC = () => {
  const { t } = useTranslation("address");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 sm:p-5 rounded-lg italic border border-slate-200 my-3 sm:my-4 shadow-sm"
    >
      <p className="text-slate-700">
        <strong className="text-slate-900">{t('label')}</strong><br />
        {t('address.0')}<br />
        {t('address.1')}<br />
        {t('address.2')}<br />
        {t('address.3')}
      </p>
    </motion.div>
  );
};

export default Address; 