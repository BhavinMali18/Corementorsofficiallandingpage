# CoreMentors CRM – System Overview

**Last Updated:** [Current Session]  
**Instruction Reference:** Instruction 1, 2, 3, 4, 5, 6, 7, 9 & 10

---

## 🎯 Project Identity

**Project Name:** CoreMentors CRM  
**Official Website:** corementors.in  
**Company:** CoreMentors Pvt. Ltd.  
**Project Type:** Enterprise-grade, role-based, multi-panel CRM system

---

## 📋 System Architecture Foundation

### Panel Structure

```
Total Panels: 9

┌─────────────────────────────────────────────────┐
│  NO ACCESS TOKEN REQUIRED                       │
├─────────────────────────────────────────────────┤
│  1. Super Admin Panel                           │
│  2. Client Panel                                │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  ACCESS TOKEN REQUIRED (8-char, uppercase)      │
├─────────────────────────────────────────────────┤
│  3-9. [7 Internal Panels - To be detailed]     │
│      - One-time use tokens                      │
│      - Created by Super Admin only              │
└─────────────────────────────────────────────────┘
```

### Access Token Management System (ATMS)

**System Purpose:** ATMS is the only gatekeeping mechanism for onboarding all non-client roles into CoreMentors CRM.

**Token Specifications:**
- **Length:** Exactly 8 characters
- **Format:** Uppercase only
- **Character Set:** A–Z, 0–9, `@ # $ % & * - _ + ! ?`
- **Usage:** One-time use
- **Authority:** Super Admin only (generation)
- **Role Binding:** Immutable (bound at generation)

**Token States:**
- `UNUSED_ACTIVE` - Available for use
- `USED` - Consumed (immutable)
- `INACTIVE` - Deactivated

**Token Flow:**
```
Super Admin
    ↓
Generates Tokens (Panel-wise)
    ↓
Tokens in Global Pool (UNUSED_ACTIVE)
    ↓
Assigns to Admin/Manager
    ↓
User Uses Token (One-time)
    ↓
Token → USED
User ID Assigned
```

**7 Internal Panels Requiring Tokens:**
1. Admin Panel
2. Manager Panel
3. Sales Team Panel
4. Accounts Team Panel
5. Development Team Panel
6. Graphics Team Panel
7. Vendor Panel

---

## 🔐 Authentication & Access Model

### Two-Tier Access System

1. **Direct Access (No Token)**
   - Super Admin Panel
   - Client Panel
   - Standard login credentials only

2. **Token-Based Access**
   - 7 Internal Panels
   - Requires valid access token + credentials
   - Token consumed on first use

---

## 🏗️ System Design Principles

### Source of Truth Hierarchy

```
Captain
  ↓
ChatGPT
  ↓
Numbered Instructions
  ↓
Cursor Memory (Documentation)
  ↓
Development Team
```

### Development Boundaries

**Captain Defines:**
- Functional logic
- Panel behavior
- Role permissions
- Data visibility rules
- Process flows
- Business rules

**Development Team Defines (Implementation Phase):**
- Frontend design
- Backend language
- Database choice
- APIs
- Hosting
- Infrastructure

---

## 📚 Documentation Structure

This system maintains the following documentation:

