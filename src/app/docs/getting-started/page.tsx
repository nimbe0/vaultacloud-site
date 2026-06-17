import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Getting Started with VaultaCloud — Quick Start Guide',
  description: 'Get VaultaCloud running in 30 minutes. Step-by-step guide for installation, first login, and deploying your private cloud for your team.',
  alternates: { canonical: 'https://vaultacloud.com/docs/getting-started' },
}

export default function GettingStartedPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex gap-10">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-navy-500 uppercase tracking-widest mb-4">Getting Started</p>
                <nav className="space-y-1">
                  {[
                    { href: '/docs/getting-started', label: 'Quick Start Guide', active: true },
                    { href: '/docs/system-requirements', label: 'System Requirements' },
                    { href: '/docs/installation', label: 'Installation Guide' },
                    { href: '/docs/first-login', label: 'First Login & Setup' },
                    { href: '/docs/lan-setup', label: 'LAN Setup' },
                    { href: '/docs/cloud-vps-deployment', label: 'Cloud VPS Deployment' },
                    { href: '/docs/docker-deployment', label: 'Docker Deployment' },
                  ].map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        link.active
                          ? 'bg-gold-50 text-gold-700 font-medium'
                          : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 p-4 bg-navy-50 rounded-xl">
                  <p className="text-xs text-navy-600 mb-2 font-medium">Need help?</p>
                  <a href="mailto:support@vaultacloud.com" className="text-xs text-sky-600 hover:underline">support@vaultacloud.com</a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <article className="flex-1 max-w-3xl">
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-navy-500 mb-3">
                  <Link href="/docs" className="hover:text-navy-700">Docs</Link>
                  <span>/</span>
                  <span>Getting Started</span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">Quick Start Guide</h1>
                <p className="text-lg text-navy-600/70">Get VaultaCloud running in 30 minutes.</p>
              </div>

              <div className="prose-vc">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 not-prose">
                  <p className="text-sm text-blue-800">
                    <strong>Before you start:</strong> You'll need a Linux server (Ubuntu 20.04+ recommended), at least 2 GB RAM, and 10 GB disk space for the application (plus space for your files). See <Link href="/docs/system-requirements" className="underline">system requirements</Link> for full details.
                  </p>
                </div>

                <h2>Option A: Docker (Recommended)</h2>
                <p>The fastest way to get VaultaCloud running is via Docker:</p>

                <pre className="bg-navy-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm not-prose"><code>{`# Pull and run VaultaCloud
docker pull vaultacloud/vaultacloud:latest

docker run -d \\
  --name vaultacloud \\
  -p 3000:3000 \\
  -v /your/data/path:/app/data \\
  -e APP_URL=http://your-server-ip:3000 \\
  -e ADMIN_EMAIL=admin@yourcompany.com \\
  -e ADMIN_PASSWORD=changethis \\
  vaultacloud/vaultacloud:latest`}</code></pre>

                <p>Navigate to <code>http://your-server-ip:3000</code> to access VaultaCloud.</p>

                <h2>Option B: Manual Installation</h2>
                <p>If you prefer a manual install on Ubuntu 20.04+:</p>

                <pre className="bg-navy-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm not-prose"><code>{`# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Download VaultaCloud
wget https://vaultacloud.com/releases/latest/vaultacloud.tar.gz
tar -xzf vaultacloud.tar.gz
cd vaultacloud

# Configure environment
cp .env.example .env
nano .env  # Edit your configuration

# Install dependencies and start
npm install --production
pm2 start ecosystem.config.js
pm2 startup && pm2 save`}</code></pre>

                <h2>Step 1: Configure Your Environment</h2>
                <p>Edit the <code>.env</code> file with your settings:</p>

                <pre className="bg-navy-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm not-prose"><code>{`# Application
APP_URL=http://your-server-ip:3000
APP_NAME=VaultaCloud
APP_SECRET=generate-a-random-32-char-string

# Database
DB_PATH=/app/data/vaultacloud.db

# Storage
STORAGE_PATH=/app/data/files
MAX_FILE_SIZE=500mb

# Email (optional but recommended)
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=your-resend-api-key
SMTP_FROM=noreply@yourcompany.com

# Admin
ADMIN_EMAIL=admin@yourcompany.com
ADMIN_PASSWORD=change-this-immediately`}</code></pre>

                <h2>Step 2: First Login</h2>
                <p>
                  Navigate to your VaultaCloud URL and log in with your admin credentials. You'll be prompted to:
                </p>
                <ul>
                  <li>Set a new admin password</li>
                  <li>Enter your license key</li>
                  <li>Configure your organization name and branding</li>
                  <li>Invite your first team members</li>
                </ul>

                <h2>Step 3: Invite Your Team</h2>
                <p>
                  Go to <strong>Settings → Users → Invite User</strong>. Enter email addresses and assign roles:
                </p>
                <ul>
                  <li><strong>Admin</strong>: Full system access including settings</li>
                  <li><strong>Manager</strong>: Can manage folders, users in their department</li>
                  <li><strong>Editor</strong>: Can upload, edit, and share files</li>
                  <li><strong>Viewer</strong>: Read-only access</li>
                </ul>

                <h2>Step 4: Create Your Folder Structure</h2>
                <p>
                  Go to <strong>Files → New Folder</strong> to create your initial structure. We recommend organizing by department or project type:
                </p>
                <pre className="bg-navy-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm not-prose"><code>{`📁 Finance/
   📁 Invoices/
   📁 Bank Statements/
   📁 Tax Returns/
📁 Legal/
   📁 Contracts/
   📁 Compliance/
📁 Projects/
   📁 Project A/
   📁 Project B/
📁 HR/
   📁 Policies/
   📁 Employee Records/`}</code></pre>

                <h2>Step 5: Set Up SSL (Production)</h2>
                <p>
                  For production use, set up SSL with Let's Encrypt and Nginx:
                </p>

                <pre className="bg-navy-900 text-green-400 p-4 rounded-xl overflow-x-auto text-sm not-prose"><code>{`# Install Nginx and Certbot
sudo apt install nginx certbot python3-certbot-nginx -y

# Configure Nginx reverse proxy
sudo nano /etc/nginx/sites-available/vaultacloud

# Obtain SSL certificate
sudo certbot --nginx -d files.yourcompany.com`}</code></pre>

                <p>
                  See the <Link href="/docs/custom-domain">custom domain guide</Link> for the complete Nginx configuration.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 not-prose">
                  <p className="text-sm text-green-800 font-medium mb-1">✓ You're all set</p>
                  <p className="text-sm text-green-700">
                    VaultaCloud is running. Your team can log in at your configured URL. Next steps: <Link href="/docs/lan-setup" className="underline">set up LAN access</Link> or <Link href="/docs/white-label" className="underline">configure white-label branding</Link>.
                  </p>
                </div>
              </div>

              {/* Next steps */}
              <div className="mt-12 pt-8 border-t border-navy-100">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-4">Next Steps</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { href: '/docs/lan-setup', title: 'LAN Setup', desc: 'Enable office network access' },
                    { href: '/docs/user-management', title: 'Manage Users', desc: 'Add your team members' },
                    { href: '/docs/white-label', title: 'White-Label', desc: 'Add your branding' },
                    { href: '/docs/backup', title: 'Backup Setup', desc: 'Configure automated backups' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="card hover:border-navy-300 group">
                      <p className="font-semibold text-navy-900 group-hover:text-navy-700 mb-1">{link.title} →</p>
                      <p className="text-sm text-navy-500">{link.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
