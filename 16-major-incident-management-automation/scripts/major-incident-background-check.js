// Background Script: Major Incident Background Check
// Table: Incident
// Purpose: Find active Major Incidents and log the incident number and short description

var gr = new GlideRecord('incident');
gr.addQuery('major_incident_state', '!=', '');
gr.addQuery('active', true);
gr.query();

while (gr.next()) {
    var inc = gr.getDisplayValue('number');
    var shortDesc = gr.getDisplayValue('short_description');

    gs.info(inc + ' - ' + shortDesc);
}
