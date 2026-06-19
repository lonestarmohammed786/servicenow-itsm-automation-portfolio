// Project 06: Assigned To Email Reference Lookup
// Purpose: Resolve imported assigned_to_email to an active sys_user sys_id.

if (gs.nil(source.u_assigned_to_email)) {
    log.error('Skipped asset import row: assigned_to_email is missing.');
    ignore = true;
} else {
    var userGR = new GlideRecord('sys_user');
    userGR.addQuery('email', source.u_assigned_to_email);
    userGR.addQuery('active', true);
    userGR.query();

    if (userGR.next()) {
        target.assigned_to = userGR.getUniqueValue();
    } else {
        log.error('Skipped asset import row: no active user found for email - ' + source.u_assigned_to_email);
        ignore = true;
    }
}
