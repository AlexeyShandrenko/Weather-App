import React from "react";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";

const WeatherDay = (props) => {
  return (
    <div className="wrapper">
      <Header
        weather={props.weatherData}
        units={props.units}
        changeUnit={props.changeUnit}
      />
      <WeatherInfo
        units={props.units}
        hourlyWeather={props.hourlyWeather}
        weather={props.weatherData}
      />
    </div>
  );
};

export default WeatherDay;
