// Project 10: Change Management Risk & Approval Automation
// File: recommend-change-from-problem.js
// Type: Before Update Business Rule
// Table: problem
// Purpose: Recommend Change Management review when a Known Error has workaround documentation.

if (current.known_error == true && !gs.nil(current.workaround)) {
    current.work_notes = 'Known Error documented. Review whether a Change Request is needed for a permanent fix.';
}
