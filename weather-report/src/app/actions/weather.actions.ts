import {
  Action
} from '@ngrx/store';
import {
  Weather
} from '../models/weather.model';

export enum WeatherActionTypes {
  LOAD_WEATHER_DATA = '[WEATHER] Load Weather',
    LOAD_WEATHER_DATA_SUCCESS = '[WEATHER] Load Weather Success',
    LOAD_WEATHER_DATA_FAILURE = '[WEATHER] Load Weather Failure'
}
export class LoadWeatherAction implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_DATA;
}
export class LoadWeatherSuccessAction implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_DATA_SUCCESS;
  constructor(public payload: Weather[]) {}
}
export class LoadWeatherFailureAction implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_DATA_FAILURE;
  constructor(public payload: Error) {}
}

export type WeatherAction =
  LoadWeatherAction |
  LoadWeatherFailureAction |
  LoadWeatherSuccessAction;
