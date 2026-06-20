// Project 07: Post-Deployment Validation Checklist
// Purpose: Validate that key ServiceNow configuration records exist and are active after an Update Set deployment.

// Validate Business Rule
var br = new GlideRecord('sys_script');
br.addQuery('name', 'Require Caller on Incident Create');
br.addQuery('active', true);
br.query();

if (br.next()) {
    gs.info('Post-deployment check passed: Business Rule is active - Require Caller on Incident Create');
} else {
    gs.error('Post-deployment check failed: Business Rule not found or inactive - Require Caller on Incident Create');
}

// Validate Client Script
var cs = new GlideRecord('sys_script_client');
cs.addQuery('name', 'Priority Assignment Group Mandatory');
cs.addQuery('active', true);
cs.query();

if (cs.next()) {
    gs.info('Post-deployment check passed: Client Script is active - Priority Assignment Group Mandatory');
} else {
    gs.error('Post-deployment check failed: Client Script not found or inactive - Priority Assignment Group Mandatory');
}

// Validate Script Include
var si = new GlideRecord('sys_script_include');
si.addQuery('name', 'UserValidationUtils');
si.addQuery('active', true);
si.query();

if (si.next()) {
    gs.info('Post-deployment check passed: Script Include is active - UserValidationUtils');
} else {
    gs.error('Post-deployment check failed: Script Include not found or inactive - UserValidationUtils');
}

// Validate Transform Map
var tm = new GlideRecord('sys_transform_map');
tm.addQuery('name', 'Laptop Asset Import Transform Map');
tm.query();

if (tm.next()) {
    gs.info('Post-deployment check passed: Transform Map found - Laptop Asset Import Transform Map');
} else {
    gs.error('Post-deployment check failed: Transform Map not found - Laptop Asset Import Transform Map');
}

// Validate Flow Designer Flow
var flow = new GlideRecord('sys_hub_flow');
flow.addQuery('name', 'Laptop Request Approval Flow');
flow.query();

if (flow.next()) {
    gs.info('Post-deployment check passed: Flow found - Laptop Request Approval Flow');
} else {
    gs.error('Post-deployment check failed: Flow not found - Laptop Request Approval Flow');
}
