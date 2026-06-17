import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Pricing — One-Time Purchase, No Monthly Fees',
  description: 'VaultaCloud pricing: one-time purchase model for African businesses. No monthly subscriptions, no per-seat fees. Own your private cloud forever.',
  alternates: { canonical: 'https://vaultacloud.com/pricing' },
}

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: 'one-time',
    tagline: 'For small teams getting started with private cloud storage.',
    users: 'Up to 10 users',
    storage: '500 GB storage',
    highlight: false,
    features: [
      'Core file management',
      'Offline-first access',
      'LAN deployment',
      'Team permissions',
      'File versioning (30 days)',
      'Shared links',
      'Email notifications',
      'Standard support',
    ],
  },
  {
    name: 'Business',
    price: '$699',
    period: 'one-time',
    tagline: 'For growing businesses that need full control and more room.',
    users: 'Up to 50 users',
    storage: '2 TB storage',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Custom domain & SSL',
      'White-label mode',
      'Advanced permissions',
      'File versioning (1 year)',
      'Activity audit log',
      'WhatsApp file sharing',
      'REST API access',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    tagline: 'For large organizations, government, and multi-site deployments.',
    users: 'Unlimited users',
    storage: 'Unlimited storage',
    highlight: false,
    features: [
      'Everything in Business',
      'SSO / LDAP integration',
      'Multi-site deployment',
      'Dedicated onboarding',
      'SLA guarantee',
      'Custom integrations',
      'Reseller licensing',
      '24/7 priority support',
    ],
  },
]

const pricingFaqs = [
  {
    q: 'Is this really a one-time payment?',
    a: 'Yes. You pay once and own the software license forever. There are no monthly fees, no subscription renewals, and no per-user charges. Updates within the same major version are included free.',
  },
  {
    q: 'What happens after I purchase?',
    a: 'You receive a license key and download link immediately. Our documentation walks you through deployment step-by-step. Most teams are up and running within the same day.',
  },
  {
    q: 'Can I upgrade from Starter to Business later?',
    a: 'Yes. You pay the price difference when you upgrade — you\'re never charged the full price again.',
  },
  {
    q: 'Do you offer discounts for NGOs, schools, or government?',
    a: 'Yes. We offer significant discounts for non-profits, educational institutions, and government organizations across Africa. Contact us to discuss.',
  },
  {
    q: 'Is support included in the price?',
    a: 'Standard email support is included in Starter. Business includes priority support with faster response times. Enterprise includes 24/7 support with SLA.',
  },
  {
    q: 'Do you offer reseller or white-label licensing?',
    a: 'Yes. IT consultants and resellers can purchase white-label licenses to deploy VaultaCloud for clients under their own brand. Contact us for reseller pricing.',
  },
]

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "VaultaCloud",
    "description": "Offline-first private cloud storage for African businesses",
    "offers": plans.filter(p => p.price !== 'Custom').map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "price": plan.price.replace('$', ''),
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": plan.price.replace('$', ''),
        "priceCurrency": "USD",
        "unitText": "one-time"
      }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-hero grid-bg py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-label">Pricing</span>
            <h1 className="section-title mb-4">
              Pay once.{' '}
              <span className="text-gradient-gold">Own it forever.</span>
            </h1>
            <p className="section-subtitle mx-auto">
              No subscriptions. No monthly fees. No surprises. African businesses shouldn't pay dollar-denominated recurring costs just to access their own files.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map(plan => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border-2 p-8 relative ${
                    plan.highlight
                      ? 'border-gold-500 bg-navy-900 text-white shadow-2xl'
                      : 'border-navy-100 bg-white'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-6">
                    <h2 className={`font-display text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-navy-900'}`}>{plan.name}</h2>
                    <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/60' : 'text-navy-600/60'}`}>{plan.tagline}</p>
                    <div className="flex items-end gap-1 mb-1">
                      <span className={`font-display text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-navy-900'}`}>{plan.price}</span>
                      <span className={`text-sm mb-1.5 ${plan.highlight ? 'text-white/50' : 'text-navy-600/50'}`}>{plan.period}</span>
                    </div>
                    <p className={`text-sm font-medium ${plan.highlight ? 'text-gold-400' : 'text-navy-600'}`}>
                      {plan.users} · {plan.storage}
                    </p>
                  </div>

                  <Link
                    href={plan.price === 'Custom' ? '/contact' : '/docs/getting-started'}
                    className={plan.highlight ? 'btn-primary w-full justify-center mb-6' : 'btn-outline w-full justify-center mb-6'}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales →' : 'Get Started →'}
                  </Link>

                  <ul className="space-y-3">
                    {plan.features.map(f => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-white/80' : 'text-navy-700'}`}>
                        <span className="text-gold-500 flex-shrink-0 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Reseller note */}
            <div className="text-center mt-12 p-6 bg-navy-50 rounded-2xl max-w-2xl mx-auto">
              <p className="text-navy-700 font-semibold mb-2">🏪 Reseller & White-Label Licensing Available</p>
              <p className="text-sm text-navy-600/70">
                IT consultants across Africa deploy VaultaCloud for their clients under their own brand. Get reseller pricing with volume discounts.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1 text-sm text-navy-700 font-medium mt-3 hover:text-navy-900 underline underline-offset-2">
                Learn about reseller licensing →
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-navy-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">What's included in each plan</h2>
            <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-navy-100">
                    <th className="text-left p-4 font-semibold text-navy-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-navy-900">Starter</th>
                    <th className="text-center p-4 font-semibold text-navy-900 bg-navy-50">Business</th>
                    <th className="text-center p-4 font-semibold text-navy-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Offline-first access', true, true, true],
                    ['LAN deployment', true, true, true],
                    ['Users', '10', '50', 'Unlimited'],
                    ['Storage', '500 GB', '2 TB', 'Unlimited'],
                    ['File versioning', '30 days', '1 year', 'Unlimited'],
                    ['Custom domain & SSL', false, true, true],
                    ['White-label mode', false, true, true],
                    ['Activity audit log', false, true, true],
                    ['WhatsApp sharing', false, true, true],
                    ['REST API', false, true, true],
                    ['SSO / LDAP', false, false, true],
                    ['Multi-site deployment', false, false, true],
                    ['Reseller licensing', false, false, true],
                    ['Support', 'Standard', 'Priority', '24/7 SLA'],
                  ].map(([feature, ...vals]) => (
                    <tr key={feature as string} className="border-b border-navy-50 last:border-0">
                      <td className="p-4 text-navy-700">{feature as string}</td>
                      {vals.map((v, i) => (
                        <td key={i} className={`p-4 text-center ${i === 1 ? 'bg-navy-50/50' : ''}`}>
                          {v === true ? <span className="text-green-600">✓</span>
                            : v === false ? <span className="text-navy-300">—</span>
                            : <span className="text-navy-700 font-medium">{v as string}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-10">Pricing FAQ</h2>
            <div className="divide-y divide-navy-100">
              {pricingFaqs.map(faq => (
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
      </main>
      <Footer />
    </>
  )
}
