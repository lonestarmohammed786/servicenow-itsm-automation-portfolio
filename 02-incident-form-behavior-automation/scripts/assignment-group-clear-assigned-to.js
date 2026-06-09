/*
Project: Incident Form Behavior Automation
Type: onChange Client Script
Table: Incident [incident]
Field: assignment_group
Purpose: Clears assigned_to when assignment_group is removed.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading) {
        return;
    }

    if (newValue == '') {
        g_form.setValue('assigned_to', '');
        g_form.addInfoMessage('Assigned To cleared because Assignment Group was removed.');
    }
}
