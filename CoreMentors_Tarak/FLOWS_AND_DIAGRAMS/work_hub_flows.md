# Work Hub — Global Execution Engine – Complete Flows

**Instruction Reference:** Instruction 9, Instruction 10  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Work Hub, the global execution engine for managing work orders, service delivery, and client projects.

---

## 🏢 Department-Tagged Work Pools (Instruction 10)

### Mandatory Department Tag

**Requirement:**
* Every Work Item MUST have a mandatory **Department** tag
* Department tag cannot be empty or null

### Department Pools

**Available Departments (minimum):**
* Sales
* Accounts
* Development
* GFX
* Vendor (vendor view is assignment-only; see Vendor Visibility Rule)

### Department Assignment Flow

```
Work Item created
    ↓
Department selection required:
  ┌─────────────────────────────────┐
  │  Create Work Item              │
  │                                 │
  │  Title: [________________]     │
  │  Department: [Sales ▼]         │
  │  (Required field)               │
  │                                 │
  │  [Create] [Cancel]              │
  └─────────────────────────────────┘
    ↓
Department tag assigned
    ↓
Work Item added to department pool
```

---

## 👁️ Department Pool Visibility (Instruction 10)

### Internal Team Visibility

**Visibility Rules:**
* Any internal team member inside a department can view **all work items** in that department's pool
* Cross-department visibility is not implied (keep standard role rules)
* Do not open global visibility unless explicitly allowed later

### Visibility Flow

```
User opens Work Hub
    ↓
System checks: User department?
    ↓
    ├─ Sales Team → Show Sales pool
    │              (All Sales work items)
    │
    ├─ Accounts Team → Show Accounts pool
    │                 (All Accounts work items)
    │
    ├─ Development Team → Show Development pool
    │                    (All Development work items)
    │
    ├─ GFX Team → Show GFX pool
    │            (All GFX work items)
    │
    └─ Manager/Admin/Super Admin → Show all pools
                                   (Based on authority)
```

### Cross-Department Access

**Restriction:**
* Sales team member cannot see Accounts pool
* Accounts team member cannot see Development pool
* Cross-department visibility requires explicit permission

---

## 👤 Vendor Visibility Rule (Instruction 10)

### Vendor Access Restriction

**Vendor Visibility:**
* Vendor can see **ONLY** work explicitly assigned to that vendor
* Vendor must not see the whole "Vendor pool" as a department board
* Vendor cannot browse unassigned work

### Vendor Work View Flow

```
Vendor opens Work Hub
    ↓
System checks: Vendor role?
    ↓
    ├─ Vendor → Show ONLY assigned work
    │           ↓
    │           Filter: assigned_to = vendor_id
    │           ↓
    │           Display assigned work items only
    │
    └─ Internal Team → Show department pool
                       (All work in department)
```

---

## 📋 Work Item Minimum Data Fields (Instruction 10)

### Mandatory Fields

**Required Fields:**
* **Serial number** — Unique identifier
* **Created timestamp** — When work was created
* **Created by** — Role + name of creator
* **Department tag** — Mandatory department assignment
* **Work title/summary** — Descriptive title
* **Client reference** — If applicable
* **Deadline / timeline** — Mandatory (can be set at creation or by authority)
* **Current status** — Work lifecycle status
* **Priority** — Optional priority level

### Work Item Data Structure

```
Work Item {
  serial_number: string (required)
  created_timestamp: datetime (required)
  created_by: {
    role: string
    name: string
    user_id: string
  } (required)
  department_tag: enum (required)
  work_title: string (required)
  work_summary: string (optional)
  client_reference: string (optional)
  deadline: datetime (required)
  timeline: duration (required)
  current_status: enum (required)
  priority: enum (optional)
}
```

---

## 👥 Responsibility Model (Instruction 10)

### Assignment Structure

**Work Item Supports:**
* Multiple "Responsible Persons" (contributors)
* Exactly **ONE Primary Assignee** (single accountable owner)

