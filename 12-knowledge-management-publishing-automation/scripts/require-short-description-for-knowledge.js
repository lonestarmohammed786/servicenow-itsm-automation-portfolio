// Project 12: Knowledge Management Publishing Automation
// File: require-short-description-for-knowledge.js
// Type: Before Insert/Update Business Rule
// Table: kb_knowledge
// Purpose: Require a short description before saving a Knowledge Article.

if (gs.nil(current.short_description)) {
    gs.addErrorMessage('Short description is required for Knowledge Articles.');
    current.setAbortAction(true);
}
