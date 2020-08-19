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