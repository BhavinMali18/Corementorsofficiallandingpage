# Work Time (Time & Attendance) – Complete Flows

**Instruction Reference:** Instruction 5  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Work Time (Time & Attendance) module, including verification chains, attendance states, daily flows, and calculation logic.

---

## 👥 Scope (Who Has Access)

Work Time module is available for:

* Super Admin
* Admin
* Manager
* Sales Team
* Accounts Team
* Development Team
* Graphics Team

**Not included in this phase:**
* Vendor (separate schema later)
* Client (separate schema later)

---

## 🔄 Core Attendance Principles (Locked)

### Fundamental Rules

1. **No punch = Absent**
   - If no Time In recorded for a day → marked as Absent
   - Absent days do not count toward working time

2. **Verification Required**
   - Punches count only after **verification** by correct hierarchy
   - Self-punching allowed but stored as **DRAFT** until verified

3. **Full Audit Trail**
   - Every modification is fully audited
   - Records: who/when/what changed

---

## 🔗 Verification and Approval Chain (Locked)

### Verification Hierarchy Diagram

```
┌─────────────────────────────────────────┐
│         VERIFICATION CHAIN              │
└─────────────────────────────────────────┘

Sales/Accounts/Dev/Graphics Team
    ↓ (self-punch → DRAFT)
    ↓ (verification required)
Reporting Authority (Manager)
    ↓ (verifies → VERIFIED)
    ↓
Manager
    ↓ (self-punch → DRAFT)
    ↓ (verification required)
Admin
    ↓ (verifies → VERIFIED)
    ↓
Admin
    ↓ (self-punch → DRAFT)
    ↓ (verification required)
Super Admin
    ↓ (verifies → VERIFIED)
    ↓
Super Admin
    ↓ (self-punch)
    ↓ (auto-approved → VERIFIED)
```

### Verification Authority by Role

**A) Self Punching:**
- All internal users can self punch
- Status = **DRAFT** (pending verification)

**B) Verification Authority:**
- Sales/Accounts/Dev/GFX → verified by **Reporting Authority (Manager)**
- Manager → verified by **Admin**
- Admin → verified by **Super Admin**
- Super Admin → **Auto-approved** (no verification needed)

**C) Rewrite/Override Authority:**
- Reporting Authority can correct subordinate entries
- Admin can rewrite/correct managers and below
- Super Admin can rewrite/correct any role

**D) Finality Rule:**
- Attendance counts only when **accepted/verified** by correct authority
- DRAFT status does not count toward working time calculations

---

## 📊 Attendance Day Status Model

### Status Flow Diagram

```
┌─────────┐
│  DRAFT  │  ← Self-punched, awaiting verification
└────┬────┘
     │
     │ Verified by authority
     │
┌────▼─────────┐
│  VERIFIED    │  ← Accepted, counts toward working time
└────┬─────────┘
     │
     │ Corrected by higher authority
     │
┌────▼─────────┐
│  CORRECTED   │  ← Modified after verification
└──────────────┘

┌─────────┐
│ FLAGGED │  ← Emergency/forced actions, requires review
└─────────┘
```

### Status Details

#### DRAFT
- **Meaning:** Self-punched, awaiting verification
- **Counts toward working time:** ❌ No
- **Can be edited by:** User who created it
- **Next action:** Requires verification by authority

#### VERIFIED
- **Meaning:** Accepted by correct authority
- **Counts toward working time:** ✅ Yes
- **Can be edited by:** Higher authority only
- **Next action:** Can be corrected if needed

#### CORRECTED
- **Meaning:** Modified after verification
- **Counts toward working time:** ✅ Yes (based on corrected values)
- **Can be edited by:** Higher authority only
- **Audit:** Full change log maintained

#### FLAGGED
- **Meaning:** Emergency/forced actions, requires review
- **Counts toward working time:** ⚠️ Conditional (after review)
- **Can be edited by:** Authority reviewing the flag
- **Next action:** Review and approve/reject

---

## ⏰ Daily Work Time Flow (Locked)

### Complete Day Flow Diagram

```
┌─────────────────────────────────────────┐
│         DAILY WORK TIME FLOW             │
└─────────────────────────────────────────┘

Day Start
    ↓
┌─────────────────┐
│   TIME IN       │  ← User self-punches or authority punches
│   (Required)    │     If missed → Absent
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   WORKING       │  ← Status: Working
│   (Active)      │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   BREAKS        │  ← Multiple breaks allowed
│   (Optional)    │     • Template breaks (Lunch/Dinner, Tea)
│                 │     • Custom breaks (Washroom, Personal, etc.)
│                 │     • No overlapping breaks
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   TIME OUT       │  ← Allowed after threshold time
│   (Required)     │     Emergency/forced requires reason
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   CALCULATION    │  ← Net Working Time calculated
│   (Automatic)    │     Overtime/Undertime determined
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   VERIFICATION   │  ← Authority verifies
│   (Required)     │     Status: DRAFT → VERIFIED
└─────────────────┘
```

