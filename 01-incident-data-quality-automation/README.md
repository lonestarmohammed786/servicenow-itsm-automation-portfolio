# Incident Data Quality Automation

This project contains ServiceNow Business Rule examples that improve Incident data quality before records are saved.

## Focus Areas

- Business Rules
- Before Insert / Before Update scripting
- GlideRecord
- Reference field handling
- current and previous objects
- gs.addErrorMessage()
- current.setAbortAction(true)
- changes() and changesTo()
- Work Notes automation

## Scripts Included

- Require Caller on Create
- Copy Caller Email on Create
- Copy Caller Department on Create
- Block Inactive Caller
- Require Assignment Group for Critical Incidents
- Add Work Note on Assignment Group Change
- Refresh Caller Details on Caller Change
- Add Work Note on Critical Priority

## Purpose

The goal of this project is to demonstrate production-style ServiceNow Business Rules that enforce required Incident data, enrich records with caller information, prevent invalid data, and improve audit visibility through work notes.
