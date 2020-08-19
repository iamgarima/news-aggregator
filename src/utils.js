import config from './config/account_ids.json';

// Function to fetch data sending an api request
const loadData = async (api) => {
  try {
    const data = await await((await fetch(api)).json());
    return data;
  } catch(err) {
    console.log("Error:", err);
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
  return `http://openweathermap.org/img/wn/${iconId}.png`;
}

// Function to get day on any given date
export const getDay = date => {
  const daysList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return daysList[new Date(date).getDay() - 1];
}