# Asset CMDB Notes

## Purpose

This document explains how hardware assets connect with Configuration Items in ServiceNow.

The goal is to show how Asset Management and CMDB data can work together to improve ownership tracking, support visibility, reporting accuracy, and lifecycle governance.

## Asset vs Configuration Item

A hardware asset and a Configuration Item may represent the same physical device, but they serve different purposes.

### Hardware Asset

A hardware asset focuses on ownership, inventory, assignment, lifecycle status, financial tracking, and physical asset management.

Example:

```text id="ijctfu"
Laptop asset tag: LAPTOP001
Assigned to: Mohammed Nadeem
Lifecycle status: In Use
```

### Configuration Item

A Configuration Item focuses on operational support, service impact, relationships, incidents, changes, and CMDB visibility.

Example:

```text id="zqzq1m"
CI name: Mohammed Laptop
Class: Computer
Assigned to: Mohammed Nadeem
Used in Incidents, Changes, and CMDB relationships
```

## Why Asset-to-CI Relationship Matters

When a hardware asset is linked to a CI, ServiceNow can connect physical inventory with operational ITSM data.

This helps teams answer questions such as:

* Who is assigned this device?
* Is this device connected to a CI?
* Has this CI had repeated Incidents?
* Is this CI related to any Changes?
* Is the asset lifecycle status accurate?
* Is the CMDB assignment aligned with asset ownership?

## Asset-to-CI Flow

```text id="4y1ky9"
Hardware Asset → Linked Configuration Item → Incidents / Changes / Reporting / Lifecycle Review
```

## Linked CI Field

In this project, the hardware asset uses the `ci` field to store the linked Configuration Item.

```text id="exty37"
alm_hardware.ci → cmdb_ci record
```

The `ci` field is a reference field. It stores the sys_id of the linked CI record.

That means:

```text id="3e8dmv"
current.ci = sys_id of the linked Configuration Item
```

## Syncing Asset Assigned To with CI Assigned To

This project includes a Business Rule that syncs the hardware asset Assigned to value with the linked CI Assigned to value.

### Example Before Update

```text id="hk3k7x"
Hardware Asset assigned_to: Ali
Linked CI assigned_to: Ali
```

### Asset Update

```text id="c8as5p"
Hardware Asset assigned_to changes to: Mohammed
```

### Expected Result

```text id="n60279"
Linked CI assigned_to also becomes: Mohammed
```

## Why Syncing Matters

If the hardware asset and linked CI show different assigned users, reports and support processes may become inaccurate.

Example problem:

```text id="dz7hdk"
Asset says laptop belongs to Mohammed
CI says laptop belongs to Ali
```

This can create confusion during:

* Incident support
* Asset recovery
* User offboarding
* CMDB reporting
* Hardware audits
* Change impact review

## Identifying Assets Without Linked CIs

This project also includes a Background Script that finds hardware assets where the `ci` field is empty.

Example output:

```text id="i8jfji"
Asset missing linked CI: LAPTOP001
```

This helps admins find assets that exist in Asset Management but are not connected to CMDB records.

## Reporting Value

This project includes reporting checks such as:

* Assets missing linked CIs
* Assigned asset count by user
* Retired asset review

These checks help teams improve asset visibility and identify data quality gaps.

## Business Value

Asset-to-CMDB alignment helps IT teams:

* Improve asset ownership accuracy
* Connect inventory records with operational support data
* Support user offboarding and asset recovery
* Improve Incident and Change visibility
* Strengthen CMDB data quality
* Reduce duplicate or mismatched asset records
* Improve reporting and audit readiness
* Maintain better lifecycle governance

## Summary

This project demonstrates practical understanding of the relationship between Asset Management and CMDB in ServiceNow.

It shows how automation can keep hardware asset ownership aligned with linked Configuration Items while also identifying asset-to-CMDB data quality gaps.
