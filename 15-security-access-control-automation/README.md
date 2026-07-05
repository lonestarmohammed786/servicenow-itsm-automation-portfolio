# Project 15: ServiceNow Security & Access Control Automation

## Overview

This project demonstrates ServiceNow security and access governance automation focused on user validation, group membership checks, role assignment controls, and access audit reporting.

The goal of this project is to show how ServiceNow administrators can support cleaner platform access by identifying inactive users, validating group membership, preventing risky role assignments, and reviewing elevated access.

## Business Scenario

In real ServiceNow environments, access control is an important part of platform governance.

Users may become inactive but still remain assigned to Incidents, groups, or roles.
Users may be assigned to tickets even when they are not members of the selected assignment group.
Inactive users may still hold roles.
Admin-style access may need regular review.

These situations can create security risks, assignment issues, audit gaps, and inaccurate platform data.

This project uses Business Rules, GlideRecord, GlideAggregate, and Background Scripts to improve access governance and support user/group/role review.

## Access Governance Flow Covered

User → Group Membership → Role Assignment → Access Review → Security Audit

## Features

* Prevents Incidents from being assigned to inactive users
* Validates that assigned users belong to the selected assignment group
* Prevents roles from being assigned to inactive users
* Identifies inactive users who still have assigned roles
* Counts users grouped by role using GlideAggregate
* Identifies inactive users still present in groups
* Identifies users with elevated or admin-style roles
* Supports ServiceNow user, role, and group access review

## Folder Structure

```text
15-security-access-control-automation/
│
├── README.md
├── access-control-rules.md
├── user-group-security-notes.md
│
└── scripts/
    ├── block-inactive-user-assignment.js
    ├── validate-user-group-membership.js
    ├── prevent-admin-role-to-inactive-user.js
    ├── identify-inactive-users-with-roles.js
    ├── count-users-by-role.js
    ├── group-membership-audit-check.js
    └── elevated-access-background-check.js
```

## Scripts Included

### 1. block-inactive-user-assignment.js

Prevents an Incident from being assigned to an inactive user.

### 2. validate-user-group-membership.js

Checks whether the assigned user is a member of the selected assignment group before allowing the Incident to be saved.

### 3. prevent-admin-role-to-inactive-user.js

Prevents role assignment records from being created for inactive users.

### 4. identify-inactive-users-with-roles.js

Background Script that identifies inactive users who still have assigned roles.

### 5. count-users-by-role.js

Uses GlideAggregate to count how many users are assigned to each role.

### 6. group-membership-audit-check.js

Background Script that identifies inactive users who are still members of groups.

### 7. elevated-access-background-check.js

Background Script that identifies users with admin-style or elevated roles.

## ServiceNow Concepts Used

* User access governance
* Role assignment review
* Group membership validation
* Platform security basics
* Business Rules
* Before Insert Business Rules
* Before Update Business Rules
* GlideRecord
* GlideAggregate
* Reference field handling
* get()
* addQuery()
* query()
* getValue()
* getDisplayValue()
* addAggregate()
* groupBy()
* getAggregate()
* Background Scripts
* User and group audit checks
* Security reporting basics

## Tables Used

* incident
* sys_user
* sys_user_grmember
* sys_user_has_role

## Key Fields Used

### Incident Table

* assigned_to
* assignment_group

### User Table

* active
* name

### Group Membership Table

* user
* group

### User Role Assignment Table

* user
* role

## Example Business Value

This automation helps ServiceNow teams improve access governance and reduce security/data quality risks.

Benefits include:

* Preventing assignment to inactive users
* Improving assignment group accuracy
* Reducing inaccurate ticket ownership
* Preventing role assignment to inactive users
* Supporting role review and cleanup
* Identifying inactive users still in groups
* Identifying users with elevated access
* Improving audit readiness
* Strengthening platform governance

## Portfolio Value

This project demonstrates exposure to ServiceNow security and access control concepts.

It shows that ServiceNow administration is not only about ITSM tickets and workflows, but also about user access, role governance, group membership, and platform security hygiene.

This project adds a governance-focused layer to the portfolio while keeping the main focus on ServiceNow ITSM administration and automation.
