# VaultaCloud Site — Deployment Guide

## Overview

The VaultaCloud marketing site is a Next.js 14 application with TypeScript, Tailwind CSS, and MDX content. This guide covers deployment to Vercel (recommended), Netlify, and a custom Linux server.

---

## Pre-Deployment Checklist

### Required setup before deploying:

**1. Google Search Console verification**
- Go to search.google.com/search-console
- Add property: `https://vaultacloud.com`
- Download HTML verification file OR copy the meta tag value
- Replace `REPLACE_WITH_GOOGLE_VERIFICATION_TOKEN` in `src/app/layout.tsx`

**2. Bing Webmaster Tools**
- Go to bing.com/webmasters
- Add your site
- Copy the BingBot verification code
- Replace `REPLACE_WITH_BING_VERIFICATION_TOKEN` in `src/app/layout.tsx`

**3. Contact form (Formspree)**
- Create account at formspree.io
- Create a new form
- Copy your form ID (looks like `xrgpejkq`)
- Replace `REPLACE_WITH_FORMSPREE_ID` in `src/app/contact/page.tsx`

**4. Create OG image**
- Create a 1200×630 PNG at `public/og-image.png`
- Should show VaultaCloud logo + tagline on navy background
- Tool: Figma, Canva, or similar

**5. Create logo files**
- `public/logo.png` — main logo (any size, will be displayed at various sizes)
- `public/icon.svg` — SVG favicon
- `public/favicon.ico` — ICO favicon (can convert from PNG)
- `public/apple-touch-icon.png` — 180×180 PNG for iOS
- `public/icon-192.png` — 192×192 PNG for PWA
- `public/icon-512.png` — 512×512 PNG for PWA

**6. Update URLs and contact info**
- Search for `vaultacloud.com` and update if using a different domain
- Search for `hello@vaultacloud.com` and update with real emails
- Search for `@vaultacloud` (Twitter) and update if handle differs

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest deployment option for Next.js with automatic HTTPS, CDN, and zero-config.

### Step 1: Push to GitHub
```bash
cd /home/claude/vaultacloud-site
git init
git add .
git commit -m "Initial VaultaCloud site"
git remote add origin https://github.com/YOUR_USERNAME/vaultacloud-site.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to vercel.com and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel detects Next.js automatically
5. Click "Deploy"

### Step 3: Configure Custom Domain
1. In Vercel dashboard → Project → Settings → Domains
2. Add `vaultacloud.com` and `www.vaultacloud.com`
3. Follow Vercel's instructions to update your domain's DNS records

### Step 4: Environment Variables (if needed)
In Vercel → Project → Settings → Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://vaultacloud.com
```

### Vercel Deployment Notes
- Automatic deploys on every `git push` to `main`
- Preview deployments on every pull request
- Built-in analytics available on Vercel Pro
- Free tier covers most marketing site traffic volumes

---

## Option 2: Deploy to Netlify

### Step 1: Build Configuration
Create `netlify.toml` in project root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Step 3: Custom Domain
1. Netlify Dashboard → Domain Management → Add custom domain
2. Follow DNS configuration instructions

---

## Option 3: Deploy to Linux Server (VPS)

For deployment on a DigitalOcean, Hetzner, or local server.

### Requirements
- Ubuntu 20.04+ or Debian 11+
- Node.js 18+
- Nginx
- PM2 (process manager)
- Certbot (SSL)

### Step 1: Install Dependencies
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 and Nginx
sudo npm install -g pm2
sudo apt install -y nginx certbot python3-certbot-nginx
```

### Step 2: Upload and Build
```bash
# Upload your project (or clone from Git)
git clone https://github.com/YOUR_USERNAME/vaultacloud-site.git
cd vaultacloud-site

# Install dependencies and build
npm install
npm run build

