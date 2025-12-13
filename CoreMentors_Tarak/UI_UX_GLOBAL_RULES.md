# CoreMentors CRM – Global UI/UX Rules

**Instruction Reference:** Instruction 4  
**Created:** [Current Session]  
**Status:** Authoritative - Mandatory for All Modules

---

## 🎯 Purpose

This document defines the **mandatory global UI/UX interaction pattern** that must be applied consistently across **all modules and sub-modules** in the CoreMentors CRM system.

These rules ensure:
- Uniform user experience across all panels
- Consistent interaction patterns
- Clear visual hierarchy
- Stable, predictable UI behavior

---

## 📋 Core Rule: Expand / Suppress (Mandatory Everywhere)

### Requirement

**Every module and sub-module in every panel must support:**

* **Expand** (open details)
* **Suppress/Collapse** (hide details)

This is **not optional**. This pattern must be implemented uniformly across the entire CRM.

---

## 🎨 Visual Block Style

### Rounded + Connected Blocks

**Every module/sub-module must appear as:**
- **Rounded-edge block/card**
- Nested blocks must look **visually connected** to the parent (clear hierarchy)

### Collapsed State

When collapsed, the block must show:
- Section title
- Completion/summary indicators (if applicable)
- Expand icon/button

**Visual Example:**
```
┌─────────────────────────────────────────┐
│  📋 Identity Section          [▶]      │
│  Completion: 5/7 fields                  │
└─────────────────────────────────────────┘
```

### Expanded State

When expanded, the block must show:
- All fields / tables / actions for that section
- Collapse icon/button (same position as expand)

**Visual Example:**
```
┌─────────────────────────────────────────┐
│  📋 Identity Section          [▼]      │
│  ─────────────────────────────────────  │
│  First Name: [___________]               │
│  Last Name:  [___________]               │
│  Date of Birth: [__/__/____]            │
│  ...                                     │
└─────────────────────────────────────────┘
```

---

## 🔄 Interaction Standard (Consistency Rule)

### Control Placement

* Expand/collapse controls must be placed **consistently** (same position on each block)
* Recommended: Top-right corner of each block header
* Icon: ▶ (collapsed) / ▼ (expanded) or chevron/arrow icons

### Stability Requirement

* Expand/collapse should **not cause confusing jumps**
* The UI must feel **stable**
* Only content area changes; the header/label remains visible
* Smooth transitions preferred (not instant flash)

### Header Persistence

* Section title always visible (both collapsed and expanded)
* Summary/completion indicators remain visible when collapsed
* Header area does not move or shift

---

## 🏗️ Hierarchy & Nesting

### Nested Blocks

When modules have sub-modules:

```
┌─────────────────────────────────────────┐
│  📋 Contact Section          [▼]        │
│  ─────────────────────────────────────  │
│  ┌───────────────────────────────────┐ │
│  │  Personal Phones        [▼]       │ │
│  │  ──────────────────────────────── │ │
│  │  Phone 1: [+91] [___________]     │ │
│  │  Phone 2: [+91] [___________]      │ │
│  └───────────────────────────────────┘ │
│  ┌───────────────────────────────────┐ │
│  │  Company Phone        [▶]         │ │
│  └───────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**Rules:**
- Nested blocks must be visually connected (indentation, border connection, or visual link)
- Each nested block follows the same expand/collapse pattern
- Parent block can be expanded while child blocks are collapsed (and vice versa)

---

## 🎨 Visual Design Guidelines

### Block Styling

**Rounded Corners:**
- All blocks must have rounded corners (consistent radius)
- Recommended: 8-12px border radius

**Spacing:**
- Consistent padding inside blocks
- Consistent margin between blocks
- Clear visual separation between sections

**Borders:**
- Subtle borders to define block boundaries
- Connected blocks may share borders or use visual connectors

**Colors:**
- Use brand colors consistently
- Collapsed state: Neutral/subtle background
- Expanded state: Slightly highlighted or same background
- Hover states: Subtle highlight

### Typography

- Section titles: Bold, clear hierarchy
- Field labels: Consistent size and weight
- Summary text: Smaller, muted color

---

## 📱 Responsive Behavior

### Mobile/Tablet Considerations

- Expand/collapse must work on all screen sizes
- Touch-friendly controls (adequate tap target size)
- Collapsed state is especially important on mobile (saves space)
- Consider accordion-style behavior on small screens

---

## ✅ Implementation Checklist

When implementing any module/sub-module, ensure:

- [ ] Expand/collapse functionality implemented
- [ ] Rounded-edge block/card styling applied
- [ ] Controls placed consistently (top-right recommended)
- [ ] Header/title remains visible when collapsed
- [ ] Smooth transitions (no jarring jumps)
- [ ] Nested blocks visually connected to parent
- [ ] Completion/summary indicators shown when collapsed (if applicable)
- [ ] All fields/actions shown when expanded
- [ ] Consistent styling with other modules
- [ ] Works on all screen sizes

---

## 🔗 Integration with My Profile

My Profile is the **reference implementation** for this pattern:

- All 12 sections are expandable/collapsible blocks
- Each section follows these rules
- Nested sub-sections (e.g., multiple phone numbers) also follow the pattern

**See:** `FLOWS_AND_DIAGRAMS/profile_completion_flows.md` for My Profile-specific flows.

---

## 📚 Related Documentation

- **Instruction 4:** Global UI/UX + Module Specs (My Profile + Document Wallet)
- **My Profile:** See `FLOWS_AND_DIAGRAMS/profile_completion_flows.md`
- **Document Wallet:** See `FLOWS_AND_DIAGRAMS/document_wallet_flows.md`
- **System Overview:** See `SYSTEM_OVERVIEW.md`

---

## 🚨 Critical Reminders

1. **This pattern is MANDATORY** - not optional
2. **Consistency is key** - same behavior everywhere
3. **Stability matters** - no confusing UI jumps
4. **Visual hierarchy** - nested blocks must be clearly connected
5. **User experience** - smooth, predictable interactions

---

**Status:** Complete global UI/UX rules documentation per Instruction 4. All developers must follow these rules when implementing any module or sub-module in the CRM.

