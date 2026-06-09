/*
Project: Incident Data Quality Automation
Type: Before Update Business Rule
Table: Incident [incident]
Purpose: Adds an audit work note when assignment_group changes.
*/

if (current.assignment_group.changes()) {
    current.work_notes = 'Assignment group changed. Please verify ownership.';
}
