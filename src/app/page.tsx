import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud — Private Cloud Storage for African Businesses',
  description: 'Your organization\'s private cloud. Online, offline, or inside your office network. VaultaCloud gives African businesses ownership, control, and access to their files — even without internet.',
  alternates: { canonical: 'https://vaultacloud.com' },
}

const features = [
  {
    icon: '🔌',
    title: 'Works Without Internet',
    desc: 'Your team keeps working during outages. Files sync automatically when the connection returns.',
  },
  {
    icon: '🏢',
    title: 'Office Network Deployment',
    desc: 'Deploy on your LAN so files move at full network speed — no data cap, no upload limits.',
  },
  {
    icon: '🔐',
    title: 'Private by Design',
    desc: 'Your data lives on your infrastructure. No third-party cloud vendor holds your business files.',
  },
  {
    icon: '👥',
    title: 'Team Permissions',
    desc: 'Granular access control by role, department, or project. Everyone sees exactly what they should.',
  },
  {
    icon: '🌍',
    title: 'Cloud Access Anywhere',
    desc: 'Optional cloud sync means your team in Lagos, Abuja, or Accra all reach the same files.',
  },
  {
    icon: '🏷️',
    title: 'White-Label Ready',
    desc: 'Resellers and IT consultants can deploy VaultaCloud under their own brand on a custom domain.',
  },
]

const useCases = [
  { icon: '⚖️', label: 'Law Firms', href: '/use-cases/law-firms' },
  { icon: '🏗️', label: 'Architecture & Engineering', href: '/use-cases/architecture' },
  { icon: '📊', label: 'Accounting Firms', href: '/use-cases/accounting' },
  { icon: '🏥', label: 'Healthcare', href: '/use-cases/healthcare' },
  { icon: '🏫', label: 'Schools & Universities', href: '/use-cases/education' },
  { icon: '🏛️', label: 'Government Offices', href: '/use-cases/government' },
  { icon: '📸', label: 'Media & Creative Agencies', href: '/use-cases/media' },
  { icon: '🏘️', label: 'Real Estate', href: '/use-cases/real-estate' },
]

const comparisons = [
  { name: 'Google Drive', href: '/compare/vaultacloud-vs-google-drive' },
  { name: 'Dropbox', href: '/compare/vaultacloud-vs-dropbox' },
  { name: 'Nextcloud', href: '/compare/vaultacloud-vs-nextcloud' },
  { name: 'OneDrive', href: '/compare/vaultacloud-vs-onedrive' },
  { name: 'Microsoft 365', href: '/compare/vaultacloud-vs-microsoft-365' },
]

