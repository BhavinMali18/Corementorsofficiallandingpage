# Development Team Panel - Complete Overview

**Instruction Reference:** Instruction 1, 2, 3, 4, 5, 7, 9, 10  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## Panel Identity

**Panel Name:** Development Team Panel  
**Access Method:** Access token required (8-char, uppercase)  
**Authority Level:** Team Member

---

## Panel Access

```
┌─────────────────────────────────────┐
│   DEVELOPMENT TEAM PANEL            │
│                                      │
│   Access: Token + Credentials       │
│   Token Required: ✅ YES            │
│   Token Format: 8-char, uppercase   │
│   Role Binding: Development Team    │
└─────────────────────────────────────┘
```

---

## Core Modules

### 1. My Profile (Instruction 4)

**Purpose:** Profile completion system for Development Team member.

**Scope:** Development Team member has access to My Profile module.

**Key Features:**
- Profile completion tracking (0-100%)
- 12 expandable/collapsible sections
- Profile lifecycle states: DRAFT → SUBMITTED → LOCKED
- 100% completion required for payout eligibility
- All sections follow Global UI/UX expand/collapse pattern

**Special Rules for Development Team:**
- Role: Read-only (from token)
- Department: Auto-set from role mapping
- Designation/Title: Editable by Manager/Admin/Super Admin
- Date of Joining: Set/verified by Manager/Admin/Super Admin
- Reporting Authority: Can choose Manager/Admin/Super Admin

**Documentation:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md` for complete flow details.

---

### 2. Document Wallet (Instruction 4)

**Purpose:** Standalone module for storing and sharing important documents.

**Access:**
- Available as sidebar module
- Also accessible via My Profile shortcut

**Key Features:**
- Create documents with custom titles
- Categorize documents (ID / Medical / Education / Work / Other)
- Upload multiple files per document (JPG/PNG/PDF)
- Secure sharing with password protection
- Shareable links with expiry dates
- QR code generation for share links
- Revoke links immediately

**Documentation:** See `FLOWS_AND_DIAGRAMS/document_wallet_flows.md` for complete flow details.

---

### 3. Work Time (Time & Attendance) (Instruction 5)

**Purpose:** Record daily Time In/Time Out, breaks, and calculate working time.

**Scope:** Development Team member has access to Work Time module.

**Key Features:**
- Self-punching (stored as DRAFT, requires Manager verification)
- Time In / Time Out recording
- Break tracking (template and custom breaks)
- Net Working Time calculation
- Overtime/Undertime calculation
- Daily timeline view
- Weekly/monthly/quarterly summaries

**Special Rules for Development Team:**
- Self-punching → **DRAFT** (requires Reporting Authority/Manager verification)
- Cannot verify other users' attendance
- Can only view own work time
- Cannot correct own verified entries (requires Manager)

**Verification Authority:**
- Development Team → verified by **Reporting Authority (Manager)**

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md` for complete flow details.

---

### 4. Work Hub — Department Pool View (Instruction 10)

**Purpose:** View work items in Development department pool.

**Scope:** Development Team member can view all work items in Development department pool.

**Key Features:**
- View all work items in Development department pool
- Cannot create work (Dev cannot create work)
- Can be assigned as Primary Assignee or Responsible Person
- Must accept/acknowledge if assigned as Primary Assignee
- Filter by status: Pending/Unclaimed, Ongoing, Completed, Overdue
- View work details, timeline, progress
- Update progress % when assigned

**Department Pool Visibility:**
- Can view all work items in Development department
- Cannot see other department pools (Sales, Accounts, GFX)
- Cross-department visibility not allowed

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_hub_flows.md` for complete flow details.

---

## Panel Hierarchy

```
                    ┌─────────────────────┐
                    │   SUPER ADMIN       │
                    │                     │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
        ┌───────▼────────┐          ┌────────▼────────┐
        │     ADMIN      │          │     MANAGER     │
        │                │          │                 │
        └───────┬────────┘          └────────┬───────┘
                │                            │
                │ Manages                    │
                │                            │
        ┌───────▼────────┐          ┌────────▼────────┐
        │  DEV TEAM      │          │  DEV TEAM      │
        │                │          │                 │
        │ Self-punch    │          │ Self-punch      │
        │ (DRAFT)       │          │ (DRAFT)         │
        └────────────────┘          └─────────────────┘
```

---

## Key Responsibilities

1. **Profile Completion:** Complete own profile to 100% for payout eligibility
2. **Work Time Recording:** Self-punch Time In/Time Out daily
3. **Document Management:** Manage personal documents
4. **Attendance Compliance:** Ensure attendance is verified by Manager

---

## Security Features

1. **Token Required:** Must use access token to access panel
2. **Self-Only Operations:** Can only manage own data
3. **Verification Required:** Attendance requires Manager verification
4. **Limited Access:** Cannot access other users' data

---

## Panel-Specific Rules

1. **Token Required:** Development Team panel requires access token
2. **Self-Punching:** Can self-punch but requires Manager verification
3. **No Verification Authority:** Cannot verify other users
4. **Profile Completion:** Must complete profile for payout eligibility
5. **No Token Generation:** Cannot generate tokens (Super Admin only)

---

**Status:** Complete Development Team panel documentation with My Profile + Document Wallet (Instruction 4), Work Time (Instruction 5), Work Time Requests + My Activity (Instruction 7), and Work Hub Department Pool View (Instruction 10)

