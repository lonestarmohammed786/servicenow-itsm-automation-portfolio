// Project 08: CMDB Data Quality & CI Relationship Automation
// File: cmdb-data-quality-background-check.js
// Type: Background Script
// Table: cmdb_ci_computer
// Purpose: Identify existing computer CIs with missing key CMDB data.

// Check computer CIs missing serial number
var serialGR = new GlideRecord('cmdb_ci_computer');
serialGR.addNullQuery('serial_number');
serialGR.query();

while (serialGR.next()) {
gs.info('Computer CI missing serial number: ' + serialGR.name);
}

// Check computer CIs missing owner
var ownerGR = new GlideRecord('cmdb_ci_computer');
ownerGR.addNullQuery('owned_by');
ownerGR.query();

while (ownerGR.next()) {
gs.info('Computer CI missing owner: ' + ownerGR.name);
}

// Check computer CIs missing support group
var groupGR = new GlideRecord('cmdb_ci_computer');
groupGR.addNullQuery('support_group');
groupGR.query();

while (groupGR.next()) {
gs.info('Computer CI missing support group: ' + groupGR.name);
}
