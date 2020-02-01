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
  Observable
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

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit, OnDestroy {
  weatherDetails$: Observable < any > ;
  hourlyWeatherDetails$: Observable < any > ;
  hourlyWeatherShown = false;
  displayedWeatherColumns: ColumnProp[] = WEATHER_COLUMNS;
  displayedHourlyColumns: ColumnProp[] = HOURLY_WEATHER_COLUMNS;
  dataLoading = false;
  citySelected = '';
  weatherSubscription;
  hourlyWeatherSubscription;
  errorMessage = '';
  inValidCities = [];
  constructor(private store: Store < AppState > ) {}
  ngOnInit() {
    this.store.dispatch(new LoadWeatherAction());
    this.weatherDetails$ = this.store.select(selectWeatherDetails);
    this.weatherSubscription = this.store.select('weather').subscribe((weatherData) => {
      this.dataLoading = weatherData.loading;
    });
  }
  onShowingHourlyDetails(cityNameToGetDetails) {
    this.errorMessage = '';
    this.citySelected = cityNameToGetDetails;
    this.dataLoading = true;
    this.store.dispatch(new LoadHourlyWeatherAction({
      cityName: this.citySelected
    }));
    this.hourlyWeatherDetails$ = this.store.select(hourlyWeatherDetails);
    this.hourlyWeatherSubscription = this.store.select('hourlyWeather').subscribe((hourlyWeatherData) => {
      if (!hourlyWeatherData.error) {
        this.dataLoading = hourlyWeatherData.loading;
        if (!this.dataLoading) {
          this.hourlyWeatherShown = true;
        }
      } else {
        this.errorMessage = hourlyWeatherData.error.message;
        this.dataLoading = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
    this.hourlyWeatherSubscription.unsubscribe();
  }
}
