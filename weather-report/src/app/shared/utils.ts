import {
  CityWeather
} from '../models/city-weather.model';
import {
  CityHourlyWeather
} from '../models/city-hourly-weather.model';

export const getHourlyWeather = (element) => {
  const hourlyDetails: CityHourlyWeather = {
    timeStamp: element.dt_txt,
    avgTemp: ((element.main.temp_max + element.main.temp_min) / 2).toFixed(2),
    windStrength: element.wind.speed
  };
  return hourlyDetails;
};

export const getWeatherDetails = (element) => {
  const cityWeather: CityWeather = {
    name: element.name,
    avgTemp: ((element.main.temp_max + element.main.temp_min) / 2).toFixed(2),
    windStrength: element.wind.speed
  };
  return cityWeather;
};
