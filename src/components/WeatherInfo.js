import React from "react";
import WeatherList from "./WeatherList";
import BackgroundTheme from "./BackgroundTheme";

const WeatherInfo = (props) => {
  return (
    <main className="weather">
      <div className="container">
        <section className="weather__temperature-info">
          <h1 className="weather__temperature">
            {props.weather.main.temp} <span>&deg;C</span>
          </h1>
          <div className="weather__temperature-range">
            <p className="weather__amount weather__amount-max">
              {props.weather.main.temp_max} &deg;C
            </p>
            <p className="weather__amount weather__amount-max">
              {props.weather.main.temp_min} &deg;C
            </p>
          </div>
        </section>
        <p className="weather__description">
          {props.weather.weather[0].description}
        </p>
        <WeatherList />
      </div>
    </main>
  );
};

export default WeatherInfo;
