/* Global Variables */



//=========== 2. set up the parts of the app ==================

//Personal API Key from OpenWeatherMap API
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';

//units=metric for deg Celsius or imperial for deg Fahrenheits
let countryCode = '94040,us&units=metric'; // zip hard coded, find a fix

const apiKey = process.env.API_KEY; //add your api key here
//This is giving error process not defined. so I can't hide my key?
//WHY ARE WE PUTTING API KEY ON THE CLIENTSIDE? EVERYWHERE I READ SAYS NO

let weatherURL = `${baseURL}zip=${countryCode}&appid=${apiKey}`; // may use url too

//=========== came with project ==================
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
//=========== came with project End ==================


// attach the DOM elements
const zipCode = document.getElementById('zip').value;
const status = document.getElementById('feelings').value;

//add listener and a callback function to the button
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    getNowWeather(weatherURL);
}

const getNowWeather = async(weatherURL) => {

    //build the url
    const response = await fetch(weatherURL);

    try {
        const data = await response.json('/all');
        console.log(data);

    } catch (error) {
        console.log("error", error);

    }

}

//=========== 1. set up post data async fun ==================
const postData = async(url = '', data = {}) => {
    console.log(data);

    const response = await fetch(url, {
        method: 'POST', // the method we want, can be POST, GET, PUT, DELETE etc
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', // we use json, tell app to use json data, Make sure to use same type of data in the body
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data), // tell browser to handle json as string
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

postData('/add', { movie: "Fridays", rank: 4.5 }); // test data

//=========== 1. set up post data async fun End==================

// corresponding func to send weather data to the server 
// Test data in console.
postData('/addWeather', {
    "coord": {
        "lon": -122.09,
        "lat": 37.39
    },
    "weather": [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
    }]
}); // Next add the api-key