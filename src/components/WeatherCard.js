import React from "react";
import ModalWindow from "./ModalWindow";

const WeatherCard = (props) => {
  const [cardMode, setCardMode] = React.useState(false);

  const changeCardMode = () => {
    setCardMode((mode) => !mode);
  };

  return (
    <div>
      <button onClick={changeCardMode} className="weather-card">
        <div className="weather-card__temperature">
          {Math.round(props.temp)} &deg;C
        </div>
        <div className="weather-card__img">
          <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
        </div>
        <div className="weather-card__time">{props.hours} hours</div>
      </button>
      {cardMode && <ModalWindow changeCardMode={changeCardMode} cardMode={cardMode} />}
    </div>
  );
};

export default WeatherCard;
