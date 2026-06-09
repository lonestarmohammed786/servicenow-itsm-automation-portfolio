/*
Project: Incident Data Quality Automation
Type: Before Update Business Rule
Table: Incident [incident]
Purpose: Refreshes copied caller email and department when caller_id changes.
*/

if (current.caller_id.changes()) {

    if (gs.nil(current.caller_id)) {
        current.u_caller_email = '';
        current.u_caller_department = '';
    } else {
        var user = new GlideRecord('sys_user');

        if (user.get(current.caller_id)) {
            current.u_caller_email = user.getValue('email');
            current.u_caller_department = user.getValue('department');
        }
    }
}
