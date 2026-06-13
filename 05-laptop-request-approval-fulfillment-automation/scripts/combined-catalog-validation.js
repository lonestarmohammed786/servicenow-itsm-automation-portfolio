/*
Project: Laptop Request Approval & Fulfillment Automation
Type: Catalog Client Script
Catalog Item: Laptop Request
Script Type: onSubmit
Purpose: Validates required laptop request variables before submission.
*/

function onSubmit() {
    if (g_form.getValue('requested_for') == '') {
        g_form.addErrorMessage('Requested For is required before submitting this request.');
        return false;
    }

    if (g_form.getValue('business_justification') == '') {
        g_form.addErrorMessage('Business justification is required before submitting this request.');
        return false;
    }

    if (g_form.getValue('needed_by') == '') {
        g_form.addErrorMessage('Needed By date is required before submitting this request.');
        return false;
    }

    if (g_form.getValue('laptop_type') == '') {
        g_form.addErrorMessage('Laptop type is required before submitting this request.');
        return false;
    }

    return true;
}
