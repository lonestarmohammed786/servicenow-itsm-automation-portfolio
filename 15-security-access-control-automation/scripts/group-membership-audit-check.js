// Project 15: ServiceNow Security & Access Control Automation
// File: group-membership-audit-check.js
// Type: Background Script
// Table: sys_user_grmember
// Purpose: Identify inactive users who are still members of groups.

var gr = new GlideRecord('sys_user_grmember');
gr.query();

while (gr.next()) {
    var userGR = new GlideRecord('sys_user');

    if (userGR.get(gr.user) && userGR.getValue('active') == 'false') {
        gs.info('Inactive user still in group: ' + userGR.name + ' | Group: ' + gr.group.getDisplayValue());
    }
}
