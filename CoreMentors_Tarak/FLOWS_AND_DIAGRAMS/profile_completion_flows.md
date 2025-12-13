# My Profile – Profile Completion Flows

**Instruction Reference:** Instruction 4, Instruction 9  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for My Profile completion, including lifecycle states, section details, and payout eligibility gating.

---

## 👥 Scope (Who Has My Profile)

My Profile is available for:

* Super Admin
* Admin
* Manager
* Sales Team
* Accounts Team
* Development Team
* Graphics Team
* Vendor

**Note:** Client profile is separate and not part of My Profile.

---

## 🔄 Profile Lifecycle States

### State Flow Diagram

```
┌─────────┐
│  DRAFT  │  ← User can edit freely
└────┬────┘
     │
     │ User submits
     │
┌────▼─────────┐
│  SUBMITTED   │  ← Optional review stage
└────┬─────────┘
     │
     │ Admin/System locks
     │
┌────▼─────┐
│  LOCKED  │  ← Final; edits require permission
└──────────┘
```

### State Details

#### 1. DRAFT State

**Behavior:**
- User can edit all fields
- No restrictions on changes
- Profile completion percentage updates in real-time
- Payout eligibility remains blocked until 100%

**UI Indicators:**
- "Profile Status: DRAFT"
- Edit buttons visible
- Save/Draft buttons available

#### 2. SUBMITTED State

**Behavior:**
- User has submitted for review
- Edits may be restricted (configurable)
- Admin/Manager can review
- Can be moved to LOCKED or back to DRAFT

**UI Indicators:**
- "Profile Status: SUBMITTED - Under Review"
- Limited or no edit access
- Review status visible

#### 3. LOCKED State

**Behavior:**
- Profile is finalized
- User **cannot edit** without permission
- Edits require Admin approval (future: "Profile Update Request" module)
- 100% completion required to reach this state

**UI Indicators:**
- "Profile Status: LOCKED"
- Edit buttons disabled or hidden
- "Request Update" button (future feature)

---

## 📊 Profile Completion Flow

### Entry Point

```
User completes token onboarding
    ↓
User enters dashboard
    ↓
My Profile module visible
    ↓
Profile starts at 0% completion
    ↓
User begins filling sections
```

### Completion Tracking

```
┌─────────────────────────────────────┐
│  Profile Completion: XX%            │
│  ████████░░░░░░░░░░░░ 40%          │
│                                     │
│  Sections:                          │
│  ✅ Identity (7/7)                  │
│  ✅ Contact (5/5)                   │
│  ⚠️  Addresses (3/4)                │
│  ❌ Company Identity (0/6)          │
│  ❌ Guardian Details (0/2)           │
│  ...                                │
└─────────────────────────────────────┘
```

### 100% Completion Requirement

**Rule:** 100% Profile Completion is **mandatory** for payment/work payout eligibility.

**Flow:**
```
Profile < 100%
    ↓
Payout actions BLOCKED
    ↓
UI shows: "Complete your profile to enable payouts"
    ↓
User completes remaining sections
    ↓
Profile = 100%
    ↓
Payout eligibility UNLOCKED
```

---

## 📋 Section Architecture

### All Sections (Expandable/Collapsible Blocks)

My Profile consists of 12 sections, each following the Global UI/UX expand/collapse pattern:

```
┌─────────────────────────────────────────┐
│  MY PROFILE                             │
│  Profile Completion: 45%                │
│  ████████████░░░░░░░░░░░░░░░░░░░░       │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  1. Identity            [▼]       │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  2. Contact              [▶]       │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  3. Addresses            [▶]       │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  4. Company Identity     [▶]      │ │
│  └───────────────────────────────────┘ │
│  ... (8 more sections)                 │
└─────────────────────────────────────────┘
```

### Section Details

#### 1. Identity (Mandatory Eventually)

**Fields:**
- First Name
- Last Name
- Date of Birth
- Place of Birth
- Time of Birth
- Blood Group
- Profile Photo (Mandatory)

