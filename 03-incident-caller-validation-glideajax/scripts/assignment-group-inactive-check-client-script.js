/*
Project: Incident Caller Validation with GlideAjax
Type: onChange Client Script
Table: Incident [incident]
Field: assignment_group
Purpose: Calls GroupValidationUtils to check whether selected assignment group is inactive.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var ga = new GlideAjax('GroupValidationUtils');
    ga.addParam('sysparm_name', 'isGroupInactive');
    ga.addParam('sysparm_group_id', newValue);

    ga.getXMLAnswer(function(answer) {
        if (answer == 'true') {
            g_form.addInfoMessage('Selected assignment group is inactive.');
            g_form.setValue('assignment_group', '');
        }
    });
}
