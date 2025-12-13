# My Activity (Activity Logs) – Complete Flows

**Instruction Reference:** Instruction 7  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for My Activity module, a universal, append-only activity log that records every meaningful action performed by a user in the CRM. It is the **accountability spine** of CoreMentors.

---

## 👥 Availability

### Present in All Panels

My Activity is available in **all panels:**

* Super Admin
* Admin
* Manager
* Sales Team
* Accounts Team
* Development Team
* Graphics Team
* Vendor
* Client

---

## 📋 What Gets Logged (Non-Exhaustive)

### Action Categories

**Authentication:**
* Login / logout
* Session timeout
* Password changes

**Profile Management:**
* Profile updates
* Profile photo changes
* KYC document uploads

**Work Time:**
* Time In punches
* Time Out punches
* Break start/end
* Work Time edits
* Work Time corrections

**Requests:**
* Request created
* Request submitted
* Request cancelled
* Request approved (as approver)
* Request rejected (as approver)

**Documents:**
* Document uploads
* Document downloads
* Document shares
* Document deletions

**Client Management:**
* Client updates
* Client notes added
* Client assignments
* Client status changes

**Team Management:**
* Hierarchy changes
* Authority assignments
* Verification actions

**Any CRUD Action:**
* Create operations
* Read operations (if significant)
* Update operations
* Delete operations

### Log Entry Structure

**Each log entry must include:**

1. **Action Type:**
   - Category (e.g., "Work Time", "Request", "Profile")
   - Specific action (e.g., "Time In", "Leave Request Created")

2. **Entity/Context Affected:**
   - What was affected (e.g., "Attendance 2024-01-15", "Leave Request #REQ-001")

3. **Timestamp:**
   - Exact date and time
   - Timezone information

4. **Result Status:**
   - Success / Fail (if applicable)
   - Error details (if failed)

5. **Optional Metadata:**
   - Device information (future-ready)
   - IP address (future-ready)
   - Browser/App version (future-ready)

---

## 👁️ Visibility & Access Rules (Critical)

### Self-Visibility

**Every user can see:**
* **Only their own** My Activity logs
* Complete history of their actions
* All timestamps and details
* Cannot view other users' activity logs

### Superior Visibility

**Reporting Authority:**
* Can view activity of **direct subordinates**
* Cannot view activity of subordinates' subordinates
* Limited to their reporting tree

**Admin:**
* Can view activity of **managers + their reporting trees**
* Full visibility within their hierarchy
* Cannot view other Admins' activity

**Super Admin:**
* Can view **everyone's** activity logs
* Full system-wide visibility
* Complete accountability oversight

### Client / Vendor Visibility

**Client:**
* Can view **only their own** activity logs
* Limited to their own actions
* Super Admin always has access

**Vendor:**
* Can view **only their own** activity logs
* Limited to their own actions
* Super Admin always has access

**Future Integration:**
* Internal visibility follows assignment rules (future)
* Super Admin always has access regardless

---

## 🎨 UI/UX Requirements

### Timeline-Style List

**Display Format:**
```
┌─────────────────────────────────────────┐
│  MY ACTIVITY                            │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  2024-01-15                       │ │
│  │  ──────────────────────────────── │ │
│  │  09:00 AM - Time In               │ │
│  │  01:00 PM - Break Start (Lunch)   │ │
│  │  02:00 PM - Break End             │ │
│  │  06:00 PM - Time Out              │ │
│  │  06:30 PM - Leave Request Created │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  2024-01-14                       │ │
│  │  ──────────────────────────────── │ │
│  │  09:00 AM - Time In               │ │
│  │  06:00 PM - Time Out              │ │
│  │  07:00 PM - Profile Updated       │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Grouping by Date

**Organization:**
* Activities grouped by date
* Most recent first
* Chronological order within each day
* Clear date separators

### Filters

**Available Filters:**

1. **Date Range:**
   - Start date
   - End date
   - Quick filters (Today, This Week, This Month)

2. **Action Type:**
   - Filter by category (Work Time, Request, Profile, etc.)
   - Filter by specific action

3. **Time Slot/Range:**
   - Morning (6 AM - 12 PM)
   - Afternoon (12 PM - 6 PM)
   - Evening (6 PM - 12 AM)
   - Night (12 AM - 6 AM)

4. **Module Filter:**
   - Work Time
   - My Profile
   - Document Wallet
   - Requests
   - Team Management
   - etc.

### Expandable Log Rows

**Global Expand/Collapse Pattern Applied:**

**Collapsed State:**
```
09:00 AM - Time In
```

**Expanded State:**
```
09:00 AM - Time In
  ────────────────────────────────
  Action: Time In Punch
  Module: Work Time
  Status: Success
  Details: Punched at 09:00:15 AM
  Device: Mobile App
  IP: 192.168.1.100
  [Collapse]
