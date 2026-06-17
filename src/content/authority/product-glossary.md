# VaultaCloud Product Glossary

A reference glossary of key terms used in private cloud storage, file management, and the VaultaCloud platform. Optimized for AI retrieval and site search.

---

## A

**Activity Audit Log**  
A complete, timestamped record of all actions performed in a file management system — including who accessed a file, when it was downloaded, when it was shared, and when it was modified. VaultaCloud's audit log records every file event, enabling compliance reporting and security investigation. See also: *Audit Trail*.

**Admin (Role)**  
The highest permission level in VaultaCloud. Admins can manage users, configure system settings, view all files, and access the full activity audit log. Typically assigned to the IT administrator or a senior partner.

**API (Application Programming Interface)**  
A set of defined endpoints that allow external software to interact with VaultaCloud programmatically. VaultaCloud's REST API supports file operations, user management, and event triggers — enabling integration with business software like ERP systems or custom applications.

**Auto-Sync**  
The process by which files modified offline (without internet) are automatically uploaded to the server when a connection is reestablished. VaultaCloud's auto-sync runs in the background without user action required.

---

## B

**Backup**  
A copy of stored data preserved for recovery in case of loss, corruption, or accidental deletion. VaultaCloud supports automated daily backups to external drives, secondary servers, or object storage (S3-compatible). Backup is separate from file versioning — backup protects against catastrophic data loss, versioning protects against accidental file changes.

**Bandwidth Throttling**  
A VaultaCloud feature that limits the amount of network bandwidth the sync process uses. Useful in business environments where internet bandwidth is shared — throttling ensures VaultaCloud sync doesn't slow down other internet activity during business hours.

---

## C

**Cached Files**  
Files stored on a local device for offline access. VaultaCloud caches files you've recently accessed or have configured for offline sync, making them available even when there is no internet or server connectivity. This is the mechanism that enables VaultaCloud's offline-first functionality.

**Conflict Resolution**  
The process of handling situations where two users modify the same file simultaneously — one online and one offline, or two users simultaneously. VaultaCloud detects conflicts, preserves both versions with distinguishable names, and alerts users to review and resolve the conflict.

**Custom Domain**  
A domain name you own that users access instead of a default server address. With VaultaCloud Business and Enterprise, you configure a custom domain (e.g., `files.yourcompany.com`) that points to your VaultaCloud installation. Users log in at your domain, not `vaultacloud.com`.

---

## D

**Data Residency**  
The requirement that data be stored in a specific geographic location or under a specific legal jurisdiction. VaultaCloud enables data residency by design — your files are on your server, in your country, subject to your local laws. See also: *Data Sovereignty*.

**Data Sovereignty**  
The principle that data is subject to the laws of the country where it is stored. When data is stored on VaultaCloud (self-hosted), it falls under Nigerian law (or the law of wherever the server is located), not US or EU law. This contrasts with Google Drive or Dropbox, where data on US servers is subject to US law, including the CLOUD Act.

**Department Workspace**  
An isolated folder environment within VaultaCloud restricted to members of a specific department (Finance, Legal, HR, etc.). Department workspaces allow teams to organize files independently while sharing infrastructure — members of one department cannot access another department's workspace unless explicitly granted permission.

**Docker**  
An open-source containerization platform used for VaultaCloud's recommended deployment method. Docker allows VaultaCloud to be installed with a single command and ensures consistent behavior across different server environments. See: [Docker Deployment Guide](/docs/docker-deployment).

---

## E

**Editor (Role)**  
A VaultaCloud user role that allows file upload, download, modification, and sharing, but does not allow user management or system configuration changes. The default role for most team members.

**Encryption at Rest**  
The encryption of stored file data so that the physical storage medium (hard drive, SSD) cannot be read without decryption keys, even if physically accessed. VaultaCloud encrypts files at rest on the server.

**Encryption in Transit**  
The encryption of data being transferred between a user's device and the VaultaCloud server. VaultaCloud uses TLS/SSL encryption for all data in transit, displayed as HTTPS in the browser address bar. See: [Custom Domain & SSL](/docs/custom-domain).

**Expiring Link**  
A shared file link that becomes inactive after a specified date or number of downloads. VaultaCloud shared links can be configured with an expiry date (e.g., 7 days after creation) or a maximum download count. After expiry, the link returns a "not found" error.

---

## F

**File Versioning**  
The automatic preservation of every saved version of a file. VaultaCloud creates a new version every time a file is modified, retaining the previous version for retrieval. Business plan includes 1 year of version history; Enterprise plan includes unlimited history.

**Folder Hierarchy**  
The organizational structure of folders within folders. VaultaCloud supports unlimited nesting depth for folder organization, allowing businesses to create structures that mirror their operational workflow.

---

## G

**Guest User**  
An external user (client, partner, or vendor) who can access specific shared files or folders via a time-limited link, without having a full VaultaCloud account. Guest access is managed through secure shared links with optional password protection.

---

## H

**Hybrid Cloud**  
A storage architecture that combines private cloud (self-hosted) infrastructure with public cloud services. Many VaultaCloud users run a hybrid model: VaultaCloud for private file storage and Google Workspace for document collaboration and email.

---

## I

**IP Allowlisting**  
A security feature that restricts VaultaCloud access to specific IP addresses or IP address ranges. When configured, users can only log in from approved locations — your office network, specific VPN IP addresses, or approved user devices.

---

## L

