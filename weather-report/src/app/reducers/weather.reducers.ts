import {
  Weather
} from '../models/weather.model';
import {
  WeatherAction,
  WeatherActionTypes
} from '../actions/weather.actions';


export interface WeatherState {
  weather: Weather[];
  loading: boolean;
  error: Error;
}

const initialState: WeatherState = {
  weather: [],
  loading: true,
  error: null
};

export function WeatherReducer(state: WeatherState = initialState, action: WeatherAction) {
  switch (action.type) {
    case WeatherActionTypes.LOAD_WEATHER_DATA:
      return {
        ...state,
        loading: true
      };
    case WeatherActionTypes.LOAD_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weather: action.payload,
          loading: false
      };
    case WeatherActionTypes.LOAD_WEATHER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
          loading: false
      };
    default:
      return state;
  }
}
