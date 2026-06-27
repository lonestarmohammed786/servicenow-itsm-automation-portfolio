# Problem Change Linking Notes

## Purpose

This document explains how Problem Management connects to Change Management in this project.

The goal is to show how a documented Known Error can lead to Change Management review when a permanent fix may be required.

## Problem to Change Relationship

In ServiceNow, Problem Management is used to investigate root cause and document Known Errors.

Change Management is used to plan, approve, and implement controlled changes to production systems.

This project follows the flow:

```text
Incident → CMDB → Problem → Root Cause → Known Error → Change
```

## Why Linking Matters

A Problem record may identify the root cause of a recurring issue.

A workaround may help support teams temporarily restore service or guide users.

But a workaround is not always a permanent fix.

If the root cause requires a system update, configuration change, infrastructure repair, patch, deployment, or process change, then a Change Request may be needed.

## Example Scenario

A business application has repeated Incidents because users are getting timeout errors.

The Problem investigation identifies the root cause:

```text
Application server memory threshold is too low during peak business hours.
```

A workaround is documented:

```text
Restart application service during high memory usage.
```

This workaround helps temporarily, but it does not permanently fix the issue.

A Change Request may be needed to update server resources, tune memory settings, or deploy a permanent configuration fix.

## Automation Logic

The project uses this logic:

```text
1. Problem record is updated
2. System checks whether Known Error is true
3. System checks whether workaround is documented
4. If both are true, the system adds a work note
5. Work note recommends reviewing whether a Change Request is needed
```

## Work Note Message

```text
Known Error documented. Review whether a Change Request is needed for a permanent fix.
```

## Why This Is Useful

This automation helps support teams avoid stopping at temporary workarounds.

It reminds teams that once a Known Error is documented, they should consider whether a controlled Change is needed to permanently resolve the issue.

## Change Management Connection

A Change Request may be needed when the permanent fix involves:

* Updating a production configuration
* Applying a patch
* Modifying infrastructure
* Updating an application
* Changing a business service dependency
* Replacing or repairing a CI
* Deploying a permanent workaround
* Adjusting monitoring or alerting rules

## Business Value

Problem-to-Change linking helps teams:

* Move from temporary fixes to permanent solutions
* Reduce repeat Incidents
* Improve service reliability
* Control production risk
* Document approval and implementation steps
* Make root cause findings actionable
* Connect Known Error documentation to real remediation work

## Recruiter-Friendly Summary

This project demonstrates practical understanding of the connection between Problem Management and Change Management in ServiceNow.

It shows that identifying a root cause is only part of the process. If a permanent fix affects production systems, the fix should be reviewed, approved, tested, and implemented through Change Management.
