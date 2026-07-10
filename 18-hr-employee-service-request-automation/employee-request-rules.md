# Employee Request Rules

## Purpose

This document explains the automation rules used in the HR / Employee Service Request Automation project.

The goal is to clearly describe each rule, why it is needed, which table it applies to, and what business value it provides.

## Rule 1: Employee Request Required Fields

### Script File

```text
scripts/employee-request-required-fields.js
```

### Table

```text
sc_req_item
```

### Business Rule Type

```text
Before Insert/Update
```

### Requirement

Employee service requests must include:

```text
Requested For
Short Description
Assignment Group
```

If any of these fields are missing, the request should be blocked.

### Business Reason

Employee service requests need enough information for support teams to understand, route, and fulfill the request.

Missing key fields can cause delays, incorrect assignment, weak reporting, and fulfillment confusion.

### Expected Result

The system prevents employee service requests from being saved if Requested For, Short Description, or Assignment Group is missing.

---

## Rule 2: Onboarding Manager Approval Validation

### Script File

```text
scripts/onboarding-manager-approval-validation.js
```

### Table

```text
sc_req_item
```

### Business Rule Type

```text
Before Insert/Update
```

### Requirement

If a Requested For user is selected, the user must have a manager listed on the user record.

If the Requested For user has no manager, the request should be blocked.

### Business Reason

Many employee service requests require manager approval.

If the Requested For user has no manager, the approval flow may fail or route incorrectly.

### Expected Result

The system prevents employee service requests from continuing when the Requested For user has no manager.

---

## Rule 3: Employee Equipment Request Validation

### Script File

```text
scripts/employee-equipment-request-validation.js
```

### Table

```text
sc_req_item
```

### Business Rule Type

```text
Before Insert/Update
```

### Requirement

If the short description contains equipment-related keywords such as:

```text
laptop
equipment
```

then assignment group is required.

If assignment group is empty, the request should be blocked.

### Business Reason

Equipment requests usually require clear ownership from IT Support, Desktop Support, Asset Management, or another fulfillment group.

Without an assignment group, the request may not be routed properly.

### Expected Result

The system prevents equipment-related employee requests from being saved without assignment group ownership.

---

## Rule 4: Department-Based Request Routing

### Script File

```text
scripts/department-based-request-routing.js
```

### Table

```text
sc_req_item
```

### Business Rule Type

```text
Before Insert/Update
```

### Requirement

The Requested For user’s department should be checked.

Based on the department, a routing work note should be added:

```text
IT → Route to IT Support team
HR → Route to HR Support team
Finance → Route to Finance Support team
```

### Business Reason

Employee service requests may need to be handled by different support teams depending on the employee’s department.

Department-based routing improves request visibility and helps support teams understand where the request should go.

### Expected Result

The system adds a routing work note based on the Requested For user’s department.

---

## Rule 5: Inactive Employee Request Block

### Script File

```text
scripts/inactive-employee-request-block.js
```

### Table

```text
sc_req_item
```

### Business Rule Type

```text
Before Insert/Update
```

### Requirement

If the Requested For user is inactive, the employee service request should be blocked.

### Business Reason

Requests should not normally be created for inactive users.

Creating laptop, access, onboarding, or equipment requests for inactive employees can create fulfillment mistakes, unnecessary approvals, asset tracking issues, and access risks.

### Expected Result

The system prevents employee service requests from being created or updated for inactive users.

---

## Rule 6: Employee Request Summary Report

### Script File

```text
scripts/employee-request-summary-report.js
```

### Table

```text
sc_req_item
```

### Script Type

```text
Background Script using GlideAggregate
```

### Requirement

Count employee service requests grouped by assignment group.

The output should show:

```text
Assignment Group - Count
```

### Business Reason

ServiceNow admins and ITSM analysts may need visibility into which teams receive the most employee service requests.

This supports workload review, request reporting, and operational visibility.

### Expected Result

The script logs employee request counts by assignment group in this format:

```text
IT Support - 12
HR Support - 7
Finance Support - 4
```

---

## Overall Automation Value

These rules improve employee service request handling by supporting:

* Required field validation
* Manager approval readiness
* Equipment request ownership
* Department-based routing
* Inactive employee request blocking
* Request volume reporting
* Cleaner fulfillment process
* Better operational visibility
* Improved Service Catalog governance

## Summary

This rules document explains how the project improves employee service request handling in ServiceNow.

It shows how Business Rules and Background Scripts can enforce request data quality, approval readiness, routing logic, inactive user validation, and request reporting using GlideRecord and GlideAggregate.
