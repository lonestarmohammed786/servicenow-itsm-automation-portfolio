# SLA Escalation Rules

## Purpose

This document explains the SLA Management and escalation rules used in this project.

The goal is to improve SLA visibility, reduce breach risk, and support faster handling of critical Incidents in ServiceNow.

SLA Management is not only about measuring time. It helps support teams understand urgency, accountability, and whether service commitments are at risk.

## Rule 1: Require SLA Review Notes for Priority 1 Incidents

When an Incident is Priority 1, SLA review notes must be provided.

### Business Reason

Priority 1 Incidents usually represent critical service impact. These records should include SLA review notes so support teams can document awareness, urgency, and next action.

### Expected Behavior

If the Incident priority is 1 and SLA review notes are empty, the save is blocked.

The user sees this error:

```text
SLA review notes are required for Priority 1 Incidents.
```

## Rule 2: Add Work Note for High SLA Breach Risk

When an Incident has high SLA breach risk, the system adds a work note.

### Business Reason

A high SLA breach risk should be visible directly inside the Incident record. Work notes help create an audit trail and remind support teams to act quickly.

### Work Note Message

```text
SLA breach risk is high. Review assignment, priority, and next action immediately.
```

## Rule 3: Escalate Incident on High SLA Breach Risk

When SLA breach risk is high, the Incident is escalated by setting priority, urgency, and impact to critical values.

### Business Reason

If an Incident is close to breaching SLA, it may need stronger visibility and faster handling. Escalation helps support teams prioritize the record correctly.

### Expected Behavior

When SLA breach risk is high, the script sets:

```text
priority = 1
urgency = 1
impact = 1
```

The script also adds this work note:

```text
Incident escalated due to high SLA breach risk.
```

## Rule 4: Notify Assignment Group on SLA Risk

When SLA breach risk is high and an assignment group is present, the system adds a work note indicating that the group should be notified.

### Business Reason

The assignment group owns the work. If the Incident is at risk of breaching SLA, that group should have clear visibility inside the record.

### Work Note Message

```text
Assignment group notified for high SLA breach risk.
```

## Rule 5: Identify Breached SLA Records

A Background Script checks the `task_sla` table and identifies SLA records where `has_breached` is true.

### Business Reason

This helps admins and ITSM teams audit breached SLA records and understand which tasks or Incidents are missing service targets.

### Example Output

```text
Breached SLA found. Task: INC0010001 | SLA: Priority 1 Resolution SLA
```

## Rule 6: Validate Priority 1 Incidents with SLA Records

A Background Script checks active Priority 1 Incidents and verifies whether they have at least one related SLA record.

### Business Reason

Critical Incidents should have SLA visibility. If a Priority 1 Incident has no related SLA record, it may indicate a configuration, process, or data issue.

### Example Output

```text
Priority 1 Incident missing SLA record: INC0010001
```

## Rule 7: Count SLA Records Linked to Priority 1 Incidents

A Background Script counts how many SLA records are linked to each active Priority 1 Incident.

### Business Reason

This helps support teams and admins understand SLA coverage for critical Incidents.

### Example Output

```text
Incident INC0010001 has 2 SLA records.
```

## ITSM Value

These rules support stronger SLA Management by helping teams:

* Improve SLA visibility
* Reduce breach risk
* Escalate critical Incidents faster
* Improve Priority 1 Incident governance
* Identify breached SLA records
* Validate SLA coverage for critical Incidents
* Improve support accountability
* Strengthen Incident Management operations

## Summary

This project demonstrates how ServiceNow automation can support SLA Management and Incident escalation by identifying breach risks, validating SLA coverage, escalating critical Incidents, and creating better operational visibility for support teams.
