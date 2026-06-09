/*
Project: Incident Integration Automation
Type: After Update Business Rule
Table: Incident [incident]
Purpose: Sends outbound REST notification when Incident state changes to Resolved and logs success/failure in work notes.
REST Message: Resolved Incident API
Method: post
*/

if (current.state.changesTo('6')) {
    try {
        var rm = new sn_ws.RESTMessageV2('Resolved Incident API', 'post');

        var requestBody = {
            number: current.number.toString(),
            state: current.state.toString(),
            resolved_by: current.resolved_by.getDisplayValue(),
            close_notes: current.close_notes.toString()
        };

        rm.setRequestBody(JSON.stringify(requestBody));

        var response = rm.execute();
        var statusCode = response.getStatusCode();
        var responseBody = response.getBody();

        if (statusCode == 200 || statusCode == 201) {
            current.work_notes = 'Resolved notification sent successfully.';
        } else {
            current.work_notes = 'Resolved notification failed. Status: ' + statusCode;
        }

        gs.info('Resolved Incident API status: ' + statusCode);
        gs.info('Resolved Incident API response: ' + responseBody);

    } catch (ex) {
        gs.error('Resolved Incident API error: ' + ex.message);
        current.work_notes = 'Resolved notification error: ' + ex.message;
    }
}
