# Major Incident Process Notes

## Purpose

This document explains how Major Incident Management works in ServiceNow and how this project supports high-impact incident governance.

The goal is to show how ServiceNow administrators and ITSM analysts can improve Major Incident handling by enforcing priority, ownership, communication, resolution review, and service impact visibility.

## Major Incident Concept

A Major Incident is a high-impact incident that can seriously affect business operations.

A normal Incident may affect one user, one device, or one small issue.

A Major Incident may affect:

```text
Critical business service
Large user group
Business department
Company location
Customer-facing system
Production application
Network or infrastructure service
```

Major Incidents usually require faster response, stronger communication, and better visibility than normal incidents.

## Important Table

### incident

The `incident` table stores Incident records.

Important fields used in this project:

```text
number
short_description
major_incident_state
priority
assignment_group
work_notes
state
close_notes
active
business_service
```

This table answers questions like:

```text
Is this Incident marked as a Major Incident?
What is the priority?
Which group owns the Incident?
Was communication added?
Was resolution detail provided?
Which business service is affected?
```

## Major Incident Field Concept

This project uses the `major_incident_state` field to identify Major Incidents.

Example logic:

```javascript
if (current.major_incident_state != '') {
    // Incident is being treated as a Major Incident
}
```

This means:

```text
If the Major Incident state field has a value, treat the Incident as a Major Incident.
```

## Priority Validation

Major Incidents should usually be high-impact records.

This project validates that a Major Incident must have:

```text
Priority 1 - Critical
Priority 2 - High
```

Example logic:

```javascript
if (current.major_incident_state != '' &&
    current.priority != '1' &&
    current.priority != '2') {

    gs.addErrorMessage('Major Incidents must have Priority 1 - Critical or Priority 2 - High.');
    current.setAbortAction(true);
}
```

This prevents low-priority incidents from being treated as Major Incidents.

## Assignment Group Ownership

Every Major Incident should have an assignment group.

The assignment group shows which team owns the response.

Example:

```text
Business Service: Email Service
Assignment Group: Messaging Support
```

This means the Messaging Support team is responsible for handling the outage or coordinating the response.

This project checks:

```text
Is assignment_group empty?
```

If the Major Incident has no assignment group, the save is blocked.

## Communication Work Notes

Major Incidents require communication discipline.

Work notes help create a timeline of activity during the outage.

Work notes can include:

```text
Troubleshooting steps
Escalation updates
Stakeholder communication
Service restoration updates
Vendor updates
Temporary workaround information
```

This project requires work notes when updating a Critical Major Incident.

This supports better audit history and operational visibility.

## Resolution Review

Major Incidents should not be resolved without proper close notes.

Close notes can include:

```text
Resolution summary
Root cause summary
Fix applied
Service restored details
Workaround used
Post-incident review requirement
Next steps
```

This project prevents Major Incidents from being moved to Resolved if close notes are empty.

## Active Major Incident Review

ServiceNow admins or ITSM analysts may need to review active Major Incidents.

This project includes a Background Script that finds active Major Incidents and logs:

```text
Incident Number
Short Description
```

Example output:

```text
INC0010001 - Email service unavailable
INC0010005 - VPN outage affecting remote users
```

This supports operational review and active outage visibility.

## Business Service Reporting

Business Service reporting helps identify which services are most affected by Major Incidents.

Example output:

```text
Email Service - 3
VPN Service - 2
Payroll System - 1
```

This helps IT teams understand service impact and recurring outage patterns.

## Business Value

Major Incident automation helps ServiceNow teams:

* Improve outage governance
* Prevent incorrect Major Incident classification
* Require ownership for high-impact incidents
* Improve communication discipline
* Create better work note history
* Prevent incomplete resolution
* Support post-incident review readiness
* Identify active Major Incidents
* Report Major Incident volume by Business Service
* Improve ITSM leadership visibility

## Summary

This project demonstrates practical exposure to ServiceNow Major Incident Management.

It shows how Business Rules and Background Scripts can support high-impact incident governance by validating priority, assignment group, communication work notes, close notes, active Major Incident review, and Business Service reporting.
