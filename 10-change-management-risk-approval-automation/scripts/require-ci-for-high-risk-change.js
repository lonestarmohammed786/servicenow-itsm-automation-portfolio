// Project 10: Change Management Risk & Approval Automation
// File: require-ci-for-high-risk-change.js
// Type: Before Insert/Update Business Rule
// Table: change_request
// Purpose: Require a Configuration Item when a Change Request is high risk.

if (current.risk == '2' && gs.nil(current.cmdb_ci)) {
    gs.addErrorMessage('Configuration Item is required for high-risk Changes.');
    current.setAbortAction(true);
}
