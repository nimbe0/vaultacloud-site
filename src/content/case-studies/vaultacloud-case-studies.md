# VaultaCloud Case Studies

---

## Case Study 1: Lagos Law Firm Eliminates Internet-Dependency for Client Files

**Industry:** Legal Services
**Location:** Victoria Island, Lagos, Nigeria
**Organization Size:** 14 lawyers, 6 support staff
**Plan:** Business ($699 one-time)

### Background

Adeyemi & Associates is a corporate law firm specializing in commercial real estate and M&A transactions. The firm had grown from 6 to 20 staff over four years and was increasingly feeling the pain of fragmented file management.

Client documents lived in a combination of individual Gmail accounts, a shared Google Drive folder nobody fully trusted, and a WhatsApp group that had become the de facto way to share urgent documents before hearings.

The problem crystallized during a high-value commercial acquisition transaction in Q3 2023. Due diligence documents were being shared via WhatsApp with associates, creating version confusion and a complete absence of audit trail. When a client asked for confirmation of who had accessed their confidential financial documents, the firm had no way to answer.

### Challenges

1. **No document audit trail** — the firm could not account for who accessed which client files
2. **Internet dependency** — lawyers lost access to case files during power outages, which occur 2–3 times weekly in their building
3. **USD subscription costs** — Google Workspace was costing $1,200/year for 20 users, with monthly dollar conversion at unfavorable rates
4. **Version chaos** — multiple copies of the same document with no clear "current" version

### Solution

Adeyemi & Associates deployed VaultaCloud on a refurbished Dell PowerEdge server in their server room, connected to their office network. Setup was completed by their IT contractor in one afternoon.

**Configuration:**
- Folder structure organized by client → matter → document type
- 6 partner accounts with full access
- 8 associate accounts limited to assigned matters
- 6 support staff with role-appropriate access (billing staff: invoices only)
- LAN access for in-office use; VPN for remote access
- Daily automated backup to external drive

### Results

**3 months post-deployment:**

- **Internet outage incidents:** Zero productivity impact from 11 outage events during the period (vs. complete file unavailability previously)
- **Audit compliance:** Complete access logs for all 3 active client matters when a client audit was requested — first time this was possible
- **Version control:** Zero instances of wrong-version document submission in the period (previously a monthly occurrence)
- **Cost:** ₦0 recurring cost after initial setup, vs. ₦144,000/year for Google Workspace at current exchange rates

**Quotes:**

*"We had a critical client audit in October and for the first time in the firm's history, I could show exactly who accessed which document and when. That's the kind of professional capability our clients expect at this level."* — Managing Partner

*"The three hours we used to lose every week to internet issues are gone. Files are there when we need them, period."* — Senior Associate

---

## Case Study 2: Abuja Architecture Firm Eliminates CAD File Transfer Bottleneck

**Industry:** Architecture & Engineering
**Location:** Garki, Abuja, Nigeria
**Organization Size:** 24 staff (architects, engineers, project managers, admin)
**Plan:** Business ($699 one-time)

### Background

Covenant Design Group is an architecture and civil engineering firm with a portfolio of institutional and residential projects across Nigeria. The firm's work involves large AutoCAD and Revit files — project drawings range from 50 MB to 400 MB per file, with active projects containing hundreds of drawings.

The firm used Dropbox Business for file sharing, paying $360/month for 24 users. File sharing worked — but slowly. A junior architect sharing a 200 MB drawing revision with the team lead across the office would wait 8–12 minutes for the upload and another 8–12 minutes for the download. On projects with daily revision cycles, this was hours lost per week.

Site offices (which the firm maintained on larger projects) had even worse connectivity. Project managers on site had unreliable 4G access and frequently couldn't access the latest drawings when needed — resulting in calls back to Abuja or delayed decision-making.

### Challenges

1. **Large file transfer speed** — CAD files too large to share efficiently over internet
2. **Site office connectivity** — project managers on site couldn't reliably access drawings
3. **Dollar subscription cost** — ₦576,000/year at current exchange rates for Dropbox
4. **No offline access** — site visits meant disconnection from file system

