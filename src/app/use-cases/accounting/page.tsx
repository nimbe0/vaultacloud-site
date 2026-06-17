import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'VaultaCloud for accounting | VaultaCloud',
  alternates: { canonical: 'https://vaultacloud.com/use-cases/accounting' },
}

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-hero grid-bg py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label">Use Case</span>
            <h1 className="section-title mb-4">VaultaCloud for accounting</h1>
            <p className="section-subtitle mx-auto mb-8">
              Private, offline-first file storage designed for your industry.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/pricing" className="btn-primary">See Pricing →</Link>
              <Link href="/contact" className="btn-outline">Contact Sales</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
