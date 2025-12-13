# Agreement Planner & Agreement System – Complete Flows

**Instruction Reference:** Instruction 7 Addendum, Instruction 9  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Agreement Planner & Agreement System, including template creation, agreement generation, signing flow, and tracking.

**Note:** Module names are locked per Instruction 9:
- Agreement module: **Agreement Center**
- Super Admin master: **Agreement Policy Master**

---

## 📋 Agreement Categories (Locked)

### Internal Team Agreements

**Available Types:**
- Welcome Letter / Offer Letter
- Probation Agreement
- Employment / Work Agreement
- Internal NDA
- Policy Acknowledgement

### Vendor Agreements

**Available Types:**
- Vendor Agreement
- Payment Terms Agreement
- NDA (if applicable)

### Client Agreements

**Available Types:**
- Service Agreement
- NDA (optional / service-dependent)
- Payment & Milestone Agreement

---

## 🎯 Agreement Scope Rules (Instruction 9)

### Internal Team

**Requirements:**
- Profile must be **100% complete**
- Agreement signing required
- OTP mandatory
- Dashboard unlocks only after signing

### Vendor

**Requirements:**
- Profile completion mandatory
- Agreement encouraged but **non-blocking**
- Dashboard access allowed even if agreement not signed

### Client

**Requirements:**
- Liberal onboarding
- Legal/payment agreements enforced later
- No blocking for dashboard access

---

## 🔐 Agreement Ownership & Access (Instruction 9)

### Template Ownership

**Templates:**
- Drafted & approved by Super Admin only
- No other role can create templates

### Sending Rules

**Sending:**
- Admin allowed only after Super Admin approval
- Admin cannot send without approval
- Super Admin can send directly

### Viewing Signed Agreements

**Access Rules:**
- **User** → own only
- **Admin/Super Admin** → all
- **Manager** → none (others)

**No leakage allowed:** Role-based agreement eligibility enforced at send time

### Access Enforcement Flow

```
User attempts to view agreement
    ↓
System checks: User role?
    ↓
    ├─ User → Check: Own agreement?
    │           ↓
    │           ├─ YES → Allow
    │           │
    │           └─ NO → Block
    │
    ├─ Admin/Super Admin → Allow (all agreements)
    │
    └─ Manager → Block (others' agreements)
                 "Access denied"
```

---

## 📝 Agreement Planner — SUPER ADMIN ONLY (Templates)

### Purpose

Create and manage agreement templates that can be used to generate agreement instances for users/clients/vendors.

### Capabilities

**Super Admin can:**
- Create agreement templates
- Define agreement type & target panel(s)
- Insert dynamic fields from:
  * My Profile (name, address, role, unit, etc.)
  * Company Profile (company identity, addresses, etc.)
- Attach legal blocks (IP, NDA, payment terms, confidentiality)
- Mark clauses as mandatory (checkbox acceptance)

### Template Creation Flow

```
Super Admin opens Agreement Planner
    ↓
Clicks "Create New Template"
    ↓
Template Form:
  ┌─────────────────────────────────┐
  │  Template Name: [Employment]    │
  │                                 │
  │  Agreement Type:                │
  │  [Employment / Work Agreement] │
  │                                 │
  │  Target Panel(s):               │
  │  ☑ Internal Team               │
  │  ☐ Vendor                       │
  │  ☐ Client                       │
  │                                 │
  │  Template Content:              │
  │  [Rich text editor]             │
  │                                 │
  │  Dynamic Fields:                │
  │  [Insert from My Profile]       │
  │  [Insert from Company Profile]  │
  │                                 │
  │  Legal Blocks:                  │
  │  ☑ IP Clause                    │
  │  ☑ NDA Clause                   │
  │  ☑ Payment Terms                │
  │  ☑ Confidentiality              │
  │                                 │
  │  Mandatory Clauses:             │
  │  ☑ Clause 1 (checkbox)         │
  │  ☑ Clause 2 (checkbox)          │
  │                                 │
  │  [Save Template] [Cancel]       │
  └─────────────────────────────────┘
    ↓
Template saved
    ↓
Available for agreement generation
```

### Editing & Versioning Rules (Instruction 9)

