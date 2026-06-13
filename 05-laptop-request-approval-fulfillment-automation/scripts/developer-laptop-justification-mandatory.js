/*
Project: Laptop Request Approval & Fulfillment Automation
Type: Catalog Client Script
Catalog Item: Laptop Request
Script Type: onChange
Field: laptop_type
Purpose: Makes business justification mandatory when a developer laptop is selected.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == 'developer') {
        g_form.addInfoMessage('Developer laptop selected. Business justification is required.');
        g_form.setMandatory('business_justification', true);
    } else {
        g_form.setMandatory('business_justification', false);
    }
}
