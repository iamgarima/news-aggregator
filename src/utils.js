// Function to fetch data sending an api request
export const loadData = async (api) => {
  try {
    const data = await await((await fetch(api)).json());
    return data;
  } catch(err) {
    console.log("Error:", err);
  }
};

// Function to get weather image source url given icon id
export const getWeatherImgSrc = iconId => {
  return `http://openweathermap.org/img/wn/${iconId}.png`;
}

// Function to get day on any given date
export const getDay = date => {
  const daysList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return daysList[new Date(date).getDay() - 1];
}