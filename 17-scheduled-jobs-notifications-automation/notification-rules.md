# Notification Rules

## Purpose

This document explains the notification-style rules used in the Scheduled Jobs & Notifications Automation project.
The goal is to describe what each scheduled check reviews, why it matters, which table it uses, and what action or reminder output it produces.

## Rule 1: Daily Critical Incident Review

### Script File

```text
scripts/daily-critical-incident-review.js
```

### Table

```text
incident
```

### Script Type

```text
Scheduled Script Execution / Background Script style
```

### Requirement

Find all active Priority 1 Critical Incidents and log:

```text
Incident Number - Short Description - Assignment Group
```

### Business Reason

Critical Incidents should be reviewed regularly because they usually represent high business impact.
A daily scheduled review helps ITSM teams confirm that active Critical Incidents have visibility, ownership, and follow-up.

### Expected Result

The script logs active Priority 1 Incidents in this format:

```text
INC0010001 - Email outage - Service Desk
INC0010005 - VPN outage - Network Team
```

---

## Rule 2: SLA Breach Reminder Check

### Script File

```text
scripts/sla-breach-reminder-check.js
```

### Table

```text
task_sla
```

### Script Type

```text
Scheduled Script Execution / Background Script style
```

### Requirement

Find active SLA records where the stage is breached and log:

```text
Task Number - SLA Name - Stage
```

### Business Reason

Breached SLAs should be reviewed because they can indicate missed response or resolution commitments.
This scheduled check supports SLA visibility and helps teams identify where follow-up may be needed.

### Expected Result

The script logs breached SLA records in this format:

```text
INC0010001 - Priority 1 Resolution SLA - breached
INC0010007 - Priority 2 Response SLA - breached
```

---

## Rule 3: Expired Knowledge Notification Check

### Script File

```text
scripts/expired-knowledge-notification-check.js
```

### Table

```text
kb_knowledge
```

### Script Type

```text
Scheduled Script Execution / Background Script style
```

### Requirement

Find published Knowledge Articles where the valid-to date has expired and log:

```text
Article Number - Short Description - Valid To Date
```

### Business Reason

Expired Knowledge Articles can create outdated support documentation.
A scheduled check helps Knowledge owners review articles that may need retirement, update, or republishing.

### Expected Result

The script logs expired Knowledge Articles in this format:

```text
KB0010001 - VPN troubleshooting guide - 2026-06-30
KB0010005 - Email setup article - 2026-05-15
```

---

## Rule 4: Inactive User Access Review Reminder

### Script File

```text
scripts/inactive-user-access-review-reminder.js
```

### Tables

```text
sys_user_has_role
sys_user
```

### Script Type

```text
Scheduled Script Execution / Background Script style
```

### Requirement

Find inactive users who still have roles assigned and log:

```text
User Name - Role Name
```

### Business Reason

Inactive users should not keep unnecessary platform access.
This scheduled check supports access cleanup, audit readiness, and platform security hygiene.

### Expected Result

The script logs inactive users with assigned roles in this format:

```text
John Smith - itil
Sarah Lee - catalog_admin
```

---

## Rule 5: Asset Review Scheduled Check

### Script File

```text
scripts/asset-review-scheduled-check.js
```

### Table

```text
alm_hardware
```

### Script Type

```text
Scheduled Script Execution / Background Script style
```

### Requirement

Find hardware assets that are marked In Use but have no assigned user and log:

```text
Asset Tag - Display Name - State
```

### Business Reason

Hardware assets marked In Use should usually have clear ownership.
If an asset is In Use but no user is assigned, it can create inventory gaps, audit issues, offboarding problems, and ownership confusion.

### Expected Result

The script logs unassigned In Use assets in this format:

```text
LT-10045 - Dell Latitude 5420 - In Use
LT-10067 - HP EliteBook 840 - In Use
```

---

## Rule 6: Scheduled Job Summary Report

### Script File

```text
scripts/scheduled-job-summary-report.js
```

### Tables

```text
incident
task_sla
kb_knowledge
alm_hardware
```

### Script Type

```text
Scheduled Script Execution using GlideAggregate
```

### Requirement

Create a scheduled summary report that counts:

```text
Active Priority 1 Incidents
Breached SLA records
Expired published Knowledge Articles
In-use hardware assets with no assigned user
```

### Business Reason

ITSM teams often need quick operational visibility across multiple areas.
A scheduled summary report helps admins or analysts review important records from Incidents, SLAs, Knowledge, and Assets in one place.

### Expected Result

The script logs a summary in this format:

```text
Daily ITSM Scheduled Review Summary
Critical Incidents: 3
Breached SLAs: 5
Expired Knowledge Articles: 2
Unassigned In-Use Assets: 4
```

---

## Notification Expansion Idea

In this portfolio project, the scripts use:

```text
gs.info()
```

to log reminder-style output.

In a real ServiceNow environment, the logic could be expanded using:

```text
gs.eventQueue()
Notifications
Email scripts
Scheduled reports
Follow-up tasks
Assignment group reminders
Manager notifications
```

Example production-style use cases:

* Notify Incident managers about active Priority 1 Incidents
* Notify SLA owners about breached SLA records
* Notify Knowledge managers about expired articles
* Notify access governance teams about inactive users with roles
* Notify asset managers about In Use assets with no owner
* Send a daily ITSM summary to support leadership

## Overall Automation Value

These rules improve recurring ITSM review by supporting:

* Daily operational visibility
* SLA breach awareness
* Knowledge Article maintenance
* Access governance cleanup
* Asset ownership review
* Scheduled reporting
* Audit readiness
* Platform hygiene
* Reduced manual admin effort

## Summary

This rules document explains how scheduled automation can support recurring ITSM operations in ServiceNow.
It shows how Scheduled Script style logic, GlideRecord, and GlideAggregate can be used to review Incidents, SLAs, Knowledge Articles, user access, and hardware assets without waiting for manual form updates.
