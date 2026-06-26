// Project 09: Problem Management Root Cause Automation
// File: validate-known-error-documentation.js
// Type: Before Update Business Rule
// Table: problem
// Purpose: Require workaround documentation when a Problem is marked as a Known Error.

if (current.known_error == true && gs.nil(current.workaround)) {
    gs.addErrorMessage('Workaround details are required when marking a Problem as a Known Error.');
    current.setAbortAction(true);
}