**Photo Controls:**
- Upload
- Remove/Delete
- If removed → profile becomes incomplete

**Completion:** 7/7 fields required

---

#### 2. Contact

**Personal Phones (Multiple):**
- Default country code: +91
- Country code dropdown
- Mobile input
- Tag dropdown: Home / Work / Personal / Other
- If Other → custom label

**Company Phone (Single):**
- One number only
- Tag fixed: Company

**Personal Emails (Multiple):**
- Tagging allowed

**Company Email (Single):**
- Tag fixed: Company
- **Locked field** (cannot be edited by user - assigned by Admin/Super Admin per Instruction 9)
- Displayed with lock icon and "Assigned by Admin / Super Admin" label
- See: `FLOWS_AND_DIAGRAMS/company_email_governance_flows.md` for complete governance rules

---

#### 3. Addresses

**Fields:**
- Present Address (structured)
- Permanent Address (structured)
- Checkbox: "Permanent same as Present"
  - Auto-copy + keep synced while checked

---

#### 4. Company Identity (Partly Auto; Hierarchy Controlled)

**Fields:**
- Role (from token) → read-only
- Department → auto-set from role mapping (read-only unless upper hierarchy changes)
- Designation/Title → editable by Manager/Admin/Super Admin
- Date of Joining → set/verified by upper hierarchy
- Work Location/Branch → dropdown from Company Profile branches/locations
- Reporting Authority → dropdown based on active managers/admins

**Reporting Authority Rules:**
```
Sales/Accounts/Dev/Graphics/Vendor
    ↓
Can choose: Manager / Admin / Super Admin

Manager
    ↓
Can choose: Admin / Super Admin

Admin
    ↓
Can choose: Super Admin

Super Admin
    ↓
None (no reporting authority)
```

**Joining Date Rules:**
```
Admin
    ↓
Set by: Super Admin

Manager
    ↓
Set by: Admin or Super Admin

Team Member
    ↓
Set/verified by: Manager / Admin / Super Admin
```

---

#### 5. Guardian Details (Up to 2; With Images)

**Per Guardian:**
- Photo upload (optional)
- Name
- Relation
- Address
- Phones (multiple + tags)
- Emails (multiple + tags)

**Maximum:** 2 guardians

---

#### 6. Nominee Details (With Images)

**Per Nominee:**
- Photo upload (optional)
- Name
- Relation
- Address
- Phones (multiple + tags)
- Emails (multiple + tags)

---

#### 7. Emergency Contact (Linked Selection)

**Selection Options:**
- Select Guardian #1
- Select Guardian #2
- Select Nominee
- Add new emergency contact

**Fields (if new):**
- Photo (optional)
- Name
- Relation
- Phones (multiple)
- Emails (multiple)
- City
- Address (optional but recommended)

---

#### 8. Bank & Payout

**Accounts:**
- Personal bank accounts: multiple allowed
- Salary bank account: only one (if applicable)
- Vendors: no salary, but require payout account

**Primary Payout:**
- Exactly one primary payout account required when finalized

**Bank Fields:**
- Account Holder Name
- Account Number
- IFSC
- Bank Name (optional)
- Branch (optional)
- UPI IDs (optional; multiple)
- Account Type: PERSONAL / SALARY
- is_primary_payout

---

#### 9. KYC & Uploads

**Accepted File Types:**
- Images: JPG/PNG
- Docs: PDF

**KYC Documents:**
- Aadhaar (Front + Back)
- PAN (Front)
- Passport size photo
- Passport (First + Last pages; extra pages supported)
- Voter ID (Front + Back) optional
- Driving license (front/back supported)

**Resume:**
- Single file
- PDF/JPG/PNG allowed

**Upload Behavior:**
- Upload / Replace / Remove
- Preview
- Verified status optional future

---

#### 10. Document Wallet Shortcut

**Access:**
- Link to Document Wallet module
- Opens Document Wallet in same context
- See: `document_wallet_flows.md`

---

#### 11. Health & Safety (Optional)

**Consent Toggle:**
- "I want to share health information for workplace safety" (Yes/No)

