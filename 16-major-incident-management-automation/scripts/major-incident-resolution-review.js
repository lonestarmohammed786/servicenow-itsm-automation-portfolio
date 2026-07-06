// Business Rule: Major Incident Resolution Review
// Table: Incident
// When: Before Update
// Purpose: Prevent Major Incidents from being resolved without close notes

if (current.major_incident_state != '' &&
    current.state == '6' &&
    gs.nil(current.close_notes)) {

    gs.addErrorMessage('Close notes are required before resolving a Major Incident.');
    current.setAbortAction(true);
}
