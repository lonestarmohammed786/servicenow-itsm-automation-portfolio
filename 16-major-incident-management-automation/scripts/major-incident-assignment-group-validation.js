// Business Rule: Major Incident Assignment Group Validation
// Table: Incident
// When: Before Insert/Update
// Purpose: Ensure every Major Incident has assignment group ownership

if (current.major_incident_state != '' && gs.nil(current.assignment_group)) {

    gs.addErrorMessage('Assignment group is required for Major Incidents.');
    current.setAbortAction(true);
}
