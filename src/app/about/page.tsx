import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'About VaultaCloud — Built in Abuja, Built for Africa',
  description: 'VaultaCloud is a private cloud storage platform built in Abuja, Nigeria for African businesses. Our mission: give every African organization sovereign control over their files.',
  alternates: { canonical: 'https://vaultacloud.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-hero grid-bg py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-label">Our Story</span>
            <h1 className="section-title mb-6">
              Built in Abuja.<br />
              <span className="text-gradient-gold">Built for Africa.</span>
            </h1>
            <p className="text-xl text-navy-700 leading-relaxed max-w-3xl">
              VaultaCloud started with a single frustration: businesses in Nigeria were paying for cloud storage that stopped working every time NEPA took the light or the router glitched. We decided to fix that.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label text-gold-400">Our Mission</span>
                <h2 className="font-display text-3xl font-bold text-white mb-6">
                  Every African organization deserves sovereign control over its files.
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We believe that African businesses should not depend on foreign cloud servers to access their own documents. Every law firm, architecture practice, accounting firm, and SME deserves a file system that works on their terms — in their office, on their infrastructure, in their environment.
                </p>
                <p className="text-white/70 leading-relaxed">
                  VaultaCloud is our answer: private, offline-first, infrastructure-aware cloud storage that was designed from the ground up for the realities of doing business in Africa.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Mission', value: 'Give every African organization full control over their digital files.' },
                  { label: 'Vision', value: 'A future where African businesses never lose productivity to infrastructure failure.' },
                  { label: 'Values', value: 'Ownership. Reliability. Simplicity. Built for Africa, by Africans.' },
                ].map(item => (
                  <div key={item.label} className="card-dark">
                    <p className="text-gold-400 text-xs font-mono font-semibold tracking-widest uppercase mb-2">{item.label}</p>
                    <p className="text-white/80 leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why we built this */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-label">The Problem We Saw</span>
            <h2 className="section-title mb-8">Why existing solutions don't work for Africa</h2>
            <div className="prose-vc">
              <p>
                Google Drive, Dropbox, and Microsoft OneDrive are excellent products — for markets with fast, stable, affordable internet. They were designed by American companies, for American infrastructure, and priced in American dollars.
              </p>
              <p>
                African businesses face a different reality. Power outages interrupt workflows. Mobile data is expensive. International bandwidth is congested. Monthly dollar subscriptions drain foreign exchange. And your most sensitive client files live on servers in Oregon or Virginia, subject to foreign laws and foreign risk.
              </p>
              <p>
                We surveyed law firms in Lagos, engineering firms in Abuja, accounting practices in Accra, and schools in Nairobi. The problem was consistent: <strong>cloud storage that assumes the internet is always on is a liability, not an asset, in our environment.</strong>
              </p>
              <p>
                VaultaCloud was built to solve exactly this problem. Offline-first. LAN-deployable. One-time purchase. Private. Yours.
              </p>
            </div>
          </div>
        </section>

        {/* Team / Founder */}
        <section className="py-20 bg-navy-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-label">The Team</span>
            <h2 className="section-title mb-10">We've been in your shoes.</h2>
            <div className="card max-w-2xl">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-navy-800 rounded-2xl flex items-center justify-center text-gold-400 font-display font-bold text-xl flex-shrink-0">
                  N
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">Nimbe Oduware</h3>
                  <p className="text-gold-600 text-sm font-medium mb-3">Founder & CEO, VaultaCloud</p>
                  <p className="text-navy-600/70 leading-relaxed text-sm">
                    IT consultant and business software specialist based in Abuja, Nigeria. Previously worked on enterprise data protection research and Odoo ERP deployments for Nigerian businesses. VaultaCloud grew from a direct frustration with the tools available to African SMEs — and a conviction that we could build something better, here, for us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy-800 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold mb-4">Want to work with us?</h2>
            <p className="text-white/70 mb-8">We're looking for resellers, integration partners, and early enterprise customers across Africa.</p>
            <Link href="/contact" className="btn-primary">Get in Touch →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
