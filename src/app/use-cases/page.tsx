import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Use Cases — VaultaCloud for Every Industry',
  description: 'See how VaultaCloud serves law firms, architecture offices, accounting practices, healthcare, schools, government, real estate, and media companies across Africa.',
  alternates: { canonical: 'https://vaultacloud.com/use-cases' },
}

const useCases = [
  { href: '/use-cases/law-firms', icon: '⚖️', title: 'Law Firms', desc: 'Confidential client files, case documents, and legal records — secure, offline-accessible, and audited.' },
  { href: '/use-cases/architecture', icon: '🏗️', title: 'Architecture & Engineering', desc: 'Large CAD files, project drawings, and site documents — LAN-fast, organized, and team-accessible.' },
  { href: '/use-cases/accounting', icon: '📊', title: 'Accounting Firms', desc: 'Client financials, tax records, and audit files — organized, access-controlled, and compliant.' },
  { href: '/use-cases/healthcare', icon: '🏥', title: 'Healthcare', desc: 'Patient records and clinical documents — private, secure, and available even during outages.' },
  { href: '/use-cases/education', icon: '🏫', title: 'Schools & Universities', desc: 'Teaching materials, student records, and admin documents — LAN-deployed per campus.' },
  { href: '/use-cases/real-estate', icon: '🏘️', title: 'Real Estate', desc: 'Property documents, contracts, and client files — organized, shareable, and searchable.' },
  { href: '/use-cases/media', icon: '📸', title: 'Media & Creative Agencies', desc: 'Large video, photo, and design files — LAN-speed access, organized by project.' },
  { href: '/use-cases/government', icon: '🏛️', title: 'Government Offices', desc: 'Sensitive public records, offline access during power instability, and data sovereignty.' },
]

export default function UseCasesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="section-label">Use Cases</span>
              <h1 className="section-title mb-4">Built for how your industry works</h1>
              <p className="section-subtitle mx-auto">VaultaCloud adapts to the workflows, file types, and access patterns of every industry. See how teams in your sector use it.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map(uc => (
                <Link key={uc.href} href={uc.href} className="card hover:border-navy-300 group">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-1">{uc.icon}</span>
                    <div>
                      <h2 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">{uc.title}</h2>
                      <p className="text-sm text-navy-600/70 leading-relaxed">{uc.desc}</p>
                      <span className="inline-flex items-center gap-1 text-gold-600 text-sm font-medium mt-3 group-hover:gap-2 transition-all">See how it works →</span>
                    </div>
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
