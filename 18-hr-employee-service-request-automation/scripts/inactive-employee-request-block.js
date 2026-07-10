// Business Rule: Inactive Employee Request Block
// Table: sc_req_item
// When: Before Insert/Update
// Purpose: Block employee service requests for inactive users

if (!gs.nil(current.requested_for)) {
    var userGR = new GlideRecord('sys_user');

    if (userGR.get(current.requested_for) && userGR.active == false) {
        gs.addErrorMessage('Employee service requests cannot be created for inactive users.');
        current.setAbortAction(true);
    }
}
