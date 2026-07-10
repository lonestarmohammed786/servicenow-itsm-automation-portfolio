// Business Rule: Employee Request Required Fields
// Table: sc_req_item
// When: Before Insert/Update
// Purpose: Require key fields on employee service requests

if (gs.nil(current.requested_for) ||
    gs.nil(current.short_description) ||
    gs.nil(current.assignment_group)) {

    gs.addErrorMessage('Requested For, Short Description, and Assignment Group are required for employee service requests.');
    current.setAbortAction(true);
}
