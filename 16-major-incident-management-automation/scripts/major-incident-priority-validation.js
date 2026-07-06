// Business Rule: Major Incident Priority Validation
// Table: Incident
// When: Before Insert/Update
// Purpose: Ensure Major Incidents are only Priority 1 or Priority 2

if (current.major_incident_state != '' &&
    current.priority != '1' &&
    current.priority != '2') {

    gs.addErrorMessage('Major Incidents must have Priority 1 - Critical or Priority 2 - High.');
    current.setAbortAction(true);
}
