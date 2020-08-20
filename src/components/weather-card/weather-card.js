import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherImgSrc, getDay, loadWeatherData, loadForecastData, filterForecastList } from '../../utils.js';
import { FORECAST_LIMIT } from '../../constants.js';
import { updateGeolocationStatus } from '../../actions/geolocation.js';

import styles from './weather-card.module.css';


// Component to show weather based on the geolocation
const WeatherCard = () => {
  const [coord, updateCoord] = useState({});
  const [weatherData, updateWeatherData] = useState(null);
  const [forecastData, updateForecastData] = useState(null);
  const [geoAccess, updateGeoAccessStatus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const successCallback = position => {
      updateCoord({ lat: position.coords.latitude, lon: position.coords.longitude });
      dispatch(updateGeolocationStatus({ status: "success" }));
    };

    const errorCallback = error => {
      const { code, message } = error;
      console.log(`ERROR(${code}): ${message}`);
      updateGeoAccessStatus(false);
      dispatch(updateGeolocationStatus({ 
        status: "error",
        error: { code, message }
      }));
    };

    // Function to get the user's geolocation
    const getGeoLocation = () => {
      if('geolocation' in navigator) {
        // geolocation is available
        updateGeoAccessStatus(true);
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
        // geolocation is not available
        console.log("Geolocation is not supported by your browser");
        updateGeoAccessStatus(false);
        dispatch(updateGeolocationStatus({ 
          status: "error",
          error: {
            code: 0, 
            message: "Geolocation is not supported by your browser"
          }
        }));
      }
    };

    getGeoLocation();
  }, []);

  useEffect(() => {
    // Function to get data from weather apis and save in state
    const getData = async (lat, lon) => {
      const weather = await loadWeatherData(lat, lon);
      const forecast = await loadForecastData(lat, lon);
      updateWeatherData(weather);
      updateForecastData(forecast);
    };
    coord.lat && coord.lon && getData(coord.lat, coord.lon);
  }, [coord]);

  // Function to return forecast ui single item
  const forecastItem = (weatherData, today) => {
    const { weather:[{ main, icon }], main: { temp_min:tempMin, temp_max:tempMax }, dt, dt_txt } = weatherData;
    const day = today ? "Today" : getDay(dt_txt);
    return <div className={styles.itemWrapper} key={dt}>
      <p className={styles.itemDate}>{day}</p>
      <img src={getWeatherImgSrc(icon)} alt={main} />
      <p className={styles.itemTemp}>{parseInt(tempMax)}&deg;C</p>
      <p className={styles.itemTemp}>{parseInt(tempMin)}&deg;C</p>
    </div>;
  };

  /* Returns null 
   * if error occurs while fetching geolocation or
   * missing coordinates or 
   * weather data not available */
  if(!geoAccess || !Object.keys(coord).length || !weatherData || !forecastData) return null;
  
  const { weather:[{ main }], main: { temp }, name, sys: {country}, dt } = weatherData;
  const currentDateObj = new Date(dt * 1000);
  const currentHour = currentDateObj.getHours();
  const filteredForecastList = filterForecastList(forecastData.list, currentHour);
  
  return <div className={styles.wrapper}>
    <div>
      <div className={styles.place}>{`${name}, ${country}`}</div>
      <p className={styles.date}>{currentDateObj.toDateString()}</p>
      <div className={styles.status}>{main}</div>
      <div className={styles.temp}>{temp} &deg;C</div>
    </div>
    <div className={styles.forecastWrapper}>
      {forecastItem(weatherData, true)}
      {filteredForecastList.slice(1, FORECAST_LIMIT).map((weatherData) => forecastItem(weatherData))}
    </div>
  </div>;
};

export default WeatherCard;