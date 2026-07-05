// Project 15: ServiceNow Security & Access Control Automation
// File: elevated-access-background-check.js
// Type: Background Script
// Table: sys_user_has_role
// Purpose: Identify users with elevated/admin-style roles.

var gr = new GlideRecord('sys_user_has_role');
gr.query();

while (gr.next()) {
    var roleName = gr.role.getDisplayValue();

    if (roleName.indexOf('admin') > -1) {
        gs.info('Elevated access found: ' + gr.user.getDisplayValue() + ' | Role: ' + roleName);
    }
}
