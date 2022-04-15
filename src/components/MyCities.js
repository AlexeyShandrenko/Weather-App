import React from "react";
import AddCityModal from "./AddCityModal";
import CityCard from "./CityCard";

const MyCities = (props) => {
  const [addCityModal, setAddCityModal] = React.useState(false);

  const displayAddCityModal = () => {
    setAddCityModal((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <div className="city">
        <div className="container">
          <h1 className="city__title">My Cities</h1>
          <ul className="city__list">
            {props.cities.map((city) => {
              return (
                <CityCard
                  units={props.units}
                  name={city.name}
                  temp={Math.round(city.main.temp)}
                  description={city.weather[0].description}
                  key={Math.random()}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="city-add">
        <div className="container">
          <button onClick={displayAddCityModal} className="city-add__button">
            <div className="city-add__img">
              <img src="./images/icons/plus.png" alt="" />
            </div>
            <p className="city-add__text">City</p>
          </button>
        </div>
      </div>
      {addCityModal && <AddCityModal displayAddCityModal={displayAddCityModal} addCity={props.addCity} />}
    </div>
  );
};

export default MyCities;
