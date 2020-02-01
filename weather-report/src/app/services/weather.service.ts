import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Weather
} from '../models/weather.model';
import {
  forkJoin
} from 'rxjs';
import {
  CITY_NAMES
} from 'src/assets/constants';
import {
  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData() {
    const citiesToLoad = [];
    CITY_NAMES.forEach((city) => {
      citiesToLoad.push(this.http.get < Weather > ('http://localhost:9000/getWeatherData?cityName=' + city));
    });
    // forkJoining all the five cities and filtering the cities with status code 200 (removing the failed cities)
    return forkJoin(citiesToLoad).pipe(map((data: Weather[]) => {
      return data.filter(cityWeather => cityWeather.cod === 200);
    }));
  }

}
