# ServiceNow Portfolio Interview Talking Points

## Purpose

This document provides quick interview talking points for each project in the ServiceNow ITSM Automation Portfolio.

The goal is to help explain each project clearly in interviews for ServiceNow Administrator, ITSM Analyst, Junior ServiceNow Developer, and Enterprise IT Support roles.

## Portfolio Summary Answer

I built a ServiceNow ITSM automation portfolio with 18 production-style projects in a Personal Developer Instance.

The projects cover Incident Management, Problem Management, Change Management, SLA Management, Knowledge Management, CMDB, Asset Lifecycle, Access Governance, Major Incident Management, Scheduled Jobs, and Employee Service Requests.

I practiced ServiceNow administration and scripting concepts such as Business Rules, Client Scripts, GlideAjax, Script Includes, GlideRecord, GlideAggregate, REST APIs, RESTMessageV2, Import Sets, Transform Maps, Update Sets, Background Scripts, and process documentation.

My goal was to connect scripting with real ITSM use cases like data quality, approval readiness, escalation, reporting, audit visibility, asset ownership, and operational governance.

---

# Project Talking Points

## 01. Incident Data Quality Automation

### What I Built

I built Business Rules to improve Incident data quality and enforce required Incident information.

### What It Does

* Requires caller information
* Copies caller email and department
* Blocks inactive callers
* Enforces assignment group for Critical Incidents
* Adds work notes when key fields change

### Skills Demonstrated

* Business Rules
* GlideRecord
* Incident validation
* Reference field handling
* Work notes

### Interview Explanation

This project shows that I understand how ServiceNow automation can improve Incident data quality and reduce incomplete or inaccurate tickets.

---

## 02. Incident Form Behavior Automation

### What I Built

I built Client Scripts to improve how the Incident form behaves for users.

### What It Does

* Makes fields mandatory based on conditions
* Sets impact and urgency automatically
* Clears fields when needed
* Detects keywords in short description
* Validates data before submit

### Skills Demonstrated

* Client Scripts
* onLoad
* onChange
* onSubmit
* g_form
* Form behavior automation

### Interview Explanation

This project shows client-side scripting skills and how form behavior can guide users to enter better Incident data.

---

## 03. Incident Caller Validation with GlideAjax

### What I Built

I built real-time Incident caller validation using GlideAjax, Client Scripts, and Script Includes.

### What It Does

* Checks if caller is inactive
* Checks if caller has missing manager or department
* Checks if caller already has active Incidents
* Checks inactive assignment groups

### Skills Demonstrated

* GlideAjax
* Script Includes
* Client-callable Script Includes
* Client/server interaction
* JSON-style validation logic

### Interview Explanation

This is one of my strongest scripting projects because it shows how client-side scripts can call server-side logic without loading unnecessary data on the form.

---

## 04. Incident Integration Automation

### What I Built

I built inbound and outbound REST integration automation for Incident records.

### What It Does

* Creates Incidents using Scripted REST API
* Adds work notes through an API
* Sends outbound notifications for Critical and Resolved Incidents
* Uses RESTMessageV2 for outbound calls

### Skills Demonstrated

* Scripted REST APIs
* RESTMessageV2
* JSON payload handling
* Request/response logic
* Integration logging

### Interview Explanation

This project shows that I understand how ServiceNow can integrate with external systems using both inbound and outbound REST patterns.

---

## 05. Laptop Request Approval & Fulfillment Automation

### What I Built

I built a Service Catalog laptop request automation project.

### What It Does

* Validates laptop request fields
* Handles rush request logic
* Validates laptop type
* Documents manager approval flow
* Documents Catalog Task creation and fulfillment routing

### Skills Demonstrated

* Service Catalog
* Catalog Client Scripts
* Flow Designer documentation
* RITM lifecycle
* Catalog Task fulfillment

### Interview Explanation

This project shows that I understand the Service Catalog request lifecycle from request submission to approval, fulfillment, and closure.

---

## 06. Import Set & Transform Map Automation

### What I Built

I built an Import Set and Transform Map automation project for laptop asset imports.

### What It Does

* Validates required import fields
* Uses coalesce to prevent duplicates
* Looks up active users by email
* Looks up asset models
* Converts status values
* Logs skipped rows and ignore reasons

### Skills Demonstrated

* Import Sets
* Transform Maps
* onStart / onBefore logic
* Coalesce
* Reference lookups
* Data validation

### Interview Explanation

This project shows that I can support data import and migration work while maintaining data quality and preventing duplicate records.

---

## 07. Update Set Management & Deployment Validation Automation

