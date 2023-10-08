# I chose Beijing Air Quality as the subject of my visualization.

### The first idea that popped into my mind was to use 'month' as the horizontal x-axis, ranging from 1 to 12 months from left to right, and 'day1' to 'day31' vertically from bottom to top. The PM2.5 concentration would be represented by the size of circles.

I attempted to use the `state()` function, which we learned in class,

### to differentiate the data for four years using different colors:
2010 - red
2011 - yellow
2012 - green
2013 - blue
2014 - purple

#### Struggles

One of the biggest challenges I faced was how to separate the data for different years. I initially tried using 'year = 2011', but my attempts were unsuccessful. After researching and finding relevant information, I discovered that '==' is the correct way to perform conditional checks, and finally, I succeeded!
