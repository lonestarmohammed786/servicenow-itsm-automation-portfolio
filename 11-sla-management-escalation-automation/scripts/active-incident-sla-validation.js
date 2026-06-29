// Project 11: SLA Management & Escalation Automation
// File: active-incident-sla-validation.js
// Type: Background Script
// Table: incident / task_sla
// Purpose: Identify active Priority 1 Incidents that do not have related SLA records.

var incGR = new GlideRecord('incident');
incGR.addQuery('active', true);
incGR.addQuery('priority', '1');
incGR.query();

while (incGR.next()) {
    var slaGR = new GlideRecord('task_sla');
    slaGR.addQuery('task', incGR.sys_id);
    slaGR.query();

    if (!slaGR.next()) {
        gs.info('Priority 1 Incident missing SLA record: ' + incGR.number);
    }
}
