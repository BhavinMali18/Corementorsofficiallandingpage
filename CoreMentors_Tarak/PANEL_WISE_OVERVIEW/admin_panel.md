# Admin Panel - Complete Overview

**Instruction Reference:** Instruction 1, 2, 3, 4, 5, 6  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## Panel Identity

**Panel Name:** Admin Panel  
**Access Method:** Access token required (8-char, uppercase)  
**Authority Level:** Restricted (Hierarchy-based view)

---

## Panel Access

```
┌─────────────────────────────────────┐
│   ADMIN PANEL                       │
│                                     │
│   Access: Token + Credentials       │
│   Token Required: ✅ YES            │
│   Token Format: 8-char, uppercase   │
│   Role Binding: Admin only          │
└─────────────────────────────────────┘
```

---

## Core Modules

### 1. ATMS (Access Token Management System) - Restricted View

**Purpose:** Admin ATMS is a **restricted subset view** of the token management system.

**Authority:** Admin has limited authority within their hierarchy.

---

#### ATMS Module Features - Admin Scope

##### 1.1 Token Visibility (Restricted)

**What Admin Can See:**
- Tokens assigned to them
- Tokens assigned to Managers under them
- Usage & IDs under their hierarchy

**What Admin Cannot See:**
- Global pool
- Other Admins' tokens
- Super Admin-only data
- Tokens not in their hierarchy

**Visibility Scope:**
```
                    ┌─────────────────────┐
                    │   ADMIN VIEW        │
                    │                     │
                    │  Visible:           │
                    │  • Own tokens       │
                    │  • Manager tokens   │
                    │  • Under hierarchy  │
                    │                     │
                    │  Hidden:            │
                    │  • Global pool      │
                    │  • Other Admins     │
                    │  • SA-only data     │
                    └─────────────────────┘
```

---

##### 1.2 Token Visibility & Security (Blur Logic)

**Blur Logic:**
- Token values blurred by default
- Only token column is blurred
- Eye icon toggle at column header:
  - Eye ON → tokens visible
  - Eye OFF → tokens blurred
- Other columns always visible

**Scope:**
- Applies only to tokens in Admin's view
- Cannot see tokens outside scope even if unblurred

---

##### 1.3 Token Assignment (Limited Authority)

**Assignment Authority:**
- Admin → Manager only
- Cannot assign to other Admins
- Cannot assign to Super Admin
- Can only assign tokens assigned to them

**Assignment Process:**
1. Select token(s) from own pool
2. Choose Manager (under hierarchy)
3. Confirm assignment
4. Token status remains `UNUSED_ACTIVE`
5. Token appears in Manager's view

**Assignment Rules:**
- Can only assign to Managers in their hierarchy
- Cannot assign tokens not assigned to them
- Cannot create new tokens (Super Admin only)

---

##### 1.4 Token Surrender (Upward Only)

**Surrender Authority:**
- Admin → Super Admin only
- Cannot surrender to other Admins
- Cannot surrender downward

**Surrender Process:**
1. Select token(s) to surrender
2. Choose "Surrender to Super Admin"
3. Confirm surrender
4. Token removed from Admin view
5. Token appears in Super Admin pool
6. Token status remains `UNUSED_ACTIVE`

**Surrender Rules:**
- Upward only (to Super Admin)
- Cannot surrender sideways (to other Admins)
- Cannot surrender downward (to Managers)

---

##### 1.5 Bulk Operations (Limited)

**Available Bulk Actions:**
- Bulk assign to Managers only
- Cannot bulk deactivate (Super Admin only)
- Cannot bulk view global pool

**Bulk Process:**
1. Select multiple tokens (in scope)
2. Choose bulk action (assign to Manager)
3. System shows confirmation popup
4. On confirmation:
   - Action executes atomically
   - All selected tokens processed together
   - Success/failure reported

**Bulk Limitations:**
- Can only bulk assign to Managers
- Cannot bulk deactivate
- Cannot bulk view outside scope

---

##### 1.6 Token Filtering & Search (Restricted)

**Filter Options (Within Scope):**
- By role (only roles in hierarchy)
- By status (UNUSED_ACTIVE, USED, INACTIVE)
- By assignment status (own tokens, Manager tokens)
- By date range (within scope)
- By unused duration

**Search Capabilities (Within Scope):**
- Search by token value (when visible, in scope)
- Search by assignee (Managers in hierarchy)
- Search by user ID (if token used, in hierarchy)

**Filter Limitations:**
- Cannot filter global pool
- Cannot see other Admins' tokens
- Cannot see Super Admin-only data

---

##### 1.7 Hierarchy View

**View Scope:**
- Tokens assigned to Admin
- Tokens assigned to Managers under Admin
- Usage & IDs under Admin's hierarchy

