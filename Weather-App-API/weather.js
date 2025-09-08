const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDiv = document.getElementById("weather");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    weatherDiv.innerHTML = "<p>Loading...</p>";

    // 1. Get coordinates from city name
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found!");
    }

    const { latitude, longitude, name, country } = geoData.results[0];
    console.log(geoData.results);

    // 2. Fetch weather using coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    // 3. Display weather
    const w = weatherData.current_weather;

    // Convert ISO string to Date
    const date = new Date(w.time);
    // Format using toLocaleString
    const formatted = date.toLocaleString("en-US", {
      month: "short", // Jan, Feb, Mar ...
      day: "numeric", // 1, 2, 3 ...
      hour: "numeric", // 1, 2, 3 ...
      minute: "2-digit",
      hour12: true, // 12-hour format with AM/PM
    });

    weatherDiv.innerHTML = `
      <h2>${name}, ${country}</h2>
      <p><b>Temperature:</b> ${w.temperature} °C</p>
      <p><b>Wind Speed:</b> ${w.windspeed} km/h</p>
      <p><b>Condition Code:</b> ${w.weathercode}</p>
      <small>Last Updated: ${formatted}</small>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `<p style="color:red; text-align: center;">${error.message}</p>`;
  }
}
