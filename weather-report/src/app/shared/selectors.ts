import {
  AppState
} from 'src/app/models/app-state.model';
import {
  createSelector
} from '@ngrx/store';
import {
  WeatherState
} from 'src/app/reducers/weather.reducers';
import {
  CityWeather
} from 'src/app/models/city-weather.model';
import {
  HourlyWeatherState
} from 'src/app/reducers/hourly-weather.reducers';
import {
  CityHourlyWeather
} from 'src/app/models/city-hourly-weather.model';

// to parse data for the grids from the complete JSON (Weather report)
export const currentWeatherDetails = (state: AppState) => state.weather;
export const selectWeatherDetails = createSelector(
  currentWeatherDetails,
  (allCityWeather: WeatherState) => {
    if (!allCityWeather.loading) {
      const weatherDetailsArray = [];
      allCityWeather.weather.forEach(element => {
        const obj: CityWeather = {
          name: element.name,
          avgTemp: ((element.main.temp_max + element.main.temp_min) / 2).toFixed(2),
          windStrength: element.wind.speed
        };
        weatherDetailsArray.push(obj);
      });
      return weatherDetailsArray;
    } else {
      return allCityWeather.weather;
    }
  }
);


// to parse data for the grids from the complete JSON (Hourly Weather report)
export const currentHourlyWeatherDetails = (state: AppState) => state.hourlyWeather;
export const hourlyWeatherDetails = createSelector(
  currentHourlyWeatherDetails,
  (allHourlyWeather: HourlyWeatherState) => {
    if (!allHourlyWeather.loading) {
      const weatherDetailsArray = [];
      allHourlyWeather.hourlyWeather.list.forEach(element => {
        const obj: CityHourlyWeather = {
          timeStamp: element.dt_txt,
          avgTemp: ((element.main.temp_max + element.main.temp_min) / 2).toFixed(2),
          windStrength: element.wind.speed
        };
        weatherDetailsArray.push(obj);
      });
      return weatherDetailsArray;
    } else {
      return allHourlyWeather.hourlyWeather;
    }
  }
);