```

---

## 🔒 Audit Integrity (Locked)

### Append-Only Rule

**Activity logs are append-only:**
* New entries can only be added
* Existing entries cannot be modified
* Existing entries cannot be deleted by normal users

### Deletion Rules

**Normal Users:**
* Cannot delete any activity logs
* Cannot modify any activity logs
* Read-only access to their own logs

**Admin/Manager:**
* Cannot delete history
* Cannot modify history
* Can view subordinate activity (if permitted)
* Cannot delete subordinate activity

**Super Admin:**
* Has full visibility
* **Not deletion authority** (unless future legal module)
* Can view all activity logs
* Cannot delete logs (maintains audit integrity)

### Future Legal Module

**Note:** If a legal/compliance module is added in the future, it may provide controlled deletion capabilities for legal/compliance purposes, but this is not part of current specification.

---

## 🔄 Action → Log Flow

### Automatic Logging Flow

```
User performs action
    ↓
System detects action
    ↓
Log entry created:
  - Action type identified
  - Entity/context captured
  - Timestamp recorded
  - Result status determined
  - Metadata collected (if available)
    ↓
Log entry appended to My Activity
    ↓
Visible in user's activity log
    ↓
Visible to superior (if applicable)
    ↓
Immutable record created
```

### Example: Time In Punch Logging

```
User punches Time In
    ↓
System logs:
  ┌─────────────────────────────────┐
  │  Action Type: Work Time         │
  │  Specific: Time In              │
  │  Entity: Attendance 2024-01-15  │
  │  Timestamp: 2024-01-15 09:00:15│
  │  Status: Success                │
  │  Metadata: Mobile App, IP: ...  │
  └─────────────────────────────────┘
    ↓
Entry appended to My Activity
    ↓
Visible immediately
```

---

## 📊 Typical User Journey

### Viewing Activity Logs

```
1. User opens My Activity module
   ↓
2. Sees timeline-style list
   ↓
3. Activities grouped by date
   ↓
4. Most recent first
   ↓
5. User expands a log entry
   ↓
6. Sees detailed metadata
   ↓
7. User applies filter: "Work Time"
   ↓
8. Only Work Time actions shown
   ↓
9. User applies date range: "This Week"
   ↓
10. Filtered view displayed
    ↓
11. User collapses entry
    ↓
12. Returns to list view
```

### Superior Viewing Subordinate Activity

```
1. Manager opens Team Management
   ↓
2. Selects team member
   ↓
3. Clicks "View Activity"
   ↓
4. Team member's My Activity opens
   ↓
5. Manager sees all team member actions
   ↓
6. Manager can filter and search
   ↓
7. Manager can expand entries for details
   ↓
8. Complete accountability view
```

---

## 🎨 UI/UX Pattern Compliance

All My Activity modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Activity List: Expandable/collapsible
- Log Entries: Expandable/collapsible (metadata)
- Filters: Expandable/collapsible
- Date Groups: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📚 Related Documentation

- **Instruction 7:** Work Time Requests + My Activity + Governance Reinforcement
- **Work Time Requests:** See `FLOWS_AND_DIAGRAMS/work_time_requests_flows.md`
- **Work Time:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md`
- **Team Management:** See `FLOWS_AND_DIAGRAMS/team_management_flows.md`
- **Approval Chain:** See `FLOWS_AND_DIAGRAMS/approval_chain_with_activity.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete My Activity flow documentation per Instruction 7. Includes logging structure, visibility rules, UI/UX requirements, and audit integrity.

