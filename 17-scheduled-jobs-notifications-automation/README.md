# Project 17: Scheduled Jobs & Notifications Automation

## Overview

This project demonstrates ServiceNow scheduled automation focused on recurring ITSM checks, notification-style reminders, operational review, and admin reporting.

The goal of this project is to show how ServiceNow administrators and ITSM analysts can use Scheduled Script logic, GlideRecord, and GlideAggregate to identify important records without waiting for users to manually update forms.

## Business Scenario

In real ServiceNow environments, many operational issues need regular review.

Some issues do not always appear because a user updates a form. They may need to be checked daily, weekly, or on a recurring schedule.

For example:

* Critical Incidents may remain active
* SLA records may already be breached
* Knowledge Articles may expire
* Inactive users may still have roles
* Hardware assets may be marked In Use without an assigned user
* ITSM teams may need a daily summary report

These situations can create operational risk, reporting gaps, audit issues, and missed cleanup work.

This project uses Scheduled Script style logic, GlideRecord, GlideAggregate, and Background Scripts to support recurring ITSM review and notification-style automation.

## Scheduled Automation Flow Covered

Scheduled Job → Record Review → Condition Check → Log/Reminder Output → Admin Review → Cleanup Action

## Features

* Identifies active Priority 1 Critical Incidents
* Finds active breached SLA records
* Identifies expired published Knowledge Articles
* Finds inactive users who still have roles assigned
* Identifies In Use hardware assets with no assigned user
* Produces a daily ITSM scheduled review summary
* Uses GlideRecord for recurring operational checks
* Uses GlideAggregate for scheduled count/reporting logic
* Supports ITSM review, audit readiness, and platform hygiene

## Folder Structure

```text
17-scheduled-jobs-notifications-automation/
│
├── README.md
├── scheduled-job-process-notes.md
├── notification-rules.md
│
└── scripts/
    ├── daily-critical-incident-review.js
    ├── sla-breach-reminder-check.js
    ├── expired-knowledge-notification-check.js
    ├── inactive-user-access-review-reminder.js
    ├── asset-review-scheduled-check.js
    └── scheduled-job-summary-report.js
```

## Scripts Included

### 1. daily-critical-incident-review.js

Finds active Priority 1 Critical Incidents and logs the Incident number, short description, and assignment group.

### 2. sla-breach-reminder-check.js

Finds active breached SLA records and logs the related task, SLA name, and SLA stage.

### 3. expired-knowledge-notification-check.js

Finds published Knowledge Articles where the valid-to date has expired.

### 4. inactive-user-access-review-reminder.js

Finds inactive users who still have roles assigned.

### 5. asset-review-scheduled-check.js

Finds hardware assets that are marked In Use but do not have an assigned user.

### 6. scheduled-job-summary-report.js

Uses GlideAggregate to produce a daily ITSM scheduled review summary for Critical Incidents, breached SLAs, expired Knowledge Articles, and unassigned In Use assets.

## ServiceNow Concepts Used

* Scheduled Script Execution logic
* Background Script style testing
* Recurring ITSM checks
* Notification-style automation
* GlideRecord
* GlideAggregate
* addQuery()
* addNullQuery()
* query()
* next()
* getDisplayValue()
* addAggregate()
* getAggregate()
* Reference field handling
* Date/time comparison using gs.nowDateTime()
* Incident review
* SLA breach review
* Knowledge expiry review
* Inactive user access review
* Hardware asset ownership review
* Operational summary reporting

## Tables Used

* incident
* task_sla
* kb_knowledge
* sys_user_has_role
* sys_user
* alm_hardware

## Key Fields Used

### Incident Table

* number
* short_description
* priority
* active
* assignment_group

### Task SLA Table

* task
* sla
* stage
* active

### Knowledge Table

* number
* short_description
* workflow_state
* valid_to

### User Role Assignment Table

* user
* role

### User Table

* active
* name

### Hardware Asset Table

* asset_tag
* display_name
* install_status
* assigned_to

## Example Business Value

This automation helps ServiceNow teams improve recurring operational review and reduce missed follow-up work.

Benefits include:

* Identifying active Critical Incidents for daily review
* Reviewing breached SLA records
* Finding expired Knowledge Articles
* Supporting inactive user access cleanup
* Identifying hardware assets missing ownership
* Creating scheduled ITSM summary visibility
* Improving audit readiness
* Supporting platform hygiene
* Reducing manual admin review effort

## Portfolio Value

This project demonstrates exposure to scheduled automation and recurring operational checks in ServiceNow.

It shows that ServiceNow administration is not only about form-based Business Rules and Client Scripts, but also about automation that runs on a schedule to support daily ITSM operations.

This project adds a scheduled automation layer to the portfolio and connects Incident Management, SLA Management, Knowledge Management, Asset Management, and Access Governance into one operational review project.
