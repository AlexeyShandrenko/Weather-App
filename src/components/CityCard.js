import React from "react";
import { Link } from "react-router-dom";

const CityCard = (props) => {
  return (
    <li className="city__item">
      <Link
        onClick={() => props.chooseCityByName(props.name)}
        to={`/${props.name}`}
        className="city__link"
      >
        <div className="city__info">
          <p className="city__name">{props.name}</p>
          <div className="city__param">
            <p className="city__temp">
              {props.temp}&deg;
              {props.units === "metric" ? "C" : "F"}
            </p>
            <p className="city__description">{props.description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CityCard;
