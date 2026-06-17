import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud — Private Cloud Storage for African Businesses',
  description: 'Your organization\'s private cloud. Online, offline, or inside your office network. VaultaCloud gives African businesses secure file access — even without internet.',
  alternates: { canonical: 'https://vaultacloud.com' },
}

const features = [
  { icon: '🔌', title: 'Works Without Internet', desc: 'Your team keeps working during outages. Files sync automatically when the connection returns.' },
  { icon: '🏢', title: 'Office Network Deployment', desc: 'Deploy on your LAN so files move at full network speed — no data cap, no upload limits.' },
  { icon: '🔐', title: 'Private by Design', desc: 'Your data lives on your infrastructure. No third-party cloud vendor holds your business files.' },
  { icon: '👥', title: 'Team Permissions', desc: 'Granular access control by role, department, or project. Everyone sees exactly what they should.' },
  { icon: '🌍', title: 'Cloud Access Anywhere', desc: 'Optional cloud sync means your team in Lagos, Abuja, or Accra all reach the same files.' },
  { icon: '🏷️', title: 'White-Label Ready', desc: 'IT consultants can deploy VaultaCloud under their own brand on a custom domain.' },
]

const faqs = [
  { q: 'Does VaultaCloud work when there is no internet connection?', a: 'Yes. VaultaCloud is built offline-first. Your team can upload, access, share, and edit files on the local network without any internet connection. Files sync to the cloud automatically when connectivity is restored.' },
  { q: 'Where is my data stored?', a: 'You choose. VaultaCloud can be deployed on your own server, in your office network (LAN), or on a cloud server you control. We never store your business files on shared third-party infrastructure.' },
  { q: 'Is VaultaCloud suitable for businesses in Nigeria?', a: 'VaultaCloud was designed specifically for the infrastructure realities of African businesses — intermittent power, unreliable internet, and limited bandwidth.' },
  { q: 'Can I use VaultaCloud as a reseller or IT consultant?', a: 'Yes. VaultaCloud supports white-label deployment with custom branding and custom domains. IT consultants across Africa deploy VaultaCloud for their clients under their own brand.' },
  { q: 'What is the pricing model?', a: 'VaultaCloud uses a one-time purchase model — no recurring monthly fees. You pay once and own the software. Starter is $299, Business is $699.' },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>

        {/* HERO */}
        <section className="bg-hero grid-bg pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 mb-8 text-slate-600 text-sm font-medium bg-white/80">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Now available for African businesses
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
              Your organization&apos;s{' '}
              <span className="text-gradient-gold">private cloud.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-3 leading-relaxed">
              Online, offline, or inside your office network.
            </p>
            <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
              VaultaCloud gives your team secure, fast access to business files — even when the internet goes down. Built for Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Link href="/docs/getting-started" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base">
                Get Started — Free to Try →
              </Link>
              <Link href="/features" className="inline-flex items-center justify-center gap-2 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base">
                See All Features
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
              {['No monthly fees', 'Works offline', 'Self-hosted or cloud', 'White-label ready'].map(p => (
                <span key={p} className="flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">✓</span> {p}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="max-w-5xl mx-auto px-4 mt-16">
            <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 bg-slate-800 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-slate-400 text-xs font-mono">vault.company.local</span>
                <span className="ml-auto flex items-center gap-1.5 text-green-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Offline — LAN Active
                </span>
              </div>
              <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Client Contracts', count: '24 files', color: 'bg-blue-500' },
                  { name: 'Project Drawings', count: '186 files', color: 'bg-amber-500' },
                  { name: 'Financial Reports', count: '62 files', color: 'bg-green-500' },
                  { name: 'HR Documents', count: '38 files', color: 'bg-purple-500' },
                  { name: 'Site Photos', count: '1,204 files', color: 'bg-rose-500' },
                  { name: 'Shared Inbox', count: '14 files', color: 'bg-sky-500' },
                ].map(folder => (
                  <div key={folder.name} className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 cursor-pointer hover:border-slate-500 transition-colors">
                    <div className={`w-9 h-9 ${folder.color} bg-opacity-20 rounded-lg flex items-center justify-center mb-3 text-base`}>
                      📁
                    </div>
                    <p className="text-white text-sm font-medium leading-snug">{folder.name}</p>
                    <p className="text-slate-400 text-xs mt-1">{folder.count}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-amber-400 font-mono text-xs font-semibold tracking-widest uppercase mb-3">The reality for African businesses</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
                Google Drive wasn&apos;t built for your environment.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                It assumes fast, always-on internet. It stores your data on foreign servers. It charges monthly in dollars. And when your connection drops — your team stops.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { stat: '40%+', label: 'of business hours can be lost to internet outages in emerging markets' },
                { stat: '$0', label: 'monthly fees — VaultaCloud is a one-time purchase, no subscriptions' },
                { stat: '100%', label: 'of your data stays on infrastructure you own and control' },
              ].map(item => (
                <div key={item.stat} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
                  <p className="font-display text-5xl font-bold text-gradient-gold mb-3">{item.stat}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-amber-500 font-mono text-xs font-semibold tracking-widest uppercase mb-3">Platform Features</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Everything your team needs.<br />Nothing you don&apos;t.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Purpose-built for businesses where infrastructure is real — not assumed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(f => (
                <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-200 group">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/features" className="inline-flex items-center gap-2 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                See All Features →
              </Link>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-amber-500 font-mono text-xs font-semibold tracking-widest uppercase mb-3">Industry Solutions</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for how your industry works</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: '⚖️', label: 'Law Firms', href: '/use-cases/law-firms' },
                { icon: '🏗️', label: 'Architecture', href: '/use-cases/architecture' },
                { icon: '📊', label: 'Accounting', href: '/use-cases/accounting' },
                { icon: '🏥', label: 'Healthcare', href: '/use-cases/healthcare' },
                { icon: '🏫', label: 'Education', href: '/use-cases/education' },
                { icon: '🏛️', label: 'Government', href: '/use-cases/government' },
                { icon: '📸', label: 'Media', href: '/use-cases/media' },
                { icon: '🏘️', label: 'Real Estate', href: '/use-cases/real-estate' },
              ].map(uc => (
                <Link key={uc.href} href={uc.href} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:border-slate-300 hover:shadow-md transition-all group">
                  <span className="text-3xl mb-3">{uc.icon}</span>
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">{uc.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING CTA */}
        <section className="py-20 bg-dark-hero">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-amber-400 font-mono text-xs font-semibold tracking-widest uppercase mb-3">Pricing</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              One price. Yours forever.
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              No subscriptions. No per-seat monthly fees. Buy once, use forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg text-base">
                View Pricing →
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base">
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-amber-500 font-mono text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Common questions</h2>
            </div>
            <div className="divide-y divide-slate-100">
              {faqs.map(faq => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                    <span className="font-semibold text-slate-900">{faq.q}</span>
                    <span className="text-amber-500 text-xl flex-shrink-0 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-slate-500 mt-3 leading-relaxed text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-slate-900 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Your files. Your infrastructure. Your control.
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join businesses across Africa who have moved to private cloud storage that actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/getting-started" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base">
                Get Started →
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base">
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
