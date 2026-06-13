/*
Project: Laptop Request Approval & Fulfillment Automation
Type: Catalog Client Script
Catalog Item: Laptop Request
Script Type: onChange
Field: laptop_type
Purpose: Clears business justification when a standard laptop is selected.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == 'standard') {
        g_form.setValue('business_justification', '');
        g_form.addInfoMessage('Business justification cleared because standard laptop was selected.');
    }
}