**Information Displayed:**
- Token value (blurred by default, in scope)
- Role binding (visible roles only)
- Status
- Assignment details (within hierarchy)
- Usage details (if used, in hierarchy)
- User ID (if token used, in hierarchy)

**Hierarchy Structure:**
```
                    ┌─────────────────────┐
                    │   ADMIN             │
                    │                     │
                    │  Can See:           │
                    │  • Own tokens       │
                    │  • Manager tokens   │
                    │  • Usage in scope   │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                │ Manages                     │
                │                             │
        ┌───────▼────────┐          ┌────────▼────────┐
        │   MANAGER 1    │          │   MANAGER 2     │
        │                │          │                 │
        │ Tokens visible │          │ Tokens visible  │
        │ to Admin       │          │ to Admin        │
        └────────────────┘          └─────────────────┘
```

---

##### 1.8 Security & Failure Logs

**Access:** ❌ No Access

**Restriction:**
- Admin cannot access security failure logs
- Security logs are Super Admin only
- No visibility into failed attempts

---

### 2. User Management (Hierarchy-Based)

**Scope:** User management within Admin's hierarchy

**Capabilities:**
- View users under their hierarchy
- Manage Manager accounts
- View user activity (in scope)
- Cannot see other Admins' users
- Cannot see Super Admin users

---

### 3. Team Management

**Scope:** Teams under Admin's authority

**Capabilities:**
- Manage teams in hierarchy
- Assign resources
- View team performance (in scope)
- Cannot see teams outside hierarchy

---

### 4. My Profile (Instruction 4)

**Purpose:** Profile completion system for Admin.

**Scope:** Admin has access to My Profile module.

**Key Features:**
- Profile completion tracking (0-100%)
- 12 expandable/collapsible sections
- Profile lifecycle states: DRAFT → SUBMITTED → LOCKED
- 100% completion required for payout eligibility
- All sections follow Global UI/UX expand/collapse pattern

**Profile Sections:**
1. Identity (Mandatory)
2. Contact
3. Addresses
4. Company Identity
5. Guardian Details (Up to 2)
6. Nominee Details
7. Emergency Contact
8. Bank & Payout
9. KYC & Uploads
10. Document Wallet shortcut (linked)
11. Health & Safety (Optional)
12. Review & Submit

**Special Rules for Admin:**
- Role: Read-only (from token)
- Department: Auto-set from role mapping
- Designation/Title: Editable by Manager/Admin/Super Admin
- Date of Joining: Set by Super Admin
- Reporting Authority: Can choose Super Admin only
- Can set/verify joining dates for Managers and team members under them

**Documentation:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md` for complete flow details.

---

### 5. Document Wallet (Instruction 4)

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

**Document Management:**
- View, rename, delete documents
- Add/remove files
- Preview files
- All documents follow Global UI/UX expand/collapse pattern

**Documentation:** See `FLOWS_AND_DIAGRAMS/document_wallet_flows.md` for complete flow details.

---

### 6. Work Time (Time & Attendance) (Instruction 5)

**Purpose:** Record daily Time In/Time Out, breaks, and calculate working time.

**Scope:** Admin has access to Work Time module.

**Key Features:**
- Self-punching (stored as DRAFT, requires Super Admin verification)
- Time In / Time Out recording
- Break tracking (template and custom breaks)
- Net Working Time calculation
- Overtime/Undertime calculation
- Daily timeline view
- Weekly/monthly/quarterly summaries

**Special Rules for Admin:**
- Self-punching → **DRAFT** (requires Super Admin verification)
- Can verify Manager attendance entries
- Can rewrite/correct Manager and team member entries
- Can view all users under their hierarchy

**Verification Authority:**
- Admin → verified by **Super Admin**
- Can verify: Manager attendance

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md` for complete flow details.

---

### 7. Team Management (Instruction 6)

**Purpose:** Central governance layer for Work Time ecosystem - control center for verifications, hierarchy, and approvals.

**Scope:** Admin has access to Team Management module.

**Key Features:**
- Reporting hierarchy governance (view and manage managers and team members)
- Live time supervision (mark active/break time for managers and team members)
- Multi-stage verification visibility
- Punch-on-behalf behavior (no verification needed when Admin punches)
- Edit lock windows and approval workflows
- Authority changes & dashboard recalculation

**Special Authority for Admin:**
- Reports to: Super Admin
- Can live mark: Managers + all lower roles
- Can punch on behalf: Managers + all lower roles
- Can verify: Manager attendance (requires Super Admin final approval)
- Can edit: Same-day records for subordinates (no approval needed)
- Post-day edits: Require Super Admin approval
- Can approve/reject: Change requests from Managers

