import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud Comparisons — vs Google Drive, Dropbox, Nextcloud & More',
  description: 'How does VaultaCloud compare to popular cloud storage tools? Detailed feature-by-feature comparisons built for African businesses.',
  alternates: { canonical: 'https://vaultacloud.com/compare' },
}

const comparisons = [
  {
    href: '/compare/vaultacloud-vs-google-drive',
    competitor: 'Google Drive',
    tagline: 'Google Drive requires internet. VaultaCloud works offline.',
    highlight: 'Offline-first vs always-on dependency',
    icon: '🟡',
  },
  {
    href: '/compare/vaultacloud-vs-dropbox',
    competitor: 'Dropbox',
    tagline: 'Dropbox charges monthly per seat. VaultaCloud is a one-time purchase.',
    highlight: 'One-time price vs recurring dollar fees',
    icon: '🔵',
  },
  {
    href: '/compare/vaultacloud-vs-nextcloud',
    competitor: 'Nextcloud',
    tagline: 'Both self-hosted — but VaultaCloud is built for African infrastructure.',
    highlight: 'Purpose-built for emerging markets',
    icon: '☁️',
  },
  {
    href: '/compare/vaultacloud-vs-onedrive',
    competitor: 'Microsoft OneDrive',
    tagline: 'OneDrive is Microsoft-hosted. VaultaCloud is yours.',
    highlight: 'Data sovereignty vs Microsoft cloud dependency',
    icon: '🔷',
  },
  {
    href: '/compare/vaultacloud-vs-microsoft-365',
    competitor: 'Microsoft 365',
    tagline: 'Microsoft 365 is a suite. VaultaCloud is focused, private, and affordable.',
    highlight: 'Focused file management vs full office suite',
    icon: '🟦',
  },
]

export default function ComparePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="section-label">Comparisons</span>
              <h1 className="section-title mb-4">How VaultaCloud stacks up</h1>
              <p className="section-subtitle mx-auto">
                Choosing the right file management platform for your African business is a big decision. See detailed, honest comparisons.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {comparisons.map(c => (
                <Link key={c.href} href={c.href} className="card hover:border-navy-300 group">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{c.icon}</span>
                    <div>
                      <h2 className="font-display text-lg font-bold text-navy-900 mb-1 group-hover:text-navy-700 transition-colors">
                        VaultaCloud vs {c.competitor}
                      </h2>
                      <p className="text-sm text-navy-600/70 mb-3">{c.tagline}</p>
                      <span className="inline-block text-xs font-semibold bg-gold-50 text-gold-700 px-3 py-1 rounded-full">
                        {c.highlight}
                      </span>
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
