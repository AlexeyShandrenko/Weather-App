import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <div className="weather-card__temperature">
        {Math.round(props.temp)} &deg;C
      </div>
      <div className="weather-card__img">
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        />
      </div>
      <div className="weather-card__time">{props.hours}</div>
    </div>
  );
};

export default WeatherCard;
