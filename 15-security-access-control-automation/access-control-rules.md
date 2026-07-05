# Access Control Rules

## Purpose

This document explains the access control and security governance rules used in this project.

The goal is to improve ServiceNow platform hygiene by validating user assignments, checking group membership, preventing risky role assignments, and supporting basic access review.

## Rule 1: Block Assignment to Inactive Users

An Incident should not be assigned to an inactive user.

### Table

```text
incident
```

### Condition

```text
assigned_to is not empty
assigned_to user is inactive
```

### Business Reason

Inactive users should not receive active work.

Assigning tickets to inactive users can cause delays, missed SLAs, ownership confusion, and poor operational visibility.

### Expected Error Message

```text
Cannot assign Incident to an inactive user.
```

## Rule 2: Validate Assigned User Group Membership

If an Incident has both an assigned user and an assignment group, the assigned user should be a member of that group.

### Tables

```text
incident
sys_user_grmember
```

### Conditions

```text
assigned_to is not empty
assignment_group is not empty
No matching sys_user_grmember record exists
```

### Membership Check

```text
sys_user_grmember.user = incident.assigned_to
sys_user_grmember.group = incident.assignment_group
```

### Business Reason

If a ticket is assigned to a user who is not part of the selected assignment group, it can create routing issues and inaccurate ownership.

This rule helps keep assignment logic clean and realistic.

### Expected Error Message

```text
Assigned user must be a member of the selected assignment group.
```

## Rule 3: Prevent Role Assignment to Inactive Users

Roles should not be assigned to inactive users.

### Table

```text
sys_user_has_role
```

### Condition

```text
user is inactive
```

### Business Reason

Inactive users should not continue receiving access or permissions.

This helps reduce access risk and supports cleaner platform governance.

### Expected Error Message

```text
Cannot assign roles to inactive users.
```

## Rule 4: Identify Inactive Users with Roles

A Background Script identifies inactive users who still have assigned roles.

### Tables

```text
sys_user_has_role
sys_user
```

### Logic

```text
Loop through role assignment records
Open related user record
If user is inactive, print user name and role name
```

### Business Reason

Inactive users with roles can create security and audit concerns.

This check helps admins identify role assignments that may need cleanup.

### Example Output

```text
Inactive user with role: John Smith | Role: itil
```

## Rule 5: Count Users by Role

A GlideAggregate script counts users grouped by assigned role.

### Table

```text
sys_user_has_role
```

### Grouped By

```text
role
```

### Business Reason

This helps admins understand role distribution across the platform.

It can support access review, license review, cleanup discussions, and governance reporting.

### Example Output

```text
itil: 25
admin: 3
catalog_admin: 5
```

## Rule 6: Identify Inactive Users Still in Groups

A Background Script identifies inactive users who are still members of groups.

### Tables

```text
sys_user_grmember
sys_user
```

### Logic

```text
Loop through group membership records
Open related user record
If user is inactive, print user name and group name
```

### Business Reason

Inactive users remaining in groups can create inaccurate group membership data and potential access cleanup issues.

This check helps admins review group hygiene.

### Example Output

```text
Inactive user still in group: John Smith | Group: Service Desk
```

## Rule 7: Identify Elevated/Admin-Style Access

A Background Script identifies users with admin-style or elevated roles.

### Table

```text
sys_user_has_role
```

### Logic

```text
Loop through role assignments
Get role display value
If role name contains admin, print user and role
```

### Business Reason

Elevated access should be reviewed regularly.

This check helps admins identify users with admin-style permissions and supports access governance.

### Example Output

```text
Elevated access found: Mohammed Nadeem | Role: admin
```

## Important ServiceNow Concepts

This project uses several important relationship patterns:

```text
Reference field value = sys_id
get(sys_id) = open one exact related record
addQuery() = search by one or more conditions
getDisplayValue() = readable value
getValue() = stored database value
```

## ITSM and Security Value

These rules help improve platform governance by supporting:

* Cleaner user assignment
* Better assignment group accuracy
* Reduced inactive-user risk
* Better group membership hygiene
* Role assignment cleanup
* Elevated access visibility
* Improved audit readiness
* Stronger ServiceNow administration practices

## Summary

This project demonstrates exposure to ServiceNow access governance by validating inactive users, checking assignment group membership, reviewing role assignments, and identifying elevated access using Business Rules, GlideRecord, GlideAggregate, and Background Scripts.