### Primary Assignee Acceptance

**Acceptance Requirement:**
* Primary Assignee MUST explicitly **Accept/Acknowledge** the work
* Acceptance state required before work can proceed
* Work remains in "Unclaimed" state until accepted

### Assignment Flow

```
Work Item created
    ↓
Allocator assigns:
  ┌─────────────────────────────────┐
  │  Assign Work Item              │
  │                                 │
  │  Primary Assignee:             │
  │  [Select User ▼]                │
  │  (Single selection)             │
  │                                 │
  │  Responsible Persons:           │
  │  ☑ User 1                      │
  │  ☑ User 2                      │
  │  ☐ User 3                      │
  │  (Multiple selection)           │
  │                                 │
  │  [Assign] [Cancel]              │
  └─────────────────────────────────┘
    ↓
Work Item assigned
    ↓
Status: UNCLAIMED
    ↓
Notification sent to Primary Assignee
    ↓
Primary Assignee must accept/acknowledge
    ↓
Status: ACKNOWLEDGED (after acceptance)
```

### Acceptance Flow

```
Primary Assignee receives notification
    ↓
Opens Work Item
    ↓
Views work details
    ↓
Clicks "Accept / Acknowledge"
    ↓
Acceptance Confirmation:
  ┌─────────────────────────────────┐
  │  Accept Work Item?              │
  │                                 │
  │  Title: Website Redesign        │
  │  Deadline: 2024-02-15          │
  │                                 │
  │  [Accept] [Decline]             │
  └─────────────────────────────────┘
    ↓
Primary Assignee accepts
    ↓
Status: ACKNOWLEDGED
    ↓
Work can proceed
```

---

## 🔄 Reassignment + Wrong Department Correction (Instruction 10)

### Reassignment Authority

**Who Can Reassign:**
* Sales
* Manager
* Admin
* Super Admin

### Reassignment Capabilities

**Can Reassign:**
* Primary Assignee
* Responsible persons
* Department (move to correct pool)

### Reassignment Flow

```
User opens Work Item
    ↓
Clicks "Reassign"
    ↓
Reassignment Form:
  ┌─────────────────────────────────┐
  │  Reassign Work Item            │
  │                                 │
  │  Current Primary Assignee:      │
  │  John Doe (Dev)                 │
  │                                 │
  │  New Primary Assignee:          │
  │  [Select User ▼]                │
  │                                 │
  │  Current Department: Development │
  │  New Department: [Sales ▼]     │
  │                                 │
  │  Reason (required):             │
  │  [________________________]    │
  │                                 │
  │  [Reassign] [Cancel]            │
  └─────────────────────────────────┘
    ↓
User confirms reassignment
    ↓
System performs reassignment
    ↓
Audit log created:
  - Old Primary Assignee → New Primary Assignee
  - Old Department → New Department
  - Changed by: User (role + name)
  - Timestamp: now
  - Reason: provided reason
    ↓
Work Item moved to new department pool
    ↓
Notifications sent
```

### Audit Log Requirements

**Mandatory Audit Data:**
* Old value → New value
* Changed by (role + name)
* Timestamp
* Reason

---

## ⚠️ Unclaimed Work Escalation (Instruction 10)

### 10-Minute Alert Rule

**Escalation Trigger:**
* If Primary Assignee does not acknowledge/claim within **10 minutes**
* Alert must notify: **Manager + Admin + Super Admin**

### Escalation Flow

```
Work Item assigned
    ↓
Status: UNCLAIMED
    ↓
Timer starts (10 minutes)
    ↓
10 minutes elapsed
    ↓
Primary Assignee has not accepted
    ↓
System triggers escalation
    ↓
Alerts sent to:
  - Manager (of Primary Assignee)
  - Admin
  - Super Admin
    ↓
Alert Content:
  "Work Item [Serial] unclaimed for 10 minutes
   Primary Assignee: [Name]
   Department: [Department]
   Deadline: [Deadline]"
    ↓
Escalation logged in audit trail
```