### What I Built

I built an Update Set management and deployment validation project.

### What It Does

* Documents update set lifecycle
* Covers preview and commit guidance
* Includes deployment checklist
* Includes backout planning
* Includes post-deployment validation scripts

### Skills Demonstrated

* Update Sets
* Deployment validation
* Backout planning
* Admin best practices
* Background Scripts

### Interview Explanation

This project shows that I understand how ServiceNow changes should be packaged, moved, validated, and documented safely.

---

## 08. CMDB Data Quality & CI Relationship Automation

### What I Built

I built CMDB data quality and CI relationship automation.

### What It Does

* Prevents duplicate computer CIs
* Validates CI owner and support group
* Requires affected CI on Priority 1 Incidents
* Adds work notes when Incident CI changes
* Finds incomplete CMDB records

### Skills Demonstrated

* CMDB
* Configuration Items
* GlideRecord
* CI validation
* Incident-to-CI relationship

### Interview Explanation

This project shows that I understand how CMDB data quality supports Incident resolution, service visibility, and operational reporting.

---

## 09. Problem Management Root Cause Automation

### What I Built

I built Problem Management automation focused on recurring Incidents and root cause tracking.

### What It Does

* Detects repeated Incidents for the same CI
* Automatically creates Problem records
* Prevents duplicate active Problems
* Validates root cause notes
* Validates Known Error workaround
* Counts related Incidents

### Skills Demonstrated

* Problem Management
* Incident-to-Problem lifecycle
* GlideRecord
* Root cause validation
* Known Error logic

### Interview Explanation

This project shows that I understand how Problem Management reduces recurring incidents and supports root cause analysis.

---

## 10. Change Management Risk & Approval Automation

### What I Built

I built Change Management automation focused on risk and approval readiness.

### What It Does

* Requires CI for high-risk Changes
* Validates implementation plan
* Validates backout plan
* Validates test plan
* Requires emergency Change justification
* Recommends Change from Known Error

### Skills Demonstrated

* Change Management
* Risk validation
* Approval readiness
* Emergency Change governance
* Business Rules

### Interview Explanation

This project shows that I understand Change Management governance and how automation can reduce risky or incomplete Changes.

---

## 11. SLA Management & Escalation Automation

### What I Built

I built SLA automation focused on breach prevention and escalation visibility.

### What It Does

* Adds SLA review notes for Priority 1 Incidents
* Adds high-breach-risk work notes
* Supports escalation logic
* Checks breached SLAs
* Counts SLA records

### Skills Demonstrated

* SLA Management
* task_sla
* GlideRecord
* GlideAggregate
* Escalation logic

### Interview Explanation

This project shows that I understand SLA tracking, breach visibility, and how ServiceNow can support timely Incident response.

---

## 12. Knowledge Management Publishing Automation

### What I Built

I built Knowledge Management automation focused on article quality and publishing readiness.

### What It Does

* Validates article short description
* Validates article body before publishing
* Requires Knowledge category
* Recommends Knowledge creation from resolved Incidents
* Creates draft Knowledge Articles
* Checks expired articles

### Skills Demonstrated

* Knowledge Management
* kb_knowledge
* Business Rules
* Incident-to-Knowledge logic
* Background Scripts

### Interview Explanation

This project shows that I understand how Knowledge Management improves support reuse and reduces repeated troubleshooting work.

---

## 13. Reporting & Dashboard Automation

### What I Built

I built reporting and dashboard preparation scripts using GlideAggregate.

### What It Does

* Counts open Critical Incidents
* Counts Incident volume by assignment group
* Counts breached SLAs
* Counts pending Change approvals
* Counts expired Knowledge Articles
* Creates monthly ITSM metric summaries

### Skills Demonstrated

* GlideAggregate
* Reporting logic
* Dashboard preparation
* Operational metrics
* Background Scripts

### Interview Explanation

This project shows that I can prepare operational reporting logic for ITSM dashboards and leadership visibility.

---

## 14. Asset Lifecycle Automation

### What I Built

I built Asset Lifecycle automation focused on hardware asset ownership and lifecycle control.

### What It Does

* Requires Assigned To before In Use
* Prevents retirement of assigned assets
* Syncs Asset assigned user to linked CI
* Adds lifecycle work notes
* Finds assets missing linked CIs
* Counts assigned assets by user

### Skills Demonstrated

* Asset Management
* alm_hardware
* Asset-to-CMDB alignment
* GlideRecord
* GlideAggregate

### Interview Explanation

This project shows that I understand asset lifecycle governance and why Asset and CMDB data need to stay aligned.

---

