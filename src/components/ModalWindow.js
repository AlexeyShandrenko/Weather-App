import React from "react";

const ModalWindow = (props) => {
  return (
    <div className="modal">
      <div className="modal__exit">
        <button className="modal__cross cross" onClick={props.changeCardMode}>
          <img src="./images/icons/cross.png" />
        </button>
      </div>
      <div className="modal__img">
        <img
          src={`http://openweathermap.org/img/wn/${props.hour.weather[0].icon}@2x.png`}
        />
      </div>
      <div className="modal__info">
        <p className="modal__description">
          {props.hour.weather[0].description}
        </p>
        <p className="modal__temperature">
          Temperaure: {Math.round(props.hour.temp)} &deg;C
        </p>
        <p className="modal__feel">
          Feels like: {Math.round(props.hour.feels_like)}
        </p>
        <p className="modal__pressure">
          Pressure: {Math.round(props.hour.pressure)}
        </p>
        <p className="modal__clouds">Clouds: {Math.round(props.hour.clouds)}</p>
        <p className="modal__humidity">
          Humidity: {Math.round(props.hour.humidity)}
        </p>
      </div>
    </div>
  );
};

export default ModalWindow;
