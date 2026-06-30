# Knowledge Publishing Rules

## Purpose

This document explains the Knowledge Management publishing rules used in this project.

The goal is to improve Knowledge Article quality, prevent incomplete articles from being published, and support better reuse of Incident resolution information.

Knowledge Management is not only about storing documentation. It helps support teams capture useful fixes, reduce repeated troubleshooting, and improve self-service.

## Rule 1: Require Short Description for Knowledge Articles

Every Knowledge Article should have a short description.

### Business Reason

The short description helps users and support teams quickly understand what the article is about.

If the short description is missing, the article becomes harder to search, review, and reuse.

### Expected Behavior

If the short description is empty, the save is blocked.

The user sees this error:

```text
Short description is required for Knowledge Articles.
```

## Rule 2: Require Article Body Before Publishing

A Knowledge Article should not be published if the article body is empty.

### Business Reason

Publishing an article without content creates poor knowledge quality and may confuse users or support teams.

### Expected Behavior

If the article is changing to published and the body text is empty, the update is blocked.

The user sees this error:

```text
Article body is required before publishing a Knowledge Article.
```

## Rule 3: Require Knowledge Category Before Publishing

A Knowledge Article should have a category before it is published.

### Business Reason

Categories help organize articles and make them easier to find.

Without a category, the article may be harder to search, filter, or route for review.

### Expected Behavior

If the article is changing to published and the Knowledge category is empty, the update is blocked.

The user sees this error:

```text
Knowledge category is required before publishing.
```

## Rule 4: Add Work Note When Article Is Published

When a Knowledge Article is published, the system adds a work note.

### Business Reason

Publishing is an important lifecycle event. A work note creates an audit trail and reminds teams to review article visibility, category, and usefulness.

### Work Note Message

```text
Knowledge Article published. Review visibility, category, and article usefulness.
```

## Rule 5: Recommend Knowledge Creation from Resolved Incidents

When an Incident is resolved and close notes are available, the system adds a work note recommending Knowledge Article creation or update.

### Business Reason

Resolved Incidents often contain useful troubleshooting steps or resolution details.

If those details are captured as Knowledge Articles, support teams can solve similar issues faster in the future.

### Work Note Message

```text
Resolution notes are available. Consider creating or updating a Knowledge Article for future reference.
```

## Rule 6: Create Draft Knowledge Article from Resolved Incident

When an Incident is resolved with close notes, the system creates a draft Knowledge Article.

### Business Reason

This helps convert Incident resolution details into reusable documentation.

Instead of relying on manual follow-up, the system automatically creates a draft article that can be reviewed, improved, categorized, and published later.

### Draft Article Fields

The draft Knowledge Article uses:

```text
short_description = Incident short description
text = Incident close notes
workflow_state = draft
```

## Rule 7: Identify Draft Articles Missing Body Text

A Background Script identifies draft Knowledge Articles where the article body is missing.

### Business Reason

Draft articles may be created but never completed.

This script helps knowledge managers or admins find incomplete drafts that need review.

### Example Output

```text
Draft Knowledge Article missing body text: Password reset troubleshooting
```

## Rule 8: Identify Expired Knowledge Articles

A Background Script identifies published Knowledge Articles where the valid-to date is before today.

### Business Reason

Outdated Knowledge Articles can lead to incorrect guidance, repeated issues, or poor user experience.

This script helps teams review expired articles and decide whether to retire, update, or republish them.

### Example Output

```text
Expired Knowledge Article found: VPN setup instructions
```

## ITSM Value

These rules support stronger Knowledge Management by helping teams:

* Improve Knowledge Article quality
* Prevent incomplete articles from being published
* Capture useful Incident resolution notes
* Convert resolved Incidents into draft Knowledge Articles
* Improve self-service readiness
* Reduce repeated troubleshooting
* Identify outdated or expired articles
* Strengthen support documentation governance

## Summary

This project demonstrates how ServiceNow automation can support Knowledge Management by validating article readiness, improving publishing discipline, creating reusable documentation from resolved Incidents, and helping support teams maintain cleaner Knowledge content.
