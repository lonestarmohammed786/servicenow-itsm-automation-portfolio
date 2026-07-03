// Project 14: Asset Lifecycle Automation
// File: sync-asset-owner-to-ci.js
// Type: Before Update Business Rule
// Table: alm_hardware
// Purpose: Sync the hardware asset Assigned to user with the linked Configuration Item.

if (current.assigned_to.changes() && !gs.nil(current.ci)) {
    var ciGR = new GlideRecord('cmdb_ci');

    if (ciGR.get(current.ci)) {
        ciGR.assigned_to = current.assigned_to;
        ciGR.update();
    }
}
