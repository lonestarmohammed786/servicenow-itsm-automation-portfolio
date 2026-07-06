// Business Rule: Major Incident Communication Work Note
// Table: Incident
// When: Before Update
// Purpose: Require communication work notes when updating a Critical Major Incident

if (current.major_incident_state != '' &&
    current.priority == '1' &&
    gs.nil(current.work_notes)) {

    gs.addErrorMessage('Work notes are required when updating a Critical Major Incident.');
    current.setAbortAction(true);
}
