# Project 10: Change Management Risk & Approval Automation

## Overview

This project demonstrates production-style ServiceNow Change Management automation focused on improving change planning, enforcing approval readiness, validating risk-related information, and supporting safer production changes.

The goal of this project is to show how ServiceNow can help teams reduce change risk by requiring key planning details before a Change Request moves forward.

## Business Scenario

In real IT environments, Change Requests can affect critical systems, applications, infrastructure, users, and business services.

If a Change is submitted without a Configuration Item, implementation plan, backout plan, test plan, or emergency justification, the organization may face higher risk during deployment.

This project automates important Change Management controls to make sure Change Requests contain the right planning details before approval or execution.

## ITSM Flow Covered

Incident → CMDB → Problem → Root Cause → Known Error → Change

## Features

* Requires a Configuration Item for high-risk Changes
* Requires implementation plan before Change approval
* Requires backout plan before Change approval
* Requires test plan before Change approval
* Requires justification for Emergency Changes
* Adds work notes when Change state changes
* Recommends Change review from a Problem Known Error
* Uses Background Scripts to identify Change Requests missing planning data

## Folder Structure

```text
10-change-management-risk-approval-automation/
│
├── README.md
├── change-risk-approval-rules.md
├── problem-change-linking-notes.md
│
└── scripts/
    ├── require-ci-for-high-risk-change.js
    ├── require-implementation-plan-before-approval.js
    ├── require-backout-plan-before-approval.js
    ├── require-test-plan-before-approval.js
    ├── validate-emergency-change-justification.js
    ├── change-state-change-worknote.js
    ├── recommend-change-from-problem.js
    └── change-planning-background-check.js
```

## Scripts Included

### 1. require-ci-for-high-risk-change.js

Requires a Configuration Item when a Change Request is marked as high risk.

### 2. require-implementation-plan-before-approval.js

Prevents a Change Request from moving to approval if the implementation plan is missing.

### 3. require-backout-plan-before-approval.js

Prevents a Change Request from moving to approval if the backout plan is missing.

### 4. require-test-plan-before-approval.js

Prevents a Change Request from moving to approval if the test plan is missing.

### 5. validate-emergency-change-justification.js

Requires justification when a Change Request is marked as Emergency.

### 6. change-state-change-worknote.js

Adds a work note when the Change Request state changes.

### 7. recommend-change-from-problem.js

Adds a work note on a Problem record when a Known Error with workaround documentation may require a Change Request for permanent fix.

### 8. change-planning-background-check.js

Background Script that identifies Change Requests missing implementation plans, backout plans, or test plans.

## ServiceNow Concepts Used

* Change Management
* Problem Management
* Known Error Management
* Configuration Items
* Business Rules
* Before Insert Business Rules
* Before Update Business Rules
* GlideRecord
* addNullQuery
* changes()
* changesTo()
* gs.nil()
* Work notes automation
* Approval readiness validation
* Emergency Change validation
* Background Scripts
* ITSM process automation

## Tables Used

* change_request
* problem
* cmdb_ci

## Key Fields Used

### Change Request Table

* risk
* cmdb_ci
* state
* implementation_plan
* backout_plan
* test_plan
* type
* justification
* work_notes

### Problem Table

* known_error
* workaround
* work_notes

## Example Business Value

This automation helps teams reduce risk by making sure Change Requests are properly planned before moving forward.

Benefits include:

* Better Change approval readiness
* Reduced production risk
* Stronger emergency Change governance
* Improved rollback planning
* Better implementation quality
* Stronger audit trail through work notes
* Cleaner connection between Problem Management and Change Management

## Portfolio Value

This project demonstrates practical understanding of ServiceNow Change Management and ITSM governance.

It shows that automation is not only about creating records or making forms faster. It can also protect production environments by enforcing planning discipline, risk awareness, and approval readiness.

Incident Management, CMDB, Problem Management, Known Error documentation, and Change Management.
