import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud vs Microsoft OneDrive — Private Cloud vs Microsoft Cloud',
  description: 'VaultaCloud vs OneDrive: self-hosted vs Microsoft servers, offline-first vs internet-dependent, one-time price vs monthly subscription. Which fits African businesses better?',
  alternates: { canonical: 'https://vaultacloud.com/compare/vaultacloud-vs-onedrive' },
}

const rows = [
  { feature: 'Data location', vaulta: 'Your own server / VPS', one: 'Microsoft Azure servers (US/EU)', winner: 'vaulta' },
  { feature: 'Offline access', vaulta: 'Full offline-first architecture', one: 'Sync-only (requires initial online setup)', winner: 'vaulta' },
  { feature: 'LAN deployment', vaulta: 'Yes — office network native', one: 'No', winner: 'vaulta' },
  { feature: 'Pricing', vaulta: 'One-time from $299', one: 'Included with Microsoft 365 ($6–$22/user/month)', winner: 'vaulta' },
  { feature: 'Custom domain', vaulta: 'Yes — files.yourcompany.com', one: 'No (uses Microsoft URLs)', winner: 'vaulta' },
  { feature: 'White-label', vaulta: 'Yes', one: 'No', winner: 'vaulta' },
  { feature: 'Microsoft Office integration', vaulta: 'Not included', one: 'Deep — native Word/Excel/Teams', winner: 'one' },
  { feature: 'Real-time co-authoring', vaulta: 'Not included', one: 'Yes — Word, Excel, PowerPoint', winner: 'one' },
  { feature: 'Admin portal', vaulta: 'VaultaCloud admin panel', one: 'Microsoft 365 Admin Center', winner: 'tie' },
  { feature: 'Windows integration', vaulta: 'Web access + sync', one: 'Native Windows Explorer integration', winner: 'one' },
  { feature: 'Data jurisdiction', vaulta: 'Your country / jurisdiction', one: 'Microsoft jurisdictions (US law applies)', winner: 'vaulta' },
  { feature: 'Storage included', vaulta: 'On your hardware — unlimited', one: '1 TB per user (shared with mailbox)', winner: 'vaulta' },
]

const faqs = [
  {
    q: 'If I already pay for Microsoft 365, do I need VaultaCloud?',
    a: "If your team already has OneDrive through Microsoft 365 and you're happy with cloud-only storage, you may not need VaultaCloud. However, if you need offline-first access, LAN deployment, data on your own infrastructure, or white-label deployment — VaultaCloud adds value Microsoft 365 doesn't provide.",
  },
  {
    q: 'Can VaultaCloud replace OneDrive for an organization already in the Microsoft ecosystem?',
    a: "For file storage, yes. For Office integration (real-time co-authoring in Word/Excel, Teams integration), VaultaCloud doesn't replicate these. Many organizations use VaultaCloud alongside Microsoft 365 — VaultaCloud for private file storage and collaboration, Microsoft for Office productivity.",
  },
  {
    q: 'Is OneDrive available and reliable in Nigeria?',
    a: "OneDrive is accessible in Nigeria but depends on internet connectivity entirely. During outages, files are unavailable. Performance for large file uploads and downloads is limited by Nigerian internet speeds to Microsoft's European or US servers.",
  },
  {
    q: 'What about SharePoint — is VaultaCloud a SharePoint alternative?',
    a: "For document organization and team file access — yes, VaultaCloud covers core SharePoint use cases. For enterprise intranet, workflow automation, or deep Microsoft Power Platform integration, SharePoint has capabilities VaultaCloud doesn't aim to replicate.",
  },
]

export default function VsOneDrivePage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f=>({ "@type": "Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">Comparison</span>
            <h1 className="section-title mb-4">VaultaCloud vs OneDrive</h1>
            <p className="section-subtitle mx-auto">OneDrive keeps your data on Microsoft's servers and requires internet. VaultaCloud puts data on your infrastructure, works offline, and costs a fraction of a Microsoft 365 subscription.</p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href="/pricing" className="btn-primary">See Pricing →</Link>
              <Link href="/docs/getting-started" className="btn-outline">Get Started</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            <div className="card-dark border-gold-500/30">
              <h3 className="font-display text-lg font-bold text-gold-400 mb-3">Choose VaultaCloud if:</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {["Your data must stay on your own infrastructure","Your team needs access during internet outages","You want office-network-speed file access","You don't need Microsoft Office in the cloud","You want to avoid ongoing Microsoft subscription costs","Data jurisdiction/sovereignty is a priority"].map(i=><li key={i} className="flex gap-2"><span className="text-gold-400">✓</span>{i}</li>)}
              </ul>
            </div>
            <div className="card-dark border-sky-500/20">
              <h3 className="font-display text-lg font-bold text-sky-400 mb-3">Choose OneDrive if:</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {["You're already paying for Microsoft 365","Your team relies on real-time Office co-authoring","You want native Windows Explorer file sync","You need deep Teams + SharePoint integration","You prefer Microsoft enterprise support","Your team uses Outlook and wants unified cloud"].map(i=><li key={i} className="flex gap-2"><span className="text-sky-400">→</span>{i}</li>)}
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
                  <th className="text-center p-4 font-semibold text-navy-900">Microsoft OneDrive</th>
                </tr></thead>
                <tbody>
                  {rows.map(row=>(
                    <tr key={row.feature} className="border-b border-navy-50 last:border-0">
                      <td className="p-4 font-medium text-navy-800">{row.feature}</td>
                      <td className={`p-4 text-center text-sm ${row.winner==='vaulta'?'text-green-700 font-medium':'text-navy-600'}`}>{row.vaulta}</td>
                      <td className={`p-4 text-center text-sm ${row.winner==='one'?'text-green-700 font-medium':'text-navy-600'}`}>{row.one}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-navy-600 mb-5 font-medium">Also compare VaultaCloud with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[['vs Google Drive','/compare/vaultacloud-vs-google-drive'],['vs Dropbox','/compare/vaultacloud-vs-dropbox'],['vs Nextcloud','/compare/vaultacloud-vs-nextcloud'],['vs Microsoft 365','/compare/vaultacloud-vs-microsoft-365']].map(([l,h])=>(
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
