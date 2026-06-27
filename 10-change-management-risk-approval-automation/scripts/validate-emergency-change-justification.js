// Project 10: Change Management Risk & Approval Automation
// File: validate-emergency-change-justification.js
// Type: Before Insert/Update Business Rule
// Table: change_request
// Purpose: Require justification when a Change Request is marked as Emergency.

if (current.type == 'emergency' && gs.nil(current.justification)) {
    gs.addErrorMessage('Justification is required for Emergency Changes.');
    current.setAbortAction(true);
}
