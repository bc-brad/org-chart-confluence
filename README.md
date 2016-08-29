# org-chart-confluence

This is a bit of an unconventional approach to the traditional chart-style org chart that you'll often see in Confluence. The issue I've seen with using charts is that it's hard to maintain. The only way to add and remove team members is to completely reorganize the chart from scratch, as removing even a single cell from your chart will throw the entire structure off. 

# solution

Using a combination of Confluence macros and custom JavaScript, I've created a pseudo-framework to automate the org chart creation process. 

#how it works

1. The "user-profile" macro is utilized to add each team member to the top of the page. This is literally just a huge list of profiles, but the formatting isn't important here, as these will not be visible on the page (hidden with CSS). This is just being used to pull in the user data!

2. Custom HTML and CSS are added via the "html" macro. This sets the wireframe for the enire org chart.

3. The "html" macro is used once more to add the script, which will be inserting the data into the wireframe from step 2.

#about the script

Because the "user-profile" macro doesn't have any knowledge of the team's structure, this script has to take it a step further in labeling each user with a start date and a team lead. Each division of management is organized in the same way, so we're left with two arrays that split the "user-profile" list into two main groups: agents & managers.

The "Person" constructor employs several methods to manipulate the data that is now made available by the "user-profile" list and the "agent" & "manager" arrays.

The remainder of the script primarily performs several checks to sort each tem member into the proper heading.