## 15. ServiceNow Security & Access Control Automation

### What I Built

I built access governance automation for users, groups, and roles.

### What It Does

* Blocks Incident assignment to inactive users
* Validates assigned user membership in assignment group
* Prevents role assignment to inactive users
* Finds inactive users with roles
* Counts users by role
* Finds elevated/admin-style access

### Skills Demonstrated

* sys_user
* sys_user_grmember
* sys_user_has_role
* Role governance
* GlideRecord
* GlideAggregate

### Interview Explanation

This project shows that I understand access governance, group membership, role assignment review, and platform security hygiene.

---

## 16. Major Incident Management Automation

### What I Built

I built Major Incident Management automation for high-impact Incident governance.

### What It Does

* Validates Priority 1 or Priority 2 for Major Incidents
* Requires assignment group
* Requires work notes for Critical Major Incidents
* Requires close notes before resolution
* Finds active Major Incidents
* Counts Major Incidents by Business Service

### Skills Demonstrated

* Major Incident Management
* Incident governance
* Business Rules
* GlideRecord
* GlideAggregate
* Business service reporting

### Interview Explanation

This project shows that I understand how Major Incidents need stronger process control, ownership, communication, resolution review, and reporting visibility.

---

## 17. Scheduled Jobs & Notifications Automation

### What I Built

I built scheduled automation for recurring ITSM checks and notification-style reminders.

### What It Does

* Reviews active Critical Incidents
* Finds breached SLAs
* Finds expired Knowledge Articles
* Finds inactive users with roles
* Finds In Use assets with no owner
* Creates scheduled ITSM summary report

### Skills Demonstrated

* Scheduled Script logic
* GlideRecord
* GlideAggregate
* Notification-style automation
* Operational review

### Interview Explanation

This project shows that I understand automation that runs on a schedule, not only automation triggered by record updates.

---

## 18. HR / Employee Service Request Automation

### What I Built

I built employee service request automation for request validation and fulfillment readiness.

### What It Does

* Requires key employee request fields
* Validates Requested For user has a manager
* Requires assignment group for equipment requests
* Adds department-based routing work notes
* Blocks requests for inactive users
* Counts requests by assignment group

### Skills Demonstrated

* Service Catalog
* sc_req_item
* sys_user
* Reference field validation
* GlideRecord
* GlideAggregate
* Request fulfillment logic

### Interview Explanation

This project shows that I can support employee service workflows, request validation, approval readiness, routing logic, and operational request reporting.

---

# Common Interview Questions

## Tell me about your ServiceNow experience.

I have built a production-style ServiceNow ITSM automation portfolio in a Personal Developer Instance with 18 projects. These projects cover Incident, Problem, Change, SLA, Knowledge, CMDB, Asset, Access Governance, Major Incident, Scheduled Jobs, and Employee Service Requests.

I practiced both administration and scripting using Business Rules, Client Scripts, GlideAjax, Script Includes, GlideRecord, GlideAggregate, Scripted REST APIs, RESTMessageV2, Import Sets, Transform Maps, Update Sets, and Background Scripts.

## What is your strongest ServiceNow project?

One of my strongest projects is the Incident Caller Validation with GlideAjax project because it combines Client Scripts, GlideAjax, and Script Includes to perform real-time server-side validation from the Incident form.

Another strong project is Incident Integration Automation because it demonstrates inbound Scripted REST APIs and outbound RESTMessageV2 logic.

## How do you use GlideRecord?

I use GlideRecord to query, open, validate, and update records in ServiceNow tables.

For example, I used GlideRecord to open the Requested For user record from a service request and validate whether the user was active, had a manager, or belonged to a department.

## How do you use GlideAggregate?

I use GlideAggregate for counts, grouping, and reporting logic.

For example, I used GlideAggregate to count Incidents by assignment group, count Major Incidents by Business Service, count users by role, and create scheduled ITSM summary reports.

## What is the difference between get() and addQuery()?

I use `get()` when I already have the sys_id of one exact record.

I use `addQuery()` when I need to search for records based on conditions.

For example, if `current.requested_for` stores a user sys_id, I can use `userGR.get(current.requested_for)` to open that exact user.

If I want to find all active Priority 1 Incidents, I use `addQuery('priority', '1')`, `addQuery('active', true)`, and then loop through the results.

## What is your goal with this portfolio?

My goal is to demonstrate practical ServiceNow Administrator, ITSM Analyst, Junior ServiceNow Developer, and Enterprise IT Support readiness through real-world ServiceNow automation projects.

The portfolio shows both scripting ability and ITSM process understanding.
