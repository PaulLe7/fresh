# Action Steps


## Task 1
1. Create components for the shareholder table as represented in the figma design
    - Two views: desktop and mobile

2. Load the data from the API endpoint into the shareholder table
    - Use pagination as represented in the figma design to prevent overloading the DOM

3. Add any additional utils, hooks or styling necessary

## Task 2
1. Create a search bar

2. Implement toggling desc/asc order of shareholder holding size
    - Also implement a one-click filter option that shows the top 50 holders

3. Implement a way to export shareholder list as CSV
    - No need to implement ordering as this can be done on the CSV itself post-export

4. Implement an 'import list' button that checks whether the same email already exists in the database and then asks what fields they'd like to replace

5. Implement toggling of newest-to-oldest shareholders and vice versa
    - Also implement a one-click filter option that shows shareholders who have held for less than one month

6. Add a 'Last contacted' and 'Status' column 
    - Allow for these fields to be changed for each shareholder
    - Also implement the option to select all shareholders on the current page to change everyone's 'Status' and 'Last contacted' date at once
    - Will require making changes to the shareholder table schema

7. Add a new column that converts 'held since' to 'held duration'
    - Does not require making changes to the schema

8. Allow the option to choose from showing 10, 20, 50 and 100 shareholders at once on a page
    - The default will be kept at 10