# Client Sub-Users & Controls – Complete Flows

**Instruction Reference:** Instruction 9, Instruction 10  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Client Sub-Users & Controls, allowing clients to create and manage sub-users with granular permission controls.

---

## 👥 Roles & Hierarchy

### Client Roles

**Primary Role:**
* **Client Owner** — Primary client account holder

**Secondary Role:**
* **Client Sub-Users** — Secondary users created by Client Owner

### Role Hierarchy

```
Client Owner
    ↓
    ├─ Sub-User 1
    ├─ Sub-User 2
    └─ Sub-User N
```

---

## 🔄 Sub-User Creation Flow

### Creation Authority (Instruction 10)

**Who Can Create Sub-Users:**
* Client Owner (existing)
* **NEW:** Assigned Salesperson (reporting authority) can also create sub-users for that client (when required)

### Creation Process

```
Client Owner OR Assigned Salesperson opens Client Management
    ↓
Clicks "Create Sub-User"
    ↓
Sub-User Creation Form:
  ┌─────────────────────────────────┐
  │  Create Sub-User                │
  │                                 │
  │  Name: [________________]      │
  │  Email: [________________]     │
  │  Phone: [________________]      │
  │                                 │
  │  Permissions:                   │
  │  ☑ View Work Hub               │
  │  ☑ Create Additional Requests  │
  │  ☐ Approve Quotations          │
  │  ☐ View Financials             │
  │  ☐ Manage Documents             │
  │                                 │
  │  [Create Sub-User] [Cancel]     │
  └─────────────────────────────────┘
    ↓
User fills form
    ↓
Sets permissions
    ↓
Clicks "Create Sub-User"
    ↓
System validates
    ↓
Sub-User created
    ↓
System generates User ID (Instruction 10)
    ↓
Password set by client (or client can reset)
    ↓
Invitation email sent
    ↓
Sub-User can access system
```

### Salesperson Creation Flow

```
Assigned Salesperson opens Client Management
    ↓
Selects client
    ↓
Clicks "Create Sub-User for Client"
    ↓
Sub-User Creation Form (same as above)
    ↓
Salesperson fills form
    ↓
Clicks "Create Sub-User"
    ↓
System validates
    ↓
Sub-User created
    ↓
System logs: Created by Salesperson (role + name)
    ↓
Client Owner notified
    ↓
Sub-User can access system
```

### Sub-User Credentials (Instruction 10)

**Credential Rules:**
* Sub-user gets system-generated User ID
* Password is set by client (or client can reset)
* Client has full control over sub-user passwords

### Permission Settings

**Available Permissions:**
* View Work Hub
* Create Additional Requests
* Approve Quotations
* View Financials
* Manage Documents
* View Reports
* Manage Sub-Users (if allowed)

**Permission Control:**
* Client Owner sets permissions per sub-user
* Permissions can be updated later
* Permissions enforced at system level

---

## 🔐 Primary Email Change

### Email Change Process

```
Client Owner attempts to change primary email
    ↓
Email Change Form:
  ┌─────────────────────────────────┐
  │  Change Primary Email           │
  │                                 │
  │  Current Email:                 │
  │  owner@client.com               │
  │                                 │
  │  New Email:                     │
  │  [________________]             │
  │                                 │
  │  [Request Change]               │
  └─────────────────────────────────┘
    ↓
Client Owner requests change
    ↓
System generates OTP
    ↓
OTP sent to current email
    ↓
Client Owner enters OTP
    ↓
System verifies OTP
    ↓
    ├─ Valid → Email changed
    │          ↓
    │          Notification sent
    │          ↓
    │          My Activity logged
    │
    └─ Invalid → Show error
                  Allow retry
```

### Recovery via Assigned Salesperson Mailbox (Instruction 10)

**If client loses access to current primary email:**
```
Client Owner cannot access current email
    ↓
Clicks "Recover via Salesperson Mailbox"
    ↓
Recovery Request Form:
  ┌─────────────────────────────────┐
  │  Email Recovery Request         │
  │                                 │
  │  Current Email:                 │
  │  owner@client.com (inaccessible)│
  │                                 │
  │  New Email:                     │
  │  [________________]             │
  │                                 │
  │  Reason:                        │
  │  [________________]             │
  │                                 │
  │  OTP will be sent to assigned  │
  │  salesperson's company email.    │
  │                                 │
  │  [Request Recovery] [Cancel]    │
  └─────────────────────────────────┘
    ↓
Client Owner requests recovery
    ↓
System generates OTP
    ↓
OTP sent to assigned salesperson's **company email**
    ↓
Salesperson receives OTP
    ↓
Salesperson reviews request
    ↓
Salesperson approves/rejects
    ↓
    ├─ Approved → OTP shared with client
    │              ↓
    │              Client enters OTP
    │              ↓
    │              Email changed
    │              ↓
    │              Recovery tracked + audited
    │              ↓
    │              My Activity logged
    │
    └─ Rejected → Request denied
                   Notification sent
                   Recovery attempt logged
```

**Recovery Tracking:**
* This recovery flow must be tracked + audited
* Logged as a controlled request/event
* Full audit trail maintained

---

