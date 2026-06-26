// Project 09: Problem Management Root Cause Automation
// File: detect-repeat-incidents-for-ci.js
// Type: After Insert Business Rule
// Table: incident
// Purpose: Detect repeated active Incidents for the same Configuration Item.

if (!gs.nil(current.cmdb_ci)) {
    var count = 0;

    var incidentGR = new GlideRecord('incident');
    incidentGR.addQuery('cmdb_ci', current.cmdb_ci);
    incidentGR.addQuery('active', true);
    incidentGR.query();

    while (incidentGR.next()) {
        count++;
    }

    if (count >= 3) {
        current.work_notes = 'Multiple active incidents exist for this CI. Consider reviewing for possible Problem Management.';
        current.update();
    }
}
