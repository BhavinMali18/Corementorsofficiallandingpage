# Super Admin Panel - Complete Overview

**Instruction Reference:** Instruction 1, 2, 3, 4, 5, 6, 7, 9  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## Panel Identity

**Panel Name:** Super Admin Panel  
**Access Method:** Direct login (NO access token required)  
**Authority Level:** Highest (Global system control)

---

## Panel Access

```
┌─────────────────────────────────────┐
│   SUPER ADMIN PANEL                 │
│                                     │
│   Access: Direct Login              │
│   Token Required: ❌ NO            │
│   Credentials: Username + Password  │
└─────────────────────────────────────┘
```

---

## Core Modules

### 1. ATMS (Access Token Management System)

**Purpose:** The only gatekeeping mechanism for onboarding all non-client roles into CoreMentors CRM.

**Authority:** Super Admin has absolute authority over the global token pool.

---

#### ATMS Module Features

##### 1.1 Token Generation

**Access:** Super Admin Only

**Process:**
1. Open ATMS module
2. Select target panel:
   - Admin
   - Manager
   - Sales Team
   - Accounts Team
   - Development Team
   - Graphics Team
   - Vendor
3. Enter quantity (any number allowed)
4. Click "Generate"
5. System shows confirmation popup
6. On confirmation:
   - Tokens generated
   - Tokens appended to global pool (never overwritten)
   - Status = `UNUSED_ACTIVE`
7. Tokens appear instantly in ATMS table

**Token Format:**
- Exactly 8 characters
- Uppercase only
- Characters: A–Z, 0–9, `@ # $ % & * - _ + ! ?`
- Role-bound at generation (immutable)

**Token Pool:**
- Global pool owned by Super Admin
- All tokens stored in single pool
- Tokens never overwritten (append only)

---

##### 1.2 Token Visibility & Security

**Blur Logic:**
- Token values blurred by default
- Only token column is blurred
- Eye icon toggle at column header:
  - Eye ON → tokens visible
  - Eye OFF → tokens blurred
- Other columns always visible

**Security:**
- Super Admin has full visibility control
- Can toggle blur on/off as needed

---

##### 1.3 Token Assignment

**Assignment Authority:**
- Super Admin → Admin or Manager
- Can assign tokens to Admins
- Can assign tokens to Managers
- Can assign directly or through hierarchy

**Assignment Process:**
1. Select token(s) from pool
2. Choose assignee (Admin or Manager)
3. Confirm assignment
4. Token status remains `UNUSED_ACTIVE`
5. Token appears in assignee's view

---

##### 1.4 Token Surrender (Receiving)

**Surrender Flow:**
- Manager → Super Admin (direct)
- Admin → Super Admin
- Super Admin receives surrendered tokens

**Notification Rule:**
- If Manager surrenders directly to Super Admin:
  - Admin above that Manager MUST be notified
  - Notification includes: token, manager ID, timestamp

**Token Status After Surrender:**
- Token remains `UNUSED_ACTIVE`
- Surrender logged as event (not state change)

---

##### 1.5 Bulk Operations

**Available Bulk Actions:**
- Bulk assign
- Bulk deactivate
- Bulk view

**Bulk Process:**
1. Select multiple tokens
2. Choose bulk action
3. System shows confirmation popup
4. On confirmation:
   - Action executes atomically
   - All selected tokens processed together
   - Success/failure reported

---

##### 1.6 Token Deactivation

**Authority:** Super Admin can deactivate any token

**Deactivation Process:**
1. Select token(s)
2. Choose "Deactivate" action
3. Confirm deactivation
4. Token status → `INACTIVE`
5. Token cannot be used for onboarding

**Deactivation Scope:**
- Can deactivate individual tokens
- Can bulk deactivate
- Can deactivate tokens in any state (except USED)

---

##### 1.7 Token Filtering & Search

**Filter Options:**
- By role (Admin, Manager, Sales, Accounts, Dev, GFX, Vendor)
- By status (UNUSED_ACTIVE, USED, INACTIVE)
- By assignment status
- By date range (generation, assignment, usage)
- By unused duration (long periods)

**Search Capabilities:**
- Search by token value (when visible)
- Search by assignee
- Search by user ID (if token used)

---

##### 1.8 Global Token Pool View

**View Scope:**
- All tokens in system
- Complete visibility
- All roles
- All statuses
- All assignments

**Information Displayed:**
- Token value (blurred by default)
- Role binding
- Status
- Generation date
- Assignment details
- Usage details (if used)
- User ID (if token used)

---

#### ATMS Security & Failure Logs Module

**Purpose:** Track all failed, suspicious, or invalid token usage attempts.

**Access:** Super Admin Only

**Module Location:** Separate module: "ATMS Security & Failure Logs"

