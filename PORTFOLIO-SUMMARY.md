# ServiceNow ITSM Automation Portfolio Summary

## Portfolio Overview

This portfolio contains production-style ServiceNow ITSM automation projects built in a ServiceNow Personal Developer Instance.

The goal of this portfolio is to demonstrate practical ServiceNow Administrator, ITSM Analyst, Junior ServiceNow Developer, and Enterprise IT Support skills through real-world automation scenarios.

The projects focus on ServiceNow administration, scripting, ITSM process improvement, data quality, reporting, workflow logic, platform governance, and operational visibility.

## Target Roles

This portfolio is aligned with the following roles:

* ServiceNow Administrator
* ITSM Analyst
* Junior ServiceNow Developer
* ServiceNow Support Analyst
* Enterprise IT Support Engineer
* IT Support / Help Desk Analyst

## Core Skills Demonstrated

This portfolio demonstrates hands-on experience with:

* ServiceNow ITSM
* Incident Management
* Major Incident Management
* Problem Management
* Change Management
* SLA Management
* Knowledge Management
* Service Catalog
* Employee Service Request Automation
* CMDB
* Asset Lifecycle Automation
* Access Governance
* Scheduled Jobs
* Notification-style automation
* Reporting and dashboard preparation
* Business Rules
* Client Scripts
* GlideAjax
* Script Includes
* GlideRecord
* GlideAggregate
* REST APIs
* RESTMessageV2
* Import Sets
* Transform Maps
* Update Sets
* Background Scripts
* Reference field handling
* Work notes and audit logging
* ServiceNow process documentation

## Best Projects to Review First

For recruiters, hiring managers, or interviewers, the strongest projects to review first are:

### 1. Incident Data Quality Automation

Shows strong ServiceNow admin fundamentals using Business Rules to improve Incident data quality, caller validation, assignment group enforcement, and work note tracking.

### 2. Incident Caller Validation with GlideAjax

Demonstrates real-time form validation using Client Scripts, GlideAjax, and Script Includes.

This is one of the strongest projects for showing practical ServiceNow scripting.

### 3. Incident Integration Automation

Shows inbound and outbound REST integration experience using Scripted REST APIs and RESTMessageV2.

This project demonstrates API thinking and integration readiness.

### 4. Import Set & Transform Map Automation

Demonstrates data import, validation, coalesce logic, skipped row handling, reference lookups, and transform map scripting.

This project is valuable for admin and platform data work.

### 5. CMDB Data Quality & CI Relationship Automation

Shows CMDB data quality enforcement, duplicate CI prevention, CI owner validation, support group requirements, and Incident-to-CI visibility.

### 6. Change Management Risk & Approval Automation

Demonstrates Change process governance, risk validation, emergency Change justification, implementation/backout/test plan checks, and approval readiness.

### 7. SLA Management & Escalation Automation

Shows SLA visibility, breach prevention, escalation logic, and operational SLA reporting.

### 8. Asset Lifecycle Automation

Demonstrates hardware asset lifecycle validation, assigned user checks, Asset-to-CI alignment, lifecycle work notes, and asset reporting.

### 9. ServiceNow Security & Access Control Automation

Shows user, group, and role governance using sys_user, sys_user_grmember, sys_user_has_role, GlideRecord, and GlideAggregate.

### 10. Scheduled Jobs & Notifications Automation

Demonstrates scheduled checks, notification-style logic, recurring operational review, and summary reporting across Incidents, SLAs, Knowledge, Users, and Assets.

## Full Project List

### 01. Incident Data Quality Automation

Production-style Business Rules for Incident record quality, caller validation, assignment group enforcement, caller email/department copying, inactive caller blocking, and work note updates.

### 02. Incident Form Behavior Automation

Client Script automation for Incident form behavior, mandatory field handling, impact/urgency logic, field clearing, keyword detection, and onSubmit validation.

### 03. Incident Caller Validation with GlideAjax

GlideAjax project using Client Scripts and client-callable Script Includes to validate inactive callers, missing caller manager/department, active caller incidents, and inactive assignment groups.

### 04. Incident Integration Automation

Inbound and outbound REST integration project using Scripted REST APIs and RESTMessageV2.

Includes Incident creation, work note update APIs, critical/resolved Incident outbound notifications, and logging.

### 05. Laptop Request Approval & Fulfillment Automation

Service Catalog project for laptop requests.

Includes Catalog Client Scripts, rush request logic, laptop type validation, manager approval flow documentation, catalog task creation, fulfillment routing, and RITM closure.

### 06. Import Set & Transform Map Automation

Import Set and Transform Map project for laptop asset CSV imports.

Includes required field validation, coalesce duplicate prevention, active user lookup, model lookup, status conversion, asset tag validation, skipped-row logging, and mapping.

### 07. Update Set Management & Deployment Validation Automation

Update Set lifecycle and deployment validation project.

