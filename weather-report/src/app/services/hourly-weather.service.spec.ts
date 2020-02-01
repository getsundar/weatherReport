import {
  TestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import {
  HourlyWeatherService
} from './hourly-weather.service';
import {
  asyncData
} from '../shared/async-observable-helpers';
const mockHourlyWeather = {
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
};

describe('HourlyWeatherService', () => {
  let httpClientSpy: {
    get: jasmine.Spy
  };
  let hourlyWeatherService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    hourlyWeatherService = new HourlyWeatherService(httpClientSpy as any);
    TestBed.configureTestingModule({
      providers: [HourlyWeatherService],
      imports: [HttpClientTestingModule]
    });
  });
  it('should return an Observable<HourlyWeather>', (() => {
    httpClientSpy.get.and.returnValue(asyncData(mockHourlyWeather));
    hourlyWeatherService.getHourlyWeatherDetails('London').subscribe(
      city => expect(city).toEqual(mockHourlyWeather)
    );
  }));
});
