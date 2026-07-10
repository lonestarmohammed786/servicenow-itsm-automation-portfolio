// Business Rule: Department-Based Request Routing
// Table: sc_req_item
// When: Before Insert/Update
// Purpose: Add routing notes based on the Requested For user's department

if (!gs.nil(current.requested_for)) {
    var userGR = new GlideRecord('sys_user');

    if (userGR.get(current.requested_for)) {
        var deptName = userGR.getDisplayValue('department');

        if (deptName == 'IT') {
            current.work_notes = 'Route to IT Support team.';
        } else if (deptName == 'HR') {
            current.work_notes = 'Route to HR Support team.';
        } else if (deptName == 'Finance') {
            current.work_notes = 'Route to Finance Support team.';
        }
    }
}
