const apiKey = 'e2fcec8adc3ab1b61d603548f29861db';

function getWeather() {
    const city = document.getElementById('city').value;

    // Fetch the weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('<p class ="error">Network response was not ok</p>');
            }
            return response.json();
        })
        .then(data => {
            const weatherDiv = document.getElementById('weather');

            
            if (data.weather && data.weather.length > 0) {
                const weatherDescription = data.weather[0].description;
                const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius
                const humidity = data.main.humidity;

                // Display the weather information
                weatherDiv.innerHTML = `
                    <p class="location">Location: ${data.name}</p>
                    <p class="location">Weather: ${weatherDescription}</p>
                    <p class="location">Temperature: ${temperature}°C</p>
                    <p class="location">Humidity: ${humidity}%</p>
                `;
            } else {
                weatherDiv.innerHTML = '<p class ="error">Weather data not available for this location.</p>';
            }
        })
        .catch(error => {
            console.error('<p class ="error">Error fetching weather data:</p>', error);
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = '<p class ="error">Failed to fetch weather data.</p>';
        });
}

function openNewPage1() {

    
    window.location.href = 'index.html';
}

document.getElementById('openPageLink1').addEventListener('click', openNewPage1);

function openNewPage() {
    
    window.location.href = 'newPage.html';

}
document.getElementById('openPageLink').addEventListener('click', openNewPage);
function openNewPage2() {
    
    
    window.location.href = 'feedback.html';
}

document.getElementById('openPageLink2').addEventListener('click', openNewPage2);
