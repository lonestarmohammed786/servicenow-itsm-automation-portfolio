# Incident Problem Linking Notes

## Purpose

This document explains how Incident records connect to Problem records in this project.

The goal is to show how repeated Incidents can be identified, reviewed, and connected to Problem Management for root cause analysis.

## Incident to Problem Relationship

In ServiceNow, Incidents are used to restore service as quickly as possible.

Problem records are used to investigate the underlying cause of recurring or major issues.

This project follows the flow:

```text
Incident → Repeated Incident Pattern → Problem → Root Cause Analysis → Known Error → Possible Change
```

## Why Linking Matters

When multiple Incidents are caused by the same underlying issue, linking those Incidents to a Problem record helps support teams see the full impact of the issue.

Instead of treating each Incident as a separate problem, the team can investigate the root cause once and apply a permanent fix.

## Field Used for Linking

The Incident table uses this field to connect an Incident to a Problem:

```text
problem_id
```

This field stores the related Problem record.

## Example Scenario

A company has a business application CI called:

```text
Payroll Application
```

Several users report similar issues:

```text
Incident 1: Payroll app loading slowly
Incident 2: Payroll app timeout error
Incident 3: Payroll app not responding
```

All three Incidents are connected to the same Configuration Item.

When the system detects three or more active Incidents for the same CI, it can create a Problem record:

```text
Problem: Recurring incidents detected for CI: Payroll Application
```

The Problem record then becomes the place where the support team investigates the root cause.

## Automation Logic

The project uses this logic:

```text
1. New Incident is created
2. System checks whether cmdb_ci is populated
3. System counts active Incidents for the same CI
4. If three or more active Incidents exist, the system checks for an active Problem
5. If no active Problem exists, a new Problem is created
6. If an active Problem already exists, a work note is added to the Incident
```

## Duplicate Problem Prevention

The automation checks whether an active Problem already exists for the same CI before creating a new one.

This prevents duplicate Problem records.

Without this check, every new Incident for the same CI could create another Problem, which would make reporting and investigation messy.

## Work Note When Problem Already Exists

If an active Problem already exists for the same CI, the Incident receives this work note:

```text
An active Problem already exists for this CI. Link this Incident to the existing Problem if appropriate.
```

This reminds the support team to review the existing Problem and manually link the Incident if needed.

## Counting Related Incidents

This project also includes a Background Script that counts Incidents linked to a specific Problem using the `problem_id` field.

Example:

```javascript
var problemSysId = 'PASTE_PROBLEM_SYS_ID_HERE';

var count = 0;

var gr = new GlideRecord('incident');
gr.addQuery('problem_id', problemSysId);
gr.query();

while (gr.next()) {
    count++;
}

gs.info('Total incidents linked to this Problem: ' + count);
```

## Business Value

Incident-to-Problem linking helps teams:

* Understand how many users or services are affected
* Avoid investigating the same issue multiple times
* Track recurring failures by CI
* Improve root cause analysis
* Support permanent fix planning
* Decide when Change Management may be needed

## Summary

This project demonstrates practical understanding of the Incident-to-Problem lifecycle in ServiceNow. It shows how automation can detect recurring Incidents, prevent duplicate Problem records, and support root cause investigation through cleaner ITSM relationships.
