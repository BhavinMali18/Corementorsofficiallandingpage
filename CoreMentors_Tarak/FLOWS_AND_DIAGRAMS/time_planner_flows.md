# Time Planner – Complete Flows

**Instruction Reference:** Instruction 5  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Time Planner module, the global policy engine for work time management, including shift boundaries, break templates, holiday calendar, leave policy, and targets.

---

## 👤 Scope (Who Has Access)

**Access:** Super Admin only

**Purpose:** Define global policies that apply across the entire CRM system.

---

## 📋 Module Objectives

Time Planner enables Super Admin to:

1. Define workday boundaries per shift and per unit
2. Define break templates + allowed minutes
3. Define global holiday calendar
4. Define leave quotas + distribution
5. Define targets for teams/individuals

---

## ⏰ Shift / Time Boundary Sets

### Purpose

Define when work starts and ends for different shifts and units.

### Shift Sets Supported

**Multiple sets supported:**
- Day shift
- Night shift
- Custom (user-defined)

### Configuration Flow

```
Super Admin opens Time Planner
    ↓
Selects Unit (from Company Profile)
    ↓
Clicks "Add Shift Set" or "Edit Shift Set"
    ↓
Shift Configuration Form:
  ┌─────────────────────────────────┐
  │  Shift Name: [Day Shift]        │
  │  Unit: [Unit 1]                 │
  │                                 │
  │  Day In Time: [09:00 AM]       │
  │  Day Out Time: [06:00 PM]      │
  │                                 │
  │  Time Out Allowed After:        │
  │  [05:00 PM] (threshold)        │
  │                                 │
  │  Required Net Minutes:          │
  │  [480] (8 hours)                │
  │                                 │
  │  [Save] [Cancel]                │
  └─────────────────────────────────┘
    ↓
Shift set saved
    ↓
Applied to selected Unit
```

### Shift Set Fields

**Each set defines:**
- **Day In time:** When work starts
- **Day Out time:** When work ends
- **Time Out allowed-after threshold:** Earliest time Time Out is allowed
- **Required net minutes:** Regular working time (default: 8 hours = 480 minutes)

### Shift Selection per Unit

```
Unit 1
  └─► Day Shift (09:00 AM - 06:00 PM)
  └─► Night Shift (09:00 PM - 06:00 AM)

Unit 2
  └─► Custom Shift (10:00 AM - 07:00 PM)
```

**Rules:**
- Each unit can have multiple shift sets
- Users assigned to unit follow that unit's shift rules
- Shift sets are selectable per unit

---

## ☕ Break Templates

### Purpose

Define standard break types with allowed minutes and optional timing windows.

### Break Template Structure

**Each break template includes:**
- **Name:** Lunch/Dinner, Tea/Short Break, etc.
- **Allowed minutes:** Maximum break duration
- **Optional start/end windows:** When breaks are typically taken

### Break Template Flow

```
Super Admin opens Time Planner
    ↓
Navigates to "Break Templates"
    ↓
Clicks "Add Break Template" or "Edit Template"
    ↓
Break Template Form:
  ┌─────────────────────────────────┐
  │  Break Name: [Lunch]            │
  │                                 │
  │  Allowed Minutes: [60]          │
  │                                 │
  │  Optional Timing Window:        │
  │  ☑ Enable window                │
  │  Start: [12:00 PM]              │
  │  End: [02:00 PM]                │
  │                                 │
  │  [Save] [Cancel]                │
  └─────────────────────────────────┘
    ↓
Break template saved
    ↓
Available in Work Time module
```

### Default Break Templates

**Template Breaks:**
- **Lunch/Dinner:** Typically 60 minutes
- **Tea/Short Break:** Typically 15 minutes

**Custom Breaks (user-defined in Work Time):**
- Washroom
- Personal
- Outside Work
- Other (custom label)

### Super Admin Actions

Super Admin can:
- **Rename** break templates
- **Change minutes** (allowed duration)
- **Change timing windows** (optional start/end times)
- **Add new** break templates
- **Delete** unused templates

