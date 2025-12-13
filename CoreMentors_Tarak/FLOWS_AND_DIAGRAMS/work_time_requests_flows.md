# Work Time Requests – Complete Flows

**Instruction Reference:** Instruction 7, Instruction 9  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Work Time Requests sub-module, a voice-based, approval-driven system for requesting leave, time corrections, and attendance adjustments.

---

## 📍 Placement & Access

### Module Location

**Requests is a dedicated sub-module inside Work Time**

**Access Points:**
- Today Card → **Raise Request** button
- Work Time main module → Requests tab

### Availability

**Available in all internal panels:**
- Super Admin
- Admin
- Manager
- Sales Team
- Accounts Team
- Development Team
- Graphics Team

**Not available in:**
- Vendor (separate schema later)
- Client (separate schema later)

---

## 🔒 Core Principles (Locked)

### Fundamental Rules

1. **No request is auto-approved**
   - Every request requires explicit approval
   - No automatic acceptance

2. **Every request starts as DRAFT**
   - Initial state is always DRAFT
   - Must be submitted to enter approval workflow

3. **Becomes effective only after approval**
   - Approved requests update attendance
   - Pending/rejected requests have no effect

4. **Until approved → attendance/salary calculations remain unchanged**
   - No impact on working time calculations
   - No impact on salary/payout logic

---

## 📋 Request Types (Predefined Buttons)

### Leave-Related Requests

**Available Types:**
- **Full Day Paid Leave** - Complete day off with pay
- **Half-Day Leave** - First Half / Second Half
- **Sick Leave** - Medical absence
- **Emergency Leave** - Urgent personal matters
- **Unpaid Leave** - Leave without pay
- **Compensatory Leave** - Compensatory off
- **Optional/Festival Leave** - If enabled by Super Admin

### Time Deviation / Punch Issues

**Available Types:**
- **Late Arrival** - Arrived after scheduled time
- **Early Departure** - Left before scheduled time
- **Missed Punch (Time In)** - Forgot to punch Time In
- **Missed Punch (Time Out)** - Forgot to punch Time Out
- **Forgot to End Break** - Break not properly ended
- **Excess Break Explanation** - Break exceeded allowed time

### Break / Outside Duty

**Available Types:**
- **Emergency Break** - Urgent break requirement
- **Extended Lunch/Break** - Longer break than normal
- **Outside Office Duty** - Client/field work
- **Medical Break** - Health-related break
- **Personal Emergency Exit** - Urgent personal matter

### Attendance Correction

**Available Types:**
- **Attendance Correction** - Date-specific correction
- **Break Duration Correction** - Adjust break timing
- **Status Correction** - Absent → Leave/Present

### Work on Non-Working Days

**Available Types:**
- **Work on Holiday Declaration** - Worked on holiday
- **Work on Weekend Declaration** - Worked on weekend
- **Overtime Confirmation Request** - Confirm overtime hours

**Note:** Additional types may be added later by Super Admin only.

---

## 🎤 Voice + Transcription (Mandatory)

### Voice Input Requirement

**Every request must include voice input.**

### Voice Recording Flow

```
User selects request type
    ↓
Request Form appears:
  ┌─────────────────────────────────┐
  │  Request Type: [Late Arrival]  │
  │                                 │
  │  Date: [2024-01-15]            │
  │                                 │
  │  Reason:                        │
  │  [🎤 Record Voice]              │
  │                                 │
  │  [Submit] [Cancel]              │
  └─────────────────────────────────┘
    ↓
User taps 🎤 Mic button
    ↓
Audio recording starts
    ↓
User speaks reason
    ↓
User stops recording
    ↓
System transcribes audio to text
    ↓
Transcription displayed:
  ┌─────────────────────────────────┐
  │  Transcribed Text:              │
  │  "I was stuck in traffic due   │
  │   to an accident on the highway"│
  │                                 │
  │  [Edit] [Accept]                │
  └─────────────────────────────────┘
    ↓
User reviews transcription
    ↓
    ├─ Accept → Use as-is
    │
    └─ Edit → Modify text
        ↓
        Edited text saved
    ↓
User clicks "Submit"
    ↓
Reconfirm popup:
  ┌─────────────────────────────────┐
  │  Confirm Request?               │
  │                                 │
  │  Type: Late Arrival             │
  │  Date: 2024-01-15               │
  │  Reason: [Transcribed/Edited]   │
  │                                 │
  │  [Confirm] [Cancel]             │
  └─────────────────────────────────┘
    ↓
User confirms
    ↓
Request created
    ↓
Status: DRAFT
```

### Storage Requirements

**System must store:**
- **Audio file** - Original voice recording
- **Transcribed text** - Auto-generated transcription
- **Edited final text** - User-edited version (if changed)

---

## 🔄 Request Lifecycle (Locked)

### Status Flow Diagram

```
┌─────────┐
│  DRAFT  │  ← Request created, not yet submitted
└────┬────┘
     │
     │ User submits
     │
┌────▼─────────┐
│  SUBMITTED   │  ← Sent to approval authority
└────┬─────────┘
     │
     │ Authority reviews
     │
     ├─► APPROVED ──► Updates attendance
     │
     └─► REJECTED ──► No effect on attendance
     │
     └─► CANCELLED ──► User cancels (optional)
```

### Status Details

**DRAFT:**
- Request created but not submitted
- User can edit or delete
- Not visible to approval authority

**SUBMITTED:**
- Request sent to approval authority
- User can view status
- Cannot edit (can cancel if allowed)

