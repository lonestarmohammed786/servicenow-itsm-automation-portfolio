// Project 10: Change Management Risk & Approval Automation
// File: require-test-plan-before-approval.js
// Type: Before Update Business Rule
// Table: change_request
// Purpose: Require a test plan before a Change is submitted for approval.

if (current.state.changesTo('-3') && gs.nil(current.test_plan)) {
    gs.addErrorMessage('Test plan is required before submitting a Change for approval.');
    current.setAbortAction(true);
}
