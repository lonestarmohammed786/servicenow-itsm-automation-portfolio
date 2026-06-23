# CMDB Data Quality & CI Relationship Automation

This project demonstrates a production-style ServiceNow CMDB automation approach focused on improving Configuration Item data quality, preventing duplicate computer CIs, enforcing CI ownership, and improving Incident-to-CI visibility.

The project includes Business Rules and Background Scripts that validate key CMDB fields such as serial number, CI owner, support group, and affected Configuration Item. It also includes Incident automation that requires a Configuration Item for Priority 1 incidents and adds work notes when the affected CI changes.

## Project Goals

* Improve CMDB data quality for computer Configuration Items
* Prevent duplicate computer CIs using serial number validation
* Enforce required CMDB ownership fields
* Require affected CI information for Priority 1 incidents
* Add audit visibility when an Incident CI changes
* Identify existing CMDB records with missing key data
* Document CMDB relationship concepts and data quality rules

## ServiceNow Tables Used

* `cmdb_ci_computer`
* `cmdb_ci`
* `incident`
* `cmdb_rel_ci`

## Scripts Included

| Script Name                             | Purpose                                                 |
| --------------------------------------- | ------------------------------------------------------- |
| `require-computer-ci-data-quality.js`   | Validates required computer CI fields before save       |
| `prevent-duplicate-computer-ci.js`      | Prevents duplicate computer CI records by serial number |
| `priority-one-incident-ci-required.js`  | Requires Configuration Item for Priority 1 incidents    |
| `incident-ci-change-worknote.js`        | Adds work note when affected CI changes                 |
| `cmdb-data-quality-background-check.js` | Finds existing computer CIs with missing key data       |

## Key Concepts Practiced

* CMDB data quality
* Configuration Items
* CI ownership
* CI relationships
* Incident-to-CI mapping
* Business Rules
* Before Insert / Before Update logic
* GlideRecord queries
* `gs.nil()`
* `addNullQuery()`
* `current.setAbortAction(true)`
* Work notes automation

## Business Value

A clean CMDB helps IT teams understand what services, applications, servers, and devices are affected during incidents and changes. Poor CMDB data can cause weak troubleshooting, unclear ownership, duplicate records, and poor impact analysis.

This project shows how ServiceNow automation can enforce better CMDB discipline by validating required CI data, preventing duplicate records, and connecting incidents to affected Configuration Items.

## Project Outcome

By completing this project, I practiced how ServiceNow can be used to improve CMDB accuracy and support better ITSM processes. The automation logic helps ensure that important CI data is captured before records are saved and that incidents are properly connected to affected Configuration Items.
