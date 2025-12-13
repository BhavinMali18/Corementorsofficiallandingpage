# Team Management – Complete Flows

**Instruction Reference:** Instruction 6  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Team Management module, the central governance layer for the Work Time ecosystem that makes verifications strict, traceable, and scalable.

---

## 👥 Scope (Who Has Access)

**Available in:**
- Super Admin Panel
- Admin Panel
- Manager Panel

**Not visible in:**
- Sales / Accounts / Dev / GFX dashboards
- Vendor / Client dashboards

---

## 🔗 Hierarchy Model (Locked)

### Single Reporting Authority Rule

**Rule:** Each user must belong to **exactly one Reporting Authority** at any point in time.

### Chain of Authority Diagram

```
┌─────────────────────────────────────────┐
│      REPORTING HIERARCHY CHAIN          │
└─────────────────────────────────────────┘

                    ┌─────────────────────┐
                    │   SUPER ADMIN       │
                    │                     │
                    │  Final Authority   │
                    │  (No reporting up)  │
                    └──────────┬──────────┘
                               │
                               │ Reports to
                               │
                    ┌──────────▼──────────┐
                    │      ADMIN           │
                    │                      │
                    │  Reports to          │
                    │  Super Admin         │
                    └──────────┬───────────┘
                               │
                               │ Reports to
                               │
                    ┌──────────▼──────────┐
                    │      MANAGER         │
                    │                      │
                    │  Reports to          │
                    │  Admin               │
                    └──────────┬───────────┘
                               │
                               │ Reports to
                               │
        ┌──────────────────────┴──────────────────────┐
        │                                             │
┌───────▼────────┐  ┌───────▼────────┐  ┌───────────▼────────┐
│  SALES TEAM    │  │ ACCOUNTS TEAM   │  │  DEV/GFX TEAM      │
│                │  │                 │  │                     │
│  Reports to    │  │  Reports to     │  │  Reports to         │
│  Manager       │  │  Manager        │  │  Manager            │
└────────────────┘  └────────────────┘  └─────────────────────┘
```

### Authority Chain Rules

**Team Members (Sales/Accounts/Dev/GFX):**
- Report to: Manager
- Verification: Manager verifies their attendance

**Manager:**
- Reports to: Admin
- Verification: Admin verifies their attendance
- Can verify: Team members under them

**Admin:**
- Reports to: Super Admin
- Verification: Super Admin verifies their attendance
- Can verify: Managers and team members

**Super Admin:**
- Reports to: None (final authority)
- Verification: Auto-approved
- Can verify: Any role

**This chain directly powers:**
- Work Time verification permissions
- Override permissions
- Live marking capabilities
- Edit permissions

---

## ⏱️ Approval Cadence Mode (Locked)

### Supported Modes

**1. Daily Approvals:**
- Attendance verified/approved daily
- Day-end verification expected
- Final approval by Super Admin (or chain)

**2. Weekly Approvals:**
- Attendance verified/approved weekly
- Week-end verification expected
- Final approval by Super Admin (or chain)

### Final Acceptance Rule

**Regardless of cadence:**
- Attendance is considered finally accepted as **Approved/Final Verified by Super Admin**
- Either by direct Super Admin action
- Or by configured acceptance chain mechanism

### Approval Cadence Flow

```
Super Admin configures cadence mode
    ↓
System applies mode globally
    ↓
Daily Mode:
  - Day-end verification expected
  - Final approval by Super Admin
    ↓
Weekly Mode:
  - Week-end verification expected
  - Final approval by Super Admin
```

---

## 👁️ Live Time Supervision (Locked)

### Purpose

Support real-time monitoring and marking **during the day**, not only at day-end.

### Live Marking Capability

**If a user is working and then goes into a non-working phase, the authority can mark:**

**Active Time:**
- Mark user as actively working
- Timestamp recorded
- Reflects in Work Time timeline instantly

**Break Time:**
- Mark break type (Lunch, Tea, Custom, etc.)
- Optional reason
- Start/End timestamps
- Reflects in Work Time timeline instantly

### Live Supervision Flow

```
Authority opens Team Management
    ↓
Views team member's live status
    ↓
Sees: "Working" or "On Break"
    ↓
Can mark:
  - Active time (if on break)
  - Break time (if working)
    ↓
Marking reflects instantly in:
  - Work Time timeline
  - Team Management dashboard
  - User's Work Time view
```

### Who Can Live Mark

**Manager:**
- Can live mark: Team members under reporting authority
- Cannot mark: Other managers or admins

**Admin:**
- Can live mark: Managers + all lower roles
- Cannot mark: Other admins or super admin

**Super Admin:**
- Can live mark: Any role
- Full authority

### Live Marking UI

