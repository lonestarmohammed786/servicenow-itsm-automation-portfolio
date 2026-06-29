# Project 11: SLA Management & Escalation Automation

## Overview

This project demonstrates production-style ServiceNow SLA Management automation focused on SLA visibility, breach prevention, escalation handling, and Incident support process improvement.

The goal of this project is to show how ServiceNow can help teams monitor SLA risk, identify breached SLA records, escalate high-risk Incidents, and validate whether priority Incidents have related SLA records.

## Business Scenario

In real IT support environments, Service Level Agreements help define how quickly teams should respond to or resolve Incidents.

When SLA visibility is weak, support teams may miss breach risks, delay escalation, or fail to prioritize critical tickets properly.

This project automates SLA-related checks and escalation logic to support better Incident management and SLA governance.

## ITSM Flow Covered

Incident → Priority → SLA → Breach Risk → Escalation → SLA Review

## Features

* Requires SLA review notes for Priority 1 Incidents
* Adds work notes when SLA breach risk is high
* Escalates Incidents when SLA breach risk is high
* Adds assignment group notification work notes for high SLA risk
* Identifies breached SLA records using Background Scripts
* Validates active Priority 1 Incidents against related SLA records
* Counts SLA records linked to active Priority 1 Incidents

## Folder Structure

```text
11-sla-management-escalation-automation/
│
├── README.md
├── sla-escalation-rules.md
├── incident-sla-notes.md
│
└── scripts/
    ├── require-sla-for-priority-one-incident.js
    ├── add-worknote-when-incident-near-sla-breach.js
    ├── escalate-incident-on-sla-breach-risk.js
    ├── notify-assignment-group-on-sla-risk.js
    ├── sla-breach-background-check.js
    ├── active-incident-sla-validation.js
    └── priority-incident-sla-count.js
```

## Scripts Included

### 1. require-sla-for-priority-one-incident.js

Requires SLA review notes when an Incident is Priority 1.

### 2. add-worknote-when-incident-near-sla-breach.js

Adds a work note when an Incident has high SLA breach risk.

### 3. escalate-incident-on-sla-breach-risk.js

Escalates an Incident by setting priority, urgency, and impact to critical values when SLA breach risk is high.

### 4. notify-assignment-group-on-sla-risk.js

Adds a work note when an assignment group should be alerted for high SLA breach risk.

### 5. sla-breach-background-check.js

Background Script that identifies SLA records where `has_breached` is true.

### 6. active-incident-sla-validation.js

Background Script that checks active Priority 1 Incidents and identifies records with no related SLA records.

### 7. priority-incident-sla-count.js

Background Script that counts SLA records linked to active Priority 1 Incidents.

## ServiceNow Concepts Used

* SLA Management
* Incident Management
* Priority 1 Incident handling
* Business Rules
* Before Insert Business Rules
* Before Update Business Rules
* GlideRecord
* Nested GlideRecord queries
* Reference field queries
* `task_sla` table
* `has_breached` field
* Work notes automation
* Escalation logic
* Background Scripts
* ITSM process automation

## Tables Used

* incident
* task_sla

## Key Fields Used

### Incident Table

* priority
* urgency
* impact
* assignment_group
* work_notes
* active
* u_sla_review_notes
* u_sla_breach_risk

### Task SLA Table

* task
* sla
* has_breached

## Example Business Value

This automation helps support teams improve SLA governance by making breach risk more visible and helping critical Incidents receive faster attention.

Benefits include:

* Better SLA visibility
* Earlier escalation for high-risk Incidents
* Improved Priority 1 Incident discipline
* Cleaner SLA audit checks
* Better assignment group awareness
* Faster identification of breached SLA records
* Improved Incident support process quality

## Portfolio Value

This project demonstrates practical understanding of SLA Management in ServiceNow.

It shows that ServiceNow automation is not only about updating forms or creating tickets. It can also support operational accountability, SLA compliance, escalation handling, and service reliability.

Recruiters and hiring managers can see that this project connects Incident Management with SLA governance and support operations.
