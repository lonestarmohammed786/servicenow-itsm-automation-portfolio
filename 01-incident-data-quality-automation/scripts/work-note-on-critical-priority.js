/*
Project: Incident Data Quality Automation
Type: Before Update Business Rule
Table: Incident [incident]
Purpose: Adds an audit work note when priority changes to Critical.
*/

if (current.priority.changesTo('1')) {
    current.work_notes = 'Priority changed to Critical. Immediate review required.';
}
