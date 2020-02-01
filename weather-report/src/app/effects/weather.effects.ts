import {
  Injectable
} from '@angular/core';
import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import {
  map,
  mergeMap,
  catchError
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

  @Effect() loadWeather$ = this.actions$
    .pipe(
      ofType < LoadWeatherAction > (WeatherActionTypes.LOAD_WEATHER_DATA),
      mergeMap(
        () => this.weatherService.getWeatherData()
        .pipe(
          map(data => {
            return new LoadWeatherSuccessAction(data);
          }),
          catchError(error => of (new LoadWeatherFailureAction(error)))
        )
      ),
    );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
