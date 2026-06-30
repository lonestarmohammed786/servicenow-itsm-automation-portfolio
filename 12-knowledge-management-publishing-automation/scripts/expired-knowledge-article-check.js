// Project 12: Knowledge Management Publishing Automation
// File: expired-knowledge-article-check.js
// Type: Background Script
// Table: kb_knowledge
// Purpose: Identify published Knowledge Articles that are past their valid-to date.

var today = new GlideDateTime();

var gr = new GlideRecord('kb_knowledge');
gr.addQuery('workflow_state', 'published');
gr.addQuery('valid_to', '<', today);
gr.query();

while (gr.next()) {
    gs.info('Expired Knowledge Article found: ' + gr.short_description);
}
