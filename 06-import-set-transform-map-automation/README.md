# Laptop Asset Import & Transform Map Automation

## Overview

This project demonstrates a production-style ServiceNow Import Set and Transform Map automation for importing laptop asset data from an external source into ServiceNow.

The goal of this project is to show how imported asset data can be validated, transformed, mapped, and safely loaded into the target asset table while preventing duplicate or incomplete records.

This project focuses on practical ServiceNow data import concepts such as Import Sets, Transform Maps, Coalesce, reference field lookups, choice value conversion, required field validation, and import error handling.

## Project Scenario

An organization receives laptop asset data from an external CSV file. The file contains laptop information such as serial number, asset tag, model name, assigned user email, and status.

Before this data is inserted or updated in ServiceNow, the Transform Map validates the data and applies business rules to ensure only clean and useful records are imported.

## Imported Fields

The external file contains the following fields:

```text
serial_number
asset_tag
model_name
assigned_to_email
status
```

These fields are loaded into an Import Set table as:

```text
source.u_serial_number
source.u_asset_tag
source.u_model_name
source.u_assigned_to_email
source.u_status
```

## Target Fields

The data is transformed and mapped into the target asset table using fields such as:

```text
target.serial_number
target.asset_tag
target.model_id
target.assigned_to
target.install_status
```

## Key Features

* Validates required import fields before inserting or updating records
* Skips rows with missing required data
* Uses Coalesce on serial number to prevent duplicate laptop asset records
* Looks up active users in `sys_user` using assigned user email
* Looks up laptop models in `cmdb_model` using model name
* Converts imported status text into ServiceNow `install_status` values
* Logs skipped rows with clear error messages
* Demonstrates real-world Transform Map scripting patterns

## Required Field Validation

The Transform Script checks that the following imported fields are not empty:

```text
serial_number
asset_tag
model_name
assigned_to_email
status
```

If any required field is missing, the row is skipped using:

```javascript
ignore = true;
```

A log message is also added so administrators can understand why the row was skipped.

## Coalesce Logic

The Transform Map uses `serial_number` as the Coalesce field.

```text
source.u_serial_number → target.serial_number
Coalesce = true
```

This means:

```text
If the serial number already exists, update the existing asset.
If the serial number does not exist, create a new asset.
```

Using serial number as the Coalesce field helps prevent duplicate laptop asset records.

## Reference Field Lookup

The project includes reference field lookup logic for:

### Assigned To

The imported file provides:

```text
assigned_to_email
```

But the target field:

```text
target.assigned_to
```

requires a user `sys_id`.

The Transform Script searches the `sys_user` table where:

```text
email = source.u_assigned_to_email
active = true
```

If an active user is found, the script sets:

```javascript
target.assigned_to = userGR.getUniqueValue();
```

If no active user is found, the row is skipped.

### Model

The imported file provides:

```text
model_name
```

But the target field:

```text
target.model_id
```

requires a model `sys_id`.

The Transform Script searches the `cmdb_model` table where:

```text
name = source.u_model_name
```

If a matching model is found, the script sets:

```javascript
target.model_id = modelGR.getUniqueValue();
```

If no model is found, the row is skipped.

## Status Conversion

The imported file contains readable status values.

The Transform Script converts them into ServiceNow `install_status` values:

```text
Installed → 1
In Stock  → 6
Retired   → 7
```

If the imported status does not match an accepted value, the row is skipped and logged.

## Error Handling

This project uses logging to make skipped rows easier to troubleshoot.

Examples of skipped-row reasons:

```text
Required field missing
Invalid asset tag format
No active user found
Model not found
Invalid status value
```

Example logging pattern:

```javascript
log.error('Skipped asset import row: invalid status value - ' + source.u_status);
ignore = true;
```

## Scripts Included

```text
scripts/asset-import-validation-onbefore.js
scripts/assigned-to-email-reference-lookup.js
scripts/model-name-reference-lookup.js
scripts/status-value-conversion.js
```

## Skills Demonstrated

* ServiceNow Import Sets
* Transform Maps
* Coalesce configuration
* onBefore Transform Scripts
* GlideRecord queries
* Reference field sys_id lookup
* Data validation
* Choice value conversion
* Import error handling
* Duplicate prevention
* ITSM asset data quality automation

## Business Value

This automation improves asset data quality by preventing incomplete, duplicate, or invalid laptop asset records from being imported into ServiceNow.

It helps IT teams maintain cleaner asset records, improves reporting accuracy, supports better asset ownership tracking, and reduces manual cleanup after data imports.

