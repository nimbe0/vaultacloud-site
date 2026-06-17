import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud vs Dropbox — African Business Comparison 2025',
  description: 'VaultaCloud vs Dropbox: offline access, data ownership, one-time pricing vs monthly subscription, LAN deployment, and African market fit. Which is right for your team?',
  alternates: { canonical: 'https://vaultacloud.com/compare/vaultacloud-vs-dropbox' },
}

const rows = [
  { feature: 'Works offline (no internet)', vaulta: 'Yes — offline-first architecture', dropbox: 'Limited — Smart Sync only with paid plan', winner: 'vaulta' },
  { feature: 'LAN / office network access', vaulta: 'Yes — built for LAN deployment', dropbox: 'No', winner: 'vaulta' },
  { feature: 'Data ownership', vaulta: 'Your server, your jurisdiction', dropbox: 'Dropbox servers (US)', winner: 'vaulta' },
  { feature: 'Pricing model', vaulta: 'One-time purchase from $299', dropbox: '$15–$24/user/month (USD)', winner: 'vaulta' },
  { feature: '3-year cost (20 users)', vaulta: '$699 total', dropbox: '$3,600–$5,760 total', winner: 'vaulta' },
  { feature: 'Custom domain', vaulta: 'Yes — files.yourcompany.com', dropbox: 'No', winner: 'vaulta' },
  { feature: 'White-label deployment', vaulta: 'Yes — full white-label', dropbox: 'No', winner: 'vaulta' },
  { feature: 'Self-hosted option', vaulta: 'Yes — on-premise or VPS', dropbox: 'No', winner: 'vaulta' },
  { feature: 'File sync speed', vaulta: 'LAN: instant; Cloud: standard', dropbox: 'Cloud only — limited by internet speed', winner: 'vaulta' },
  { feature: 'Team permissions', vaulta: 'Role-based, department-level', dropbox: 'Folder permissions, team management', winner: 'tie' },
  { feature: 'Desktop sync client', vaulta: 'Web + desktop via sync agent', dropbox: 'Native polished desktop apps', winner: 'dropbox' },
  { feature: 'Mobile apps', vaulta: 'Web-responsive / PWA', dropbox: 'Native iOS and Android apps', winner: 'dropbox' },
  { feature: 'Paper / doc editing', vaulta: 'File storage only', dropbox: 'Dropbox Paper (basic)', winner: 'dropbox' },
  { feature: 'Third-party integrations', vaulta: 'REST API, webhooks', dropbox: '300,000+ app integrations', winner: 'dropbox' },
  { feature: 'Brand recognition', vaulta: 'Growing', dropbox: 'Global, well-known', winner: 'dropbox' },
]

const scenarios = [
  {
    title: 'The Abuja accounting firm with 8 partners',
    desc: 'Partners share client financial documents, audit reports, and tax filings. Internet in their office building is shared and slow, especially at month-end when everyone is uploading. Client files are sensitive and should not live on US servers. VaultaCloud on their office LAN gives instant local access, zero US data jurisdiction exposure, and costs $299 once — not $1,440/year for Dropbox.',
    winner: 'VaultaCloud',
  },
  {
    title: 'The e-commerce startup with 5 remote people across 3 countries',
    desc: 'Fully remote team needs to share product images, marketing assets, and documents. Everyone has reliable internet. They already use Zapier automations and need Dropbox integration with their existing tools. The team is small and startup-budget-conscious but has no server to self-host. Dropbox (or a similar cloud tool) makes more sense here.',
    winner: 'Dropbox',
  },
  {
    title: 'The IT consultant deploying for 10 clients',
    desc: 'An IT firm in Lagos wants to offer private cloud storage as a managed service. They need a solution they can white-label, deploy on client infrastructure, and manage centrally. Dropbox has no reseller white-label option. VaultaCloud was built for exactly this model: deploy under your brand, per-client customization, volume reseller pricing.',
    winner: 'VaultaCloud',
  },
]

