# ServiceNow ITSM Automation Portfolio

A production-style ServiceNow ITSM automation portfolio focused on real-world ServiceNow administration, scripting, process automation, and ITSM workflow improvement.

This portfolio demonstrates hands-on ServiceNow projects using Business Rules, Client Scripts, GlideAjax, Script Includes, Scripted REST APIs, RESTMessageV2, Flow Designer, Import Sets, Transform Maps, Update Sets, CMDB, Problem Management, Change Management, and ITSM process automation.

---

## Overview

This repository contains ServiceNow automation projects built in a ServiceNow Personal Developer Instance.

The projects are designed around real-world ITSM scenarios such as Incident data quality, form behavior automation, caller validation, REST integrations, Service Catalog fulfillment, Import Set processing, Update Set deployment validation, CMDB data quality, Problem Management root cause automation, and Change Management risk validation.

The goal of this portfolio is to demonstrate practical ServiceNow Administrator, ITSM Analyst, and Junior ServiceNow Developer skills using production-style patterns.

---

## Technical Skills Covered

* ServiceNow ITSM
* Incident Management
* Service Catalog
* Problem Management
* Change Management
* CMDB
* Configuration Items
* Business Rules
* Client Scripts
* GlideAjax
* Script Includes
* GlideRecord
* GlideAggregate basics
* Scripted REST APIs
* RESTMessageV2
* JSON payload handling
* Reference field handling
* Work notes and audit logging
* Flow Designer documentation
* Import Sets and Transform Maps
* Coalesce-based duplicate prevention
* Update Sets and deployment practices
* Background Scripts
* ITSM process automation

---

## Quick View

This portfolio shows hands-on ServiceNow work across core ITSM modules and automation areas.

It includes projects that demonstrate:

* Server-side scripting with Business Rules
* Client-side scripting with Client Scripts
* Real-time validation using GlideAjax and Script Includes
* Inbound and outbound REST integrations
* Service Catalog request lifecycle automation
* Import Set and Transform Map data processing
* Update Set deployment validation
* CMDB data quality enforcement
* Incident-to-CI visibility
* Problem Management root cause controls
* Change Management risk and approval readiness validation

---

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

### 07. Update Set Management & Deployment Validation Automation

Production-style ServiceNow Update Set management and deployment validation project. Includes Update Set lifecycle documentation, deployment checklist, best practices, preview and commit guidance, backout planning, and post-deployment validation scripts to verify that key configuration records were moved successfully.

### 08. CMDB Data Quality & CI Relationship Automation

Production-style ServiceNow CMDB automation project focused on improving Configuration Item data quality, preventing duplicate computer CIs, enforcing CI owner and support group requirements, requiring affected CI information for Priority 1 incidents, adding work notes when Incident CIs change, and using Background Scripts to identify incomplete CMDB records.

### 09. Problem Management Root Cause Automation

Production-style ServiceNow Problem Management automation project focused on detecting recurring Incidents, supporting root cause analysis, enforcing Known Error documentation, preventing duplicate active Problems, and improving the Incident-to-Problem lifecycle.

This project includes repeat Incident detection for the same Configuration Item, automatic Problem creation when recurring Incidents are found, duplicate active Problem prevention, root cause note validation before Problem closure, workaround validation for Known Errors, Problem state change work notes, and Background Scripts to count related Incidents and identify repeated CI issues.

### 10. Change Management Risk & Approval Automation

Production-style ServiceNow Change Management automation project focused on improving change planning, approval readiness, risk validation, emergency Change governance, and Problem-to-Change visibility.

This project includes CI enforcement for high-risk Changes, implementation plan validation, backout plan validation, test plan validation, emergency Change justification requirements, Change state work note automation, Known Error to Change recommendation logic, and Background Scripts to identify Change Requests missing key planning data.

---

## Repository Structure

```text
servicenow-itsm-automation-portfolio/
│
├── 01-incident-data-quality-automation/
├── 02-incident-form-behavior-automation/
├── 03-incident-caller-validation-glideajax/
├── 04-incident-integration-automation/
├── 05-laptop-request-approval-fulfillment-automation/
├── 06-import-set-transform-map-automation/
├── 07-update-set-management-deployment-automation/
├── 08-cmdb-data-quality-ci-relationship-automation/
├── 09-problem-management-root-cause-automation/
├── 10-change-management-risk-approval-automation/
│
└── README.md
```

---

## Portfolio Roadmap

Completed:

* Incident Management automation
* Incident form behavior automation
* GlideAjax caller validation
* REST integration automation
* Service Catalog request lifecycle automation
* Import Set and Transform Map automation
* Update Set deployment validation
* CMDB data quality automation
* Problem Management root cause automation
* Change Management risk and approval automation

Planned next:

* SLA Management & Escalation Automation
* Knowledge Management Publishing Automation
* Service Portal Request Experience Automation
* Reporting & Dashboard Automation

---

## Disclaimer

All scripts in this repository are sample portfolio scripts created in a ServiceNow Personal Developer Instance.

No client, company, customer, or production data is included.

These examples are intended to demonstrate ServiceNow scripting concepts, ITSM automation patterns, and practical ServiceNow administration/development skills.

---

## Author

**Mohammed Nadeem**
ServiceNow Administrator | ITSM Analyst | Junior ServiceNow Developer