### A) Day Start: Time In

**Process:**
1. User can self-punch Time In
2. If missed, authority can punch on behalf
3. If no Time In for the day → marked as **Absent**

**UI:**
- "Time In" button available
- Shows current time when punched
- Status changes to "Working"

---

### B) Break Tracking

**Break Types Supported:**

**Template Breaks (from Time Planner):**
- Lunch/Dinner
- Tea/Short Break

**Custom Breaks:**
- Washroom
- Personal
- Outside Work
- Other (custom label)

**Rules:**
- Breaks recorded as Start + End
- No overlapping breaks allowed
- Break time deducted from Gross duration
- Multiple breaks allowed per day

**Break Flow:**
```
User clicks "Start Break"
    ↓
Break type dropdown appears
    ↓
User selects break type
    ↓
Break starts (timestamp recorded)
    ↓
Status: "On Break"
    ↓
User clicks "End Break"
    ↓
Break ends (timestamp recorded)
    ↓
Break duration calculated
    ↓
Status: "Working"
```

---

### C) Day End: Time Out

**Normal Time Out:**
- Time Out allowed only after configured threshold time (from Time Planner)
- User clicks "Time Out" button
- Status changes to "Finished"
- Calculations begin

**Emergency/Forced Time Out:**
- Requires long-press OR double-confirm
- Requires reason (mandatory)
- Marked/flagged for review
- Status: **FLAGGED**

**Emergency Time Out Flow:**
```
User long-presses "Time Out"
    ↓
Confirmation dialog appears
    ↓
User enters reason (required)
    ↓
User confirms
    ↓
Time Out recorded
    ↓
Status: FLAGGED
    ↓
Authority notified for review
```

---

## 🧮 Calculation Logic (Locked)

### Calculation Flow Diagram

```
┌─────────────────────────────────────────┐
│      WORK TIME CALCULATION              │
└─────────────────────────────────────────┘

Time In: 09:00 AM
Time Out: 06:00 PM
    ↓
Gross Duration = Time Out − Time In
    = 6:00 PM − 9:00 AM
    = 9 hours
    ↓
Total Break Duration = sum(all breaks)
    = Lunch: 1 hour
    = Tea: 15 minutes
    = Total: 1 hour 15 minutes
    ↓
Net Working Time = Gross Duration − Total Break Duration
    = 9 hours − 1 hour 15 minutes
    = 7 hours 45 minutes
    ↓
Required Net Time (from Time Planner) = 8 hours
    ↓
Net (7h 45m) < Required (8h)
    ↓
Result: UNDERTIME (15 minutes)
```

### Definitions

**Gross Duration:**
- Formula: `Time Out − Time In`
- Total time from start to end
- Includes all breaks

**Total Break Duration:**
- Formula: `sum(all breaks)`
- Sum of all break durations
- Each break: `Break End − Break Start`

**Net Working Time:**
- Formula: `Gross Duration − Total Break Duration`
- Actual working time
- Used for overtime/undertime calculation

### Full Day Baseline

**Default (Current Lock):**
- Minimum Net working time for full day = **8 hours net**
- Required net minutes come from Time Planner
- May vary by shift (Day shift, Night shift, Custom)

### Overtime/Undertime Calculation

**Regular Time:**
- Required net minutes (from Time Planner)
- Default: 8 hours (480 minutes)

**Overtime:**
- Condition: `Net Working Time > Regular Time`
- Formula: `Overtime = Net Working Time − Regular Time`
- Example: Net = 9 hours, Regular = 8 hours → Overtime = 1 hour

**Undertime:**
- Condition: `Net Working Time < Regular Time`
- Formula: `Undertime = Regular Time − Net Working Time`
- Example: Net = 7 hours, Regular = 8 hours → Undertime = 1 hour

---

## 📊 Graphs & Reporting Views (Mandatory)

### Required Views

**1. Daily Timeline View:**
- Visual sequence: Time In → Break Start/End → Time Out
- Shows exact timestamps
- Color-coded breaks
- Net working time displayed

**2. Weekly Summary:**
- Net working time per day
- Total breaks per day
- Overtime minutes
- Undertime minutes
- Attendance classification: present/leave/holiday/absent

**3. Monthly Summary:**
- Total working days
- Total net working hours
- Total overtime hours
- Total undertime hours
- Attendance percentage
- Leave days count

**4. Quarterly Summary:**
- Aggregated monthly data
- Trends and patterns
- Compliance metrics

### Attendance Classification

**Present:**
- Time In and Time Out recorded
- Status: VERIFIED
- Net working time meets or exceeds required

