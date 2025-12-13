# Company Profile – Complete Flows

**Instruction Reference:** Instruction 5  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## 🎯 Purpose

This document describes the complete flow for Company Profile module, the company master data system managed by Super Admin and reused across the CRM.

---

## 👤 Scope (Who Has Access)

**Access:** Super Admin only

**Purpose:** Company master data reused across CRM

**Governance:**
- Super Admin has full CRUD (Create, Read, Update, Delete)
- Data reused across CRM modules
- Single source of truth for company information

---

## 🏢 Company Profile Structure

### Module Overview

```
┌─────────────────────────────────────────┐
│      COMPANY PROFILE                    │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  1. Company Identity    [▼]     │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  2. Company Locations    [▶]     │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  3. Company Links        [▶]      │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  4. Company Documents    [▶]      │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

All sections follow Global UI/UX expand/collapse pattern.

---

## 1. Company Identity

### Purpose

Store basic company identification information.

### Fields

**Company Name:**
- Primary company name
- Used across CRM
- Required field

### Company Identity Flow

```
Super Admin opens Company Profile
    ↓
Expands "Company Identity" section
    ↓
Company Identity Form:
  ┌─────────────────────────────────┐
  │  Company Name:                  │
  │  [CoreMentors Pvt. Ltd.]        │
  │                                 │
  │  [Save Changes]                │
  └─────────────────────────────────┘
    ↓
Company name saved
    ↓
Used across CRM modules
```

---

## 2. Company Locations / Units

### Purpose

Define company locations/units used across the CRM (e.g., in My Profile → Work Location dropdown).

### Rules

- Multiple units supported
- Minimum 1 unit required
- Default naming: Unit 1, Unit 2, Unit 3…
- Super Admin can rename units

### Standard Address Structure

**Reusable everywhere in CRM:**

```
Address Line 1: [Required]
Address Line 2: [Optional]
Nearby Landmark: [Optional]
Village: [Optional]
City: [Required]
State: [Required]
PIN Code: [Required]
```

**PIN Behavior:**
- Auto-fill city/state from PIN (India-focused)
- Validates PIN format
- Suggests city/state based on PIN database

### Company Locations Flow

```
Super Admin opens Company Profile
    ↓
Expands "Company Locations" section
    ↓
Locations List:
  ┌─────────────────────────────────┐
  │  Unit 1: Main Office    [Edit] │
  │  Unit 2: Branch Office [Edit] │
  │  [+ Add New Unit]               │
  └─────────────────────────────────┘
    ↓
Clicks "Add New Unit" or "Edit"
    ↓
Unit Form:
  ┌─────────────────────────────────┐
  │  Unit Name: [Unit 3]            │
  │                                 │
  │  Address Line 1: [___________] │
  │  Address Line 2: [___________] │
  │  Nearby Landmark: [___________]│
  │  Village: [___________]         │
  │  City: [___________]             │
  │  State: [___________]            │
  │  PIN Code: [___________]         │
  │    (Auto-fills city/state)      │
  │                                 │
  │  [Save] [Cancel]                │
  └─────────────────────────────────┘
    ↓
Unit saved
    ↓
Available in dropdowns across CRM
```

### Usage Across CRM

**Used in:**
- My Profile → Company Identity → Work Location (dropdown)
- Time Planner → Shift Sets (selectable per Unit)
- Work Time → Unit assignment
- Reports → Filter by Unit

---

## 3. Company Links / Profiles

### Purpose

Store company's online presence links (Google, LinkedIn, YouTube, etc.).

### Supported Links

**Default options:**
- Google profile
- LinkedIn
- YouTube
- Others (custom)

### Company Links Flow

```
Super Admin opens Company Profile
    ↓
Expands "Company Links" section
    ↓
