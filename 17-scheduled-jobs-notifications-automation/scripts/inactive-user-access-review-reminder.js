// Scheduled Script: Inactive User Access Review Reminder
// Tables: sys_user_has_role, sys_user
// Purpose: Find inactive users who still have roles assigned

var gr = new GlideRecord('sys_user_has_role');
gr.query();

while (gr.next()) {
    var userGR = new GlideRecord('sys_user');

    if (userGR.get(gr.user) && userGR.active == false) {
        var userName = gr.getDisplayValue('user');
        var roleName = gr.getDisplayValue('role');

        gs.info(userName + ' - ' + roleName);
    }
}
