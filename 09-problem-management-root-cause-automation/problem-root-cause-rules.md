# Problem Root Cause Rules

## Purpose

This document explains the Problem Management rules used in this project. The goal is to support better root cause analysis, reduce repeat Incidents, and improve the quality of Problem records in ServiceNow.

Problem Management should not only track issues after they happen. It should help teams identify patterns, investigate root causes, document known errors, and recommend permanent fixes.

## Rule 1: Detect Repeated Incidents for the Same CI

When multiple active Incidents exist for the same Configuration Item, the system adds a work note recommending Problem Management review.

### Business Reason

Repeated Incidents for the same CI may indicate a deeper issue. Instead of resolving each Incident separately, support teams should investigate whether a Problem record is needed.

### Example

If three active Incidents are created for the same laptop, server, router, or application CI, the system should alert the support team that a Problem review may be required.

## Rule 2: Create Problem Record from Recurring Incidents

When three or more active Incidents exist for the same Configuration Item, the automation can create a Problem record.

### Business Reason

Creating a Problem record helps move the issue from short-term Incident resolution to long-term root cause analysis.

### Problem Record Details

The created Problem includes:

* A short description identifying recurring Incidents for the CI
* The same Configuration Item from the Incident
* A description explaining that multiple active Incidents were detected
* A recommendation to perform root cause analysis

## Rule 3: Prevent Duplicate Active Problems

Before creating a new Problem, the system checks whether an active Problem already exists for the same Configuration Item.

### Business Reason

Without this rule, every new Incident for the same CI could create another Problem record. This would create duplicate Problems and make the ITSM process messy.

### Expected Behavior

If no active Problem exists, create a new Problem.

If an active Problem already exists, do not create another one. Instead, add a work note to the Incident recommending that it be linked to the existing Problem if appropriate.

## Rule 4: Require Root Cause Notes Before Closing Problem

A Problem should not be closed unless root cause notes are provided.

### Business Reason

Closing a Problem without documenting the root cause weakens the value of Problem Management. Support teams may lose important investigation details, and the same issue may return later.

### Expected Behavior

If the Problem state changes to Closed and root cause notes are empty, the update is blocked.

The user sees this error:

```text
Root cause notes are required before closing a Problem.
```

## Rule 5: Require Workaround for Known Error

If a Problem is marked as a Known Error, workaround details must be provided.

### Business Reason

A Known Error means the issue is understood but may not yet be permanently fixed. Support teams need workaround information so they can help users quickly while the permanent fix is planned.

### Expected Behavior

If Known Error is selected and workaround is empty, the update is blocked.

The user sees this error:

```text
Workaround details are required when marking a Problem as a Known Error.
```

## Rule 6: Add Work Notes When Problem State Changes

When the Problem state changes, the system adds a work note reminding the team to review investigation progress.

### Business Reason

Problem records often move between different investigation stages. Work notes help create a clear audit trail and remind teams to check root cause progress, Known Error status, and next actions.

### Work Note Message

```text
Problem state changed. Review RCA progress, known error status, and next action.
```

## Rule 7: Count Related Incidents

A Background Script counts how many Incidents are linked to a specific Problem record.

### Business Reason

This helps support teams understand the impact of a Problem. A Problem with many related Incidents may need higher priority, deeper investigation, or Change Management involvement.

## Rule 8: Identify CIs with Repeated Active Incidents

A Background Script checks active Incidents for a specific Configuration Item.

### Business Reason

This helps identify CIs that may be unstable or causing recurring service issues.

## ITSM Value

These rules support a stronger ITSM process by helping teams:

* Identify recurring Incident patterns
* Reduce repeat tickets
* Improve root cause documentation
* Strengthen Known Error management
* Prevent duplicate Problem records
* Improve Incident-to-Problem visibility
* Support future Change Management decisions

## Recruiter-Friendly Summary

This project demonstrates how ServiceNow can be used to move beyond basic ticket handling. It shows how automation can support Problem Management by detecting recurring Incidents, enforcing root cause documentation, validating Known Error details, and improving ITSM process governance.
