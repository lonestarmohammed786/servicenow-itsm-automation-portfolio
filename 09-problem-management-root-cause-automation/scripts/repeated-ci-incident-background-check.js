// Project 09: Problem Management Root Cause Automation
// File: repeated-ci-incident-background-check.js
// Type: Background Script
// Table: incident
// Purpose: Identify how many active Incidents exist for a specific Configuration Item.

var ciSysId = 'PASTE_CI_SYS_ID_HERE';

var count = 0;

var gr = new GlideRecord('incident');
gr.addQuery('cmdb_ci', ciSysId);
gr.addQuery('active', true);
gr.query();

while (gr.next()) {
    count++;
}

gs.info('Repeated active incidents found for this CI: ' + count);
