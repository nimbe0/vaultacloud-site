import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Features — Offline-First Private Cloud Storage',
  description: 'Explore VaultaCloud\'s full feature set: offline-first access, LAN deployment, team permissions, white-label, custom domains, secure file sharing, and more. Built for African businesses.',
  alternates: { canonical: 'https://vaultacloud.com/features' },
}

const featureGroups = [
  {
    category: 'Core File Management',
    icon: '📁',
    features: [
      { name: 'Drag-and-drop uploads', desc: 'Upload files and folders with a simple drag-and-drop. Bulk upload hundreds of files at once.' },
      { name: 'Folder hierarchy', desc: 'Organize files in unlimited nested folders with descriptive names and color coding.' },
      { name: 'File versioning', desc: 'Automatically track every version of every file. Restore any previous version in one click.' },
      { name: 'Trash and recovery', desc: '30-day trash retention. Recover deleted files or permanently delete to free storage.' },
      { name: 'In-browser preview', desc: 'Preview images, PDFs, Office documents, and videos without downloading.' },
      { name: 'File search', desc: 'Full-text search across filenames, metadata, and document content.' },
    ]
  },
  {
    category: 'Offline & LAN Access',
    icon: '🔌',
    features: [
      { name: 'Offline-first architecture', desc: 'Files cached locally so your team works through internet outages without interruption.' },
      { name: 'LAN deployment', desc: 'Deploy on your office network for sub-100ms file access at full network speeds — no upload caps.' },
      { name: 'Auto-sync on reconnect', desc: 'Any changes made offline automatically sync when internet connection is restored.' },
      { name: 'Conflict resolution', desc: 'Smart conflict detection and resolution when multiple people edit the same file offline.' },
      { name: 'Selective sync', desc: 'Choose which folders sync to each device to manage local storage efficiently.' },
      { name: 'Bandwidth throttling', desc: 'Control how much bandwidth VaultaCloud uses so other applications aren\'t affected.' },
    ]
  },
  {
    category: 'Teams & Permissions',
    icon: '👥',
    features: [
      { name: 'Role-based access', desc: 'Define roles — Admin, Manager, Editor, Viewer — and assign them to team members.' },
      { name: 'Department folders', desc: 'Create department-specific workspaces with controlled access between teams.' },
      { name: 'Guest sharing', desc: 'Share folders or files with external guests via secure, time-limited links.' },
      { name: 'Link expiry', desc: 'Shared links expire automatically — set expiry by date or number of downloads.' },
      { name: 'Password-protected links', desc: 'Add a password to any shared link for sensitive documents.' },
      { name: 'Activity audit log', desc: 'Track who accessed, downloaded, modified, or shared any file, at any time.' },
    ]
  },
  {
    category: 'Security & Privacy',
    icon: '🔐',
    features: [
      { name: 'End-to-end encryption', desc: 'Files encrypted in transit and at rest. Keys stay on your infrastructure.' },
      { name: 'Private by default', desc: 'Your data never touches shared cloud infrastructure. Zero telemetry sent to third parties.' },
      { name: 'Two-factor authentication', desc: 'Enforce 2FA for all team members or specific roles to prevent unauthorized access.' },
      { name: 'IP allowlisting', desc: 'Restrict access to specific IP ranges — your office network, VPN, or trusted locations.' },
      { name: 'Virus scanning', desc: 'Uploaded files are scanned for malware before being made available to your team.' },
      { name: 'GDPR-ready', desc: 'Built with data ownership in mind. Supports data residency and deletion requirements.' },
    ]
  },
  {
    category: 'Deployment & Infrastructure',
    icon: '🛠️',
    features: [
      { name: 'Self-hosted deployment', desc: 'Install on any Linux server, NAS device, or bare-metal hardware you own.' },
      { name: 'Cloud VPS deployment', desc: 'Deploy to DigitalOcean, Hetzner, AWS, or any VPS — full setup documentation included.' },
      { name: 'Docker support', desc: 'One-command Docker deployment for rapid setup and easy updates.' },
      { name: 'Custom domain', desc: 'Access VaultaCloud at files.yourcompany.com with SSL included.' },
      { name: 'White-label mode', desc: 'Remove VaultaCloud branding and replace with your company name and logo.' },
      { name: 'Backup and snapshots', desc: 'Automated daily backups with configurable retention and external storage support.' },
    ]
  },
  {
    category: 'Integrations',
    icon: '🔗',
    features: [
      { name: 'WhatsApp file sharing', desc: 'Share files and folders directly via WhatsApp from inside VaultaCloud.' },
      { name: 'Email notifications', desc: 'Get notified when files are shared with you, updated, or commented on.' },
      { name: 'REST API', desc: 'Full REST API for integrating VaultaCloud with your existing business software.' },
      { name: 'Webhook support', desc: 'Trigger webhooks on file events — upload, share, delete — for custom automations.' },
      { name: 'SMTP email delivery', desc: 'Connect your own email server or use our managed delivery for team notifications.' },
      { name: 'SSO / LDAP (Enterprise)', desc: 'Single Sign-On via LDAP or SAML for enterprises with existing identity infrastructure.' },
    ]
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-hero grid-bg py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-label">Platform Features</span>
            <h1 className="section-title mb-4">
              Everything your organization needs.<br />
              <span className="text-gradient-gold">Under your roof.</span>
            </h1>
            <p className="section-subtitle mx-auto">
              VaultaCloud is a complete private cloud file management platform — not a stripped-down self-hosted clone. Here's what you get.
            </p>
          </div>
        </section>

        {/* Feature groups */}
        {featureGroups.map((group, i) => (
          <section key={group.category} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-navy-50/40'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <span className="text-3xl mb-3 block">{group.icon}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">{group.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.features.map(f => (
                  <div key={f.name} className="card">
                    <div className="flex items-start gap-3">
                      <span className="text-gold-500 mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">{f.name}</h3>
                        <p className="text-sm text-navy-600/70 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 bg-navy-800 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-white/70 mb-8">See VaultaCloud in action or talk to our team about your specific requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/getting-started" className="btn-primary">Get Started →</Link>
              <Link href="/contact" className="btn-secondary">Talk to Sales</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
