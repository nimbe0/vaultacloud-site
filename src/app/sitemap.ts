import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vaultacloud.com'
  const now = new Date()

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/features`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/pricing`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${base}/docs`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${base}/docs/getting-started`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/docs/installation`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/docs/lan-setup`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/docs/user-management`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/docs/permissions`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/docs/white-label`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/compare`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/compare/vaultacloud-vs-google-drive`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/compare/vaultacloud-vs-dropbox`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/compare/vaultacloud-vs-nextcloud`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/compare/vaultacloud-vs-onedrive`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/compare/vaultacloud-vs-microsoft-365`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases/law-firms`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases/architecture`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases/accounting`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases/healthcare`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases/education`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases/real-estate`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases/media`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/use-cases/government`, priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Blog article slugs — expand as you publish
  const blogSlugs = [
    'google-drive-alternatives-african-businesses',
    'why-african-businesses-need-offline-first-storage',
    'cloud-storage-challenges-emerging-markets',
    'how-law-firms-secure-documents-locally',
    'private-cloud-vs-public-cloud-africa',
    'dropbox-vs-vaultacloud-comparison',
    'self-hosted-cloud-storage-guide-nigeria',
    'file-management-for-accounting-firms-africa',
    'offline-file-sync-how-it-works',
    'best-cloud-storage-nigeria-2024',
    'white-label-cloud-storage-it-consultants',
    'data-sovereignty-african-businesses',
  ]

  const blogPages = blogSlugs.map(slug => ({
    url: `${base}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  return [
    ...staticPages.map(p => ({ ...p, lastModified: now })),
    ...blogPages,
  ]
}
