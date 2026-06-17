import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud vs Nextcloud — Self-Hosted Cloud Storage Comparison',
  description: 'Both VaultaCloud and Nextcloud are self-hosted. See how they differ on setup complexity, offline-first architecture, African market fit, support, and pricing.',
  alternates: { canonical: 'https://vaultacloud.com/compare/vaultacloud-vs-nextcloud' },
}

const rows = [
  { feature: 'Self-hosted', vaulta: 'Yes', next: 'Yes', winner: 'tie' },
  { feature: 'Offline-first architecture', vaulta: 'Yes — core design principle', next: 'Partial — desktop client sync only', winner: 'vaulta' },
  { feature: 'LAN deployment', vaulta: 'Yes — optimized for LAN-first', next: 'Yes — possible but not LAN-optimized', winner: 'vaulta' },
  { feature: 'Setup difficulty', vaulta: 'Simple — 30-minute guided setup', next: 'Complex — PHP, Apache/Nginx, cron jobs', winner: 'vaulta' },
  { feature: 'Maintenance burden', vaulta: 'Low — minimal sysadmin needed', next: 'High — ongoing PHP/server maintenance', winner: 'vaulta' },
  { feature: 'African market optimization', vaulta: 'Yes — built specifically for Africa', next: 'No — built for European enterprise', winner: 'vaulta' },
  { feature: 'WhatsApp integration', vaulta: 'Yes — native', next: 'No', winner: 'vaulta' },
  { feature: 'White-label', vaulta: 'Yes — clean white-label', next: 'Theming available but complex', winner: 'vaulta' },
  { feature: 'One-time pricing', vaulta: 'Yes — $299 / $699 once', next: 'Free (self-hosted) / Enterprise paid', winner: 'tie' },
  { feature: 'Enterprise support', vaulta: 'Available on Enterprise plan', next: 'Nextcloud Enterprise subscription', winner: 'tie' },
  { feature: 'Plugin / app ecosystem', vaulta: 'Core integrations + REST API', next: 'Massive app store (200+ apps)', winner: 'next' },
  { feature: 'Collaborative editing', vaulta: 'Not included', next: 'Nextcloud Office (Collabora)', winner: 'next' },
  { feature: 'Calendar / Contacts', vaulta: 'Not included', next: 'Yes — full CalDAV/CardDAV', winner: 'next' },
  { feature: 'Video calls', vaulta: 'Not included', next: 'Nextcloud Talk', winner: 'next' },
  { feature: 'Open source', vaulta: 'No (proprietary)', next: 'Yes — AGPL licensed', winner: 'next' },
]

const faqs = [
  {
    q: 'Both are self-hosted — why would I choose VaultaCloud over free Nextcloud?',
    a: "Nextcloud is free software but has a real cost: setup time, PHP server configuration, ongoing maintenance, and the sysadmin knowledge to keep it running. For most African SMEs without dedicated IT staff, VaultaCloud's guided setup and lower maintenance burden is worth the license cost. If you have strong Linux and PHP expertise, Nextcloud is a powerful option.",
  },
  {
    q: 'Is VaultaCloud more reliable than Nextcloud in African environments?',
    a: "VaultaCloud was designed specifically for intermittent connectivity and LAN-first deployment in African markets. Nextcloud's offline capabilities depend on the desktop sync client and aren't optimized for environments where internet is the exception rather than the rule.",
  },
  {
    q: 'Can VaultaCloud do everything Nextcloud does?',
    a: "No. Nextcloud is a full productivity suite: files, calendar, contacts, email, video calls, collaborative documents. VaultaCloud is focused on file management and does it very well. If you need all of Nextcloud's features, Nextcloud may be the better fit — if you have the technical team to manage it.",
  },
  {
    q: 'Which is better for an IT consultant deploying for clients?',
    a: "VaultaCloud's white-label mode and simpler deployment make it better for most consultant deployments. Nextcloud requires PHP expertise to deploy and maintain at client sites. VaultaCloud's guided setup means consultants can deploy for clients with less time investment.",
  },
]

export default function VsNextcloudPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f=>({ "@type": "Question","name": f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}})) }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">Comparison</span>
            <h1 className="section-title mb-4">VaultaCloud vs Nextcloud</h1>
            <p className="section-subtitle mx-auto">Both are self-hosted. But VaultaCloud is purpose-built for African businesses — simpler setup, offline-first design, and built for teams without dedicated IT staff.</p>
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
                {["You don't have an in-house Linux/PHP sysadmin","You want 30-minute setup, not 3-day configuration","Your team needs reliable offline-first access","You want white-label for client deployments","African infrastructure optimization matters to you","You want a product built for your context"].map(i=><li key={i} className="flex gap-2"><span className="text-gold-400">✓</span>{i}</li>)}
              </ul>
            </div>
            <div className="card-dark border-sky-500/20">
              <h3 className="font-display text-lg font-bold text-sky-400 mb-3">Choose Nextcloud if:</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {["You have a dedicated IT team with PHP/Linux expertise","You need full productivity suite (calendar, contacts, calls)","You want open-source software with community support","You need real-time collaborative editing (Collabora/Office)","Budget allows only free software options","You require AGPL open-source compliance"].map(i=><li key={i} className="flex gap-2"><span className="text-sky-400">→</span>{i}</li>)}
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
                  <th className="text-center p-4 font-semibold text-navy-900">Nextcloud</th>
                </tr></thead>
                <tbody>
                  {rows.map(row=>(
                    <tr key={row.feature} className="border-b border-navy-50 last:border-0">
                      <td className="p-4 font-medium text-navy-800">{row.feature}</td>
                      <td className={`p-4 text-center text-sm ${row.winner==='vaulta'?'text-green-700 font-medium':'text-navy-600'}`}>{row.vaulta}</td>
                      <td className={`p-4 text-center text-sm ${row.winner==='next'?'text-green-700 font-medium':'text-navy-600'}`}>{row.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy-50/50">
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
      </main>
      <Footer />
    </>
  )
}
