// Project 14: Asset Lifecycle Automation
// File: require-assigned-to-for-in-use-asset.js
// Type: Before Insert/Update Business Rule
// Table: alm_hardware
// Purpose: Require Assigned to before marking a hardware asset as In Use.

if (current.install_status == '1' && gs.nil(current.assigned_to)) {
    gs.addErrorMessage('Assigned to is required before marking an asset as In Use.');
    current.setAbortAction(true);
}
