# Major Incident Rules

## Purpose

This document explains the automation rules used in the Major Incident Management Automation project.

The goal is to clearly describe each rule, why it is needed, which table it applies to, and what business value it provides.

## Rule 1: Major Incident Priority Validation

### Script File

```text id="djy0uw"
scripts/major-incident-priority-validation.js
```

### Table

```text id="j0ph91"
incident
```

### Business Rule Type

```text id="poq26p"
Before Insert/Update
```

### Requirement

If an Incident is marked as a Major Incident, its priority must be either:

```text id="ubyw6g"
1 - Critical
2 - High
```

If the Incident is marked as Major but the priority is not 1 or 2, the save should be blocked.

### Business Reason

Major Incidents should represent high-impact issues.

If a low-priority Incident is treated as a Major Incident, it can create confusion, unnecessary escalation, and inaccurate reporting.

### Expected Result

The system prevents low-priority Incidents from being saved as Major Incidents.

---

## Rule 2: Major Incident Assignment Group Validation

### Script File

```text id="3q1c2j"
scripts/major-incident-assignment-group-validation.js
```

### Table

```text id="0h32p8"
incident
```

### Business Rule Type

```text id="e8p840"
Before Insert/Update
```

### Requirement

If an Incident is marked as a Major Incident, it must have an assignment group.

If assignment group is empty, the save should be blocked.

### Business Reason

Major Incidents need clear ownership.

Without an assignment group, it may be unclear which support team is responsible for the response, escalation, and resolution.

### Expected Result

The system prevents Major Incidents from being saved without assignment group ownership.

---

## Rule 3: Critical Major Incident Communication Work Note

### Script File

```text id="tp6bmz"
scripts/major-incident-communication-worknote.js
```

### Table

```text id="j0l171"
incident
```

### Business Rule Type

```text id="n1iynt"
Before Update
```

### Requirement

If an Incident is marked as a Major Incident and priority is Critical, work notes must be added before updating the record.

If work notes are empty, the update should be blocked.

### Business Reason

Critical Major Incidents require strong communication discipline.

Work notes help create an audit trail of troubleshooting, escalation, stakeholder updates, and service restoration activities.

### Expected Result

The system prevents Critical Major Incidents from being updated without communication notes.

---

## Rule 4: Major Incident Resolution Review

### Script File

```text id="sbdcrl"
scripts/major-incident-resolution-review.js
```

### Table

```text id="zg5iy6"
incident
```

### Business Rule Type

```text id="q0n63n"
Before Update
```

### Requirement

If an Incident is marked as a Major Incident and is being moved to Resolved, close notes must be provided.

If close notes are empty, the update should be blocked.

### Business Reason

Major Incidents should not be resolved without resolution details.

Close notes help document the fix summary, root cause, workaround, service restoration details, and post-incident review information.

### Expected Result

The system prevents Major Incidents from being resolved without close notes.

---

## Rule 5: Active Major Incident Background Check

### Script File

```text id="bjqzn3"
scripts/major-incident-background-check.js
```

### Table

```text id="5wcp48"
incident
```

### Script Type

```text id="90fge5"
Background Script
```

### Requirement

Find all active Major Incidents and print:

```text id="zpk5p3"
Incident Number
Short Description
```

### Business Reason

ServiceNow admins and ITSM analysts may need a quick way to review active Major Incidents for operational visibility.

### Expected Result

The script logs active Major Incidents in this format:

```text id="7v1n34"
INC0010001 - Email service unavailable
INC0010005 - VPN outage affecting remote users
```

---

## Rule 6: Major Incident Count by Business Service

### Script File

```text id="fb65qw"
scripts/major-incident-count-by-service.js
```

### Table

```text id="8800j1"
incident
```

### Script Type

```text id="jb8onb"
Background Script using GlideAggregate
```

### Requirement

Count active Major Incidents grouped by Business Service.

The output should show:

```text id="tjqy3s"
Business Service - Count
```

### Business Reason

Business Service reporting helps IT teams understand which services are most affected by Major Incidents.

This can support leadership review, service improvement, and recurring outage analysis.

### Expected Result

The script logs Major Incident counts by service in this format:

```text id="naonxz"
Email Service - 3
VPN Service - 2
Payroll System - 1
```

---

## Overall Automation Value

These rules improve Major Incident Management by supporting:

* Correct Major Incident classification
* Priority control
* Assignment ownership
* Communication discipline
* Resolution review
* Active incident visibility
* Business service reporting
* ITSM process governance
* Leadership reporting readiness

## Summary

This rules document explains how the project controls high-impact Incident handling in ServiceNow.

It shows how Business Rules and Background Scripts can enforce Major Incident governance by validating priority, assignment group, work notes, close notes, active Major Incident review, and Business Service reporting.
