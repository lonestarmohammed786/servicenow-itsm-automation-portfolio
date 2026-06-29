// Project 11: SLA Management & Escalation Automation
// File: sla-breach-background-check.js
// Type: Background Script
// Table: task_sla
// Purpose: Identify SLA records that have breached.

var gr = new GlideRecord('task_sla');
gr.addQuery('has_breached', true);
gr.query();

while (gr.next()) {
    gs.info('Breached SLA found. Task: ' + gr.task.getDisplayValue() + ' | SLA: ' + gr.sla.getDisplayValue());
}
