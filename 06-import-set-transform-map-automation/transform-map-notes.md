# Transform Map Notes

## Project Name

Laptop Asset Import & Transform Map Automation

## Purpose

This Transform Map is designed to import laptop asset records from an external CSV file into ServiceNow while preventing duplicate, incomplete, or invalid asset records.

The Transform Map validates required fields, resolves reference fields, converts readable status values into ServiceNow internal values, and uses Coalesce to update existing assets instead of creating duplicates.

## Import Set Table

The imported CSV data is first loaded into an Import Set table.

Example Import Set fields:

```text
u_serial_number
u_asset_tag
u_model_name
u_assigned_to_email
u_status
```

## Target Table

The data is transformed into the laptop asset target table.

Example target fields:

```text
serial_number
asset_tag
model_id
assigned_to
install_status
```

## Field Mapping

| Import Set Field             | Target Field            | Notes                                 |
| ---------------------------- | ----------------------- | ------------------------------------- |
| `source.u_serial_number`     | `target.serial_number`  | Used as the Coalesce field            |
| `source.u_asset_tag`         | `target.asset_tag`      | Validated for asset tag format        |
| `source.u_model_name`        | `target.model_id`       | Requires lookup in `cmdb_model`       |
| `source.u_assigned_to_email` | `target.assigned_to`    | Requires lookup in `sys_user`         |
| `source.u_status`            | `target.install_status` | Converted from text to internal value |

## Coalesce Configuration

The Transform Map uses `serial_number` as the Coalesce field.

```text
source.u_serial_number → target.serial_number
Coalesce = true
```

## Coalesce Behavior

If a record already exists with the same serial number:

```text
Update existing asset
```

If no record exists with that serial number:

```text
Create new asset
```

This prevents duplicate laptop asset records during import.

## Required Field Validation

The following fields are required before a row can be imported:

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

A log message is added to explain why the row was skipped.

## Asset Tag Format Validation

The asset tag should follow the expected laptop asset tag format:

```text
LAP-1001
LAP-2045
LAP-5001
```

If the imported asset tag does not start with `LAP-`, the row is skipped and logged.

Example:

```javascript
if (source.u_asset_tag.indexOf('LAP-') != 0) {
    log.error('Skipped asset import row: invalid asset tag format - ' + source.u_asset_tag);
    ignore = true;
}
```

## Assigned To Reference Lookup

The imported file provides the assigned user as an email address.

Example:

```text
maria.smith@example.com
```

However, the target field `assigned_to` is a reference field and requires a user `sys_id`.

The Transform Script searches the `sys_user` table using:

```text
email = source.u_assigned_to_email
active = true
```

If an active user is found:

```javascript
target.assigned_to = userGR.getUniqueValue();
```

If no active user is found, the row is skipped and logged.

## Model Reference Lookup

The imported file provides the model as text.

Example:

```text
Dell Latitude 5420
```

However, the target field `model_id` is a reference field and requires a model `sys_id`.

The Transform Script searches the `cmdb_model` table using:

```text
name = source.u_model_name
```

If a matching model is found:

```javascript
target.model_id = modelGR.getUniqueValue();
```

If no matching model is found, the row is skipped and logged.

## Status Conversion

The imported file contains readable status values.

The Transform Script converts those values into ServiceNow `install_status` values:

| Imported Status | Target Value |
| --------------- | ------------ |
| `Installed`     | `1`          |
| `In Stock`      | `6`          |
| `Retired`       | `7`          |

If the imported status does not match one of the accepted values, the row is skipped and logged.

## Error Handling Strategy

Rows are skipped when:

```text
A required field is missing
The asset tag format is invalid
No active assigned user is found
The model name does not exist in cmdb_model
The status value is invalid
```

The script uses:

```javascript
log.error();
ignore = true;
```

This makes the import easier to troubleshoot because administrators can understand why a row did not import.

## Example Skipped Row Reasons

```text
Skipped asset import row: one or more required fields are missing.
Skipped asset import row: invalid asset tag format.
Skipped asset import row: no active user found.
Skipped asset import row: model not found.
Skipped asset import row: invalid status value.
```

## Best Practice Notes

* Use a stable unique field for Coalesce.
* For laptop assets, `serial_number` is usually the safest Coalesce field.
* Do not Coalesce on fields like `status`, `model_name`, or `assigned_to_email`.
* Reference fields should be set using sys_id, not display text.
* Invalid rows should be skipped and logged instead of silently ignored.
* Choice values should be converted into the correct ServiceNow internal values.
* Required fields should be validated before target records are created or updated.

## Project Outcome

This Transform Map design improves ServiceNow asset data quality by validating imported laptop asset records before they are inserted or updated.

It prevents duplicate assets, avoids invalid reference data, improves troubleshooting through logging, and reduces manual cleanup after imports.