**If Yes:**
- Height
- Weight
- Allergies
- Medical condition notes
- Emergency instructions

**Access:**
- Visible only to Super Admin/Admin/Manager (configurable later)

---

#### 12. Review & Submit

**Actions:**
- Review all sections
- Check completion status
- Submit for review (moves to SUBMITTED state)
- Save as draft (remains in DRAFT state)

---

## 🎨 UI/UX Rules Inside My Profile

### Top Header (Always Visible)

```
┌─────────────────────────────────────────┐
│  Profile Completion: 45%                │
│  ████████████░░░░░░░░░░░░░░░░░░░░       │
│  Sections: KYC 3/6, Addresses 3/4      │
└─────────────────────────────────────────┘
```

### Field State Colors

**Untouched:**
- Gray background/border
- Placeholder text visible

**Filled/Edited:**
- Active brand color
- Field marked as complete

**Touched but Invalid/Empty:**
- Red border
- Error hint below field
- "This field is required" or specific error

---

## 💰 Payout Eligibility Gate

### Blocking Flow

```
User attempts payout action
    ↓
System checks: Profile completion = 100%?
    ↓
    ├─ NO → BLOCK action
    │        ↓
    │        Show message:
    │        "Complete your profile to enable payouts"
    │        ↓
    │        Highlight incomplete sections
    │
    └─ YES → ALLOW action
             ↓
             Proceed with payout flow
```

### UI Indicators

**When Blocked:**
- Payout buttons disabled
- Warning message: "Profile incomplete. Complete all sections to enable payouts."
- Link to My Profile
- List of incomplete sections

**When Enabled:**
- Payout buttons active
- No warnings
- Profile completion badge: "✅ Profile Complete"

---

## 🔐 Post-Lock Behavior

### Edit Restriction

```
Profile Status: LOCKED
    ↓
User attempts to edit
    ↓
System checks: Is user Admin/Super Admin?
    ↓
    ├─ NO → BLOCK edit
    │        ↓
    │        Show: "Profile is locked. Request update permission."
    │        ↓
    │        Future: "Profile Update Request" module
    │
    └─ YES → ALLOW edit (with audit log)
```

**Future Module:** Profile Update Request
- User can request edits
- Admin reviews request
- Temporary unlock for approved changes

---

## 📊 Completion Calculation

### Section Weighting (Example)

Each section contributes to overall completion:

```
Identity:           7 fields  → ~8%
Contact:            5 fields  → ~6%
Addresses:          4 fields  → ~5%
Company Identity:   6 fields  → ~7%
Guardian Details:   2 entries → ~5%
Nominee Details:    1 entry   → ~3%
Emergency Contact:  1 entry   → ~3%
Bank & Payout:      1 account → ~8%
KYC & Uploads:      6 docs    → ~15%
Health & Safety:    0-5 fields → ~0-5% (optional)
Document Wallet:    N/A       → 0% (shortcut only)
Review & Submit:    N/A       → 0% (action only)

Total: ~100% when all mandatory fields complete
```

**Note:** Exact weighting to be determined during implementation.

---

## 🔄 Typical User Journey

```
1. User completes token onboarding
   ↓
2. Enters dashboard
   ↓
3. Sees My Profile module
   ↓
4. Profile shows 0% completion
   ↓
5. User expands "Identity" section
   ↓
6. Fills required fields
   ↓
7. Uploads profile photo
   ↓
8. Section shows "✅ Complete"
   ↓
9. Overall completion updates (e.g., 8%)
   ↓
10. User continues with other sections
    ↓
11. Reaches 100% completion
    ↓
12. Can submit for review
    ↓
13. Admin locks profile
    ↓
14. Payout eligibility enabled
```

---

## 📚 Related Documentation

- **Instruction 4:** Global UI/UX + Module Specs (My Profile + Document Wallet)
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **Document Wallet:** See `FLOWS_AND_DIAGRAMS/document_wallet_flows.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete My Profile flow documentation per Instruction 4. Includes lifecycle states, section details, completion tracking, and payout eligibility gating.

