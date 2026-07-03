// Project 14: Asset Lifecycle Automation
// File: retired-asset-background-check.js
// Type: Background Script
// Table: alm_hardware
// Purpose: Identify retired hardware assets.

var gr = new GlideRecord('alm_hardware');
gr.addQuery('install_status', '7');
gr.query();

while (gr.next()) {
    gs.info('Retired asset found: ' + gr.asset_tag);
}
