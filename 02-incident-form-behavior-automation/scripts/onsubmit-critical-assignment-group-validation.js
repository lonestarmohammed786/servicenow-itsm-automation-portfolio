/*
Project: Incident Form Behavior Automation
Type: onSubmit Client Script
Table: Incident [incident]
Purpose: Blocks submission when priority is Critical and assignment_group is empty.
*/

function onSubmit() {
    if (g_form.getValue('priority') == '1' && g_form.getValue('assignment_group') == '') {
        g_form.addErrorMessage('Critical incidents require an assignment group.');
        return false;
    }

    return true;
}
