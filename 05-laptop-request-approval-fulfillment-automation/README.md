# Laptop Request Approval & Fulfillment Automation

This project demonstrates a production-style ServiceNow Service Catalog automation for laptop requests. It covers catalog item validation, requester-based approval routing, fulfillment task creation, and RITM lifecycle updates.

## Project Scenario

A user submits a Laptop Request from the Service Catalog. The request is validated before submission, routed to the Requested For user's manager for approval, and then sent to the Hardware Support team for fulfillment. If approved, a Catalog Task is created. If rejected, the RITM is closed incomplete.

## Focus Areas

* Service Catalog
* Catalog Client Scripts
* Catalog Item variables
* onSubmit validation
* onChange form behavior
* Flow Designer
* Manager approval routing
* Catalog Task creation
* RITM lifecycle updates
* Approval rejection handling
* Fulfillment process automation

## Catalog Item

**Catalog Item Name:** Laptop Request

## Variables Used

* requested_for
* laptop_type
* business_justification
* needed_by
* is_rush_request

## Scripts Included

* Combined required field validation
* Developer laptop justification validation
* Developer laptop mandatory justification behavior
* Standard laptop justification clearing
* Rush request justification validation
* Rush request Needed By validation

## Flow Designer Lifecycle

1. User submits Laptop Request
2. RITM is created
3. Flow Designer starts
4. Flow checks the Requested For user
5. Approval is routed to the Requested For user's manager
6. If approved, a Catalog Task is created for Hardware Support
7. Hardware Support fulfills the laptop request
8. When the Catalog Task is closed complete, the parent RITM is closed complete
9. If rejected, no Catalog Task is created and the RITM is closed incomplete

## Business Value

This automation improves request quality, reduces manual routing, ensures manager approval before fulfillment, and keeps the RITM lifecycle accurate from submission to closure.

## Purpose

The goal of this project is to demonstrate end-to-end Service Catalog automation using ServiceNow Catalog Client Scripts and Flow Designer. This project shows how catalog requests can be validated, approved, fulfilled, and closed using production-style ITSM patterns.
