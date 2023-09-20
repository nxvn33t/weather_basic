
  const apiKey = 'e2fcec8adc3ab1b61d603548f29861db';

//   function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

  // Function to fetch weather data and update the table
  function fetchWeatherAndUpdateTable(city, weatherTd, temperatureTd, humidityTd) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
          .then(response => response.json())
          .then(data => {
              const weatherDescription = data.weather[0].description;
              const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius
              const humidity = data.main.humidity;

            
              weatherTd.textContent = weatherDescription;
              temperatureTd.textContent = `${temperature}°C`;
              humidityTd.textContent = `${humidity}%`;
          })
          .catch(error => {
              console.error('Error fetching weather data:', error);
              weatherTd.textContent = 'N/A';
              temperatureTd.textContent = 'N/A';
              humidityTd.textContent = 'N/A';
          });
  }

  // Fetch weather information for each city
  fetchWeatherAndUpdateTable('Delhi', document.getElementById('delhiWeather'), document.getElementById('delhiTemperature'), document.getElementById('delhiHumidity'));
  fetchWeatherAndUpdateTable('Tokyo', document.getElementById('tokyoWeather'), document.getElementById('tokyoTemperature'), document.getElementById('tokyoHumidity'));
  fetchWeatherAndUpdateTable('Paris', document.getElementById('parisWeather'), document.getElementById('parisTemperature'), document.getElementById('parisHumidity'));
  fetchWeatherAndUpdateTable('Dhaka', document.getElementById('dhakaWeather'), document.getElementById('dhakaTemperature'), document.getElementById('dhakaHumidity'));
  fetchWeatherAndUpdateTable('Rome', document.getElementById('romeWeather'), document.getElementById('romeTemperature'), document.getElementById('romeHumidity'));
  fetchWeatherAndUpdateTable('Seoul', document.getElementById('seoulWeather'), document.getElementById('seoulTemperature'), document.getElementById('seoulHumidity'));
  // Add more cities and data here


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