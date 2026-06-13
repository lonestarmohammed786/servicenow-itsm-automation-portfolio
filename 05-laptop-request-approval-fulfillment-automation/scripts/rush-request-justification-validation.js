/*
Project: Laptop Request Approval & Fulfillment Automation
Type: Catalog Client Script
Catalog Item: Laptop Request
Script Type: onSubmit
Purpose: Requires business justification when a rush laptop request is submitted.
*/

function onSubmit() {
    var rush = g_form.getValue('is_rush_request');
    var businessJustification = g_form.getValue('business_justification');

    if (rush == 'true' && businessJustification == '') {
        g_form.addErrorMessage('Rush laptop requests require a business justification.');
        return false;
    }

    return true;
}
