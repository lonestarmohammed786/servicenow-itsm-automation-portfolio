// Project 13: Reporting & Dashboard Automation
// File: monthly-itsm-metrics-summary.js
// Type: Background Script
// Tables: incident, task_sla, change_request, kb_knowledge
// Purpose: Print a summary of key ITSM operational metrics.

function getCount(tableName, fieldName, fieldValue) {
    var ga = new GlideAggregate(tableName);
    ga.addQuery(fieldName, fieldValue);
    ga.addAggregate('COUNT');
    ga.query();

    if (ga.next()) {
        return ga.getAggregate('COUNT');
    }

    return 0;
}

var activeIncidentCount = getCount('incident', 'active', true);
var priorityOneIncidentCount = getCount('incident', 'priority', '1');
var breachedSlaCount = getCount('task_sla', 'has_breached', true);
var pendingChangeCount = getCount('change_request', 'state', '-3');

var today = new GlideDateTime();

var expiredKnowledgeGA = new GlideAggregate('kb_knowledge');
expiredKnowledgeGA.addQuery('workflow_state', 'published');
expiredKnowledgeGA.addQuery('valid_to', '<', today);
expiredKnowledgeGA.addAggregate('COUNT');
expiredKnowledgeGA.query();

var expiredKnowledgeCount = 0;

if (expiredKnowledgeGA.next()) {
    expiredKnowledgeCount = expiredKnowledgeGA.getAggregate('COUNT');
}

gs.info('Monthly ITSM Metrics Summary');
gs.info('Active Incidents: ' + activeIncidentCount);
gs.info('Priority 1 Incidents: ' + priorityOneIncidentCount);
gs.info('Breached SLA Records: ' + breachedSlaCount);
gs.info('Changes Pending Approval: ' + pendingChangeCount);
gs.info('Expired Knowledge Articles: ' + expiredKnowledgeCount);
