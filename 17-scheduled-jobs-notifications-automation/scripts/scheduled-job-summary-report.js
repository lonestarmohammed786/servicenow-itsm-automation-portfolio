// Scheduled Script: Scheduled Job Summary Report
// Purpose: Produce a daily ITSM scheduled review summary using GlideAggregate

var criticalIncidentCount = 0;
var breachedSlaCount = 0;
var expiredKnowledgeCount = 0;
var unassignedAssetCount = 0;

// Count active Priority 1 Incidents
var incidentGA = new GlideAggregate('incident');
incidentGA.addQuery('priority', '1');
incidentGA.addQuery('active', true);
incidentGA.addAggregate('COUNT');
incidentGA.query();

if (incidentGA.next()) {
    criticalIncidentCount = incidentGA.getAggregate('COUNT');
}

// Count breached SLA records
var slaGA = new GlideAggregate('task_sla');
slaGA.addQuery('stage', 'breached');
slaGA.addQuery('active', true);
slaGA.addAggregate('COUNT');
slaGA.query();

if (slaGA.next()) {
    breachedSlaCount = slaGA.getAggregate('COUNT');
}

// Count expired published Knowledge Articles
var kbGA = new GlideAggregate('kb_knowledge');
kbGA.addQuery('workflow_state', 'published');
kbGA.addQuery('valid_to', '<', gs.nowDateTime());
kbGA.addAggregate('COUNT');
kbGA.query();

if (kbGA.next()) {
    expiredKnowledgeCount = kbGA.getAggregate('COUNT');
}

// Count In Use hardware assets with no assigned user
var assetGA = new GlideAggregate('alm_hardware');
assetGA.addQuery('install_status', '1');
assetGA.addNullQuery('assigned_to');
assetGA.addAggregate('COUNT');
assetGA.query();

if (assetGA.next()) {
    unassignedAssetCount = assetGA.getAggregate('COUNT');
}

// Print summary report
gs.info('Daily ITSM Scheduled Review Summary');
gs.info('Critical Incidents: ' + criticalIncidentCount);
gs.info('Breached SLAs: ' + breachedSlaCount);
gs.info('Expired Knowledge Articles: ' + expiredKnowledgeCount);
gs.info('Unassigned In-Use Assets: ' + unassignedAssetCount);
