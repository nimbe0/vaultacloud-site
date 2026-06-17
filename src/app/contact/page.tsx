import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Contact VaultaCloud — Sales, Support & Partnerships',
  description: 'Get in touch with the VaultaCloud team. Sales inquiries, reseller partnerships, technical support, or enterprise deployments.',
  alternates: { canonical: 'https://vaultacloud.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-label">Contact Us</span>
              <h1 className="section-title mb-4">Talk to our team</h1>
              <p className="section-subtitle mx-auto">
                Whether you're evaluating VaultaCloud for your organization, interested in reselling, or need enterprise support — we're here.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact form */}
              <div className="card">
                <h2 className="font-display text-xl font-bold text-navy-900 mb-6">Send us a message</h2>
                <form
                  action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Emeka Johnson"
                      className="w-full border border-navy-200 rounded-lg px-4 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="emeka@company.com"
                      className="w-full border border-navy-200 rounded-lg px-4 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Johnson & Associates"
                      className="w-full border border-navy-200 rounded-lg px-4 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">What can we help with?</label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full border border-navy-200 rounded-lg px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                    >
                      <option value="">Select a topic</option>
                      <option value="sales">Sales inquiry / Pricing</option>
                      <option value="demo">Request a demo</option>
                      <option value="reseller">Reseller / White-label</option>
                      <option value="enterprise">Enterprise deployment</option>
                      <option value="support">Technical support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your organization and what you're looking for..."
                      className="w-full border border-navy-200 rounded-lg px-4 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message →
                  </button>
                </form>
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-semibold text-navy-900 mb-2">📧 Email Us</h3>
                  <a href="mailto:hello@vaultacloud.com" className="text-sky-600 hover:text-sky-700 transition-colors">hello@vaultacloud.com</a>
                  <p className="text-sm text-navy-600/60 mt-1">We reply within 1 business day.</p>
                </div>
                <div className="card">
                  <h3 className="font-semibold text-navy-900 mb-2">🏢 Based In</h3>
                  <p className="text-navy-700">Abuja, Nigeria 🇳🇬</p>
                  <p className="text-sm text-navy-600/60 mt-1">Serving businesses across Africa and emerging markets.</p>
                </div>
                <div className="card">
                  <h3 className="font-semibold text-navy-900 mb-3">Common inquiries</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      ['Sales & pricing', 'hello@vaultacloud.com'],
                      ['Reseller licensing', 'reseller@vaultacloud.com'],
                      ['Technical support', 'support@vaultacloud.com'],
                      ['Press inquiries', 'press@vaultacloud.com'],
                    ].map(([label, email]) => (
                      <li key={label} className="flex items-center justify-between">
                        <span className="text-navy-700">{label}</span>
                        <a href={`mailto:${email}`} className="text-sky-600 hover:text-sky-700 transition-colors">{email}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card bg-navy-50/50">
                  <p className="text-sm text-navy-700">
                    <strong>Looking for documentation?</strong><br />
                    Our <a href="/docs" className="text-sky-600 hover:underline">documentation hub</a> covers installation, configuration, and user guides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