Links List:
  ┌─────────────────────────────────┐
  │  Google: [https://...] [Edit]   │
  │  LinkedIn: [https://...] [Edit]│
  │  [+ Add Link]                    │
  └─────────────────────────────────┘
    ↓
Clicks "Add Link" or "Edit"
    ↓
Link Form:
  ┌─────────────────────────────────┐
  │  Label: [YouTube ▼]            │
  │    • Google profile            │
  │    • LinkedIn                  │
  │    • YouTube                   │
  │    • Other (custom)            │
  │                                 │
  │  URL: [https://...]            │
  │                                 │
  │  [Save] [Cancel]                │
  └─────────────────────────────────┘
    ↓
Link saved
    ↓
Available across CRM
```

### Link Management

**Operations:**
- Add more via plus button
- Rename label (if "Other" selected)
- Edit URL
- Delete link
- Reorder links (optional)

---

## 4. Company Documents Repository

### Purpose

Store company-level statutory and compliance documents.

### Default Document Slots

**Predefined slots:**
- **COI** (Certificate of Incorporation)
- **MOA** (Memorandum of Association)
- **AOA** (Articles of Association)
- **Company PAN** (Permanent Account Number)
- **MSME** (Micro, Small & Medium Enterprises certificate)
- **GST certificate**
- **Other statutory certificates**

### Custom Documents

- Add slot via plus button
- Rename slot
- Upload files

### Document Formats

**Accepted formats:**
- PDF
- JPG
- PNG

### Company Documents Flow

```
Super Admin opens Company Profile
    ↓
Expands "Company Documents" section
    ↓
Documents List:
  ┌─────────────────────────────────┐
  │  COI: [Uploaded] [View] [Edit] │
  │  MOA: [Not uploaded] [Upload]  │
  │  AOA: [Uploaded] [View] [Edit] │
  │  [+ Add Document Slot]          │
  └─────────────────────────────────┘
    ↓
Clicks "Upload" or "Add Document Slot"
    ↓
Upload Form:
  ┌─────────────────────────────────┐
  │  Document Name: [COI]           │
  │  (or custom name if new slot)    │
  │                                 │
  │  File: [Choose File]            │
  │  Formats: PDF, JPG, PNG         │
  │                                 │
  │  [Upload] [Cancel]              │
  └─────────────────────────────────┘
    ↓
File uploaded
    ↓
Document available for:
  - View
  - Replace
  - Remove
  - Preview
```

### Document Operations

**Upload:**
- Select file (PDF, JPG, PNG)
- Upload to document slot
- File stored securely

**Replace:**
- Upload new file to replace existing
- Old file archived (optional)
- New file becomes active

**Remove:**
- Delete file from slot
- Slot remains (can upload again)
- Confirmation required

**Preview:**
- View document in browser
- Download option
- Full-screen view

---

## 🔄 Integration with Other Modules

### Usage Across CRM

**My Profile:**
- Work Location dropdown populated from Company Locations
- Company Identity section references Company Profile

**Time Planner:**
- Shift Sets selectable per Unit (from Company Locations)
- Units used for policy application

**Work Time:**
- Users assigned to Units
- Unit-based reporting

**Reports:**
- Filter by Unit
- Unit-wise attendance/work time
- Company-wide aggregations

---

## 🎨 UI/UX Pattern Compliance

All Company Profile modules and sub-modules follow **Global UI/UX expand/collapse pattern** (Instruction 4):

- Company Identity: Expandable/collapsible
- Company Locations: Expandable/collapsible (each unit is a nested block)
- Company Links: Expandable/collapsible (each link is a nested block)
- Company Documents: Expandable/collapsible (each document slot is a nested block)
- All rounded-edge blocks/cards
- Consistent expand/collapse controls

**See:** `UI_UX_GLOBAL_RULES.md` for complete specifications.

---

## 📊 Typical Super Admin Journey

### Setting Up Company Profile

```
1. Super Admin opens Company Profile
   ↓
2. Expands "Company Identity"
   ↓
3. Enters Company Name: "CoreMentors Pvt. Ltd."
   ↓
4. Expands "Company Locations"
   ↓
5. Adds Unit 1: Main Office
   - Address Line 1: "123 Business Street"
   - City: "Mumbai"
   - State: "Maharashtra"
   - PIN: "400001" (auto-fills city/state)
   ↓
6. Adds Unit 2: Branch Office
   - Similar address entry
   ↓
7. Expands "Company Links"
   ↓
8. Adds Google profile link
   ↓
9. Adds LinkedIn link
   ↓
10. Expands "Company Documents"
    ↓
11. Uploads COI (PDF)
    ↓
12. Uploads MOA (PDF)
    ↓
13. Uploads Company PAN (PDF)
    ↓
14. Adds custom document slot: "Insurance Certificate"
    ↓
15. Uploads Insurance Certificate
    ↓
16. Company Profile complete
    ↓
17. Data available across CRM
```

---

## 📚 Related Documentation

- **Instruction 5:** Work Time, Company Profile, Time Planner, Company Document Wallet
- **Time Planner:** See `FLOWS_AND_DIAGRAMS/time_planner_flows.md`
- **My Profile:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md`
- **UI/UX Global Rules:** See `UI_UX_GLOBAL_RULES.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

**Status:** Complete Company Profile flow documentation per Instruction 5. Includes company identity, locations/units, links, and documents repository.

