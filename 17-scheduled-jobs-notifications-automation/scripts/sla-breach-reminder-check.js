// Scheduled Script: SLA Breach Reminder Check
// Table: task_sla
// Purpose: Find active breached SLA records and log task, SLA name, and stage

var gr = new GlideRecord('task_sla');
gr.addQuery('active', true);
gr.addQuery('stage', 'breached');
gr.query();

while (gr.next()) {
    var taskNumber = gr.getDisplayValue('task');
    var slaName = gr.getDisplayValue('sla');
    var stage = gr.getDisplayValue('stage');

    gs.info(taskNumber + ' - ' + slaName + ' - ' + stage);
}
