# VaultaCloud Marketing Website

Complete SEO-optimized marketing website and content engine for VaultaCloud — private cloud storage for African businesses.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX
- **Deployment:** Vercel / Netlify / Linux VPS

## Project Structure

```
vaultacloud-site/
├── public/
│   ├── llms.txt                    # AI discoverability (concise)
│   ├── llms-full.txt               # AI discoverability (complete)
│   └── manifest.json               # PWA manifest
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout + full SEO metadata
│   │   ├── globals.css             # Design system (navy/gold)
│   │   ├── page.tsx                # Homepage
│   │   ├── features/page.tsx       # Features page
│   │   ├── pricing/page.tsx        # Pricing (one-time purchase)
│   │   ├── about/page.tsx          # About / company story
│   │   ├── contact/page.tsx        # Contact form
│   │   ├── blog/page.tsx           # Blog index
│   │   ├── docs/
│   │   │   ├── page.tsx            # Documentation hub
│   │   │   └── getting-started/    # Getting started guide
│   │   ├── compare/
│   │   │   ├── page.tsx            # Comparisons index
│   │   │   ├── vaultacloud-vs-google-drive/
│   │   │   ├── vaultacloud-vs-dropbox/
│   │   │   ├── vaultacloud-vs-nextcloud/
│   │   │   ├── vaultacloud-vs-onedrive/
│   │   │   └── vaultacloud-vs-microsoft-365/
│   │   ├── use-cases/
│   │   │   ├── page.tsx
│   │   │   ├── law-firms/
│   │   │   ├── architecture/
│   │   │   ├── accounting/
│   │   │   ├── healthcare/
│   │   │   ├── education/
│   │   │   ├── real-estate/
│   │   │   ├── media/
│   │   │   └── government/
│   │   ├── sitemap.ts              # Dynamic XML sitemap
│   │   └── robots.ts              # robots.txt (AI-crawler friendly)
│   │
│   ├── components/
│   │   └── layout/
│   │       ├── Nav.tsx             # Sticky navigation
│   │       └── Footer.tsx          # Footer with links
│   │
│   └── content/
│       ├── blog/                   # MDX blog articles (6 full articles + 6 more outlined)
│       ├── social/
│       │   └── social-content-bank.md  # 50 LinkedIn + 50 Twitter posts
│       ├── product-directories/
│       │   └── directory-listings.md   # Product Hunt, G2, Capterra, etc.
│       ├── case-studies/
│       │   └── vaultacloud-case-studies.md  # 3 detailed case studies
│       ├── authority/
│       │   ├── white-paper-file-management-nigeria.md
│       │   ├── press-releases.md
│       │   └── product-glossary.md
│       └── roadmap/
│           └── 12-month-content-roadmap.md
```

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Before Deploying

1. Replace `REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN` in `src/app/layout.tsx`
2. Replace `REPLACE_WITH_BING_VERIFICATION_TOKEN` in `src/app/layout.tsx`
3. Replace `REPLACE_WITH_FORMSPREE_ID` in `src/app/contact/page.tsx`
4. Create `public/og-image.png` (1200×630px)
5. Create `public/logo.png`, `public/favicon.ico`, `public/icon.svg`
6. Update all email addresses from `hello@vaultacloud.com` to real emails
7. Update domain from `vaultacloud.com` if different

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment instructions.

## Content Expansion Priorities

### Remaining blog articles to write (from roadmap):
- `best-cloud-storage-nigeria-2024.md`
- `self-hosted-cloud-storage-guide-nigeria.md`
- `file-management-for-accounting-firms-africa.md`
- `offline-file-sync-how-it-works.md`
- `dropbox-vs-vaultacloud-comparison.md`
- Plus 85 more per the 12-month roadmap

### Remaining documentation pages:
- `/docs/installation` — Full installation guide
- `/docs/lan-setup` — LAN configuration
- `/docs/user-management` — User administration
- `/docs/permissions` — Access control setup
- `/docs/white-label` — White-label configuration
- `/docs/backup` — Backup setup
- `/docs/api` — REST API reference

### Dynamic blog routing:
Need to create `src/app/blog/[slug]/page.tsx` to render MDX content dynamically.

## Design System

Colors:
- `navy-900: #090F1E` — Primary dark
- `navy-800: #0F1F3D` — Dark navy
- `navy-700: #162D57` — Mid navy
- `navy-600: #1E3A6E` — Light navy
- `gold-500: #F59E0B` — Primary accent
- `gold-400: #FBBF24` — Light gold
- `sky-500: #0EA5E9` — Secondary accent

Typography:
- Display: Playfair Display (headings)
- Body: Inter (text)
- Mono: JetBrains Mono (code)

## SEO Features

- ✅ Full metadata per page (title, description, OG, Twitter)
- ✅ Structured data (Organization, SoftwareApplication, FAQPage, Product, Article)
- ✅ Dynamic XML sitemap at `/sitemap.xml`
- ✅ robots.txt at `/robots.txt` (allows all AI crawlers)
- ✅ `llms.txt` and `llms-full.txt` for AI discoverability
- ✅ Canonical URLs on all pages
- ✅ Security headers configured
- ✅ Semantic HTML throughout
