# Company Document Wallet – Complete Flows

**Instruction Reference:** Instruction 5  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Company Document Wallet module, a system for storing company-level documents with grouping and secure sharing capabilities.

---

## 👤 Scope (Who Has Access)

**Access:** Super Admin only

**Purpose:**
- Store company-level documents (distinct from personal Document Wallet)
- Create grouped virtual wallets (packs) for specific use cases
- Secure sharing with password protection and expiry

---

## 📁 Company Document Wallet Structure

### Module Overview

```
┌─────────────────────────────────────────┐
│  📁 Company Document Wallet            │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  Document 1: COI          [▼]      │ │
│  │  Type: Statutory                   │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  Document 2: MOA          [▶]     │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  Virtual Wallet: Loan Pack [▶]    │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  + Add New Document               │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

All documents and virtual wallets follow Global UI/UX expand/collapse pattern.

---

## 📄 Document Management

### Add Document Flow

```
Super Admin opens Company Document Wallet
    ↓
Clicks "Add New Document"
    ↓
Document Form:
  ┌─────────────────────────────────┐
  │  Document Title: [___________] │
  │                                 │
  │  Document Type: [Optional ▼]   │
  │    • Statutory                 │
  │    • Compliance                │
  │    • Legal                     │
  │    • Other                     │
  │                                 │
  │  Notes: [Optional]             │
  │                                 │
  │  Files:                        │
  │  [Upload Files]                │
  │  Formats: PDF, JPG, PNG        │
  │                                 │
  │  [Create Document] [Cancel]    │
  └─────────────────────────────────┘
    ↓
Document created
    ↓
Available for grouping and sharing
```

### Document Operations

**View:**
- View document details
- Preview files
- Download files

**Add File:**
- Upload additional files to document
- Multiple files per document

**Remove File:**
- Delete file from document
- Document remains if other files exist

**Rename:**
- Edit document title
- Update document name

**Delete:**
- Delete entire document
- Confirmation required
- All files deleted

---

## 📦 Document Grouping (Clubbing)

### Purpose

Create grouped virtual wallets (packs) by multi-selecting documents for specific use cases.

### Grouping Flow

```
Super Admin opens Company Document Wallet
    ↓
Selects multiple documents (checkboxes)
    ↓
Clicks "Create Virtual Wallet"
    ↓
Virtual Wallet Form:
  ┌─────────────────────────────────┐
  │  Virtual Wallet Name:           │
  │  [Loan Pack]                    │
  │                                 │
  │  Selected Documents:             │
  │  ☑ COI                          │
  │  ☑ MOA                          │
  │  ☑ AOA                          │
  │  ☑ Company PAN                  │
  │                                 │
  │  [Create Virtual Wallet]        │
  └─────────────────────────────────┘
    ↓
Virtual Wallet created
    ↓
Available for sharing
```

### Virtual Wallet Management

**Create:**
- Multi-select documents
- Name the virtual wallet
- Create grouped pack

**Edit:**
- Rename virtual wallet
- Add/remove documents
- Update pack contents

**View:**
- See all documents in pack
- Expand to see individual documents
- Preview files

**Delete:**
- Delete virtual wallet
- Documents remain (not deleted)
- Confirmation required

### Use Cases

**Common Virtual Wallets:**
- **Loan Pack:** COI, MOA, AOA, Company PAN, Financial statements
- **Audit Pack:** All statutory documents, compliance certificates
- **Vendor Onboarding Pack:** Company profile, compliance docs
- **Accounts Compliance Pack:** GST, PAN, MSME, tax documents

---

## 🔗 Secure Sharing Flow

### Share Virtual Wallet Flow

```
Super Admin expands Virtual Wallet
    ↓
Clicks "Share" button
    ↓
Share Dialog:
  ┌─────────────────────────────────┐
  │  Share Virtual Wallet           │
  │                                 │
  │  Virtual Wallet: Loan Pack     │
  │                                 │
  │  Options:                      │
  │  ☑ Password protected           │
  │  ☐ Set expiry date              │
  │                                 │
  │  Password: [________] (if on)   │
  │  Expires: [Date picker] (if on) │
  │                                 │
  │  [Generate Link] [Cancel]       │
  └─────────────────────────────────┘
    ↓
