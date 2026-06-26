// Project 09: Problem Management Root Cause Automation
// File: require-root-cause-before-close.js
// Type: Before Update Business Rule
// Table: problem
// Purpose: Require root cause notes before allowing a Problem record to be closed.

if (current.problem_state.changesTo('107') && gs.nil(current.cause_notes)) {
    gs.addErrorMessage('Root cause notes are required before closing a Problem.');
    current.setAbortAction(true);
}
