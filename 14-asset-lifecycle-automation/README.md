# Project 14: Asset Lifecycle Automation

## Overview

This project demonstrates production-style ServiceNow Asset Lifecycle automation focused on hardware asset assignment, lifecycle status control, CMDB alignment, and asset reporting.

The goal of this project is to show how ServiceNow can help IT teams manage hardware assets more cleanly as they move through their lifecycle.

## Business Scenario

In real IT environments, hardware assets such as laptops, desktops, monitors, and other devices need to be tracked carefully.

An asset should not be marked as In Use without an assigned user.
An asset should not be retired while it is still assigned to someone.
An asset should ideally be linked to a Configuration Item in the CMDB.
Asset lifecycle changes should be traceable for review and audit purposes.

This project uses ServiceNow scripting to enforce asset lifecycle rules, sync asset assignment with linked CIs, identify asset/CMDB gaps, and report on assigned or retired assets.

## Asset Lifecycle Flow Covered

In Stock → In Use → Returned → Retired / Disposed

## Features

* Requires Assigned to before a hardware asset is marked as In Use
* Prevents retirement of assets that are still assigned to users
* Syncs hardware asset Assigned to value with the linked Configuration Item
* Adds a work note when asset lifecycle status changes
* Identifies hardware assets missing linked CIs
* Counts assigned hardware assets grouped by user
* Identifies retired hardware assets for review
* Connects Asset Management with CMDB data quality

## Folder Structure

```text
14-asset-lifecycle-automation/
│
├── README.md
├── asset-lifecycle-rules.md
├── asset-cmdb-notes.md
│
└── scripts/
    ├── require-assigned-to-for-in-use-asset.js
    ├── prevent-retirement-of-assigned-asset.js
    ├── sync-asset-owner-to-ci.js
    ├── add-worknote-when-asset-state-changes.js
    ├── identify-assets-without-ci.js
    ├── assigned-asset-count-by-user.js
    └── retired-asset-background-check.js
```

## Scripts Included

### 1. require-assigned-to-for-in-use-asset.js

Prevents a hardware asset from being marked as In Use if the Assigned to field is empty.

### 2. prevent-retirement-of-assigned-asset.js

Prevents a hardware asset from being retired while it is still assigned to a user.

### 3. sync-asset-owner-to-ci.js

Updates the linked Configuration Item assigned_to field when the hardware asset Assigned to field changes.

### 4. add-worknote-when-asset-state-changes.js

Adds a work note when the hardware asset lifecycle status changes.

### 5. identify-assets-without-ci.js

Background Script that identifies hardware assets missing a linked Configuration Item.

### 6. assigned-asset-count-by-user.js

Uses GlideAggregate to count assigned hardware assets grouped by user.

### 7. retired-asset-background-check.js

Background Script that identifies retired hardware assets for review.

## ServiceNow Concepts Used

* Asset Management
* Hardware Asset Management basics
* CMDB
* Configuration Items
* Business Rules
* Before Insert Business Rules
* Before Update Business Rules
* GlideRecord
* GlideAggregate
* addQuery()
* addNullQuery()
* addNotNullQuery()
* addAggregate()
* getAggregate()
* groupBy()
* changes()
* changesTo()
* gs.nil()
* Work notes automation
* Asset lifecycle governance
* Asset-to-CI synchronization
* Background Scripts
* ITSM operational reporting

## Tables Used

* alm_hardware
* cmdb_ci

## Key Fields Used

### Hardware Asset Table

* install_status
* assigned_to
* ci
* asset_tag
* work_notes

### Configuration Item Table

* assigned_to

## Example Business Value

This automation helps IT teams maintain cleaner asset records and stronger lifecycle control.

Benefits include:

* Better asset assignment accuracy
* Reduced risk of retiring assets still assigned to users
* Improved Asset-to-CMDB alignment
* Better visibility into assets missing linked CIs
* Easier review of retired hardware assets
* Improved audit trail for lifecycle status changes
* Better reporting on asset ownership
* Stronger IT asset governance

## Portfolio Value

This project demonstrates practical understanding of how Asset Management connects with CMDB and ITSM operations.

It shows that ServiceNow automation can support not only Incidents, Changes, SLAs, and Knowledge, but also hardware asset lifecycle governance.

Recruiters and hiring managers can see that this project adds Asset Management experience to the portfolio and shows the ability to automate lifecycle controls, related record updates, and reporting checks.
