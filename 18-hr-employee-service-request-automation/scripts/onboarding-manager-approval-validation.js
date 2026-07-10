// Business Rule: Onboarding Manager Approval Validation
// Table: sc_req_item
// When: Before Insert/Update
// Purpose: Ensure Requested For user has a manager for approval routing

if (!gs.nil(current.requested_for)) {
    var userGR = new GlideRecord('sys_user');

    if (userGR.get(current.requested_for) && gs.nil(userGR.manager)) {
        gs.addErrorMessage('Manager is required for onboarding approval.');
        current.setAbortAction(true);
    }
}
