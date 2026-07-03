# Asset Lifecycle Rules

## Purpose

This document explains the asset lifecycle rules used in this project.

The goal is to improve hardware asset data quality, lifecycle control, assignment accuracy, and audit readiness in ServiceNow.

## Rule 1: Require Assigned To Before Asset Is Marked In Use

A hardware asset should not be marked as In Use unless it is assigned to a user.

### Table

```text id="3wck9q"
alm_hardware
```

### Condition

```text id="xb1v1v"
install_status = 1
assigned_to is empty
```

### Business Reason

If an asset is marked as In Use without an assigned user, the organization may not know who has the device.

This can create tracking issues, audit problems, and ownership confusion.

### Expected Error Message

```text id="e9925z"
Assigned to is required before marking an asset as In Use.
```

## Rule 2: Prevent Retirement of Assigned Assets

A hardware asset should not be retired while it is still assigned to a user.

### Table

```text id="9d5ol5"
alm_hardware
```

### Condition

```text id="nps5im"
install_status changes to 7
assigned_to is not empty
```

### Business Reason

If an assigned asset is retired, the system may incorrectly show that the asset is no longer active while it is still in someone’s possession.

This can create asset recovery, compliance, and inventory accuracy issues.

### Expected Error Message

```text id="nf8orv"
Asset cannot be retired while it is still assigned to a user.
```

## Rule 3: Sync Asset Assigned To with Linked CI

When a hardware asset is assigned to a different user, the linked Configuration Item should also be updated.

### Tables

```text id="233w97"
alm_hardware
cmdb_ci
```

### Condition

```text id="mkx1s1"
Asset assigned_to changes
Asset has linked CI
```

### Business Reason

Asset records and Configuration Items are closely related.

If the asset says one user owns the device but the CI shows another user, reports and support processes can become inaccurate.

Syncing the Assigned to value helps keep Asset Management and CMDB data aligned.

### Expected Behavior

```text id="w8q6b9"
Hardware Asset assigned_to changes
Linked CI assigned_to is updated to match the asset assigned_to
```

## Rule 4: Add Work Note When Asset Lifecycle State Changes

When the asset lifecycle status changes, the system adds a work note.

### Table

```text id="0483s6"
alm_hardware
```

### Condition

```text id="0o4d3y"
install_status changes
```

### Business Reason

Asset lifecycle changes should be traceable.

A work note creates a basic audit trail and reminds support teams to review assignment, CI link, and lifecycle status.

### Work Note Message

```text id="qz6xvc"
Asset lifecycle state changed. Review assignment, CI link, and lifecycle status.
```

## Rule 5: Identify Assets Missing Linked CIs

Hardware assets should ideally be linked to Configuration Items.

### Table

```text id="a1dfcb"
alm_hardware
```

### Condition

```text id="wuwda4"
ci is empty
```

### Business Reason

When an asset is not linked to a CI, it becomes harder to connect the physical device with support tickets, CMDB relationships, and operational impact.

This check helps admins identify asset-to-CMDB relationship gaps.

### Example Output

```text id="0pcohk"
Asset missing linked CI: LAPTOP001
```

## Rule 6: Count Assigned Assets by User

This reporting check counts hardware assets grouped by assigned user.

### Table

```text id="j8p1k5"
alm_hardware
```

### Condition

```text id="zsvq63"
assigned_to is not empty
```

### Grouped By

```text id="a0og6v"
assigned_to
```

### Business Reason

This helps IT teams understand how many assets are assigned to each user.

It can support inventory reviews, user offboarding, asset recovery, and audit preparation.

### Example Output

```text id="6a4knj"
Mohammed Nadeem: 2
John Smith: 4
Sarah Lee: 1
```

## Rule 7: Identify Retired Hardware Assets

This check identifies hardware assets marked as retired.

### Table

```text id="dyftyc"
alm_hardware
```

### Condition

```text id="e1qepx"
install_status = 7
```

### Business Reason

Retired assets may need review for disposal, recovery confirmation, inventory cleanup, or financial tracking.

This script helps admins quickly identify retired assets.

### Example Output

```text id="lggo92"
Retired asset found: LAPTOP001
```

## ITSM Value

These rules help improve asset lifecycle governance by supporting:

* Cleaner hardware asset records
* Better user assignment tracking
* Stronger Asset-to-CMDB alignment
* Fewer lifecycle status mistakes
* Better audit visibility
* Easier asset recovery review
* Improved retired asset tracking
* More reliable asset ownership reporting

## Summary

This project demonstrates how ServiceNow scripting can support Asset Management by enforcing lifecycle rules, preventing inaccurate retirement, syncing asset ownership with CIs, and using Background Scripts and GlideAggregate for asset reporting.
