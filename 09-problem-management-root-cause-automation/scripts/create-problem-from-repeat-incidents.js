// Project 09: Problem Management Root Cause Automation
// File: create-problem-from-repeat-incidents.js
// Type: After Insert Business Rule
// Table: incident
// Purpose: Create a Problem for repeated Incidents while preventing duplicate active Problems for the same CI.

if (!gs.nil(current.cmdb_ci)) {
    var count = 0;

    var incidentGR = new GlideRecord('incident');
    incidentGR.addQuery('cmdb_ci', current.cmdb_ci);
    incidentGR.addQuery('active', true);
    incidentGR.query();

    while (incidentGR.next()) {
        count++;
    }

    if (count >= 3) {
        var existingProblemGR = new GlideRecord('problem');
        existingProblemGR.addQuery('cmdb_ci', current.cmdb_ci);
        existingProblemGR.addQuery('active', true);
        existingProblemGR.query();

        if (!existingProblemGR.next()) {
            var problemGR = new GlideRecord('problem');
            problemGR.initialize();
            problemGR.short_description = 'Recurring incidents detected for CI: ' + current.cmdb_ci.getDisplayValue();
            problemGR.cmdb_ci = current.cmdb_ci;
            problemGR.description = 'Multiple active incidents were detected for the same Configuration Item. Review recurring issue and perform root cause analysis.';
            problemGR.insert();
        } else {
            current.work_notes = 'An active Problem already exists for this CI. Link this Incident to the existing Problem if appropriate.';
            current.update();
        }
    }
}
