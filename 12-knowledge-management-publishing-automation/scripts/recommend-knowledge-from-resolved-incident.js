// Project 12: Knowledge Management Publishing Automation
// File: recommend-knowledge-from-resolved-incident.js
// Type: Before Update Business Rule
// Table: incident
// Purpose: Recommend Knowledge Article creation when an Incident is resolved with close notes.

if (current.state.changesTo('6') && !gs.nil(current.close_notes)) {
    current.work_notes = 'Resolution notes are available. Consider creating or updating a Knowledge Article for future reference.';
}
