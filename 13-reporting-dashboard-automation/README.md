# Project 13: Reporting & Dashboard Automation

## Overview

This project demonstrates production-style ServiceNow reporting and operational metrics automation using Background Scripts, GlideAggregate, and ITSM data analysis patterns.

The goal of this project is to show how ServiceNow can be used not only for ticket automation, but also for operational visibility, reporting support, dashboard preparation, and ITSM performance analysis.

## Business Scenario

In real IT environments, support teams and managers need visibility into key operational metrics.

They often need to know:

* How many critical Incidents are currently open
* Which assignment groups have the highest Incident volume
* How many SLA records have breached
* How many Changes are pending approval
* Which Knowledge Articles are expired
* Which Configuration Items are linked to repeated Incidents
* What the overall monthly ITSM health summary looks like

This project uses ServiceNow scripts to calculate and summarize these metrics in a clean, reusable way.

## ITSM Flow Covered

Incident → SLA → Change → Knowledge → CMDB → Reporting → Dashboard Metrics

## Features

* Counts open Critical / Priority 1 Incidents
* Counts active Incidents by assignment group
* Counts breached SLA records
* Counts Change Requests pending approval
* Counts expired published Knowledge Articles
* Counts active Incidents grouped by Configuration Item
* Generates a monthly ITSM metrics summary
* Uses GlideAggregate for reporting-style queries
* Demonstrates reusable helper function logic for cleaner scripts

## Folder Structure

```text
13-reporting-dashboard-automation/
│
├── README.md
├── reporting-dashboard-notes.md
├── operational-metrics-rules.md
│
└── scripts/
    ├── count-open-critical-incidents.js
    ├── incident-count-by-assignment-group.js
    ├── breached-sla-report-check.js
    ├── pending-change-approval-check.js
    ├── expired-knowledge-report-check.js
    ├── repeated-ci-incident-report-check.js
    └── monthly-itsm-metrics-summary.js
```

## Scripts Included

### 1. count-open-critical-incidents.js

Counts open Critical / Priority 1 Incidents using GlideAggregate.

### 2. incident-count-by-assignment-group.js

Counts active Incidents grouped by assignment group.

### 3. breached-sla-report-check.js

Counts breached SLA records from the task_sla table.

### 4. pending-change-approval-check.js

Counts Change Requests currently pending approval or authorization.

### 5. expired-knowledge-report-check.js

Counts published Knowledge Articles that are past their valid-to date.

### 6. repeated-ci-incident-report-check.js

Counts active Incidents grouped by Configuration Item to identify CIs with repeated Incident activity.

### 7. monthly-itsm-metrics-summary.js

Generates a summary of key ITSM operational metrics including active Incidents, Priority 1 Incidents, breached SLAs, pending Changes, and expired Knowledge Articles.

## ServiceNow Concepts Used

* Reporting and dashboard preparation
* Background Scripts
* GlideAggregate
* addAggregate()
* getAggregate()
* groupBy()
* addQuery()
* addNotNullQuery()
* GlideDateTime
* ITSM operational metrics
* Incident reporting
* SLA reporting
* Change reporting
* Knowledge reporting
* CMDB-related reporting
* Reusable helper functions
* ServiceNow administration scripting

## Tables Used

* incident
* task_sla
* change_request
* kb_knowledge

## Key Fields Used

### Incident Table

* active
* priority
* assignment_group
* cmdb_ci

### Task SLA Table

* has_breached

### Change Request Table

* state

### Knowledge Table

* workflow_state
* valid_to

## Example Business Value

This project helps ServiceNow teams understand operational health by turning platform data into useful metrics.

Benefits include:

* Better visibility into critical Incidents
* Easier identification of overloaded assignment groups
* Faster SLA breach analysis
* Better Change approval tracking
* Improved Knowledge Article review process
* Better visibility into repeated CI-related issues
* Stronger dashboard and reporting preparation
* Improved ITSM decision-making

## Portfolio Value

This project demonstrates that ServiceNow skills are not limited to form scripting and record automation.

It shows practical understanding of how ServiceNow data can support reporting, dashboards, operations reviews, and ITSM performance tracking.

Recruiters and hiring managers can see that this project connects technical scripting with business visibility and operational decision-making.
