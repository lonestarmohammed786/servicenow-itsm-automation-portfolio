// Project 10: Change Management Risk & Approval Automation
// File: change-planning-background-check.js
// Type: Background Script
// Table: change_request
// Purpose: Identify Change Requests missing key planning information.

// Check Changes missing implementation plan
var implementationGR = new GlideRecord('change_request');
implementationGR.addNullQuery('implementation_plan');
implementationGR.query();

while (implementationGR.next()) {
    gs.info('Change missing implementation plan: ' + implementationGR.number);
}

// Check Changes missing backout plan
var backoutGR = new GlideRecord('change_request');
backoutGR.addNullQuery('backout_plan');
backoutGR.query();

while (backoutGR.next()) {
    gs.info('Change missing backout plan: ' + backoutGR.number);
}

// Check Changes missing test plan
var testGR = new GlideRecord('change_request');
testGR.addNullQuery('test_plan');
testGR.query();

while (testGR.next()) {
    gs.info('Change missing test plan: ' + testGR.number);
}
