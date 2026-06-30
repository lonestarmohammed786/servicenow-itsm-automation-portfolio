// Project 12: Knowledge Management Publishing Automation
// File: require-text-before-publish.js
// Type: Before Update Business Rule
// Table: kb_knowledge
// Purpose: Require article body content before publishing a Knowledge Article.

if (current.workflow_state.changesTo('published') && gs.nil(current.text)) {
    gs.addErrorMessage('Article body is required before publishing a Knowledge Article.');
    current.setAbortAction(true);
}
