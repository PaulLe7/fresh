# Action Steps


## Task 1
1. Create components for the shareholder table as represented in the figma design
    - <span style="color:green; font-weight:bold">Done: </span> Create desktop view
    - <span style="color:red; font-weight:bold">Not done</span> Create mobile view 

2. Load the data from the API endpoint into the shareholder table
    - <span style="color:green; font-weight:bold">Done: </span> Use pagination to not overload DOM + network 
    - <span style="color:orange; font-weight:bold">Started: </span> Use cursor pagination to improve speed and scalability 

3. Add any additional utils, hooks or styling necessary
    - Styling is not exactly identical to the figma design yet 

## Task 2
1. Create a search bar
    - <span style="color:green; font-weight:bold">Done: </span> Search names 
    - <span style="color:green; font-weight:bold">Done: </span> Search emails 

2. Implement toggling desc/asc order of shareholder holding size
    - <span style="color:green; font-weight:bold">Done: </span> Asc/desc toggle 
    - <span style="color:red; font-weight:bold">Not done: </span> Also implement a one-click filter option that shows the top 50 holders 

3. Implement a way to export shareholder list as CSV
    - <span style="color:red; font-weight:bold">Not done: </span> No need to implement ordering as this can be done on the CSV itself post-export

4. Implement an 'import list' button that checks whether the same email already exists in the database and then asks what fields they'd like to replace
    - <span style="color:red; font-weight:bold">Not done: </span> Import function

5. Implement toggling of newest-to-oldest shareholders and vice versa
    - <span style="color:red; font-weight:bold">Not done: </span> Also implement a one-click filter option that shows shareholders who have held for less than one month

6. Add a 'Last contacted' and 'Status' column 
    - <span style="color:red; font-weight:bold">Not done: </span> Allow for these fields to be changed for each shareholder
    - <span style="color:red; font-weight:bold">Not done: </span> Also implement the option to select all shareholders on the current page to change everyone's 'Status' and 'Last contacted' date at once
    - <span style="color:red; font-weight:bold">Not done: </span> Will require making changes to the shareholder table schema

7. Add a new column that converts 'held since' to 'held duration'
    - <span style="color:red; font-weight:bold">Not done</span> Implemented?

8. Allow the option to choose from showing 10, 25, 50 and 100 shareholders at once on a page
    - <span style="color:green; font-weight:bold">Done: </span> Implemented with default set at 10?