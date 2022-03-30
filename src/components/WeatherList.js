import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherList = (props) => {
  const { hourly } = props.hourlyWeather;
  console.log(hourly)

  return (
    <div className="weather-list">
      {hourly && hourly.map((hour) => {
        return <WeatherCard key={Math.random()} hours={new Date().getHours()} temp={hour.temp} icon={hour.weather[0].icon}/>
      })}
    </div>
  );
};

export default WeatherList;
