"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Section from "./components/Section";
import Address from "./components/Address";
import ContactInfo from "./components/ContactInfo";
import Purposes from "./components/Purposes";
import Highlight from "./components/Highlight";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";
import I18nProvider from "./components/I18nProvider";

function HomeContent() {
  const { t } = useTranslation("sections");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-400 via-blue-200 to-indigo-600 flex flex-col items-center justify-center py-6 px-2 sm:px-6 md:px-10 lg:px-0">
      <LanguageToggle />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        <Header />
        <div className="content px-4 sm:px-8 md:px-12 py-6 md:py-10 bg-gradient-to-b from-indigo-200 via-slate-200 to-blue-400">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Section title={t('whoWeAre.title')}>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                {t('whoWeAre.description')}
              </p>
              <Address />
              <ContactInfo />
            </Section>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Section title={t('purposes.title')}>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                {t('purposes.description')}
              </p>
              <Purposes />
            </Section>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Section title={t('whereToConsult.title')}>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                {t('whereToConsult.description')}
              </p>
              <Highlight />
            </Section>
          </motion.div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}