---

## 📊 Progress vs Timeline Warnings (Instruction 10)

### Progress Tracking

**Requirement:**
* Primary Assignee must maintain **Progress %** on the Work Item
* Progress % must be updated regularly

### Timeline Comparison

**System Comparison:**
* System compares progress vs time elapsed
* Triggers escalation warnings at thresholds

### Warning Thresholds

**Warning Levels:**
* At **50%** time elapsed: if progress < 50% → Warning 1 to Department Head/Manager
* At **60%** time elapsed: still behind → Warning 2
* At **70%** time elapsed: still behind → Warning 3

**Goal:** Early intervention to protect deadline

### Progress Warning Flow

```
Work Item in EXECUTION
    ↓
Deadline: 2024-02-15
Start Date: 2024-01-15
Total Duration: 30 days
    ↓
Current Date: 2024-01-30 (50% elapsed)
    ↓
System checks: Progress %?
    ↓
    ├─ Progress >= 50% → No warning
    │
    └─ Progress < 50% → Warning 1
                         ↓
                         Alert to Department Head/Manager
                         ↓
                         Current Date: 2024-02-06 (60% elapsed)
                         ↓
                         System checks: Progress %?
                         ↓
                         ├─ Progress >= 60% → Warning cleared
                         │
                         └─ Progress < 60% → Warning 2
                                              ↓
                                              Alert escalated
                                              ↓
                                              Current Date: 2024-02-11 (70% elapsed)
                                              ↓
                                              System checks: Progress %?
                                              ↓
                                              ├─ Progress >= 70% → Warning cleared
                                              │
                                              └─ Progress < 70% → Warning 3
                                                                   ↓
                                                                   Critical alert
```

---

## 🎤 Work Instructions Input (Instruction 10)

### Input Methods

**Available Methods:**
* Templates (quick structured instruction blocks)
* Mic recording (voice)
* Manual typing (always available)

### Instructions Input Flow

```
Allocator assigns Work Item
    ↓
Clicks "Add Instructions"
    ↓
Instructions Input Form:
  ┌─────────────────────────────────┐
  │  Add Work Instructions         │
  │                                 │
  │  Method:                        │
  │  ○ Template                    │
  │  ○ Voice Recording             │
  │  ○ Manual Typing               │
  │                                 │
  │  [Select Method]                │
  └─────────────────────────────────┘
    ↓
User selects method
    ↓
    ├─ Template → Select template
    │            ↓
    │            Template applied
    │            ↓
    │            User can edit
    │
    ├─ Voice Recording → Tap mic
    │                    ↓
    │                    Record voice
    │                    ↓
    │                    Stop recording
    │                    ↓
    │                    System transcribes
    │                    ↓
    │                    Transcription displayed
    │                    ↓
    │                    User can edit
    │
    └─ Manual Typing → Type instructions
                       ↓
                       Save
    ↓
Final instructions saved
    ↓
Instructions attached to Work Item
```

### Voice Input Process

**Voice → Transcription:**
* User records voice
* System transcribes to text
* User can edit final text
* Save final instruction text
* Optionally store audio reference (if policy allows)

---

## 🔍 Work Hub Status + Filters (Instruction 10)

### Filtering Support

**Available Filters:**
* Pending / Unclaimed
* Ongoing
* Completed
* Overdue

### Filter Flow

```
User opens Work Hub
    ↓
Filter Options:
  ┌─────────────────────────────────┐
  │  Work Hub                      │
  │                                 │
  │  Filters:                      │
  │  [All] [Pending] [Ongoing]     │
  │  [Completed] [Overdue]         │
  │                                 │
  │  Department: [Sales ▼]         │
  │                                 │
  │  [Apply Filters]                │
  └─────────────────────────────────┘
    ↓
User selects filters
    ↓
Work items filtered
    ↓
Filtered list displayed
```

