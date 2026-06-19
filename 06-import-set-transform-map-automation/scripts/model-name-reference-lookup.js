// Project 06: Model Name Reference Lookup
// Purpose: Resolve imported model_name to a cmdb_model sys_id.

if (gs.nil(source.u_model_name)) {
    log.error('Skipped asset import row: model_name is missing.');
    ignore = true;
} else {
    var modelGR = new GlideRecord('cmdb_model');
    modelGR.addQuery('name', source.u_model_name);
    modelGR.query();

    if (modelGR.next()) {
        target.model_id = modelGR.getUniqueValue();
    } else {
        log.error('Skipped asset import row: model not found - ' + source.u_model_name);
        ignore = true;
    }
}
