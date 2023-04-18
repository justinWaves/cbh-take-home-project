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

# Ticket 1: Allow Facilities to save custom ids for Agents

### Description:

Create a new field in the Agents table to store custom ids and add functionality to the web app to allow Facilities to save custom ids for each Agent they work with.

### Acceptance Criteria:

A new field is added to the Agents table in the database to store custom ids.
A new input field is added to the web app interface for Facilities to input custom ids when creating/editing Agents.
The custom id is stored in the database and can be retrieved later by querying the Agents table with the internal database id.

### Time/Effort Estimate:

8 hours

### Implementation Details:

Add a new column to the Agents table in the database to store custom ids.
Add a new input field to the web app interface for Facilities to input custom ids when creating/editing Agents.
Update the Agent model to include the new custom id field.
Update the API endpoints to save and retrieve the custom id from the database.

# Ticket 2: Use custom ids in report generation

### Description:

Modify the generateReport function to use custom ids instead of internal database ids for Agents when generating reports for Facilities.

### Acceptance Criteria:

The generateReport function retrieves the custom id for each Agent from the Agents table in the database.
The custom id is used in the report generation instead of the internal database id.

### Time/Effort Estimate:

4 hours

### Implementation Details:

Modify the generateReport function to query the Agents table in the database to retrieve the custom id for each Agent.
Replace the internal database id with the custom id in the report generation code.

# Ticket 3: Update getShiftsByFacility to include custom ids

### Description:

Modify the getShiftsByFacility function to include the custom id for each Agent in the metadata returned for each Shift.

### Acceptance Criteria:

The getShiftsByFacility function retrieves the custom id for each Agent from the Agents table in the database and includes it in the metadata returned for each Shift.
The custom id is returned in addition to the internal database id.

### Time/Effort Estimate:

6 hours

### Implementation Details:

Modify the getShiftsByFacility function to join the Agents table with the Shifts table to retrieve the custom id for each Agent.
Include the custom id in the metadata returned for each Shift.

# Ticket 4: Add custom id to Shifts table

### Description:

Create a new field in the Shifts table to store the custom id of the Agent assigned to each Shift.

### Acceptance Criteria:

A new field is added to the Shifts table in the database to store custom ids.
The custom id is stored in the Shifts table along with the internal database id of the Agent assigned to each Shift.

### Time/Effort Estimate:

2 hours

### Implementation Details:

Add a new column to the Shifts table in the database to store custom ids.
Modify the code that creates Shifts to also store the custom id in the Shifts table.

# Ticket 5: Update web app interface to display custom ids

### Description:

Update the web app interface to display the custom id of each Agent along with their internal database id.

### Acceptance Criteria:

The custom id is displayed in the web app interface for each Agent along with their internal database id.

### Time/Effort Estimate:

2 hours

### Implementation Details:

Modify the web app interface to display the custom id of each Agent in addition to their internal database id.