const faqs = [
  {
    q: 'Is VaultaCloud a good Dropbox replacement for Nigerian businesses?',
    a: "For document storage, sharing, and access control — yes. VaultaCloud covers Dropbox's core use case while adding offline access, LAN deployment, and data ownership. It doesn't replicate Dropbox's 300,000+ third-party integrations or polished native desktop apps.",
  },
  {
    q: 'How does the pricing actually compare over time?',
    a: "Dropbox Business charges $15–$24 per user per month in USD. For a team of 20 over 3 years, that's $10,800–$17,280. VaultaCloud Business is $699 once. The savings are substantial — and grow every year you use it.",
  },
  {
    q: 'Can I migrate from Dropbox to VaultaCloud?',
    a: 'Yes. Download your Dropbox files and upload them to VaultaCloud. Your folder structure can be replicated. We recommend migrating department by department rather than all at once for large organizations.',
  },
  {
    q: 'Does VaultaCloud have a desktop app like Dropbox?',
    a: 'VaultaCloud has a sync agent for desktop that enables offline access and background sync. The native desktop experience is more web-centric than Dropbox — if a polished native Mac/Windows app is critical, Dropbox has an advantage here.',
  },
]

export default function VsDropboxPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "VaultaCloud vs Dropbox: Which Is Better for African Businesses?",
    "url": "https://vaultacloud.com/compare/vaultacloud-vs-dropbox",
    "author": { "@type": "Organization", "name": "VaultaCloud" },
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">Comparison</span>
            <h1 className="section-title mb-4">VaultaCloud vs Dropbox</h1>
            <p className="section-subtitle mx-auto">Dropbox charges per seat, per month, in USD — forever. VaultaCloud is a one-time purchase that works offline and lives on your own infrastructure.</p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href="/pricing" className="btn-primary">See VaultaCloud Pricing →</Link>
              <Link href="/docs/getting-started" className="btn-outline">Get Started Free</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            <div className="card-dark border-gold-500/30">
              <h3 className="font-display text-lg font-bold text-gold-400 mb-3">Choose VaultaCloud if:</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {['You want zero monthly subscription costs','Your team needs offline file access','You want data on your own infrastructure','You have a local office network (LAN)','You need white-label deployment','You store large files (CAD, video, images)'].map(i=><li key={i} className="flex gap-2"><span className="text-gold-400">✓</span>{i}</li>)}
              </ul>
            </div>
            <div className="card-dark border-blue-500/20">
              <h3 className="font-display text-lg font-bold text-sky-400 mb-3">Choose Dropbox if:</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {['You need 300k+ third-party app integrations','You want best-in-class native desktop apps','Your team is fully remote with stable internet','You rely on Dropbox Paper for lightweight docs','You need Dropbox Sign (eSignature)','Your existing tools are Dropbox-integrated'].map(i=><li key={i} className="flex gap-2"><span className="text-sky-400">→</span>{i}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">Feature-by-feature comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-navy-100">
              <table className="w-full text-sm">
                <thead><tr className="bg-navy-50 border-b border-navy-100">
                  <th className="text-left p-4 font-semibold text-navy-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-gold-600">VaultaCloud</th>
                  <th className="text-center p-4 font-semibold text-navy-900">Dropbox</th>
                </tr></thead>
                <tbody>
                  {rows.map(row=>(
                    <tr key={row.feature} className="border-b border-navy-50 last:border-0">
                      <td className="p-4 font-medium text-navy-800">{row.feature}</td>
                      <td className={`p-4 text-center text-sm ${row.winner==='vaulta'?'text-green-700 font-medium':'text-navy-600'}`}>{row.vaulta}</td>
                      <td className={`p-4 text-center text-sm ${row.winner==='dropbox'?'text-green-700 font-medium':'text-navy-600'}`}>{row.dropbox}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">Real scenarios — which fits?</h2>
            <div className="space-y-6">
              {scenarios.map(s=>(
                <div key={s.title} className="card">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-lg font-bold text-navy-900">{s.title}</h3>
                    <span className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${s.winner==='VaultaCloud'?'bg-gold-100 text-gold-700':'bg-blue-100 text-blue-700'}`}>{s.winner} wins</span>
                  </div>
                  <p className="text-navy-600/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">Common questions</h2>
            <div className="divide-y divide-navy-100">
              {faqs.map(f=>(
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-semibold text-navy-900 pr-4">{f.q}</span>
                    <span className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-navy-600/70 mt-3 leading-relaxed text-sm">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-navy-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-navy-600 mb-5 font-medium">Also compare VaultaCloud with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[['vs Google Drive','/compare/vaultacloud-vs-google-drive'],['vs Nextcloud','/compare/vaultacloud-vs-nextcloud'],['vs OneDrive','/compare/vaultacloud-vs-onedrive'],['vs Microsoft 365','/compare/vaultacloud-vs-microsoft-365']].map(([l,h])=>(
                <Link key={h} href={h} className="inline-flex items-center gap-2 bg-white border border-navy-200 hover:border-navy-400 rounded-full px-5 py-2 text-sm font-medium text-navy-700 transition-all">{l} →</Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
