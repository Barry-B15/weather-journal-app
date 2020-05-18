// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// declare the port for the server to run on
const port = process.env.PORT || 8000;

// Spin up the server
app.listen(port, () => {
    console.log(`Server up and running on localhost: ${port}`);
});

// Initialize the main project folder
app.use(express.static('website'));

//Server Setup

//POST route:  for data from client movie: Fridays
app.post('/add', (request, response) => {
    let data = request.body;
    console.log(data);
})

// Initialize an empty data set to hold our data then create
//route to post weather for user location // go set up a func to send weather on the client side
const weatherData = [];

// initialize for all weather data
app.get('/all', (req, res) => {
    res.send(weatherData)
    console.log(weatherData)
})

app.post('/addWeather', addWeather);

function addWeather(req, res) {
    newEntry = {
        //get the weather details from the body
        //positions kind of reversed from what we wrote on client side (teperature: weatherData.allData[0].temp)
        temp: req.body.temperature,
        date: req.body.date,
        userFeeling: req.body.userFeeling,
        // update additional weather info
        description: req.body.weatherNow,
        name: req.body.cityName,
        country: req.body.country
    }

    weatherData.push(newEntry)
    res.send(weatherData)
    console.log('POST')
    console.log(weatherData)
}

// if page/route does not exist
app.get("*", (req, res) => {
    res.send("Page not found.")
});