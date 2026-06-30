# Project 12: Knowledge Management Publishing Automation

## Overview

This project demonstrates production-style ServiceNow Knowledge Management automation focused on article quality, publishing readiness, reusable documentation, and Incident-to-Knowledge improvement.

The goal of this project is to show how ServiceNow can help support teams convert resolved Incident knowledge into reusable Knowledge Articles while also preventing incomplete or poorly documented articles from being published.

## Business Scenario

In real IT support environments, the same issues often appear repeatedly.

If support teams resolve Incidents but do not capture the solution, the same troubleshooting steps may be repeated again and again.

Knowledge Management helps teams document fixes, workarounds, troubleshooting steps, and known issue guidance so future Incidents can be resolved faster.

This project automates parts of the Knowledge Management lifecycle by recommending Knowledge creation from resolved Incidents, creating draft Knowledge Articles, validating required article content before publishing, and identifying outdated or incomplete Knowledge records.

## ITSM Flow Covered

Incident → Resolution Notes → Draft Knowledge Article → Review → Publish → Reuse

## Features

* Requires short description for Knowledge Articles
* Requires article body before publishing
* Requires Knowledge category before publishing
* Adds work notes when a Knowledge Article is published
* Recommends Knowledge Article creation from resolved Incidents
* Creates draft Knowledge Articles from resolved Incidents with close notes
* Identifies draft Knowledge Articles missing body text
* Identifies published Knowledge Articles past their valid-to date

## Folder Structure

```text
12-knowledge-management-publishing-automation/
│
├── README.md
├── knowledge-publishing-rules.md
├── incident-knowledge-notes.md
│
└── scripts/
    ├── require-short-description-for-knowledge.js
    ├── require-text-before-publish.js
    ├── validate-knowledge-category.js
    ├── add-worknote-when-article-published.js
    ├── recommend-knowledge-from-resolved-incident.js
    ├── knowledge-review-background-check.js
    ├── expired-knowledge-article-check.js
    └── create-draft-knowledge-from-resolved-incident.js
```

## Scripts Included

### 1. require-short-description-for-knowledge.js

Requires a short description before saving a Knowledge Article.

### 2. require-text-before-publish.js

Prevents a Knowledge Article from being published if the article body is empty.

### 3. validate-knowledge-category.js

Prevents a Knowledge Article from being published if the Knowledge category is missing.

### 4. add-worknote-when-article-published.js

Adds a work note when a Knowledge Article is published to remind teams to review visibility, category, and article usefulness.

### 5. recommend-knowledge-from-resolved-incident.js

Adds a work note to a resolved Incident when close notes are available, recommending Knowledge Article creation or update.

### 6. knowledge-review-background-check.js

Background Script that identifies draft Knowledge Articles missing body text.

### 7. expired-knowledge-article-check.js

Background Script that identifies published Knowledge Articles past their valid-to date.

### 8. create-draft-knowledge-from-resolved-incident.js

Creates a draft Knowledge Article when an Incident is resolved with close notes.

## ServiceNow Concepts Used

* Knowledge Management
* Incident Management
* Business Rules
* Before Insert Business Rules
* Before Update Business Rules
* After Update Business Rules
* GlideRecord
* addNullQuery
* changesTo()
* gs.nil()
* Work notes automation
* Knowledge publishing validation
* Incident-to-Knowledge automation
* Background Scripts
* ITSM process automation

## Tables Used

* kb_knowledge
* incident

## Key Fields Used

### Knowledge Table

* short_description
* text
* workflow_state
* kb_category
* valid_to
* work_notes

### Incident Table

* state
* short_description
* close_notes
* work_notes

## Example Business Value

This automation helps support teams improve Knowledge quality and reduce repeated troubleshooting effort.

Benefits include:

* Better Knowledge Article completeness
* Stronger publishing readiness
* More reusable Incident resolution documentation
* Faster future Incident resolution
* Improved support team efficiency
* Better Knowledge lifecycle governance
* Easier identification of outdated articles
* Stronger self-service foundation

## Portfolio Value

This project demonstrates practical understanding of how Knowledge Management supports ITSM operations.

It shows that ServiceNow automation is not only about resolving tickets. It can also help teams capture resolution knowledge, improve documentation quality, reduce repeated work, and support shift-left service delivery.

Recruiters and hiring managers can see that this project connects Incident Management with Knowledge Management and support process maturity.
