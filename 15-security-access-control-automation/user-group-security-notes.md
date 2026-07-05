# User Group Security Notes

## Purpose

This document explains how users, groups, roles, and access governance connect in ServiceNow.

The goal is to show how ServiceNow administrators can review access relationships, identify inactive users with access, and improve platform security hygiene.

## User, Group, and Role Relationship

ServiceNow access is commonly managed through users, groups, and roles.

A user can belong to one or more groups.

A user can also be assigned one or more roles.

Groups are often used for assignment and support ownership, while roles control what a user can access or perform in the platform.

## Important Tables

### sys_user

The `sys_user` table stores user records.

Important fields:

```text id="yy9tuc"
name
active
email
department
manager
```

### sys_user_grmember

The `sys_user_grmember` table stores group membership records.

Important fields:

```text id="d56fio"
user
group
```

This table answers the question:

```text id="jq99nn"
Is this user a member of this group?
```

### sys_user_has_role

The `sys_user_has_role` table stores user role assignment records.

Important fields:

```text id="w83opm"
user
role
```

This table answers the question:

```text id="2ovjhz"
Which roles does this user have?
```

## Reference Field Concept

Many ServiceNow fields are reference fields.

A reference field stores the sys_id of another record.

Example:

```text id="ds6r42"
incident.assigned_to → sys_user
incident.assignment_group → sys_user_group
sys_user_grmember.user → sys_user
sys_user_grmember.group → sys_user_group
sys_user_has_role.user → sys_user
sys_user_has_role.role → sys_user_role
```

This means the field may display a readable name, but behind the scenes it stores a sys_id.

## get() vs addQuery()

This project uses both `get()` and `addQuery()`.

### get()

Use `get()` when you already have the sys_id of one exact record.

Example:

```javascript id="1uhw7k"
var userGR = new GlideRecord('sys_user');

if (userGR.get(current.assigned_to)) {
    gs.info(userGR.name);
}
```

This means:

```text id="wdrace"
Open the exact user stored in current.assigned_to.
```

### addQuery()

Use `addQuery()` when you are searching for records using conditions.

Example:

```javascript id="pvnf8x"
var gr = new GlideRecord('sys_user_grmember');
gr.addQuery('user', current.assigned_to);
gr.addQuery('group', current.assignment_group);
gr.query();

if (!gr.next()) {
    gs.info('User is not a member of the selected group.');
}
```

This means:

```text id="xpcuwc"
Search for a membership record where user and group match.
```

## Assignment Group Membership Validation

When an Incident has an assigned user and an assignment group, the assigned user should usually belong to that group.

Example:

```text id="ulq4lz"
Assigned to: Mohammed Nadeem
Assignment group: Service Desk
```

The system checks:

```text id="s9a982"
Is Mohammed Nadeem a member of Service Desk?
```

This is checked using:

```text id="rbe611"
sys_user_grmember.user = incident.assigned_to
sys_user_grmember.group = incident.assignment_group
```

If no matching record exists, the Incident assignment is blocked.

## Inactive User Risk

Inactive users should not receive new work or keep unnecessary access.

Examples of risky situations:

```text id="mfpn9h"
Incident assigned to inactive user
Inactive user still has itil role
Inactive user still belongs to Service Desk group
Inactive user has admin-style access
```

These issues can create:

* Missed ticket ownership
* SLA delays
* Access review problems
* Audit findings
* Inaccurate group membership data
* Security cleanup work

## Role Assignment Review

Roles control platform permissions.

Examples:

```text id="shy47h"
itil
catalog_admin
knowledge_admin
admin
security_admin
```

This project includes checks to identify inactive users with roles and users with admin-style roles.

This supports access review and platform governance.

## Elevated Access Review

Admin-style access should be reviewed carefully.

The project includes a Background Script that checks role display values and prints roles containing:

```text id="s4b7fc"
admin
```

Example output:

```text id="vkmezj"
Elevated access found: Mohammed Nadeem | Role: admin
```

This is useful for basic elevated access visibility.

## Business Value

User, group, and role security checks help ServiceNow teams:

* Keep assignments accurate
* Prevent work from going to inactive users
* Maintain cleaner group membership
* Review user role assignments
* Identify elevated access
* Reduce access risk
* Improve audit readiness
* Strengthen platform governance

## Summary

This project demonstrates practical exposure to ServiceNow user, group, and role relationships.

It shows how Business Rules and Background Scripts can support access governance by validating assignments, checking group membership, reviewing inactive users, and identifying elevated access.
