/*
Project: Incident Caller Validation with GlideAjax
Type: Client-callable Script Include
Name: UserValidationUtils
Purpose: Provides caller validation methods for Incident form GlideAjax calls.
*/

var UserValidationUtils = Class.create();
UserValidationUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    isInactive: function() {
        var userSysId = this.getParameter('sysparm_user_id');

        var user = new GlideRecord('sys_user');

        if (user.get(userSysId) && user.getValue('active') == 'false') {
            return 'true';
        }

        return 'false';
    },

    hasNoManager: function() {
        var userSysId = this.getParameter('sysparm_user_id');

        var user = new GlideRecord('sys_user');

        if (user.get(userSysId) && gs.nil(user.getValue('manager'))) {
            return 'true';
        }

        return 'false';
    },

    hasNoDepartment: function() {
        var userSysId = this.getParameter('sysparm_user_id');

        var user = new GlideRecord('sys_user');

        if (user.get(userSysId) && gs.nil(user.getValue('department'))) {
            return 'true';
        }

        return 'false';
    },

    hasActiveIncident: function() {
        var userSysId = this.getParameter('sysparm_user_id');

        var inc = new GlideRecord('incident');
        inc.addQuery('caller_id', userSysId);
        inc.addQuery('active', true);
        inc.query();

        if (inc.next()) {
            return 'true';
        }

        return 'false';
    },

    type: 'UserValidationUtils'
});
