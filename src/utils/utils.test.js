import { getWeatherImgSrc, getDay, filterForecastList, loadData } from "./utils";

describe("getWeatherImgSrc", () => {
  it("returns weather image source url given icon id", () => {
    const value = getWeatherImgSrc("10n");
    expect(value).toEqual("http://openweathermap.org/img/wn/10n.png");
  })

  it("returns empty string when icon id is not passed", () => {
    const value = getWeatherImgSrc();
    expect(value).toEqual("");
  })
});

describe("getDay", () => {
  it("returns day given a date", () => {
    const value = getDay("2020-08-20 09:00:00");
    expect(value).toEqual("Thu");
  })

  it("returns empty string when date is not passed", () => {
    const value = getDay();
    expect(value).toEqual("");
  })
});

describe("filterForecastList", () => {
  const forecastList = [
    { "dt_txt": "2020-08-21 00:00:00" },
    { "dt_txt": "2020-08-21 03:00:00" },
    { "dt_txt": "2020-08-21 06:00:00" },
    { "dt_txt": "2020-08-21 09:00:00" },
    { "dt_txt": "2020-08-21 12:00:00" },
    { "dt_txt": "2020-08-21 15:00:00" },
    { "dt_txt": "2020-08-21 18:00:00" },
    { "dt_txt": "2020-08-21 21:00:00" },
    { "dt_txt": "2020-08-22 00:00:00" },
    { "dt_txt": "2020-08-22 03:00:00" },
    { "dt_txt": "2020-08-22 06:00:00" },
    { "dt_txt": "2020-08-22 09:00:00" },
    { "dt_txt": "2020-08-22 12:00:00" },
    { "dt_txt": "2020-08-22 15:00:00" },
    { "dt_txt": "2020-08-22 18:00:00" },
    { "dt_txt": "2020-08-22 21:00:00" }
  ];

  it("returns the filtered list based on your given current hour of time", () => {
    const currentHour = 5;
    const filteredList = filterForecastList(forecastList, currentHour);
    expect(filteredList.length).toEqual(2);
    expect(filteredList[0]["dt_txt"]).toEqual("2020-08-21 06:00:00");
    expect(filteredList[1]["dt_txt"]).toEqual("2020-08-22 06:00:00");
  })

  it("returns the filtered list based on FORECAST_DEFAULT_HOUR when current hour is not passed", () => {
    const filteredList = filterForecastList(forecastList);
    expect(filteredList.length).toEqual(2);
    expect(filteredList[0]["dt_txt"]).toEqual("2020-08-21 09:00:00");
    expect(filteredList[1]["dt_txt"]).toEqual("2020-08-22 09:00:00");
  })
});

/* Both tests pass as of now
 * As the token in following tests will expire after a set number of requests, commenting it
 * Use some public api for the tests and uncomment code
 */
// describe("loadData", () => {
//   const api = "https://gnews.io/api/v3/top-news?token=24482b7874c9083b272c4f58a189d8aa";
//   it("fetches and returns data sending an api request", async () => {
//     const data = await loadData(api);
//     expect(data.articleCount).toEqual(10);
//   })

//   const errApi = "https://gnews.io/api/v3/top-news?token=";
//   it("returns undefined when error occurs", async () => {
//     const data = await loadData(errApi);
//     expect(data).toEqual(undefined);
//   })
// });
