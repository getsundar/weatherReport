import {
  TestBed
} from '@angular/core/testing';
import {
  CITY_NAMES
} from 'src/assets/constants';
import {
  WeatherService
} from './weather.service';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  Observable,
  of ,
  forkJoin
} from 'rxjs';
import {
  Weather
} from '../models/weather.model';
import {
  cold, hot
} from 'jasmine-marbles';


fdescribe('Service: weatherService', () => {
  let service: WeatherService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.get(WeatherService);
  });

  describe('getWeatherData', () => {
    it('should form the data', () => {
      const dummy: Weather = {
        coord: {
          lon: -0.13,
          lat: 51.51
        },
        weather: [{
          id: 300,
          main: 'Drizzle',
          description: 'light intensity drizzle',
          icon: '09d'
        }],
        base: 'stations',
        main: {
          temp: 280.32,
          pressure: 1012,
          humidity: 81,
          temp_min: 279.15,
          temp_max: 281.15,
          feels_like: 0
        },
        wind: {
          speed: 4.1,
          deg: 80,
          gust: 10
        },
        clouds: {
          all: 90
        },
        dt: 1485789600,
        sys: {
          type: 1,
          id: 5091,
          country: 'GB',
          sunrise: 1485762037,
          sunset: 1485794875
        },
        id: 2643743,
        name: 'London',
        cod: 200,
        timezone: 0
      };
      const expected1 = hot('-a|', {
        dummy
      });
      // const expected2 = cold('-b-', dummy);
      const returnedValue = forkJoin([expected1]);
      expect(service.getWeatherData()).toBeObservable(returnedValue);
    });
  });
});
