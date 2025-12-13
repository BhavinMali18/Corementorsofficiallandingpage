# Approval Chain with Activity Logging – Complete Flows

**Instruction Reference:** Instruction 7  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the combined flow for Request + Approval + Activity Logging, showing how all three systems work together to provide complete traceability and accountability.

---

## 🔄 Combined Flow Overview

### Complete Accountability Chain

```
┌─────────────────────────────────────────┐
│  REQUEST + APPROVAL + ACTIVITY LOGGING  │
└─────────────────────────────────────────┘

1. REQUEST CREATION
   ↓
   User creates request
   ↓
   Activity logged: "Request Created"
   ↓
2. REQUEST SUBMISSION
   ↓
   User submits request
   ↓
   Activity logged: "Request Submitted"
   ↓
3. APPROVAL REVIEW
   ↓
   Authority reviews request
   ↓
   Activity logged: "Request Reviewed"
   ↓
4. APPROVAL DECISION
   ↓
   Authority approves/rejects
   ↓
   Activity logged: "Request Approved/Rejected"
   ↓
5. EFFECT ON ATTENDANCE
   ↓
   If approved: Attendance updated
   ↓
   Activity logged: "Attendance Updated"
   ↓
6. COMPLETE AUDIT TRAIL
   ↓
   All actions visible in My Activity
   ↓
   Full traceability maintained
```

---

## 📝 Request Creation with Activity Logging

### Flow Diagram

```
User opens Work Time Requests
    ↓
Selects request type: "Late Arrival"
    ↓
Records voice reason
    ↓
System transcribes
    ↓
User reviews/edits
    ↓
User submits request
    ↓
┌─────────────────────────────────┐
│  ACTIVITY LOGGED:               │
│  Action: Request Created        │
│  Type: Late Arrival             │
│  Entity: Request #REQ-001       │
│  Timestamp: 2024-01-15 10:00 AM│
│  Status: Success                │
│  User: CM-SLS-0001              │
└─────────────────────────────────┘
    ↓
Request status: DRAFT
    ↓
Visible in user's My Activity
```

### Activity Entry Details

**Logged Information:**
- Action Type: "Request Created"
- Specific Action: "Late Arrival Request"
- Entity: Request ID
- Timestamp: Creation time
- Status: Success
- User: Requester ID
- Metadata: Voice file, transcribed text

---

## 📤 Request Submission with Activity Logging

### Flow Diagram

```
User clicks "Submit for Approval"
    ↓
Reconfirm popup
    ↓
User confirms
    ↓
Request status: DRAFT → SUBMITTED
    ↓
┌─────────────────────────────────┐
│  ACTIVITY LOGGED:               │
│  Action: Request Submitted      │
│  Type: Late Arrival             │
│  Entity: Request #REQ-001       │
│  Timestamp: 2024-01-15 10:05 AM│
│  Status: Success                │
│  User: CM-SLS-0001              │
│  Submitted To: Manager          │
└─────────────────────────────────┘
    ↓
Notification sent to Manager
    ↓
Visible in:
  - User's My Activity
  - Manager's notification
```

### Activity Entry Details

**Logged Information:**
- Action Type: "Request Submitted"
- Specific Action: "Late Arrival Request Submitted"
- Entity: Request ID
- Timestamp: Submission time
- Status: Success
- User: Requester ID
- Submitted To: Approval authority

---

## 👀 Approval Review with Activity Logging

### Flow Diagram

```
Manager receives notification
    ↓
Opens request for review
    ↓
Views request details
    ↓
┌─────────────────────────────────┐
│  ACTIVITY LOGGED:               │
│  Action: Request Reviewed       │
│  Type: Late Arrival             │
│  Entity: Request #REQ-001       │
│  Timestamp: 2024-01-15 11:00 AM│
│  Status: Success                │
│  User: CM-MGR-0001 (Manager)    │
│  Reviewed: Request #REQ-001     │
└─────────────────────────────────┘
    ↓
Manager reviews:
  - Request type
  - Voice reason
  - Date
  - Context
    ↓
Manager makes decision
```

