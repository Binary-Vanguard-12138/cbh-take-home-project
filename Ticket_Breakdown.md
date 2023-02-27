# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
### Ticket 1
**Summary**
Modify Agent Model for database

**Description**

Add a *agent_id* field in the Agent model which represents the custom ID of the agent.

**Time Estimation**

5 minutes

### Ticket 2
**Summary**
Add function for Facility to save their own custom ids for each Agent

**Description**

Implement *AddCustomId2Agent* function which takes *Facility*, *Agent* and *Custom ID* parameters.

In this function we need to authenticate the *Facility* and check if he has permission to change the given *Agent*.
Next, if it is authenticated, change the *agent_id* field of the given *Agent* in the database.
If it fails to authenticate, it need to throw an error and stop processing.

**Time Estimation**:
30 Minutes

### Ticket 3
**Summary**
Modify *generateReport* function to add *custom ID* of an *Agent* in report.

**Description**

While generating report in *generateReport*, replace the original ID of *Agent* with newly added *agent_id* field of *Agent*.

**Time Estimation**:
10 Minutes

### Ticket 4
**Summary**
Unit test for custom IDs

**Description**

Write Unit test code using test framework like JEST and perform unit test for Ticket 2 and Ticket 3 and fix bugs if found any.

**Time Estimation**:
10 Minutes