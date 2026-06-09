/*
Project: Incident Form Behavior Automation
Type: onChange Client Script
Table: Incident [incident]
Field: short_description
Purpose: Sets priority to Critical when short_description contains urgent.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue.toString().toLowerCase().indexOf('urgent') > -1) {
        g_form.setValue('priority', '1');
        g_form.addInfoMessage('Urgent issue detected. Priority set to Critical.');
    }
}
