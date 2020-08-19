import React, { useState, useEffect } from 'react';
import config from '../../config/account_ids.json';
import { loadData, getWeatherImgSrc, getDay } from '../../utils.js';

import styles from './weather-card.module.css';

// Component to show weather based on the geolocation
const WeatherCard = () => {
  const [coord, updateCoord] = useState({});
  const [weatherData, updateWeatherData] = useState(null);
  const [forecastData, updateForecastData] = useState(null);

  // Function to get data from weather apis and save in state
  const getData = async (lat, lon) => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${config['openweather_api_key']}`;
    const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${config['openweather_api_key']}`;
    const weather = await loadData(weatherApi);
    const forecast = await loadData(forecastApi);
    updateWeatherData(weather);
    updateForecastData(forecast);
  };

  // Function to get the user's geolocation
  // Run a callback to save coordinates in state and call getData function
  const getGeometricCoord = () => {
    if('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition((position) => {
        !weatherData && !forecastData && getData(parseInt(position.coords.latitude), parseInt(position.coords.longitude));
        updateCoord({lat: position.coords.latitude, lon: position.coords.longitude});
      });
    } else {
      console.log("geolocation IS NOT available");
    }
  };

  useEffect(() => {
    getGeometricCoord();
  }, []);

  // Function to return forecast ui single item
  const forecastItem = (weatherData, currentWeather = false) => {
    const { weather:[{ main, icon }], main: { temp_min:tempMin, temp_max:tempMax }, dt, dt_txt } = weatherData;
    const day = currentWeather ? Date(dt).substring(0, 3) : getDay(dt_txt);
    
    return <div className={styles.itemWrapper}>
      <p className={styles.itemDate}>{day}</p>
      <img src={getWeatherImgSrc(icon)} alt={main} />
      <p className={styles.itemTemp}>{parseInt(tempMax)}&deg;C</p>
      <p className={styles.itemTemp}>{parseInt(tempMin)}&deg;C</p>
    </div>;
  };

  // Returns null if coordinates or weather data not available
  if(!Object.keys(coord).length || !weatherData || !forecastData) return null;
  
  const { weather:[{ main }], main: { temp }, name, sys: {country}, dt } = weatherData;
  return <div className={styles.wrapper}>
    <div>
      <div className={styles.place}>{`${name}, ${country}`}</div>
      <p className={styles.date}>{Date(dt).substring(0, 15)}</p>
      <div className={styles.status}>{main}</div>
      <div className={styles.temp}>{temp} &deg;C</div>
    </div>
    <div className={styles.forecastWrapper}>
      {forecastItem(weatherData,true)}
      {forecastData.list.slice(1, 6).map((weatherData) => forecastItem(weatherData))}
    </div>
  </div>;
};

export default WeatherCard;