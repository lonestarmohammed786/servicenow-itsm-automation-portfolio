// Project 12: Knowledge Management Publishing Automation
// File: knowledge-review-background-check.js
// Type: Background Script
// Table: kb_knowledge
// Purpose: Identify draft Knowledge Articles missing article body text.

var gr = new GlideRecord('kb_knowledge');
gr.addQuery('workflow_state', 'draft');
gr.addNullQuery('text');
gr.query();

while (gr.next()) {
    gs.info('Draft Knowledge Article missing body text: ' + gr.short_description);
}
