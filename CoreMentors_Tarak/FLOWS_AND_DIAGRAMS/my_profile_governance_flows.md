# My Profile Governance & Master Input Planner – Complete Flows

**Instruction Reference:** Instruction 7 Addendum, Instruction 9  
**Created:** [Current Session]  
**Last Updated:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for My Profile Governance & Master Input Planner module, which controls what data is collected, what is mandatory, what is optional, and what is visible across the system.

**Note:** Module name is locked as **Profile Policy Builder** per Instruction 9.

---

## 👤 Scope (Who Has Access)

**Access:** Super Admin only

**Applies to:**
- Admin, Manager, Sales, Accounts, Development, GFX, Vendor
- Client (relaxed rules allowed)

---

## 📋 Purpose (Locked)

This module governs:

* Field-level and group-level governance for My Profile
* Mandatory vs optional vs hidden data
* 100% profile completion rules
* Downstream gates (payments, agreements, dashboard unlock)

---

## 🏗️ Data Structure (Hierarchical)

### Profile Data Groups

**As previously locked:**

1. **Personal Identity**
   - First Name, Last Name, Date of Birth, etc.
   - Profile Photo

2. **Contact Details**
   - Personal phones, Company phone
   - Personal emails, Company email

3. **Address**
   - Present Address
   - Permanent Address

4. **Guardian Details**
   - Up to 2 guardians
   - Photo, Name, Relation, Address, Phones, Emails

5. **Nominee Details**
   - Photo, Name, Relation, Address, Phones, Emails

6. **Emergency Contact**
   - Photo, Name, Relation, Phones, Emails, City, Address

7. **Bank & Payout Details**
   - Personal bank accounts
   - Salary bank account
   - UPI IDs

8. **Health & Fitness (Optional)**
   - Height, Weight, Allergies, Medical conditions

9. **KYC Documents**
   - Aadhaar, PAN, Passport, Voter ID, Driving License, Resume

10. **Signature Upload**
    - Personal signature

---

## ⚙️ Governance Controls (Per Field / Per Group)

### Control Structure

**For each field/group, Super Admin can toggle:**

```
┌─────────────────────────────────────────┐
│  Field/Group: Personal Identity         │
│                                         │
│  Visibility: [ON] / OFF                 │
│  Requirement: [Mandatory] / Optional    │
│  (Only if Visible = ON)                 │
└─────────────────────────────────────────┘
```

### Rules

**If Visible = OFF:**
- Field/group does not exist for users
- Not shown in My Profile
- Not counted in completion %

**If Visible = ON:**
- Field/group exists for users
- **Mandatory = ON:**
  - Blocks profile completion until filled
  - Required for 100% completion
- **Mandatory = OFF:**
  - Optional field
  - Does not block completion

### Mandatory Group Rule Tightening

**Group-level mandatory:**
- Affects all child fields by default
- If group is mandatory, all fields in group are mandatory

**Field-level override:**
- Allowed only when Super Admin explicitly overrides that child field to Optional
- Super Admin can set individual fields to Optional even if group is mandatory

### Example

```
Personal Identity Group
  Visibility: ON
  Requirement: Mandatory
    ↓
  All child fields mandatory by default:
    - First Name: Mandatory
    - Last Name: Mandatory
    - Date of Birth: Mandatory
    - Profile Photo: Mandatory
    ↓
  Super Admin can override:
    - Profile Photo: Optional (override)
    - Other fields remain: Mandatory
```

---

## 🎨 Control UI (Locked Behavior)

### Toggle Switches

**iOS-style preferred:**
```
┌─────────────────────────────────────────┐
│  Personal Identity                      │
│                                         │
│  Visibility:  [●────] ON                │
│  Requirement: [●────] Mandatory         │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  First Name                       │ │
│  │  Visibility: ON (inherited)       │ │
│  │  Requirement: [●────] Mandatory   │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  Profile Photo                    │ │
│  │  Visibility: ON (inherited)       │ │
│  │  Requirement: [────●] Optional    │ │
│  │  (Override from group)            │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Group-Level Toggles

**Group-level toggles affect child fields:**
- When group visibility is OFF → all child fields hidden
- When group requirement is Mandatory → all child fields mandatory (unless overridden)

### Field-Level Overrides

**Field-level overrides supported inside groups:**
- Super Admin can set individual fields to Optional
- Override clearly marked in UI
- Override can be removed to revert to group setting

---

## 🌐 Global Actions

### Bulk Operations

**Set all fields Mandatory:**
```
Super Admin clicks "Set All Mandatory"
    ↓
Confirmation dialog
    ↓
All visible fields set to Mandatory
    ↓
Profile completion % recalculated
```

**Set all fields Optional:**
```
Super Admin clicks "Set All Optional"
    ↓
Confirmation dialog
    ↓
All visible fields set to Optional
    ↓
Profile completion % recalculated
```

**Set entire group Visible / Hidden:**
```
Super Admin toggles group visibility
    ↓
All child fields visibility updated
    ↓
Profile completion % recalculated
```

---

## 🔄 Effect on System

### Dynamic Recalculation

**When governance changes:**
```
Super Admin changes field visibility/requirement
    ↓
System recalculates:
  ├─ Profile completion % for all users
  ├─ Mandatory field list
  └─ Completion gates
    ↓
Changes apply instantly system-wide
    ↓
All users see updated My Profile structure
    ↓
Completion % updates in real-time
```

### Downstream Gates

**Profile Completion % affects:**

1. **Payments:**
   - 100% completion required for payout eligibility
   - Gate enforced based on governance rules

2. **Agreements:**
   - 100% completion required before agreements unlock
   - Gate enforced based on governance rules

3. **Dashboard Access:**
   - After profile completion → Agreements unlock
   - After agreement signed → Full dashboard unlock
   - Deadlock prevention: If agreements disabled → dashboard unlocks after profile completion

### Instant Application

**Changes apply instantly:**
- No delay or batch processing
- Real-time updates across all panels
- All users see changes immediately
- Completion % recalculated for all affected users

---

## 📊 Typical Super Admin Journey

### Configuring Profile Governance

```
1. Super Admin opens My Profile Governance
   ↓
2. Views all profile groups
   ↓
3. Expands "Personal Identity" group
   ↓
4. Sets group Visibility: ON
   ↓
5. Sets group Requirement: Mandatory
   ↓
6. All child fields become mandatory
   ↓
7. Overrides "Profile Photo" to Optional
   ↓
8. Expands "Health & Fitness" group
   ↓
9. Sets group Visibility: ON
   ↓
10. Sets group Requirement: Optional
    ↓
11. All child fields become optional
    ↓
12. Saves changes
    ↓
13. System recalculates completion % for all users
    ↓
14. Changes apply instantly system-wide
    ↓
15. All users see updated My Profile structure
```

---

## 🎨 UI/UX Pattern Compliance

All My Profile Governance modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Profile Groups: Expandable/collapsible
- Field Controls: Expandable/collapsible
- Override Settings: Expandable/collapsible
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📚 Related Documentation

- **Instruction 7 Addendum:** My Profile Governance & Master Input Planner
- **My Profile:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md`
- **Agreement System:** See `FLOWS_AND_DIAGRAMS/agreement_system_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete My Profile Governance flow documentation per Instruction 7 Addendum. Includes governance controls, field/group management, dynamic recalculation, and downstream gates.

