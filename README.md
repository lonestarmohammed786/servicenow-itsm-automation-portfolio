# ServiceNow ITSM Automation Portfolio

A production-style ServiceNow ITSM automation portfolio focused on real-world ServiceNow administration, scripting, process automation, reporting, asset lifecycle governance, access governance, Major Incident Management, scheduled automation, notifications, employee service request automation, and ITSM workflow improvement.

This portfolio demonstrates hands-on ServiceNow projects using Business Rules, Client Scripts, GlideAjax, Script Includes, Scripted REST APIs, RESTMessageV2, Flow Designer, Import Sets, Transform Maps, Update Sets, CMDB, Problem Management, Change Management, SLA Management, Knowledge Management, Reporting & Dashboard Automation, Asset Lifecycle Automation, Security & Access Control Automation, Major Incident Management, Scheduled Jobs & Notifications Automation, HR / Employee Service Request Automation, and ITSM process automation.

## Overview

This repository contains ServiceNow automation projects built in a ServiceNow Personal Developer Instance.

The projects are designed around real-world ITSM scenarios such as Incident data quality, form behavior automation, caller validation, REST integrations, Service Catalog fulfillment, Import Set processing, Update Set deployment validation, CMDB data quality, Problem Management root cause automation, Change Management risk validation, SLA escalation automation, Knowledge Management publishing automation, ITSM reporting/dashboard preparation, Asset Lifecycle automation, ServiceNow access governance, Major Incident Management automation, Scheduled Jobs & Notifications automation, and HR / Employee Service Request automation.

The goal of this portfolio is to demonstrate practical ServiceNow Administrator, ITSM Analyst, and Junior ServiceNow Developer skills using production-style patterns.

## Technical Skills Covered

* ServiceNow ITSM
* Incident Management
* Major Incident Management
* Service Catalog
* Employee Service Request Automation
* Problem Management
* Change Management
* SLA Management
* Knowledge Management
* Reporting & Dashboard Automation
* Asset Lifecycle Automation
* Security & Access Control Automation
* Scheduled Jobs & Notifications Automation
* Hardware Asset Management basics
* CMDB
* Configuration Items
* User, group, and role validation
* Employee request validation
* Manager approval readiness
* Department-based request routing
* Major Incident priority validation
* Assignment group validation
* Business Rules
* Client Scripts
* GlideAjax
* Script Includes
* GlideRecord
* GlideAggregate basics
* Nested GlideRecord queries
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
* Scheduled Script Execution logic
* Notification-style automation
* SLA breach validation
* Escalation logic
* Knowledge publishing validation
* Knowledge expiry review
* Incident-to-Knowledge automation
* Asset-to-CI synchronization
* Asset lifecycle validation
* Operational metrics scripting
* Dashboard metric preparation
* ITSM reporting logic
* Access governance reporting
* Major Incident service impact reporting
* Scheduled ITSM summary reporting
* Employee request summary reporting
* Reusable helper functions
* ITSM process automation

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
* SLA Management visibility and escalation automation
* Knowledge Management publishing readiness and article quality validation
* Incident-to-Knowledge automation for reusable support documentation
* Reporting and dashboard preparation using GlideAggregate
* Operational metrics for Incidents, SLAs, Changes, Knowledge, and CIs
* Asset lifecycle governance and hardware asset validation
* Asset-to-CMDB relationship checks and synchronization
* User, group, and role access governance checks
* Inactive user, group membership, and elevated access audit scripts
* Major Incident priority, assignment, communication, and resolution validation
* Major Incident service impact reporting using GlideAggregate
* Scheduled checks for Critical Incidents, breached SLAs, expired Knowledge Articles, inactive users, and unassigned assets
* Employee request validation, manager approval readiness, department routing, and inactive employee request blocking
* Background Scripts for operational audits, reporting, access review, Major Incident review, scheduled review, employee request reporting, and data quality checks

## Projects

## 01. Incident Data Quality Automation

