import React, { useState, useEffect } from "react";
import WeatherDay from "./components/WeatherDay";
import LoadingPage from "./components/LoadingPage";

const App = () => {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [currentdata, setCurrentData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    const fetchData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setCurrentData(result);
        });
    };

    const fetchHourlyData = async () => {
      await fetch(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${latitude}&lon=${longitude}&exclude=daily&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setHourlyData(result);
        });
    };
    fetchData();
    fetchHourlyData();
  }, [latitude, longitude]);

  return (
    <div>
      {typeof currentdata.main !== "undefined" ? (
        <WeatherDay
          latitude={latitude}
          longitude={longitude}
          weatherData={currentdata}
          hourlyWeather={hourlyData}
        />
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default App;
