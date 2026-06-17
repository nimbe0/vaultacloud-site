import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Blog — Private Cloud Storage, African Tech & File Management',
  description: 'Articles on private cloud storage, offline-first file management, digital transformation for African businesses, data ownership, and secure document management.',
  alternates: { canonical: 'https://vaultacloud.com/blog' },
}

// In production, fetch these from MDX files via gray-matter
const articles = [
  {
    slug: 'google-drive-alternatives-african-businesses',
    title: 'The 5 Best Google Drive Alternatives for African Businesses in 2025',
    excerpt: 'Google Drive is the default — but for businesses in Nigeria, Ghana, and Kenya dealing with unreliable internet, it\'s not the best option. Here are five alternatives worth considering.',
    category: 'Private Cloud Storage',
    date: '2025-01-15',
    readTime: '8 min read',
  },
  {
    slug: 'why-african-businesses-need-offline-first-storage',
    title: 'Why African Businesses Need Offline-First File Storage',
    excerpt: 'When the internet goes down in Africa, businesses stop. But it doesn\'t have to be that way. Offline-first architecture keeps your team productive regardless of connectivity.',
    category: 'African Technology',
    date: '2025-01-10',
    readTime: '7 min read',
  },
  {
    slug: 'cloud-storage-challenges-emerging-markets',
    title: 'Cloud Storage in Emerging Markets: 6 Challenges Nobody Talks About',
    excerpt: 'Bandwidth costs, dollar subscriptions, foreign data residency, power instability — mainstream cloud storage ignores these realities. Here\'s what businesses in emerging markets actually face.',
    category: 'Digital Transformation',
    date: '2025-01-05',
    readTime: '9 min read',
  },
  {
    slug: 'how-law-firms-secure-documents-locally',
    title: 'How Nigerian Law Firms Can Secure Client Documents Without Cloud Risk',
    excerpt: 'Client confidentiality is non-negotiable for law firms. Storing sensitive case files on US-based cloud servers exposes you to foreign subpoenas, data breaches, and compliance risk.',
    category: 'Secure Document Management',
    date: '2024-12-28',
    readTime: '10 min read',
  },
  {
    slug: 'private-cloud-vs-public-cloud-africa',
    title: 'Private Cloud vs Public Cloud: What African Businesses Need to Know',
    excerpt: 'Public cloud means renting compute and storage from a giant tech company. Private cloud means owning your infrastructure. For African SMEs, the differences matter enormously.',
    category: 'Private Cloud Storage',
    date: '2024-12-20',
    readTime: '8 min read',
  },
  {
    slug: 'self-hosted-cloud-storage-guide-nigeria',
    title: 'A Beginner\'s Guide to Self-Hosted Cloud Storage in Nigeria',
    excerpt: 'You don\'t need to be a tech company to run your own file server. This guide walks through what self-hosted cloud storage means, why Nigerian businesses are choosing it, and how to get started.',
    category: 'SME Productivity',
    date: '2024-12-15',
    readTime: '11 min read',
  },
  {
    slug: 'data-sovereignty-african-businesses',
    title: 'Data Sovereignty: Why African Businesses Should Own Their Data Infrastructure',
    excerpt: 'Your business data is one of your most valuable assets. Why are you storing it on servers in Oregon? Data sovereignty means keeping your files under your control, in your jurisdiction.',
    category: 'Data Ownership',
    date: '2024-12-10',
    readTime: '7 min read',
  },
  {
    slug: 'file-management-for-accounting-firms-africa',
    title: 'Secure File Management for Accounting Firms in Africa',
    excerpt: 'Accounting firms handle tax records, audit reports, financial statements, and payroll data. The stakes for secure, organized, accessible file management are high.',
    category: 'Business Collaboration',
    date: '2024-12-05',
    readTime: '9 min read',
  },
  {
    slug: 'offline-file-sync-how-it-works',
    title: 'How Offline File Sync Works — And Why It Matters for African Businesses',
    excerpt: 'Offline sync isn\'t just a nice-to-have feature. For businesses in markets with unreliable connectivity, it\'s the difference between a productive team and a stalled operation.',
    category: 'Offline File Management',
    date: '2024-11-28',
    readTime: '6 min read',
  },
  {
    slug: 'white-label-cloud-storage-it-consultants',
    title: 'White-Label Cloud Storage: A Revenue Opportunity for African IT Consultants',
    excerpt: 'IT consultants across Africa are building recurring revenue by deploying private cloud storage for their clients under their own brand. Here\'s how the white-label model works.',
    category: 'SME Productivity',
    date: '2024-11-20',
    readTime: '8 min read',
  },
  {
    slug: 'best-cloud-storage-nigeria-2024',
    title: 'Best Cloud Storage for Nigerian Businesses in 2025',
    excerpt: 'A practical guide to choosing cloud storage that works in Nigeria — comparing options on offline capability, pricing, data ownership, and LAN deployment.',
    category: 'Private Cloud Storage',
    date: '2024-11-15',
    readTime: '10 min read',
  },
  {
    slug: 'dropbox-vs-vaultacloud-comparison',
    title: 'Dropbox vs VaultaCloud: Which Is Better for African Teams?',
    excerpt: 'Dropbox is polished and popular. But it charges in dollars, requires internet, and stores your data on Dropbox servers. For African businesses, those are deal-breakers worth evaluating.',
    category: 'Private Cloud Storage',
    date: '2024-11-10',
    readTime: '8 min read',
  },
]

const categories = articles.map(a => a.category).filter((c, i, arr) => arr.indexOf(c) === i)

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Blog</span>
              <h1 className="section-title mb-4">
                Insights on private cloud,<br />
                <span className="text-gradient-gold">built for Africa.</span>
              </h1>
              <p className="section-subtitle mx-auto">
                Articles on file management, data ownership, African technology, and building resilient business infrastructure.
              </p>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <span className="px-4 py-1.5 bg-navy-800 text-white rounded-full text-sm font-medium">All</span>
              {categories.map(c => (
                <span key={c} className="px-4 py-1.5 bg-white border border-navy-200 text-navy-700 rounded-full text-sm font-medium cursor-pointer hover:border-navy-400 transition-colors">
                  {c}
                </span>
              ))}
            </div>

            {/* Featured article */}
            <Link href={`/blog/${articles[0].slug}`} className="block card hover:border-navy-300 mb-8 group">
              <span className="section-label">{articles[0].category}</span>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-navy-600/70 leading-relaxed mb-4">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-navy-500">
                <span>{new Date(articles[0].date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span>·</span>
                <span>{articles[0].readTime}</span>
              </div>
            </Link>

            {/* Article grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {articles.slice(1).map(article => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="card hover:border-navy-300 group flex flex-col">
                  <span className="section-label text-xs mb-2">{article.category}</span>
                  <h2 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-navy-600/70 text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-navy-500">
                    <span>{new Date(article.date).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
