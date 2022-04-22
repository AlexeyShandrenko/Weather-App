import { useState, useEffect } from "react";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import LoadingPage from "./LoadingPage";

import { useParams } from "react-router-dom";

const WeatherDay = () => {
  const { cityName } = useParams();

  const [city, setCity] = useState([]);
  const [hourlyCity, setHourlyCity] = useState([]);
  const [units, setUnits] = useState("metric");
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  useEffect(() => {
    const fetchCoordinatesByCityName = async () => {
      await fetch(`https://photon.komoot.io/api/?lang=en&limit=1&q=${cityName}`)
        .then((res) => res.json())
        .then((result) => {
          setLongitude(result.features[0].geometry.coordinates[0]);
          setLatitude(result.features[0].geometry.coordinates[1]);
        });
    };

    const fetchCity = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCity(result);
        });
    };
    const fetchHourlyData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&units=${units}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setHourlyCity(result);
        });
    };
    fetchCoordinatesByCityName();
    fetchCity();
    fetchHourlyData();
  }, [cityName, units, latitude, longitude]);

  const changeUnit = (value) => {
    setUnits(value);
  };

  return (
    <div>
      {typeof city.main !== "undefined" ? (
        <div className="wrapper">
          <Header weather={city} units={units} changeUnit={changeUnit} />
          <WeatherInfo
            units={units}
            hourlyWeather={hourlyCity}
            weather={city}
          />
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default WeatherDay;