---

## 🎨 Planner UI/UX Requirements

### Clock-Like Selector

**Time Selection:**
- Clean clock-like selector for time input
- Scrollable hour/minute selection
- Visual representation of time

**Visual Arc/Pie Representation:**
```
┌─────────────────────────────────┐
│      BREAK vs WORK TIME         │
│                                 │
│     ┌───────────────┐          │
│    ╱                 ╲          │
│   ╱   WORK TIME      ╲          │
│  │    (7 hours)      │          │
│  │                   │          │
│  │  ┌─────────────┐ │          │
│  │  │ BREAK TIME  │ │          │
│  │  │ (1 hour)    │ │          │
│  └──┴─────────────┴─┘          │
│                                 │
│  Total: 8 hours                │
└─────────────────────────────────┘
```

**Features:**
- Visual arc/pie shows break minutes vs remaining work minutes
- Color-coded segments
- Interactive time selection
- Real-time calculation display

---

## 📅 Holiday Calendar (Global)

### Purpose

Define company-wide holidays visible to all users.

### Holiday Types

**Types supported:**
- **Government:** National holidays
- **Public:** Public holidays
- **Festival:** Religious/cultural festivals
- **Company off:** Company-specific holidays

### Holiday Calendar Flow

```
Super Admin opens Time Planner
    ↓
Navigates to "Holiday Calendar"
    ↓
Clicks "Add Holiday" or "Edit Holiday"
    ↓
Holiday Form:
  ┌─────────────────────────────────┐
  │  Holiday Name: [Diwali]         │
  │                                 │
  │  Date: [2024-11-01]            │
  │                                 │
  │  Type: [Festival ▼]            │
  │    • Government                │
  │    • Public                    │
  │    • Festival                  │
  │    • Company off               │
  │                                 │
  │  [Save] [Cancel]                │
  └─────────────────────────────────┘
    ↓
Holiday saved to calendar
    ↓
Visible to all users
```

### Holiday Visibility

**Visible to:**
- All internal panels (Super Admin, Admin, Manager, Teams)
- Vendor (read-only)
- Client (read-only)

**Display:**
- Calendar view
- List view
- Filterable by type
- Exportable

---

## 🏖️ Leave Policy (Current Lock)

### Default Policy

**Paid Leaves:**
- 12 paid leaves/year
- 1 per month (automatic distribution)

**Sick Leaves:**
- 12 sick leaves/year
- 1 per month (automatic distribution)

### Leave Policy Flow

```
Super Admin opens Time Planner
    ↓
Navigates to "Leave Policy"
    ↓
Leave Policy Configuration:
  ┌─────────────────────────────────┐
  │  Paid Leaves per Year: [12]     │
  │  Distribution: Monthly (auto)    │
  │                                 │
  │  Sick Leaves per Year: [12]    │
  │  Distribution: Monthly (auto)    │
  │                                 │
  │  [Save Changes]                 │
  └─────────────────────────────────┘
    ↓
Policy saved
    ↓
Applied to all users
```

### Monthly Distribution

**Automatic Distribution:**
- Leaves distributed monthly (1 paid + 1 sick per month)
- Users see available leaves in their profile
- Leave balance tracked automatically

### Paid Leave Behavior

**Rules:**
- Paid leave counts as **present** but different color
- No Time In/Time Out required
- Does not affect working time calculations
- Visible in attendance reports with distinct color

