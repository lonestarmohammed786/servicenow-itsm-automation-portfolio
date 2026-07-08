// Scheduled Script: Asset Review Scheduled Check
// Table: alm_hardware
// Purpose: Find hardware assets that are In Use but have no Assigned To user

var gr = new GlideRecord('alm_hardware');
gr.addQuery('install_status', '1');
gr.addNullQuery('assigned_to');
gr.query();

while (gr.next()) {
    var assetTag = gr.getDisplayValue('asset_tag');
    var displayName = gr.getDisplayValue('display_name');
    var status = gr.getDisplayValue('install_status');

    gs.info(assetTag + ' - ' + displayName + ' - ' + status);
}
