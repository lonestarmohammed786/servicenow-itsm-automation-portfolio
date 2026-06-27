// Project 10: Change Management Risk & Approval Automation
// File: change-state-change-worknote.js
// Type: Before Update Business Rule
// Table: change_request
// Purpose: Add a work note when the Change Request state changes.

if (current.state.changes()) {
    current.work_notes = 'Change state changed. Review risk, approvals, implementation plan, backout plan, and test plan.';
}
