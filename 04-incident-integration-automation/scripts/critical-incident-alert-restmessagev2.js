/*
Project: Incident Integration Automation
Type: After Update Business Rule
Table: Incident [incident]
Purpose: Sends outbound REST notification when priority changes to Critical.
REST Message: Critical Incident Alert API
Method: post
*/

if (current.priority.changesTo('1')) {
    try {
        var rm = new sn_ws.RESTMessageV2('Critical Incident Alert API', 'post');

        var requestBody = {
            number: current.number.toString(),
            priority: current.priority.toString(),
            short_description: current.short_description.toString(),
            caller_email: current.u_caller_email.toString()
        };

        rm.setRequestBody(JSON.stringify(requestBody));

        var response = rm.execute();
        var statusCode = response.getStatusCode();
        var responseBody = response.getBody();

        gs.info('Critical Incident Alert API status: ' + statusCode);
        gs.info('Critical Incident Alert API response: ' + responseBody);

    } catch (ex) {
        gs.error('Critical Incident Alert API error: ' + ex.message);
    }
}
