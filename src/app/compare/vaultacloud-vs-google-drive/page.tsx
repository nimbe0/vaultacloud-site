import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud vs Google Drive — Which Is Better for African Businesses?',
  description: 'Detailed comparison of VaultaCloud vs Google Drive for African businesses. Offline access, data ownership, LAN deployment, pricing, and more. See which fits your organization.',
  alternates: { canonical: 'https://vaultacloud.com/compare/vaultacloud-vs-google-drive' },
  openGraph: {
    title: 'VaultaCloud vs Google Drive — African Business Comparison',
    description: 'Google Drive requires constant internet and stores data on Google\'s servers. VaultaCloud works offline, on your LAN, and on infrastructure you own.',
  }
}

const comparisonRows = [
  { feature: 'Works without internet', vaulta: 'Yes — fully offline-first', google: 'No — requires internet connection', winner: 'vaulta' },
  { feature: 'LAN / office network access', vaulta: 'Yes — built-in LAN deployment', google: 'No', winner: 'vaulta' },
  { feature: 'Data ownership', vaulta: 'Your infrastructure, your data', google: 'Data stored on Google servers', winner: 'vaulta' },
  { feature: 'Monthly fees', vaulta: 'None — one-time purchase', google: 'Yes — per-user monthly fee in USD', winner: 'vaulta' },
  { feature: 'Storage pricing', vaulta: 'Included in license, on your hardware', google: 'Shared Google storage pool, pays monthly', winner: 'vaulta' },
  { feature: 'Custom domain', vaulta: 'Yes — files.yourcompany.com', google: 'No (Workspace uses Google domains)', winner: 'vaulta' },
  { feature: 'White-label', vaulta: 'Yes — full white-label available', google: 'No', winner: 'vaulta' },
  { feature: 'Self-hosted deployment', vaulta: 'Yes — on-premise or cloud VPS', google: 'No', winner: 'vaulta' },
  { feature: 'Team permissions', vaulta: 'Role-based, department-level', google: 'Basic folder sharing', winner: 'tie' },
  { feature: 'Real-time collaboration', vaulta: 'File access; not live doc editing', google: 'Full real-time doc editing (Docs/Sheets)', winner: 'google' },
  { feature: 'Mobile apps', vaulta: 'Web-responsive, PWA', google: 'Native iOS and Android apps', winner: 'google' },
  { feature: 'Integration ecosystem', vaulta: 'REST API, WhatsApp, webhooks', google: 'Vast Google Workspace ecosystem', winner: 'google' },
  { feature: 'AI features', vaulta: 'Roadmap', google: 'Gemini AI integration', winner: 'google' },
  { feature: 'GDPR / data residency', vaulta: 'Full control — data stays local', google: 'Limited — data on Google infrastructure', winner: 'vaulta' },
  { feature: 'Setup complexity', vaulta: 'Requires server setup (30 mins)', google: 'Instant — sign up and use', winner: 'google' },
]

const scenarios = [
  {
    title: 'The law firm in Victoria Island, Lagos',
    desc: 'The firm has 12 lawyers, 200+ client files, and a NEPA supply that cuts out twice a day. Google Drive becomes unusable during outages — lawyers can\'t access case files mid-brief. With VaultaCloud deployed on a local server, all files are accessible at LAN speed regardless of internet status. The firm pays once, owns the system, and never loses billing hours to Google\'s connectivity dependency.',
    winner: 'VaultaCloud',
  },
  {
    title: 'The startup team of 3 in Lekki',
    desc: 'A small tech startup needs shared docs, real-time editing on pitch decks, and integration with Google Workspace they already use. They have reliable fiber and small storage needs. Google Drive (or Google Workspace) is the right call — easy setup, familiar interface, and Gemini AI built in.',
    winner: 'Google Drive',
  },
  {
    title: 'The engineering firm with site offices',
    desc: 'A civil engineering company has offices in Abuja, Port Harcourt, and Lagos, with drawing files that are hundreds of MBs each. Uploading CAD files on Nigerian internet is slow and expensive. VaultaCloud deployed at each office and synced peer-to-peer gives fast local access and controlled cloud sync — dramatically cheaper than paying for the bandwidth and Google storage required.',
    winner: 'VaultaCloud',
  },
]

const faqs = [
  {
    q: 'Is VaultaCloud a Google Drive replacement?',
    a: 'VaultaCloud replaces Google Drive\'s core function — file storage, sharing, and team access — but does not replicate Google Docs or Sheets for real-time collaborative editing. If your team needs document storage, sharing, and access control (especially offline), VaultaCloud is a strong Google Drive alternative.',
  },
  {
    q: 'Can I migrate my files from Google Drive to VaultaCloud?',
    a: 'Yes. You can download your Google Drive files using Google Takeout and upload them to VaultaCloud. We\'re working on a direct migration tool for larger organizations.',
  },
  {
    q: 'Does VaultaCloud work in Nigeria?',
    a: 'Yes — VaultaCloud was designed specifically for Nigerian businesses. It works on LAN without internet, handles intermittent connectivity gracefully, and stores data on infrastructure you control.',
  },
  {
    q: 'How does pricing compare?',
    a: 'Google Drive (via Google Workspace) charges per user per month in USD — a recurring dollar cost. VaultaCloud is a one-time purchase. For a team of 20 over 3 years, VaultaCloud is typically 60-80% cheaper than equivalent Google Workspace storage.',
  },
]

