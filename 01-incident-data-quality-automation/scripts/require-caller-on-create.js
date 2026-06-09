/*
Project: Incident Data Quality Automation
Type: Before Insert Business Rule
Table: Incident [incident]
Purpose: Blocks Incident creation if caller_id is empty.
*/

if (gs.nil(current.caller_id)) {
    gs.addErrorMessage('Caller is required before creating an incident.');
    current.setAbortAction(true);
}
