import { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/site-info'
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL // 実際のドメインに変更してください

  // 静的ページのURL
  const staticPages = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/law',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...staticPages]
} 