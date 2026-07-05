// Project 15: ServiceNow Security & Access Control Automation
// File: prevent-admin-role-to-inactive-user.js
// Type: Before Insert Business Rule
// Table: sys_user_has_role
// Purpose: Prevent assigning roles to inactive users.

if (!gs.nil(current.user)) {
    var userGR = new GlideRecord('sys_user');

    if (userGR.get(current.user) && userGR.getValue('active') == 'false') {
        gs.addErrorMessage('Cannot assign roles to inactive users.');
        current.setAbortAction(true);
    }
}
