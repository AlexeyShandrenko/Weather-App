import React from "react";

const UnitChanging = (props) => {

  const [unit, setUnit] = React.useState('metric')

  const change = (event) => {
    const {value} = event.target;
    setUnit(value);
  }

  const acceptUnit = (event) => {
    event.preventDefault();
    props.changeUnit(unit);
    props.changeDisplayUnit();
  }

  return (
    <div className="unit">
      <h1 className="unit__title">Unit of Temperature Measurement</h1>
      <form onSubmit={acceptUnit} className="unit__form">
        <div className="unit__radio">
          <input
            type="radio"
            id="celcius"
            name="unit-measurement"
            value="metric"
            checked={unit === "metric"}
            onChange={change}
          />
          <label htmlFor="celcius">Celcius</label>
        </div>
        <div className="unit__radio">
          <input
            type="radio"
            id="fahrenheit"
            name="unit-measurement"
            value="imperial"
            checked={unit === "imperial"}
            onChange={change}
          />
          <label htmlFor="fahrenheit">Fahrenheit</label>
        </div>
        <div className="unit__submit">
          <button>Accept</button>
        </div>
      </form>
    </div>
  );
};

export default UnitChanging;
