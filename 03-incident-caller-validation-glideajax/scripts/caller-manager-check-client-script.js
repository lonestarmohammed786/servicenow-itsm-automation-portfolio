/*
Project: Incident Caller Validation with GlideAjax
Type: onChange Client Script
Table: Incident [incident]
Field: caller_id
Purpose: Calls UserValidationUtils to check whether selected caller has no manager.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    var ga = new GlideAjax('UserValidationUtils');
    ga.addParam('sysparm_name', 'hasNoManager');
    ga.addParam('sysparm_user_id', newValue);

    ga.getXMLAnswer(function(answer) {
        if (answer == 'true') {
            g_form.addInfoMessage('Caller has no manager assigned.');
        }
    });
}
