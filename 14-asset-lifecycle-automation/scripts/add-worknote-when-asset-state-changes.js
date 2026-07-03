// Project 14: Asset Lifecycle Automation
// File: add-worknote-when-asset-state-changes.js
// Type: Before Update Business Rule
// Table: alm_hardware
// Purpose: Add a work note when the asset lifecycle state changes.

if (current.install_status.changes()) {
    current.work_notes = 'Asset lifecycle state changed. Review assignment, CI link, and lifecycle status.';
}
