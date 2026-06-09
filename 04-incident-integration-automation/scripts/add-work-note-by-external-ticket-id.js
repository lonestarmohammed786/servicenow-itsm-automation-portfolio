/*
Project: Incident Integration Automation
Type: Scripted REST API Resource Script
Purpose: Adds a work note to an Incident using an external ticket ID.
Expected Payload:
{
    "external_ticket_id": "EXT-1001",
    "work_note": "Customer called again"
}
*/

(function process(request, response) {

    var body = request.body.data;

    if (!body || !body.external_ticket_id || !body.work_note) {
        response.setStatus(400);
        response.setBody({
            status: 'Error',
            message: 'external_ticket_id and work_note are required'
        });
        return;
    }

    var inc = new GlideRecord('incident');
    inc.addQuery('u_external_ticket_id', body.external_ticket_id);
    inc.addQuery('active', true);
    inc.query();

    if (!inc.next()) {
        response.setStatus(404);
        response.setBody({
            status: 'Error',
            message: 'Incident not found'
        });
        return;
    }

    inc.work_notes = body.work_note;
    inc.update();

    response.setStatus(200);
    response.setBody({
        status: 'Success',
        message: 'Work note added',
        incident_number: inc.number.toString(),
        sys_id: inc.getUniqueValue()
    });

})(request, response);
