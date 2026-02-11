async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY_HERE";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === "404"){
        alert("City not found");
        return;
    }

    document.getElementById("weatherBox").style.display = "block";
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = "🌡 Temperature: " + data.main.temp + "°C";
    document.getElementById("description").innerText = "☁ Weather: " + data.weather[0].description;
    document.getElementById("humidity").innerText = "💧 Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").innerText = "🌬 Wind Speed: " + data.wind.speed + " km/h";
}
