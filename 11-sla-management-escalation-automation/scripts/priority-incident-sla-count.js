// Project 11: SLA Management & Escalation Automation
// File: priority-incident-sla-count.js
// Type: Background Script
// Table: incident / task_sla
// Purpose: Count SLA records linked to active Priority 1 Incidents.

var incGR = new GlideRecord('incident');
incGR.addQuery('active', true);
incGR.addQuery('priority', '1');
incGR.query();

while (incGR.next()) {
    var count = 0;

    var slaGR = new GlideRecord('task_sla');
    slaGR.addQuery('task', incGR.sys_id);
    slaGR.query();

    while (slaGR.next()) {
        count++;
    }

    gs.info('Incident ' + incGR.number + ' has ' + count + ' SLA records.');
}
