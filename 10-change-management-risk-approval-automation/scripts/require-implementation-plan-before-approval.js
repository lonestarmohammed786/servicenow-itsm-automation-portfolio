// Project 10: Change Management Risk & Approval Automation
// File: require-implementation-plan-before-approval.js
// Type: Before Update Business Rule
// Table: change_request
// Purpose: Require an implementation plan before a Change is submitted for approval.

if (current.state.changesTo('-3') && gs.nil(current.implementation_plan)) {
    gs.addErrorMessage('Implementation plan is required before submitting a Change for approval.');
    current.setAbortAction(true);
}
