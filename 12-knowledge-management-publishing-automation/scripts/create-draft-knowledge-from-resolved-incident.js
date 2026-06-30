// Project 12: Knowledge Management Publishing Automation
// File: create-draft-knowledge-from-resolved-incident.js
// Type: After Update Business Rule
// Table: incident
// Purpose: Create a draft Knowledge Article when an Incident is resolved with close notes.

if (current.state.changesTo('6') && !gs.nil(current.close_notes)) {
    var kbGR = new GlideRecord('kb_knowledge');
    kbGR.initialize();
    kbGR.short_description = current.short_description;
    kbGR.text = current.close_notes;
    kbGR.workflow_state = 'draft';
    kbGR.insert();
}
