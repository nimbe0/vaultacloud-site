import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://vaultacloud.com'),
  title: {
    default: 'VaultaCloud — Private Cloud Storage for African Businesses',
    template: '%s | VaultaCloud',
  },
  description: 'VaultaCloud is an offline-first private cloud storage and file management platform built for businesses in Africa and emerging markets. Works on LAN, offline, and in the cloud.',
  keywords: [
    'private cloud storage Africa',
    'offline file management Nigeria',
    'cloud storage for African businesses',
    'self-hosted cloud storage',
    'file sharing offline-first',
    'Google Drive alternative Africa',
    'Dropbox alternative Nigeria',
    'private cloud Nigeria',
    'business file management Africa',
    'document management emerging markets',
  ],
  authors: [{ name: 'VaultaCloud', url: 'https://vaultacloud.com' }],
  creator: 'VaultaCloud',
  publisher: 'VaultaCloud',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    alternateLocale: ['en_US', 'en_GB'],
    url: 'https://vaultacloud.com',
    siteName: 'VaultaCloud',
    title: 'VaultaCloud — Private Cloud Storage for African Businesses',
    description: "Your organization's private cloud. Online, offline, or inside your office network. Built for Africa.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VaultaCloud — Private Cloud Storage for African Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vaultacloud',
    creator: '@vaultacloud',
    title: 'VaultaCloud — Private Cloud Storage for African Businesses',
    description: "Your organization's private cloud. Online, offline, or inside your office network.",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://vaultacloud.com',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN',
    other: {
      'msvalidate.01': 'REPLACE_WITH_BING_VERIFICATION_TOKEN',
    },
  },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VaultaCloud",
  "url": "https://vaultacloud.com",
  "logo": "https://vaultacloud.com/logo.png",
  "description": "Private cloud storage and file management platform for African businesses and emerging markets.",
  "foundingDate": "2024",
  "areaServed": ["NG", "GH", "KE", "ZA", "UG", "TZ", "RW", "CM", "SN"],
  "sameAs": [
    "https://twitter.com/vaultacloud",
    "https://linkedin.com/company/vaultacloud",
    "https://github.com/vaultacloud"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "hello@vaultacloud.com",
    "availableLanguage": "English"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-body bg-white text-navy-900 antialiased">
        {children}
      </body>
    </html>
  )
}
