# CI Relationship Notes

CI relationships show how Configuration Items are connected to each other inside the CMDB.

A single CI is useful, but relationships make the CMDB more powerful because they show dependency, ownership, and impact.

## Main Relationship Table

ServiceNow stores CI relationships mainly in:

```text
cmdb_rel_ci
```

## Important Fields in `cmdb_rel_ci`

| Field    | Purpose                                    |
| -------- | ------------------------------------------ |
| `parent` | The upstream or parent Configuration Item  |
| `child`  | The downstream or child Configuration Item |
| `type`   | The relationship type between the two CIs  |

## Example Relationship Structure

```text
Business Service → depends on → Application
Application → runs on → Server
Server → connects to → Database
```

## Simple Example

If an Email Server has an outage, the related Email Service may also be impacted.

```text
Email Service → depends on → Email Server
```

This helps support teams quickly understand what business service may be affected.

## Why CI Relationships Matter

CI relationships help IT teams understand:

* Which services may be impacted during an outage
* Which applications depend on servers or databases
* Which infrastructure supports a business service
* What may be affected during a Change
* Whether an Incident could impact other connected services

## Incident Impact Example

If a Priority 1 Incident is linked to the wrong CI, the support team may misunderstand the actual impact.

If the Incident is linked to the correct CI, the team can better understand:

* Affected system
* Support ownership
* Related services
* Possible downstream impact
* Change risk
* Problem investigation history

## Data Quality Risk

If CI relationships are missing or incorrect, teams may not understand the true business impact of an Incident or Change.

That is why CMDB data quality and CI relationship accuracy are important in real ServiceNow environments.

## Summary

CI relationships make the CMDB more than just a list of assets. They turn it into a connected model of services, applications, infrastructure, and business impact.
