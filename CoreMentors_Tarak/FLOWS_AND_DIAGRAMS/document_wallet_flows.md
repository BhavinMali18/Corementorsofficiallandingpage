# Document Wallet – Complete Flows

**Instruction Reference:** Instruction 4  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Document Wallet, a standalone module for storing and sharing important documents.

---

## 📍 Placement and Access

### Access Points

```
┌─────────────────────────────────────────┐
│  DOCUMENT WALLET ACCESS                 │
│                                         │
│  1. Sidebar Module (All Panels)        │
│     └─ Direct access from navigation   │
│                                         │
│  2. My Profile Shortcut                │
│     └─ Link within My Profile          │
│     └─ Opens Document Wallet           │
└─────────────────────────────────────────┘
```

### Who Has Access

Document Wallet is available to:
- Super Admin
- Admin
- Manager
- Sales Team
- Accounts Team
- Development Team
- Graphics Team
- Vendor

**Note:** Each user has their own Document Wallet (user-specific).

---

## 📁 Document Wallet Structure

### Main View

```
┌─────────────────────────────────────────┐
│  📁 Document Wallet                     │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  Document 1: Passport    [▼]     │ │
│  │  Type: ID                        │ │
│  │  Files: 2                         │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  Document 2: Medical Records [▶] │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  + Add New Document               │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**Features:**
- List of all documents (expandable/collapsible blocks)
- Each document is a rounded card
- Expand to see details
- Collapse to see summary

---

## 📄 Document Item Model

### Document Structure

Each document item includes:

```
┌─────────────────────────────────────────┐
│  Document Title (user-defined)          │
│  Document Type: [ID/Medical/Education/  │
│                  Work/Other]            │
│  Notes: [Optional text]                 │
│                                         │
│  Files:                                 │
│  ┌───────────────────────────────────┐ │
│  │  📄 file1.pdf          [View] [X] │ │
│  │  📷 image1.jpg         [View] [X] │ │
│  └───────────────────────────────────┘ │
│                                         │
│  [Add File] [Rename] [Delete]          │
└─────────────────────────────────────────┘
```

### Fields

**Document Title:**
- User-defined
- Required
- Editable (rename action)

**Document Type (Optional):**
- Dropdown: ID / Medical / Education / Work / Other
- Helps categorize documents
- Can be changed later

**Notes (Optional):**
- Free text
- User can add context/description

**Files:**
- Multiple files allowed per document
- Accepted formats: JPG / PNG / PDF
- Each file can be viewed or removed

---

## 🔄 Document Lifecycle Flow

### Add Document Flow

```
User clicks "Add New Document"
    ↓
Form appears:
  - Document Title (required)
  - Document Type (optional dropdown)
  - Notes (optional)
    ↓
User enters title
    ↓
User optionally selects type
    ↓
User optionally adds notes
    ↓
User clicks "Create Document"
    ↓
Document created (empty, no files yet)
    ↓
User can now add files
```

### Add Files Flow

```
User expands document
    ↓
Clicks "Add File"
    ↓
File picker opens
    ↓
User selects file(s): JPG/PNG/PDF
    ↓
File uploads
    ↓
File appears in document's file list
    ↓
User can add more files or close
```

### View File Flow

```
User clicks "View" on a file
    ↓
File opens in preview/viewer
    ↓
User can:
  - View full file
  - Download file
  - Close viewer
```

### Remove File Flow

```
User clicks "X" on a file
    ↓
Confirmation: "Remove this file?"
    ↓
    ├─ Cancel → No action
    │
    └─ Confirm → File removed
                 ↓
                 File deleted from document
                 ↓
                 If last file removed, document
                 remains (can add new files)
```

### Rename Document Flow

```
User clicks "Rename" on document
    ↓
Inline edit or modal appears
    ↓
User edits title
    ↓
User saves
    ↓
Document title updated
```

### Delete Document Flow

```
User clicks "Delete" on document
    ↓
Confirmation: "Delete this document and all files?"
    ↓
    ├─ Cancel → No action
    │
    └─ Confirm → Document deleted
                 ↓
                 All files deleted
                 ↓
                 Document removed from list
```

**Note:** Delete may be subject to lock/permission rules (future implementation).

---

## 🔗 Secure Sharing Flow

### Share Document Flow

```
User expands document
    ↓
Clicks "Share" button
    ↓
Share dialog appears:
  ┌─────────────────────────────────┐
  │  Share Document                 │
  │                                 │
  │  Options:                       │
  │  ☑ Password protected           │
  │  ☐ Set expiry date              │
  │                                 │
  │  Password: [________] (if on)   │
  │  Expires:  [Date picker] (if on)│
  │                                 │
  │  [Generate Link] [Cancel]       │
  └─────────────────────────────────┘
    ↓
User configures options
    ↓
Clicks "Generate Link"
    ↓
System generates secure shareable link
    ↓
Link displayed with QR code:
  ┌─────────────────────────────────┐
  │  Shareable Link Generated       │
  │                                 │
  │  Link:                          │
  │  https://crm.corementors.in/    │
  │  share/abc123xyz                │
  │  [Copy Link]                    │
  │                                 │
  │  QR Code:                       │
  │  [QR Code Image]                │
  │  [Download QR]                   │
  │                                 │
  │  Options:                       │
  │  [Revoke Link] [Close]          │
  └─────────────────────────────────┘
