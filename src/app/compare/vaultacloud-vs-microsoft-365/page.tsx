import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud vs Microsoft 365 — Private File Storage vs Office Suite',
  description: 'VaultaCloud vs Microsoft 365 for African businesses: focused private file storage vs full productivity suite. Cost, offline access, data ownership, and fit comparison.',
  alternates: { canonical: 'https://vaultacloud.com/compare/vaultacloud-vs-microsoft-365' },
}

const rows = [
  { feature: 'Primary purpose', vaulta: 'Private file storage & management', ms: 'Full office productivity suite', winner: 'tie' },
  { feature: 'File storage (offline-first)', vaulta: 'Yes — core feature', ms: 'OneDrive included, not offline-first', winner: 'vaulta' },
  { feature: 'LAN deployment', vaulta: 'Yes', ms: 'No', winner: 'vaulta' },
  { feature: 'Data on your infrastructure', vaulta: 'Yes', ms: 'Microsoft Azure servers', winner: 'vaulta' },
  { feature: 'Pricing (20 users, 3 yrs)', vaulta: '$699 one-time', ms: '$4,320–$15,840', winner: 'vaulta' },
  { feature: 'Word / Excel / PowerPoint', vaulta: 'Not included', ms: 'Full Office suite included', winner: 'ms' },
  { feature: 'Business email (Exchange)', vaulta: 'Not included', ms: 'Outlook + Exchange included', winner: 'ms' },
  { feature: 'Video meetings', vaulta: 'Not included', ms: 'Microsoft Teams included', winner: 'ms' },
  { feature: 'White-label file portal', vaulta: 'Yes', ms: 'No', winner: 'vaulta' },
  { feature: 'Custom domain', vaulta: 'Yes', ms: 'For email only', winner: 'vaulta' },
  { feature: 'Security & compliance', vaulta: 'Encryption + audit log + 2FA', ms: 'Enterprise-grade Microsoft compliance', winner: 'ms' },
  { feature: 'Storage capacity', vaulta: 'Your hardware (unlimited)', ms: '1 TB/user (cloud)', winner: 'tie' },
]

const faqs = [
  {
    q: 'Should I choose VaultaCloud or Microsoft 365 for my Nigerian business?',
    a: "They serve different primary needs. Microsoft 365 is an office productivity suite that includes file storage (OneDrive). VaultaCloud is private cloud file storage that doesn't include office productivity tools. Many organizations use both: VaultaCloud for private file infrastructure, and free or web-based tools for document editing.",
  },
  {
    q: "Can VaultaCloud replace Microsoft 365's file storage component?",
    a: "Yes — VaultaCloud can replace OneDrive/SharePoint for file organization and access. It cannot replace Word, Excel, Teams, or Outlook. If you need those tools, you'll still need Microsoft 365. However, you may be able to use a lower Microsoft 365 tier (or free web versions) combined with VaultaCloud for storage.",
  },
  {
    q: 'What is the total cost difference?',
    a: "Microsoft 365 Business Basic costs $6/user/month. For 20 users over 3 years that's $4,320 — just for the entry tier. Microsoft 365 Business Standard is $12.50/user/month, which is $9,000 for 20 users over 3 years. VaultaCloud Business is $699 once. The savings are substantial.",
  },
  {
    q: 'Is Microsoft 365 reliable in African markets?',
    a: "Microsoft 365 requires internet and is affected by connectivity issues. Microsoft has data centers closer to Africa than Google (including in South Africa), but Nigerian and West African users still face latency and outage exposure when the connection drops. VaultaCloud's offline-first design eliminates this dependency.",
  },
]

export default function VsMicrosoft365Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f=>({ "@type": "Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">Comparison</span>
            <h1 className="section-title mb-4">VaultaCloud vs Microsoft 365</h1>
            <p className="section-subtitle mx-auto">Microsoft 365 is a full office suite with cloud storage included. VaultaCloud is focused private cloud file storage. They're not direct replacements — here's how to think about both.</p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href="/pricing" className="btn-primary">See VaultaCloud Pricing →</Link>
              <Link href="/docs/getting-started" className="btn-outline">Get Started</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            <div className="card-dark border-gold-500/30">
              <h3 className="font-display text-lg font-bold text-gold-400 mb-3">Choose VaultaCloud if:</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {["You need private, offline-accessible file storage","You want data on your own infrastructure","You don't need a full Microsoft Office suite","You want one-time pricing instead of monthly USD fees","You need white-label or custom domain deployment","You have LAN file sharing needs"].map(i=><li key={i} className="flex gap-2"><span className="text-gold-400">✓</span>{i}</li>)}
              </ul>
            </div>
            <div className="card-dark border-sky-500/20">
              <h3 className="font-display text-lg font-bold text-sky-400 mb-3">Choose Microsoft 365 if:</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {["You need Word, Excel, PowerPoint in the cloud","Your team requires Outlook email and calendar","You use Microsoft Teams for internal communication","You need enterprise compliance and security features","You want everything in one Microsoft ecosystem","You already have Microsoft licensing agreements"].map(i=><li key={i} className="flex gap-2"><span className="text-sky-400">→</span>{i}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">Feature comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-navy-100">
              <table className="w-full text-sm">
                <thead><tr className="bg-navy-50 border-b border-navy-100">
                  <th className="text-left p-4 font-semibold text-navy-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-gold-600">VaultaCloud</th>
                  <th className="text-center p-4 font-semibold text-navy-900">Microsoft 365</th>
                </tr></thead>
                <tbody>
                  {rows.map(row=>(
                    <tr key={row.feature} className="border-b border-navy-50 last:border-0">
                      <td className="p-4 font-medium text-navy-800">{row.feature}</td>
                      <td className={`p-4 text-center text-sm ${row.winner==='vaulta'?'text-green-700 font-medium':'text-navy-600'}`}>{row.vaulta}</td>
                      <td className={`p-4 text-center text-sm ${row.winner==='ms'?'text-green-700 font-medium':'text-navy-600'}`}>{row.ms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-navy-500 mt-4">Note: VaultaCloud and Microsoft 365 are not direct substitutes. Many organizations use both — VaultaCloud for private file infrastructure, Microsoft for office productivity.</p>
          </div>
        </section>

        <section className="py-20 bg-navy-50/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">FAQ</h2>
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
      </main>
      <Footer />
    </>
  )
}