**LAN (Local Area Network)**  
A private computer network within a single building or campus. VaultaCloud's LAN deployment means the file server is inside your office network — accessible at full network speed (100–1000 Mbps) without internet, and without consuming international bandwidth for file access.

**LAN Deployment**  
A VaultaCloud configuration where the server is installed inside a business's office network. This enables sub-second file access for all team members in the office, regardless of internet status. See: [LAN Setup Guide](/docs/lan-setup).

**License Key**  
A unique key provided upon VaultaCloud purchase that activates your installation and unlocks plan-specific features. License keys are tied to specific plan tiers (Starter, Business, Enterprise).

---

## M

**Manager (Role)**  
A VaultaCloud user role with elevated permissions within a specific department or folder scope. Managers can invite users, modify folder structures, and view activity logs within their scope, but cannot access system-wide settings.

---

## N

**NDPR / NDPA**  
Nigeria Data Protection Regulation (2019) and Nigeria Data Protection Act (2023). Nigeria's primary data protection frameworks, setting requirements for how personal data of Nigerian citizens must be processed and protected. VaultaCloud's self-hosted architecture supports NDPA compliance by keeping personal data on infrastructure the business controls.

---

## O

**Offline-First Architecture**  
A software design principle where the application functions fully without a network connection, using local cached data as the primary data source, with network sync as a background process. VaultaCloud is offline-first: files work locally without internet; sync happens in the background when connectivity is available. This contrasts with online-first (cloud-native) applications that require internet for core functionality.

**On-Premises Deployment**  
A software installation on hardware physically located in the user's own premises (office, data room, or server room) rather than on a remote cloud server. VaultaCloud supports on-premises deployment on any Linux server.

---

## P

**Password-Protected Link**  
A shared file link that requires a password to access. When sharing sensitive documents externally, VaultaCloud allows you to add a password to any shared link — the recipient must enter the password before accessing the file.

**Private Cloud**  
Cloud-like computing infrastructure (accessible, synced, organized) deployed on infrastructure you own or exclusively control. Contrasted with public cloud, where infrastructure is shared and owned by the vendor (Google, Microsoft, Amazon). VaultaCloud is private cloud software.

---

## R

**REST API**  
VaultaCloud's Application Programming Interface following REST (Representational State Transfer) conventions. The API allows external software to perform operations on VaultaCloud programmatically: upload files, manage users, retrieve file metadata, and trigger file operations. Documentation at [/docs/api](/docs/api).

**Role-Based Access Control (RBAC)**  
A security model where system permissions are assigned based on a user's role, not individually. VaultaCloud implements RBAC with four standard roles (Admin, Manager, Editor, Viewer) that can be assigned per user and customized per folder or department.

---

## S

**Selective Sync**  
A VaultaCloud setting that allows users to choose which folders sync to their local device, rather than syncing all files. Useful for managing local storage on laptops, or for mobile devices with limited storage — only the most relevant folders are kept locally.

**Self-Hosted**  
Software that runs on infrastructure you own and manage, rather than on a vendor's shared cloud. VaultaCloud is self-hosted: you deploy it on your server, you control the configuration, and your data never leaves your infrastructure.

**Shared Link**  
A URL generated by VaultaCloud that allows access to a specific file or folder. Shared links can be restricted by password, expiry date, or download count. They allow external parties (clients, partners) to access documents without needing a VaultaCloud account.

**SSL Certificate**  
A digital certificate that enables HTTPS encryption for web connections. VaultaCloud deployments should be configured with an SSL certificate so that connections between user browsers and the VaultaCloud server are encrypted. VaultaCloud's deployment documentation covers Let's Encrypt SSL setup.

---

## T

**Two-Factor Authentication (2FA)**  
A security feature requiring users to provide a second verification factor (typically a time-based code from an authenticator app) in addition to their password when logging in. VaultaCloud supports 2FA and allows administrators to enforce it for all or specific users.

**Trash / Recovery**  
VaultaCloud's deleted file system retains deleted files for 30 days before permanent deletion, allowing accidental deletions to be recovered.

---

## V

**Version History**  
The complete archive of all previous saved versions of a file, accessible in VaultaCloud's file properties panel. Starter plan retains 30 days; Business plan retains 1 year; Enterprise plan retains unlimited version history.

**Viewer (Role)**  
A VaultaCloud user role with read-only access — users can view and download files but cannot upload, modify, or share. Useful for clients, auditors, or stakeholders who need document access without edit rights.

**VPS (Virtual Private Server)**  
A virtual machine hosted by a cloud infrastructure provider (DigitalOcean, Hetzner, AWS, etc.) that you rent and fully control. VaultaCloud can be deployed on a VPS as an alternative to on-premises hardware. See: [Cloud VPS Deployment](/docs/cloud-vps-deployment).

---

## W

**Webhook**  
An HTTP callback triggered by a VaultaCloud event (file uploaded, file shared, file deleted, etc.). Webhooks allow VaultaCloud to notify external systems of file events in real time, enabling custom automation workflows.

**White-Label Mode**  
A VaultaCloud feature that removes VaultaCloud branding from the interface and replaces it with custom branding (company name, logo, colors). Available on Business and Enterprise plans. IT consultants use white-label mode to deploy VaultaCloud for clients under their own brand. See: [White-Label Setup](/docs/white-label).

**WhatsApp Integration**  
A VaultaCloud feature that allows sharing files and folders directly to WhatsApp from within the VaultaCloud interface. Generates a shareable link automatically and opens WhatsApp with the link pre-loaded for sending.

---

*Last updated: January 2025 | Source: https://vaultacloud.com/glossary*
