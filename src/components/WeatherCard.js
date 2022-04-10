import React from "react";
import ModalWindow from "./ModalWindow";

const WeatherCard = (props) => {
  const [cardMode, setCardMode] = React.useState(false);

  const changeCardMode = () => {
    setCardMode((mode) => !mode);
  };

  return (
    <div>
      <div onClick={changeCardMode} className="weather-card">
        <div className="weather-card__temperature">
          {Math.round(props.temp)} &deg;{props.units === "metric" ? "C" : "F"}
        </div>
        <div className="weather-card__img">
          <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
        </div>
        <div className="weather-card__time">{props.hours === 'now' ? 'now' : `${props.hours} hours`}</div>
      </div>
      {cardMode && <ModalWindow units={props.units} hour={props.hour} changeCardMode={changeCardMode} cardMode={cardMode} />}
    </div>
  );
};

export default WeatherCard;
