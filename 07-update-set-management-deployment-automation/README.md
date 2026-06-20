# Update Set Management & Deployment Validation Automation

## Overview

This project demonstrates a production-style ServiceNow Update Set management and deployment validation process.

The goal of this project is to show how ServiceNow configuration changes can be safely captured, reviewed, moved, previewed, committed, and validated across instances such as Development, Test, and Production.

This project focuses on real-world deployment discipline, including Update Set naming, preview checks, conflict handling, post-deployment validation, backout planning, and deployment documentation.

## Project Scenario

A ServiceNow developer builds configuration changes in a Development instance, such as Business Rules, Client Scripts, Script Includes, Flow Designer logic, or Transform Maps.

Before these changes are moved to Test or Production, they must be captured in the correct Update Set, reviewed, previewed, committed safely, and validated after deployment.

This project documents that lifecycle and includes sample validation scripts that can help confirm whether important configuration records were deployed successfully.

## Key Features

* Update Set lifecycle documentation
* Dev → Test → Production deployment flow
* Update Set naming and description standards
* Preview and commit checklist
* Preview error and conflict handling
* Post-deployment validation checklist
* Backout and recovery planning
* Sample validation scripts for deployed configuration
* Quality checklist for Update Set readiness

## Update Set Lifecycle

The standard deployment lifecycle is:

```text
Build in Development
Confirm correct Update Set is selected
Review captured changes
Mark Update Set as Complete
Retrieve Update Set in Test
Preview Update Set
Resolve preview errors or conflicts
Commit Update Set
Validate deployed functionality
Prepare backout or fix plan if needed
```

## What Update Sets Capture

Update Sets usually capture configuration changes such as:

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
```

## What Update Sets Usually Do Not Capture

Update Sets usually do not move transactional or runtime data such as:

```text
Incident records
Task records
User passwords
Asset records
Email inbox messages
Production customer data
```

## Deployment Safety Rules

Before moving an Update Set, the developer should confirm:

```text
The correct Update Set was selected before development
The Update Set has a clear name
The Update Set has a meaningful description
Only intended changes are included
The changes were tested in Development
The Update Set is marked Complete only after review
The target instance preview is clean before commit
Post-deployment testing is completed after commit
```

## Preview and Commit Process

Before committing an Update Set into a target instance, the Update Set should be previewed.

Preview helps identify:

```text
Missing dependencies
Skipped updates
Version conflicts
Application scope issues
Records already changed in the target instance
```

If preview problems appear, they should be reviewed and resolved before commit.

## Post-Deployment Validation

After committing an Update Set, the moved functionality should be tested in the target instance.

Example validation checks:

```text
Business Rule exists and is active
Client Script exists and is active
Script Include exists and is accessible
Flow Designer flow is present and published
Expected fields and form changes are visible
No unexpected errors appear in system logs
The actual feature works as expected
```

## Scripts Included

```text
scripts/post-deployment-validation-checklist.js
scripts/update-set-quality-checklist.js
```

## Sample Validation Script

Example post-deployment validation logic:

```javascript
var br = new GlideRecord('sys_script');
br.addQuery('name', 'Require Caller on Incident Create');
br.addQuery('active', true);
br.query();

if (br.next()) {
    gs.info('Business Rule validation passed.');
} else {
    gs.error('Business Rule validation failed.');
}
```

This type of script can help confirm whether an expected configuration record exists and is active after deployment.

## Skills Demonstrated

* ServiceNow Update Sets
* Deployment lifecycle planning
* Preview and commit process
* Preview error handling
* Post-deployment validation
* GlideRecord
* Background Script validation
* Configuration migration
* Backout planning
* ServiceNow release management basics

## Business Value

This project demonstrates safe ServiceNow deployment practices that reduce production risk.

By using clear Update Set naming, preview checks, validation scripts, and deployment checklists, teams can move configuration changes more confidently from Development to Test and Production.

This improves release quality, reduces deployment mistakes, and supports better change control in ServiceNow environments.
