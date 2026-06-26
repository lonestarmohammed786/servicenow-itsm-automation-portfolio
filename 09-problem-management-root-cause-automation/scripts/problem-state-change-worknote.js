// Project 09: Problem Management Root Cause Automation
// File: problem-state-change-worknote.js
// Type: Before Update Business Rule
// Table: problem
// Purpose: Add a work note when the Problem state changes.

if (current.problem_state.changes()) {
    current.work_notes = 'Problem state changed. Review RCA progress, known error status, and next action.';
}
