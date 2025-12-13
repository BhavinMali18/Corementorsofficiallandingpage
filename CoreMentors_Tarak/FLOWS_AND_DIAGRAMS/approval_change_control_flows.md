# Approval Change Control – Complete Flows

**Instruction Reference:** Instruction 6  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Approval Change Control system, a dedicated tracking structure for managing edit requests, approvals, and change audits in the Work Time ecosystem.

---

## 📋 System Overview

### Purpose

Edits requiring approval must generate records in a dedicated approvals system to ensure:
- Traceability of all changes
- Proper authorization workflow
- Complete audit trail
- Governance compliance

### Naming Options (To Be Locked Later)

Working naming options:
- **Approval Center**
- **Change Control**
- **Authorization Log**
- **Governance Desk**

---

## 📊 Change Request Structure (Locked)

### Required Data Fields

**Minimum requirement - dedicated tracking structure for:**

1. **Change Request:**
   - Unique request ID
   - Request type (Time In edit, Time Out edit, Break edit, etc.)

2. **Reason:**
   - Mandatory reason for change
   - Free text or predefined reasons

3. **Target Record/Day:**
   - Date of attendance record
   - User ID
   - Specific record identifier

4. **Requested Changes (Diff):**
   - Before values (original data)
   - After values (new data)
   - Visual diff representation

5. **Requested By:**
   - Role (Manager/Admin)
   - User ID
   - Name

6. **Approved By:**
   - Role (Admin/Super Admin)
   - User ID
   - Name
   - (Empty if pending)

7. **Status:**
   - PENDING
   - APPROVED
   - REJECTED

8. **Timestamps:**
   - Request created at
   - Request reviewed at
   - Request approved/rejected at

---

## 🔄 Complete Approval Flow

### Request → Approve/Reject → Apply Diff → Audit

```
┌─────────────────────────────────────────┐
│      APPROVAL CHANGE CONTROL FLOW       │
└─────────────────────────────────────────┘

1. REQUEST CREATION
   ↓
   Manager/Admin attempts to edit past day
   ↓
   System detects: Lock window active
   ↓
   Change request created
   ↓
   Status: PENDING
   ↓
   Notification sent to superior authority

2. REVIEW
   ↓
   Superior authority receives notification
   ↓
   Views change request details:
   - Before/After values
   - Reason
   - Requested by
   ↓
   Reviews diff and reason

3. DECISION
   ↓
   Superior authority decides:
   ├─ APPROVE
   │   ↓
   │   Status: APPROVED
   │   ↓
   │   Approved by recorded
   │   ↓
   │   Approval timestamp recorded
   │   ↓
   │   Changes applied to record
   │   ↓
   │   Audit log created
   │   ↓
   │   Notification sent to requester
   │
   └─ REJECT
       ↓
       Status: REJECTED
       ↓
       Rejected by recorded
       ↓
       Rejection timestamp recorded
       ↓
       Rejection reason (optional)
       ↓
       Changes NOT applied
       ↓
       Notification sent to requester

4. AUDIT
   ↓
   Complete audit trail maintained:
   - Request details
   - Approval/rejection details
   - Before/after values
   - All timestamps
   - All actors
```

---

## 📝 Request Creation Flow

### When Edit Requires Approval

```
Manager/Admin opens Work Time entry
    ↓
Clicks "Edit" on past day record
    ↓
System checks: Is it same day?
    ↓
    ├─ YES → Allow edit (same-day rules)
    │        No approval needed
    │
    └─ NO → Lock window active
            ↓
            Show message: "Edit requires approval"
            ↓
            Change Request Form appears:
            ┌─────────────────────────────────┐
            │  Change Request                 │
            │                                 │
            │  Target: 2024-01-15            │
            │  User: CM-SLS-0001             │
            │                                 │
            │  Current Values:               │
            │  Time In: 09:00 AM             │
            │  Time Out: 06:00 PM            │
            │                                 │
            │  New Values:                   │
            │  Time In: 08:55 AM             │
            │  Time Out: 06:00 PM            │
            │                                 │
            │  Reason: [Required]            │
            │  [User arrived early]          │
            │                                 │
            │  [Submit Request] [Cancel]     │
            └─────────────────────────────────┘
            ↓
            Manager/Admin submits request
            ↓
            Change request created
            ↓
            Status: PENDING
            ↓
            Notification sent to superior
```

### Request Data Captured

