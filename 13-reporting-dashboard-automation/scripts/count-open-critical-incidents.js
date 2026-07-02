// Project 13: Reporting & Dashboard Automation
// File: count-open-critical-incidents.js
// Type: Background Script
// Table: incident
// Purpose: Count open Critical / Priority 1 Incidents.

var ga = new GlideAggregate('incident');
ga.addQuery('priority', '1');
ga.addQuery('active', true);
ga.addAggregate('COUNT');
ga.query();

if (ga.next()) {
    gs.info('Total open Critical Incidents: ' + ga.getAggregate('COUNT'));
}
