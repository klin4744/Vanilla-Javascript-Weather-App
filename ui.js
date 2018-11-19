class UI{
  constructor(){
    this.location = document.querySelector("#w-location")
    this.desc = document.querySelector("#w-desc")
    this.string = document.querySelector("#w-string")
    this.details = document.querySelector("#w-details")
    this.icon = document.querySelector("#w-icon")
    this.humidity = document.querySelector("#w-humidity")
    this.feelsLike = document.querySelector("#w-feelsLike")
    this.dewpoint = document.querySelector("#w-dewpoint")
    this.wind = document.querySelector("#w-wind")
  }
  paint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country}` ;
    this.humidity.textContent = ` Humidity : ${weather.main.humidity}`;
    this.wind.textContent = ` Degrees : ${weather.wind.deg}°  Wind Speed : ${weather.wind.speed}m/s`;
    this.icon.setAttribute("src",`http://openweathermap.org/img/w/${weather.precipitation[0].icon}.png`);
    this.desc.textContent = ` ${weather.precipitation[0].description}`;
    this.feelsLike.textContent = `Feels like:  ${(weather.main.temp * 9/5 - 459.67).toFixed(2)}°F`
    this.dewpoint.textContent = `Atmospheric Pressure: ${weather.main.pressure}mb`
    this.string.textContent = `${(weather.main.temp * 9/5 - 459.67).toFixed(2)}°F`

  }
}