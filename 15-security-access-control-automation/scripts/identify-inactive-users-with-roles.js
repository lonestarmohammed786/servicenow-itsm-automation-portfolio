// Project 15: ServiceNow Security & Access Control Automation
// File: identify-inactive-users-with-roles.js
// Type: Background Script
// Table: sys_user_has_role
// Purpose: Identify inactive users who still have assigned roles.

var roleGR = new GlideRecord('sys_user_has_role');
roleGR.query();

while (roleGR.next()) {
    var userGR = new GlideRecord('sys_user');

    if (userGR.get(roleGR.user) && userGR.getValue('active') == 'false') {
        gs.info('Inactive user with role: ' + userGR.name + ' | Role: ' + roleGR.role.getDisplayValue());
    }
}
