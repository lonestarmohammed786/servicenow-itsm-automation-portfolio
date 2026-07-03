// Project 14: Asset Lifecycle Automation
// File: assigned-asset-count-by-user.js
// Type: Background Script
// Table: alm_hardware
// Purpose: Count assigned hardware assets grouped by user.

var ga = new GlideAggregate('alm_hardware');
ga.addNotNullQuery('assigned_to');
ga.addAggregate('COUNT');
ga.groupBy('assigned_to');
ga.query();

while (ga.next()) {
    var userName = ga.assigned_to.getDisplayValue();
    var assetCount = ga.getAggregate('COUNT');

    gs.info(userName + ': ' + assetCount);
}
