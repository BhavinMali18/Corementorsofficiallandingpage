# Manager Panel - Complete Overview

**Instruction Reference:** Instruction 1, 2, 3, 4, 5, 6  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## Panel Identity

**Panel Name:** Manager Panel  
**Access Method:** Access token required (8-char, uppercase)  
**Authority Level:** Limited (Team oversight)

---

## Panel Access

```
┌─────────────────────────────────────┐
│   MANAGER PANEL                      │
│                                      │
│   Access: Token + Credentials       │
│   Token Required: ✅ YES            │
│   Token Format: 8-char, uppercase   │
│   Role Binding: Manager only        │
└─────────────────────────────────────┘
```

---

## Core Modules

### 1. My Profile (Instruction 4)

**Purpose:** Profile completion system for Manager.

**Scope:** Manager has access to My Profile module.

**Key Features:**
- Profile completion tracking (0-100%)
- 12 expandable/collapsible sections
- Profile lifecycle states: DRAFT → SUBMITTED → LOCKED
- 100% completion required for payout eligibility
- All sections follow Global UI/UX expand/collapse pattern

**Special Rules for Manager:**
- Role: Read-only (from token)
- Department: Auto-set from role mapping
- Designation/Title: Editable by Manager/Admin/Super Admin
- Date of Joining: Set by Admin or Super Admin
- Reporting Authority: Can choose Admin/Super Admin

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

**Scope:** Manager has access to Work Time module.

**Key Features:**
- Self-punching (stored as DRAFT, requires Admin verification)
- Time In / Time Out recording
- Break tracking (template and custom breaks)
- Net Working Time calculation
- Overtime/Undertime calculation
- Daily timeline view
- Weekly/monthly/quarterly summaries
- Verify team member attendance

**Special Rules for Manager:**
- Self-punching → **DRAFT** (requires Admin verification)
- Can verify team member (Sales/Accounts/Dev/Graphics) attendance entries
- Can rewrite/correct team member entries
- Can view all team members' work time

**Verification Authority:**
- Manager → verified by **Admin**
- Can verify: Sales/Accounts/Dev/Graphics Team members (under reporting authority)

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md` for complete flow details.

---

### 4. Team Management (Instruction 6)

**Purpose:** Central governance layer for Work Time ecosystem - control center for verifications, hierarchy, and approvals.

**Scope:** Manager has access to Team Management module.

**Key Features:**
- Reporting hierarchy governance (view and manage team members)
- Live time supervision (mark active/break time for team members)
- Multi-stage verification visibility
- Punch-on-behalf behavior (no verification needed when Manager punches)
- Edit lock windows and approval workflows
- Authority changes & dashboard recalculation

**Special Authority for Manager:**
- Reports to: Admin
- Can live mark: Team members under reporting authority
- Can punch on behalf: Team members under reporting authority
- Can verify: Team member attendance (requires Admin/Super Admin final approval)
- Can edit: Same-day records for team members (no approval needed)
- Post-day edits: Require Admin approval
- Cannot approve/reject: Change requests (no authority)

**Approval Cadence:**
- Follows configured daily or weekly approval mode
- Verifies team member attendance
- Final approval by Admin/Super Admin

**Documentation:** See `FLOWS_AND_DIAGRAMS/team_management_flows.md` and `FLOWS_AND_DIAGRAMS/approval_change_control_flows.md` for complete flow details.

---

## Panel Hierarchy

```
                    ┌─────────────────────┐
                    │   SUPER ADMIN       │
                    │                     │
                    │  Assigns tokens     │
                    │  to Admin           │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                │ Receives tokens             │
                │                             │
        ┌───────▼────────┐          ┌────────▼────────┐
        │     ADMIN      │          │     ADMIN       │
        │                │          │                 │
        │ Assigns to     │          │ Assigns to      │
        │ Managers       │          │ Managers        │
        └───────┬────────┘          └────────┬───────┘
                │                            │
                │ Manages                    │
                │                            │
        ┌───────▼────────┐          ┌────────▼────────┐
        │   MANAGER      │          │   MANAGER       │
        │                │          │                 │
        │ Verifies       │          │ Verifies        │
        │ Team Members   │          │ Team Members    │
        └────────────────┘          └─────────────────┘
```

---

## Key Responsibilities

1. **Team Oversight:** Manages team members under reporting authority
2. **Attendance Verification:** Verifies team member attendance entries
3. **Work Time Management:** Can correct team member work time entries
4. **Profile Management:** Completes own profile, can view team profiles (if permitted)

---

## Security Features

1. **Token Required:** Must use access token to access panel
2. **Limited Authority:** Can only verify/correct team members under reporting authority
3. **Hierarchy-Based:** All operations limited to team members
4. **Self-Verification:** Own attendance requires Admin verification

---

## Panel-Specific Rules

1. **Token Required:** Manager panel requires access token
2. **Verification Authority:** Can verify team member attendance
3. **Self-Verification:** Own attendance verified by Admin
4. **Team Scope:** Limited to team members under reporting authority
5. **No Token Generation:** Cannot generate tokens (Super Admin only)

---

### 5. Work Hub — Global Execution Engine (Instruction 9)

**Purpose:** Global execution engine for managing work orders, service delivery, and client projects.

**Scope:** Manager has access to Work Hub.

**Key Features:**
- Create work (full authority)
- View work in scope
- Manage work lifecycle
- Timeline UI with internal/client actions
- Handle client responses
- Manage execution phase

**Work Lifecycle:**
- NEW → ACKNOWLEDGED → QUOTATION SENT → CLIENT RESPONSE → BINDING ACCEPTANCE → EXECUTION → COMPLETED → CLOSED

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_hub_flows.md` for complete flow details.

---

**Status:** Complete Manager panel documentation with My Profile + Document Wallet (Instruction 4), Work Time (Instruction 5), Team Management (Instruction 6), Work Time Requests + My Activity (Instruction 7), and Work Hub (Instruction 9)

