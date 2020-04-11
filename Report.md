# Advanced web development 2 report

### Bristol polution report


### Skills

I have primarily worked with javascript, charting data and displaying data in multiple different ways, I also have experience with MERN stack and continue in a primarily web development career path, the skills I hope to utilize for this project are those of previous around data visualization and to learn more about data processing and formating.

### Conquer and divide / normalize to xml
The initial part of the assignment was the hardest part for me, as this was not something I had done before, in which firstly I split our one larger file of pollution data into 18 smaller files and then turning those files into XML using another script. The first script was written with a fairly easy structure once I got the hang of it, however, if I were to modernise it I would change the design and look at the explode function, as my script currently opens each file individually and then closes it once it goes through every line, meaning the script is overall quite slow, setting up this script was hard initially because I have had little experience with this style of coding in both creating scripts and formatting an XML schema which is a guideline in which our XML follows so that we only receive the data we wish to chart once we turn it into JSON data.

### Creating a schema

For the schema, this was a little easier, making use of the tools already provided by oxygen to create a stricter schema, allowed me to minimise errors in data according to the air quality data strategy and then again create a timeline from 2015 to 2019 to make it more relevant to today’s current climate. After this, I tested the schema to make sure the XML had a good level of strictness to follow.

### XML to JSON using oxygen

After this I turned my XML into JSON data using the oxygen converter tool, this would allow me to easier call the data when writing a mainly javascript front end for the data to pass through the dom and call specific datasets or pollution locations onto my charts, it would also help when we begin to bring in more dom elements.

### Charting data

For the charting of the data, I decided to use google charts as it had a clear structure, using a setup function and then a self-implemented update function where I could add data to and call it whenever the chart would need to be updated. This created an easier system to manage systems within the layout and using DOM elements which store memory objects, relating to the entire tree, implemented into the design of the project compared to most programing models which usually pass down attributes through a periodical structure. This was also how I could create a system between the different JSON files, allowing me to call each station individually for the scatter chart as the attributes remained the same. I could just call a different file and the code would then GET the readings from the station using a function which would just switch out each file when required.

### Mapping data

For the map visualisation, I simply mapped the data to the geolocation and then assigned it to the appropriate colour based on the air quality data strategy so it was more visually appealing and could give the data another system of being represented even at a quick glance for the user to identify where the most pollution was coming from on average over the 2015 to 2019 time frame selected.
