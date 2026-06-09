/*
Project: Incident Integration Automation
Type: Scripted REST API Resource Script
Purpose: Creates an Incident from an external JSON payload.
Expected Payload:
{
    "short_description": "Laptop not working",
    "caller_email": "user@example.com",
    "priority": "2"
}
*/

(function process(request, response) {

    var body = request.body.data;

    if (!body || !body.short_description || !body.caller_email) {
        response.setStatus(400);
        response.setBody({
            status: 'Error',
            message: 'short_description and caller_email are required'
        });
        return;
    }

    var user = new GlideRecord('sys_user');
    user.addQuery('email', body.caller_email);
    user.addQuery('active', true);
    user.query();

    if (!user.next()) {
        response.setStatus(404);
        response.setBody({
            status: 'Error',
            message: 'User not found'
        });
        return;
    }

    var inc = new GlideRecord('incident');
    inc.initialize();
    inc.caller_id = user.getUniqueValue();
    inc.short_description = body.short_description;
    inc.priority = body.priority;

    var sysId = inc.insert();

    response.setStatus(201);
    response.setBody({
        status: 'Success',
        message: 'Incident created',
        incident_number: inc.number.toString(),
        sys_id: sysId
    });

})(request, response);
