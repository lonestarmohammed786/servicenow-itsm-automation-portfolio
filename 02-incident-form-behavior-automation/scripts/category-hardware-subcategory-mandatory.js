/*
Project: Incident Form Behavior Automation
Type: onChange Client Script
Table: Incident [incident]
Field: category
Purpose: Makes subcategory mandatory when category is Hardware.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == 'hardware') {
        g_form.setMandatory('subcategory', true);
        g_form.addInfoMessage('Subcategory is required for hardware incidents.');
    } else {
        g_form.setMandatory('subcategory', false);
    }
}
