"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Purposes: React.FC = () => {
  const { t } = useTranslation("sections");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const purposes = t('purposes.items', { returnObjects: true }) as string[];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 sm:p-5 rounded-lg border border-emerald-200 my-3 sm:my-4 shadow-sm"
    >
      <ul className="list-none pl-0 space-y-2">
        {purposes.map((purpose, idx) => (
          <motion.li 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative pl-8 py-2 text-slate-700 flex items-start"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 + 0.1 }}
              className="absolute left-0 top-2 text-emerald-600 font-bold text-lg"
            >
              ✓
            </motion.span>
            <span className="leading-relaxed">{purpose}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Purposes; 