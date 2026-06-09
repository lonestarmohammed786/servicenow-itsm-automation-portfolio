/*
Project: Incident Caller Validation with GlideAjax
Type: Client-callable Script Include
Name: GroupValidationUtils
Purpose: Provides assignment group validation methods for Incident form GlideAjax calls.
*/

var GroupValidationUtils = Class.create();
GroupValidationUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    isGroupInactive: function() {
        var groupSysId = this.getParameter('sysparm_group_id');

        var group = new GlideRecord('sys_user_group');

        if (group.get(groupSysId) && group.getValue('active') == 'false') {
            return 'true';
        }

        return 'false';
    },

    type: 'GroupValidationUtils'
});