**Before Signing:**
- Super Admin may edit templates
- Admin may generate new versions
- If edited after send:
  * Option 1: Update existing (invalidate old)
  * Option 2: Send new (keep old as draft)

**After Signing:**
- **NO edits allowed**
- New agreement required for changes
- Original agreement remains immutable

**Template Edit Flow:**
```
Super Admin opens template
    ↓
Clicks "Edit Template"
    ↓
Checks: Has any instance been signed?
    ↓
    ├─ YES → Edit blocked
    │        "Cannot edit: Agreement instances signed"
    │
    └─ NO → Edit allowed
            ↓
            Template editor opens
            ↓
            Super Admin makes changes
            ↓
            Template saved
            ↓
            Future instances use updated template
```

**Agreement Versioning Flow:**
```
Agreement sent to user
    ↓
User has not signed yet
    ↓
Super Admin edits template
    ↓
System prompts:
  ┌─────────────────────────────────┐
  │  Update Agreement?              │
  │                                 │
  │  Option 1: Update existing     │
  │  (Invalidate old version)       │
  │                                 │
  │  Option 2: Send new version     │
  │  (Keep old as draft)            │
  │                                 │
  │  [Update] [Send New] [Cancel]   │
  └─────────────────────────────────┘
    ↓
Super Admin selects option
    ↓
Agreement updated or new version sent
```

---

## 🏭 Agreement Maker (Instance Generator) — Permission-Based

### Purpose

Generate agreement instances for specific users/clients/vendors from templates.

### Instance Generation Flow

```
Admin/Manager opens Agreement Maker
    ↓
Selects template
    ↓
Selects target user/client/vendor
    ↓
System auto-fills data:
  - From My Profile (name, address, role, etc.)
  - From Company Profile (company details)
    ↓
Agreement Preview:
  ┌─────────────────────────────────┐
  │  Agreement Preview              │
  │                                 │
  │  [Auto-filled content]          │
  │                                 │
  │  Custom Clauses (if permitted): │
  │  [Add Custom Clause]            │
  │                                 │
  │  [Generate Agreement] [Cancel]  │
  └─────────────────────────────────┘
    ↓
Agreement instance generated
    ↓
Status: Draft
    ↓
Ready for sending
```

### Permission-Based Custom Clauses

**Custom clauses:**
- Add limited custom clauses only if permitted
- Permission controlled by Super Admin
- Custom clauses clearly marked in agreement

---

## ✅ Signing Preconditions (Locked)

### Requirements

**Before signing, user must have:**

1. **My Profile 100% complete:**
   - As per governance rules
   - All mandatory fields filled
   - Profile completion % = 100%

2. **Mandatory documents:**
   - Required KYC documents uploaded
   - As per governance rules

3. **Signature uploaded:**
   - Personal signature in My Profile
   - Required for signing

### Precondition Check Flow

```
User attempts to sign agreement
    ↓
System checks preconditions:
  ├─ Profile completion = 100%?
  ├─ Mandatory documents uploaded?
  └─ Signature uploaded?
    ↓
    ├─ NO → Block signing
    │        Show: "Complete profile to sign agreement"
    │        List missing requirements
    │
    └─ YES → Allow signing
              ↓
              Proceed to signing flow
```

---

## ✍️ Signing Flow (Phase 1 – Locked)

### Complete Signing Process

```
1. Agreement generated
   ↓
2. Agreement visible to signer
   ↓
3. OTP triggered
   ↓
4. OTP verified
   ↓
5. Agreement signed
   ↓
6. PDF locked + archived
```

### Step-by-Step Flow

**Step 1: Agreement Generated**
```
Agreement instance created
    ↓
Status: Draft
    ↓
Sent to signer
    ↓
Status: Sent
```

**Step 2: Agreement Visible to Signer**
```
Signer receives notification
    ↓
Opens agreement
    ↓
Views agreement content
    ↓
Status: Viewed
    ↓
Ready to sign
```

**Step 3: OTP Triggered**
```
Signer clicks "Sign Agreement"
    ↓
System checks preconditions
    ↓
Preconditions met
    ↓
OTP generation triggered
    ↓
OTP sent to email
```

