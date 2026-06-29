// Project 11: SLA Management & Escalation Automation
// File: notify-assignment-group-on-sla-risk.js
// Type: Before Update Business Rule
// Table: incident
// Purpose: Add a work note when the assignment group should be alerted for high SLA breach risk.

if (current.u_sla_breach_risk == 'High' && !gs.nil(current.assignment_group)) {
    current.work_notes = 'Assignment group notified for high SLA breach risk.';
}