```

### Share Link Details

**Link Properties:**
- Unique, secure URL
- Can be password protected
- Can have expiry date
- Can be revoked immediately

**Tracking:**
- `shared_by` user
- `created_at` timestamp
- `expires_at` timestamp (if set)
- `revoked_at` timestamp (if revoked)
- Access logs (optional future feature)

### QR Code Generation

**For each shareable link:**
- System generates QR code for the URL
- QR code is downloadable as image
- Same expiry/password/revoke rules apply
- QR code can be shared separately

**QR Code Flow:**
```
Share link generated
    ↓
QR code automatically generated
    ↓
QR code displayed next to link
    ↓
User can download QR code image
    ↓
QR code contains the share link URL
    ↓
Anyone scanning QR code gets the link
```

### Revoke Share Link Flow

```
User clicks "Revoke Link"
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

### Access Share Link Flow (External User)

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
            Show document files
            ↓
            User can view/download files
            ↓
            Access logged (optional)
```

---

## 🎨 UI/UX Rules (Following Global Standards)

### Expand/Collapse Pattern

Each document follows the Global UI/UX expand/collapse pattern:

**Collapsed State:**
```
┌─────────────────────────────────────────┐
│  📄 Passport Documents      [▶]       │
│  Type: ID | Files: 2                    │
└─────────────────────────────────────────┘
```

**Expanded State:**
```
┌─────────────────────────────────────────┐
│  📄 Passport Documents      [▼]       │
│  ─────────────────────────────────────  │
│  Type: ID                               │
│  Notes: Passport for travel             │
│                                         │
│  Files:                                 │
│  • passport-front.pdf [View] [X]        │
│  • passport-back.pdf  [View] [X]        │
│                                         │
│  [Add File] [Rename] [Delete] [Share]  │
└─────────────────────────────────────────┘
```

### Rounded Connected Blocks

- Each document is a rounded-edge card
- Consistent with Global UI/UX rules
- Clear visual hierarchy

---

## 🔄 Typical User Journey

### Adding and Managing Documents

```
1. User opens Document Wallet
   ↓
2. Sees list of existing documents (if any)
   ↓
3. Clicks "Add New Document"
   ↓
4. Enters document title: "Passport"
   ↓
5. Selects type: "ID"
   ↓
6. Adds notes: "Passport for travel"
   ↓
7. Creates document
   ↓
8. Expands document
   ↓
9. Clicks "Add File"
   ↓
10. Uploads passport-front.pdf
    ↓
11. Uploads passport-back.pdf
    ↓
12. Document now has 2 files
    ↓
13. User can view, share, or manage files
```

### Sharing Documents

```
1. User expands document
   ↓
2. Clicks "Share"
   ↓
3. Enables password protection
   ↓
4. Sets password: "secure123"
   ↓
5. Sets expiry: 7 days from now
   ↓
6. Generates link
   ↓
7. Copies link
   ↓
8. Downloads QR code
   ↓
9. Sends link/QR to recipient
   ↓
10. Later, user revokes link
    ↓
11. Link becomes invalid
```

---

## 🔐 Security & Permissions

### Current Rules

- Each user manages their own Document Wallet
- Documents are user-specific
- Share links can be password protected
- Share links can expire
- Share links can be revoked

### Future Considerations

- Lock/permission rules for document deletion
- Admin access to user documents (if needed)
- Audit logs for document access
- File size limits
- Storage quotas

---

## 📊 Document Categories

### Document Types (Dropdown Options)

1. **ID** - Identification documents
2. **Medical** - Medical records, prescriptions
3. **Education** - Certificates, degrees, transcripts
4. **Work** - Employment documents, contracts
5. **Other** - Miscellaneous documents

**Note:** Categories are expandable without redesign (future types can be added).

---

## 🔗 Integration with My Profile

### Shortcut Access

```
My Profile → Section 10: Document Wallet
    ↓
Click link
    ↓
Opens Document Wallet module
    ↓
User can manage documents
    ↓
Return to My Profile or stay in Document Wallet
```

**Behavior:**
- Link opens Document Wallet in same context
- User can navigate back to My Profile
- Document Wallet remains accessible from sidebar

---

## 📚 Related Documentation

- **Instruction 4:** Global UI/UX + Module Specs (My Profile + Document Wallet)
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **My Profile:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

## 🎯 Key Features Summary

✅ **Document Management:**
- Create documents with custom titles
- Categorize with document types
- Add multiple files per document
- View, rename, delete documents

✅ **File Management:**
- Upload JPG/PNG/PDF files
- Multiple files per document
- View and remove files
- Preview files

✅ **Secure Sharing:**
- Generate shareable links
- Password protection
- Expiry dates
- Immediate revocation
- QR code generation

✅ **UI/UX:**
- Follows Global UI/UX rules
- Expand/collapse pattern
- Rounded connected blocks
- Consistent across all panels

---

**Status:** Complete Document Wallet flow documentation per Instruction 4. Includes document management, file handling, secure sharing, and QR code generation.

