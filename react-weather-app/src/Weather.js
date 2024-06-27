import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Tuesday 16:00",
      description:response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.main.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              ';
              <input
                type="search"
                placeholder="Enter a city... "
                className="form-control"
                autofocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.desciption}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div />
            <div />
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.data.humidity} 29%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
} else {
  const apiKey = "63e1f73ea14fc2f9d286322a5fa32fe6";
  let apiUrl =
    'https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&unit=metric';
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
  }
