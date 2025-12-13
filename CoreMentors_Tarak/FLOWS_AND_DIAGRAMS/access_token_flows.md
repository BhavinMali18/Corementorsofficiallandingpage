# Access Token Management System (ATMS) - Complete Flow Diagrams

**Instruction Reference:** Instruction 3 (Final & Locked)  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## Table of Contents

1. [Token Generation Flow](#token-generation-flow)
2. [Token Lifecycle](#token-lifecycle)
3. [Token Assignment Hierarchy](#token-assignment-hierarchy)
4. [Token Surrender Flow](#token-surrender-flow)
5. [Onboarding Validation Flow](#onboarding-validation-flow)
6. [ID Assignment Flow](#id-assignment-flow)
7. [Role Binding & Validation](#role-binding--validation)

---

## Token Generation Flow

```
┌─────────────────────────────────────────────────────────────┐
│              SUPER ADMIN PANEL                               │
│         (No Access Token Required)                           │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            │ Opens ATMS Module
                            ↓
        ┌───────────────────────────────────────┐
        │   ATMS Interface                       │
        │   - Token Pool View                    │
        │   - Generation Controls                │
        └───────────────┬───────────────────────┘
                        │
                        │ Selects Target Panel
                        │ (Admin/Manager/Sales/Accounts/Dev/GFX/Vendor)
                        ↓
        ┌───────────────────────────────────────┐
        │   Panel Selection Made                 │
        │   Role Binding: LOCKED                 │
        └───────────────┬───────────────────────┘
                        │
                        │ Enters Quantity
                        │ (Any number allowed)
                        ↓
        ┌───────────────────────────────────────┐
        │   Clicks "Generate"                    │
        └───────────────┬───────────────────────┘
                        │
                        │ System Shows Confirmation Popup
                        ↓
        ┌───────────────────────────────────────┐
        │   User Confirms                        │
        └───────────────┬───────────────────────┘
                        │
                        │ System Generates Tokens
                        │ Format: 8 chars, uppercase
                        │ Chars: A-Z, 0-9, @#$%&*-_+!?
                        │ Status: UNUSED_ACTIVE
                        ↓
        ┌───────────────────────────────────────┐
        │   Tokens Appended to Global Pool       │
        │   (Never Overwritten)                  │
        └───────────────┬───────────────────────┘
                        │
                        │ Tokens Appear in Table
                        │ (Blurred by default)
                        ↓
┌─────────────────────────────────────────────────────────────┐
│              GLOBAL TOKEN POOL                               │
│         Owned by Super Admin Only                            │
│         Status: UNUSED_ACTIVE                                │
│         Role: [Selected Panel]                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Token Lifecycle

```
                    ┌─────────────┐
                    │   CREATED   │
                    │ UNUSED_ACTIVE│
                    └──────┬──────┘
                           │
                           │ Token Generated
                           │ Role Bound
                           │ Status: UNUSED_ACTIVE
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
        │                                     │
        ↓                                     ↓
┌───────────────┐                    ┌───────────────┐
│   ASSIGNED    │                    │  DEACTIVATED │
│ UNUSED_ACTIVE │                    │   INACTIVE   │
│               │                    │              │
│ (Can be       │                    │ (Cannot be   │
│  assigned/    │                    │  used)       │
│  surrendered) │                    │              │
└───────┬───────┘                    └─────────────┘
        │
        │ User Attempts Onboarding
        │ Token Validated
        │
        ├─ Validation Fails
        │  └─→ Remains UNUSED_ACTIVE
        │     (Logged in Security Failure Log)
        │
        └─ Validation Passes
           │
           │ Onboarding Completes
           │ ID Assigned
           │
           ↓
   ┌───────────────┐
   │     USED      │
   │               │
   │ (Immutable    │
   │  State)       │
   │ (Cannot be    │
   │  reused)      │
   └───────────────┘

Note: Returned tokens remain UNUSED_ACTIVE
      (Return is logged as event, not state change)
```

---

## Token Assignment Hierarchy

```
                    ┌─────────────────────┐
                    │   SUPER ADMIN       │
                    │   (Token Generator) │
                    │   Global Pool Owner │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                │ Assigns                     │
                │                             │
        ┌───────▼────────┐          ┌────────▼────────┐
        │     ADMIN      │          │     MANAGER     │
        │                │          │                 │
        │ Can Assign     │          │ Cannot Assign   │
        │ to Managers    │          │ (Receives Only) │
        │                │          │                 │
        └───────┬────────┘          └─────────────────┘
                │
                │ Assigns
                │
        ┌───────▼────────┐
        │     MANAGER    │
        │                │
        │ (Receives      │
        │  Tokens)       │
        └────────────────┘

Assignment Rules:
• Super Admin → Admin or Manager
• Admin → Manager only
• Manager → ❌ Cannot assign
```

---

## Token Surrender Flow

```
                    ┌─────────────────────┐
                    │     MANAGER         │
                    │   (Has Token)      │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                               │
                │ Surrenders Token              │
                │                               │
        ┌───────▼────────┐          ┌──────────▼──────────┐
        │     ADMIN      │          │   SUPER ADMIN       │
        │                │          │                      │
        │ Receives Token │          │ Receives Token       │
        │                │          │                      │
        └───────┬────────┘          │                      │
                │                   │                      │
                │                   │ Admin Above Manager │
                │                   │ MUST BE NOTIFIED     │
                │                   │ (If Manager → SA)    │
                │                   │                      │
                │                   └──────────────────────┘
                │
                │ Admin Can Surrender
                │
        ┌───────▼────────┐
        │ SUPER ADMIN    │
        │                │
        │ (Receives      │
        │  Token)        │
        └────────────────┘

Surrender Rules:
• Manager → Admin (UPWARD)
• Manager → Super Admin (UPWARD)
• Admin → Super Admin (UPWARD)
• ❌ No sideways surrender
• ❌ No downward surrender

Notification Rule:
If Manager → Super Admin:
  → Admin above Manager MUST be notified
  → Includes: token, manager ID, timestamp
```

---

## Onboarding Validation Flow

```
                    ┌─────────────────────┐
                    │   USER ATTEMPTS     │
                    │   ONBOARDING         │
                    │   (Enters Token)     │
                    └──────────┬───────────┘
                               │
                               │ Silent Backend Validation
                               │ (Invisible to User)
                               ↓
        ┌──────────────────────────────────────┐
        │   VALIDATION CHECKS (ALL MUST PASS)  │
        ├──────────────────────────────────────┤
        │ 1. Token exists?                      │
        │ 2. Status = UNUSED_ACTIVE?           │
        │ 3. Role matches onboarding flow?      │
        │ 4. Token not previously used?         │
        │ 5. Token not inactive?                │
        │ 6. Token not locked (double-submit)? │
        └──────────┬───────────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
        │                     │
        ↓                     ↓
┌───────────────┐    ┌──────────────────────┐
│  VALIDATION   │    │   VALIDATION FAILS   │
│    PASSES     │    │                      │
│               │    │ Logged in Security   │
│ (ALL checks   │    │ Failure Log          │
│  passed)      │    │                      │
└───────┬───────┘    │ Error Message:       │
        │            │ "ACCESS DENIED.      │
        │            │  INVALID OR USED     │
        │            │  ACCESS TOKEN."      │
        │            └──────────────────────┘
        │
        │ Onboarding Continues
        │
        ↓
┌───────────────────────────────────────┐
│   ROLE-SPECIFIC WELCOME MESSAGE       │
│   "WELCOME TO THE [ROLE] TEAM"        │
└───────────────┬───────────────────────┘
                │
                │ User Completes Onboarding
                │
                ↓
        ┌───────────────────────┐
        │   Token → USED        │
        │   User ID Assigned    │
        │   Redirect to Dashboard│
        └───────────────────────┘
```

---

## ID Assignment Flow

```
                    ┌─────────────────────┐
                    │   TOKEN VALIDATED   │
                    │   ONBOARDING STARTS │
                    └──────────┬──────────┘
                               │
                               │ User Completes Registration
                               │
                               ↓
        ┌──────────────────────────────────────┐
        │   SYSTEM ASSIGNS PERMANENT ID        │
        │                                       │
        │   Based on:                           │
        │   - Role (from token binding)         │
        │   - Activation timestamp              │
        │   - Sequential number per role        │
        └──────────┬───────────────────────────┘
                   │
                   │ ID Format Applied
                   │
        ┌──────────┴──────────┐
        │                     │
        ↓                     ↓
┌───────────────┐    ┌──────────────────────┐
│   ROLE        │    │   ID PREFIX          │
│               │    │                      │
│ Super Admin   │    │ CM-SA-0001           │
│ Admin         │    │ CM-ADM-0001          │
│ Manager       │    │ CM-MGR-0001          │
│ Client        │    │ CM-CLI-0001          │
│ Sales Team    │    │ CM-SLS-0001          │
│ Accounts Team │    │ CM-ACC-0001          │
│ Dev Team      │    │ CM-DEV-0001          │
│ Graphics Team │    │ CM-GFX-0001          │
│ Vendor        │    │ CM-VND-0001          │
└───────────────┘    └──────────────────────┘
        │
        │ ID Assigned
        │ Status: IMMUTABLE FOREVER
        │
        ↓
┌───────────────────────────────────────┐
│   USER CREATED                        │
│   Token Status: USED                  │
│   User ID: [Assigned ID]              │
│   Redirect to Role Dashboard           │
└───────────────────────────────────────┘
```

---

## Role Binding & Validation

```
                    ┌─────────────────────┐
                    │   TOKEN GENERATED   │
                    │   Role: GFX         │
                    │   Example: A1B2C3!@ │
                    └──────────┬──────────┘
                               │
                               │ Role Binding: LOCKED
                               │ Cannot be changed
                               │
        ┌──────────────────────┴──────────────────────┐
        │                                              │
        │ Token Role: GFX                              │
        │                                              │
        │ Attempted Usage Scenarios:                  │
        │                                              │
        ├──────────────────────────────────────────────┤
        │                                              │
        │ 1. User tries GFX onboarding with GFX token │
        │    → ✅ Role matches                          │
        │    → ✅ Validation passes                    │
        │    → ✅ Onboarding proceeds                  │
        │                                              │
        │ 2. User tries Sales onboarding with GFX token│
        │    → ❌ Role mismatch                        │
        │    → ❌ Validation fails                     │
        │    → ❌ ACCESS DENIED                        │
        │    → Logged in Security Failure Log         │
        │                                              │
        │ 3. User tries Accounts with GFX token       │
        │    → ❌ Role mismatch                        │
        │    → ❌ ACCESS DENIED                        │
        │                                              │
        │ 4. User tries Client with GFX token         │
        │    → ❌ Role mismatch                        │
        │    → ❌ ACCESS DENIED                        │
        │                                              │
        └──────────────────────────────────────────────┘

Role Binding Rules:
• Token role = Role at generation (immutable)
• Token can ONLY onboard matching role
• Any role mismatch = ACCESS DENIED
• No exceptions allowed
```

---

## Token States Summary

```
┌─────────────────┐
│ UNUSED_ACTIVE   │ ← Default state after generation
│                 │   Can be assigned/surrendered
│                 │   Can be used for onboarding
└────────┬────────┘
         │
         ├─→ Used Successfully → USED (immutable)
         │
         ├─→ Deactivated → INACTIVE (cannot be used)
         │
         └─→ Returned → Remains UNUSED_ACTIVE
                        (Return logged as event)
```

---

## Key Rules Summary

1. **Token Generation:** Super Admin only, panel-wise, appended to global pool
2. **Role Binding:** Immutable, one role per token, strict validation
3. **Validation:** Silent backend checks, all must pass
4. **States:** UNUSED_ACTIVE, USED, INACTIVE (return is event, not state)
5. **Assignment:** SA → Admin/Manager, Admin → Manager only
6. **Surrender:** Upward only, notification required for Manager → SA
7. **ID Assignment:** On token use, role-based prefix, sequential, immutable
8. **Security:** All failures logged, forensic traceability required

---

**Status:** Complete flow documentation based on Instruction 3 (Final & Locked)


