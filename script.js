
const apiid = "cf41275876b34ccdf2a8fce871fb69d0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.getElementById("images");

const city = "New York";

async function callweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiid}`); 
  var data = await response.json();
  console.log(data)

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  const weatherCondition = data.weather[0].main.toLowerCase();

if (weatherCondition === "clouds") {
  weatherIcon.src = "images/cloudy.png";
} else if (weatherCondition === "clear") {
  weatherIcon.src = "images/sun.png";
} else if (weatherCondition === "drizzle") {
  weatherIcon.src = "images/dizzle.png";
} else if (weatherCondition === "smoke") {
  weatherIcon.src = "images/smoke.png";
} else if (weatherCondition === "rain") {
  weatherIcon.src = "images/rain.png";
} else if (weatherCondition === "snow") {
  weatherIcon.src = "images/snow.png";
} else if (weatherCondition === "mist") {
  weatherIcon.src = "images/mist.png";
}


}

searchbtn.addEventListener("click", () => {
  callweather(searchbox.value)


})

callweather(city);
