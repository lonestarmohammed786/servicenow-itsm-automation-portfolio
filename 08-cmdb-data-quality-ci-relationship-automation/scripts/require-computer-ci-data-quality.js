// Project 08: CMDB Data Quality & CI Relationship Automation
// File: require-computer-ci-data-quality.js
// Type: Before Insert/Update Business Rule
// Table: cmdb_ci_computer
// Purpose: Require important CMDB data before saving a computer CI.

var hasError = false;

if (gs.nil(current.serial_number)) {
gs.addErrorMessage('Serial number is required for computer CIs.');
hasError = true;
}

if (gs.nil(current.owned_by)) {
gs.addErrorMessage('CI owner is required for computer CIs.');
hasError = true;
}

if (gs.nil(current.support_group)) {
gs.addErrorMessage('Support group is required for computer CIs.');
hasError = true;
}

if (hasError) {
current.setAbortAction(true);
}
