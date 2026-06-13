/*
Project: Laptop Request Approval & Fulfillment Automation
Type: Catalog Client Script
Catalog Item: Laptop Request
Script Type: onSubmit
Purpose: Requires a stronger business justification when a developer laptop is requested.
*/

function onSubmit() {
    var laptopType = g_form.getValue('laptop_type');
    var businessJustification = g_form.getValue('business_justification');

    if (laptopType == 'developer' && businessJustification.length < 30) {
        g_form.addErrorMessage('Developer laptop requests require a stronger business justification.');
        return false;
    }

    return true;
}
