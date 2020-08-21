import { getWeatherImgSrc, getDay } from "./utils";

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