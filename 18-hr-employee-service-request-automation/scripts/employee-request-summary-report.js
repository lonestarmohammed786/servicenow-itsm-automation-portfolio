// Background Script: Employee Request Summary Report
// Table: sc_req_item
// Purpose: Count employee service requests grouped by assignment group

var ga = new GlideAggregate('sc_req_item');
ga.addAggregate('COUNT');
ga.groupBy('assignment_group');
ga.query();

while (ga.next()) {
    var groupName = ga.getDisplayValue('assignment_group');
    var count = ga.getAggregate('COUNT');

    gs.info(groupName + ' - ' + count);
}