Production-style Business Rules that improve Incident record quality by requiring caller data, copying caller email and department, blocking inactive callers, enforcing assignment group for Critical incidents, refreshing caller details, and adding work notes when key fields change.

## 02. Incident Form Behavior Automation

Client Script automation for improving Incident form behavior. Includes mandatory field handling, automatic impact and urgency setting, field clearing logic, short description keyword detection, and onSubmit validation.

## 03. Incident Caller Validation with GlideAjax

Real-time Incident form validation using GlideAjax, Client Scripts, and client-callable Script Includes. Validates inactive callers, missing manager or department data, active incidents for the caller, and inactive assignment groups.

## 04. Incident Integration Automation

Inbound and outbound ServiceNow REST integration project. Includes Scripted REST APIs for creating Incidents and adding work notes, RESTMessageV2 outbound notifications for Critical and Resolved Incidents, and integration logging through work notes and system logs.

## 05. Laptop Request Approval & Fulfillment Automation

End-to-end Service Catalog automation for laptop requests. Includes Catalog Client Scripts for request validation, laptop type rules, rush request handling, and Flow Designer lifecycle documentation for manager approval, Catalog Task creation, fulfillment routing, and RITM closure.

## 06. Import Set & Transform Map Automation

Production-style Import Set and Transform Map automation for importing laptop asset data from an external CSV file into ServiceNow. Includes required field validation, Coalesce-based duplicate prevention, active user lookup, model reference lookup, status value conversion, asset tag format validation, skipped-row logging, and source-to-target field mapping.

## 07. Update Set Management & Deployment Validation Automation

Production-style ServiceNow Update Set management and deployment validation project. Includes Update Set lifecycle documentation, deployment checklist, best practices, preview and commit guidance, backout planning, and post-deployment validation scripts to verify that key configuration records were moved successfully.

## 08. CMDB Data Quality & CI Relationship Automation

Production-style ServiceNow CMDB automation project focused on improving Configuration Item data quality, preventing duplicate computer CIs, enforcing CI owner and support group requirements, requiring affected CI information for Priority 1 incidents, adding work notes when Incident CIs change, and using Background Scripts to identify incomplete CMDB records.

## 09. Problem Management Root Cause Automation

Production-style ServiceNow Problem Management automation project focused on detecting recurring Incidents, supporting root cause analysis, enforcing Known Error documentation, preventing duplicate active Problems, and improving the Incident-to-Problem lifecycle.

This project includes repeat Incident detection for the same Configuration Item, automatic Problem creation when recurring Incidents are found, duplicate active Problem prevention, root cause note validation before Problem closure, workaround validation for Known Errors, Problem state change work notes, and Background Scripts to count related Incidents and identify repeated CI issues.

## 10. Change Management Risk & Approval Automation

Production-style ServiceNow Change Management automation project focused on improving change planning, approval readiness, risk validation, emergency Change governance, and Problem-to-Change visibility.

This project includes CI enforcement for high-risk Changes, implementation plan validation, backout plan validation, test plan validation, emergency Change justification requirements, Change state work note automation, Known Error to Change recommendation logic, and Background Scripts to identify Change Requests missing key planning data.

## 11. SLA Management & Escalation Automation

Production-style ServiceNow SLA Management automation project focused on SLA visibility, breach prevention, escalation handling, and Incident support process improvement.

This project includes SLA review note validation for Priority 1 Incidents, high SLA breach risk work note automation, Incident escalation logic, assignment group SLA risk notification notes, breached SLA Background Scripts, active Priority 1 Incident SLA validation, and SLA count checks for critical Incidents.

## 12. Knowledge Management Publishing Automation

Production-style ServiceNow Knowledge Management automation project focused on article quality, publishing readiness, reusable documentation, and Incident-to-Knowledge process improvement.

This project includes Knowledge Article short description validation, article body validation before publishing, Knowledge category validation, published article work note automation, resolved Incident Knowledge recommendations, automatic draft Knowledge Article creation from resolved Incidents, draft article review checks, and expired Knowledge Article validation using Background Scripts.

