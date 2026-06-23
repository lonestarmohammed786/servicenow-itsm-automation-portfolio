// Project 08: CMDB Data Quality & CI Relationship Automation
// File: prevent-duplicate-computer-ci.js
// Type: Before Insert Business Rule
// Table: cmdb_ci_computer
// Purpose: Prevent duplicate computer CI records using serial number.

if (!gs.nil(current.serial_number)) {
var gr = new GlideRecord('cmdb_ci_computer');
gr.addQuery('serial_number', current.serial_number);
gr.query();

```
if (gr.next()) {
    gs.addErrorMessage('A computer CI with this serial number already exists.');
    current.setAbortAction(true);
}
```

}
