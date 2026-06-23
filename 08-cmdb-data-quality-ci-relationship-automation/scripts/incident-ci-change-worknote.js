// Project 08: CMDB Data Quality & CI Relationship Automation
// File: incident-ci-change-worknote.js
// Type: Before Update Business Rule
// Table: incident
// Purpose: Add a work note when the affected Configuration Item changes.

if (current.cmdb_ci.changes()) {
current.work_notes = 'Affected CI changed. Please verify impact and ownership.';
}
