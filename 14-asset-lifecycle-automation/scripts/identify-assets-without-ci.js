// Project 14: Asset Lifecycle Automation
// File: identify-assets-without-ci.js
// Type: Background Script
// Table: alm_hardware
// Purpose: Identify hardware assets that do not have a linked Configuration Item.

var gr = new GlideRecord('alm_hardware');
gr.addNullQuery('ci');
gr.query();

while (gr.next()) {
    gs.info('Asset missing linked CI: ' + gr.asset_tag);
}