export default function VsGoogleDrivePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "VaultaCloud vs Google Drive: Which Is Better for African Businesses?",
    "description": "Detailed feature-by-feature comparison of VaultaCloud and Google Drive for businesses in Africa and emerging markets.",
    "author": { "@type": "Organization", "name": "VaultaCloud" },
    "publisher": { "@type": "Organization", "name": "VaultaCloud", "logo": { "@type": "ImageObject", "url": "https://vaultacloud.com/logo.png" } },
    "url": "https://vaultacloud.com/compare/vaultacloud-vs-google-drive",
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
        {/* Hero */}
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">Comparison</span>
            <h1 className="section-title mb-4">
              VaultaCloud vs Google Drive
            </h1>
            <p className="section-subtitle mx-auto">
              Google Drive is built for always-on internet. VaultaCloud is built for the real world — where the connection cuts out, data lives on your servers, and you pay once.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href="/pricing" className="btn-primary">See VaultaCloud Pricing →</Link>
              <Link href="/docs/getting-started" className="btn-outline">Get Started Free</Link>
            </div>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-12 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-dark border-gold-500/30">
                <h3 className="font-display text-lg font-bold text-gold-400 mb-3">Choose VaultaCloud if:</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  {[
                    'Your team needs to work through internet outages',
                    'You want data stored on your own infrastructure',
                    'You have a local office network (LAN)',
                    'You want to avoid monthly USD subscription fees',
                    'You need white-label or custom domain deployment',
                    'You store large files (CAD, video, high-res images)',
                  ].map(i => <li key={i} className="flex gap-2"><span className="text-gold-400 flex-shrink-0">✓</span>{i}</li>)}
                </ul>
              </div>
              <div className="card-dark border-blue-500/20">
                <h3 className="font-display text-lg font-bold text-sky-400 mb-3">Choose Google Drive if:</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  {[
                    'You need real-time collaborative document editing',
                    'You rely heavily on Google Docs / Sheets / Slides',
                    'You have stable, fast internet connectivity',
                    'You want zero infrastructure to manage',
                    'You need deep Google Workspace integration',
                    'Your team is very small (1-3 people)',
                  ].map(i => <li key={i} className="flex gap-2"><span className="text-sky-400 flex-shrink-0">→</span>{i}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">Feature-by-feature comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-navy-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy-50 border-b border-navy-100">
                    <th className="text-left p-4 font-semibold text-navy-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-navy-900">
                      <span className="text-gold-600">VaultaCloud</span>
                    </th>
                    <th className="text-center p-4 font-semibold text-navy-900">Google Drive</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(row => (
                    <tr key={row.feature} className="border-b border-navy-50 last:border-0">
                      <td className="p-4 font-medium text-navy-800">{row.feature}</td>
                      <td className={`p-4 text-center text-sm ${row.winner === 'vaulta' ? 'text-green-700 font-medium' : 'text-navy-600'}`}>
                        {row.vaulta}
                      </td>
                      <td className={`p-4 text-center text-sm ${row.winner === 'google' ? 'text-green-700 font-medium' : 'text-navy-600'}`}>
                        {row.google}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Customer scenarios */}
        <section className="py-20 bg-navy-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">Real scenarios — which fits?</h2>
            <div className="space-y-6">
              {scenarios.map(s => (
                <div key={s.title} className="card">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-lg font-bold text-navy-900">{s.title}</h3>
                    <span className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${s.winner === 'VaultaCloud' ? 'bg-gold-100 text-gold-700' : 'bg-blue-100 text-blue-700'}`}>
                      {s.winner} wins
                    </span>
                  </div>
                  <p className="text-navy-600/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">Common questions</h2>
            <div className="divide-y divide-navy-100">
              {faqs.map(f => (
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

        {/* Other comparisons */}
        <section className="py-12 bg-navy-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-navy-600 mb-5 font-medium">Also compare VaultaCloud with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ['vs Dropbox', '/compare/vaultacloud-vs-dropbox'],
                ['vs Nextcloud', '/compare/vaultacloud-vs-nextcloud'],
                ['vs OneDrive', '/compare/vaultacloud-vs-onedrive'],
                ['vs Microsoft 365', '/compare/vaultacloud-vs-microsoft-365'],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="inline-flex items-center gap-2 bg-white border border-navy-200 hover:border-navy-400 rounded-full px-5 py-2 text-sm font-medium text-navy-700 transition-all">
                  {label} →
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
