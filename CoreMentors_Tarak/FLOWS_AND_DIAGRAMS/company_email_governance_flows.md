# Company Email Governance – Complete Flows

**Instruction Reference:** Instruction 9  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Company Email Governance, including assignment rules, display requirements, and password change request process.

---

## 📧 Core Rule (Locked)

### Fundamental Principle

* **Company email IDs are predefined and assigned by authority** (Admin/Super Admin) under **Team Management**
* A user **cannot edit/change** their company email ID in My Profile or anywhere else

---

## 📋 Data Requirements (Must Exist)

### Required Fields

For every internal user (Admin/Manager/Sales/Accounts/Dev/GFX):

**Required:**
* `company_email` (string) — assigned only by Admin/Super Admin
* `company_email_assigned_by` (user_id + role)
* `company_email_assigned_at` (timestamp)

**Optional but Recommended:**
* `company_email_status` (enum): ACTIVE / INACTIVE
* `company_email_last_password_reset_at` (timestamp)
* `company_email_password_policy_version` (optional for future)

---

## 🔒 Permission Rules (Hard Locks)

### Who Can Edit Company Email

**Allowed:**
* **Super Admin** — can assign/change company email for any user
* **Admin** — can assign/change company email (if allowed under Super Admin governance; default allow)

**Not Allowed:**
* **Manager** — cannot change company email for anyone
* **User** — cannot edit their own company email

### Permission Flow

```
User attempts to edit company email
    ↓
System checks: Who is attempting?
    ↓
    ├─ Super Admin → Allow
    │
    ├─ Admin → Check: Allowed by Super Admin?
    │           ↓
    │           ├─ YES → Allow
    │           │
    │           └─ NO → Block
    │
    ├─ Manager → Block
    │           "Managers cannot change company email"
    │
    └─ User (self) → Block
                    "Company email assigned by Admin/Super Admin"
```

---

## 🎨 UI/UX Requirements (Company Email Display)

### Display Rules

**Show company email with:**
* **Lock icon** — visual indicator that field is locked
* **Label:** "Assigned by Admin / Super Admin"
* **"Last updated" timestamp** — when email was assigned/changed

### Display Locations

**1. My Profile → Contact Details:**
```
┌─────────────────────────────────────────┐
│  Contact Details                        │
│                                         │
│  Personal Emails:                       │
│  • email@personal.com                  │
│                                         │
│  Company Email:                         │
│  🔒 user@corementors.in                │
│  Assigned by Admin / Super Admin       │
│  Last updated: 2024-01-15 10:00 AM     │
│  (No edit icon)                         │
└─────────────────────────────────────────┘
```

**2. Team Management User Detail View:**
```
┌─────────────────────────────────────────┐
│  User: CM-SLS-0001                      │
│                                         │
│  Company Email:                         │
│  🔒 user@corementors.in                │
│  Assigned by: Admin (CM-ADM-0001)      │
│  Assigned at: 2024-01-15 10:00 AM      │
│                                         │
│  [Assign / Change Company Email]       │
│  (Visible to Admin/Super Admin only)    │
└─────────────────────────────────────────┘
```

### No Edit Icon for Normal Users

**Normal users see:**
* Lock icon
* Read-only field
* No edit button
* No edit capability

**Admin/Super Admin see:**
* Lock icon
* Read-only field (for display)
* "Assign / Change Company Email" action button
* Edit capability in Team Management

---

## 🔄 Assignment/Change Flow

### Admin/Super Admin Assigns Company Email

```
Admin/Super Admin opens Team Management
    ↓
Selects user
    ↓
Clicks "Assign / Change Company Email"
    ↓
Assignment Form:
  ┌─────────────────────────────────┐
  │  Assign Company Email           │
  │                                 │
  │  User: CM-SLS-0001              │
  │  Name: John Doe                 │
  │                                 │
  │  Company Email:                 │
  │  [user@corementors.in]          │
  │                                 │
  │  Status: [ACTIVE ▼]             │
  │                                 │
  │  Reason (optional):             │
  │  [________________________]     │
  │                                 │
  │  [Assign] [Cancel]              │
  └─────────────────────────────────┘
    ↓
Admin/Super Admin enters email
    ↓
System validates email format
    ↓
System checks: Email already assigned?
    ↓
    ├─ YES → Show error
    │        "Email already assigned to another user"
    │
    └─ NO → Assign email
            ↓
            System records:
            - company_email
            - company_email_status
            - company_email_assigned_by
            - company_email_assigned_at
            ↓
            Audit log created
            ↓
            My Activity logged:
            - For authority: "Company Email Assigned"
            - For user: "Company Email Updated by Authority"
            ↓
            Email assigned
            ↓
            User notified
```

