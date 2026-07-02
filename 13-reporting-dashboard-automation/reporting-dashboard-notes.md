# Reporting Dashboard Notes

## Purpose

This document explains how reporting and dashboard automation fits into this ServiceNow project.

The goal is to show how ServiceNow data can be used to support operational visibility, ITSM performance tracking, and management-level decision-making.

## Why Reporting Matters in ServiceNow

ServiceNow is not only used to create and update tickets.

It is also used to answer important operational questions such as:

* How many critical Incidents are open?
* Which assignment groups have the highest workload?
* How many SLA records have breached?
* How many Changes are waiting for approval?
* Which Knowledge Articles are outdated?
* Which Configuration Items are involved in repeated Incidents?

These questions help support teams understand where attention is needed.

## Reporting Flow

This project follows this reporting flow:

```text id="iqbdge"
ITSM Records → Metric Calculation → Summary Output → Dashboard Preparation → Operational Review
```

## Why GlideAggregate Is Used

GlideAggregate is useful when the goal is to calculate totals or grouped results instead of reading every record one by one.

In this project, GlideAggregate is used to:

* Count active Critical Incidents
* Count Incidents by assignment group
* Count breached SLA records
* Count pending Changes
* Count expired Knowledge Articles
* Count Incidents grouped by Configuration Item

## GlideRecord vs GlideAggregate

### GlideRecord

GlideRecord is best when the script needs to work with individual records.

Example use cases:

* Update a record
* Read field values
* Add work notes
* Create related records
* Validate a record before saving

### GlideAggregate

GlideAggregate is best when the script needs reporting-style results.

Example use cases:

* Count records
* Group records by a field
* Summarize operational data
* Prepare dashboard metrics
* Identify workload distribution

## Example Metrics Covered

### Open Critical Incidents

This metric shows how many Priority 1 active Incidents currently exist.

It helps teams understand immediate operational risk.

### Incidents by Assignment Group

This metric shows how active Incident volume is distributed across support teams.

It can help identify overloaded teams or areas needing extra support.

### Breached SLA Records

This metric shows how many SLA records have already breached.

It supports SLA review, service quality monitoring, and escalation analysis.

### Pending Change Approvals

This metric shows how many Change Requests are waiting in the approval or authorization stage.

It helps teams identify Change bottlenecks.

### Expired Knowledge Articles

This metric shows how many published Knowledge Articles are past their valid-to date.

It helps teams maintain accurate and reliable support documentation.

### Repeated CI Incidents

This metric shows how many active Incidents are linked to each Configuration Item.

It helps identify unstable CIs or recurring service issues.

## Reusable Function Pattern

This project includes a reusable helper function for count-based reporting.

Instead of repeating the same GlideAggregate logic multiple times, the script uses a function like this:

```javascript id="lrgkz4"
function getCount(tableName, fieldName, fieldValue) {
    var ga = new GlideAggregate(tableName);
    ga.addQuery(fieldName, fieldValue);
    ga.addAggregate('COUNT');
    ga.query();

    if (ga.next()) {
        return ga.getAggregate('COUNT');
    }

    return 0;
}
```

This makes the script cleaner, easier to read, and easier to reuse.

## Dashboard Connection

The scripts in this project can support dashboard ideas such as:

* Critical Incident count
* Breached SLA count
* Open Incident workload by group
* Pending Change approval count
* Expired Knowledge Article count
* Repeated Incident count by CI

In a real ServiceNow environment, similar metrics can be displayed using reports, Performance Analytics, dashboards, or scheduled reporting.

## Business Value

Reporting and dashboard automation helps teams:

* Monitor operational health
* Identify risks earlier
* Understand team workload
* Track SLA performance
* Review Change approval bottlenecks
* Maintain Knowledge quality
* Identify repeated CI issues
* Make better ITSM decisions

## Summary

This project demonstrates practical ServiceNow reporting and dashboard preparation skills using GlideAggregate, Background Scripts, and ITSM metric logic.

It shows the ability to turn ServiceNow records into useful operational insights for support teams and managers.
