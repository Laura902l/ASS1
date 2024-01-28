// routes/travelRoutes.js
const fs = require('fs');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const axios = require('axios');
app.use(express.static("public"));
const router = express.Router();
const path = require('path');
const faker = require('faker');


const tourHistory = [];

router.get('/', (req, res) => {
    res.render('home');
});


router.get('/travelagency', (req, res) => {
    const filePath = path.join(__dirname, '../public/html', 'index.html'); 
    res.sendFile(filePath);
});

router.post('/submitForm', async (req, res) => {
    try {

        // Extract data from the submitted form
        const cityName = req.body.cityName;
        const adults = parseInt(req.body.adults) || 0;
        const children = parseInt(req.body.children) || 0;
        const phone = req.body.phone;
        const hotelRating = parseInt(req.body.hotelRating) || 1; // Assume 1 star if not provided
        const dateArrival = new Date(req.body.dateArrival);
        const dateDeparture = new Date(req.body.dateDeparture);
        const weatherCondition = req.body.weatherCondition; // Assuming you have a field for weather condition
        console.log('Before API call');

        const formattedDateArrival = dateArrival.toLocaleString('en-US', { timeZone: 'UTC' });
        const formattedDateDeparture = dateDeparture.toLocaleString('en-US', { timeZone: 'UTC' });
        const apiKey = 'd680bf725eceee752a55d0d17100d4a7';
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`);
        console.log('Weather Description:', weatherResponse.data.weather[0].description);

        const weatherData = {
            location: weatherResponse.data.name,
            temperature: weatherResponse.data.main.temp,
            condition: weatherResponse.data.weather[0].description,
            humidity: weatherResponse.data.main.humidity,
            windSpeed: weatherResponse.data.wind.speed,
            clouds: weatherResponse.data.clouds.all
        };
        if (['mist', 'broken clouds', 'haze'].includes(weatherResponse.data.weather[0].description)) {
            res.render('cancel');

        } else {
            if (['Cairo', 'Berlin', 'San Carlos'].includes(cityName)) {
                baseCost = (adults + 0.5 * children) * 1500;
                baseCost *= hotelRating;
            } else if (['Sydney', 'Beijing', 'Dubai'].includes(cityName)) {
                baseCost = (adults + 0.5 * children) * 1000;
                baseCost *= hotelRating;
            } else {
                const durationInDays = Math.ceil((dateDeparture - dateArrival) / (1000 * 60 * 60 * 24));

                baseCost = (adults + 0.5 * children) * 1250;
                baseCost *= hotelRating; // Increase cost based on hotel rating
                console.log("baseCost", baseCost)
            }


            const discountForChildren = children > 5 ? 0.1 * baseCost : 0; // 10% discount if more than 5 children

            // Total cost
            const totalCost = baseCost - discountForChildren;
            console.log("totalCost", totalCost)
            const flightNumber = faker.random.alphaNumeric(2).toUpperCase() + faker.random.number({ min: 1000, max: 9999 });

            const bookingDetails = {
                flightNumber,
                cityName,
                adults,
                children,
                phone,
                hotelRating,
                formattedDateArrival,
                formattedDateDeparture,
                totalCost
            };

            tourHistory.push(bookingDetails);

            // Render result page
            res.render('result', {
                flightNumber,
                cityName,
                adults,
                children,
                phone,
                hotelRating,
                formattedDateArrival,
                formattedDateDeparture,
                totalCost,

            });




        }

    } catch (error) {
        console.error('Error processing form submission:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.use((req, res, next) => {
    res.locals.alertMessage = null; 

    // You can set the alert message based on certain conditions
    // For example, if the weather condition indicates foggy weather
    if (['mist', 'broken clouds', 'haze'].includes(weatherResponse.data.weather[0].description)) {
        res.locals.alertMessage = 'Booking canceled due to foggy weather.';
    }

    next();
});


router.get('/tourHistory', (req, res) => {
    res.render('tourHistory', { tourHistory });
});


router.get('/cancel', (req, res) => {
    const alertMessage = 'Your cancellation message here';
    res.render('cancel', { alertMessage });
});
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/weather/:city', async (req, res) => {
    console.log('Weather route called');
    try {
        const apiKey = 'd680bf725eceee752a55d0d17100d4a7';
        const cityName = req.params.city || 'Moscow'; // Get the city name from the route parameter

        // Step 1: Find the city ID by name
        const citySearchResponse = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${cityName}&type=like&sort=population&APPID=${apiKey}`);

        if (!citySearchResponse.data || !citySearchResponse.data.list || citySearchResponse.data.list.length === 0) {
            throw new Error('City not found');
        }

        // Step 2: Get weather information using the city ID
        const cityId = citySearchResponse.data.list[0].id;
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&lang=en&units=metric&APPID=${apiKey}`);

        if (!weatherResponse.data || !weatherResponse.data.name) {
            throw new Error('Weather data not found');
        }

        // Extract relevant weather information from the API response
        const weatherData = {
            location: weatherResponse.data.name,
            temperature: weatherResponse.data.main.temp,
            condition: weatherResponse.data.weather[0].description,
            humidity: weatherResponse.data.main.humidity,
            windSpeed: weatherResponse.data.wind.speed,
            clouds: weatherResponse.data.clouds.all
        };

        // Send the weather information as a JSON response
        res.json(weatherData);
    } catch (error) {
        // Handle errors
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
