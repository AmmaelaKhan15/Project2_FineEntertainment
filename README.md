<img width="303" height="198" alt="Project2_wireframe3" src="https://github.com/user-attachments/assets/5a11297b-4944-424f-8b70-b1fb3f94f5c5" /># Weather Explorer 🌡️

**Author:** Ammaela Khan

## Project plan

### Project idea

Weather Explorer is a web application that allows users to search for the current weather in cities around the world. The application is intended for anyone who wants to quickly check the weather in a specific city.

The application uses the OpenWeather API to retrieve live weather information and displays it in a simple and easy-to-understand format.

### Planned features

The planned features of my application include:

- Search for the weather by entering a city name.
- Display the current temperature in Celsius.
- Display the humidity and weather description.
- Show a weather emoji based on the current weather conditions.
- Display an error message if the city cannot be found or the request fails.

### Wireframe / sketch

<img width="512" height="352" alt="Weather Explorer wireframe" src="https://github.com/user-attachments/assets/39ef9e8c-64d4-4cbc-8f58-585241c616f0" />

## Web links

- **Published application:** [Weather Explorer](https://musical-starburst-38c34d.netlify.app/)
- **GitHub repository:** [Project2_WeatherExplorer](https://github.com/AmmaelaKhan15/Project2_WeatherExplorer)
- **Project video presentation:** [Add your presentation video URL here]

## About the application

**Weather Explorer** is a web application that allows users to check current weather information for different cities around the world.

Users can enter a city name into the search field and click the Get Weather button to retrieve weather information from the OpenWeather API.

The application displays the city name, temperature, humidity, weather description and a matching weather emoji. If the user enters an invalid city name or something goes wrong with the API request, an error message is displayed.

## Technologies

I used the following technologies to create my application:

- **HTML** – Used to create the structure of the application, including the search form and weather card.
- **CSS** – Used to style the application, including the background, buttons, input field and weather information.
- **JavaScript** – Used to handle user input, fetch weather data, create and display HTML elements dynamically, and handle errors.
- **OpenWeather API** – Used to retrieve current weather information for searched cities.
- **Fetch API** – Used to make asynchronous requests to the OpenWeather REST API.
- **Git and GitHub** – Used to track changes and store the project code.
- **Netlify** – Used to deploy and publish the application online.

## How to use the application

1. Open Weather Explorer using the published application link above.
2. Enter the name of a city into the search field.
3. Click the **Get Weather** button.
4. Wait for the application to retrieve the weather information.
5. View the city's temperature, humidity, weather description and weather emoji.
6. Enter another city name to search for different weather information.

## Running the application locally

1. Clone or download this GitHub repository to your computer.
2. Open the `Project2_WeatherExplorer` folder.
3. Add your own OpenWeather API key to `js/script.js`.
4. Open `index.html` in a web browser.

## Screenshots

Here is a screenshot of my completed Weather Explorer application.

<img width="1067" height="629" alt="Weather Explorer application screenshot" src="https://github.com/user-attachments/assets/91f58ee3-232f-4f80-ab7a-72512139a004" />

## Known issues / limitations

- Weather information depends on the availability of the OpenWeather API and an active API key.
- The application currently displays current weather information rather than a multi-day forecast.

## Division of work

This project was completed individually.

## Self-assessment and learning reflection

While working on this project, I learned how to use a REST API and retrieve information using JavaScript's Fetch API.

I practised using asynchronous JavaScript with `async` and `await`, handling form submissions with `addEventListener`, and displaying information dynamically using DOM manipulation.

One of the challenging parts was understanding how to retrieve the correct information from the API response and display it on the page. I also learned how to handle errors when a city cannot be found or when an API request fails.

I succeeded in creating a working weather application that allows users to search for different cities and view their current weather information. I also learned how to upload my project to GitHub and deploy it using Netlify.

My original idea for this assignment was to build a Movie Explorer, which I had also mentioned on the group discussion page. However, after spending quite some time trying to retrieve data from the movie API, I realised I was having difficulties getting it to work.

I then explored the available APIs and found a Harry Potter API containing information about characters, spells and potions. Unfortunately, after spending around an hour trying to work with that API, I encountered similar problems retrieving the data.

<img width="303" height="198" alt="Project2_wireframe3" src="https://github.com/user-attachments/assets/261d96a0-a334-4529-90a4-9389532d8579" />

<img width="1440" height="690" alt="Movie Explorer API attempt" src="https://github.com/user-attachments/assets/e8a53ce2-d508-42ad-b646-6eda28463b40" />

<img width="586" height="322" alt="Screenshot 2026-11-12 at 3 35 04 AM" src="https://github.com/user-attachments/assets/f8d703cd-d9ab-4050-a886-92a3a516a789" />

<img width="1418" height="662" alt="Harry Potter API attempt" src="https://github.com/user-attachments/assets/9f9ec3c2-7673-4865-b357-f4e9cd0852c9" />

After these attempts, I decided to look for some inspiration on YouTube. I came across several weather application tutorials and went back to the list of available APIs to see if a weather API was included. Luckily, it was, so I decided to change my original idea and build Weather Explorer instead. I used the tutorial and my experience from workshop 7 and 8 to complete this project. 

I understand that my final application is quite simple and may not be as advanced as some other projects, but I am happy that I managed to complete it and get it working. The YouTube tutorial helped me understand more about how to retrieve and work with data from an API response.

Looking back, I would have liked to build something more advanced if I had been able to get my original ideas working. However, I also think that learning to adapt when things do not go as planned was an important part of this assignment.

Overall, I am happy with what I have achieved and feel that I learned a lot throughout the process. I did put in my best effort, even though the process did not go exactly as I originally planned.

**My self-assessed project grade: 8/10 points**

## Sources and acknowledgements

- [OpenWeather API](https://openweathermap.org/api) – Used to retrieve current weather information.
- [GitHub](https://github.com/) – Used to store and manage the project.
- [Netlify](https://www.netlify.com/) – Used to publish the application.
- Bro Code. (2023, December 31). [Create a weather app with JavaScript! ☀️](https://www.youtube.com/watch?v=VaDUGPMjzOM) [Video]. YouTube.
- Workshop 7 and Workshop 8 – Used as references for the assignment.

**AI tool used:** ChatGPT

- **How the tool was used:** I used ChatGPT for some help with CSS, particularly when I wanted to add vertical separators between the weather information sections. ChatGPT suggested different ways to achieve this and explained how they worked. I also used ChatGPT to troubleshoot an issue with committing and pushing my project to GitHub.
