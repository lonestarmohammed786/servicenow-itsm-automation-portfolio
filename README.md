# ServiceNow ITSM Automation Portfolio

A production-style ServiceNow ITSM automation portfolio covering Business Rules, Client Scripts, GlideAjax, Script Includes, Scripted REST APIs, RESTMessageV2, Import Sets, Update Sets, and Incident Management automation.

## Overview

This repository contains ServiceNow automation projects built in a Personal Developer Instance (PDI). The projects are designed around real-world ITSM scenarios such as Incident data quality, form behavior automation, caller validation, inbound REST integrations, outbound REST notifications, update set movement, and import set processing.

The goal of this portfolio is to demonstrate practical ServiceNow Admin and Developer skills using production-style patterns.

## Technical Skills Covered

* ServiceNow ITSM
* Incident Management
* Business Rules
* Client Scripts
* GlideAjax
* Script Includes
* GlideRecord
* Scripted REST APIs
* RESTMessageV2
* JSON payload handling
* Reference field handling
* Work Notes and audit logging
* Import Sets and Transform Maps
* Update Sets and deployment practices

## Projects

### 01. Incident Data Quality Automation

Production-style Business Rules that improve Incident record quality by requiring caller data, copying caller email and department, blocking inactive callers, enforcing assignment group for Critical incidents, refreshing caller details, and adding work notes when key fields change.

### 02. Incident Form Behavior Automation

Client Script automation for improving Incident form behavior. Includes mandatory field handling, automatic impact and urgency setting, field clearing logic, short description keyword detection, and onSubmit validation.

### 03. Incident Caller Validation with GlideAjax

Real-time Incident form validation using GlideAjax, Client Scripts, and client-callable Script Includes. Validates inactive callers, missing manager or department data, active incidents for the caller, and inactive assignment groups.

### 04. Incident Integration Automation

Inbound and outbound ServiceNow REST integration project. Includes Scripted REST APIs for creating Incidents and adding work notes, RESTMessageV2 outbound notifications for Critical and Resolved Incidents, and integration logging through work notes and system logs.

### 05. Laptop Request Approval & Fulfillment Automation

End-to-end Service Catalog automation for laptop requests. Includes Catalog Client Scripts for request validation, laptop type rules, rush request handling, and Flow Designer lifecycle documentation for manager approval, Catalog Task creation, fulfillment routing, and RITM closure.

### 06. Import Set & Transform Map Automation

Production-style Import Set and Transform Map automation for importing laptop asset data from an external CSV file into ServiceNow. Includes required field validation, Coalesce-based duplicate prevention, active user lookup, model reference lookup, status value conversion, asset tag format validation, skipped-row logging, and source-to-target field mapping.


## Repository Structure

```text
```text
servicenow-itsm-automation-portfolio/
│
├── 01-incident-data-quality-automation/
├── 02-incident-form-behavior-automation/
├── 03-incident-caller-validation-glideajax/
├── 04-incident-integration-automation/
├── 05-laptop-request-approval-fulfillment-automation/
├── 06-import-set-transform-map-automation/
│
└── README.md
```

```

## Disclaimer

All scripts in this repository are sample portfolio scripts created in a ServiceNow Personal Developer Instance. No client, company, customer, or production data is included. These examples are intended to demonstrate ServiceNow scripting concepts and ITSM automation patterns.

## Author

Mohammed Nadeem
ServiceNow Administrator / ITSM Analyst / Junior ServiceNow Developer