**At Request Creation:**
- Change Request ID (auto-generated)
- Request Type (Time In edit, Time Out edit, etc.)
- Target Record/Day (date, user ID, record ID)
- Before Values (original data)
- After Values (requested changes)
- Reason (mandatory)
- Requested By (role + user ID + name)
- Status: PENDING
- Created At (timestamp)

---

## 👀 Review Flow

### Superior Authority Reviews Request

```
Superior authority receives notification
    ↓
Opens Approval Center / Change Control
    ↓
Views pending requests list
    ↓
Clicks on specific request
    ↓
Request Details View:
  ┌─────────────────────────────────┐
  │  Change Request #REQ-2024-001  │
  │                                 │
  │  Requested By: Manager         │
  │  User: CM-MGR-0001             │
  │  Date: 2024-01-15              │
  │                                 │
  │  Target User: CM-SLS-0001      │
  │  Target Date: 2024-01-15       │
  │                                 │
  │  BEFORE VALUES:                 │
  │  Time In: 09:00 AM             │
  │  Time Out: 06:00 PM            │
  │                                 │
  │  AFTER VALUES:                  │
  │  Time In: 08:55 AM             │
  │  Time Out: 06:00 PM            │
  │                                 │
  │  DIFF:                          │
  │  Time In: 09:00 AM → 08:55 AM  │
  │  (5 minutes earlier)            │
  │                                 │
  │  REASON:                        │
  │  "User arrived early, forgot   │
  │   to punch. Correcting time."  │
  │                                 │
  │  [Approve] [Reject] [View More]│
  └─────────────────────────────────┘
```

### Review Actions

**Superior authority can:**
- View complete request details
- See visual diff (before/after)
- Review reason
- Approve request
- Reject request
- Request more information (optional)

---

## ✅ Approval Flow

### When Request is Approved

```
Superior authority clicks "Approve"
    ↓
Confirmation dialog:
  ┌─────────────────────────────────┐
  │  Approve Change Request?        │
  │                                 │
  │  This will modify the           │
  │  attendance record.             │
  │                                 │
  │  [Confirm] [Cancel]             │
  └─────────────────────────────────┘
    ↓
    ├─ Cancel → No action
    │
    └─ Confirm → Approval processed
                 ↓
                 Status: APPROVED
                 ↓
                 Approved By recorded:
                 - Role
                 - User ID
                 - Name
                 ↓
                 Approval Timestamp recorded
                 ↓
                 Changes applied to record:
                 - Original values replaced
                 - New values saved
                 ↓
                 Audit log created:
                 - Complete change history
                 - Before/after values
                 - All actors
                 - All timestamps
                 ↓
                 Notification sent to requester:
                 "Your change request has been approved"
                 ↓
                 Work Time record updated
                 ↓
                 Dashboard refreshed
```

### Approval Data Captured

**At Approval:**
- Status: APPROVED
- Approved By (role + user ID + name)
- Approved At (timestamp)
- Changes applied to target record
- Audit log entry created

---

## ❌ Rejection Flow

### When Request is Rejected

```
Superior authority clicks "Reject"
    ↓
Rejection dialog:
  ┌─────────────────────────────────┐
  │  Reject Change Request?         │
  │                                 │
  │  Rejection Reason (optional):   │
  │  [________________________]    │
  │                                 │
  │  [Confirm Rejection] [Cancel]   │
  └─────────────────────────────────┘
    ↓
    ├─ Cancel → No action
    │
    └─ Confirm → Rejection processed
                 ↓
                 Status: REJECTED
                 ↓
                 Rejected By recorded:
                 - Role
                 - User ID
                 - Name
                 ↓
                 Rejection Timestamp recorded
                 ↓
                 Rejection Reason recorded (if provided)
                 ↓
                 Changes NOT applied
                 ↓
                 Original record unchanged
                 ↓
                 Audit log created:
                 - Request details
                 - Rejection details
                 - Reason (if provided)
                 ↓
                 Notification sent to requester:
                 "Your change request has been rejected"
                 ↓
                 Requester can view rejection reason
```

### Rejection Data Captured

**At Rejection:**
- Status: REJECTED
- Rejected By (role + user ID + name)
- Rejected At (timestamp)
- Rejection Reason (optional)
- Changes NOT applied
- Audit log entry created

---

## 📊 Apply Diff Flow

### When Changes Are Applied

