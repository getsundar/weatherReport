// import {
//   TestBed,
//   getTestBed
// } from '@angular/core/testing';
// import {
//   HttpClientTestingModule,
//   HttpTestingController
// } from '@angular/common/http/testing';
// import {
//   HourlyWeatherService
// } from './hourly-weather.service';
// import {
//   HourlyWeather
// } from '../models/hourly-weather.model';
// import {
//   of
// } from 'rxjs';
// import {
//   HttpRequest
// } from '@angular/common/http';
// import {
//   asyncData
// } from './async-observable-helpers';
// import { inject } from '@angular/core';

// describe('HourlyWeatherService', () => {
//   let httpClientSpy: {
//     get: jasmine.Spy
//   };
//   let hourlyService: HourlyWeatherService;
//   beforeEach(() => {
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     hourlyService = new HourlyWeatherService(http);
//     TestBed.configureTestingModule({
//       providers: [HourlyWeatherService],
//       imports: [HttpClientTestingModule]
//     });
//   });
//   /* it('should return an Observable<HourlyWeather>', inject([]() => {
//     const dummyHourlyWeather = {
//       cod: 200,
//       message: 0.0032,
//       cnt: 36,
//       list: [{
//         dt: 1487246400,
//         main: {
//           temp: 286.67,
//           temp_min: 281.556,
//           temp_max: 286.67,
//           pressure: 972.73,
//           sea_level: 1046.46,
//           grnd_level: 972.73,
//           humidity: 75,
//           temp_kf: 5.11
//         },
//         weather: [{
//           id: 800,
//           main: 'Clear',
//           description: 'clear sky',
//           icon: '01d'
//         }],
//         clouds: {
//           all: 0
//         },
//         wind: {
//           speed: 1.81,
//           deg: 247.501
//         },
//         sys: {
//           pod: 'd'
//         },
//         dt_txt: '2017-02-16 12:00:00'
//       }]
//     };
//     httpClientSpy.get.and.returnValue(asyncData(dummyHourlyWeather));
//     hourlyService.getHourlyWeatherDetails('london').subscribe(
//       cities => {
//         console.log('sjxgsjdgsjgdjsdsjsashjdgsjgdh',cities);
//         //expect(cities).toEqual(dummyHourlyWeather)
//       }
//     );

//   }); */
// });
