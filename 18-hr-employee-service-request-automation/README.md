# Project 18: HR / Employee Service Request Automation

## Overview

This project demonstrates ServiceNow employee service request automation focused on required field validation, manager approval readiness, equipment request handling, department-based routing, inactive employee blocking, and request reporting.

The goal of this project is to show how ServiceNow administrators and ITSM analysts can support employee request fulfillment by improving data quality, approval routing, task ownership, and operational visibility.

## Business Scenario

In real ServiceNow environments, employee service requests are common across IT, HR, Facilities, Finance, and support teams.

Employees may submit requests for onboarding, laptops, equipment, access, department support, or general employee services.

If these requests are created with missing information or weak validation, fulfillment teams may face delays, incorrect routing, approval issues, or ownership confusion.

For example:

* Employee requests may be missing Requested For information
* Assignment group may be empty
* Requested For user may not have a manager
* Equipment requests may not route to a support team
* Requests may be created for inactive users
* Teams may need reporting by assignment group

These situations can create fulfillment delays, approval routing problems, asset tracking issues, access risks, and poor request visibility.

This project uses Business Rules, GlideRecord, GlideAggregate, reference field validation, and Background Scripts to improve employee service request handling.

## Employee Request Flow Covered

Employee Request → Required Field Validation → Manager Check → Equipment Validation → Department Routing → Inactive User Check → Request Reporting

## Features

* Requires Requested For, Short Description, and Assignment Group on employee service requests
* Validates that Requested For user has a manager for approval routing
* Requires assignment group for equipment-related requests
* Adds routing work notes based on Requested For user’s department
* Blocks employee service requests for inactive users
* Counts employee service requests grouped by assignment group using GlideAggregate
* Supports employee request fulfillment, approval readiness, and operational reporting

## Folder Structure

```text
18-hr-employee-service-request-automation/
│
├── README.md
├── employee-request-process-notes.md
├── employee-request-rules.md
│
└── scripts/
    ├── employee-request-required-fields.js
    ├── onboarding-manager-approval-validation.js
    ├── employee-equipment-request-validation.js
    ├── department-based-request-routing.js
    ├── inactive-employee-request-block.js
    └── employee-request-summary-report.js
```

## Scripts Included

### 1. employee-request-required-fields.js

Requires Requested For, Short Description, and Assignment Group before an employee service request can be saved.

### 2. onboarding-manager-approval-validation.js

Checks the Requested For user record and validates that the user has a manager.

This supports manager approval routing for onboarding or employee service requests.

### 3. employee-equipment-request-validation.js

Checks whether the short description contains equipment-related keywords such as laptop or equipment.

If the request is equipment-related, assignment group is required.

### 4. department-based-request-routing.js

Opens the Requested For user record, checks the user’s department, and adds routing work notes for IT, HR, or Finance support.

### 5. inactive-employee-request-block.js

Blocks employee service requests if the Requested For user is inactive.

### 6. employee-request-summary-report.js

Uses GlideAggregate to count employee service requests grouped by assignment group.

## ServiceNow Concepts Used

* Employee service request automation
* Service Catalog request handling
* Requested Item validation
* Required field validation
* Manager approval readiness
* Department-based routing
* Equipment request validation
* Inactive user validation
* Business Rules
* Before Insert Business Rules
* Before Update Business Rules
* GlideRecord
* GlideAggregate
* Reference field handling
* get()
* addQuery()
* query()
* next()
* getDisplayValue()
* addAggregate()
* groupBy()
* getAggregate()
* Work notes
* Background Scripts
* Request reporting basics

## Tables Used

* sc_req_item
* sys_user

## Key Fields Used

### Requested Item Table

* requested_for
* short_description
* assignment_group
* work_notes

### User Table

* manager
* department
* active
* name

## Example Business Value

This automation helps ServiceNow teams improve employee request fulfillment and reduce routing issues.

Benefits include:

* Improving employee request data quality
* Preventing requests with missing key fields
* Supporting manager approval readiness
* Reducing approval routing failures
* Improving equipment request ownership
* Supporting department-based routing
* Preventing requests for inactive users
* Improving employee request reporting
* Supporting IT, HR, and support team coordination

## Portfolio Value

This project demonstrates exposure to employee service request automation in ServiceNow.

It shows that ServiceNow administration is not only about Incidents, Problems, and Changes, but also about supporting employee service workflows, request validation, approval readiness, and fulfillment routing.

This project adds a practical employee support layer to the portfolio while staying aligned with ServiceNow Administrator, ITSM Analyst, Junior ServiceNow Developer, and Enterprise IT Support roles.
