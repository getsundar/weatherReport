import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  WeatherReportComponent
} from './weather-report.component';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import {
  MatTableModule
} from '@angular/material/table';
import {
  DataGridComponent
} from '../data-grid/data-grid.component';
import {
  MatCardModule
} from '@angular/material/card';
import {
  Store
} from '@ngrx/store';
import {
  of
} from 'rxjs';
import {
  provideMockStore,
  MockStore
} from '@ngrx/store/testing';
import {
  HourlyWeatherState
} from 'src/app/reducers/hourly-weather.reducers';
import {
  LoadHourlyWeatherAction
} from 'src/app/actions/hourly-weather.actions';
describe('WeatherReportComponent', () => {
  let weatherComponent: WeatherReportComponent;
  let fixture: ComponentFixture < WeatherReportComponent > ;
  let store: MockStore < {
    hourlyWeather: any;
    loading: boolean;
    error: Error;
  } > ;
  const initialState = {
    hourlyWeather: [],
    loading: false,
    error: null
  };
  const mockHourlyWeatherState: HourlyWeatherState = {
    hourlyWeather: {
      cod: 200,
      message: 0.0032,
      cnt: 36,
      list: [{
        dt: 1487246400,
        main: {
          temp: 286.67,
          temp_min: 281.556,
          temp_max: 286.67,
          pressure: 972.73,
          sea_level: 1046.46,
          grnd_level: 972.73,
          humidity: 75,
          temp_kf: 5.11
        },
        weather: [{
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }],
        clouds: {
          all: 0
        },
        wind: {
          speed: 1.81,
          deg: 247.501
        },
        sys: {
          pod: 'd'
        },
        dt_txt: '2017-02-16 12:00:00'
      }]
    },
    loading: false,
    error: null
  };
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [WeatherReportComponent, DataGridComponent],
      imports: [MatProgressBarModule, MatTableModule, MatCardModule],
      providers: [provideMockStore({
        initialState
      })]
    });
    store = TestBed.get(Store);
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    weatherComponent = fixture.componentInstance;
    store.setState(mockHourlyWeatherState);
  });

  it('LoadHourlyWeatherAction to be triggered', () => {
    const expected = of (mockHourlyWeatherState);
    expected.subscribe(hourlyWeather => {
      expect(hourlyWeather).toEqual(mockHourlyWeatherState);
    });
  });
  it('should dispatch LoadHourlyWeatherAction called', () => {
    const appStore = spyOn(store, 'dispatch');
    weatherComponent.onShowingHourlyDetails('London');
    expect(appStore).toHaveBeenCalled();
  });
  it('should dispatch LoadHourlyWeatherAction with actual action payload', () => {
    const expectedAction = new LoadHourlyWeatherAction({
      cityName: 'London'
    });
    const appStore = spyOn(store, 'dispatch');
    weatherComponent.onShowingHourlyDetails('London');
    expect(appStore).toHaveBeenCalledWith(expectedAction);
  });

});