### Activity Entry Details

**Logged Information:**
- Action Type: "Request Reviewed"
- Specific Action: "Late Arrival Request Reviewed"
- Entity: Request ID
- Timestamp: Review time
- Status: Success
- User: Reviewer ID (Manager)
- Reviewed: Request ID

---

## ✅ Approval Decision with Activity Logging

### Approval Flow

```
Manager clicks "Approve"
    ↓
Confirmation dialog
    ↓
Manager confirms
    ↓
Request status: SUBMITTED → APPROVED
    ↓
┌─────────────────────────────────┐
│  ACTIVITY LOGGED (Requester):   │
│  Action: Request Approved        │
│  Type: Late Arrival              │
│  Entity: Request #REQ-001        │
│  Timestamp: 2024-01-15 11:05 AM │
│  Status: Success                 │
│  Approved By: Manager            │
│  User: CM-SLS-0001               │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│  ACTIVITY LOGGED (Approver):    │
│  Action: Request Approved        │
│  Type: Late Arrival              │
│  Entity: Request #REQ-001        │
│  Timestamp: 2024-01-15 11:05 AM │
│  Status: Success                 │
│  User: CM-MGR-0001 (Manager)     │
│  Approved: Request #REQ-001     │
└─────────────────────────────────┘
    ↓
Attendance updated
    ↓
Notification sent to requester
```

### Rejection Flow

```
Manager clicks "Reject"
    ↓
Rejection dialog
    ↓
Manager enters reason (optional)
    ↓
Manager confirms
    ↓
Request status: SUBMITTED → REJECTED
    ↓
┌─────────────────────────────────┐
│  ACTIVITY LOGGED (Requester):   │
│  Action: Request Rejected        │
│  Type: Late Arrival              │
│  Entity: Request #REQ-001        │
│  Timestamp: 2024-01-15 11:05 AM │
│  Status: Rejected                │
│  Rejected By: Manager            │
│  Reason: [Optional reason]       │
│  User: CM-SLS-0001               │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│  ACTIVITY LOGGED (Rejector):    │
│  Action: Request Rejected        │
│  Type: Late Arrival              │
│  Entity: Request #REQ-001        │
│  Timestamp: 2024-01-15 11:05 AM │
│  Status: Success                 │
│  User: CM-MGR-0001 (Manager)     │
│  Rejected: Request #REQ-001     │
│  Reason: [Optional reason]       │
└─────────────────────────────────┘
    ↓
No attendance update
    ↓
Notification sent to requester
```

### Activity Entry Details

**For Requester:**
- Action Type: "Request Approved/Rejected"
- Entity: Request ID
- Timestamp: Decision time
- Status: Approved/Rejected
- Approved/Rejected By: Authority role + ID
- Reason: (if rejected)

**For Approver/Rejector:**
- Action Type: "Request Approved/Rejected"
- Entity: Request ID
- Timestamp: Decision time
- Status: Success
- User: Approver/Rejector ID
- Approved/Rejected: Request ID
- Reason: (if rejected)

---

## 📊 Effect on Attendance with Activity Logging

### Approved Request Effect

```
Request approved
    ↓
System updates attendance:
  - Attendance status changed
  - Working time recalculated
  - Leave balance updated (if applicable)
    ↓
┌─────────────────────────────────┐
│  ACTIVITY LOGGED:               │
│  Action: Attendance Updated      │
│  Type: Late Arrival Applied      │
│  Entity: Attendance 2024-01-15   │
│  Timestamp: 2024-01-15 11:05 AM │
│  Status: Success                 │
│  User: CM-SLS-0001              │
│  Updated By: System (Auto)      │
│  Triggered By: Request #REQ-001 │
└─────────────────────────────────┘
    ↓
Changes reflected in:
  - Work Time module
  - Team Management
  - Reports
  - My Activity logs
```