### Solution

VaultaCloud deployed on a new Synology NAS device in the Abuja head office, with a secondary deployment on a cloud VPS for remote access.

**Configuration:**
- LAN deployment for in-office file access
- Project folder structure: Project > Discipline (Architectural, Structural, MEP, Civil) > Phase > Document Type
- Selective sync for site offices: project managers sync only active project folders
- Cloud VPS instance for client sharing and remote access
- Automatic nightly sync between office NAS and cloud VPS

### Results

**File transfer speed improvement:**

| File Size | Before (Dropbox over internet) | After (VaultaCloud LAN) | Improvement |
|---|---|---|---|
| 50 MB drawing | 4–5 minutes | 8 seconds | 37x faster |
| 200 MB CAD model | 15–20 minutes | 32 seconds | 37x faster |
| 500 MB Revit file | 35–45 minutes | 80 seconds | 28x faster |

**Business outcomes:**

- **Hours recovered:** Estimated 6–8 hours per week in reduced file transfer wait time across the team
- **Site office capability:** Project managers now carry fully synced offline copies; zero missed drawing access in field
- **Cost:** ₦105,000/year saved vs. Dropbox (VaultaCloud at $699 one-time amortized + Synology NAS)
- **Client sharing:** Secure links for drawing package delivery replaced WeTransfer and email attachments

**Quotes:**

*"Our architects were spending serious time waiting for files to upload. On LAN, the files are just there. The productivity gain paid for VaultaCloud within the first month."* — Technical Director

*"Site managers can now access drawings offline on their laptops at any site. We've eliminated 'I'll call Abuja' from our construction supervision vocabulary."* — Project Manager

---

## Case Study 3: Accounting Practice Achieves Client File Compliance and Security

**Industry:** Accounting & Financial Services
**Location:** Ikeja, Lagos, Nigeria
**Organization Size:** 12 staff (CPAs, associates, admin)
**Plan:** Starter ($299 one-time)

### Background

Okonkwo & Partners is a certified public accounting firm serving 45 regular clients including SMEs, NGOs, and individual high-net-worth clients. The firm handles tax preparation, audit, and financial advisory services.

Client data handled includes: audited financial statements, tax returns, payroll records, management accounts, and personal financial information. The firm was storing this data in a shared Google Drive account — one account with all client files, no access controls between staff members, and no audit trail.

During a routine professional development review, the senior partner realized the firm was potentially non-compliant with client confidentiality requirements and data protection principles. Any staff member could access any client file, including competitors' financial data.

### Challenges

1. **No access control** — all staff could access all clients' financial data
2. **No audit trail** — no ability to determine who accessed what
3. **NDPR compliance gap** — shared cloud account potentially non-compliant
4. **Dollar cost** — Google Workspace costs ₦72,000/year at current rates

### Solution

VaultaCloud Starter deployed on a local mini-PC server (₦80,000 hardware cost). Configuration focused entirely on access control and audit compliance.

**Configuration:**
- Client folder structure: Client Name > Year > Document Type
- Senior Partner: access to all clients
- Associates: access only to assigned clients
- Admin staff: access only to billing documents, not financial records
- Audit log enabled on all folders
- Weekly automated backup to external drive

### Results

**Access control:**
- Eliminated unauthorized access possibility between client files
- Associates now see only their assigned clients' files
- Admin staff cannot access sensitive financial statements

**Compliance:**
- Full audit log of all file access — able to demonstrate data handling to clients on request
- File versioning protects against accidental data loss or modification

**Cost:**
- ₦0 recurring cost vs ₦72,000/year Google Workspace
- Hardware payback: 13 months on Google Workspace savings alone
- Eliminated USD FX exposure for file storage

**Quotes:**

*"A client asked us directly how we protected their financial information. For the first time, I could show them the access control list and the audit log. That conversation used to make me nervous."* — Senior Partner

*"The setup was simpler than I expected. Our IT person had it running in one afternoon."* — Office Manager
