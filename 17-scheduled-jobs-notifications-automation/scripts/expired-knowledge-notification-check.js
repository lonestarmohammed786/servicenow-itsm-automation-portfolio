// Scheduled Script: Expired Knowledge Notification Check
// Table: kb_knowledge
// Purpose: Find published Knowledge Articles that are expired and log article details

var gr = new GlideRecord('kb_knowledge');
gr.addQuery('workflow_state', 'published');
gr.addQuery('valid_to', '<', gs.nowDateTime());
gr.query();

while (gr.next()) {
    var articleNumber = gr.getDisplayValue('number');
    var shortDesc = gr.getDisplayValue('short_description');
    var validTo = gr.getDisplayValue('valid_to');

    gs.info(articleNumber + ' - ' + shortDesc + ' - ' + validTo);
}
