## Getting Started

First, install dependencies and prisma client:

```bash
yarn install
```

Next, seed your database:

```bash
yarn prisma db push
node prisma/seed.js
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Task 1

Fresh Amplify is an Australia's leading Capital Markets Management System. Our goal is make it easier for listed companies to directly engage with investors. Helping companies better understand their shareholders is an important part of our feature bundle. 

We were recently given access to some shareholder information, as a team we decided to make this data viewable by our clients. We can then assess if the data is valuable and how they prefer to use it.
 
Your task is to build a table view to display this information. The design can be found in `design.fig` in the repo. You can `GET /api/shareholders` for all shareholder information. This is just an example of how you can get the data, you can change anything if you want.
 
You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Task 2

Okay, now let's imagine the first task has been released for more than a month.
We have realised that the page gets a lot of traffic, but only 5% are returning users. This indicates the value we are providing isn't solving the user's problem.

Using data analytics and feedback from our clients we have identified several issues. 

1. There are too many shareholders, the client is unable to find the exact shareholder they are looking for. 
2. The client doesn't want to see all their shareholders, they only care about the top 50 shareholders (the shareholders with the largest holding).
3. They would like to use our data within external analysis tools, there is currently no way for them to export it.
4. Some of our clients use other methods to collect shareholder emails, they are unable to combine the two lists to check for duplicates.
5. When creating an email campaign, they like to target new shareholders (have held for less than one month). It would be good for them to be able to identify these shareholders.
6. A client uses this list to reach out directly to individual shareholders, they are struggling with keeping track of who they have already spoken to, other than with a pen and paper. 
7. Some clients care more about how long shareholders have held their stock rather than when they first started holding, they are unable to identify these shareholders. 

We'd like you to pick 1-2 problems and come up with an idea to solve them. Use your problem solving skills and creativity to build a suitable solution. If you hit any blockers feel free to email me jimmy@freshamplify.com and I'll be happy to help out.

---

# Task Progress

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
    - <span style="color:green; font-weight:bold">Done: </span> Also implement a one-click filter option that shows the top 50 holders 

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
    - <span style="color:green; font-weight:bold">Done</span> Implemented?

8. Allow the option to choose from showing 10, 25, 50 and 100 shareholders at once on a page
    - <span style="color:green; font-weight:bold">Done: </span> Implemented with default set at 10?