# Update Set Lifecycle

## Project Name

Update Set Management & Deployment Validation Automation

## Purpose

This document explains the standard ServiceNow Update Set lifecycle from development to deployment validation.

The goal is to show how configuration changes should be captured, reviewed, moved, previewed, committed, and validated safely across ServiceNow instances.

## Standard Lifecycle

```text
Development → Test → Production
```

A safe Update Set lifecycle follows this path:

```text
Build
Capture
Review
Complete
Retrieve
Preview
Resolve
Commit
Validate
Document
```

## 1. Build in Development

All configuration changes should be built in the Development instance first.

Examples of configuration changes:

```text
Business Rules
Client Scripts
Script Includes
UI Policies
Fields
Form Layouts
Transform Maps
Flow Designer logic
Notifications
Service Catalog configuration
```

Before starting work, confirm the correct Update Set is selected.

## 2. Capture Changes in the Correct Update Set

ServiceNow captures many configuration changes in the selected Update Set.

Before making changes, always check:

```text
Current Update Set
Application Scope
Update Set name
Update Set description
```

If the wrong Update Set is selected, changes may be captured in the wrong place.

## 3. Review Update Set Contents

Before marking the Update Set as Complete, review the captured updates.

Check:

```text
Are all expected changes included?
Are there unrelated changes?
Are required records missing?
Are the names/descriptions clear?
Was the change tested in Development?
```

This helps prevent incomplete or messy deployments.

## 4. Mark Update Set as Complete

After the update records are reviewed and tested, mark the Update Set as Complete.

Simple rule:

```text
Do not mark Complete until the work is reviewed and tested.
```

Once the Update Set is Complete, it can be retrieved into another instance.

## 5. Retrieve Update Set in Target Instance

In the target instance, retrieve the completed Update Set from the source instance.

Common target sequence:

```text
Development → Test
Test → Production
```

After retrieving, do not commit immediately.

## 6. Preview Update Set

Preview the Update Set before committing.

Preview helps find problems such as:

```text
Missing dependencies
Skipped updates
Version conflicts
Application scope issues
Records changed in the target instance
```

Preview is a safety check before applying the changes.

## 7. Resolve Preview Problems

If Preview shows errors, warnings, or conflicts, review them carefully.

Possible actions:

```text
Accept the remote update
Skip the remote update
Manually resolve the conflict
Fix missing dependencies
Re-preview after resolution
Ask for review if needed
```

Simple rule:

```text
Do not commit blindly when preview problems exist.
```

## 8. Commit Update Set

After preview problems are resolved or approved, commit the Update Set.

Before committing, confirm:

```text
Correct target instance
Correct Update Set
Preview result reviewed
Backout plan ready
Deployment timing approved if required
```

## 9. Validate After Commit

After committing, test the deployed functionality in the target instance.

Example validation checks:

```text
Business Rule exists and is active
Client Script exists and is active
Script Include is available
Flow Designer flow is published
Transform Map is present
Form changes are visible
Feature works as expected
No unexpected system log errors
```

Commit is not the final step. Validation is the final step.

## 10. Document Deployment Result

After validation, document the result.

Deployment notes should include:

```text
Update Set name
Source instance
Target instance
Preview result
Commit result
Validation result
Issues found
Fixes applied
Backout notes
Deployment date
Owner/developer
```

## Backout and Recovery

If deployment causes an issue, follow the backout or recovery plan.

Examples:

```text
Disable affected Business Rule
Deactivate affected Client Script
Restore previous version if available
Move a fix Update Set
Notify stakeholders
Retest after recovery
Document the issue
```

## Example Lifecycle Summary

```text
1. Developer creates Update Set in Dev
2. Developer builds Business Rule and Client Script
3. Developer tests changes in Dev
4. Developer reviews Update Set contents
5. Developer marks Update Set Complete
6. Admin retrieves Update Set in Test
7. Admin previews Update Set
8. Preview errors are resolved
9. Admin commits Update Set
10. Tester validates functionality in Test
11. Same process is repeated for Production
```

## Key Takeaway

A strong Update Set lifecycle is not just about moving configuration.

It is about controlling risk:

```text
Right changes
Right Update Set
Right instance
Right preview
Right validation
Right recovery plan
```

This process helps ServiceNow teams deploy configuration changes safely and professionally.
