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
describe('WeatherReportComponent', () => {
  let weatherComponent: WeatherReportComponent;
  let fixture: ComponentFixture < WeatherReportComponent > ;
  // const weatherInitialState = {
  //   weather: [],
  //   loading: true,
  //   error: null
  // };
  // let store: MockStore < {
  //   weather: any,
  //   loading: boolean,
  //   error: any
  // } > ;
  // const weatherInitialState = {
  //   weather: [],
  //   loading: true,
  //   error: null
  // };
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
    fixture.detectChanges();
  });

  // it('should do something', () => {
  //   store.setState({
  //     hourlyWeather: [{
  //       timeStamp: 10,
  //       avgTemp: 38,
  //       windStrength: 39
  //     }],
  //     loading: false,
  //     error: null
  //   });

  //   // const expected = cold('-a-|', {
  //   //   timeStamp: 10,
  //   //   avgTemp: 38,
  //   //   windStrength: 39
  //   // });
  //   const expected = of ({
  //     timeStamp: 10,
  //     avgTemp: 38,
  //     windStrength: 39
  //   });
  //   expected.subscribe(hourlyWeather => {
  //     expect(hourlyWeather).toEqual({
  //       timeStamp: 10,
  //       avgTemp: 38,
  //       windStrength: 39
  //     });
  //   });
  //  // expect(weatherComponent.onShowingHourlyDetails('London')).toHaveBeenCalled();

  //   // spyOn(weatherComponent, 'weatherDetails$').and.returnValue( of ({
  //   //   data: ({
  //   //     name: 'London',
  //   //     avgTemp: 38,
  //   //     windStrength: 39
  //   //   })
  //   // }));
  //   // spyOn(weatherComponent, 'hourlyCityWeatherDetails$').and.returnValue( of ({
  //   //   data: ({
  //   //     timeStamp: 20,
  //   //     avgTemp: 38,
  //   //     windStrength: 39
  //   //   })
  //   // }));

  //   // expect(weatherComponent.dataLoading).toBe(true);

  // });
});