**Step 4: OTP Verified**
```
Signer receives OTP email
    ↓
Enters OTP in system
    ↓
System validates OTP
    ↓
    ├─ Invalid → Show error
    │            Increment attempt count
    │            Check max attempts
    │
    └─ Valid → OTP verified
                ↓
                Proceed to signing
```

**Step 5: Agreement Signed**
```
OTP verified
    ↓
Signer confirms signing
    ↓
Signature applied to agreement
    ↓
Agreement signed
    ↓
Status: Signed
    ↓
Timestamp recorded
```

**Step 6: PDF Locked + Archived**
```
Agreement signed
    ↓
PDF generated with signature
    ↓
PDF locked (immutable)
    ↓
PDF archived
    ↓
Original template marked as used
    ↓
Agreement complete
```

---

## 📧 Signing & OTP Rules (Phase 1 — Instruction 9)

### Signing Requirements

**Mandatory Elements:**
- Acceptance checkbox
- Signature capture
- OTP mandatory for internal team
- OTP sender: **permit@<company-domain>**

**Future Enhancement:**
- E-sign allowed but not required now
- E-sign can be added later without breaking existing flow

### Internal Team OTP

**Rules:**
- OTP sent to **company-provided email only**
- Sender: permit@corementors.in (or permit@<company-domain>)
- Cannot use personal email
- OTP mandatory for signing

### Vendor/Client OTP

**Rules:**
- OTP sent to **primary email** (user-selected)
- Can use any email in their profile
- User selects primary email
- OTP may be optional (as per service configuration)

### OTP Tightening (Recommended Locked Defaults)

**Defaults:**
- **OTP expiry:** 5 minutes
- **Resend cooldown:** 60 seconds
- **Max attempts:** 5
- **Temporary lock after failures:** Configurable

### OTP Flow

```
OTP generated
    ↓
OTP sent to email
    ↓
User enters OTP
    ↓
System validates
    ↓
    ├─ Valid → Verified
    │
    ├─ Invalid → Error shown
    │            Attempt count incremented
    │            Check max attempts
    │            If max reached → Temporary lock
    │
    └─ Expired → Error shown
                 "OTP expired. Request new OTP."
                 Resend available after cooldown
```

---

## ✍️ Signature & Stamp Rules

### Company Side

**Super Admin uploads:**
- Company signatures
- Company stamps

**Access control:**
- Access can be granted to Admin / Manager / Sales / Groups
- Permission-based access
- Super Admin controls access

### User Side

**Users upload:**
- Personal signature in My Profile
- Required for signing agreements

**Client/Vendor signatures:**
- Private and encrypted
- Not visible to other users
- Super Admin has implicit access (not exposed)

---

## 🔒 Dashboard Locking Rule (Critical) - Updated per Instruction 9

### Internal Team (Strict Rule)

**Initial State:**
- Only My Profile visible
- Other modules locked

**After Profile Completion (100%):**
- Agreements unlock
- User can view and sign agreements
- Dashboard still locked until agreement signed

**After Agreement Signed:**
- Full dashboard unlock
- All modules accessible

**If Agreement Pending:**
- Dashboard remains locked
- Shows: "Complete Profile + Sign Agreement to unlock dashboard."

### Vendor (Exception - Liberal Rule) - Instruction 9

**Initial State:**
- Only My Profile visible
- Other modules locked

**After Mandatory Profile Completion:**
- Dashboard unlocks (even if agreement not signed)
- Vendor can browse and use dashboard features
- Agreement Center status does NOT block access

**If Agreement Pending:**
- Non-blocking banner shown:
  - "Agreement pending — please sign to complete compliance."
- Vendor can still use dashboard

**After Agreement Signed:**
- Full compliance achieved
- Banner removed

### Deadlock Prevention Rule

**If governance disables agreements for a role/panel:**
```
Agreements disabled for role
    ↓
User completes profile (100%)
    ↓
System checks: Agreements enabled?
    ↓
    ├─ NO → Dashboard unlocks directly
    │        (No agreement requirement)
    │
    └─ YES → Agreements unlock
              ↓
              User signs agreements
              ↓
              Dashboard unlocks
```

### Gating Logic Implementation

