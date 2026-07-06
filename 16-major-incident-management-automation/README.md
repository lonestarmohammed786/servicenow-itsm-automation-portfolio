# Project 16: Major Incident Management Automation

## Overview

This project demonstrates ServiceNow Major Incident Management automation focused on priority validation, assignment ownership, communication control, resolution review, and Major Incident reporting.

The goal of this project is to show how ServiceNow administrators and ITSM analysts can support high-impact incident handling by enforcing required fields, improving communication discipline, and creating audit/reporting visibility for Major Incidents.

## Business Scenario

In real ServiceNow environments, Major Incidents require stronger control than normal incidents.

A normal incident may affect one user, one device, or one small issue.
A Major Incident may affect critical business services, multiple users, departments, locations, or customer-facing systems.

Major Incidents may sometimes be created or updated without proper priority, assignment group, communication notes, service impact, or resolution notes.

These gaps can create escalation delays, poor stakeholder communication, weak ownership, incomplete resolution documentation, and limited visibility for IT leadership.

This project uses Business Rules, GlideRecord, GlideAggregate, and Background Scripts to improve Major Incident governance and support better outage management.

## Major Incident Flow Covered

Major Incident Identification → Priority Validation → Assignment Ownership → Communication Updates → Resolution Review → Service Impact Reporting

## Features

* Validates that Major Incidents use Priority 1 or Priority 2
* Requires assignment group ownership for Major Incidents
* Requires work notes when updating Critical Major Incidents
* Prevents Major Incidents from being resolved without close notes
* Identifies active Major Incidents using a Background Script
* Counts active Major Incidents grouped by Business Service using GlideAggregate
* Supports Major Incident governance, escalation, and reporting
* Improves visibility for ITSM teams and leadership review

## Folder Structure

```text
16-major-incident-management-automation/
│
├── README.md
├── major-incident-process-notes.md
├── major-incident-rules.md
│
└── scripts/
    ├── major-incident-priority-validation.js
    ├── major-incident-assignment-group-validation.js
    ├── major-incident-communication-worknote.js
    ├── major-incident-resolution-review.js
    ├── major-incident-background-check.js
    └── major-incident-count-by-service.js
```

## Scripts Included

### 1. major-incident-priority-validation.js

Validates that an Incident marked as a Major Incident must have Priority 1 - Critical or Priority 2 - High.

If the Incident is marked as Major but priority is not 1 or 2, the save is blocked.

### 2. major-incident-assignment-group-validation.js

Requires every Major Incident to have an assignment group before the record can be saved.

This supports ownership, escalation, and accountability during high-impact incidents.

### 3. major-incident-communication-worknote.js

Requires work notes when updating a Critical Major Incident.

This supports communication discipline during outages and creates an audit trail for stakeholder updates.

### 4. major-incident-resolution-review.js

Prevents a Major Incident from being resolved without close notes.

This helps ensure that resolution details, fix summary, or post-incident review information is captured before moving the incident to Resolved.

### 5. major-incident-background-check.js

Background Script that identifies active Major Incidents and logs the incident number and short description.

This can be used by ServiceNow admins or ITSM analysts for operational review.

### 6. major-incident-count-by-service.js

Uses GlideAggregate to count active Major Incidents grouped by Business Service.

This helps identify which business services are most affected by Major Incidents.

## ServiceNow Concepts Used

* Major Incident Management
* Incident lifecycle control
* Priority validation
* Assignment group validation
* Work notes validation
* Close notes validation
* Business service impact reporting
* Business Rules
* Before Insert Business Rules
* Before Update Business Rules
* GlideRecord
* GlideAggregate
* addQuery()
* query()
* next()
* getDisplayValue()
* addAggregate()
* groupBy()
* getAggregate()
* Background Scripts
* ITSM process governance
* Service impact visibility
* Operational reporting basics

## Tables Used

* incident

## Key Fields Used

### Incident Table

* major_incident_state
* priority
* assignment_group
* work_notes
* state
* close_notes
* active
* business_service
* number
* short_description

## Example Business Value

This automation helps ServiceNow teams improve Major Incident handling and reduce operational risk.

Benefits include:

* Preventing low-priority records from being treated as Major Incidents
* Improving ownership for high-impact incidents
* Making sure Major Incidents have assignment group accountability
* Improving communication discipline during Critical Major Incidents
* Preventing incomplete Major Incident resolution
* Supporting post-incident review readiness
* Identifying active Major Incidents for operational review
* Reporting Major Incident volume by Business Service
* Improving ITSM governance and leadership visibility

## Portfolio Value

This project demonstrates exposure to Major Incident Management and ITSM outage governance in ServiceNow.

It shows that ServiceNow administration is not only about normal Incident handling, but also about supporting high-impact incident processes, service ownership, stakeholder communication, and operational reporting.

This project strengthens the portfolio by adding a dedicated Major Incident Management project that is closely aligned with ServiceNow Administrator, ITSM Analyst, Junior ServiceNow Developer, and Enterprise IT Support roles.
