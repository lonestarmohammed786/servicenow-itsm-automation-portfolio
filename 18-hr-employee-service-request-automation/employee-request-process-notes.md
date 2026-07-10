# Employee Request Process Notes

## Purpose

This document explains how employee service requests can be managed in ServiceNow and how this project supports cleaner request fulfillment.

The goal is to show how ServiceNow administrators and ITSM analysts can improve employee request handling by validating required fields, checking manager information, routing requests by department, blocking inactive employee requests, and reporting request volume.

## Employee Service Request Concept

Employee service requests are requests submitted by or on behalf of employees.
These requests may involve IT, HR, Finance, Facilities, or other internal support teams.

Examples include:

```text
Laptop request
New hire onboarding request
Software access request
Equipment request
Department support request
HR employee service request
Finance service request
```

Employee requests usually need accurate user information, clear ownership, manager approval readiness, and proper routing.

## Important Tables

### sc_req_item

The `sc_req_item` table stores Requested Item records.

Important fields used in this project:

```text
requested_for
short_description
assignment_group
work_notes
```

This table answers questions like:

```text
Who is the request for?
What is being requested?
Which group owns the request?
What routing or fulfillment notes were added?
```

### sys_user

The `sys_user` table stores user records.

Important fields used in this project:

```text
name
active
manager
department
```

This table answers questions like:

```text
Is the employee active?
Who is the employee's manager?
Which department does the employee belong to?
```

## Reference Field Concept

The `requested_for` field on `sc_req_item` is a reference field.
That means it displays a user name on the form, but behind the scenes it stores the sys_id of a record from the `sys_user` table.

Example:

```text
sc_req_item.requested_for → sys_user
```

This allows a script to open the exact Requested For user record and check details like manager, department, and active status.

## get() vs addQuery()

This project uses both `get()` and `addQuery()` patterns.

### get()

Use `get()` when you already have the sys_id of one exact record.

Example:

```javascript
var userGR = new GlideRecord('sys_user');

if (userGR.get(current.requested_for)) {
    gs.info(userGR.getDisplayValue('name'));
}
```

This means:

```text
Open the exact user stored in current.requested_for.
```

This is useful for checking the Requested For user's manager, department, or active status.

### addQuery()

Use `addQuery()` when you are searching for records using conditions.

Example:

```javascript
var ga = new GlideAggregate('sc_req_item');
ga.addAggregate('COUNT');
ga.groupBy('assignment_group');
ga.query();

while (ga.next()) {
    gs.info(ga.getDisplayValue('assignment_group') + ' - ' + ga.getAggregate('COUNT'));
}
```

This means:

```text
Search and count Requested Items grouped by assignment group.
```

## Required Field Validation

Employee service requests should include enough information for support teams to fulfill the request.

This project requires:

```text
Requested For
Short Description
Assignment Group
```

If these fields are missing, the request may be delayed or routed incorrectly.

Required field validation improves:

* Request data quality
* Fulfillment accuracy
* Assignment ownership
* Approval readiness
* Reporting accuracy

## Manager Approval Readiness

Many employee service requests require manager approval.

Examples:

```text
New hire onboarding
Laptop request
Software access request
Equipment request
Department access request
```

If the Requested For user does not have a manager listed, the approval flow may fail or route incorrectly.

This project checks the Requested For user's manager field before allowing the request to continue.

## Equipment Request Handling

Equipment-related requests often need clear assignment ownership.

Examples:

```text
Laptop request
Monitor request
Keyboard or mouse request
Docking station request
General equipment request
```

This project checks the short description for equipment-related keywords such as:

```text
laptop
equipment
```

If the request appears equipment-related and assignment group is empty, the save is blocked.

## Department-Based Routing

Employee requests may need to be routed based on the Requested For user's department.

Example routing logic:

```text
IT department → Route to IT Support team
HR department → Route to HR Support team
Finance department → Route to Finance Support team
```

This project adds work notes based on the user's department to show routing logic.

In a production environment, this could be expanded to automatically set assignment groups using real group sys_ids.

## Inactive Employee Request Blocking

Requests should not normally be created for inactive users.

Examples of risky requests:

```text
Laptop request for inactive employee
Access request for inactive employee
Onboarding request for inactive employee
Equipment request for inactive employee
```

These requests can create unnecessary approval work, asset tracking issues, access risks, and fulfillment confusion.

This project blocks employee service requests when the Requested For user is inactive.

## Employee Request Reporting

ServiceNow admins and ITSM analysts may need visibility into request volume by support team.

This project uses GlideAggregate to count employee service requests grouped by assignment group.

Example output:

```text
IT Support - 12
HR Support - 7
Finance Support - 4
```

This helps identify which teams are receiving the most employee service requests.

## Business Value

Employee service request automation helps ServiceNow teams:

* Improve request data quality
* Reduce fulfillment delays
* Support manager approval routing
* Improve equipment request ownership
* Route requests more clearly
* Prevent requests for inactive users
* Improve support team visibility
* Support employee onboarding and service fulfillment
* Improve operational reporting

## Summary

This project demonstrates practical exposure to ServiceNow employee service request automation.

It shows how Business Rules and Background Scripts can support request validation, manager approval readiness, equipment request handling, department-based routing, inactive user checks, and request reporting using GlideRecord and GlideAggregate.
