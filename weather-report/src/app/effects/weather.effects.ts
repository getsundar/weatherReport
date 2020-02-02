import {
  Injectable
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  catchError,
  switchMap
} from 'rxjs/operators';
import {
  of
} from 'rxjs';
import {
  LoadWeatherAction,
  WeatherActionTypes,
  LoadWeatherSuccessAction,
  LoadWeatherFailureAction
} from '../actions/weather.actions';
import {
  WeatherService
} from '../services/weather.service';

@Injectable()
export class WeatherEffects {
  @Effect()
  loadWeather$ = this.actions$.pipe(
    ofType < LoadWeatherAction > (WeatherActionTypes.LOAD_WEATHER_DATA),
    switchMap(() => this.weatherService.getWeatherData()),
    switchMap(weatherDetails => of (new LoadWeatherSuccessAction(weatherDetails))),
    catchError(error => of (new LoadWeatherFailureAction(error)))
  );
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
