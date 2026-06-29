// Project 11: SLA Management & Escalation Automation
// File: add-worknote-when-incident-near-sla-breach.js
// Type: Before Update Business Rule
// Table: incident
// Purpose: Add a work note when an Incident has a high SLA breach risk.

if (current.u_sla_breach_risk == 'High') {
    current.work_notes = 'SLA breach risk is high. Review assignment, priority, and next action immediately.';
}
