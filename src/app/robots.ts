import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://aviso-privacidad.psicodemy.com/sitemap.xml',
    host: 'https://aviso-privacidad.psicodemy.com',
  }
} 