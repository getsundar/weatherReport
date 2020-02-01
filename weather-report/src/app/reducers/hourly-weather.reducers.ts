import {
  HourlyWeatherAction,
  HourlyWeatherActionTypes
} from '../actions/hourly-weather.actions';
import {
  HourlyWeather
} from '../models/hourly-weather.model';

export interface HourlyWeatherState {
  hourlyWeather: HourlyWeather;
  loading: boolean;
  error: Error;
}

const initialState: HourlyWeatherState = {
  hourlyWeather: null,
  loading: true,
  error: null
};

export function HourlyWeatherReducer(state: HourlyWeatherState = initialState, action: HourlyWeatherAction) {
  switch (action.type) {
    case HourlyWeatherActionTypes.LOAD_HOURLY_WEATHER_DATA:
      return {
        ...state,
        loading: true
      };
    case HourlyWeatherActionTypes.LOAD_HOURLY_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        hourlyWeather: action.payload,
          loading: false
      };
    case HourlyWeatherActionTypes.LOAD_HOURLY_WEATHER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
          loading: false
      };
    default:
      return state;
  }
}
