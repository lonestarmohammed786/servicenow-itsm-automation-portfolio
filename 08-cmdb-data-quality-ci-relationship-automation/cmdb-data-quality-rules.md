# CMDB Data Quality Rules

This document defines the CMDB data quality rules used in this project.

## Why CMDB Data Quality Matters

The CMDB is only useful when the data inside it is accurate, complete, and trusted. If Configuration Items are missing owners, support groups, serial numbers, or relationships, IT teams may struggle to troubleshoot incidents, assess impact, or plan changes safely.

Poor CMDB data can cause:

* Duplicate Configuration Items
* Incorrect incident impact analysis
* Confusing ownership
* Weak reporting
* Delayed troubleshooting
* Poor change planning

## Computer CI Required Fields

For this project, computer Configuration Items should have the following fields populated:

| Field            | Purpose                                                                             |
| ---------------- | ----------------------------------------------------------------------------------- |
| `serial_number`  | Helps uniquely identify the device and prevent duplicates                           |
| `owned_by`       | Identifies the accountable CI owner                                                 |
| `support_group`  | Identifies the team responsible for support                                         |
| `install_status` | Shows whether the CI is installed, in stock, retired, or in another lifecycle state |

## Rule 1: Serial Number Required

Every computer CI should have a serial number.

Without a serial number, duplicate CI records may be created and asset tracking becomes unreliable.

## Rule 2: CI Owner Required

Every computer CI should have an owner.

Without an owner, accountability becomes unclear during incidents, audits, lifecycle reviews, or ownership reporting.

## Rule 3: Support Group Required

Every computer CI should have a support group.

Without a support group, incidents and operational tasks may not be routed to the correct team.

## Rule 4: Duplicate Serial Numbers Should Be Prevented

A computer CI should not be inserted if another computer CI already exists with the same serial number.

This helps keep the CMDB clean and prevents confusion during incident management, reporting, and asset tracking.

## Rule 5: Priority 1 Incidents Should Have a Configuration Item

Priority 1 incidents should always be linked to an affected Configuration Item.

This improves:

* Impact analysis
* Troubleshooting
* Ownership visibility
* Escalation
* Reporting

## Rule 6: CI Changes on Incidents Should Be Audited

If the affected CI changes on an Incident, the system should add a work note so the change is visible in the activity history.

This helps teams understand when the impact scope of an incident has changed.

## Summary

These rules help enforce cleaner CMDB records and stronger Incident-to-CI visibility. They also show how ServiceNow Business Rules and Background Scripts can support real ITSM data quality practices.
