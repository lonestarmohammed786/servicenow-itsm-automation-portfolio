# Scheduled Job Process Notes

## Purpose

This document explains how scheduled jobs and recurring automation support ServiceNow ITSM operations.
The goal is to show how ServiceNow administrators and ITSM analysts can use scheduled checks to review important records, identify risks, support cleanup, and improve operational visibility.

## Scheduled Automation Concept

Scheduled automation is useful when something needs to run automatically on a regular basis.
Unlike Business Rules, scheduled jobs do not depend on a user creating or updating a record.

A scheduled job can run:

```text
Daily
Weekly
Monthly
At a specific time
On a recurring schedule
```

This makes scheduled automation useful for recurring reviews, reminders, reporting, cleanup checks, and audit preparation.

## Difference Between Business Rules and Scheduled Jobs

Business Rules usually run when a record is inserted, updated, deleted, or queried.
Scheduled jobs run based on time.

| Area               | Business Rule           | Scheduled Job                 |
| ------------------ | ----------------------- | ----------------------------- |
| Trigger            | Record action           | Time-based schedule           |
| Example            | Incident updated        | Daily 8 AM review             |
| Use Case           | Validate form save      | Find records needing review   |
| User Action Needed | Usually yes             | No                            |
| Common Logic       | Block, update, validate | Search, count, notify, report |

## Why Scheduled Jobs Matter

In real ITSM environments, some problems are not caught immediately through form validation.

Examples:

```text
Critical Incidents may remain open
SLAs may breach overnight
Knowledge Articles may expire
Inactive users may still have roles
Hardware assets may remain In Use without ownership
Managers may need daily summary reports
```

Scheduled jobs help identify these issues without depending on someone manually checking each table.

## Common Scheduled Job Use Cases

ServiceNow scheduled jobs can support:

* Daily Critical Incident reviews
* SLA breach reminders
* Knowledge Article expiry checks
* Inactive user access reviews
* Asset ownership reviews
* Monthly ITSM metric summaries
* Cleanup reports
* Audit preparation checks
* Notification-style reminders

## Scheduled Script Execution

A Scheduled Script Execution is used when custom script logic needs to run on a schedule.

The script can use:

```text
GlideRecord
GlideAggregate
addQuery()
addNullQuery()
query()
next()
getDisplayValue()
getAggregate()
gs.info()
gs.eventQueue()
```

In this portfolio project, the scripts are written in Background Script style so they can be practiced and understood easily.
In a real ServiceNow environment, similar logic can be placed inside Scheduled Script Executions.

## GlideRecord in Scheduled Jobs

GlideRecord is useful when the script needs to find matching records and print or process each record.

Example use cases:

```text
Find active Priority 1 Incidents
Find breached SLA records
Find expired Knowledge Articles
Find inactive users with roles
Find assets missing assigned users
```

Example pattern:

```javascript
var gr = new GlideRecord('incident');
gr.addQuery('priority', '1');
gr.addQuery('active', true);
gr.query();

while (gr.next()) {
    gs.info(gr.getDisplayValue('number'));
}
```

## GlideAggregate in Scheduled Jobs

GlideAggregate is useful when the scheduled job needs counts or grouped reporting.

Example use cases:

```text
Count Critical Incidents
Count breached SLAs
Count expired Knowledge Articles
Count unassigned In Use assets
Create daily summary reports
```

Example pattern:

```javascript
var ga = new GlideAggregate('incident');
ga.addQuery('priority', '1');
ga.addQuery('active', true);
ga.addAggregate('COUNT');
ga.query();

if (ga.next()) {
    gs.info('Critical Incidents: ' + ga.getAggregate('COUNT'));
}
```

## Notification-Style Automation

This project uses `gs.info()` to log reminder-style output.

In a real production environment, this logic could be expanded to create notifications, events, or tasks.

Examples:

```text
Send email to assignment group manager
Trigger an event using gs.eventQueue()
Create a follow-up task
Send a report to ITSM leadership
Notify Knowledge managers about expired articles
Notify asset managers about unassigned hardware
```

For portfolio practice, the scripts log the output clearly to show what would be reviewed or notified.

## Tables Reviewed in This Project

This project reviews multiple ServiceNow tables:

```text
incident
task_sla
kb_knowledge
sys_user_has_role
sys_user
alm_hardware
```

This shows how scheduled automation can connect multiple ITSM areas into one operational review process.

## Operational Review Flow

The general flow is:

```text
Scheduled Job Runs → Query Records → Check Conditions → Log Results → Admin Reviews → Cleanup or Follow-Up
```

Example:

```text
Daily job runs at 8 AM
Finds active Priority 1 Incidents
Logs Incident number, description, and assignment group
ITSM analyst reviews the list
Support team follows up if needed
```

## Business Value

Scheduled automation helps ServiceNow teams:

* Reduce manual review effort
* Catch missed operational issues
* Improve SLA visibility
* Improve Knowledge Article quality
* Support access cleanup
* Improve asset ownership accuracy
* Support audit readiness
* Improve ITSM reporting
* Create recurring operational visibility

## Summary

This project demonstrates practical exposure to ServiceNow scheduled automation.
It shows how Scheduled Script style logic can support recurring ITSM checks across Incidents, SLAs, Knowledge Articles, users, roles, and hardware assets.
The project also demonstrates the use of GlideRecord and GlideAggregate for operational review, reminder-style automation, and scheduled reporting.