**Color Coding:**
- Present: Green (#2E7D32)
- Paid Leave: Blue (#1976D2)

---

## 🎯 Work on Holidays / Weekends

### Purpose

Track work performed on holidays and weekends for bonus/incentive planning.

### Rules

**Work on Holidays:**
- Time is recorded (Time In/Time Out)
- Counted as **extra time**
- Usable later for bonus/incentive planning
- Marked with special color: #F9A825 (Worked on Holiday)

**Work on Weekends:**
- Time is recorded
- Counted as **extra time**
- Usable later for bonus/incentive planning

**Tracking:**
- Separate from regular working time
- Visible in reports
- Can be used for compensation calculations

---

## 🎯 Targets (Planner Goals)

### Purpose

Define minimum presence/working hours targets for teams or individuals.

### Target Types

**Supported Periods:**
- Weekly targets
- Monthly targets
- Quarterly targets

### Target Application

**Apply to:**
- Entire team (e.g., all sales team members)
- Selected users (individual assignments)

### Target Flow

```
Super Admin opens Time Planner
    ↓
Navigates to "Targets"
    ↓
Clicks "Add Target" or "Edit Target"
    ↓
Target Configuration Form:
  ┌─────────────────────────────────┐
  │  Target Name: [Sales Q1]        │
  │                                 │
  │  Period: [Quarterly ▼]         │
  │    • Weekly                    │
  │    • Monthly                   │
  │    • Quarterly                 │
  │                                 │
  │  Apply To:                     │
  │  ○ Entire Team                 │
  │  ☑ Selected Users              │
  │                                 │
  │  Team/Users:                   │
  │  [Select Sales Team ▼]         │
  │                                 │
  │  Minimum Working Hours:        │
  │  [160] hours per month         │
  │                                 │
  │  [Save] [Cancel]                │
  └─────────────────────────────────┘
    ↓
Target saved
    ↓
Applied to selected team/users
```

### Target Definition

**Targets define:**
- Minimum demanded presence/working hours
- Period (weekly/monthly/quarterly)
- Team or individual scope
- Tracking and reporting

---

## 🔄 Integration with Work Time

### Policy Application Flow

```
Time Planner (Policy)
    ↓
Defines shift boundaries
    ↓
Defines break templates
    ↓
Defines holiday calendar
    ↓
Defines leave policy
    ↓
    ↓
Work Time Module (Execution)
    ↓
Users follow shift boundaries
    ↓
Users select break templates
    ↓
Holidays visible in calendar
    ↓
Leave policy applied
    ↓
Targets tracked
```

### Key Relationships

**Shift Boundaries:**
- Work Time module enforces Time Out threshold
- Required net minutes used for overtime/undertime calculation

**Break Templates:**
- Available in Work Time "Start Break" dropdown
- Allowed minutes enforced
- Timing windows suggested (if configured)

**Holiday Calendar:**
- Visible in Work Time calendar view
- Work on holidays tracked separately
- Color-coded in reports

**Leave Policy:**
- Leave balance shown in Work Time
- Paid leave application affects attendance
- Leave days excluded from working time calculations

**Targets:**
- Progress tracked in Work Time reports
- Compliance visible in dashboards
- Used for performance evaluation

---

## 🎨 UI/UX Pattern Compliance

All Time Planner modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Shift Sets: Expandable/collapsible
- Break Templates: Expandable/collapsible
- Holiday Calendar: Expandable/collapsible
- Leave Policy: Expandable/collapsible
- Targets: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Super Admin Journey

### Setting Up Time Planner

```
1. Super Admin opens Time Planner
   ↓
2. Configures Company Units (from Company Profile)
   ↓
3. Creates Shift Sets for each Unit
   - Day Shift: 09:00 AM - 06:00 PM
   - Night Shift: 09:00 PM - 06:00 AM
   ↓
4. Creates Break Templates
   - Lunch: 60 minutes (12:00 PM - 02:00 PM)
   - Tea: 15 minutes
   ↓
5. Adds Holidays to Calendar
   - Diwali, Christmas, etc.
   ↓
6. Configures Leave Policy
   - 12 paid + 12 sick leaves/year
   ↓
7. Sets Targets
   - Sales Team: 160 hours/month
   ↓
8. Policies applied globally
```

---

## 📚 Related Documentation

- **Instruction 5:** Work Time, Company Profile, Time Planner, Company Document Wallet
- **Work Time:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md`
- **Company Profile:** See `FLOWS_AND_DIAGRAMS/company_profile_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Time Planner flow documentation per Instruction 5. Includes shift boundaries, break templates, holiday calendar, leave policy, and targets.

