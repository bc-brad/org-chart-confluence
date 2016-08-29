# org-chart-confluence

This is a bit of an unconventional approach to the traditional chart-style org chart that you'll often see in Confluence. The issue I've seen with using charts is that it's hard to maintain. The only way to add and remove team members is to completely reorganize the chart from scratch, as removing even a single cell from your chart will throw the entire structure off. 

# solution

Using a combination of Confluence macros and custom JavaScript, I've created a pseudo-framework to automate the org chart creation process. 

#instructions

1. At the top of your Confluence page, use the "user-profile" macro to add each member of your team at the top of the page. Don't worry about formatting, as these will not be visible on the page. We're just using this as the base data for everything else!

2. Use the "html" macro to add <a href="https://github.com/Bairdley/org-chart-confluence/blob/master/org-chart.html">this file</a> to the page. 
