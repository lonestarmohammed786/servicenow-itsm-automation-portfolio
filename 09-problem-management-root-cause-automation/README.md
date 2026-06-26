# Project 09: Problem Management Root Cause Automation

## Overview

This project demonstrates production-style ServiceNow Problem Management automation focused on detecting recurring Incidents, supporting root cause analysis, enforcing Known Error documentation, and improving the Incident-to-Problem lifecycle.

The goal of this project is to show how repeated Incidents connected to the same Configuration Item can be identified and escalated into Problem Management for deeper investigation. This helps reduce recurring issues, improve ITSM data quality, and support long-term service reliability.

## Business Scenario

In many IT support environments, the same Configuration Item may generate repeated Incidents. If these Incidents are only resolved one by one, the underlying root cause may never be fixed.

This project automates parts of the Problem Management process by identifying repeated Incidents, recommending or creating Problem records, requiring root cause notes before closure, validating Known Error documentation, and providing Background Scripts to analyze recurring Incident patterns.

## ITSM Flow Covered

Incident → Configuration Item → Repeated Incident Pattern → Problem → Root Cause Analysis → Known Error → Possible Change

## Features

* Detects repeated active Incidents for the same Configuration Item
* Creates a Problem record when recurring Incidents are found
* Prevents duplicate active Problems for the same Configuration Item
* Requires root cause notes before a Problem can be closed
* Requires workaround documentation when a Problem is marked as a Known Error
* Adds work notes when the Problem state changes
* Counts Incidents linked to a specific Problem record
* Uses Background Scripts to identify repeated Incident patterns for a CI

## Folder Structure

```text
09-problem-management-root-cause-automation/
│
├── README.md
├── problem-root-cause-rules.md
├── incident-problem-linking-notes.md
│
└── scripts/
    ├── detect-repeat-incidents-for-ci.js
    ├── create-problem-from-repeat-incidents.js
    ├── require-root-cause-before-close.js
    ├── validate-known-error-documentation.js
    ├── problem-state-change-worknote.js
    ├── count-related-incidents.js
    └── repeated-ci-incident-background-check.js
```

## Scripts Included

### 1. detect-repeat-incidents-for-ci.js

Detects when multiple active Incidents exist for the same Configuration Item and adds a work note recommending Problem Management review.

### 2. create-problem-from-repeat-incidents.js

Counts active Incidents for the same Configuration Item. If three or more active Incidents exist, the script checks for an existing active Problem. If no active Problem exists, it creates a new Problem record.

### 3. require-root-cause-before-close.js

Prevents a Problem record from being closed unless root cause notes are provided.

### 4. validate-known-error-documentation.js

Requires workaround documentation when a Problem is marked as a Known Error.

### 5. problem-state-change-worknote.js

Adds a work note when the Problem state changes to remind support teams to review root cause progress, Known Error status, and next actions.

### 6. count-related-incidents.js

Background Script that counts how many Incidents are linked to a specific Problem record.

### 7. repeated-ci-incident-background-check.js

Background Script that counts how many active Incidents exist for a specific Configuration Item.

## ServiceNow Concepts Used

* Problem Management
* Incident Management
* Configuration Items
* Business Rules
* Before Update Business Rules
* After Insert Business Rules
* GlideRecord
* Record counting pattern
* Reference field queries
* Work notes automation
* Root cause validation
* Known Error validation
* Background Scripts
* ITSM process automation

## Tables Used

* incident
* problem
* cmdb_ci

## Key Fields Used

### Incident Table

* cmdb_ci
* active
* problem_id
* work_notes

### Problem Table

* short_description
* cmdb_ci
* description
* problem_state
* cause_notes
* known_error
* workaround
* work_notes
* active

## Example Business Value

This automation helps support teams move from reactive Incident handling to proactive Problem Management. Instead of repeatedly closing similar Incidents, the system identifies recurring patterns and supports root cause investigation.

Benefits include:

* Reduced repeat Incidents
* Better Incident-to-Problem visibility
* Improved root cause documentation
* Stronger Known Error management
* Better support handoff between teams
* Cleaner ITSM process governance

## Portfolio Value

This project demonstrates practical ServiceNow ITSM automation beyond basic Incident rules. It shows an understanding of how Incident Management, CMDB, Problem Management, and Change Management connect in real enterprise environments.

Recruiters and hiring managers can see that this project is not just script practice. It reflects a real ITSM workflow used by support, infrastructure, and service management teams.
