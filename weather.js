class Weather{
  constructor(city,country){
      this.city = city;
      this.country = country;
      this.apiKey = "4dbcb07c40cb19413501a08e75a0973f";
  }

  //Fetch weather from API

  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);
    const responseData = await response.json();
    const precipitation = responseData.weather;
    const main = responseData.main;
    const wind = responseData.wind;
    const sys = responseData.sys;
    const id = responseData.id;
    const name = responseData.name;
    return {
     precipitation,
     main,
     wind,
     sys,
     id,
     name
    }
  }
  changeLocation(city,country){
    this.city = city;
    this.country = country;
  }
}