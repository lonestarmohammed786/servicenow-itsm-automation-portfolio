/*
Project: Laptop Request Approval & Fulfillment Automation
Type: Catalog Client Script
Catalog Item: Laptop Request
Script Type: onSubmit
Purpose: Requires a Needed By date when a rush laptop request is submitted.
*/

function onSubmit() {
    var rush = g_form.getValue('is_rush_request');
    var neededBy = g_form.getValue('needed_by');

    if (rush == 'true' && neededBy == '') {
        g_form.addErrorMessage('Rush laptop requests require a Needed By date.');
        return false;
    }

    return true;
}
