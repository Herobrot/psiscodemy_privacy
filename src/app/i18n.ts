'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import * as es from './locales/es';
import * as en from './locales/en';

const resources = {
  es: {
    header: es.header,
    sections: es.section,
    address: es.address,
    contact: es.contact,
    footer: es.footer,
  },
  en: {
    header: en.header,
    sections: en.section,
    address: en.address,
    contact: en.contactInfo,
    footer: en.footer,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'es',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
    });
}

export default i18n; 