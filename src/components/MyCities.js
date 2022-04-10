import React from "react";

const MyCities = () => {
  return (
    <div className="wrapper">
      <div className="city">
        <div className="container">
          <h1 className="city__title">My Cities</h1>
          <ul className="city__list">
            <li className="city__item">
              <a href="#" className="city__link">
                <div className="city__info">
                  <p className="city__name">Kazan</p>
                  <div className="city__param">
                    <p className="city__temp">-2&deg;C</p>
                    <p className="city__description">Snow</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="city-add">
        <div className="container">
          <button className="city-add__button">
            <div className="city-add__img">
              <img src="./images/icons/plus.png" alt="" />
            </div>
            <p className="city-add__text">City</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCities;
