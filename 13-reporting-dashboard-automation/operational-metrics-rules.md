# Operational Metrics Rules

## Purpose

This document explains the operational metrics used in this Reporting & Dashboard Automation project.

The goal is to define what each metric checks, why it matters, and how it supports ITSM visibility.

## Metric 1: Open Critical Incidents

### Table

```text id="l6qv62"
incident
```

### Conditions

```text id="rqv8xn"
active = true
priority = 1
```

### Business Reason

Priority 1 Incidents usually represent critical service impact.

Tracking open Critical Incidents helps support teams understand immediate operational risk and respond faster.

### Expected Output

```text id="7ytyl2"
Total open Critical Incidents: 5
```

## Metric 2: Active Incidents by Assignment Group

### Table

```text id="h83gfr"
incident
```

### Conditions

```text id="3tekvk"
active = true
assignment_group is not empty
```

### Grouped By

```text id="blt0ug"
assignment_group
```

### Business Reason

This metric shows how active Incident workload is distributed across support teams.

It can help identify overloaded assignment groups, routing problems, or areas needing additional support.

### Expected Output

```text id="e78hgn"
Service Desk: 12
Network Team: 7
Database Team: 3
```

## Metric 3: Breached SLA Records

### Table

```text id="0y55xy"
task_sla
```

### Conditions

```text id="redzei"
has_breached = true
```

### Business Reason

SLA breaches show where service commitments were not met.

Tracking breached SLA records helps teams review performance, escalation gaps, and process improvement needs.

### Expected Output

```text id="mouolh"
Total breached SLA records: 8
```

## Metric 4: Changes Pending Approval

### Table

```text id="7sjowq"
change_request
```

### Conditions

```text id="fafcwf"
state = -3
```

### Business Reason

Pending Change approvals can become bottlenecks.

Tracking this metric helps Change Managers and support teams identify approval delays before they affect implementation schedules.

### Expected Output

```text id="zzlt50"
Total Changes pending approval: 4
```

## Metric 5: Expired Knowledge Articles

### Table

```text id="lqe6as"
kb_knowledge
```

### Conditions

```text id="uy52zz"
workflow_state = published
valid_to is before today
```

### Business Reason

Expired Knowledge Articles may contain outdated instructions, old troubleshooting steps, or incorrect support guidance.

Tracking expired articles helps teams maintain Knowledge quality and reduce user confusion.

### Expected Output

```text id="au7y4u"
Total expired Knowledge Articles: 6
```

## Metric 6: Active Incidents by Configuration Item

### Table

```text id="8i24fb"
incident
```

### Conditions

```text id="9n15za"
active = true
cmdb_ci is not empty
```

### Grouped By

```text id="9m9yoq"
cmdb_ci
```

### Business Reason

This metric helps identify Configuration Items with repeated or ongoing Incident activity.

If a CI has many active Incidents, it may indicate instability, recurring issues, or the need for Problem Management review.

### Expected Output

```text id="83yspv"
Email Server: 4
VPN Server: 3
Database Server: 5
```

## Metric 7: Monthly ITSM Metrics Summary

### Tables

```text id="ew86wm"
incident
task_sla
change_request
kb_knowledge
```

### Metrics Included

```text id="ts1rtw"
Active Incidents
Priority 1 Incidents
Breached SLA Records
Changes Pending Approval
Expired Knowledge Articles
```

### Business Reason

A monthly ITSM metrics summary gives teams a quick view of platform health and operational workload.

It can support team meetings, manager reviews, service improvement discussions, and dashboard planning.

### Expected Output

```text id="xpkquk"
Monthly ITSM Metrics Summary
Active Incidents: 42
Priority 1 Incidents: 5
Breached SLA Records: 8
Changes Pending Approval: 4
Expired Knowledge Articles: 6
```

## Why GlideAggregate Is Used

GlideAggregate is used because these scripts focus on counts and grouped reporting.

Instead of looping through every record only to count manually, GlideAggregate allows ServiceNow to calculate reporting metrics more efficiently.

Common methods used in this project:

```javascript id="z39bg8"
addAggregate('COUNT')
getAggregate('COUNT')
groupBy('assignment_group')
groupBy('cmdb_ci')
```

## Reporting Value

These metrics help ServiceNow teams answer operational questions quickly:

* How many critical issues are open?
* Which teams have the highest workload?
* Are SLAs being missed?
* Are Changes stuck waiting for approval?
* Are Knowledge Articles outdated?
* Which CIs may need Problem Management review?

## Portfolio Value

This project shows practical ServiceNow reporting logic using Background Scripts and GlideAggregate.

It demonstrates the ability to support dashboards, operational reviews, and ITSM performance visibility using platform data.
