// Project 13: Reporting & Dashboard Automation
// File: incident-count-by-assignment-group.js
// Type: Background Script
// Table: incident
// Purpose: Count active Incidents grouped by assignment group.

var ga = new GlideAggregate('incident');
ga.addQuery('active', true);
ga.addNotNullQuery('assignment_group');
ga.addAggregate('COUNT');
ga.groupBy('assignment_group');
ga.query();

while (ga.next()) {
    var groupName = ga.assignment_group.getDisplayValue();
    var incidentCount = ga.getAggregate('COUNT');

    gs.info(groupName + ': ' + incidentCount);
}