```
┌─────────────────────────────────────────┐
│  Team Member: CM-SLS-0001              │
│  Current Status: Working               │
│                                         │
│  [Mark Active Time]                    │
│  [Mark Break Time ▼]                   │
│    • Lunch                             │
│    • Tea                               │
│    • Custom                            │
│                                         │
│  Last Updated: 2:30 PM                 │
└─────────────────────────────────────────┘
```

---

## 👤 Punching vs Verification — Strict Distinction (Locked)

### When User Self-Punches

**Process:**
1. User self-punches Time In/Time Out/Break
2. Entry created as **user-entered**
3. Status: **DRAFT** until verified
4. Verification must be visibly marked:
   - Who verified (role + name/ID)
   - Timestamp

**Visual Indicator:**
```
┌─────────────────────────────────────────┐
│  Time In: 09:00 AM                      │
│  Entered by: Self (CM-SLS-0001)        │
│  Status: DRAFT                          │
│  Verified by: [Pending]                │
└─────────────────────────────────────────┘
```

### When Superior Punches on Behalf

**Process:**
1. Manager/Admin/Super Admin creates punch for subordinate
2. **No separate verification step required**
3. Event marked as **"ENTERED BY SUPERIOR"**
4. Must display:
   - Who entered it (role + name/ID)
   - Timestamp

**Visual Indicator:**
```
┌─────────────────────────────────────────┐
│  Time In: 09:00 AM                      │
│  Entered by: Manager (CM-MGR-0001)     │
│  Status: VERIFIED (Entered by Superior) │
│  Timestamp: 09:00 AM                   │
└─────────────────────────────────────────┘
```

### Distinction Flow Diagram

```
User Action
    ↓
    ├─ Self-Punch
    │   ↓
    │   Status: DRAFT
    │   ↓
    │   Requires Verification
    │   ↓
    │   Verified by Authority
    │   ↓
    │   Status: VERIFIED
    │
    └─ Superior Punch-on-Behalf
        ↓
        Status: VERIFIED (Entered by Superior)
        ↓
        No verification needed
        ↓
        Immediately counts toward working time
```

---

## ✅ Multi-Stage Verification Markers (Locked UI Requirement)

### Purpose

Work Time entries must visually show verification stages throughout the approval chain.

### Verification Stages

**1. Verified by Manager:**
- Badge/marker on timeline event
- Shows: "✓ Verified by Manager"
- Color: Blue

**2. Verified by Admin:**
- Badge/marker on timeline event
- Shows: "✓ Verified by Admin"
- Color: Green

**3. Final Verified/Approved by Super Admin:**
- Badge/marker on timeline event
- Shows: "✓ Final Approved by Super Admin"
- Color: Gold

### Visual Markers on Timeline

```
┌─────────────────────────────────────────┐
│  TIMELINE VIEW                          │
│                                         │
│  09:00 AM ──► Time In                   │
│    [✓ Manager] [✓ Admin] [✓ Super Admin]│
│                                         │
│  01:00 PM ──► Break Start (Lunch)      │
│    [✓ Manager] [Pending Admin]          │
│                                         │
│  02:00 PM ──► Break End                │
│    [✓ Manager] [Pending Admin]          │
│                                         │
│  06:00 PM ──► Time Out                  │
│    [✓ Manager] [✓ Admin] [Pending SA]   │
└─────────────────────────────────────────┘
```

### Daily/Weekly Approval Views

**Daily Approval View:**
```
┌─────────────────────────────────────────┐
│  Date: 2024-01-15                       │
│  User: CM-SLS-0001                     │
│                                         │
│  Verification Status:                   │
│  ✓ Manager: Verified at 6:30 PM        │
│  ✓ Admin: Verified at 7:00 PM          │
│  ⏳ Super Admin: Pending                │
└─────────────────────────────────────────┘
```

**Final Exit Verification:**
- Expected at day close (daily mode)
- Or week close (weekly mode)
- Final approval by Super Admin completes the chain

---

## 🔒 Time Editing Lock Window + Approval (Locked)

### Same-Day Edits

**Rules:**
- Manager/Admin can edit same-day records for subordinates
- All changes must be audited
- No approval required for same-day edits

**Same-Day Edit Flow:**
```
Manager/Admin opens Work Time entry
    ↓
Clicks "Edit"
    ↓
Modifies Time In/Time Out/Break
    ↓
Saves changes
    ↓
System records:
  - Before values
  - After values
  - Who edited
  - Timestamp
  - Reason (optional)
    ↓
Changes applied immediately
    ↓
Audit log created
```

### Post-Day Lock (24h Rule)

**Rules:**
- After the day passes (lock window triggers)
- Manager/Admin edits require approval by superior authority
- Only Super Admin can edit historical data without needing any approval

