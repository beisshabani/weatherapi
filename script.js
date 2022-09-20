const randomWallpaper = [
  "https://wallpaperbat.com/img/223445-new-york-city-wallpaper-city-wallpaper-new-york.jpg", 
  "https://cutewallpaper.org/21/wallpaper-of-cities/Cities-Wallpaper-25-1920-X-1080-stmed.net.jpg", 
  "https://www.itl.cat/pngfile/big/222-2220663_10-beautiful-high-resolution-purple-hd-wallpapers-for.jpg", 
  "https://i.pinimg.com/originals/76/f2/3e/76f23ef08dc1ebabf4589ca0daa1fc14.jpg", 
  "https://images.wallpaperscraft.com/image/single/night_city_skyscrapers_road_123871_1920x1080.jpg",
  "https://cutewallpaper.org/21/wallpaper-citys/Download-Free-City-At-Night-Wallpaper-PixelsTalk.Net.jpg",
  "https://s2.best-wallpaper.net/wallpaper/1366x768/1108/Night-city-sky_1366x768.jpg"
];

const selectBody = document.querySelector('body');
const random = Math.round(Math.random() * randomWallpaper.length);
selectBody.style.background = "url(" + randomWallpaper[random] + ")";

class Weather {
  constructor(title, value, icon, celsius, status, wind, humidity) {
    this.title = title;
    this.value = value;
    this.icon = icon;
    this.celsius = celsius;
    this.status = status;
    this.wind = wind;
    this.humidity = humidity;
    this.apiKey = "5bad21969a786dfa6b1a8d75d3707151";
    this.fetchWeather(value);

  }

  fetchWeather(city) {
    const date = new Date();
    const [month, day, year, hour, minutes] = [date.getMonth() + 1, date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()];
    dateField.innerText = day + "/" + month + "/" + year + " | \n" + hour + ":" + minutes;
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&units=metric' + '&appid=' + this.apiKey)
      .then(response => response.json())
      .then(data => this.displayWeather(data))
      .catch(error => alert('City could not be found!'))
  }

  displayWeather(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity: hum} = data.main;
    const { speed } = data['wind'];
    this.title.innerText = "Weather in " + name;
    this.icon.src = "https://openweathermap.org/img/wn/" + icon + "@4x.png"
    this.celsius.innerHTML = Math.round(parseFloat(temp)) + `<div class='celsius-icon'>°C</div>`;
    this.status.innerText = description;
    this.humidity.innerText = hum + " %";
    this.wind.innerText = speed;

  }
}
const dateField = document.querySelector('.date');
const title = document.querySelector('.title');
const value = document.querySelector('#search');
const icon = document.querySelector('#icon');
const celsius = document.querySelector('.celsius');
const status = document.querySelector('.status');
const wind = document.querySelector('#wind');
const humidity = document.querySelector('#humidity');

const weather = new Weather(title, "Tokyo", icon, celsius, status, wind, humidity);

document.querySelector('.button').addEventListener("click", () => {
  selectBody.style.background = "url(" + randomWallpaper[Math.round(Math.random() * randomWallpaper.length) - 1 ] + ")";
weather.fetchWeather(value.value);
});