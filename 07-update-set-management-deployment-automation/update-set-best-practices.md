# Update Set Best Practices

## Project Name

Update Set Management & Deployment Validation Automation

## Purpose

This document outlines best practices for creating, managing, reviewing, and deploying ServiceNow Update Sets safely.

Update Sets are used to move configuration changes between ServiceNow instances, usually from Development to Test and then to Production.

## What Update Sets Are Used For

Update Sets are used to capture and move ServiceNow configuration changes such as:

```text
Business Rules
Client Scripts
Script Includes
UI Policies
Form Layouts
Fields
Tables
Transform Maps
Notifications
Flow Designer configuration
Service Catalog configuration
```

## What Update Sets Usually Do Not Move

Update Sets usually do not move transactional or production data such as:

```text
Incident records
Task records
User passwords
Asset records
Email inbox messages
Production customer data
```

## Best Practice 1: Select the Correct Update Set Before Building

Before making changes, always confirm the correct Update Set is selected.

Why this matters:

```text
Changes can be captured in the wrong Update Set
Deployment can miss required changes
Unrelated changes can get mixed together
Troubleshooting becomes harder
```

## Best Practice 2: Use Clear Update Set Names

Use names that explain the module, purpose, and version.

Good examples:

```text
INC-CallerValidation-BusinessRule-v1
CAT-LaptopRequest-ApprovalFlow-v1
IMP-AssetImport-TransformMap-v1
DEP-PostDeploymentValidation-v1
```

Avoid names like:

```text
test
final
my changes
random update
```

## Best Practice 3: Add a Meaningful Description

The Update Set description should explain:

```text
What changed
Why it changed
Which module is affected
What testing was done
Any deployment notes
Any backout notes
```

Example:

```text
Adds Incident caller validation logic. Includes a before Business Rule that prevents Incident creation when caller_id is empty. Tested in Development by creating new Incident records with and without caller values.
```

## Best Practice 4: Keep Update Sets Focused

One Update Set should focus on one logical change or feature.

Good example:

```text
One Update Set for Incident caller validation
One Update Set for Laptop Request approval flow
One Update Set for Asset Import Transform Map
```

Avoid mixing unrelated changes like:

```text
Incident Business Rule
Catalog Item changes
Dashboard changes
Random form layout updates
```

all in the same Update Set.

## Best Practice 5: Review Update Set Contents Before Marking Complete

Before marking an Update Set as Complete, review the captured update records.

Check for:

```text
Missing expected changes
Unrelated records
Duplicate updates
Incorrect application scope
Inactive configuration records
Unclear naming or description
```

## Best Practice 6: Test in Development Before Moving

Before moving the Update Set to another instance, test the functionality in Development.

Examples:

```text
Test the Business Rule condition
Test the Client Script behavior
Test the Script Include logic
Test the Flow Designer approval path
Test the Transform Map import behavior
```

## Best Practice 7: Preview Before Commit

Never commit an Update Set immediately after retrieving it.

Always:

```text
Preview the Update Set
Review preview results
Resolve preview errors
Re-preview if needed
Commit only after review
```

Preview helps identify:

```text
Missing dependencies
Skipped updates
Version conflicts
Application scope issues
Target instance record conflicts
```

## Best Practice 8: Resolve Preview Problems Carefully

If preview shows errors or conflicts:

```text
Do not ignore them
Review each issue
Understand why it appeared
Accept, skip, or resolve carefully
Ask for review if needed
Preview again after fixing
```

Simple rule:

```text
Preview problem = stop and review
```

## Best Practice 9: Validate After Commit

After committing the Update Set, verify the moved changes in the target instance.

Validation examples:

```text
Business Rule exists and is active
Client Script exists and is active
Script Include exists
Flow Designer flow is published
Transform Map exists
Form changes are visible
Feature works as expected
No unexpected errors appear in logs
```

## Best Practice 10: Maintain a Backout Plan

A backout plan explains how to recover if the deployment causes issues.

Examples:

```text
Disable the affected Business Rule
Deactivate the broken Client Script
Restore the previous version if available
Move a fix Update Set
Notify the owner or team
Retest after recovery
```

## Best Practice 11: Document the Deployment

Deployment notes should include:

```text
Update Set name
Source instance
Target instance
Preview result
Commit result
Testing result
Known issues
Backout plan
Deployment date
Owner or developer
```

## Best Practice 12: Do Not Store Sensitive Data in GitHub

Do not include:

```text
Client names
Customer data
Production screenshots with real data
User passwords
API keys
Access tokens
Company confidential information
```

Portfolio scripts should use sample names and safe example data only.

## Summary

A strong Update Set process follows this lifecycle:

```text
Select correct Update Set
Build configuration
Test in Development
Review Update Set contents
Mark Complete
Retrieve in target instance
Preview
Resolve errors
Commit
Validate
Document results
```

## Key Takeaway

Update Sets are not just a way to move changes.

They are part of a controlled deployment process that protects ServiceNow environments from broken, incomplete, or unrelated configuration changes.
