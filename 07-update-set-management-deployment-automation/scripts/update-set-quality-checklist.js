// Project 07: Update Set Quality Checklist
// Purpose: Validate basic Update Set readiness before movement to another instance.
// Note: Update the updateSetName variable before running this as a background script.

var updateSetName = 'DEP-PostDeploymentValidation-v1';

var us = new GlideRecord('sys_update_set');
us.addQuery('name', updateSetName);
us.query();

if (us.next()) {
    gs.info('Update Set found: ' + us.name);

    // Check Update Set state
    if (us.state == 'complete') {
        gs.info('Update Set state check passed: Update Set is Complete.');
    } else {
        gs.error('Update Set state check failed: Update Set is not Complete. Current state: ' + us.state);
    }

    // Check description
    if (!gs.nil(us.description)) {
        gs.info('Update Set description check passed.');
    } else {
        gs.error('Update Set description check failed: Description is missing.');
    }

    // Check captured update records
    var updateCount = new GlideAggregate('sys_update_xml');
    updateCount.addQuery('update_set', us.getUniqueValue());
    updateCount.addAggregate('COUNT');
    updateCount.query();

    if (updateCount.next()) {
        var count = updateCount.getAggregate('COUNT');

        if (parseInt(count, 10) > 0) {
            gs.info('Update Set content check passed: ' + count + ' update records found.');
        } else {
            gs.error('Update Set content check failed: No update records found.');
        }
    }

} else {
    gs.error('Update Set not found: ' + updateSetName);
}
