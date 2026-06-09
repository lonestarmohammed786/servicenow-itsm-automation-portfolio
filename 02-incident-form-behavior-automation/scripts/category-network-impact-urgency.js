/*
Project: Incident Form Behavior Automation
Type: onChange Client Script
Table: Incident [incident]
Field: category
Purpose: Sets impact and urgency to High when category is Network.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == 'network') {
        g_form.setValue('impact', '1');
        g_form.setValue('urgency', '1');
        g_form.addInfoMessage('Network issue selected. Impact and urgency set to High.');
    }
}