**Vendor Gating:**
```
Vendor profile completion check
    ↓
Meets mandatory requirements?
    ↓
    ├─ YES → Dashboard access granted
    │        (Agreement status ignored)
    │        Log: "Dashboard Unlocked (Vendor Exception Applied)"
    │
    └─ NO → Dashboard locked
            Show: "Complete mandatory profile requirements"
```

**Internal Team Gating:**
```
Internal team profile completion check
    ↓
Profile = 100%?
    ↓
    ├─ NO → Dashboard locked
    │
    └─ YES → Check Agreement Center
              ↓
              Required agreements signed?
              ↓
              ├─ NO → Dashboard locked
              │        Log: "Dashboard Locked (Agreement Pending)"
              │        Show: "Complete Profile + Sign Agreement"
              │
              └─ YES → Dashboard unlocked
                        All modules accessible
```

---

## 📊 Agreement Tracking

### Statuses

**Available Statuses:**
- **Draft** - Created but not sent
- **Sent** - Sent to signer
- **Viewed** - Signer has viewed
- **Signed** - Agreement signed
- **Expired** - Agreement expired (if time-bound)
- **Replaced** - Replaced by new agreement

### Status Flow

```
Draft → Sent → Viewed → Signed
  ↓
Expired (if time-bound)
  ↓
Replaced (if superseded)
```

### Visibility

**User:**
- Sees own agreements
- Can view status and history
- Cannot see other users' agreements

**Reporting Authority:**
- Sees subordinate agreements
- Can view status and history
- Limited to their reporting tree

**Super Admin:**
- Sees all agreements
- Full visibility and control
- Complete system-wide view

---

## 🔒 Security, Audit & Legal Integrity

### Audit Trail (Mandatory)

**Every agreement action logs:**
- Created by (user + role)
- Edited by (only Super Admin)
- Sent by (user + role)
- Viewed by (user + timestamp)
- OTP verified by (user + timestamp)
- Signed by (user + timestamp)
- Timestamp for each event

### Data Protection

**Encryption:**
- Signatures encrypted
- Stamps encrypted
- OTP logs encrypted

**Access Control:**
- No peer access to sensitive assets
- Super Admin access is implicit but never exposed to normal users

### Ethical Lock

**No editing after signing:**
- Agreement cannot be edited after signing
- PDF is locked and immutable
- Revisions require a new agreement instance

**Revision Flow:**
```
Signed agreement exists
    ↓
Need for revision
    ↓
Create new agreement instance
    ↓
New agreement generated
    ↓
Old agreement status: Replaced
    ↓
New agreement signed
    ↓
Both agreements maintained in system
```

---

## 🎨 UI/UX Pattern Compliance

All Agreement System modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Agreement Templates: Expandable/collapsible
- Agreement Instances: Expandable/collapsible
- Signing Flow: Expandable/collapsible
- Audit Trail: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Agreement Journey

### Complete Example: Employment Agreement

```
1. Super Admin creates Employment Agreement template
   ↓
2. Template includes dynamic fields from My Profile
   ↓
3. Admin generates agreement for new employee
   ↓
4. System auto-fills employee data
   ↓
5. Agreement sent to employee
   ↓
6. Employee views agreement
   ↓
7. Employee completes profile (100%)
   ↓
8. Employee clicks "Sign Agreement"
   ↓
9. OTP sent to company email
   ↓
10. Employee enters OTP
    ↓
11. OTP verified
    ↓
12. Employee confirms signing
    ↓
13. Signature applied
    ↓
14. Agreement signed
    ↓
15. PDF locked and archived
    ↓
16. Dashboard unlocks for employee
    ↓
17. All actions logged in audit trail
```

---

## 📚 Related Documentation

- **Instruction 7 Addendum:** Agreement Planner & Agreement System
- **My Profile Governance:** See `FLOWS_AND_DIAGRAMS/my_profile_governance_flows.md`
- **My Profile:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md`
- **My Activity:** See `FLOWS_AND_DIAGRAMS/my_activity_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Agreement System flow documentation per Instruction 7 Addendum. Includes template creation, instance generation, signing flow, OTP rules, dashboard locking, and security/audit requirements.