**Features:**

##### Logged Information
For every failure:
- Token value (hashed/masked)
- Failure reason:
  - Invalid
  - Used
  - Role mismatch
  - Inactive
- Timestamp
- IP address
- Device / browser info (if available)
- MAC ID (if technically obtainable)
- Source (Join the Team / Direct access attempt)

##### Filtering Capabilities
- Filter by date range
- Filter by role attempted
- Filter by failure reason
- Filter by IP address
- Filter by source

##### Access Control
- Read-only access
- No deletion allowed
- Super Admin only
- Complete forensic traceability

---

### 2. User Management

**Scope:** Global user management across all panels

**Capabilities:**
- View all users
- Manage user accounts
- Assign roles
- Deactivate users
- View user activity

---

### 3. System Configuration

**Scope:** Global system settings

**Capabilities:**
- System-wide settings
- Configuration management
- Feature toggles
- Security settings

---

### 4. My Profile (Instruction 4)

**Purpose:** Profile completion system for Super Admin.

**Scope:** Super Admin has access to My Profile module.

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

**Special Rules for Super Admin:**
- Role: Read-only (from token)
- Department: Auto-set from role mapping
- Designation/Title: Editable by Super Admin
- Date of Joining: Set by Super Admin
- Reporting Authority: None (Super Admin has no reporting authority)

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

**Scope:** Super Admin has access to Work Time module.

**Key Features:**
- Self-punching (auto-approved for Super Admin)
- Time In / Time Out recording
- Break tracking (template and custom breaks)
- Net Working Time calculation
- Overtime/Undertime calculation
- Daily timeline view
- Weekly/monthly/quarterly summaries

