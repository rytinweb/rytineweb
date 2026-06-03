import { MetadataRoute } from 'next';
import { SERVICE_ITEMS } from '@/constants/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rytinweb.in';

  const serviceRoutes = SERVICE_ITEMS.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    '',
    '/who-we-are',
    '/our-story',
    '/portfolio',
    '/contact',
    '/services',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