## 13. Reporting & Dashboard Automation

Production-style ServiceNow reporting and dashboard automation project focused on operational visibility, ITSM metrics, and dashboard preparation using GlideAggregate and Background Scripts.

This project includes open Critical Incident counts, Incident volume by assignment group, breached SLA counts, pending Change approval counts, expired Knowledge Article counts, repeated CI Incident reporting, and a monthly ITSM metrics summary using reusable helper function logic.

## 14. Asset Lifecycle Automation

Production-style ServiceNow Asset Lifecycle automation project focused on hardware asset assignment, lifecycle status control, CMDB alignment, and asset reporting.

This project includes Assigned to validation before assets are marked In Use, retirement prevention for assigned assets, Asset-to-CI assigned user synchronization, asset lifecycle work note automation, hardware assets missing linked CI checks, assigned asset counts by user using GlideAggregate, and retired asset review scripts.

## 15. ServiceNow Security & Access Control Automation

Production-style ServiceNow security and access governance automation project focused on user validation, group membership checks, role assignment controls, and access audit reporting.

This project includes blocking Incident assignment to inactive users, validating assigned user membership in selected assignment groups, preventing role assignments to inactive users, identifying inactive users with roles, counting users by role using GlideAggregate, auditing inactive users still in groups, and identifying elevated/admin-style access for review.

## 16. Major Incident Management Automation

Production-style ServiceNow Major Incident Management automation project focused on high-impact Incident governance, priority validation, assignment ownership, communication discipline, resolution review, and service impact reporting.

This project includes Priority 1 and Priority 2 validation for Major Incidents, assignment group requirement enforcement, work note validation for Critical Major Incidents, close note validation before resolution, active Major Incident audit checks, and Major Incident counts grouped by Business Service using GlideAggregate.

## 17. Scheduled Jobs & Notifications Automation

Production-style ServiceNow scheduled automation project focused on recurring ITSM checks, notification-style reminders, operational review, and admin reporting.

This project includes daily Critical Incident review checks, breached SLA reminder checks, expired Knowledge Article checks, inactive user access review reminders, unassigned In Use asset review checks, and a scheduled ITSM summary report using GlideAggregate.

## 18. HR / Employee Service Request Automation

Production-style ServiceNow employee service request automation project focused on required field validation, manager approval readiness, equipment request handling, department-based routing, inactive employee request blocking, and request reporting.

This project includes Requested For, Short Description, and Assignment Group validation, manager validation for approval routing, equipment-related request validation, department-based routing work notes, inactive employee request blocking, and employee request counts grouped by assignment group using GlideAggregate.

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
├── 11-sla-management-escalation-automation/
├── 12-knowledge-management-publishing-automation/
├── 13-reporting-dashboard-automation/
├── 14-asset-lifecycle-automation/
├── 15-security-access-control-automation/
├── 16-major-incident-management-automation/
├── 17-scheduled-jobs-notifications-automation/
├── 18-hr-employee-service-request-automation/
│
└── README.md
```

## Portfolio Roadmap

## Completed

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
* SLA Management and escalation automation
* Knowledge Management publishing automation
* Reporting and dashboard automation
* Asset Lifecycle automation
* ServiceNow Security and Access Control automation
* Major Incident Management automation
* Scheduled Jobs and Notifications automation
* HR / Employee Service Request automation

## Disclaimer

All scripts in this repository are sample portfolio scripts created in a ServiceNow Personal Developer Instance.

No client, company, customer, or production data is included.

These examples are intended to demonstrate ServiceNow scripting concepts, ITSM automation patterns, reporting logic, asset lifecycle governance, access governance, Major Incident Management, scheduled automation, notification-style review logic, employee service request automation, and practical ServiceNow administration/development skills.

## Author

Mohammed Nadeem
ServiceNow Administrator | ITSM Analyst | Junior ServiceNow Developer