**Special Rules for Super Admin:**
- Self-punching → **Auto-approved** (no verification needed)
- Can rewrite/correct any role's attendance
- Full access to all attendance data
- Can view all users' work time

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md` for complete flow details.

---

### 7. Company Profile (Instruction 5)

**Purpose:** Company master data reused across CRM.

**Scope:** Super Admin only (full CRUD).

**Key Features:**
- Company Identity (Company Name)
- Company Locations/Units (multiple units, standard address structure)
- Company Links/Profiles (Google, LinkedIn, YouTube, etc.)
- Company Documents Repository (COI, MOA, AOA, PAN, MSME, GST, etc.)

**Integration:**
- Company Locations used in My Profile → Work Location dropdown
- Units used in Time Planner for shift sets
- Company data reused across all CRM modules

**Documentation:** See `FLOWS_AND_DIAGRAMS/company_profile_flows.md` for complete flow details.

---

### 8. Time Planner (Instruction 5)

**Purpose:** Global policy engine for work time management.

**Scope:** Super Admin only.

**Key Features:**
- Shift/Time Boundary Sets (Day shift, Night shift, Custom per Unit)
- Break Templates (Lunch/Dinner, Tea/Short Break, custom)
- Global Holiday Calendar (Government, Public, Festival, Company off)
- Leave Policy (12 paid + 12 sick leaves/year default)
- Targets (Weekly, monthly, quarterly for teams/individuals)

**Policy Application:**
- Shift boundaries enforced in Work Time module
- Break templates available in Work Time
- Holidays visible to all users (read-only for Vendor/Client)
- Leave policy applied automatically

**Documentation:** See `FLOWS_AND_DIAGRAMS/time_planner_flows.md` for complete flow details.

---

### 9. Company Document Wallet (Instruction 5)

**Purpose:** Store company-level documents with grouping and secure sharing.

**Scope:** Super Admin only.

**Key Features:**
- Document management (add, view, rename, delete)
- Document grouping (multi-select documents into Virtual Wallets)
- Secure sharing (link + QR code)
- Password protection
- Expiry dates
- Revoke anytime

**Use Cases:**
- Loan pack
- Audit pack
- Vendor onboarding pack
- Accounts compliance pack

**Documentation:** See `FLOWS_AND_DIAGRAMS/company_doc_wallet_flows.md` for complete flow details.

---

### 10. Global Theming & Color Governance (Instruction 5)

**Purpose:** Global color theming for calendar, work time reports, charts, clock/arcs.

**Scope:** Super Admin only.

**Recommended Color Palette:**
- Present: #2E7D32
- Paid Leave: #1976D2
- Govt/Festival Holiday: #6A1B9A
- Worked on Holiday: #F9A825
- Overtime: #00C853
- Undertime: #FB8C00
- Absent: #C62828
- Lunch break arc: #FFF176
- Tea/short break arc: #80DEEA
- Custom break arc: #BDBDBD

**Governance:**
- Colors editable only by Super Admin
- Apply globally to calendar, reports, charts, clock/arcs

---

### 11. Team Management (Instruction 6)

**Purpose:** Central governance layer for Work Time ecosystem - control center for verifications, hierarchy, and approvals.

**Scope:** Super Admin has full access to Team Management module.

**Key Features:**
- Reporting hierarchy governance (single reporting authority rule)
- Live time supervision (mark active/break time during the day)
- Multi-stage verification visibility
- Punch-on-behalf behavior (no verification needed)
- Edit lock windows and approval workflows
- Authority changes & dashboard recalculation
- Client/Vendor reporting authority assignment (future)

**Special Authority for Super Admin:**
- Final reporting authority (no one reports above)
- Can live mark any role
- Can punch on behalf of any role
- Can edit historical data without approval
- Can approve/reject change requests from Admin/Manager
- Full access to all hierarchy and verification data

**Approval Cadence:**
- Can configure daily or weekly approval mode
- Final approval authority (attendance finally accepted when Super Admin approves)

**Documentation:** See `FLOWS_AND_DIAGRAMS/team_management_flows.md` and `FLOWS_AND_DIAGRAMS/approval_change_control_flows.md` for complete flow details.

---

### 12. Profile Policy Builder (Instruction 7 Addendum, Instruction 9)

**Module Name:** **Profile Policy Builder** (locked per Instruction 9)

**Purpose:** Controls what data is collected, what is mandatory, what is optional, and what is visible across the system.

**Scope:** Super Admin only.

**Key Features:**
- Field-level and group-level governance for My Profile
- Mandatory vs optional vs hidden data control
- 100% profile completion rules
- Downstream gates (payments, agreements, dashboard unlock)
- Dynamic recalculation of profile completion %
- Global actions (set all mandatory/optional, hide/show groups)

**Governance Controls:**
- Visibility toggle (ON/OFF) per field/group
- Requirement toggle (Mandatory/Optional) per field/group
- Group-level mandatory affects all child fields by default
- Field-level override allowed (Super Admin can set individual fields to Optional)

**Effect on System:**
- Profile Completion % recalculates dynamically
- Payments, Agreements, Dashboard access depend on completion %
- Changes apply instantly system-wide

**Documentation:** See `FLOWS_AND_DIAGRAMS/my_profile_governance_flows.md` for complete flow details.

---

### 13. Agreement Policy Master & Agreement Center (Instruction 7 Addendum, Instruction 9)

**Module Names:** 
- **Agreement Policy Master** (Super Admin only - locked per Instruction 9)
- **Agreement Center** (All panels - locked per Instruction 9)

**Purpose:** Create agreement templates and manage agreement lifecycle for all panels.

**Scope:** 
- Agreement Policy Master: Super Admin only
- Agreement Center: All panels (governed)

**Key Features:**
- Create agreement templates (Super Admin only)
- Define agreement type & target panel(s)
- Insert dynamic fields from My Profile and Company Profile
- Attach legal blocks (IP, NDA, payment terms, confidentiality)
- Mark clauses as mandatory (checkbox acceptance)
- Generate agreement instances (permission-based)
- OTP-based signing flow
- Dashboard locking rules

**Agreement Categories:**
- Internal Team: Welcome Letter, Probation Agreement, Employment Agreement, Internal NDA, Policy Acknowledgement
- Vendor: Vendor Agreement, Payment Terms Agreement, NDA
- Client: Service Agreement, NDA, Payment & Milestone Agreement

**Signing Preconditions:**
- My Profile must be 100% complete (as per governance rules)
- Mandatory documents + signature must exist

**OTP Rules:**
- Internal Team: OTP sent to company-provided email only (permit@corementors.in)
- Vendor/Client: OTP sent to primary email (user-selected)
- Defaults: 5 min expiry, 60 sec resend cooldown, max 5 attempts

**Dashboard Locking:**
- Initially only My Profile visible
- After profile completion → Agreements unlock
- After agreement signed → Full dashboard unlock
- Deadlock prevention: If agreements disabled → dashboard unlocks after profile completion

**Documentation:** See `FLOWS_AND_DIAGRAMS/agreement_system_flows.md` for complete flow details.

---

### 14. Security, Audit & Legal Integrity (Instruction 7 Addendum)

**Purpose:** Global security, audit, and legal integrity rules for agreements and system-wide actions.

**Scope:** Global (applies to all modules)

**Key Features:**
- Complete audit trail for every agreement action
- Data protection (encrypted signatures, stamps, OTP logs)
- Ethical lock (no agreement editing after signing)
- No peer access to sensitive assets
- Super Admin implicit access (not exposed to normal users)

**Audit Trail (Mandatory):**
- Created by, Edited by, Sent by, Viewed by, OTP verified by, Signed by
- Timestamp for each event

**Data Protection:**
- Signatures encrypted
- Stamps encrypted
- OTP logs encrypted

**Ethical Lock:**
- No agreement can be edited after signing
- Revisions require a new agreement instance

---

### 15. Company Email Governance (Instruction 9)

**Purpose:** Govern company email assignment and management for all internal users.

**Scope:** Super Admin and Admin (permission-based).

**Key Features:**
- Company email assignment/change (Admin/Super Admin only)
- Read-only locked field display in My Profile
- Company email password change request integration
- Complete audit trail and activity logging

**Permission Rules:**
- Super Admin: Can assign/change company email for any user
- Admin: Can assign/change company email (if allowed by Super Admin; default allow)
- Manager: Cannot change company email for anyone
- User: Cannot edit their own company email

**UI/UX Requirements:**
- Lock icon on company email field
- Label: "Assigned by Admin / Super Admin"
- "Last updated" timestamp
- No edit icon for normal users
- "Assign / Change Company Email" action in Team Management (Admin/Super Admin only)

**Data Requirements:**
- company_email (string)
- company_email_status (ACTIVE / INACTIVE)
- company_email_assigned_by (user_id + role)
- company_email_assigned_at (timestamp)
- company_email_last_password_reset_at (timestamp, optional)

**Documentation:** See `FLOWS_AND_DIAGRAMS/company_email_governance_flows.md` for complete flow details.

---

### 16. Work Hub — Global Execution Engine (Instruction 9)

**Purpose:** Global execution engine for managing work orders, service delivery, and client projects.

**Scope:** Super Admin has full access to Work Hub.

**Key Features:**
- Create work (full authority)
- View all work across system
- Manage Service Master (Super Admin only)
- Full lifecycle control
- Timeline UI with internal/client actions
- OTP requirements management
- Document requirements management

**Service Master (Super Admin Only):**
- Define service stages
- Set SLA requirements
- Define tasks and deliverables
- Configure OTP requirements
- Specify required documents
- Assign role involvement

**Work Lifecycle:**
- NEW → ACKNOWLEDGED → QUOTATION SENT → CLIENT RESPONSE → BINDING ACCEPTANCE → EXECUTION → COMPLETED → CLOSED

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_hub_flows.md` for complete flow details.