### Work Card/List Display

**Required Information:**
* Time to acknowledge (for unclaimed work)
* Time remaining (for ongoing work)
* Completion timestamp (when completed)

### Work Card Display

```
┌─────────────────────────────────────────┐
│  Work Item: WH-2024-001                 │
│  Title: Website Redesign                │
│  Department: Development                │
│  Status: Ongoing                         │
│  Primary Assignee: John Doe              │
│  Progress: 65%                           │
│  Time Remaining: 5 days                  │
│  Deadline: 2024-02-15                    │
│  Priority: High                          │
└─────────────────────────────────────────┘
```

---

## 👥 Creation Rights

### Who Can Create Work

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

### Sales Permit

**Sales Permission:**
* Admin/Super Admin may grant dynamically
* Sales can create work only if permit granted
* Permit can be revoked at any time

### Creation Flow

```
User attempts to create work
    ↓
System checks: User role?
    ↓
    ├─ Sales → Check permit
    │           ↓
    │           ├─ Permit granted → Allow
    │           │
    │           └─ No permit → Block
    │                          "Sales permit required"
    │
    ├─ Manager/Admin/Super Admin → Allow
    │
    ├─ Client (via services) → Allow
    │
    └─ Accounts/Dev/GFX/Vendor → Block
                                  "Cannot create work"
```

---

## 🏗️ Service Master Dependency

### Service Master (Super Admin Only)

**Purpose:** Defines service templates and configurations.

**Configurations:**
* **Stages** — Work lifecycle stages
* **SLA** — Service level agreements
* **Tasks** — Required tasks and deliverables
* **OTP Requirements** — When OTP is mandatory
* **Required Documents** — Documents needed at each stage
* **Role Involvement** — Which roles participate in each stage

### Service Master Configuration Flow

```
Super Admin opens Service Master
    ↓
Selects service type
    ↓
Configuration Form:
  ┌─────────────────────────────────┐
  │  Service: Web Development       │
  │                                 │
  │  Stages:                        │
  │  1. NEW                         │
  │  2. ACKNOWLEDGED                │
  │  3. QUOTATION SENT              │
  │  4. CLIENT RESPONSE             │
  │  5. BINDING ACCEPTANCE          │
  │  6. EXECUTION                   │
  │  7. COMPLETED                   │
  │  8. CLOSED                      │
  │                                 │
  │  SLA:                           │
  │  - Quotation: 48 hours          │
  │  - Execution: 30 days          │
  │                                 │
  │  OTP Required:                  │
  │  ☑ BINDING ACCEPTANCE           │
  │                                 │
  │  Required Documents:            │
  │  - Project Brief                │
  │  - Design Mockups               │
  │                                 │
  │  Role Involvement:              │
  │  - Sales: All stages            │
  │  - Dev: Execution, Completed    │
  │  - GFX: Execution               │
  │                                 │
  │  [Save Configuration]           │
  └─────────────────────────────────┘
    ↓
Service template saved
    ↓
Available for work creation
```

---

## 🔄 Work Lifecycle (LOCKED)

### Lifecycle States

**Complete lifecycle:**
```
0. NEW
   ↓
1. ACKNOWLEDGED (quotation + ETA)
   ↓
2. QUOTATION SENT
   ↓
3. CLIENT RESPONSE
   ├─ Approve
   ├─ Additional Request
   └─ Callback
   ↓
4. BINDING ACCEPTANCE (OTP for payment/legal)
   ↓
5. EXECUTION
   ↓
6. COMPLETED
   ↓
7. CLOSED
```

### State Details

**0. NEW:**
* Work created
* Initial state
* Awaiting acknowledgment

**1. ACKNOWLEDGED:**
* Quotation prepared
* ETA provided
* Ready to send to client

**2. QUOTATION SENT:**
* Quotation sent to client
* Awaiting client response