const faqs = [
  {
    q: 'Does VaultaCloud work when there is no internet connection?',
    a: 'Yes. VaultaCloud is built offline-first. Your team can upload, access, share, and edit files on the local network without any internet connection. Files sync to the cloud automatically when connectivity is restored.',
  },
  {
    q: 'Where is my data stored?',
    a: 'You choose. VaultaCloud can be deployed on your own server (self-hosted), in your office network (LAN), or on a cloud server you control. We never store your business files on shared third-party infrastructure.',
  },
  {
    q: 'Is VaultaCloud suitable for businesses in Nigeria?',
    a: 'VaultaCloud was designed specifically for the infrastructure realities of African businesses — intermittent power, unreliable internet, and limited bandwidth. It performs excellently in Nigerian, Ghanaian, Kenyan, and South African business environments.',
  },
  {
    q: 'Can I use VaultaCloud as a reseller or IT consultant?',
    a: 'Yes. VaultaCloud supports white-label deployment with custom branding and custom domains. IT consultants across Africa deploy VaultaCloud for their clients under their own brand.',
  },
  {
    q: 'How is VaultaCloud different from Google Drive?',
    a: 'Google Drive requires a permanent internet connection and stores your data on Google\'s servers. VaultaCloud is private, works offline, can be deployed on your own infrastructure, and is designed for team environments with unreliable connectivity.',
  },
  {
    q: 'What is the pricing model?',
    a: 'VaultaCloud uses a one-time purchase model — no recurring monthly fees. You pay once and own the software. See our pricing page for details on team sizes and deployment options.',
  },
]

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VaultaCloud",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Linux, Windows Server",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "description": "One-time purchase pricing available — see pricing page"
    },
    "description": "Offline-first private cloud storage and file management for African businesses.",
    "url": "https://vaultacloud.com",
    "screenshot": "https://vaultacloud.com/screenshot.png",
    "featureList": [
      "Offline-first file access",
      "LAN/office network deployment",
      "Private cloud ownership",
      "Team permissions and access control",
      "White-label deployment",
      "Custom domains",
      "Secure file sharing",
      "WhatsApp integration"
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Nav />
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="bg-hero grid-bg relative overflow-hidden" aria-label="Hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
            <div className="inline-flex items-center gap-2 bg-navy-800/8 border border-navy-200 rounded-full px-4 py-1.5 mb-8 text-navy-700 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Now available for African businesses
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-navy-900 leading-none tracking-tight mb-6 max-w-5xl mx-auto">
              Your organization's{' '}
              <span className="text-gradient-gold">private cloud.</span>
            </h1>

            <p className="text-xl text-navy-600/80 max-w-2xl mx-auto mb-4 leading-relaxed">
              Online, offline, or inside your office network.
            </p>
            <p className="text-lg text-navy-600/60 max-w-xl mx-auto mb-10 leading-relaxed">
              VaultaCloud gives your team secure, fast access to business files — even when the internet goes down. Built for Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/docs/getting-started" className="btn-primary text-base px-8 py-4">
                Get Started — It's Free to Try →
              </Link>
              <Link href="/features" className="btn-outline text-base px-8 py-4">
                See All Features
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-navy-600/60">
              {['No monthly fees', 'Works offline', 'Self-hosted or cloud', 'White-label ready'].map(p => (
                <span key={p} className="flex items-center gap-1.5">
                  <span className="text-gold-500">✓</span> {p}
                </span>
              ))}
            </div>
          </div>

          {/* Fake dashboard preview */}
          <div className="max-w-5xl mx-auto px-4 pb-16">
            <div className="rounded-2xl bg-navy-900 border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-navy-800/50 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-white/30 text-xs font-mono">vaultacloud.company.local</span>
                <span className="ml-auto flex items-center gap-1.5 text-green-400 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Offline — LAN Active
                </span>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                {[
                  { name: 'Client Contracts', count: '24 files', color: 'bg-blue-500' },
                  { name: 'Project Drawings', count: '186 files', color: 'bg-gold-500' },
                  { name: 'Financial Reports', count: '62 files', color: 'bg-green-500' },
                  { name: 'HR Documents', count: '38 files', color: 'bg-purple-500' },
                  { name: 'Site Photos', count: '1,204 files', color: 'bg-red-500' },
                  { name: 'Shared Inbox', count: '14 files', color: 'bg-sky-500' },
                ].map(folder => (
                  <div key={folder.name} className="card-dark cursor-pointer hover:border-white/25 transition-colors">
                    <div className={`w-10 h-10 ${folder.color}/20 rounded-xl flex items-center justify-center mb-3`}>
                      <span className="text-lg">📁</span>
                    </div>
                    <p className="text-white text-sm font-medium leading-snug">{folder.name}</p>
                    <p className="text-white/40 text-xs mt-1">{folder.count}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM STATEMENT ─────────────────────────────── */}
        <section className="py-20 bg-navy-900 text-white" aria-label="Problem statement">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-label text-gold-400">The reality for African businesses</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Google Drive and Dropbox weren't built for your environment.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                They assume fast, always-on internet. They store your data on foreign servers. They charge monthly in dollars. And when your connection drops — your team stops working.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { stat: '40%+', label: 'of business hours can be lost to internet outages in emerging markets' },
                { stat: '$0', label: 'monthly fees — VaultaCloud is a one-time purchase' },
                { stat: '100%', label: 'of your data stays on infrastructure you own and control' },
              ].map(item => (
                <div key={item.stat} className="card-dark text-center p-8">
                  <p className="font-display text-5xl font-bold text-gradient-gold mb-3">{item.stat}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────── */}
        <section className="py-24 bg-white" aria-label="Features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label">Platform Features</span>
              <h2 className="section-title mb-4">Everything your team needs.<br />Nothing you don't.</h2>
              <p className="section-subtitle mx-auto">
                VaultaCloud is purpose-built for businesses where infrastructure is real — not assumed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(f => (
                <article key={f.title} className="card group">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">{f.title}</h3>
                  <p className="text-navy-600/70 text-sm leading-relaxed">{f.desc}</p>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/features" className="btn-outline">
                See All Features →
              </Link>
            </div>
          </div>
        </section>

        {/* ── USE CASES ─────────────────────────────────────── */}
        <section className="py-24 bg-navy-50/50" aria-label="Use cases">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">Industry Solutions</span>
              <h2 className="section-title mb-4">Built for how your industry works</h2>
              <p className="section-subtitle mx-auto">
                From law firms in Lagos to engineering offices in Nairobi — VaultaCloud adapts to your workflow.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {useCases.map(uc => (
                <Link key={uc.href} href={uc.href} className="card flex flex-col items-center text-center p-6 hover:border-navy-300 hover:shadow-md group">
                  <span className="text-3xl mb-3">{uc.icon}</span>
                  <span className="text-sm font-semibold text-navy-800 group-hover:text-navy-600 transition-colors">{uc.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────── */}
        <section className="py-24 bg-white" aria-label="How it works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label">How It Works</span>
              <h2 className="section-title mb-4">Up and running in minutes</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Deploy on your server or cloud',
                  desc: 'Install VaultaCloud on your office server, a local NAS device, or a cloud VPS you control. Full setup takes under 30 minutes with our guided installer.',
                },
                {
                  step: '02',
                  title: 'Connect your team',
                  desc: 'Invite your team members and assign roles. VaultaCloud handles permissions, departments, and shared folders automatically.',
                },
                {
                  step: '03',
                  title: 'Access files anywhere — even offline',
                  desc: 'On LAN, your team gets fast local file access. Over the internet, files sync securely. When the connection drops, cached files stay available.',
                },
              ].map(step => (
                <div key={step.step} className="flex gap-6 mb-10">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center font-mono text-gold-400 font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                    <p className="text-navy-600/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARE ──────────────────────────────────────── */}
        <section className="py-16 bg-navy-50/50" aria-label="Comparisons">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">Compare</span>
            <h2 className="section-title mb-4">See how VaultaCloud stacks up</h2>
            <p className="section-subtitle mx-auto mb-10">
              Not sure how VaultaCloud compares to what you're already using?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {comparisons.map(c => (
                <Link key={c.href} href={c.href} className="inline-flex items-center gap-2 bg-white border border-navy-200 hover:border-navy-400 rounded-full px-5 py-2.5 text-sm font-medium text-navy-700 hover:text-navy-900 transition-all">
                  VaultaCloud vs {c.name} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING CTA ──────────────────────────────────── */}
        <section className="py-20 bg-dark-hero relative overflow-hidden" aria-label="Pricing CTA">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="section-label text-gold-400">Pricing</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              One price. Yours forever.
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              No subscriptions. No per-seat monthly fees. Buy once, use forever. We believe African businesses shouldn't pay dollar-denominated recurring costs for file storage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-primary text-base px-8 py-4">
                View Pricing →
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-4">
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-24 bg-white" aria-label="FAQ">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label">FAQ</span>
              <h2 className="section-title mb-4">Common questions</h2>
            </div>
            <div className="divide-y divide-navy-100">
              {faqs.map(faq => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-semibold text-navy-900 pr-4">{faq.q}</span>
                    <span className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-navy-600/70 mt-3 leading-relaxed text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────── */}
        <section className="py-20 bg-navy-800 text-white text-center" aria-label="Final CTA">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Your files. Your infrastructure. Your control.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Join businesses across Africa who have moved to private cloud storage that actually works in their environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/getting-started" className="btn-primary text-base px-8 py-4">
                Get Started →
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-4">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