---

## ID Generation Authority

Super Admin panel is responsible for the ID generation system:

**ID Prefixes:**
- Super Admin: `CM-SA-0001`
- Admin: `CM-ADM-0001`
- Manager: `CM-MGR-0001`
- Client: `CM-CLI-0001`
- Sales Team: `CM-SLS-0001`
- Accounts Team: `CM-ACC-0001`
- Development Team: `CM-DEV-0001`
- Graphics Team: `CM-GFX-0001`
- Vendor: `CM-VND-0001`

**ID Assignment:**
- IDs assigned when token is used
- Sequential per role
- Based on activation timestamp
- Immutable forever

---

## Panel Hierarchy

```
                    ┌─────────────────────┐
                    │   SUPER ADMIN       │
                    │                     │
                    │  Global Authority   │
                    │  Token Generator    │
                    │  Pool Owner         │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                │ Oversees                    │
                │                             │
        ┌───────▼────────┐          ┌────────▼────────┐
        │     ADMIN      │          │     MANAGER     │
        │                │          │                 │
        │ Restricted     │          │ Limited         │
        │ View           │          │ View            │
        └────────────────┘          └─────────────────┘
```

---

## Key Responsibilities

1. **Token Generation:** Only Super Admin can generate tokens
2. **Global Pool Management:** Owns and manages global token pool
3. **Security Oversight:** Access to security failure logs
4. **System Control:** Highest level of system authority
5. **Audit Trail:** Complete visibility into all token activities

---

## Security Features

1. **Direct Access:** No token required (highest privilege)
2. **Full Visibility:** Can see all tokens, all roles, all statuses
3. **Security Logs:** Exclusive access to failure audit logs
4. **Token Control:** Can generate, assign, deactivate any token
5. **Blur Toggle:** Can control token visibility

---

## Panel-Specific Rules

1. **No Token Required:** Super Admin panel does not use access tokens
2. **Global Authority:** Has access to all system data
3. **Token Generation:** Only Super Admin can generate tokens
4. **Pool Ownership:** Owns the global token pool
5. **Security Access:** Only Super Admin can view security failure logs

---

**Status:** Complete Super Admin panel documentation with ATMS (Instruction 3), My Profile + Document Wallet (Instruction 4), Work Time + Company Profile + Time Planner + Company Document Wallet (Instruction 5), Team Management (Instruction 6), Work Time Requests + My Activity (Instruction 7), My Profile Governance + Agreement System + Security/Audit (Instruction 7 Addendum), and Agreement System + Email Governance + Work Hub + Client Controls (Instruction 9)


