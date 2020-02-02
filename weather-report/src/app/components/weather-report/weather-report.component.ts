import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Store
} from '@ngrx/store';
import {
  AppState
} from 'src/app/models/app-state.model';
import {
  LoadWeatherAction
} from 'src/app/actions/weather.actions';
import {
  LoadHourlyWeatherAction
} from 'src/app/actions/hourly-weather.actions';
import {
  Observable,
  Subject
} from 'rxjs';
import {
  ColumnProp
} from 'src/app/models/column-prop.model';
import {
  WEATHER_COLUMNS,
  HOURLY_WEATHER_COLUMNS
} from 'src/assets/constants';
import {
  selectWeatherDetails,
  hourlyWeatherDetails
} from 'src/app/shared/selectors';
import {
  takeUntil
} from 'rxjs/operators';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit, OnDestroy {
  public weatherDetails$: Observable < any > ;
  public hourlyWeatherShown = false;
  public readonly displayedWeatherColumns: ColumnProp[] = WEATHER_COLUMNS;
  public readonly displayedHourlyColumns: ColumnProp[] = HOURLY_WEATHER_COLUMNS;
  public dataLoading = false;
  public citySelected = '';
  public errorMessage = '';
  public inValidCities = [];
  public ngUnsubscribe: Subject < void > = new Subject < void > ();
  public buttonLabel = 'Hourly Details';
  public readonly hourlyCityWeatherDetails$ = this.store.select(hourlyWeatherDetails);

  constructor(public store: Store < AppState > ) {}

  ngOnInit() {
    this.store.dispatch(new LoadWeatherAction());
    this.weatherDetails$ = this.store.select(selectWeatherDetails);
    this.store.select('weather').pipe(takeUntil(this.ngUnsubscribe)).subscribe((weatherData) => {
      this.dataLoading = weatherData && weatherData.loading || false;
    });
  }
  onShowingHourlyDetails(cityNameToGetDetails) {
    this.errorMessage = '';
    this.citySelected = cityNameToGetDetails;
    this.dataLoading = true;
    this.store.dispatch(new LoadHourlyWeatherAction({
      cityName: this.citySelected
    }));
    // showing the hourly weather report grid by subscring to the data
    this.store.select('hourlyWeather').pipe(takeUntil(this.ngUnsubscribe)).subscribe((hourlyWeatherData) => {
      if (!hourlyWeatherData.error) {
        this.dataLoading = hourlyWeatherData.loading;
        (this.dataLoading === false) ? this.hourlyWeatherShown = true: this.hourlyWeatherShown = false;
      } else {
        this.errorMessage = hourlyWeatherData.error.message;
        this.dataLoading = false;
      }
    });
  }
  ngOnDestroy(): void {
    // unsubscribing all the subscription
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
