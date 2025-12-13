# ATMS Security Failure & Audit Flow

**Instruction Reference:** Instruction 3, Section 13  
**Created:** [Current Session]  
**Status:** Authoritative documentation

---

## Overview

The Security Failure & Audit Module tracks all failed, suspicious, or invalid token usage attempts. This ensures **forensic traceability** of all security events.

---

## Security Failure Detection Flow

```
                    ┌─────────────────────┐
                    │   USER ATTEMPTS     │
                    │   TOKEN USAGE       │
                    │   (Onboarding)      │
                    └──────────┬──────────┘
                               │
                               │ Backend Validation
                               │
        ┌──────────────────────┴──────────────────────┐
        │                                              │
        │ Validation Checks:                           │
        │ 1. Token exists?                             │
        │ 2. Status = UNUSED_ACTIVE?                   │
        │ 3. Role matches?                             │
        │ 4. Not previously used?                      │
        │ 5. Not inactive?                             │
        │ 6. Not locked?                               │
        │                                              │
        └──────────┬───────────────────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
        │                     │
        ↓                     ↓
┌───────────────┐    ┌──────────────────────┐
│  VALIDATION   │    │   VALIDATION FAILS    │
│    PASSES     │    │                       │
│               │    │ → SECURITY FAILURE    │
│ Onboarding    │    │   DETECTED            │
│ Proceeds      │    └──────────┬───────────┘
└───────────────┘                │
                                 │
                                 │ Failure Reason Identified
                                 │
        ┌────────────────────────┴────────────────────────┐
        │                                                  │
        │ Failure Reasons:                                 │
        │ • Invalid token (doesn't exist)                 │
        │ • Token already used                            │
        │ • Role mismatch                                 │
        │ • Token inactive                                │
        │ • Token locked (double-submit)                  │
        │                                                  │
        └──────────────────┬─────────────────────────────┘
                           │
                           │ Security Event Logged
                           ↓
```

---

## Security Failure Logging Process

```
                    ┌─────────────────────┐
                    │   FAILURE DETECTED  │
                    └──────────┬──────────┘
                               │
                               │ System Collects Data
                               ↓
        ┌──────────────────────────────────────┐
        │   DATA COLLECTED FOR LOG ENTRY       │
        ├──────────────────────────────────────┤
        │ • Token value (hashed/masked)         │
        │ • Failure reason                      │
        │   - Invalid                           │
        │   - Used                              │
        │   - Role mismatch                      │
        │   - Inactive                          │
        │ • Timestamp                           │
        │ • IP address                          │
        │ • Device/browser info (if available)  │
        │ • MAC ID (if technically obtainable) │
        │ • Source                             │
        │   - Join the Team page               │
        │   - Direct access attempt            │
        └──────────┬───────────────────────────┘
                   │
                   │ Log Entry Created
                   │
                   ↓
        ┌───────────────────────┐
        │   SECURITY FAILURE     │
        │   LOG ENTRY            │
        │                       │
        │   Status: Read-only   │
        │   Deletion: Not Allowed│
        └──────────┬────────────┘
                   │
                   │ Stored in Audit Database
                   │
                   ↓
┌─────────────────────────────────────────────┐
│         ATMS SECURITY & FAILURE LOGS        │
│         (Super Admin Only Access)           │
└─────────────────────────────────────────────┘
```

---

## Super Admin Access to Security Logs

```
                    ┌─────────────────────┐
                    │   SUPER ADMIN       │
                    │   Logs into Panel   │
                    └──────────┬──────────┘
                               │
                               │ Navigates to Module
                               │
                               ↓
        ┌──────────────────────────────────────┐
        │   "ATMS Security & Failure Logs"      │
        │   Module                              │
        └──────────┬───────────────────────────┘
                   │
                   │ Access Granted
                   │ (Super Admin Only)
                   │
                   ↓
        ┌──────────────────────────────────────┐
        │   SECURITY LOG INTERFACE              │
        │                                       │
        │   Features:                           │
        │   • View all failure attempts         │
        │   • Filter by:                        │
        │     - Date range                      │
        │     - Role attempted                  │
        │     - Failure reason                  │
        │     - IP address                      │
        │   • Read-only access                  │
        │   • No deletion allowed               │
        └──────────┬───────────────────────────┘
                   │
                   │ Forensic Analysis
                   │
                   ↓
        ┌──────────────────────────────────────┐
        │   LOG ENTRIES DISPLAYED              │
        │                                       │
        │   Each Entry Shows:                   │
        │   • Timestamp                        │
        │   • Token (hashed/masked)            │
        │   • Failure reason                    │
        │   • Role attempted                   │
        │   • IP address                       │
        │   • Device info                      │
        │   • Source                           │
        └──────────────────────────────────────┘
```

---

## Failure Reason Categories

```
                    ┌─────────────────────┐
                    │   FAILURE REASONS   │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┴──────────────────────┐
        │                                              │
        │  1. INVALID                                 │
        │     Token does not exist in system          │
        │     (Never generated or deleted)           │
        │                                              │
        │  2. USED                                    │
        │     Token was already consumed              │
        │     (One-time use enforced)                 │
        │                                              │
        │  3. ROLE MISMATCH                           │
        │     Token role ≠ Onboarding flow role       │
        │     (Strict role binding violation)         │
        │                                              │
        │  4. INACTIVE                                │
        │     Token status = INACTIVE                 │
        │     (Deactivated by Super Admin/Admin)      │
        │                                              │
        │  5. LOCKED                                  │
        │     Token temporarily locked                │
        │     (Double-submit protection)              │
        │                                              │
        └──────────────────────────────────────────────┘
```

