/** @type {import('next-sitemap').IConfig} */
export const siteUrl = 'https://aviso-privacidad.psicodemy.com';
export const generateRobotsTxt = true;
export const sitemapSize = 7000;
export const changefreq = 'monthly';
export const priority = 0.8;
export const exclude = ['/404', '/500'];
export const generateIndexSitemap = false;
export const robotsTxtOptions = {
  additionalSitemaps: [
    'https://aviso-privacidad.psicodemy.com/sitemap.xml',
  ],
  policies: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
  ],
}; 