### Change Existing Company Email

```
Admin/Super Admin opens Team Management
    ↓
Selects user with existing company email
    ↓
Clicks "Assign / Change Company Email"
    ↓
Change Form:
  ┌─────────────────────────────────┐
  │  Change Company Email            │
  │                                 │
  │  Current: user@corementors.in    │
  │                                 │
  │  New Email:                      │
  │  [newuser@corementors.in]       │
  │                                 │
  │  Reason (required):              │
  │  [________________________]     │
  │                                 │
  │  [Change] [Cancel]              │
  └─────────────────────────────────┘
    ↓
Admin/Super Admin enters new email
    ↓
System validates
    ↓
System checks: Email available?
    ↓
    ├─ NO → Show error
    │
    └─ YES → Record change
            ↓
            System records:
            - Before: old email
            - After: new email
            - Changed by: Admin/Super Admin
            - Changed at: timestamp
            - Reason: provided reason
            ↓
            Audit log created
            ↓
            My Activity logged:
            - For authority: "Company Email Changed"
            - For user: "Company Email Updated by Authority"
            ↓
            Email changed
            ↓
            User notified
```

---

## 📝 Audit + Activity Log (Mandatory)

### Audit Log Entry

**Any assignment/change of company email must create:**

```
┌─────────────────────────────────────────┐
│  AUDIT LOG ENTRY                       │
│  Company Email Assignment/Change       │
└─────────────────────────────────────────┘

Action: Company Email Assigned/Changed
User: CM-SLS-0001
Before: [old email or null]
After: user@corementors.in
Changed By: Admin (CM-ADM-0001)
Changed At: 2024-01-15 10:00 AM
Reason: "New employee onboarding"
Status: ACTIVE
```

### My Activity Entries

**For Authority (Admin/Super Admin):**
```
Action: Company Email Assigned/Changed
Entity: CM-SLS-0001
Timestamp: 2024-01-15 10:00 AM
Status: Success
Details: Assigned user@corementors.in
```

**For Impacted User:**
```
Action: Company Email Updated by Authority
Entity: Company Email
Timestamp: 2024-01-15 10:00 AM
Status: Success
Details: Assigned by Admin (CM-ADM-0001)
```

---

## 🔐 Password Change Request Integration

### Connection to Request Center

**Company Email Password Change:**
- Users cannot directly change password
- Must raise request through Request Center
- See: `FLOWS_AND_DIAGRAMS/work_time_requests_flows.md` for complete password change request flow

**Password Reset Tracking:**
- `company_email_last_password_reset_at` updated when password change request is completed
- Tracked in audit log
- Visible in Team Management user detail view

---

## 🎨 UI/UX Pattern Compliance

All Company Email Governance modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Company Email Display: Expandable/collapsible (show details)
- Assignment History: Expandable/collapsible
- Audit Log: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Assignment Journey

### Complete Example: Assigning Company Email

```
1. Admin opens Team Management
   ↓
2. Selects new employee: CM-SLS-0001
   ↓
3. Views user profile
   ↓
4. Clicks "Assign / Change Company Email"
   ↓
5. Enters email: john.doe@corementors.in
   ↓
6. Sets status: ACTIVE
   ↓
7. Adds reason: "New employee onboarding"
   ↓
8. Clicks "Assign"
   ↓
9. System validates email
   ↓
10. System checks: Email available?
    ↓
11. Email assigned
    ↓
12. Audit log created
    ↓
13. My Activity logged:
    - Admin: "Company Email Assigned"
    - Employee: "Company Email Updated by Authority"
    ↓
14. Employee notified
    ↓
15. Email visible in My Profile (locked)
    ↓
16. Employee can use email for:
    - Agreement signing (OTP)
    - Company communications
    - System notifications
```

---

## 📚 Related Documentation

- **Instruction 9:** Locked Module Names + Company Email Governance + Password Change Requests + Vendor Dashboard Exception
- **Team Management:** See `FLOWS_AND_DIAGRAMS/team_management_flows.md`
- **Work Time Requests:** See `FLOWS_AND_DIAGRAMS/work_time_requests_flows.md` (Password Change Request)
- **My Profile:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Company Email Governance flow documentation per Instruction 9. Includes assignment rules, permission controls, UI/UX requirements, audit logging, and integration with password change requests.

