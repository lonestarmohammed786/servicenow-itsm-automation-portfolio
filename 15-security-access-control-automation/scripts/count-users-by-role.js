// Project 15: ServiceNow Security & Access Control Automation
// File: count-users-by-role.js
// Type: Background Script
// Table: sys_user_has_role
// Purpose: Count users grouped by assigned role.

var ga = new GlideAggregate('sys_user_has_role');
ga.addAggregate('COUNT');
ga.groupBy('role');
ga.query();

while (ga.next()) {
    var roleName = ga.role.getDisplayValue();
    var userCount = ga.getAggregate('COUNT');

    gs.info(roleName + ': ' + userCount);
}
