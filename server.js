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

// declare the port to run on
const port = 8000;

// The port and a callback function
app.listen(port, () => {
    console.log(`Server running on localhost: ${port}`);
});

// Initialize the main project folder
app.use(express.static('website'));

//Server Setup