## 🗑️ Deletion Rules

### Soft Delete Process

```
Client Owner attempts to delete sub-user
    ↓
Delete Confirmation:
  ┌─────────────────────────────────┐
  │  Delete Sub-User?                │
  │                                 │
  │  Name: John Doe                 │
  │  Email: john@client.com         │
  │                                 │
  │  This action cannot be undone.  │
  │                                 │
  │  [Confirm Delete] [Cancel]      │
  └─────────────────────────────────┘
    ↓
Client Owner confirms
    ↓
System performs soft delete
    ↓
Sub-User marked as deleted
    ↓
Sub-User cannot access system
    ↓
Client Owner sees deleted sub-user (hidden as active)
    ↓
Admin/Super Admin retain visibility (with distinct marker)
```

### Soft Delete Marker (Instruction 10)

**Soft Delete Behavior:**
* Client "deletions" are soft-deletes:
  * Hidden as active for client
  * Retained internally
  * Admin/Super Admin can view deleted history with distinct marker/color/state

**Visual Distinction:**
* Deleted sub-users shown with:
  * Distinct marker (e.g., "DELETED" badge)
  * Different color (e.g., grayed out)
  * Special state indicator

**For Client Owner:**
* Deleted sub-users hidden as active
* Not visible in active list
* Cannot be reactivated by Client Owner

**For Admin/Super Admin:**
* Full visibility of deleted sub-users
* Deleted items shown with distinct marker/color/state
* Can reactivate if needed
* Complete audit trail maintained

---

## 📊 Activity Logs & Visibility

### Activity Logging Security Metadata (Instruction 10)

**Metadata Captured:**
* Device information
* IP address
* **MAC address**
* Location data
* Session ID
* Browser/App information

### Activity Log Visibility

**For Client:**
* Activity logs visible (non-forensic)
* Shows: Who, When, What
* Limited metadata (no MAC, no precise location)

**For Admin/Super Admin:**
* Full forensic metadata visible
* Complete audit trail
* All system actions logged
* Full security metadata (device, IP, MAC, location)

### Activity Log Flow

```
Action performed by Client/Sub-User
    ↓
System captures security metadata:
  - Device information
  - IP address
  - MAC address
  - Location data
  - Session ID
    ↓
System logs action
    ↓
Log stored in My Activity
    ↓
    ├─ Client View:
    │  - Who: Sub-User Name
    │  - When: Timestamp
    │  - What: Action description
    │  - Limited metadata (no MAC, no precise location)
    │
    └─ Admin/Super Admin View:
       - Who: Full user details
       - When: Precise timestamp
       - What: Complete action details
       - IP Address
       - MAC Address
       - Device Info
       - Location Data
       - Session ID
       - Full forensic metadata
```

---

## 🔒 Permission Management

### Permission Update Flow

```
Client Owner opens Sub-User Management
    ↓
Selects sub-user
    ↓
Clicks "Edit Permissions"
    ↓
Permission Editor:
  ┌─────────────────────────────────┐
  │  Edit Permissions: John Doe      │
  │                                 │
  │  ☑ View Work Hub               │
  │  ☑ Create Additional Requests  │
  │  ☐ Approve Quotations          │
  │  ☐ View Financials             │
  │  ☐ Manage Documents             │
  │                                 │
  │  [Save Changes] [Cancel]        │
  └─────────────────────────────────┘
    ↓
Client Owner updates permissions
    ↓
Clicks "Save Changes"
    ↓
System validates
    ↓
Permissions updated
    ↓
Sub-User notified (if applicable)
    ↓
My Activity logged
```

---

## 🎨 UI/UX Pattern Compliance

All Client Sub-Users & Controls modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Sub-User List: Expandable/collapsible
- Permission Settings: Expandable/collapsible
- Activity Logs: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Client Journey

### Complete Example: Creating and Managing Sub-Users

```
1. Client Owner logs in
   ↓
2. Opens Client Management
   ↓
3. Clicks "Create Sub-User"
   ↓
4. Fills sub-user details:
   - Name: John Doe
   - Email: john@client.com
   - Phone: +91-9876543210
   ↓
5. Sets permissions:
   - View Work Hub: ✓
   - Create Additional Requests: ✓
   - Approve Quotations: ✗
   ↓
6. Clicks "Create Sub-User"
   ↓
7. Sub-User created
   ↓
8. Invitation email sent to john@client.com
   ↓
9. Sub-User receives invitation
   ↓
10. Sub-User accepts invitation
    ↓
11. Sub-User can access system
    ↓
12. Sub-User views Work Hub (permission granted)
    ↓
13. Client Owner later updates permissions
    ↓
14. Sub-User can now approve quotations
    ↓
15. All actions logged in My Activity
```

---

## 📚 Related Documentation

- **Instruction 9:** Client Sub-Users & Controls
- **Work Hub:** See `FLOWS_AND_DIAGRAMS/work_hub_flows.md`
- **My Activity:** See `FLOWS_AND_DIAGRAMS/my_activity_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Client Sub-Users & Controls flow documentation per Instruction 9. Includes sub-user creation, permission management, primary email change, soft delete rules, and activity log visibility.

