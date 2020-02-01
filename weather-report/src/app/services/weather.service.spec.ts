import {
  TestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import {
  asyncData
} from '../shared/async-observable-helpers';
import {
  Weather
} from '../models/weather.model';
import {
  WeatherService
} from './weather.service';
import {
  forkJoin
} from 'rxjs';
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

describe('WeatherService', () => {
  let httpClientSpy: {
    get: jasmine.Spy
  };
  let weatherService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    weatherService = new WeatherService(httpClientSpy as any);
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientTestingModule]
    });
  });
  it('should return an Observable<HourlyWeather>', (() => {
    const req1 = httpClientSpy.get.and.returnValue(asyncData(dummy));
    const req2 = httpClientSpy.get.and.returnValue(asyncData(dummy));
    const req3 = httpClientSpy.get.and.returnValue(asyncData(dummy));
    const req4 = httpClientSpy.get.and.returnValue(asyncData(dummy));
    const req5 = httpClientSpy.get.and.returnValue(asyncData(dummy));
    const e1 = forkJoin([req1, req2, req3, req4]);
    spyOn(weatherService, 'getWeatherData').and.returnValue(e1);
  }));
});
