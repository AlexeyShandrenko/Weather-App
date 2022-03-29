import React, { useState, useEffect } from "react";
import WeatherDay from "./components/WeatherDay";

const App = () => {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <div>
      {typeof data.main !== "undefined" ? (
        <WeatherDay weatherData={data} />
      ) : (
        <div>Weather app</div>
      )}
    </div>
  );
};

export default App;