**3. CLIENT RESPONSE:**
* **Approve** — Client approves quotation
* **Additional Request** — Client requests changes (no negotiation, use this only)
* **Callback** — Client requests callback/discussion

**4. BINDING ACCEPTANCE:**
* Client accepts binding terms
* OTP required for payment/legal
* OTP sent to client email

**5. EXECUTION:**
* Work in progress
* Tasks being executed
* Team members assigned

**6. COMPLETED:**
* Work finished
* All deliverables completed
* Awaiting closure

**7. CLOSED:**
* Work closed
* Final state
* No further actions

### State Transition Flow

```
Work created → NEW
    ↓
Internal team prepares quotation
    ↓
ACKNOWLEDGED (quotation + ETA)
    ↓
Quotation sent to client
    ↓
QUOTATION SENT
    ↓
Client responds:
    ├─ Approve → BINDING ACCEPTANCE
    ├─ Additional Request → Back to ACKNOWLEDGED (revised quotation)
    └─ Callback → Schedule callback
    ↓
BINDING ACCEPTANCE (OTP required)
    ↓
OTP verified
    ↓
EXECUTION
    ↓
Work completed
    ↓
COMPLETED
    ↓
Work closed
    ↓
CLOSED
```

---

## 📊 Timeline UI

### Visual Representation

**Timeline Structure:**
```
┌─────────────────────────────────────────┐
│         WORK TIMELINE                   │
│                                         │
│  ┌─ NEW                                │
│  │  Created by: Sales (CM-SLS-0001)   │
│  │  When: 2024-01-15 10:00 AM         │
│  │                                     │
│  ├─ ACKNOWLEDGED                       │
│  │  Created by: Manager (CM-MGR-0001) │
│  │  When: 2024-01-15 11:00 AM         │
│  │  Attachments: Quotation.pdf        │
│  │                                     │
│  ├─ QUOTATION SENT                     │
│  │  Created by: Sales (CM-SLS-0001)   │
│  │  When: 2024-01-15 12:00 PM         │
│  │  Sent to: Client Owner             │
│  │                                     │
│  ├─ CLIENT RESPONSE                    │
│  │  Created by: Client Owner           │
│  │  When: 2024-01-16 09:00 AM         │
│  │  Response: Approve                  │
│  │                                     │
│  ├─ BINDING ACCEPTANCE                 │
│  │  Created by: Client Owner           │
│  │  When: 2024-01-16 10:00 AM         │
│  │  OTP: ✓ Verified                   │
│  │                                     │
│  ├─ EXECUTION                          │
│  │  Created by: Manager (CM-MGR-0001)  │
│  │  When: 2024-01-16 11:00 AM         │
│  │  Team: Dev, GFX                    │
│  │                                     │
│  ├─ COMPLETED                          │
│  │  Created by: Manager (CM-MGR-0001)  │
│  │  When: 2024-02-15 05:00 PM         │
│  │                                     │
│  └─ CLOSED                             │
│     Created by: Admin (CM-ADM-0001)    │
│     When: 2024-02-16 10:00 AM         │
└─────────────────────────────────────────┘
```

### Timeline Node Information

**Each node shows:**
* **Who** — Actor (user + role)
* **When** — Timestamp
* **Attachments** — Files/documents attached
* **OTP marker** — OTP verification status (if applicable)
* **Stage transition** — Previous → Current state

### Timeline Layout

**Vertical milestone line:**
* Left side: Internal actions (Sales, Manager, Admin, Super Admin, Dev, GFX)
* Right side: Client actions (Client Owner, Client Sub-Users)

**Visual distinction:**
* Internal actions: Blue/Company color
* Client actions: Green/Client color
* OTP markers: Special icon (✓ or ⏳)

---

## 🎤 Additional Request (Voice + Transcription)

### Voice Input Support

**Work Hub Additional Requests support:**
* Voice recording + transcription
* Manual typing (alternative)

