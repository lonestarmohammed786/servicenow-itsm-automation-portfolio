// Project 06: Laptop Asset Import - onBefore Transform Script
// Purpose: Validate imported laptop asset data before insert/update.

if (
    gs.nil(source.u_serial_number) ||
    gs.nil(source.u_asset_tag) ||
    gs.nil(source.u_model_name) ||
    gs.nil(source.u_assigned_to_email) ||
    gs.nil(source.u_status)
) {
    log.error('Skipped asset import row: one or more required fields are missing.');
    ignore = true;
} else {

    // Asset tag format validation
    if (source.u_asset_tag.indexOf('LAP-') != 0) {
        log.error('Skipped asset import row: invalid asset tag format - ' + source.u_asset_tag);
        ignore = true;
    }

    // Active user lookup
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

    // Model lookup
    var modelGR = new GlideRecord('cmdb_model');
    modelGR.addQuery('name', source.u_model_name);
    modelGR.query();

    if (modelGR.next()) {
        target.model_id = modelGR.getUniqueValue();
    } else {
        log.error('Skipped asset import row: model not found - ' + source.u_model_name);
        ignore = true;
    }

    // Status conversion
    if (source.u_status == 'Installed') {
        target.install_status = 1;
    } else if (source.u_status == 'In Stock') {
        target.install_status = 6;
    } else if (source.u_status == 'Retired') {
        target.install_status = 7;
    } else {
        log.error('Skipped asset import row: invalid status value - ' + source.u_status);
        ignore = true;
    }

    // Source to target mapping
    target.serial_number = source.u_serial_number;
    target.asset_tag = source.u_asset_tag;
}
