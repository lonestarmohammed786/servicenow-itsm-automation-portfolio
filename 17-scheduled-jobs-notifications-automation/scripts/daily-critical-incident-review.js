// Scheduled Script: Daily Critical Incident Review
// Table: Incident
// Purpose: Find active Priority 1 Critical Incidents and log key details

var gr = new GlideRecord('incident');
gr.addQuery('priority', '1');
gr.addQuery('active', true);
gr.query();

while (gr.next()) {
    var num = gr.getDisplayValue('number');
    var shortDesc = gr.getDisplayValue('short_description');
    var grp = gr.getDisplayValue('assignment_group');

    gs.info(num + ' - ' + shortDesc + ' - ' + grp);
}
