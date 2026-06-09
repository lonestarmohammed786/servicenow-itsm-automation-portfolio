/*
Project: Incident Data Quality Automation
Type: Before Insert/Update Business Rule
Table: Incident [incident]
Purpose: Blocks saving an Incident when the selected caller is inactive.
*/

if (current.caller_id) {
    var user = new GlideRecord('sys_user');

    if (user.get(current.caller_id) && user.getValue('active') == 'false') {
        gs.addErrorMessage('Inactive callers cannot be used on incidents.');
        current.setAbortAction(true);
    }
}
