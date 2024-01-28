function showForm(cityname, country) {
    document.getElementById("bookingForm").style.display = "block";
    document.getElementById("cityName").value = cityname;

    document.getElementById("country").value = country;

    console.log("Form is shown");
}

function hideForm() {
    document.getElementById("bookingForm").style.display = "none";
    console.log("Form is hidden");
}
function hide() {
    document.getElementById("weatherInformation").style.display = "none";
    console.log("Form is hidden");
}



async function getWeather(name) {
    document.getElementById("weatherInformation").style.display = "block";

    try {
        const response = await fetch(`/travel/weather/${name}`);
        const weatherData = await response.json();

        // Display weather information on the page
        document.getElementById('weatherCityName').innerText = weatherData.location;
        document.getElementById('condition').innerText = `Condition: ${weatherData.condition}`;
        document.getElementById('temperature').innerText = `Temperature: ${weatherData.temperature}°C`;
        document.getElementById('humidity').innerText = `Humidity: ${weatherData.humidity}%`;
        document.getElementById('clouds').innerText = `Clouds: ${weatherData.clouds} m/s`;
        document.getElementById('windSpeed').innerText = `Wind Speed: ${weatherData.windSpeed} m/s`;

        document.getElementById('weatherCity').value = weatherData.location;

        // Calculate and display prices based on city name
        const adultPrice = calculateAdultPrice(weatherData.location);
        const kidPrice = calculateKidPrice(weatherData.location);

        document.getElementById('Adultprice').innerText = `Adult Price: $${adultPrice}`;
        document.getElementById('Kidsprice').innerText = `Kid Price: $${kidPrice}`;
    } catch (error) {
        // Handle errors
        console.error('Error fetching weather data:', error.message);
        document.getElementById('weatherInformation').innerHTML = '<p>Error fetching weather data</p>';
    }
}

function calculateAdultPrice(cityName) {
    // Add conditions for different cities and their respective adult prices
    if (['Cairo', 'Berlin', 'San Carlos'].includes(cityName)) {
        return 1000;
    } else if (['Sydney', 'Beijing', 'Dubai'].includes(cityName)) {
        return 1400;
    } else {
        return 1250;
    }
}

function calculateKidPrice(cityName) {
    // Add conditions for different cities and their respective kid prices
    if (['Cairo', 'Berlin', 'San Carlos'].includes(cityName)) {
        return 500;
    } else if (['Sydney', 'Beijing', 'Dubai'].includes(cityName)) {
        return 750;
    } else {
        return 860;
    }
}





