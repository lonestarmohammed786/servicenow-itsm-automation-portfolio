// Project 15: ServiceNow Security & Access Control Automation
// File: validate-user-group-membership.js
// Type: Before Insert/Update Business Rule
// Table: incident
// Purpose: Ensure the assigned user is a member of the selected assignment group.

if (!gs.nil(current.assigned_to) && !gs.nil(current.assignment_group)) {
    var gr = new GlideRecord('sys_user_grmember');
    gr.addQuery('user', current.assigned_to);
    gr.addQuery('group', current.assignment_group);
    gr.query();

    if (!gr.next()) {
        gs.addErrorMessage('Assigned user must be a member of the selected assignment group.');
        current.setAbortAction(true);
    }
}
