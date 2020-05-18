# Weather-Journal App Project

## Introduction
This is an asynchronous weather web app that uses a Web API from Open Weather Map to generate a user inputted location weather condition. It takes the user response (feelings), add that to the weather generated with the API then update the UI dynamically with generated information. 

## Technolofies:
This app was created using the following:
* Node.js
* JavaScript
* CSS for styling
* HTML for the framework
* Open WeatherMap API Key


## What i did
I have modified the initial `server.js` and the `website/app.js` files to create this web application. To the `index.html` file for element references, I have added one div to give a summary of the actual weather and the name of the city and country even though it was not required.
And lastly, I used the `style.css` file provided to style and customize the  application.

## Prerequisite
* A computer
* A little knowledge of how to download and install technologies on a computer

## Launch - How to run the app
### As a private server
To run this app as a private server, the user will need to make the following installations:
* Download and install node.js from: https://nodejs.org/en/download/
```
* open the gitbash/ powershell in the root directory
* $ npm init 
* $ npm install express
* $ npm install body-parser
* $ install cors
Start the server
* $ node server.js (or simply: node server)
```
### From an online host
When this project is uploaded to an online host, any user can access and use it to get their location weather just by entering their zip code, and feelings at that time.

## How to Use
The user only need to 
* Enter a valid zip code, followed by a comma(with no space) then country code (all lowercased) in the input area. For example 94040,us
* Write a feeling in the textarea. For example "Coders Rock!"
* Hit then "Generate" button to get the weather information and feeling.


## Sources:
This project is based mostly on what was taught in the class
I also used a lot of help from the Mentors at Udacity who were always there to promptly direct and point to what to do at different stages
* I wrote this README reading an example at: https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project
* This website was useful and easy to understand some async/await functions and error handling at: https://javascript.info/async-await 

## Project Status:
This is a completed project ready for use by whosoever wishes to.


