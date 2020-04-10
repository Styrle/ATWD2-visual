# Advanced web development 2 report

### Bristol polution report

The hardest part of the project for me was creating the two scripts in which firstly split our one larger file into 18 smaller files and then turning those files into XML. The first script was written with a fairly easy structure once I got the hang of it, however, if I were to update it I would change the design and look at the explode function, as my script currently opens each file individually and then closes it once it goes through every line, meaning the script is overall quite slow, setting up this was primarily because I have had little experience with this type of design in both scripting and designing a schema which is a guideline in which our XML follows so that we only receive the data we wish to chart once we turn it into JSON data.

As for the schema, this was a little easier, making use of the tools already provided by oxygen to create a stricter schema, allowed me to minimise errors in data according to the air quality data strategy and then again create a timeline from 2015 to 2019 to make it more relevant to today’s current climate. After this, I tested the schema to make sure the XML had a good level of strictness to follow.

After this I turned my XML into JSON data, this would allow me to easier call the data when writing a mainly javascript front end for the data to pass through, it would also help when we begin to bring in more dom elements.

For the charting of the data, I decided to use google charts as it had a clear structure, using a setup function and then a self-implemented update function where I could add data to and call it whenever the chart would need to be updated. This created an easier system to manage systems within the layout and using DOM elements which store memory objects, relating to the entire tree, implemented into the design of the project compared to most programing models which usually pass down attributes through a periodical structure. This was also how I could create a system between the different JSON files, allowing me to call each station individually for the scatter chart as the attributes remained the same. I could just call a different file and the code would then GET the readings from the station using a function which would just switch out each file when required.

