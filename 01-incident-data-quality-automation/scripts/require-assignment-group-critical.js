/*
Project: Incident Data Quality Automation
Type: Before Insert/Update Business Rule
Table: Incident [incident]
Purpose: Blocks Critical Incidents from being saved without assignment_group.
*/

if (current.priority == '1' && gs.nil(current.assignment_group)) {
    gs.addErrorMessage('Critical incidents must have an assignment group.');
    current.setAbortAction(true);
}
