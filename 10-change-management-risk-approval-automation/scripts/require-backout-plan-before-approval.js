// Project 10: Change Management Risk & Approval Automation
// File: require-backout-plan-before-approval.js
// Type: Before Update Business Rule
// Table: change_request
// Purpose: Require a backout plan before a Change is submitted for approval.

if (current.state.changesTo('-3') && gs.nil(current.backout_plan)) {
    gs.addErrorMessage('Backout plan is required before submitting a Change for approval.');
    current.setAbortAction(true);
}