Includes checklist, preview/commit guidance, backout planning, best practices, and post-deployment validation scripts.

### 08. CMDB Data Quality & CI Relationship Automation

CMDB project focused on CI data quality, duplicate computer CI prevention, owner/support group validation, requiring affected CI on P1 Incidents, work notes when CI changes, and incomplete CMDB audit scripts.

### 09. Problem Management Root Cause Automation

Problem Management project focused on recurring Incident detection, automatic Problem creation, duplicate active Problem prevention, root cause note validation, Known Error workaround validation, and repeated CI checks.

### 10. Change Management Risk & Approval Automation

Change Management project focused on high-risk Change validation, implementation/backout/test plan enforcement, emergency Change justification, Change state work notes, Known Error to Change recommendation logic, and missing planning data checks.

### 11. SLA Management & Escalation Automation

SLA project focused on SLA visibility, breach prevention, escalation handling, P1 SLA review notes, high breach risk work notes, escalation logic, breached SLA checks, and SLA count checks.

### 12. Knowledge Management Publishing Automation

Knowledge project focused on article quality, publishing readiness, Knowledge category/body validation, Incident-to-Knowledge recommendation, automatic draft Knowledge creation, and expired article validation.

### 13. Reporting & Dashboard Automation

Reporting project using GlideAggregate and Background Scripts.

Includes open Critical Incident counts, Incident volume by group, breached SLA counts, pending Change approvals, expired Knowledge counts, repeated CI reporting, and monthly ITSM metrics logic.

### 14. Asset Lifecycle Automation

Asset Lifecycle project focused on hardware asset assignment, lifecycle status control, CMDB alignment, and asset reporting.

Includes Assigned To validation, retirement prevention, Asset-to-CI assigned user sync, lifecycle work notes, missing CI checks, assigned asset counts, and retired asset review scripts.

### 15. ServiceNow Security & Access Control Automation

Security/access governance project focused on user validation, group membership checks, role assignment controls, inactive user review, and elevated access visibility.

### 16. Major Incident Management Automation

Major Incident project focused on high-impact Incident governance, priority validation, assignment ownership, communication discipline, resolution review, and service impact reporting.

### 17. Scheduled Jobs & Notifications Automation

Scheduled automation project focused on recurring ITSM checks, notification-style reminders, operational review, and admin reporting.

Includes Critical Incident review, breached SLA checks, expired Knowledge checks, inactive user access review, asset review, and scheduled summary reporting.

### 18. HR / Employee Service Request Automation

Employee service request project focused on required field validation, manager approval readiness, equipment request handling, department-based routing, inactive employee blocking, and request reporting.

## Role Alignment

### ServiceNow Administrator

This portfolio demonstrates platform administration skills such as Business Rules, Client Scripts, forms, fields, reference data, Update Sets, data validation, user/group/role checks, and scheduled automation.

### ITSM Analyst

This portfolio demonstrates ITSM process knowledge across Incident, Problem, Change, SLA, Knowledge, Major Incident, Service Catalog, Asset, and CMDB processes.

### Junior ServiceNow Developer

This portfolio demonstrates scripting ability using GlideRecord, GlideAggregate, GlideAjax, Script Includes, REST APIs, RESTMessageV2, Transform Map scripts, and reusable logic.

### IT Support / Enterprise IT Support

This portfolio connects well with IT support work such as Incident handling, laptop requests, asset ownership, user access validation, SLA visibility, Knowledge Article quality, and employee request fulfillment.

## Interview Talking Point

I built a production-style ServiceNow ITSM automation portfolio with 18 projects covering Incident, Problem, Change, SLA, Knowledge, CMDB, Asset, Access Governance, Major Incident, Scheduled Jobs, and Employee Service Requests.

The portfolio demonstrates practical ServiceNow administration and scripting skills using Business Rules, Client Scripts, GlideAjax, Script Includes, GlideRecord, GlideAggregate, REST APIs, Import Sets, Transform Maps, Update Sets, and Background Scripts.

My focus was not only writing scripts, but also understanding how automation supports real ITSM processes such as data quality, escalation, approval readiness, reporting, audit visibility, asset ownership, and operational governance.

## Short Recruiter Summary

ServiceNow ITSM automation portfolio with 18 production-style projects covering core ITSM modules, scripting, platform governance, reporting, integrations, CMDB, Asset, Access Governance, Scheduled Jobs, and Employee Service Request automation.

Built to demonstrate practical ServiceNow Administrator, ITSM Analyst, Junior ServiceNow Developer, and Enterprise IT Support readiness.

## Portfolio Strength

This portfolio shows:

* Practical ServiceNow scripting experience
* Real ITSM process understanding
* Strong admin-focused automation
* Platform governance exposure
* Reporting and audit visibility
* Cross-module ServiceNow thinking
* Consistent documentation and GitHub presentation
* Interview-ready project explanations
