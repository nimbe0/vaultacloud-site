import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud for Law Firms — Secure Legal Document Management in Africa',
  description: 'Private cloud storage for Nigerian and African law firms. Confidential client files, audit trails, offline access during court hearings, and data on your own infrastructure.',
  alternates: { canonical: 'https://vaultacloud.com/use-cases/law-firms' },
}

export default function LawFirmsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VaultaCloud for Law Firms",
    "description": "Private cloud storage for law firms in Africa — offline-first, audited, secure, and self-hosted.",
    "url": "https://vaultacloud.com/use-cases/law-firms",
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-label">Use Case</span>
            <div className="text-4xl mb-4">⚖️</div>
            <h1 className="section-title mb-4">VaultaCloud for Law Firms</h1>
            <p className="section-subtitle mb-8">Secure, private, offline-accessible document management for Nigerian and African legal practices. Client confidentiality isn't optional — your file storage shouldn't treat it as one.</p>
            <div className="flex gap-4">
              <Link href="/pricing" className="btn-primary">See Pricing →</Link>
              <Link href="/contact" className="btn-outline">Talk to Sales</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white text-center mb-8">The problems law firms face with standard cloud storage</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Client privilege at risk', desc: "Storing sensitive client communications on US-based servers subjects them to foreign subpoenas and data requests. Legal professional privilege doesn't cross jurisdictions the way your cloud storage does." },
                { title: 'No access during court weeks', desc: "When internet connectivity is disrupted — in court buildings, during site visits, or in areas with poor coverage — lawyers can't access case files. Google Drive and Dropbox become useless at the worst moments." },
                { title: 'No audit trail', desc: "Who accessed the client file? Who downloaded the contract? Who shared the sensitive document with a third party? Standard cloud tools don't give law firms the audit granularity their risk management requires." },
              ].map(p => (
                <div key={p.title} className="card-dark">
                  <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-label">How VaultaCloud Helps</span>
            <h2 className="section-title mb-10">Purpose-built for legal document workflows</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: '🔐', title: 'Data on your own infrastructure', desc: 'Client files never leave your jurisdiction. VaultaCloud deploys on a server in your office or a cloud VPS you control — subject to Nigerian law, not US or European cloud regulations.' },
                { icon: '🔌', title: 'Offline access for court hearings', desc: "Case files cached locally means your lawyers can access documents on a laptop in court, in transit, or in locations with no connectivity. Everything syncs when you're back online." },
                { icon: '📋', title: 'Complete audit trail', desc: 'Every file access, download, share, and modification is logged. Know exactly who touched each client document, when, and from where — critical for privilege and liability management.' },
                { icon: '👥', title: 'Matter-based folder permissions', desc: 'Organize files by client matter and restrict access by team assignment. A junior associate sees only their assigned matters. Partners see everything. Billing staff see invoices but not case files.' },
                { icon: '🔗', title: 'Secure client document sharing', desc: 'Share documents with clients via password-protected, expiring links — no need for email attachments. Links expire automatically after 7 days or a set number of downloads.' },
                { icon: '🗂️', title: 'Version history for all documents', desc: 'Every draft, every revision, every version of every contract, brief, and pleading is automatically saved. Restore any previous version with two clicks.' },
              ].map(f => (
                <div key={f.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-1">{f.icon}</span>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">{f.title}</h3>
                    <p className="text-navy-600/70 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-8">Recommended folder structure for law firms</h2>
            <div className="card font-mono text-sm text-navy-700 bg-navy-950 text-green-400 p-6 rounded-2xl">
              <pre>{`📁 Clients/
   📁 [Client Name]/
      📁 Matter - [Matter Name]/
         📁 Pleadings/
         📁 Correspondence/
         📁 Evidence/
         📁 Contracts/
         📁 Research/
📁 Internal/
   📁 HR/
   📁 Finance/
   📁 Firm Policies/
📁 Templates/
   📁 Contract Templates/
   📁 Court Filing Templates/`}</pre>
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy-800 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold mb-4">Client confidentiality deserves private infrastructure.</h2>
            <p className="text-white/70 mb-8">Talk to us about deploying VaultaCloud for your practice.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-primary">View Pricing →</Link>
              <Link href="/contact" className="btn-secondary">Schedule a Demo</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