```
Request approved
    ↓
System applies changes
    ↓
Target record updated:
  ┌─────────────────────────────────┐
  │  BEFORE:                        │
  │  Time In: 09:00 AM             │
  │  Time Out: 06:00 PM            │
  │                                 │
  │  AFTER:                         │
  │  Time In: 08:55 AM             │
  │  Time Out: 06:00 PM            │
  └─────────────────────────────────┘
    ↓
Recalculations triggered:
  ├─ Gross Duration recalculated
  ├─ Net Working Time recalculated
  ├─ Overtime/Undertime recalculated
  └─ Attendance status updated
    ↓
Dashboard refreshed
    ↓
All views updated
    ↓
Audit log entry created
```

---

## 📝 Audit Flow

### Complete Audit Trail

**Every change request maintains:**

```
┌─────────────────────────────────────────┐
│      AUDIT TRAIL ENTRY                  │
└─────────────────────────────────────────┘

Request ID: REQ-2024-001
Request Type: Time In Edit
Target Date: 2024-01-15
Target User: CM-SLS-0001

BEFORE VALUES:
  Time In: 09:00 AM
  Time Out: 06:00 PM
  Net Working Time: 7 hours 45 minutes

AFTER VALUES:
  Time In: 08:55 AM
  Time Out: 06:00 PM
  Net Working Time: 7 hours 50 minutes

REQUEST DETAILS:
  Requested By: Manager (CM-MGR-0001)
  Requested At: 2024-01-16 10:00 AM
  Reason: "User arrived early, forgot to punch"

APPROVAL DETAILS:
  Approved By: Admin (CM-ADM-0001)
  Approved At: 2024-01-16 11:00 AM
  Status: APPROVED

CHANGE APPLIED:
  Applied At: 2024-01-16 11:00 AM
  Applied By: System (auto)
  Record Updated: Yes

AUDIT:
  Audit Log ID: AUD-2024-001
  Created At: 2024-01-16 11:00 AM
  Complete History: Yes
```

### Audit Log Features

**Audit log includes:**
- Complete request history
- All before/after values
- All actors (requester, approver)
- All timestamps
- Status changes
- Recalculation results
- Immutable record (cannot be deleted)

---

## 📋 Status Model

### Request Status Flow

```
┌──────────┐
│ PENDING  │  ← Request created, awaiting review
└────┬─────┘
     │
     │ Superior reviews
     │
     ├─► APPROVED ──► Changes applied
     │
     └─► REJECTED ──► Changes not applied
```

### Status Details

**PENDING:**
- Request created
- Awaiting superior authority review
- Can be viewed by requester and superior
- Can be cancelled by requester (if not yet reviewed)

**APPROVED:**
- Request approved by superior
- Changes applied to target record
- Audit log created
- Final status (cannot be changed)

**REJECTED:**
- Request rejected by superior
- Changes NOT applied
- Audit log created
- Final status (cannot be changed)

---

## 🎨 UI/UX Pattern Compliance

All Approval Change Control modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Request List: Expandable/collapsible
- Request Details: Expandable/collapsible
- Diff View: Expandable/collapsible
- Audit Log: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Approval Journey

### Complete Example

```
1. Manager notices team member forgot to punch Time In yesterday
   ↓
2. Manager attempts to edit past day record
   ↓
3. System detects: Lock window active
   ↓
4. Change request form appears
   ↓
5. Manager enters:
   - New Time In: 08:55 AM
   - Reason: "User arrived early, forgot to punch"
   ↓
6. Manager submits request
   ↓
7. Status: PENDING
   ↓
8. Admin receives notification
   ↓
9. Admin opens Approval Center
   ↓
10. Admin reviews request:
    - Sees before/after values
    - Reads reason
    - Reviews diff
    ↓
11. Admin approves request
    ↓
12. Status: APPROVED
    ↓
13. Changes applied to record:
    - Time In updated to 08:55 AM
    - Net Working Time recalculated
    ↓
14. Audit log created
    ↓
15. Manager receives notification: "Request approved"
    ↓
16. Work Time record updated
    ↓
17. Dashboard refreshed
```

---

## 📚 Related Documentation

- **Instruction 6:** Team Management Module + Work-Time Governance Overlay
- **Team Management:** See `FLOWS_AND_DIAGRAMS/team_management_flows.md`
- **Work Time:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Approval Change Control flow documentation per Instruction 6. Includes request creation, review, approval/rejection, diff application, and complete audit trail.

