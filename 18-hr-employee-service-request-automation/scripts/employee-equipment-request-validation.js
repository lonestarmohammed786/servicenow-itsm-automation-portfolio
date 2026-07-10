// Business Rule: Employee Equipment Request Validation
// Table: sc_req_item
// When: Before Insert/Update
// Purpose: Require assignment group for employee equipment-related requests

var desc = current.short_description.toString().toLowerCase();

if ((desc.indexOf('laptop') > -1 || desc.indexOf('equipment') > -1) &&
    gs.nil(current.assignment_group)) {

    gs.addErrorMessage('Assignment Group is required for employee equipment requests.');
    current.setAbortAction(true);
}