Super Admin configures options
    ↓
Clicks "Generate Link"
    ↓
Shareable Link Generated:
  ┌─────────────────────────────────┐
  │  Shareable Link Generated       │
  │                                 │
  │  Link:                          │
  │  https://crm.corementors.in/    │
  │  share/company/abc123xyz        │
  │  [Copy Link]                    │
  │                                 │
  │  QR Code:                       │
  │  [QR Code Image]                │
  │  [Download QR]                  │
  │                                 │
  │  Options:                       │
  │  [Revoke Link] [Close]          │
  └─────────────────────────────────┘
```

### Sharing Options

**Secure Link:**
- Unique, secure URL
- Can be password protected
- Can have expiry date
- Can be revoked immediately

**QR Code:**
- Automatically generated for share link
- Downloadable QR image
- Same expiry/password/revoke rules apply
- Can be shared separately

### Share Link Properties

**Tracking:**
- `shared_by` user (Super Admin)
- `created_at` timestamp
- `expires_at` timestamp (if set)
- `revoked_at` timestamp (if revoked)
- Access logs (optional future feature)

### Revoke Share Link Flow

```
Super Admin views share link
    ↓
Clicks "Revoke Link"
    ↓
Confirmation: "Revoke this share link?"
    ↓
    ├─ Cancel → No action
    │
    └─ Confirm → Link revoked
                 ↓
                 Link becomes invalid
                 ↓
                 `revoked_at` timestamp set
                 ↓
                 Access attempts will fail
```

---

## 🔐 Access Share Link Flow (External User)

### External Access Flow

```
External user receives share link
    ↓
Clicks link or scans QR code
    ↓
System checks:
  - Link exists?
  - Not revoked?
  - Not expired?
  - Password required?
    ↓
    ├─ Invalid/Revoked/Expired
    │  → Show error: "Link is invalid or expired"
    │
    └─ Valid
       ↓
       If password required:
         → Show password input
         ↓
         User enters password
         ↓
         System validates
         ↓
         ├─ Wrong password
         │  → Show error: "Incorrect password"
         │
         └─ Correct password
            ↓
            Show virtual wallet contents
            ↓
            User can view/download documents
            ↓
            Access logged (optional)
```

---

## 🎨 UI/UX Pattern Compliance

All Company Document Wallet modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Documents: Expandable/collapsible
- Virtual Wallets: Expandable/collapsible
- Document details: Expandable/collapsible
- Share options: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Super Admin Journey

### Creating and Sharing Document Pack

```
1. Super Admin opens Company Document Wallet
   ↓
2. Adds documents (COI, MOA, AOA, etc.)
   ↓
3. Selects multiple documents
   ↓
4. Clicks "Create Virtual Wallet"
   ↓
5. Names it "Loan Pack"
   ↓
6. Virtual Wallet created
   ↓
7. Expands "Loan Pack"
   ↓
8. Clicks "Share"
   ↓
9. Enables password protection
   ↓
10. Sets password: "secure123"
    ↓
11. Sets expiry: 30 days from now
    ↓
12. Generates link
    ↓
13. Copies link
    ↓
14. Downloads QR code
    ↓
15. Sends link/QR to bank/lender
    ↓
16. Later, revokes link after use
```

---

## 🔄 Comparison: Personal vs Company Document Wallet

### Personal Document Wallet (Instruction 4)

**Access:** All internal roles + Vendor
**Purpose:** Personal documents
**Sharing:** Individual documents
**Grouping:** Not available

### Company Document Wallet (Instruction 5)

**Access:** Super Admin only
**Purpose:** Company-level documents
**Sharing:** Virtual wallets (grouped documents)
**Grouping:** Multi-select documents into packs

---

## 📚 Related Documentation

- **Instruction 5:** Work Time, Company Profile, Time Planner, Company Document Wallet
- **Personal Document Wallet:** See `FLOWS_AND_DIAGRAMS/document_wallet_flows.md`
- **Company Profile:** See `FLOWS_AND_DIAGRAMS/company_profile_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Company Document Wallet flow documentation per Instruction 5. Includes document management, grouping, secure sharing, and QR code generation.

