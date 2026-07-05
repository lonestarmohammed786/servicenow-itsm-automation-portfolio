// Project 15: ServiceNow Security & Access Control Automation
// File: block-inactive-user-assignment.js
// Type: Before Insert/Update Business Rule
// Table: incident
// Purpose: Prevent assigning an Incident to an inactive user.

if (!gs.nil(current.assigned_to)) {
    var userGR = new GlideRecord('sys_user');

    if (userGR.get(current.assigned_to) && userGR.getValue('active') == 'false') {
        gs.addErrorMessage('Cannot assign Incident to an inactive user.');
        current.setAbortAction(true);
    }
}
