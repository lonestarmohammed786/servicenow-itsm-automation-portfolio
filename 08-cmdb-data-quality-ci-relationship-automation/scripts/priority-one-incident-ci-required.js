// Project 08: CMDB Data Quality & CI Relationship Automation
// File: priority-one-incident-ci-required.js
// Type: Before Insert/Update Business Rule
// Table: incident
// Purpose: Require an affected Configuration Item for Priority 1 incidents.

if (current.priority == '1' && gs.nil(current.cmdb_ci)) {
gs.addErrorMessage('Configuration item is required for Priority 1 incidents.');
current.setAbortAction(true);
}
