import config from '../config/account_ids.json';
import { FORECAST_DEFAULT_HOUR } from '../constants.js';

// Function to fetch data sending an api request
export const loadData = async (api) => {
  try {
    const data = await await((await fetch(api)).json());
    if(data.errors) throw new Error(data.errors);
    return data;
  } catch(err) {
    console.log(err);
  }
};

// Function to get weather data given latitude and longitude
export const loadWeatherData = async (lat, lon) => {
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${config['openweather_api_key']}`;
  const weather = await loadData(weatherApi);
  return weather;
};

// Function to get forecast data given latitude and longitude
export const loadForecastData = async (lat, lon) => {
  const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${config['openweather_api_key']}`;
  const forecast = await loadData(forecastApi);
  return forecast;
}

// Function to get weather image source url given icon id
export const getWeatherImgSrc = iconId => {
  return iconId ? `http://openweathermap.org/img/wn/${iconId}.png` : '';
}

// Function to get day on any given date
export const getDay = (date = "") => {
  if(!date) return "";
  const daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayCode = new Date(date).getDay();
  return daysList[dayCode];
}

// Function to get the closest number divisible by 3 customised for numbers limited to a 24 hour clock
// e.g. this list [0, 3, 6, 9, 12, 15, 18, 21] 
const getClosest = num => {
  if(num % 3 === 0) return num;
  const closestNum = num % 3 === 1 ? num - 1 : num + 1;
  return closestNum === 24 ? 0 : closestNum; 
};

// Function to filter the list based on your current hour of time
export const filterForecastList = (forecastList, currentHour = FORECAST_DEFAULT_HOUR) => {
  return forecastList.filter(forecast => new Date(forecast["dt_txt"]).getHours() === getClosest(currentHour));
};