// Project 09: Problem Management Root Cause Automation
// File: count-related-incidents.js
// Type: Background Script
// Table: incident
// Purpose: Count Incidents linked to a specific Problem record.

var problemSysId = 'PASTE_PROBLEM_SYS_ID_HERE';

var count = 0;

var gr = new GlideRecord('incident');
gr.addQuery('problem_id', problemSysId);
gr.query();

while (gr.next()) {
    count++;
}

gs.info('Total incidents linked to this Problem: ' + count);
