// Project 11: SLA Management & Escalation Automation
// File: escalate-incident-on-sla-breach-risk.js
// Type: Before Update Business Rule
// Table: incident
// Purpose: Escalate an Incident when SLA breach risk is high.

if (current.u_sla_breach_risk == 'High') {
    current.priority = '1';
    current.urgency = '1';
    current.impact = '1';
    current.work_notes = 'Incident escalated due to high SLA breach risk.';
}
