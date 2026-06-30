# Incident Knowledge Notes

## Purpose

This document explains how Incident Management connects to Knowledge Management in this project.

The goal is to show how resolved Incident information can be converted into reusable Knowledge documentation for future support use.

## Incident to Knowledge Relationship

In ServiceNow, Incidents are used to restore service and resolve user issues.

Knowledge Articles are used to document reusable solutions, troubleshooting steps, workarounds, and known issue guidance.

This project follows the flow:

```text
Incident → Resolution Notes → Draft Knowledge Article → Review → Publish → Reuse
```

## Why Incident-to-Knowledge Matters

Many support teams solve the same issues repeatedly.

If the resolution stays only inside an Incident record, the knowledge may not help future users or support agents.

By converting useful Incident resolution notes into Knowledge Articles, teams can reduce repeated troubleshooting and improve support efficiency.

## Example Scenario

A user reports an issue:

```text
Incident: VPN connection fails after password reset
```

The support team resolves the Incident and adds close notes:

```text
User needed to clear saved VPN credentials and reconnect using updated domain password.
```

Instead of leaving that information only in the Incident, the system can create a draft Knowledge Article.

Example draft article:

```text
Short description: VPN connection fails after password reset

Article body:
User needed to clear saved VPN credentials and reconnect using updated domain password.
```

The article can later be reviewed, improved, categorized, and published.

## Automation Logic

The project uses this logic:

```text
1. Incident is updated
2. System checks whether Incident state changed to Resolved
3. System checks whether close notes are available
4. If close notes exist, system recommends Knowledge Article creation
5. System can also create a draft Knowledge Article
6. Draft article can be reviewed and published later
```

## Work Note Recommendation

When an Incident is resolved with close notes, the Incident receives this work note:

```text
Resolution notes are available. Consider creating or updating a Knowledge Article for future reference.
```

## Draft Knowledge Article Creation

The project includes a Business Rule that creates a draft Knowledge Article when an Incident is resolved with close notes.

The draft article uses:

```text
short_description = Incident short description
text = Incident close notes
workflow_state = draft
```

## Publishing Controls

To protect Knowledge quality, this project also validates article readiness before publishing.

A Knowledge Article cannot be published if:

* Article body is missing
* Knowledge category is missing

This helps prevent incomplete or poorly organized articles from being published.

## Knowledge Review Checks

This project includes Background Scripts that help admins or knowledge managers identify:

* Draft Knowledge Articles missing body text
* Published Knowledge Articles past their valid-to date

These checks support ongoing Knowledge quality review.

## Business Value

Incident-to-Knowledge automation helps teams:

* Capture useful resolution notes
* Reduce repeated troubleshooting
* Improve self-service readiness
* Help support agents resolve future tickets faster
* Improve Knowledge Article quality
* Prevent incomplete articles from being published
* Identify outdated Knowledge content
* Strengthen ITSM documentation maturity

## Summary

This project demonstrates practical understanding of how Incident Management connects to Knowledge Management in ServiceNow.

It shows how automation can help turn resolved Incident details into reusable Knowledge Articles while enforcing article quality before publishing.
