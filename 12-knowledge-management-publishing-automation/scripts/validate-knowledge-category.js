// Project 12: Knowledge Management Publishing Automation
// File: validate-knowledge-category.js
// Type: Before Update Business Rule
// Table: kb_knowledge
// Purpose: Require a Knowledge category before publishing an article.

if (current.workflow_state.changesTo('published') && gs.nil(current.kb_category)) {
    gs.addErrorMessage('Knowledge category is required before publishing.');
    current.setAbortAction(true);
}
