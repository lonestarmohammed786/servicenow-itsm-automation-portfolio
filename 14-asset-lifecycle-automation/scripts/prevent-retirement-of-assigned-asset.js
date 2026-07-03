// Project 14: Asset Lifecycle Automation
// File: prevent-retirement-of-assigned-asset.js
// Type: Before Update Business Rule
// Table: alm_hardware
// Purpose: Prevent retirement of a hardware asset while it is still assigned to a user.

if (current.install_status.changesTo('7') && !gs.nil(current.assigned_to)) {
    gs.addErrorMessage('Asset cannot be retired while it is still assigned to a user.');
    current.setAbortAction(true);
}
