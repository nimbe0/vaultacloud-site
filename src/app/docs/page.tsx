import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Documentation — VaultaCloud Setup and User Guides',
  description: 'Complete documentation for VaultaCloud: installation, LAN setup, user management, permissions, file sharing, backup, white-label deployment, and more.',
  alternates: { canonical: 'https://vaultacloud.com/docs' },
}

const docSections = [
  {
    title: 'Getting Started',
    icon: '🚀',
    articles: [
      { href: '/docs/getting-started', label: 'Quick Start Guide', desc: 'Be up and running in 30 minutes' },
      { href: '/docs/system-requirements', label: 'System Requirements', desc: 'Hardware and software requirements' },
      { href: '/docs/installation', label: 'Installation Guide', desc: 'Full installation walkthrough' },
      { href: '/docs/first-login', label: 'First Login & Setup', desc: 'Configure your instance after install' },
    ]
  },
  {
    title: 'Deployment',
    icon: '🛠️',
    articles: [
      { href: '/docs/lan-setup', label: 'LAN / Office Network Setup', desc: 'Deploy on your local network' },
      { href: '/docs/cloud-vps-deployment', label: 'Cloud VPS Deployment', desc: 'Deploy on DigitalOcean, Hetzner, etc.' },
      { href: '/docs/docker-deployment', label: 'Docker Deployment', desc: 'One-command Docker setup' },
      { href: '/docs/custom-domain', label: 'Custom Domain & SSL', desc: 'Set up files.yourcompany.com' },
    ]
  },
  {
    title: 'User Management',
    icon: '👥',
    articles: [
      { href: '/docs/user-management', label: 'Managing Users', desc: 'Invite, edit, and remove team members' },
      { href: '/docs/roles', label: 'Roles & Permissions', desc: 'Configure access control by role' },
      { href: '/docs/departments', label: 'Departments', desc: 'Create department workspaces' },
      { href: '/docs/two-factor-auth', label: 'Two-Factor Authentication', desc: 'Enable 2FA for your team' },
    ]
  },
  {
    title: 'File Management',
    icon: '📁',
    articles: [
      { href: '/docs/uploading-files', label: 'Uploading Files', desc: 'Upload, organize, and manage files' },
      { href: '/docs/sharing', label: 'File Sharing', desc: 'Share files internally and externally' },
      { href: '/docs/versioning', label: 'File Versions', desc: 'Access and restore previous versions' },
      { href: '/docs/offline-sync', label: 'Offline Sync', desc: 'How offline access works' },
    ]
  },
  {
    title: 'Security',
    icon: '🔐',
    articles: [
      { href: '/docs/encryption', label: 'Encryption', desc: 'How files are encrypted at rest and in transit' },
      { href: '/docs/ip-allowlisting', label: 'IP Allowlisting', desc: 'Restrict access by IP address' },
      { href: '/docs/audit-log', label: 'Activity Audit Log', desc: 'Track all file access and changes' },
      { href: '/docs/virus-scanning', label: 'Virus Scanning', desc: 'Configure upload scanning' },
    ]
  },
  {
    title: 'Backup & Recovery',
    icon: '💾',
    articles: [
      { href: '/docs/backup', label: 'Backup Configuration', desc: 'Set up automated daily backups' },
      { href: '/docs/restore', label: 'Restoring Data', desc: 'Restore from backup or file version' },
      { href: '/docs/external-storage', label: 'External Storage', desc: 'Back up to external drives or S3' },
    ]
  },
  {
    title: 'White-Label',
    icon: '🏷️',
    articles: [
      { href: '/docs/white-label', label: 'White-Label Setup', desc: 'Deploy under your own brand' },
      { href: '/docs/custom-logo', label: 'Custom Logo & Branding', desc: 'Configure your brand identity' },
      { href: '/docs/reseller-guide', label: 'Reseller Guide', desc: 'Deploying for multiple clients' },
    ]
  },
  {
    title: 'Integrations',
    icon: '🔗',
    articles: [
      { href: '/docs/api', label: 'REST API Reference', desc: 'Full API documentation' },
      { href: '/docs/webhooks', label: 'Webhooks', desc: 'Trigger automations on file events' },
      { href: '/docs/whatsapp', label: 'WhatsApp Integration', desc: 'Share files via WhatsApp' },
      { href: '/docs/smtp', label: 'Email / SMTP Setup', desc: 'Configure email notifications' },
    ]
  },
]

export default function DocsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Documentation</span>
              <h1 className="section-title mb-4">VaultaCloud Docs</h1>
              <p className="section-subtitle mx-auto mb-8">
                Everything you need to install, configure, and get the most out of VaultaCloud.
              </p>

              {/* Search placeholder */}
              <div className="max-w-lg mx-auto relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400">🔍</span>
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-11 pr-4 py-3 border border-navy-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { href: '/docs/getting-started', label: '🚀 Quick Start' },
                { href: '/docs/lan-setup', label: '🏢 LAN Setup' },
                { href: '/docs/docker-deployment', label: '🐳 Docker' },
                { href: '/docs/api', label: '⚡ API Reference' },
                { href: '/docs/white-label', label: '🏷️ White-Label' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="bg-white border border-navy-200 hover:border-navy-400 rounded-lg px-4 py-2 text-sm font-medium text-navy-700 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Doc sections grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {docSections.map(section => (
                <div key={section.title} className="card">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{section.icon}</span>
                    <h2 className="font-display text-lg font-bold text-navy-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {section.articles.map(article => (
                      <li key={article.href}>
                        <Link href={article.href} className="flex items-start gap-2 group hover:bg-navy-50/50 p-2 rounded-lg transition-colors -mx-2">
                          <span className="text-gold-500 text-xs mt-1.5 flex-shrink-0">→</span>
                          <div>
                            <p className="text-sm font-medium text-navy-800 group-hover:text-navy-600">{article.label}</p>
                            <p className="text-xs text-navy-500">{article.desc}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