### Additional Request Flow

```
Client clicks "Additional Request"
    ↓
Request Form:
  ┌─────────────────────────────────┐
  │  Additional Request             │
  │                                 │
  │  Request Details:              │
  │  [🎤 Record Voice]              │
  │  OR                             │
  │  [Type manually]                │
  │                                 │
  │  [Submit Request]               │
  └─────────────────────────────────┘
    ↓
Client records voice or types
    ↓
System transcribes (if voice)
    ↓
Client reviews/edits
    ↓
Request submitted
    ↓
Work returns to ACKNOWLEDGED
    ↓
Internal team prepares revised quotation
```

---

## 🔐 OTP Requirements

### OTP in Binding Acceptance

**OTP Required:**
* BINDING ACCEPTANCE stage
* OTP sent to client email
* OTP verification mandatory

### OTP Flow

```
Work reaches BINDING ACCEPTANCE
    ↓
System checks: OTP required?
    ↓
    ├─ YES → Generate OTP
    │        ↓
    │        Send OTP to client email
    │        ↓
    │        Client enters OTP
    │        ↓
    │        System verifies
    │        ↓
    │        ├─ Valid → Proceed to EXECUTION
    │        │
    │        └─ Invalid → Show error
    │                      Allow retry
    │
    └─ NO → Proceed to EXECUTION
```

---

## 📋 Required Documents

### Document Requirements

**Documents required per stage (as per Service Master):**
* NEW: Project brief (optional)
* ACKNOWLEDGED: Quotation document
* QUOTATION SENT: Quotation document
* BINDING ACCEPTANCE: Legal agreement, Payment terms
* EXECUTION: Design mockups, Technical specs
* COMPLETED: Final deliverables
* CLOSED: Completion certificate

### Document Upload Flow

```
User at required stage
    ↓
System checks: Documents required?
    ↓
    ├─ YES → Show upload prompt
    │        ↓
    │        User uploads documents
    │        ↓
    │        System validates
    │        ↓
    │        Documents attached
    │        ↓
    │        Stage can proceed
    │
    └─ NO → Stage can proceed
```

---

## 🎨 UI/UX Pattern Compliance

All Work Hub modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Work List: Expandable/collapsible
- Work Details: Expandable/collapsible
- Timeline: Expandable/collapsible
- Tasks: Expandable/collapsible
- Documents: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Work Journey

### Complete Example: Web Development Project

```
1. Sales creates work: "Website Redesign"
   ↓
2. Status: NEW
   ↓
3. Manager acknowledges
   ↓
4. Quotation prepared (ETA: 30 days)
   ↓
5. Status: ACKNOWLEDGED
   ↓
6. Sales sends quotation to client
   ↓
7. Status: QUOTATION SENT
   ↓
8. Client reviews quotation
   ↓
9. Client clicks "Approve"
   ↓
10. Status: CLIENT RESPONSE (Approve)
    ↓
11. System requires OTP
    ↓
12. OTP sent to client email
    ↓
13. Client enters OTP
    ↓
14. OTP verified
    ↓
15. Status: BINDING ACCEPTANCE
    ↓
16. Manager assigns team: Dev, GFX
    ↓
17. Status: EXECUTION
    ↓
18. Team works on project
    ↓
19. Deliverables completed
    ↓
20. Status: COMPLETED
    ↓
21. Admin reviews and closes
    ↓
22. Status: CLOSED
    ↓
23. All actions logged in My Activity
```

---

## 📚 Related Documentation

- **Instruction 9:** Work Hub — Global Execution Engine
- **Service Master:** See `SYSTEM_OVERVIEW.md` (Service Master section)
- **My Activity:** See `FLOWS_AND_DIAGRAMS/my_activity_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Work Hub flow documentation per Instruction 9. Includes creation rights, Service Master dependency, work lifecycle, timeline UI, voice input support, OTP requirements, and document management.

