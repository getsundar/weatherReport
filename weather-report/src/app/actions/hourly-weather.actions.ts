import {
  Action
} from '@ngrx/store';
import {
  HourlyWeather
} from '../models/hourly-weather.model';

export enum HourlyWeatherActionTypes {
  LOAD_HOURLY_WEATHER_DATA = '[HOURLY_WEATHER] Load HourlyWeather',
    LOAD_HOURLY_WEATHER_DATA_SUCCESS = '[HOURLY_WEATHER] Load HourlyWeather Success',
    LOAD_HOURLY_WEATHER_DATA_FAILURE = '[HOURLY_WEATHER] Load HourlyWeather Failure'
}
export class LoadHourlyWeatherAction implements Action {
  readonly type = HourlyWeatherActionTypes.LOAD_HOURLY_WEATHER_DATA;
  constructor(public payload: any) {}
}
export class LoadHourlyWeatherSuccessAction implements Action {
  readonly type = HourlyWeatherActionTypes.LOAD_HOURLY_WEATHER_DATA_SUCCESS;
  constructor(public payload: HourlyWeather) {}
}
export class LoadHourlyWeatherFailureAction implements Action {
  readonly type = HourlyWeatherActionTypes.LOAD_HOURLY_WEATHER_DATA_FAILURE;
  constructor(public payload: Error) {}
}

export type HourlyWeatherAction =
  LoadHourlyWeatherAction |
  LoadHourlyWeatherFailureAction |
  LoadHourlyWeatherSuccessAction;