**Post-Day Edit Flow:**
```
Manager/Admin attempts to edit past day
    ↓
System checks: Is it same day?
    ↓
    ├─ YES → Allow edit (same-day rules)
    │
    └─ NO → Lock window active
            ↓
            Edit requires approval
            ↓
            Change request created
            ↓
            Status: PENDING
            ↓
            Sent to superior authority
            ↓
            Superior reviews
            ↓
            ├─ Approve → Changes applied
            │            Audit log created
            │
            └─ Reject → Request denied
                        Notification sent
```

### Edit Data Capture

**All edits must capture:**
- **Before values:** Original Time In/Time Out/Break data
- **After values:** New Time In/Time Out/Break data
- **Who requested:** Role + User ID
- **Who approved:** Role + User ID (if applicable)
- **Approval timestamp:** When approved
- **Reason:** Why the edit was made

### Super Admin Override

**Super Admin:**
- Can edit historical data without approval
- Still captures audit log
- Reason required (for compliance)

---

## 🔄 Authority Changes & Dashboard Recalculation (Locked)

### When Authority Chain Changes

**Triggers:**
- User promotion
- User reassignment
- Reporting authority change
- Role change

### Immediate Recalculation

**When authority chain changes:**
1. **Access permissions** recalculate immediately
2. **Verification rights** update immediately
3. **Dashboard visibility** refreshes immediately
4. **Team Management** maintains historical record

### Authority Change Flow

```
User's reporting authority changes
    ↓
System detects change
    ↓
Immediate actions:
  ├─ Recalculate access permissions
  ├─ Update verification rights
  ├─ Refresh dashboard visibility
  └─ Record change in Team Management
    ↓
All affected modules updated:
  ├─ Work Time verification chain
  ├─ Team Management hierarchy
  ├─ Live marking permissions
  └─ Edit permissions
    ↓
Historical record maintained
```

### Historical Record

**Team Management maintains:**
- Previous reporting authority
- New reporting authority
- Change timestamp
- Changed by (who made the change)
- Reason (if provided)

---

## 👥 Client & Vendor Reporting Authority Assignment (Locked Governance Rule)

### Purpose

Even though Client/Vendor attendance schemas are separate later, Team Management is the governance hub for reporting authority assignment.

### Rules

**Each Client:**
- Must have **only one reporting authority** at a time
- Reassignment allowed later
- Must be recorded in Team Management

**Each Vendor:**
- Must have **only one reporting authority** at a time
- Reassignment allowed later
- Must be recorded in Team Management

### Future Integration

**Note:** Assignments of internal resources to Clients come later. Team Management is the governance hub that will track these relationships.

---

## 🎨 Visual Identification (Locked)

### Purpose

Every attendance/punch/break/timeline event must show whether it was entered by:
- Self
- Manager
- Admin
- Super Admin

### UI Rule

**Use distinct role markers:**
- Badge + initials/role label
- Color-coded by role
- Visible on all timeline events
- In addition to audit logs

### Visual Markers

**Self-Entered:**
```
[👤 Self] CM-SLS-0001
```

**Manager-Entered:**
```
[👔 MGR] CM-MGR-0001
```

**Admin-Entered:**
```
[👑 ADM] CM-ADM-0001
```

**Super Admin-Entered:**
```
[⭐ SA] CM-SA-0001
```

### Timeline Event Display

```
┌─────────────────────────────────────────┐
│  09:00 AM ──► Time In                   │
│  [👔 MGR] CM-MGR-0001                   │
│  Entered by: Manager                    │
│  Status: VERIFIED (Entered by Superior) │
└─────────────────────────────────────────┘
```

---

## 🎨 UI/UX Pattern Compliance

All Team Management modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Team Hierarchy: Expandable/collapsible
- Live Supervision: Expandable/collapsible
- Verification Status: Expandable/collapsible
- Authority Changes: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Authority Journey

### Manager Managing Team

```
1. Manager opens Team Management
   ↓
2. Views team member list
   ↓
3. Sees live status of team members
   ↓
4. Notices team member forgot to punch Time In
   ↓
5. Clicks "Punch on Behalf"
   ↓
6. Enters Time In: 09:00 AM
   ↓
7. Entry marked as "ENTERED BY SUPERIOR"
   ↓
8. Status: VERIFIED (no separate verification needed)
   ↓
9. Entry counts toward working time immediately
   ↓
10. Later, verifies team member's self-punched Time Out
    ↓
11. Marks as "Verified by Manager"
    ↓
12. Status: VERIFIED (pending Admin verification)
```

---

## 📚 Related Documentation

- **Instruction 6:** Team Management Module + Work-Time Governance Overlay
- **Work Time:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md`
- **Approval Change Control:** See `FLOWS_AND_DIAGRAMS/approval_change_control_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Team Management flow documentation per Instruction 6. Includes hierarchy model, approval cadence, live supervision, punching distinctions, verification markers, edit lock windows, and authority changes.