1. **INSTRUCTIONS_MASTER.md** - Master instruction registry
2. **SYSTEM_OVERVIEW.md** - This file (business + logic overview)
3. **PANEL_WISE_OVERVIEW/** - Detailed panel documentation
4. **FLOWS_AND_DIAGRAMS/** - Visual flow representations

---

## 🔄 Development Approach

- **Functionality First, Technology Later**
- All current instructions are functionality-only
- Behavior and role-based flows take priority
- Technical implementation decisions deferred until functionality is locked

---

## 🔐 ATMS (Access Token Management System)

### Core Principles

1. **Absolute Authority:** Only Super Admin can generate tokens
2. **Global Token Pool:** All tokens live in one global pool owned by Super Admin
3. **Role Binding:** Each token bound to exactly one role (immutable)
4. **Silent Validation:** Backend validation before onboarding (invisible to user)
5. **Zero Reuse:** Tokens are one-time use only
6. **Full Auditability:** All failures logged in security audit module

### Token Assignment Hierarchy

```
Super Admin
    ↓ (assigns)
Admin / Manager
    ↓ (Admin assigns)
Manager
    ↓ (Manager cannot assign)
```

### Token Surrender (Upward Only)

```
Manager → Admin
Manager → Super Admin
Admin → Super Admin
```

### ID Generation System

Every entity gets a permanent system ID when token is used:

| Role             | ID Prefix      |
| ---------------- | -------------  |
| Super Admin      | CM-SA-0001     |
| Admin            | CM-ADM-0001    |
| Manager          | CM-MGR-0001    |
| Client           | CM-CLI-0001    |
| Sales Team       | CM-SLS-0001    |
| Accounts Team    | CM-ACC-0001    |
| Development Team | CM-DEV-0001    |
| Graphics Team    | CM-GFX-0001    |
| Vendor           | CM-VND-0001    |

**ID Rules:**
- Assigned only when token is USED
- Sequential per role
- Based on activation timestamp
- Immutable forever

### Security & Audit

**Security Failure Logging:**
- All failed token attempts logged
- Super Admin only access
- Read-only, no deletion
- Complete forensic traceability

**Failure Reasons Tracked:**
- Invalid token
- Token already used
- Role mismatch
- Token inactive
- Token locked (double-submit)

---

## 🎨 Global UI/UX Standards (Instruction 4)

### Expand/Collapse Pattern (Mandatory Everywhere)

All modules and sub-modules across the CRM must support:

* **Expand** (open details)
* **Suppress/Collapse** (hide details)

**Visual Requirements:**
- Rounded-edge blocks/cards
- Visually connected nested blocks (clear hierarchy)
- Consistent expand/collapse controls placement
- Stable UI (no confusing jumps)
- Header/label remains visible when collapsed

**Documentation:** See `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 👤 My Profile Module (Instruction 4)

### Purpose & Scope

**Who Has My Profile:**
- Super Admin
- Admin
- Manager
- Sales Team
- Accounts Team
- Development Team
- Graphics Team
- Vendor

**Core Behavior:**
- Profile is **NOT captured at registration**
- User enters dashboard after token onboarding
- Profile completion happens **inside the dashboard**
- **100% Profile Completion is mandatory for payment/work payout eligibility**
- Until 100% completion, payout eligibility is blocked (gated)

### Profile Lifecycle States

1. **DRAFT** – user can edit
2. **SUBMITTED** – optional review stage
3. **LOCKED** – final; user cannot edit without permission

### Profile Sections (Expandable/Collapsible Blocks)

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

### UI Requirements

**Top Header Shows:**
- "Profile Completion: XX%"
- Progress bar
- Section checklist (e.g., "KYC 3/6")

**Field State Colors:**
- Untouched = gray
- Filled/edited = active brand color
- Touched but invalid/empty = red border + error hint

**Documentation:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md` for detailed flows.

---

## 📁 Document Wallet Module (Instruction 4)

### Purpose & Access

**Placement:**
- Separate sidebar module in all panels
- Also accessible via My Profile as shortcut/linked section

**Purpose:**
- Store any important documents for the user
- Categories expandable without redesign

### Features

**Document Item:**
- Document Title (user-defined)
- Document Type (optional): ID / Medical / Education / Work / Other
- Notes (optional)
- Files (multiple): JPG/PNG/PDF

**Actions:**
- View
- Add file
- Remove file
- Rename
- Delete (subject to lock/permission rules)

**Secure Sharing:**
- Secure shareable link
- Optional password
- Expiry setting
- Revoke immediately
- QR code generation for share links

**Documentation:** See `FLOWS_AND_DIAGRAMS/document_wallet_flows.md` for detailed flows.

---

## 🏢 Company Profile (Instruction 4 - Partial)

**Current Scope:**
- Created/managed by Super Admin
- Stores company details
- Stores Branches/Work Locations
- Used as dropdown values in: My Profile → Company Identity → Work Location

**Note:** Full Company Profile specification will come in a future instruction.

---

## 💰 Payment/Payout Eligibility Gate (Instruction 4)

**Requirement:**
- Work payout/payment eligibility requires **100% My Profile completion**

**Behavior:**
- Until completion, payout-related actions are blocked
- UI must show why it is blocked (e.g., incomplete sections)

**Note:** Exact payout module specification will come in a future instruction.

---

## ⏰ Work Time Module (Instruction 5)

### Purpose & Scope

**Available to:**
- Super Admin
- Admin
- Manager
- Sales Team
- Accounts Team
- Development Team
- Graphics Team

**Not included:** Vendor and Client (separate schema later)

**Core Functionality:**
- Record daily Time In / Time Out and Breaks
- Calculate Net Working Time, Overtime, Undertime
- Feed attendance outcomes into future salary/work-payout logic

### Key Principles

- **No punch = Absent**
- Punches count only after verification by correct hierarchy
- Self-punching allowed but stored as DRAFT until verified
- Every modification fully audited

### Verification Chain

```
Sales/Accounts/Dev/GFX → Manager
Manager → Admin
Admin → Super Admin
Super Admin → Auto-approved
```

### Calculation Logic

- Gross Duration = Time Out − Time In
- Net Working Time = Gross Duration − Total Break Duration
- Default minimum: 8 hours net (configurable via Time Planner)
- Overtime: Net > Regular Time
- Undertime: Net < Regular Time

### Status Model

Each attendance day supports:
- DRAFT
- VERIFIED
- CORRECTED
- FLAGGED

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md` for complete flows.

---

## 🏢 Company Profile Module (Instruction 5)

### Purpose & Governance

**Access:** Super Admin only

**Purpose:** Company master data reused across CRM

### Components

**Company Identity:**
- Company Name

**Company Locations/Units:**
- Multiple units supported
- Minimum 1 unit required
- Standard address structure (reusable everywhere)
- PIN-based auto-fill (India-focused)

**Company Links/Profiles:**
- Google profile, LinkedIn, YouTube, Others
- Add more via plus button
- CRUD operations

**Company Documents Repository:**
- Default slots: COI, MOA, AOA, Company PAN, MSME, GST, etc.
- Custom document slots
- Upload/Replace/Remove/Preview (PDF, JPG, PNG)

**Documentation:** See `FLOWS_AND_DIAGRAMS/company_profile_flows.md` for complete flows.

---

## 📅 Time Planner Module (Instruction 5)

### Purpose & Governance

**Access:** Super Admin only

**Purpose:** Global policy engine for work time management

### Components

**Shift/Time Boundary Sets:**
- Selectable per Unit
- Multiple sets: Day shift, Night shift, Custom
- Defines: Day In time, Day Out time, Time Out threshold, Required net minutes

**Break Templates:**
- Name, Allowed minutes, Optional start/end windows
- Template breaks: Lunch/Dinner, Tea/Short Break
- Custom breaks supported

**Holiday Calendar (Global):**
- Types: Government, Public, Festival, Company off
- Visible to all internal panels
- Visible to Vendor & Client as read-only

**Leave Policy:**
- Default: 12 paid leaves/year, 12 sick leaves/year
- Monthly distribution automatic
- Paid leave counts as present (different color)

**Targets:**
- Weekly, monthly, quarterly targets
- Apply to entire team or selected users
- Define minimum presence/working hours

**Documentation:** See `FLOWS_AND_DIAGRAMS/time_planner_flows.md` for complete flows.

---

## 📁 Company Document Wallet Module (Instruction 5)

### Purpose & Governance

**Access:** Super Admin only

**Purpose:** Store company-level documents with grouping and secure sharing

### Features

**Document Grouping:**
- Multi-select documents
- Create named groups (Virtual Wallets)
- Group name editable

**Secure Sharing:**
- Share virtual wallet via secure link
- QR code generation
- Password protection
- Expiry dates
- Revoke anytime

**Use Cases:**
- Loan pack
- Audit pack
- Vendor onboarding pack
- Accounts compliance pack

**Documentation:** See `FLOWS_AND_DIAGRAMS/company_doc_wallet_flows.md` for complete flows.

---

## 🎨 Global Theming & Color Governance (Instruction 5)

### Governance

**Access:** Super Admin only

**Purpose:** Global color theming for calendar, work time reports, charts, clock/arcs

### Recommended Color Palette

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

---

## 📝 Notes

- This overview will expand as more instructions are added
- Panel-specific details documented in `PANEL_WISE_OVERVIEW/`
- Process flows documented in `FLOWS_AND_DIAGRAMS/`
- All information derived from Captain's instructions only
- ATMS details based on Instruction 3 (Final & Locked)
- UI/UX standards, My Profile, and Document Wallet based on Instruction 4 (Locked)
- Work Time, Company Profile, Time Planner, and Company Document Wallet based on Instruction 5 (Locked)
- Team Management governance layer based on Instruction 6 (Locked)
- Work Time Requests and My Activity (universal accountability) based on Instruction 7 (Locked)

---

## ⏰ Work Time Module (Instruction 5)

### Purpose & Scope

**Available to:**
- Super Admin
- Admin
- Manager
- Sales Team
- Accounts Team
- Development Team
- Graphics Team

**Not included:**
- Vendor (separate schema later)
- Client (separate schema later)

**Core Functionality:**
- Record daily Time In / Time Out and Breaks
- Calculate Net Working Time, Overtime, Undertime
- Feed attendance outcomes into future salary/work-payout logic

### Attendance Principles

- **No punch = Absent**
- Punches count only after **verification** by correct hierarchy
- Self-punching allowed but stored as **DRAFT** until verified
- Every modification is fully audited

### Verification Chain

```
Sales/Accounts/Dev/GFX → Manager verifies
Manager → Admin verifies
Admin → Super Admin verifies
Super Admin → Auto-approved
```

### Status Model

Each attendance day supports:
- DRAFT
- VERIFIED
- CORRECTED
- FLAGGED

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md` for complete flows.

---

## 🏢 Company Profile Module (Instruction 5)

### Purpose & Governance

**Access:** Super Admin only

**Purpose:** Company master data reused across CRM

**Features:**
- Company Identity (Company Name)
- Company Locations/Units (multiple units, minimum 1 required)
- Company Links/Profiles (Google, LinkedIn, YouTube, etc.)
- Company Documents Repository (COI, MOA, AOA, PAN, MSME, GST, etc.)

**Standard Address Structure:**
- Address Line 1 & 2
- Nearby Landmark
- Village
- City
- State
- PIN Code (auto-fills city/state for India)

**Documentation:** See `FLOWS_AND_DIAGRAMS/company_profile_flows.md` for complete flows.

---

## 📅 Time Planner Module (Instruction 5)

### Purpose & Governance

**Access:** Super Admin only

**Purpose:** Global policy engine for work time management

**Features:**
- Shift/Time Boundary Sets (Day shift, Night shift, Custom per Unit)
- Break Templates (Lunch/Dinner, Tea/Short Break, custom breaks)
- Global Holiday Calendar (Government, Public, Festival, Company off)
- Leave Policy (12 paid + 12 sick leaves/year default)
- Targets (Weekly, monthly, quarterly for teams/individuals)

**Holiday Visibility:**
- Visible to all internal panels
- Visible to Vendor & Client as read-only

**Documentation:** See `FLOWS_AND_DIAGRAMS/time_planner_flows.md` for complete flows.

---

## 📁 Company Document Wallet Module (Instruction 5)

### Purpose & Governance

**Access:** Super Admin only

**Purpose:** Store company-level documents and create grouped virtual wallets

**Features:**
- Document grouping (multi-select documents into named groups)
- Secure sharing (link + QR code)
- Password protection
- Expiry dates
- Revoke anytime

**Use Cases:**
- Loan pack
- Audit pack
- Vendor onboarding pack
- Accounts compliance pack

**Documentation:** See `FLOWS_AND_DIAGRAMS/company_doc_wallet_flows.md` for complete flows.

---

## 🎨 Global Theming & Color Governance (Instruction 5)

### Governance

**Access:** Super Admin only

**Purpose:** Global color theming for calendar, work time reports, charts, clock/arcs

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

---

---

## ⚙️ My Profile Governance & Master Input Planner (Instruction 7 Addendum)

### Purpose & Governance

**Access:** Super Admin only

**Purpose:** Controls what data is collected, what is mandatory, what is optional, and what is visible across the system.

**Governs:**
- Field-level and group-level governance for My Profile
- Mandatory vs optional vs hidden data
- 100% profile completion rules
- Downstream gates (payments, agreements, dashboard unlock)

### Scope

**Applies to:**
- Admin, Manager, Sales, Accounts, Development, GFX, Vendor
- Client (relaxed rules allowed)

### Data Structure

**Profile data groups:**
- Personal Identity
- Contact Details
- Address
- Guardian Details
- Nominee Details
- Emergency Contact
- Bank & Payout Details
- Health & Fitness (Optional)
- KYC Documents
- Signature Upload

### Governance Controls

**For each field/group:**
- **Visibility:** ON / OFF
- **Requirement:** Mandatory / Optional (only if Visible = ON)

**Rules:**
- If Visible = OFF → field/group does not exist for users
- If Visible = ON:
  - Mandatory = ON → blocks profile completion until filled
  - Mandatory = OFF → optional

**Group-level mandatory:**
- Affects all child fields by default
- Field-level override allowed (Super Admin can set child field to Optional)

### Effect on System

- Profile Completion % recalculates dynamically
- Payments, Agreements, Dashboard access depend on completion %
- Changes apply instantly system-wide

**Documentation:** See `FLOWS_AND_DIAGRAMS/my_profile_governance_flows.md` for complete flows.

---

## 📄 Agreement Planner & Agreement System (Instruction 7 Addendum)

### Purpose & Availability

**Agreement Planner:** Super Admin only (templates)

**Agreement System:** All panels (governed)

### Agreement Categories

**Internal Team:**
- Welcome Letter / Offer Letter
- Probation Agreement
- Employment / Work Agreement
- Internal NDA
- Policy Acknowledgement

**Vendor:**
- Vendor Agreement
- Payment Terms Agreement
- NDA (if applicable)

**Client:**
- Service Agreement
- NDA (optional / service-dependent)
- Payment & Milestone Agreement

### Agreement Planner Features

**Super Admin capabilities:**
- Create agreement templates
- Define agreement type & target panel(s)
- Insert dynamic fields from My Profile and Company Profile
- Attach legal blocks (IP, NDA, payment terms, confidentiality)
- Mark clauses as mandatory (checkbox acceptance)

**Editing rules:**
- Only Super Admin can edit templates
- Admin can generate instances but cannot modify templates
- Templates editable only before signing
- Once signed → immutable

### Signing Preconditions

- My Profile must be 100% complete (as per governance rules)
- Mandatory documents + signature must exist

### Signing Flow

1. Agreement generated
2. Agreement visible to signer
3. OTP triggered
4. OTP verified
5. Agreement signed
6. PDF locked + archived

**OTP Rules:**
- **Internal Team:** OTP sent to company-provided email only (permit@corementors.in)
- **Vendor/Client:** OTP sent to primary email (user-selected)
- **Defaults:** 5 min expiry, 60 sec resend cooldown, max 5 attempts

### Dashboard Locking Rule

**Internal Team & Vendor:**
- Initially only My Profile visible
- After profile completion → Agreements unlock
- After agreement signed → Full dashboard unlock

**Deadlock prevention:**
- If governance disables agreements for a role/panel, then after My Profile completion → dashboard unlocks without agreements

### Agreement Tracking

**Statuses:** Draft, Sent, Viewed, Signed, Expired, Replaced

**Visibility:**
- User sees own agreements
- Reporting authority sees subordinate agreements
- Super Admin sees all agreements

**Documentation:** See `FLOWS_AND_DIAGRAMS/agreement_system_flows.md` for complete flows.

---

## 🔒 Security, Audit & Legal Integrity (Instruction 7 Addendum)

### Audit Trail (Mandatory)

**Every agreement action logs:**
- Created by
- Edited by (only Super Admin)
- Sent by
- Viewed by
- OTP verified by
- Signed by
- Timestamp for each event

### Data Protection

- Signatures, stamps, OTP logs are encrypted
- No peer access to sensitive assets
- Super Admin access is implicit but never exposed to normal users

### Ethical Lock

- No agreement can be edited after signing
- Revisions require a new agreement instance

---

## 🔒 Locked Module Names (Instruction 9)

### System Constants (Hard Locks)

**Locked Names (Must Be Used Everywhere):**
- Agreement module name: **Agreement Center**
- Super Admin agreement master module: **Agreement Policy Master**
- Super Admin profile field governance module: **Profile Policy Builder**

### Enforcement Rules

- These names are **system constants** (cannot be changed by Admin/Manager/Sales/etc.)
- All menus, routes, breadcrumbs, headings, permissions, and activity logs must reference these exact names
- If any legacy names exist in code/UI, replace them with these final names

### Logging

- Any create/update/view action inside these modules must be logged into **My Activity** as:
  - action_type: MODULE_ACCESS / MODULE_UPDATE / MODULE_CREATE / MODULE_DELETE (as applicable)
  - module_name: exactly as above (Agreement Center / Agreement Policy Master / Profile Policy Builder)

---

## 📧 Company Email Governance (Instruction 9)

### Core Rule

- **Company email IDs are predefined and assigned by authority** (Admin/Super Admin) under **Team Management**
- A user **cannot edit/change** their company email ID in My Profile or anywhere else

### Data Requirements

For every internal user (Admin/Manager/Sales/Accounts/Dev/GFX):
- company_email (string) — assigned only by Admin/Super Admin
- company_email_status (enum): ACTIVE / INACTIVE (optional but recommended)
- company_email_assigned_by (user_id + role)
- company_email_assigned_at (timestamp)
- company_email_last_password_reset_at (timestamp, optional)
- company_email_password_policy_version (optional for future)

### Permission Rules

- Edit company_email is allowed only to:
  - Super Admin
  - Admin (if Admin is allowed to assign under Super Admin governance; default allow)
- Manager cannot change company email for anyone
- The user cannot edit their own company email

### UI/UX Requirements

- Show company email with:
  - Lock icon
  - Label: "Assigned by Admin / Super Admin"
  - "Last updated" timestamp
- No edit icon for normal users
- Admin/Super Admin sees an "Assign / Change Company Email" action inside Team Management user profile

### Audit & Activity Log

Any assignment/change of company email must create:
- audit log entry (before/after, who changed, timestamp, reason)
- My Activity entries for:
  - the authority who changed it
  - the impacted user (as "Company Email Updated by Authority")

---

## 🔐 Company Email Password Change Request (Instruction 9)

### Core Rule

- Users **cannot directly change** the password of their company email
- They can only raise a **Password Change Request** through **Request Center** (Work Time Requests)

### New Request Type

**Company Email Password Change Request** - Available for:
- Admin, Manager, Sales, Accounts, Dev, GFX
- Super Admin (allowed, but final authority—auto accept path may apply)

### Request Form Fields

1. Company Email (read-only, auto-filled)
2. New Password (input)
3. Confirm Password (input)
4. Reason / Note (text field)
5. Submit button

### Password Input Rules

- Length: **8 to 16 characters**
- Must contain: lowercase, uppercase, digits, symbols
- New Password masked by default (•••••)
- Confirm Password must match exactly
- Submit disabled until all requirements met
- On valid match, submit button enabled with visual emphasis

### Approval Chain

- Team member requests → Manager approval
- Manager requests → Admin approval
- Admin requests → Super Admin approval
- Super Admin requests → Auto-accept (final authority)

### Security & Privacy Rules

- Do NOT store plaintext password anywhere
- Store only: request metadata, validation status, completion flag, timestamps, who approved
- If implementation requires passing password to executor flow: transient only (in memory) OR encrypted-at-rest + strict access + auto purge after completion

### Logging

- Request lifecycle logs in Request Center
- My Activity logs for: user created/submitted, authority approved/rejected, executor marked completed
- Audit log capturing: who approved, when approved, who executed, when executed, completion note (optional)

---

## 🚪 Vendor Dashboard Unlock Exception (Instruction 9)

### Core Exception Rule

**Vendor access is liberal compared to internal team:**

**Vendor flow:**
- Vendor joins via **Join the Team (token)**
- Vendor must complete **mandatory profile requirements** first
- Vendor agreement exists, BUT:
  - Vendor may access dashboard **even if agreement is not yet signed**

This exception applies **ONLY to Vendor**.

### Internal Team Rule Remains Strict

Internal team remains strict:
- Must complete profile 100%
- Must sign agreement via OTP
- Only then full dashboard unlocks

### Gating Logic

**Vendor gating:**
- If profile completion meets mandatory requirements (as per Profile Policy Builder) → allow dashboard access
- Agreement Center status does NOT block access for Vendor

**Internal team gating:**
- Profile completion 100% (as governed) AND
- Agreement Center required agreements signed (OTP done) → only then unlock dashboard

### UI/UX Behavior

**For Vendor:**
- If agreement pending, show non-blocking banner: "Agreement pending — please sign to complete compliance."
- Vendor can still browse and use dashboard features

**For Internal team:**
- If agreement pending, dashboard remains locked: "Complete Profile + Sign Agreement to unlock dashboard."

### Logging

- When vendor is granted access under exception: log My Activity: "Dashboard Unlocked (Vendor Exception Applied)"
- When internal user is blocked: log My Activity: "Dashboard Locked (Agreement Pending)"

---

---

## 🏗️ Work Hub — Global Execution Engine (Instruction 9)

### Purpose & Scope

**Purpose:** Global execution engine for managing work orders, service delivery, and client projects.

**Access:** Sales, Manager, Admin, Super Admin, Client (via services)

### Creation Rights

**Can create work:**
* Sales (with permit from Admin/Super Admin)
* Manager
* Admin
* Super Admin
* Client (via services)

**Cannot create work:**
* Accounts
* Dev
* GFX
* Vendor

### Service Master Dependency

**Service Master (Super Admin only):**
* Defines service stages
* Sets SLA requirements
* Defines tasks and deliverables
* Configures OTP requirements
* Specifies required documents
* Assigns role involvement

### Work Lifecycle (Locked)

**States:**
0. **NEW** — Work created
1. **ACKNOWLEDGED** — Quotation + ETA provided
2. **QUOTATION SENT** — Quotation sent to client
3. **CLIENT RESPONSE** — Client responds (Approve / Additional Request / Callback)
4. **BINDING ACCEPTANCE** — OTP for payment/legal required
5. **EXECUTION** — Work in progress
6. **COMPLETED** — Work finished
7. **CLOSED** — Work closed

**Note:** "No Negotiation" term allowed — use **Additional Request** only.

### Timeline UI

**Visual representation:**
* Vertical milestone line
* Left side: Internal actions
* Right side: Client actions
* Each node shows:
  * Who (actor)
  * When (timestamp)
  * Attachments
  * OTP marker (if applicable)
  * Stage transition

**Documentation:** See `FLOWS_AND_DIAGRAMS/work_hub_flows.md` for complete flow details.

---

## 🏗️ Work Hub — Department Work Pools + Operational Intelligence (Instruction 10)

### Department-Tagged Work Pools

**Mandatory Department Tag:**
* Every Work Item MUST have a mandatory **Department** tag
* Department pools (minimum):
  * Sales
  * Accounts
  * Development
  * GFX
  * Vendor (vendor view is assignment-only)

### Department Pool Visibility

**Internal Team Visibility:**
* Any internal team member inside a department can view **all work items** in that department's pool
* Cross-department visibility is not implied (keep standard role rules)

### Vendor Visibility Rule

**Vendor Access:**
* Vendor can see **ONLY** work explicitly assigned to that vendor
* Vendor must not see the whole "Vendor pool" as a department board

### Work Item Minimum Data Fields

**Mandatory Fields:**
* Serial number
* Created timestamp
* Created by (role + name)
* Department tag
* Work title/summary
* Client reference (if applicable)
* Deadline / timeline (mandatory)
* Current status
* Priority (optional)

### Responsibility Model

**Assignment Structure:**
* Multiple "Responsible Persons" (contributors)
* Exactly **ONE Primary Assignee** (single accountable owner)
* Primary Assignee MUST explicitly **Accept/Acknowledge** the work (acceptance state required)

### Reassignment + Department Correction

**Reassignment Authority:**
* Sales/Manager/Admin/Super Admin can reassign:
  * Primary Assignee
  * Responsible persons
  * Department (move to correct pool)

**Audit Requirements:**
* Any reassignment or department move MUST be audit logged with:
  * Old value → New value
  * Changed by (role + name)
  * Timestamp
  * Reason

### Unclaimed Work Escalation

**10-Minute Alert:**
* If Primary Assignee does not acknowledge/claim within **10 minutes**:
  * Alert must notify: **Manager + Admin + Super Admin**

### Progress vs Timeline Warnings

**Progress Tracking:**
* Primary Assignee must maintain **Progress %** on the Work Item
* System compares progress vs time elapsed and triggers escalation warnings:
  * At **50%** time elapsed: if progress < 50% → Warning 1 to Department Head/Manager
  * At **60%** time elapsed: still behind → Warning 2
  * At **70%** time elapsed: still behind → Warning 3
* Goal: early intervention to protect deadline

### Work Instructions Input

**Input Methods:**
* Templates (quick structured instruction blocks)
* Mic recording (voice)
* Manual typing (always available)

**Voice Input Process:**
* Voice → transcription
* User can edit final text
* Save final instruction text (and optionally store audio reference if policy allows)

### Work Hub Status + Filters

**Filtering Support:**
* Pending / Unclaimed
* Ongoing
* Completed
* Overdue

**Work Card/List Display:**
* Time to acknowledge
* Time remaining
* Completion timestamp (when completed)

---

## 👥 Client Sub-Users & Controls (Instruction 9)

### Purpose & Scope

**Purpose:** Allow clients to create and manage sub-users with granular permission controls.

**Roles:**
* **Client Owner** — Primary client account
* **Client Sub-Users** — Secondary users created by client

### Core Rules

**Sub-User Creation:**
* Client creates sub-users
* Client sets permissions for each sub-user
* Activity logs visible to client (non-forensic)
* Full forensic metadata visible only to Admin/Super Admin

### Primary Email Change

**Process:**
* OTP to current email required
* Recovery via assigned salesperson allowed with approval

### Deletion Rules

**Soft Delete:**
* Soft delete only (no hard delete)
* Client sees deleted sub-users
* Admin/Super Admin retain full visibility

**Documentation:** See `FLOWS_AND_DIAGRAMS/client_sub_users_flows.md` for complete flow details.

---

## 👥 Client Sub-Users — Security Metadata + Salesperson Authority (Instruction 10)

### Sub-User Creation Authority

**Creation Rights:**
* Client Owner can create sub-users (existing)
* **NEW:** Assigned Salesperson (reporting authority) can also create sub-users for that client (when required)

### Sub-User Credentials

**Credential Rules:**
* Sub-user gets system-generated User ID
* Password is set by client (or client can reset)

### Activity Logging Security Metadata

**Metadata Captured:**
* Device information
* IP address
* **MAC address**
* Location data

**Visibility:**
* Admin + Super Admin can view full sensitive metadata
* Client sees activity trail for their sub-users but not full forensic metadata

### Primary Email Recovery via Salesperson Mailbox

**Recovery Process:**
* If client loses access to current primary email:
  * OTP can be routed to assigned salesperson's **company email** for recovery
* This recovery flow must be tracked + audited (as a controlled request/event)

### Soft Delete Marker

**Soft Delete Behavior:**
* Client "deletions" are soft-deletes:
  * Hidden as active for client
  * Retained internally
  * Admin/Super Admin can view deleted history with distinct marker/color/state

---

## 📋 Mandatory System-Wide Requirements (Instruction 9)

### Logging Requirements

**All actions must be logged in:**
* **My Activity** — User-visible activity logs
* **Audit Logs** — Complete forensic audit trail

### Authority Override Tracking

* All authority overrides must be tracked
* Full audit trail for any override actions

### Voice + Transcription Support

**Voice input supported in:**
* Work Time Requests
* Work Hub Additional Requests

**Input methods:**
* Voice recording + transcription
* Manual typing (alternative)

### OTP Rules Enforcement

* OTP rules strictly enforced as defined
* No bypass or override allowed

---

**Status:** Foundation established. ATMS system fully documented per Instruction 3. Global UI/UX, My Profile, and Document Wallet documented per Instruction 4. Work Time, Company Profile, Time Planner, and Company Document Wallet documented per Instruction 5. Team Management governance layer documented per Instruction 6. Work Time Requests and My Activity (universal accountability) documented per Instruction 7. My Profile Governance, Agreement System, and Security/Audit documented per Instruction 7 Addendum. Agreement System, Email Governance, Work Hub, Client Controls & Execution Engine documented per Instruction 9. Work Hub Department Pools + Operational Intelligence and Client Sub-Users Security Metadata + Salesperson Authority documented per Instruction 10.

