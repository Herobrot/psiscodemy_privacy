import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aviso de Privacidad - HomeDevs Software Solutions",
  description: "Aviso de privacidad integral de HomeDevs Software Solutions. Conozca cómo protegemos y utilizamos sus datos personales de manera segura y transparente.",
  keywords: [
    "aviso de privacidad",
    "HomeDevs",
    "software solutions",
    "protección de datos",
    "privacidad",
    "datos personales",
    "seguridad informática",
    "Tuxtla Gutiérrez",
    "Chiapas"
  ],
  authors: [{ name: "HomeDevs Software Solutions" }],
  creator: "HomeDevs Software Solutions",
  publisher: "HomeDevs Software Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aviso-privacidad.psicodemy.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/',
      'en': '/en',
    },
  },
  openGraph: {
    title: "Aviso de Privacidad - HomeDevs Software Solutions",
    description: "Aviso de privacidad integral de HomeDevs Software Solutions. Conozca cómo protegemos y utilizamos sus datos personales.",
    url: 'https://aviso-privacidad.psicodemy.com/',
    siteName: 'HomeDevs Software Solutions',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HomeDevs Software Solutions - Aviso de Privacidad',
      },
    ],
  },
  applicationName: "Aviso de Privacidad - HomeDevs Software Solutions",
  appleWebApp: {
    title: "Aviso de Privacidad - HomeDevs Software Solutions",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aviso de Privacidad - HomeDevs Software Solutions",
    description: "Aviso de privacidad integral de HomeDevs Software Solutions. Conozca cómo protegemos y utilizamos sus datos personales.",
    images: ['/og-image.png'],
    creator: '@homedevs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0956c6" />
        <meta name="msapplication-TileColor" content="#0956c6" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="MX-CHP" />
        <meta name="geo.placename" content="Tuxtla Gutiérrez, Chiapas" />
        <meta name="geo.position" content="16.7511;-93.1136" />
        <meta name="ICBM" content="16.7511, -93.1136" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
