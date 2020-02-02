export const getHourlyWeather = (element) => {
  return {
    timeStamp: element.dt_txt,
    avgTemp: ((element.main.temp_max + element.main.temp_min) / 2).toFixed(2),
    windStrength: element.wind.speed
  };
};

export const getWeatherDetails = (element) => {
  return {
    name: element.name,
    avgTemp: ((element.main.temp_max + element.main.temp_min) / 2).toFixed(2),
    windStrength: element.wind.speed
  };
};
