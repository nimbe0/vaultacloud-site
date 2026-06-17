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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-navy-900">
            <span className="w-8 h-8 bg-navy-800 rounded-lg flex items-center justify-center">
              <span className="text-gold-400 text-sm font-mono font-bold">V</span>
            </span>
            Vaulta<span className="text-gold-500">Cloud</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link text-sm">
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-outline text-sm px-4 py-2">
              Contact Sales
            </Link>
            <Link href="/docs/getting-started" className="btn-primary text-sm px-4 py-2">
              Get Started →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-navy-700"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" style={{ transform: open ? 'rotate(45deg) translate(1px, 6px)' : 'none' }} />
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" style={{ opacity: open ? 0 : 1 }} />
            <div className="w-5 h-0.5 bg-current transition-all" style={{ transform: open ? 'rotate(-45deg) translate(1px, -6px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-navy-100 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-navy-100">
                <Link href="/contact" className="btn-outline text-sm text-center" onClick={() => setOpen(false)}>Contact Sales</Link>
                <Link href="/docs/getting-started" className="btn-primary text-sm text-center" onClick={() => setOpen(false)}>Get Started →</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
