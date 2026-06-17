import Link from 'next/link'

const footerLinks = {
  Product: [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/docs/getting-started', label: 'Getting Started' },
    { href: '/docs', label: 'Documentation' },
  ],
  Compare: [
    { href: '/compare/vaultacloud-vs-google-drive', label: 'vs Google Drive' },
    { href: '/compare/vaultacloud-vs-dropbox', label: 'vs Dropbox' },
    { href: '/compare/vaultacloud-vs-nextcloud', label: 'vs Nextcloud' },
    { href: '/compare/vaultacloud-vs-onedrive', label: 'vs OneDrive' },
    { href: '/compare/vaultacloud-vs-microsoft-365', label: 'vs Microsoft 365' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-amber-400 text-sm font-mono font-bold">V</span>
              </span>
              Vaulta<span className="text-amber-500">Cloud</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Your organization&apos;s private cloud. Online, offline, or inside your office network. Built for Africa.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/vaultacloud" aria-label="Twitter" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com/company/vaultacloud" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-white font-semibold text-sm mb-4">{group}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} VaultaCloud. All rights reserved. Built in Abuja, Nigeria 🇳🇬</p>
          <p>Private Cloud Storage for African Businesses</p>
        </div>
      </div>
    </footer>
  )
}