**Approval Cadence:**
- Follows configured daily or weekly approval mode
- Verifies Manager attendance
- Final approval by Super Admin

**Documentation:** See `FLOWS_AND_DIAGRAMS/team_management_flows.md` and `FLOWS_AND_DIAGRAMS/approval_change_control_flows.md` for complete flow details.

---

### 8. Company Email Governance (Instruction 9)

**Purpose:** Assign and manage company email for users under Admin's hierarchy.

**Scope:** Admin has permission to assign/change company email (if allowed by Super Admin; default allow).

**Key Features:**
- Assign company email to users (managers and team members)
- Change company email for users in hierarchy
- View company email assignment history
- Complete audit trail and activity logging

**Permission Rules:**
- Can assign/change company email for: Managers and team members under hierarchy
- Cannot change: Other Admins' company email, Super Admin company email
- Cannot change own company email (requires Super Admin)

**UI/UX Requirements:**
- "Assign / Change Company Email" action in Team Management user profile
- Lock icon and read-only display in My Profile
- Complete audit trail for all assignments/changes

**Documentation:** See `FLOWS_AND_DIAGRAMS/company_email_governance_flows.md` for complete flow details.

---

### 9. Work Hub — Global Execution Engine (Instruction 9)

**Purpose:** Global execution engine for managing work orders, service delivery, and client projects.

**Scope:** Admin has full access to Work Hub.

**Key Features:**
- Create work (full authority)
- View all work in scope
- Manage work lifecycle
- Timeline UI with internal/client actions
- OTP requirements handling
- Document requirements management

**Work Lifecycle:**
- NEW → ACKNOWLEDGED → QUOTATION SENT → CLIENT RESPONSE → BINDING ACCEPTANCE → EXECUTION → COMPLETED → CLOSED

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_hub_flows.md` for complete flow details.

---

## ID Generation (View Only)

Admin can view IDs assigned under their hierarchy:

**Visible ID Prefixes (In Scope):**
- Manager: `CM-MGR-0001` (if in hierarchy)
- Sales Team: `CM-SLS-0001` (if in hierarchy)
- Accounts Team: `CM-ACC-0001` (if in hierarchy)
- Development Team: `CM-DEV-0001` (if in hierarchy)
- Graphics Team: `CM-GFX-0001` (if in hierarchy)
- Vendor: `CM-VND-0001` (if in hierarchy)

**ID Visibility:**
- Can see IDs assigned when tokens are used
- Only IDs within hierarchy are visible
- Cannot see IDs outside scope

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
        │ Restricted     │          │ Restricted      │
        │ View           │          │ View            │
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
        │ Under Admin    │          │ Under Admin     │
        │ hierarchy      │          │ hierarchy       │
        └────────────────┘          └─────────────────┘
```

---

## Key Responsibilities

1. **Token Assignment:** Can assign tokens to Managers only
2. **Hierarchy Management:** Manages tokens within their hierarchy
3. **Token Surrender:** Can surrender tokens upward to Super Admin
4. **Limited Visibility:** Restricted view of token pool
5. **Team Oversight:** Oversees Managers and teams under them

---

## Security Features

1. **Token Required:** Must use access token to access panel
2. **Restricted Visibility:** Can only see tokens in scope
3. **Hierarchy-Based:** All operations limited to hierarchy
4. **No Security Logs:** Cannot access security failure logs
5. **Blur Toggle:** Can control token visibility (in scope)

---

## Panel-Specific Rules

1. **Token Required:** Admin panel requires access token
2. **Restricted View:** Cannot see global pool or other Admins' tokens
3. **Assignment Limited:** Can only assign to Managers
4. **Surrender Upward:** Can only surrender to Super Admin
5. **No Token Generation:** Cannot generate tokens (Super Admin only)
6. **No Security Access:** Cannot view security failure logs

---

## Comparison: Super Admin vs Admin ATMS

| Feature | Super Admin | Admin |
|---------|-------------|-------|
| Token Generation | ✅ Yes | ❌ No |
| Global Pool View | ✅ Yes | ❌ No |
| Token Assignment | ✅ To Admin/Manager | ✅ To Manager only |
| Token Surrender | ✅ Receives from all | ✅ To Super Admin only |
| Bulk Deactivate | ✅ Yes | ❌ No |
| Security Logs | ✅ Yes | ❌ No |
| View Other Admins | ✅ Yes | ❌ No |
| Hierarchy View | ✅ Global | ✅ Restricted |

---

**Status:** Complete Admin panel documentation with ATMS restricted view (Instruction 3), My Profile + Document Wallet (Instruction 4), Work Time (Instruction 5), Team Management (Instruction 6), Company Email Governance (Instruction 9), and Work Hub (Instruction 9)


