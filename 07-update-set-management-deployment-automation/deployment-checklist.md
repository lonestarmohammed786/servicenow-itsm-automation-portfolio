# Deployment Checklist

## Project Name

Update Set Management & Deployment Validation Automation

## Purpose

This checklist is used to plan, review, move, commit, and validate ServiceNow Update Sets safely across instances.

The goal is to reduce deployment mistakes by making sure configuration changes are reviewed before movement, previewed before commit, and validated after deployment.

## Deployment Flow

```text
Development → Test → Production
```

## 1. Pre-Deployment Checklist

Before marking the Update Set as Complete, verify the following:

* Correct Update Set is selected
* Update Set name is clear and meaningful
* Update Set description explains the purpose of the change
* Only intended changes are captured
* No unrelated update records are included
* Configuration was tested in Development
* Required scripts, forms, fields, flows, or rules are included
* Developer reviewed the Update Set contents
* Backout or recovery plan is prepared

## 2. Update Set Naming Standard

Use clear naming that explains the module, change, and version.

Good examples:

```text
INC-DataQuality-CallerValidation-v1
CAT-LaptopRequest-ApprovalFlow-v1
IMP-AssetImport-TransformMap-v1
DEP-PostDeploymentValidation-v1
```

Avoid names like:

```text
test123
final final
random changes
Mac update
```

## 3. Update Set Description Standard

The Update Set description should include:

```text
What was changed
Why it was changed
Which module or process is affected
Any important testing notes
Any deployment or backout notes
```

Example:

```text
Adds Incident caller validation logic. Includes a before Business Rule that prevents Incident creation when caller_id is empty and displays a user-facing error message. Tested in Development using new Incident form submission.
```

## 4. Before Marking Complete

Check:

* Update Set contains expected update records
* No unrelated changes are included
* Business Rules are active if required
* Client Scripts are active if required
* Script Includes are included if used
* Flow Designer changes are published if needed
* Transform Maps or Import Set changes are included if applicable
* Form layout or field changes are captured if applicable
* Testing notes are documented

## 5. Retrieve in Target Instance

After the Update Set is marked Complete in Development:

```text
Retrieve Update Set in Test
Open Retrieved Update Set
Review details before preview
```

Do not commit immediately.

## 6. Preview Checklist

Before committing:

* Preview the Update Set
* Review all preview results
* Check for missing dependencies
* Check for skipped updates
* Check for version conflicts
* Check for application scope issues
* Resolve preview errors
* Re-preview after resolving issues
* Commit only after preview is clean or approved

## 7. Common Preview Problems

Preview may show issues such as:

```text
Missing dependency
Record already changed in target instance
Skipped update
Older version conflict
Application scope mismatch
Deleted or unavailable referenced record
```

Each issue should be reviewed before commit.

## 8. Commit Checklist

Before clicking Commit:

* Preview result has been reviewed
* Preview errors are resolved or approved
* Correct target instance is being used
* Deployment window is approved if required
* Backout plan is ready
* Required stakeholders are aware if needed

After commit:

* Confirm commit completed successfully
* Review commit messages or errors
* Check system logs if needed

## 9. Post-Deployment Validation

After committing the Update Set, validate the moved functionality.

Example checks:

* Business Rule exists and is active
* Client Script exists and is active
* Script Include exists and is accessible
* Flow Designer flow exists and is published
* Transform Map exists and is active
* Expected fields and form layout changes are visible
* Feature works as expected in the target instance
* No unexpected errors appear in logs

## 10. Backout / Recovery Plan

If deployment causes issues:

```text
Identify the affected configuration
Disable the broken Business Rule, Client Script, or Flow if needed
Restore previous version if available
Apply a fix Update Set if required
Notify the team or owner
Retest after recovery
Document the issue and resolution
```

## 11. Deployment Completion

Deployment is complete only when:

* Update Set is committed
* Functionality is tested in the target instance
* No critical errors are found
* Logs are reviewed if needed
* Deployment notes are updated
* Any issues or fixes are documented

## Best Practice Summary

```text
Check current Update Set before building
Keep Update Sets focused
Use clear names and descriptions
Preview before commit
Resolve conflicts before commit
Validate after commit
Have a backout plan
Document what was moved
```
