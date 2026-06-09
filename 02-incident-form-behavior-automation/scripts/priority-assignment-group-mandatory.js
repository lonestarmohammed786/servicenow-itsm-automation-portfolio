/*
Project: Incident Form Behavior Automation
Type: onChange Client Script
Table: Incident [incident]
Field: priority
Purpose: Makes assignment_group mandatory when Priority is Critical.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == '1') {
        g_form.setMandatory('assignment_group', true);
        g_form.addInfoMessage('Assignment group is required for critical incidents.');
    } else {
        g_form.setMandatory('assignment_group', false);
    }
}
