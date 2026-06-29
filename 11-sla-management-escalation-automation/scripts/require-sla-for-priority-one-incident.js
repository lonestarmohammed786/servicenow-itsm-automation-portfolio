// Project 11: SLA Management & Escalation Automation
// File: require-sla-for-priority-one-incident.js
// Type: Before Insert/Update Business Rule
// Table: incident
// Purpose: Require SLA review notes for Priority 1 Incidents.

if (current.priority == '1' && gs.nil(current.u_sla_review_notes)) {
    gs.addErrorMessage('SLA review notes are required for Priority 1 Incidents.');
    current.setAbortAction(true);
}
