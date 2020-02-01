import {
  WeatherState
} from '../reducers/weather.reducers';
import {
  HourlyWeatherState
} from '../reducers/hourly-weather.reducers';

export interface AppState {
  weather: WeatherState;
  hourlyWeather: HourlyWeatherState;
}
