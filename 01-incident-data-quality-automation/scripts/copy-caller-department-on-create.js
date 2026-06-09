/*
Project: Incident Data Quality Automation
Type: Before Insert Business Rule
Table: Incident [incident]
Purpose: Copies caller department from sys_user into u_caller_department.
*/

if (current.caller_id) {
    var user = new GlideRecord('sys_user');

    if (user.get(current.caller_id)) {
        current.u_caller_department = user.getValue('department');
    }
}
