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
  HourlyWeatherState
} from 'src/app/reducers/hourly-weather.reducers';
import {
  getHourlyWeather,
  getWeatherDetails
} from './utils';

// to parse data for the grids from the complete JSON (Weather report)
export const currentWeatherDetails = (state: AppState) => state && state.weather;
export const selectWeatherDetails = createSelector(
  currentWeatherDetails,
  ({
    weather,
    loading
  }: WeatherState) => {
    if (!loading && weather) {
      return weather.map(getWeatherDetails);
    } else {
      return weather;
    }
  });

// to parse data for the grids from the complete JSON (Hourly Weather report)
export const currentHourlyWeatherDetails = (state: AppState) => state && state.hourlyWeather;
export const hourlyWeatherDetails = createSelector(
  currentHourlyWeatherDetails,
  ({
    hourlyWeather,
    loading
  }: HourlyWeatherState) => {
    if (!loading && hourlyWeather) {
      return hourlyWeather.list.map(getHourlyWeather);
    } else {
      return hourlyWeather;
    }
  });
