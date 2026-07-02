// Project 13: Reporting & Dashboard Automation
// File: pending-change-approval-check.js
// Type: Background Script
// Table: change_request
// Purpose: Count Change Requests pending approval / authorization.

var ga = new GlideAggregate('change_request');
ga.addQuery('state', '-3');
ga.addAggregate('COUNT');
ga.query();

if (ga.next()) {
    gs.info('Total Changes pending approval: ' + ga.getAggregate('COUNT'));
}
