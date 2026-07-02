// Project 13: Reporting & Dashboard Automation
// File: breached-sla-report-check.js
// Type: Background Script
// Table: task_sla
// Purpose: Count breached SLA records.

var ga = new GlideAggregate('task_sla');
ga.addQuery('has_breached', true);
ga.addAggregate('COUNT');
ga.query();

if (ga.next()) {
    gs.info('Total breached SLA records: ' + ga.getAggregate('COUNT'));
}
