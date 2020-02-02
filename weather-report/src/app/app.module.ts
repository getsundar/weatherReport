import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  StoreModule
} from '@ngrx/store';
import {
  EffectsModule
} from '@ngrx/effects';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  WeatherReducer
} from './reducers/weather.reducers';
import {
  WeatherEffects
} from './effects/weather.effects';
import {
  MatTableModule
} from '@angular/material/table';
import {
  HourlyWeatherReducer
} from './reducers/hourly-weather.reducers';
import {
  HourlyWeatherEffects
} from './effects/hourly-weather.effects';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import {
  DataGridComponent
} from './components/data-grid/data-grid.component';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  MatCardModule
} from '@angular/material/card';
import {
  WeatherReportComponent
} from './components/weather-report/weather-report.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      weather: WeatherReducer,
      hourlyWeather: HourlyWeatherReducer
    }),
    EffectsModule.forRoot([WeatherEffects, HourlyWeatherEffects]),
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
