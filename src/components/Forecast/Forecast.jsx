import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";

function Forecast() {
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState("");
  const API_KEY = "066406f5de7a4d93834e44a9e015ebc6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;

  const searchLocation = () => {
    axios.get(url).then((response) => {
      setForecast(response.data);
      console.log(response.data);
    });
    setLocation("");
  };

  return (
    <div className="forecast__top">
      <div className="forecast__main">
        <div className="forecast__details">
          {forecast.name !== undefined ? (
            <>
              <div className="forecast__details--child">
                {forecast.main ? (
                  <h2 className="heading-forecast">
                    {forecast.main.temp.toFixed()}°C
                  </h2>
                ) : null}
              </div>
              <div className="forecast__details--child">
                <h3 className="heading-third">{forecast.name}</h3>
                {forecast.weather ? (
                  <p className="forecast-para">
                    {forecast.weather[0].description}
                  </p>
                ) : null}
              </div>
              <div className="forecast__details--child forecast-icon__container">
                <TiWeatherCloudy className="forecast__weather--icon" />

                {forecast.weather ? <p>{forecast.weather[0].main}</p> : null}
              </div>
            </>
          ) : (
            <div className="conditional__cover">
              <h2 className="heading-sub">
                It's a good day to check the weather.{" "}
              </h2>
            </div>
          )}

         
        </div>
        <div className="forecast__content-child">
          <div className="forecst__content-child-top">
            <div className="search__container">
              <div className="input__search">
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Another Location"
                  type="text"
                  className="search__input--box"
                />
              </div>
              <div className="input__icon">
                <button onClick={searchLocation} className="">
                  Check
                </button>
              </div>
            </div>
            <div className="forecst__content-child-bottom">
              <Link to="/london">London, UK</Link>
              <Link to="/zurich">Zurich, SUI</Link>
              <Link to="/paris">Paris, FRA</Link>
            </div>
          </div>

          <div className="forecast__additional">
            <h2>{forecast.name} Weather Details</h2>
            <div className="forecast__additional--paragraphs">
              {forecast.name !== undefined ? (
                <>
                  <div className="forecast__split">
                    <h3>Feels Like</h3>
                    {forecast.main ? (
                      <h3>{forecast.main.feels_like.toFixed()} °C</h3>
                    ) : null}
                  </div>
                  <div className="forecast__split">
                    <h3>Pressure</h3>
                    {forecast.main ? (
                      <h3>{forecast.main.pressure.toFixed()} Pa</h3>
                    ) : null}
                  </div>
                  <div className="forecast__split">
                    <h3>Wind Speed</h3>
                    {forecast.wind ? (
                      <h3>{forecast.wind.speed.toFixed()} MPH</h3>
                    ) : null}
                  </div>
                  <div className="forecast__split">
                    <h3>Humidity</h3>
                    {forecast.main ? (
                      <h3>{forecast.main.humidity.toFixed()} g.kg-1</h3>
                    ) : null}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
