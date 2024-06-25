import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city... "
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Tuesday 16:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
            />
            31°C
            <div className="col-6">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 29%</li>
                <li>Wind: 19 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}