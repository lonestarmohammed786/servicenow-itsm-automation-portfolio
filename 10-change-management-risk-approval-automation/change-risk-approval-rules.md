# Change Risk Approval Rules

## Purpose

This document explains the Change Management rules used in this project.

The goal is to improve Change Request quality before approval by enforcing required planning information, risk-related validation, and stronger audit notes.

Change Management is not only about moving a record through states. It is about protecting production environments from poorly planned changes.

## Rule 1: Require CI for High-Risk Change

If a Change Request is marked as high risk, the Configuration Item must be populated.

### Business Reason

A high-risk Change should clearly identify what system, application, service, or infrastructure component is affected.

Without a CI, it becomes difficult to understand impact, ownership, support responsibility, and service dependency.

### Expected Behavior

If the Change risk is high and the Configuration Item is empty, the save is blocked.

The user sees this error:

```text
Configuration Item is required for high-risk Changes.
```

## Rule 2: Require Implementation Plan Before Approval

Before a Change moves into approval, the implementation plan must be completed.

### Business Reason

The implementation plan explains how the Change will be performed.

Without it, approvers cannot properly evaluate the work, deployment steps, or risk.

### Expected Behavior

If the Change state changes to approval and the implementation plan is empty, the update is blocked.

The user sees this error:

```text
Implementation plan is required before submitting a Change for approval.
```

## Rule 3: Require Backout Plan Before Approval

Before a Change moves into approval, the backout plan must be completed.

### Business Reason

A backout plan explains how the team will restore service if the Change fails.

Without a backout plan, failed Changes can cause longer outages and poor recovery.

### Expected Behavior

If the Change state changes to approval and the backout plan is empty, the update is blocked.

The user sees this error:

```text
Backout plan is required before submitting a Change for approval.
```

## Rule 4: Require Test Plan Before Approval

Before a Change moves into approval, the test plan must be completed.

### Business Reason

The test plan explains how the team will confirm the Change worked successfully.

Without a test plan, the team may not know whether the Change achieved the expected result.

### Expected Behavior

If the Change state changes to approval and the test plan is empty, the update is blocked.

The user sees this error:

```text
Test plan is required before submitting a Change for approval.
```

## Rule 5: Require Emergency Change Justification

If a Change Request is marked as Emergency, justification must be provided.

### Business Reason

Emergency Changes bypass or accelerate normal Change processes. Because of that, they require clear justification explaining why urgent action is needed.

### Expected Behavior

If the Change type is Emergency and justification is empty, the save is blocked.

The user sees this error:

```text
Justification is required for Emergency Changes.
```

## Rule 6: Add Work Note When Change State Changes

When the Change state changes, the system adds a work note reminding the team to review key planning details.

### Business Reason

Change records move through different stages. Adding a work note creates an audit trail and reminds the team to review risk, approvals, implementation, backout, and testing.

### Work Note Message

```text
Change state changed. Review risk, approvals, implementation plan, backout plan, and test plan.
```

## Rule 7: Recommend Change Review from Problem Known Error

When a Problem is marked as a Known Error and workaround details are documented, the system adds a work note recommending Change Management review.

### Business Reason

A Known Error may have a workaround, but a permanent fix often requires a Change Request.

This rule connects Problem Management to Change Management.

### Work Note Message

```text
Known Error documented. Review whether a Change Request is needed for a permanent fix.
```

## Rule 8: Identify Changes Missing Planning Data

A Background Script identifies Change Requests missing important planning fields.

The script checks for:

* Missing implementation plan
* Missing backout plan
* Missing test plan

### Business Reason

This helps admins or ITSM teams audit existing Change Requests and identify records that may not meet planning standards.

## ITSM Value

These rules support stronger Change Management by helping teams:

* Reduce production risk
* Improve approval readiness
* Strengthen emergency Change governance
* Improve rollback planning
* Improve testing discipline
* Create better audit history
* Connect Known Errors to permanent fixes
* Support safer production deployment

## Summary

This project demonstrates how ServiceNow automation can support Change Management governance by enforcing planning discipline, validating risk information, requiring approval readiness, and connecting Problem Management outcomes to Change Management actions.