# Start with PM2
pm2 start npm --name "vaultacloud-site" -- start
pm2 startup && pm2 save
```

### Step 3: Configure Nginx
```nginx
# /etc/nginx/sites-available/vaultacloud
server {
    listen 80;
    server_name vaultacloud.com www.vaultacloud.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site and get SSL
sudo ln -s /etc/nginx/sites-available/vaultacloud /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d vaultacloud.com -d www.vaultacloud.com
```

### Step 4: Updates
```bash
git pull origin main
npm run build
pm2 restart vaultacloud-site
```

---

## Post-Deployment Steps

### 1. Submit Sitemap to Search Engines
- Google Search Console: Add property → Sitemaps → Submit `https://vaultacloud.com/sitemap.xml`
- Bing Webmaster Tools: Submit sitemap URL
- Also ping directly: `https://www.google.com/ping?sitemap=https://vaultacloud.com/sitemap.xml`

### 2. Verify Core SEO
Run these checks after deployment:

```bash
# Check robots.txt is accessible
curl https://vaultacloud.com/robots.txt

# Check sitemap
curl https://vaultacloud.com/sitemap.xml

# Check llms.txt (AI discovery)
curl https://vaultacloud.com/llms.txt

# Check structured data
# Go to: https://search.google.com/test/rich-results
# Enter: https://vaultacloud.com
```

### 3. Set Up Google Analytics (Optional but Recommended)
Add to `src/app/layout.tsx` before `</head>`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX" />
<script dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
` }} />
```

### 4. Test Page Speed
- Google PageSpeed Insights: pagespeed.web.dev
- GTmetrix: gtmetrix.com
- Core Web Vitals: Target LCP < 2.5s, FID < 100ms, CLS < 0.1

### 5. Submit to Product Directories
Using the content in `src/content/product-directories/directory-listings.md`:
- Product Hunt: producthunt.com/posts/new
- AlternativeTo: alternativeto.net/software/add
- G2: g2.com/products (vendor registration required)
- Capterra: capterra.com/vendors/sign-up
- SaaSHub: saashub.com (submit via their form)
- SourceForge: sourceforge.net/p/forge/site-support/submit

### 6. Configure Monitoring
- UptimeRobot (free): monitor site availability
- Sentry: error tracking (free tier available)
- Vercel Analytics or Plausible: privacy-respecting analytics

---

## Content Management

### Publishing Blog Articles
Blog articles are MDX files in `src/content/blog/`. To publish:

1. Create `src/content/blog/your-article-slug.md`
2. Add frontmatter:
```markdown
---
title: "Article Title"
description: "Meta description (150-160 chars)"
category: "Category Name"
date: "2025-01-15"
readTime: "8 min read"
keywords: ["keyword one", "keyword two"]
---
```
3. Add the slug to `src/app/sitemap.ts`
4. Add the article metadata to `src/app/blog/page.tsx` articles array
5. Deploy

### Adding New Pages
All pages use Next.js App Router. Create `src/app/new-page/page.tsx` with:
- `export const metadata` for SEO
- Navigation via `<Nav />` and `<Footer />` components
- Standard section structure

---

## Environment Setup (Local Development)

```bash
# Clone project
git clone <your-repo-url>
cd vaultacloud-site

# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start
```

---

## Troubleshooting

**Build fails on Google Fonts:** Next.js fetches Google Fonts at build time. Ensure the build server has internet access.

**Tailwind classes not applying:** Check `tailwind.config.ts` content paths include all your file locations.

**MDX not rendering:** Ensure `@next/mdx` is properly configured in `next.config.js`.

**Sitemap returns 404:** Verify `src/app/sitemap.ts` exists and exports a default function.

**TypeScript errors:** Run `npx tsc --noEmit` to check for type errors before deploying.

---

## Domain DNS Configuration

Once deployed to Vercel or your server, configure your domain registrar:

**For Vercel:**
```
Type: A     Name: @    Value: 76.76.21.21
Type: CNAME Name: www  Value: cname.vercel-dns.com
```

**For custom server:**
```
Type: A     Name: @    Value: YOUR_SERVER_IP
Type: A     Name: www  Value: YOUR_SERVER_IP
```

**For Cloudflare (if using Cloudflare DNS — recommended for Nigerian traffic):**
- Set Cloudflare proxy (orange cloud) to ✓ enabled for performance and DDoS protection
- SSL/TLS mode: Full (strict) if using Let's Encrypt on origin

---

*Deployment guide version 1.0 — January 2025*