### Activity Entry Details

**Logged Information:**
- Action Type: "Attendance Updated"
- Specific Action: "Late Arrival Applied"
- Entity: Attendance record (date)
- Timestamp: Update time
- Status: Success
- User: Affected user ID
- Updated By: System (auto)
- Triggered By: Request ID

---

## 🔗 Multi-Stage Approval with Activity Logging

### Complete Chain Example

```
Team Member creates request
    ↓
Activity: "Request Created" (Team Member)
    ↓
Team Member submits
    ↓
Activity: "Request Submitted" (Team Member)
    ↓
Manager reviews
    ↓
Activity: "Request Reviewed" (Manager)
    ↓
Manager approves
    ↓
Activity: "Request Approved" (Team Member)
Activity: "Request Approved" (Manager)
    ↓
Admin reviews (if required)
    ↓
Activity: "Request Reviewed" (Admin)
    ↓
Admin approves
    ↓
Activity: "Request Approved" (Team Member)
Activity: "Request Approved" (Admin)
    ↓
Super Admin final approval
    ↓
Activity: "Request Approved" (Team Member)
Activity: "Request Approved" (Super Admin)
    ↓
Attendance updated
    ↓
Activity: "Attendance Updated" (Team Member)
    ↓
Complete audit trail maintained
```

---

## 📋 Complete Audit Trail

### Example: Full Request Journey

```
┌─────────────────────────────────────────┐
│  COMPLETE AUDIT TRAIL                   │
│  Request #REQ-001: Late Arrival        │
└─────────────────────────────────────────┘

2024-01-15 10:00 AM
  Action: Request Created
  User: CM-SLS-0001 (Team Member)
  Type: Late Arrival
  Status: Success

2024-01-15 10:05 AM
  Action: Request Submitted
  User: CM-SLS-0001 (Team Member)
  Submitted To: Manager
  Status: Success

2024-01-15 11:00 AM
  Action: Request Reviewed
  User: CM-MGR-0001 (Manager)
  Reviewed: Request #REQ-001
  Status: Success

2024-01-15 11:05 AM
  Action: Request Approved
  User: CM-SLS-0001 (Team Member)
  Approved By: Manager (CM-MGR-0001)
  Status: Approved

2024-01-15 11:05 AM
  Action: Request Approved
  User: CM-MGR-0001 (Manager)
  Approved: Request #REQ-001
  Status: Success

2024-01-15 11:05 AM
  Action: Attendance Updated
  User: CM-SLS-0001 (Team Member)
  Updated By: System (Auto)
  Triggered By: Request #REQ-001
  Status: Success
```

---

## 🎨 UI/UX Pattern Compliance

All Approval Chain with Activity modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Request Details: Expandable/collapsible
- Approval History: Expandable/collapsible
- Activity Logs: Expandable/collapsible
- Audit Trail: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 🔒 Governance Reinforcement

### Rules Applied

1. **No action without trace:**
   - Every action logged in My Activity
   - Complete visibility

2. **No override without audit:**
   - All overrides fully audited
   - Approval chain visible

3. **No approval without identity:**
   - Who approved + role + time always recorded
   - Complete accountability

4. **No silent recalculation:**
   - All changes reflected in logs
   - Transparent updates

5. **Hierarchy always respected and visible:**
   - Clear authority chain
   - Proper escalation

---

## 📚 Related Documentation

- **Instruction 7:** Work Time Requests + My Activity + Governance Reinforcement
- **Work Time Requests:** See `FLOWS_AND_DIAGRAMS/work_time_requests_flows.md`
- **My Activity:** See `FLOWS_AND_DIAGRAMS/my_activity_flows.md`
- **Work Time:** See `FLOWS_AND_DIAGRAMS/work_time_flows.md`
- **Team Management:** See `FLOWS_AND_DIAGRAMS/team_management_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Approval Chain with Activity flow documentation per Instruction 7. Includes combined request, approval, and activity logging flows with complete audit trail.

