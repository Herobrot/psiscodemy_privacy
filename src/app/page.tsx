"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HomeDevs Software Solutions",
    "description": "Empresa de software responsable del uso y protección de datos personales",
    "url": "https://aviso-privacidad.psicodemy.com/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Rosa del Centro LT10 MZ46",
      "addressLocality": "Tuxtla Gutiérrez",
      "addressRegion": "Chiapas",
      "postalCode": "29049",
      "addressCountry": "MX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "luga.soci@gmail.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://aviso-privacidad.psicodemy.com/"
    ]
  };

  return (
    <>
      <Head>
        <title>Aviso de Privacidad - HomeDevs Software Solutions</title>
        <meta name="description" content="Aviso de privacidad integral de HomeDevs Software Solutions. Conozca cómo protegemos y utilizamos sus datos personales de manera segura y transparente." />
        <meta name="keywords" content="aviso de privacidad, HomeDevs, software solutions, protección de datos, privacidad, datos personales, seguridad informática" />
        <meta property="og:title" content="Aviso de Privacidad - HomeDevs Software Solutions" />
        <meta property="og:description" content="Aviso de privacidad integral de HomeDevs Software Solutions. Conozca cómo protegemos y utilizamos sus datos personales." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aviso-privacidad.psicodemy.com/" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviso de Privacidad - HomeDevs Software Solutions" />
        <meta name="twitter:description" content="Aviso de privacidad integral de HomeDevs Software Solutions." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://aviso-privacidad.psicodemy.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-400 via-blue-200 to-indigo-600 flex flex-col items-center justify-center py-6 px-2 sm:px-6 md:px-10 lg:px-0">
        <LanguageToggle />
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <Header />
          <div className="content px-4 sm:px-8 md:px-12 py-6 md:py-10 bg-gradient-to-b from-indigo-200 via-slate-200 to-blue-400">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              itemScope
              itemProp="mainEntity"
            >
              <Section title={t('whoWeAre.title')}>
                <p className="text-gray-700 mb-4 text-justify leading-relaxed" itemProp="description">
                  {t('whoWeAre.description')}
                </p>
                <Address />
                <ContactInfo />
              </Section>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              itemScope
              itemProp="mainEntity"
            >
              <Section title={t('purposes.title')}>
                <p className="text-gray-700 mb-4 text-justify leading-relaxed" itemProp="description">
                  {t('purposes.description')}
                </p>
                <Purposes />
              </Section>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              itemScope
              itemProp="mainEntity"
            >
              <Section title={t('whereToConsult.title')}>
                <p className="text-gray-700 mb-4 text-justify leading-relaxed" itemProp="description">
                  {t('whereToConsult.description')}
                </p>
                <Highlight />
              </Section>
            </motion.section>
          </div>
          <Footer />
        </motion.article>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}