**Leave:**
- Paid leave or sick leave applied
- Counts as present but different color
- No Time In/Time Out required

**Holiday:**
- Company holiday (from Time Planner)
- No work expected
- Work on holiday tracked separately

**Absent:**
- No Time In recorded
- Or Time In but no Time Out (unless leave applied)
- Does not count toward working time

---

## 🎨 UI/UX Requirements (Work Time)

### A) Today Card

**Shows:**
- Status: Not Started / Working / On Break / Finished / Pending Verification
- Current time
- Time In timestamp (if punched)
- Time Out timestamp (if punched)
- Net working time (if Time Out done)

**Buttons:**
- **Time In** (available when not started)
- **Start Break** (dropdown with break types, available when working)
- **End Break** (available when on break)
- **Time Out** (restricted - only after threshold time)

**Status Indicators:**
```
Not Started: Gray
Working: Green
On Break: Yellow
Finished: Blue
Pending Verification: Orange
```

### B) Timeline View

**Visual Sequence:**
```
09:00 AM ──► Time In
    │
    ├─► 01:00 PM ──► Break Start (Lunch)
    │
    ├─► 02:00 PM ──► Break End
    │
    ├─► 04:00 PM ──► Break Start (Tea)
    │
    ├─► 04:15 PM ──► Break End
    │
    └─► 06:00 PM ──► Time Out

Net Working Time: 7 hours 45 minutes
```

### C) Anti-Misclick Protection

**Critical Actions:**
- Emergency Time Out: **long-press** OR **double-confirm**
- Edit verified entry: **double-confirm** + reason required
- Delete entry: **double-confirm** + reason required

---

## 📝 Audit Logging (Mandatory)

### Audit Trail Requirements

Every punch/edit must record:

**1. Old Values:**
- Previous Time In/Time Out
- Previous break timings
- Previous status

**2. New Values:**
- Updated Time In/Time Out
- Updated break timings
- Updated status

**3. Change Metadata:**
- Who changed (user + role)
- Timestamp
- Reason (for emergency/forced actions and edits)
- IP address (if available)

### Audit Log Example

```
Entry ID: ATT-2024-001
Date: 2024-01-15
User: CM-SLS-0001 (Sales Team)

Change Log:
─────────────────────────────────────────
2024-01-15 09:00 AM
  Action: Time In
  Changed by: CM-SLS-0001 (Self)
  Status: DRAFT

2024-01-15 09:30 AM
  Action: Correction
  Changed by: CM-MGR-0001 (Manager)
  Old Time In: 09:00 AM
  New Time In: 08:55 AM
  Reason: "Corrected late arrival"
  Status: CORRECTED

2024-01-15 06:00 PM
  Action: Time Out
  Changed by: CM-SLS-0001 (Self)
  Status: DRAFT

2024-01-15 06:30 PM
  Action: Verification
  Changed by: CM-MGR-0001 (Manager)
  Status: VERIFIED
─────────────────────────────────────────
```

---

## 🔄 Typical User Journey

### Complete Day Flow

```
1. User opens Work Time module
   ↓
2. Sees "Today Card" with "Not Started" status
   ↓
3. Clicks "Time In" at 9:00 AM
   ↓
4. Status changes to "Working"
   ↓
5. At 1:00 PM, clicks "Start Break" → selects "Lunch"
   ↓
6. Status changes to "On Break"
   ↓
7. At 2:00 PM, clicks "End Break"
   ↓
8. Status changes back to "Working"
   ↓
9. At 4:00 PM, clicks "Start Break" → selects "Tea"
   ↓
10. At 4:15 PM, clicks "End Break"
    ↓
11. At 6:00 PM, clicks "Time Out"
    ↓
12. Status changes to "Finished"
    ↓
13. System calculates:
    - Gross Duration: 9 hours
    - Total Breaks: 1 hour 15 minutes
    - Net Working Time: 7 hours 45 minutes
    - Undertime: 15 minutes
    ↓
14. Status: DRAFT (awaiting verification)
    ↓
15. Manager verifies at 6:30 PM
    ↓
16. Status: VERIFIED
    ↓
17. Entry counts toward working time
```

---

## 🎨 UI/UX Pattern Compliance

All Work Time modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Today Card: Expandable/collapsible
- Timeline View: Expandable/collapsible
- Break Details: Expandable/collapsible
- Reports: Expandable/collapsible sections
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📚 Related Documentation

- **Instruction 5:** Work Time, Company Profile, Time Planner, Company Document Wallet
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **Time Planner:** See `FLOWS_AND_DIAGRAMS/time_planner_flows.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Work Time flow documentation per Instruction 5. Includes verification chains, attendance states, daily flows, calculation logic, and audit requirements.