**APPROVED:**
- Request approved by authority
- Attendance updated
- Calculations affected
- Final status

**REJECTED:**
- Request rejected by authority
- No effect on attendance
- Rejection reason logged
- Final status

**CANCELLED:**
- User cancels request (optional)
- No effect on attendance
- Can be cancelled before approval

---

## 🔗 Approval Chain (Mirrors Hierarchy)

### Approval Flow Diagram

```
┌─────────────────────────────────────────┐
│      REQUEST APPROVAL CHAIN            │
└─────────────────────────────────────────┘

Team Member (Sales/Accounts/Dev/GFX)
    ↓ (submits request)
    ↓
Manager
    ↓ (approves/rejects)
    ↓
Admin
    ↓ (approves/rejects)
    ↓
Super Admin
    ↓ (auto-accept / final approval)
    ↓
Request APPROVED
    ↓
Attendance updated
```

### Approval Authority

**Team Member:**
- Can create requests
- Cannot approve
- Submits to: Manager

**Manager:**
- Can approve/reject: Team member requests
- Submits own requests to: Admin

**Admin:**
- Can approve/reject: Manager requests
- Submits own requests to: Super Admin

**Super Admin:**
- Can approve/reject: Admin requests
- Auto-accept: Own requests (final authority)

---

## ❌ Rejection Behavior

### Rejection Flow

```
Authority reviews request
    ↓
Clicks "Reject"
    ↓
Rejection dialog:
  ┌─────────────────────────────────┐
  │  Reject Request?                │
  │                                 │
  │  Rejection Reason (optional):   │
  │  [________________________]    │
  │                                 │
  │  [Confirm Rejection] [Cancel]   │
  └─────────────────────────────────┘
    ↓
Authority confirms rejection
    ↓
System logs:
  - Rejected by (name + role)
  - Rejected at (timestamp)
  - Rejection reason (if provided)
  - Optional note (if provided)
    ↓
Request status: REJECTED
    ↓
Notification sent to requester
    ↓
No effect on attendance
```

### Rejection Data Captured

**System must log:**
- **Rejected by:** Name + Role
- **Rejected at:** Timestamp
- **Rejection reason:** Optional text
- **Optional note:** Additional comments

---

## ✅ Effect on Work Time

### Approved Requests

**When request is APPROVED:**
```
Request approved
    ↓
System updates attendance:
  ├─ Attendance status changed
  ├─ Working time recalculated
  ├─ Leave balance updated (if applicable)
  └─ Salary/payout calculations affected
    ↓
Changes reflected in:
  ├─ Work Time module
  ├─ Team Management
  ├─ Reports
  └─ My Activity logs
```

### Pending/Rejected Requests

**When request is PENDING or REJECTED:**
```
Request pending/rejected
    ↓
No effect on:
  ├─ Attendance status
  ├─ Working time calculations
  ├─ Leave balance
  └─ Salary/payout logic
    ↓
Original attendance data unchanged
```

---

## 👁️ Visibility Rules

### User Visibility

**User can view:**
- Their own requests
- Status + timestamps
- Approval/rejection details
- Cannot view other users' requests

### Reporting Authority Visibility

**Reporting Authority can view:**
- Requests of direct subordinates
- Status + timestamps
- Can approve/reject subordinate requests
- Cannot view requests outside their hierarchy

### Super Admin Visibility

**Super Admin can view:**
- All requests across system
- All statuses + timestamps
- Can approve/reject any request
- Full visibility and control

---

## 🎨 UI/UX Pattern Compliance

All Work Time Requests modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Request List: Expandable/collapsible
- Request Details: Expandable/collapsible
- Voice Recording: Expandable/collapsible
- Approval History: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Request Journey

### Complete Example: Late Arrival Request

```
1. User arrives late at 9:30 AM (scheduled: 9:00 AM)
   ↓
2. User opens Work Time module
   ↓
3. Clicks "Raise Request" button
   ↓
4. Selects "Late Arrival" request type
   ↓
5. Date auto-filled: Today's date
   ↓
6. User taps 🎤 Mic button
   ↓
7. Records: "I was stuck in traffic due to an accident"
   ↓
8. System transcribes to text
   ↓
9. User reviews transcription
   ↓
10. User edits: "I was stuck in traffic due to a major accident on the highway"
    ↓
11. User clicks "Submit"
    ↓
12. Reconfirm popup appears
    ↓
13. User confirms
    ↓
14. Request created
    ↓
15. Status: DRAFT
    ↓
16. User clicks "Submit for Approval"
    ↓
17. Status: SUBMITTED
    ↓
18. Notification sent to Manager
    ↓
19. Manager reviews request
    ↓
20. Manager approves
    ↓
21. Status: APPROVED
    ↓
22. Attendance updated:
    - Late arrival marked
    - Working time adjusted
    - No penalty (if policy allows)
    ↓
23. Notification sent to user
    ↓
24. Request reflected in Work Time
    ↓
25. Logged in My Activity
```

---

## 📚 Related Documentation

- **Instruction 7:** Work Time Requests + My Activity + Governance Reinforcement
- **Work Time:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md`
- **Team Management:** See `FLOWS_AND_DIAGRAMS/team_management_flows.md`
- **My Activity:** See `FLOWS_AND_DIAGRAMS/my_activity_flows.md`
- **Approval Chain:** See `FLOWS_AND_DIAGRAMS/approval_chain_with_activity.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Work Time Requests flow documentation per Instruction 7 and Instruction 9. Includes request types, voice transcription, approval chain, lifecycle, effect on attendance, and Company Email Password Change Request.

