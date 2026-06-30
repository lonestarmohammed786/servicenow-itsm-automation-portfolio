// Project 12: Knowledge Management Publishing Automation
// File: add-worknote-when-article-published.js
// Type: Before Update Business Rule
// Table: kb_knowledge
// Purpose: Add a work note when a Knowledge Article is published.

if (current.workflow_state.changesTo('published')) {
    current.work_notes = 'Knowledge Article published. Review visibility, category, and article usefulness.';
}
