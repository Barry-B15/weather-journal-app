/* Global Variables */

//=========== 2. set up the parts of the app ==================

//Personal API Key from OpenWeatherMap API
// create a base url
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?';


// decalare a variable to handle dynamic zip code from user
const zipCode = document.getElementById('zip');
const units = 'metric';

const apiKey = 'Your API KEY HERE';

const url = `${baseURL}zip=${zipCode}&units=${units}&appid=${apiKey}`; // may use url too

// get the DOM elements
const status = document.getElementById('feelings').value;
const currentDate = document.getElementById('date');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear(); //month index starts at 0, add +1 to even up
//currentDate.textContent = "Posted on: " + newDate;

//add listener and a callback function to the button
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    //getNowWeather(url);

    e.preventDefault(); //towards form validation

    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const message = "Check Your Zip Code and try Again!";

    // Form validation
    if (zipCode.length == 0) {
        alert("Please enter zip code");
        return
    }
    if (feelings.length == 0) {
        alert("Please enter feelings");
        return
    }

    //getWeatherData the projectData
    getNowWeather(baseURL, zipCode, apiKey)
        .then(function(projectData) {
            postData('addWeather', { // as recommended by Mentor
                temperature: projectData.main.temp,
                date: newDate,
                userFeeling: feelings,

                // weather summary for city, country
                weatherNow: projectData.weather[0].description,
                cityName: projectData.name,
                country: projectData.sys.country
            })

            updateUI();
        })
        .catch((error) => {
            //console.log(error, message);
            console.log("Error:", message);
        });
}

const getNowWeather = async() => {
    let zip, weather_url;

    zip = zipCode.value;

    const errMessage = "City Not Found";

    //build the url
    weather_url = `${baseURL}zip=${zip}&units=${units}&appid=${apiKey}`;


    const response = await fetch(weather_url);

    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {

        console.log(errMessage);
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

// Update The UI
const updateUI = async() => {

    const request = await fetch('/all');
    console.log('UPDATE UI');

    try {
        const allData = await request.json();
        console.log('allData: ' + allData);

        let index = allData.length - 1;
        // get the last entry in the array and update the ui with it as below

        // update the HTML elements
        document.getElementById('date').innerHTML = "Posted on: " + newDate;
        document.getElementById('temp').innerHTML = "The temperature is: " + allData[index].temp + " &#176;" + "C"; //weather
        document.getElementById('content').innerHTML = `And you're feeling: ` + allData[index].userFeeling;

        //My Additions
        document.getElementById('description').innerHTML = allData[index].description;
        document.getElementById('city').innerHTML = allData[index].name;
        document.getElementById('country').innerHTML = allData[index].country;
    } catch (error) {
        console.log("error", error);
    }
}