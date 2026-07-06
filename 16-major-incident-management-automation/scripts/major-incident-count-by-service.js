// Background Script: Major Incident Count by Service
// Table: Incident
// Purpose: Count active Major Incidents grouped by Business Service

var ga = new GlideAggregate('incident');
ga.addQuery('major_incident_state', '!=', '');
ga.addQuery('active', true);
ga.addAggregate('COUNT');
ga.groupBy('business_service');
ga.query();

while (ga.next()) {
    var serviceName = ga.getDisplayValue('business_service');
    var count = ga.getAggregate('COUNT');

    gs.info(serviceName + ' - ' + count);
}