---

## Forensic Traceability Flow

```
                    ┌─────────────────────┐
                    │   SECURITY INCIDENT │
                    │   (Suspected)       │
                    └──────────┬───────────┘
                             │
                             │ Super Admin Investigates
                             │
                             ↓
        ┌──────────────────────────────────────┐
        │   ACCESS SECURITY FAILURE LOGS       │
        │   (Super Admin Only)                 │
        └──────────┬───────────────────────────┘
                   │
                   │ Apply Filters
                   │
        ┌──────────┴──────────┐
        │                     │
        ↓                     ↓
┌───────────────┐    ┌──────────────────────┐
│  FILTER BY    │    │   FILTER BY          │
│  DATE RANGE   │    │   FAILURE REASON     │
│               │    │                      │
│  Filter by:   │    │  Filter by:          │
│  - Start date │    │  - Invalid           │
│  - End date   │    │  - Used              │
│               │    │  - Role mismatch     │
└───────┬───────┘    │  - Inactive          │
        │            │  - Locked            │
        │            └──────────┬───────────┘
        │                      │
        │            ┌──────────┴──────────┐
        │            │                     │
        ↓            ↓                     ↓
┌───────────────┐  ┌──────────────┐  ┌──────────────┐
│  FILTER BY    │  │  FILTER BY   │  │  FILTER BY   │
│  ROLE         │  │  IP ADDRESS  │  │  SOURCE      │
│               │  │              │  │              │
│  Filter by:   │  │  Filter by:  │  │  Filter by:  │
│  - Admin      │  │  - Specific IP│  │  - Join Team │
│  - Manager    │  │  - IP range  │  │  - Direct    │
│  - Sales      │  │              │  │    access    │
│  - Accounts   │  │              │  │              │
│  - Dev        │  │              │  │              │
│  - GFX        │  │              │  │              │
│  - Vendor     │  │              │  │              │
└───────┬───────┘  └──────┬───────┘  └──────┬───────┘
        │                 │                 │
        └─────────────────┴─────────────────┘
                         │
                         │ Filtered Results
                         │
                         ↓
        ┌──────────────────────────────────────┐
        │   MATCHING LOG ENTRIES                │
        │                                       │
        │   Complete Forensic Data:             │
        │   • When (timestamp)                  │
        │   • What (token, reason)               │
        │   • Who (IP, device, MAC)             │
        │   • Where (source)                     │
        │   • Why (failure reason)               │
        │                                       │
        │   Status: Immutable                   │
        │   Deletion: Not Allowed                │
        └──────────────────────────────────────┘
```

---

## Security Log Entry Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    SECURITY LOG ENTRY                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Timestamp:     2025-12-12 09:45:23                        │
│  Token:         ******** (hashed/masked)                    │
│  Failure Reason: Role Mismatch                              │
│  Role Attempted: Sales Team                                 │
│  Token Role:    Graphics Team                               │
│  IP Address:    192.168.1.100                               │
│  Device Info:   Chrome 120.0 / Windows 11                  │
│  MAC ID:        [if available]                              │
│  Source:        Join the Team page                          │
│                                                             │
│  Status:        Read-only                                  │
│  Deletion:      Not Allowed                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Access Control for Security Logs

```
                    ┌─────────────────────┐
                    │   USER TYPE         │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┴──────────────────────┐
        │                                              │
        │                                              │
        ↓                                              ↓
┌───────────────┐                            ┌──────────────────────┐
│ SUPER ADMIN   │                            │  ALL OTHER ROLES     │
│               │                            │                      │
│ ✅ Full Access│                            │  ❌ No Access        │
│ ✅ View Logs  │                            │  ❌ Cannot View      │
│ ✅ Filter     │                            │  ❌ Cannot Filter    │
│ ✅ Read-only  │                            │  ❌ Module Hidden    │
│ ❌ No Delete  │                            │                      │
└───────────────┘                            └──────────────────────┘
```

---

## Key Security Rules

1. **All Failures Logged:** Every failed token attempt is recorded
2. **Complete Data:** IP, device, MAC (if available), timestamp, reason
3. **Immutable Logs:** No deletion allowed, read-only access
4. **Super Admin Only:** Only Super Admin can access security logs
5. **Forensic Ready:** Complete traceability for investigation
6. **Token Masking:** Token values hashed/masked in logs
7. **Source Tracking:** Distinguishes between "Join the Team" and direct access

---

## Use Cases

### Use Case 1: Suspicious Activity Detection
- Super Admin notices multiple failed attempts from same IP
- Filters logs by IP address
- Identifies pattern of attack or misuse
- Takes appropriate action

### Use Case 2: Role Mismatch Investigation
- Multiple role mismatch failures detected
- Filters by failure reason: "Role Mismatch"
- Identifies which tokens are being misused
- Can deactivate compromised tokens

### Use Case 3: Token Reuse Attempts
- Filters by failure reason: "Used"
- Identifies attempts to reuse consumed tokens
- Tracks potential security breach attempts

### Use Case 4: Inactive Token Usage
- Filters by failure reason: "Inactive"
- Identifies attempts to use deactivated tokens
- Helps track compliance with deactivation orders

---

**Status:** Complete security failure and audit flow documentation based on Instruction 3, Section 13


