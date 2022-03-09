# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories


### Links

- Live Site URL: https://chafin123.github.io/static-job-listings-master/

## My process
First I started on the mobile look, using bootstrap I made a div with class of card and styled it so it looked like what the design did. Then I went to .js and made a class that has all the relavant information for a Joblisting card. I proceded to make a function that returns html with all the class values in the right place in order to make a reusable function that would take the different classes and output the job lisitng html. Then the hard part, I got to work on filtering the job listing show based on the chosen filters. So I took the "job array" that had all the job classes in a array. I iterated through each job inside of each job I iterated over the chosen filters array and checking if the job.tags array had all matching filters and pushing the job to a filteredjob array if it passed, then the filtered job array was itterated over and pushed the html to an array which was then joined and the inner html of the relavant html elemant was changed to that array. It took me a while to reach this point, I tried serveral differnt solutions some getting close to what I wanted but it resulted in either pushing the same job listing for each matchng filter it had or only needing one ta to match as opposed to all of the tags matching. My mistake I made was not idealizing enough and missing some of the functionality I would need in the search function.

### Built with

- HTML5
- CSS
- Java Script
- Bootstrap
- Mobile-first workflow

### What I learned
The main thing I learned with this project is to give yourself enough time to think about all the funcinalty to your components. I threw away a days worth of work because my code would not have been able to do everything I needed it to do and If I would have though about everything it needed to do before had I would have never went do that road. I also got pretty comfortable with iterating over arrays with objects and learned alot about the different methods for iterating over objects or arrays. 

### Continued development
My imediate play is to work on the desktop version of the site.Then once I start learning React will transfer this all to react, eventually I want to add functionality to add custom joblising.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - Steven Chafin https://chafin123.github.io/Mod-Portfolio-Site/
