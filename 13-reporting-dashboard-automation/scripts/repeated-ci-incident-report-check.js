// Project 13: Reporting & Dashboard Automation
// File: repeated-ci-incident-report-check.js
// Type: Background Script
// Table: incident
// Purpose: Count active Incidents grouped by Configuration Item.

var ga = new GlideAggregate('incident');
ga.addQuery('active', true);
ga.addNotNullQuery('cmdb_ci');
ga.addAggregate('COUNT');
ga.groupBy('cmdb_ci');
ga.query();

while (ga.next()) {
    var ciName = ga.cmdb_ci.getDisplayValue();
    var incidentCount = ga.getAggregate('COUNT');

    gs.info(ciName + ': ' + incidentCount);
}
