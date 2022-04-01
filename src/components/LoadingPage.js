import React from "react";

const LoadingPage = () => {
  return (
    <div className="load-page">
      <div className="load-page__img">
        <img src="http://openweathermap.org/img/wn/02d@2x.png" />
      </div>
      <h1 className="load-page__title">Weather App</h1>
      <h4 className="load-page__description">
        Please, wait. We upload the weather for you!
      </h4>
      <div className="load-page__circle"></div>
    </div>
  );
};

export default LoadingPage;
