# Flow Designer Lifecycle

This document explains the Flow Designer logic used for the Laptop Request Approval & Fulfillment Automation project.

## Trigger

The flow starts when a Requested Item is created for the Laptop Request catalog item.

```text
Trigger:
Service Catalog → Requested Item Created

Condition:
Catalog Item is Laptop Request
```

## Approval Logic

After the RITM is created, the flow checks the Requested For user and routes approval to that user's manager.

```text
Approval:
Ask for Approval → Requested For's Manager
```

## Approved Path

If the manager approves the request, the flow continues to fulfillment.

```text
If Approved:
Create Catalog Task
Assignment Group: Hardware Support
Short Description: Fulfill laptop request
Description: Prepare, configure, and deliver the requested laptop.
Parent: Current RITM
```

## Fulfillment Logic

The Hardware Support team completes the Catalog Task after preparing and delivering the laptop.

```text
Catalog Task Closed Complete
→ Update parent RITM
→ Add comment: Laptop request fulfilled successfully.
→ Set RITM state to Closed Complete
→ Set stage to Complete
```

## Rejected Path

If the manager rejects the request, fulfillment should not start.

```text
If Rejected:
Do not create Catalog Task
Update parent RITM
Add comment: Laptop request rejected by manager.
Set RITM state to Closed Incomplete
Set stage to Request Cancelled
```

## Record Responsibilities

```text
REQ:
Overall request container

RITM:
Tracks the specific Laptop Request item

Catalog Task:
Tracks the actual fulfillment work assigned to Hardware Support
```

## Lifecycle Summary

```text
User submits Laptop Request
→ RITM is created
→ Flow routes approval to Requested For manager

If Approved:
→ Create Catalog Task
→ Hardware Support fulfills request
→ Catalog Task closes complete
→ Parent RITM closes complete

If Rejected:
→ No Catalog Task is created
→ Parent RITM closes incomplete
```

## Explanation

I built a Laptop Request Service Catalog automation where the submitted request creates a RITM and triggers a Flow Designer process. The flow routes approval to the Requested For user's manager. If approved, it creates a Catalog Task for Hardware Support to fulfill the laptop request. When the task is completed, the parent RITM is updated and closed complete. If the manager rejects the request, no fulfillment task is created and the RITM is closed incomplete with a rejection comment.
