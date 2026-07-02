// Project 13: Reporting & Dashboard Automation
// File: expired-knowledge-report-check.js
// Type: Background Script
// Table: kb_knowledge
// Purpose: Count published Knowledge Articles that are past their valid-to date.

var today = new GlideDateTime();

var ga = new GlideAggregate('kb_knowledge');
ga.addQuery('workflow_state', 'published');
ga.addQuery('valid_to', '<', today);
ga.addAggregate('COUNT');
ga.query();

if (ga.next()) {
    gs.info('Total expired Knowledge Articles: ' + ga.getAggregate('COUNT'));
}
