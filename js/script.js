// I select the form, input field and weather card from the HTML
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// My API key for OpenWeather
const apiKey = '3ca3661fbb66dfc3df1b40c23ea3cc17';

// I use the submit event to get the weather when the form is submitted
weatherForm.addEventListener("submit", async event => {

    // Prevents the page from refreshing
    event.preventDefault();

    // Gets the city name from the input and remove extra spaces
    const city = cityInput.value.trim();

    // Checks if the user has entered a city
    if (city) {
        try {
            // Gets the weather data and send it to the display function
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            // Shows an error message if the request fails
            console.error(error);
            displayError(error.message);
        }
    }
    else {
        // Shows an error if the input is empty
        displayError("Please enter a city");
    }

});

// This function gets the weather data from the OpenWeather API
async function getWeatherData(city) {

    // Builds the API URL with the city name and my API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

    // Sends a request to the API and wait for the response
    const response = await fetch(apiUrl);

    // Checks if the API request was successful
    if (!response.ok) {
        throw new Error("Could not fetch weather data. Please check the city name.");
    }

    // Converts the response into JSON so I can use the data
    return await response.json();
}

// This function displays the weather information on the page
function displayWeatherInfo(data) {

    // Picks out the weather details I need from the API response
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data;

    // Clears the old information before displaying the new results
    card.textContent = "";
    card.style.display = "flex";

    // Creates elements for each piece of weather information
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    // Adds the values from the API to the elements
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    // Gives the elements CSS classes so I can style them
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // Adds the weather elements inside the card
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

}

// This function returns an emoji depending on the weather ID
function getWeatherEmoji(weatherId) {

    // I use the weather ID to decide which emoji to show
    switch (true) {

        case (weatherId >= 200 && weatherId < 300):
            return "🌩️";

        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";

        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";

        case (weatherId >= 600 && weatherId < 700):
            return "☃️";

        case (weatherId >= 700 && weatherId < 800):
            return "😶‍🌫️";

        case (weatherId === 800):
            return "☀️";

        case (weatherId >= 801 && weatherId < 810):
            return "☁️";

        // Shows this emoji if the weather ID doesn't match any of the cases
        default:
            return "🤨";
    }

}

// This function displays an error message if something goes wrong
function displayError(message) {

    // Creates an element for the error message
    const errorDisplay = document.createElement("p");

    // Adds the error text and CSS class
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    // Clears the card and display the error
    card.textContent = "";
    card.style.display = "flex";

    card.appendChild(errorDisplay);

}
