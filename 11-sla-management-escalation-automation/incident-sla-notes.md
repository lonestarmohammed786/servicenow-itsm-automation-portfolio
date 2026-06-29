# Incident SLA Notes

## Purpose

This document explains how Incident Management connects to SLA Management in this project.

The goal is to show how ServiceNow can help support teams track SLA risk, identify breached SLA records, and improve escalation visibility for critical Incidents.

## Incident to SLA Relationship

In ServiceNow, Incidents represent service interruptions or user issues.

SLA records track whether support teams are meeting expected response or resolution commitments for those Incidents.

This project follows the flow:

```text
Incident → Priority → SLA → Breach Risk → Escalation → SLA Review
```

## Why SLA Visibility Matters

SLA visibility helps support teams understand whether an Incident is being handled within the expected time.

Without SLA visibility, teams may not know when a critical Incident is at risk of breaching or has already breached.

Good SLA visibility helps answer:

```text
Is this Incident critical?
Is it close to breach?
Has it already breached?
Which SLA is attached?
Which team owns the Incident?
Does this Incident need escalation?
```

## Priority 1 Incident Handling

Priority 1 Incidents usually represent major service impact.

Because of that, this project requires SLA review notes for Priority 1 Incidents.

This helps support teams document SLA awareness and next action before saving the record.

## SLA Breach Risk

This project uses a custom field:

```text
u_sla_breach_risk
```

When this field is set to:

```text
High
```

the automation can:

* Add a work note
* Escalate the Incident
* Set priority, urgency, and impact to critical values
* Add a notification-style work note for the assignment group

## Task SLA Table

SLA records are stored in the table:

```text
task_sla
```

The `task_sla` table connects SLA records to tasks such as Incidents.

The important fields used in this project are:

```text
task
sla
has_breached
```

## Breached SLA Check

This project includes a Background Script that checks breached SLA records.

The script queries:

```text
task_sla
```

where:

```text
has_breached = true
```

Example output:

```text
Breached SLA found. Task: INC0010001 | SLA: Priority 1 Resolution SLA
```

## Missing SLA Validation

This project includes a Background Script that checks active Priority 1 Incidents and verifies whether each Incident has a related SLA record.

If no related SLA record exists, the script prints:

```text
Priority 1 Incident missing SLA record: INC0010001
```

This helps identify possible SLA configuration or process gaps.

## Counting SLA Records

This project also includes a Background Script that counts how many SLA records are linked to each active Priority 1 Incident.

Example output:

```text
Incident INC0010001 has 2 SLA records.
```

This helps admins understand SLA coverage for critical Incidents.

## Business Value

Incident-to-SLA visibility helps teams:

* Track critical Incident response
* Reduce SLA breach risk
* Improve assignment group awareness
* Identify breached SLA records
* Validate SLA coverage for Priority 1 Incidents
* Improve escalation discipline
* Support SLA reporting and audit checks
* Strengthen Incident Management operations

## Summary

This project demonstrates practical understanding of how SLA Management connects to Incident Management in ServiceNow.

It shows how automation can support breach visibility, escalation handling, Priority 1 Incident governance, and operational accountability for support teams.
