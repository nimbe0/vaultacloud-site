'use client'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/compare', label: 'Compare' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <span className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-amber-400 text-sm font-mono font-bold">V</span>
            </span>
            <span>Vaulta<span className="text-amber-500">Cloud</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200">
              Contact Sales
            </Link>
            <Link href="/docs/getting-started" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200">
              Get Started →
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-700" aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-slate-600 hover:text-slate-900 font-medium" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                <Link href="/contact" className="border-2 border-slate-800 text-slate-800 font-semibold px-4 py-2 rounded-lg text-sm text-center" onClick={() => setOpen(false)}>Contact Sales</Link>
                <Link href="/docs/getting-started" className="bg-amber-500 text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm text-center" onClick={() => setOpen(false)}>Get Started →</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
