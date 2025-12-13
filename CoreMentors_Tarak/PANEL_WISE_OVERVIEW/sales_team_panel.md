# Sales Team Panel - Complete Overview

**Instruction Reference:** Instruction 1, 2, 3, 4, 5, 7, 9  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## Panel Identity

**Panel Name:** Sales Team Panel  
**Access Method:** Access token required (8-char, uppercase)  
**Authority Level:** Team Member

---

## Panel Access

```
┌─────────────────────────────────────┐
│   SALES TEAM PANEL                  │
│                                      │
│   Access: Token + Credentials       │
│   Token Required: ✅ YES            │
│   Token Format: 8-char, uppercase   │
│   Role Binding: Sales Team only     │
└─────────────────────────────────────┘
```

---

## Core Modules

### 1. My Profile (Instruction 4)

**Purpose:** Profile completion system for Sales Team member.

**Scope:** Sales Team member has access to My Profile module.

**Key Features:**
- Profile completion tracking (0-100%)
- 12 expandable/collapsible sections
- Profile lifecycle states: DRAFT → SUBMITTED → LOCKED
- 100% completion required for payout eligibility
- All sections follow Global UI/UX expand/collapse pattern

**Special Rules for Sales Team:**
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

**Scope:** Sales Team member has access to Work Time module.

**Key Features:**
- Self-punching (stored as DRAFT, requires Manager verification)
- Time In / Time Out recording
- Break tracking (template and custom breaks)
- Net Working Time calculation
- Overtime/Undertime calculation
- Daily timeline view
- Weekly/monthly/quarterly summaries

**Special Rules for Sales Team:**
- Self-punching → **DRAFT** (requires Reporting Authority/Manager verification)
- Cannot verify other users' attendance
- Can only view own work time
- Cannot correct own verified entries (requires Manager)

**Verification Authority:**
- Sales Team → verified by **Reporting Authority (Manager)**

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md` for complete flow details.

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
        │  SALES TEAM    │          │  SALES TEAM     │
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

1. **Token Required:** Sales Team panel requires access token
2. **Self-Punching:** Can self-punch but requires Manager verification
3. **No Verification Authority:** Cannot verify other users
4. **Profile Completion:** Must complete profile for payout eligibility
5. **No Token Generation:** Cannot generate tokens (Super Admin only)

---

### 4. Work Hub — Global Execution Engine (Instruction 9)

**Purpose:** Global execution engine for managing work orders, service delivery, and client projects.

**Scope:** Sales Team member has access to Work Hub (with permit from Admin/Super Admin).

**Key Features:**
- Create work (if permit granted by Admin/Super Admin)
- View work in scope
- Manage work lifecycle
- Timeline UI with internal/client actions
- Handle client interactions
- Manage quotations

**Sales Permit:**
- Admin/Super Admin may grant dynamically
- Sales can create work only if permit granted
- Permit can be revoked at any time

**Work Lifecycle:**
- NEW → ACKNOWLEDGED → QUOTATION SENT → CLIENT RESPONSE → BINDING ACCEPTANCE → EXECUTION → COMPLETED → CLOSED

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_hub_flows.md` for complete flow details.

---

**Status:** Complete Sales Team panel documentation with My Profile + Document Wallet (Instruction 4), Work Time (Instruction 5), Work Time Requests + My Activity (Instruction 7), and Work Hub (Instruction 9)

