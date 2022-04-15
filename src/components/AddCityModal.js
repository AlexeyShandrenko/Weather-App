import React from "react";

const AddCityModal = (props) => {
  const [city, setCity] = React.useState([]);

  const changeCity = (event) => {
    const { value } = event.target;
    setCity(value);
  };

  const addCity = (event) => {
    event.preventDefault();
    props.addCity(city);
    props.displayAddCityModal();
  };

  return (
    <div className="add-city">
      <h1 className="add-city__title">Add City</h1>
      <form onSubmit={addCity} className="add-city__form">
        <div className="add-city__input">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={changeCity}
          />
        </div>
        <div className="add-city__input">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddCityModal;
