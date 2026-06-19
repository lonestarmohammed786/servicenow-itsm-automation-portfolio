// Project 06: Status Value Conversion
// Purpose: Convert imported readable status values into ServiceNow install_status values.

if (gs.nil(source.u_status)) {
    log.error('Skipped asset import row: status is missing.');
    ignore = true;
} else if (source.u_status == 'Installed') {
    target.install_status = 1;
} else if (source.u_status == 'In Stock') {
    target.install_status = 6;
} else if (source.u_status == 'Retired') {
    target.install_status = 7;
} else {
    log.error('Skipped asset import row: invalid status value - ' + source.u_status);
    ignore = true;
}
