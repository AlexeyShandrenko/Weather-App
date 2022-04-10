import React from "react";
import WeatherList from "./WeatherList";

const WeatherInfo = (props) => {
  return (
    <main className="weather">
      <div className="container">
        <section className="weather__temperature-info">
          <h1 className="weather__temperature">
            {Math.round(props.weather.main.temp)} <span>&deg;{props.units === "metric" ? "C" : "F"}</span>
          </h1>
          <div className="weather__temperature-range">
            <p className="weather__amount weather__amount_max">
              {Math.ceil(props.weather.main.temp_max)} &deg;{props.units === "metric" ? "C" : "F"}
            </p>
            <p className="weather__amount weather__amount_min">
              {Math.floor(props.weather.main.temp_min)} &deg;{props.units === "metric" ? "C" : "F"}
            </p>
          </div>
        </section>
        <div className="weather__description">
          <p>{props.weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
        <WeatherList units={props.units} hourlyWeather={props.hourlyWeather} />
      </div>
    </main>
  );
};

export default WeatherInfo;
