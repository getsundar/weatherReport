import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Weather
} from '../models/weather.model';
import {
  forkJoin,
  throwError
} from 'rxjs';
import {
  CITY_NAMES
} from 'src/assets/constants';
import {
  map,
  catchError
} from 'rxjs/operators';
import {
  SharedService
} from '../shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient, private sharedService: SharedService) {}
  getWeatherData() {
    const citiesToLoad = [];
    CITY_NAMES.forEach((city) => {
      citiesToLoad.push(this.http.get < Weather > ('http://localhost:9000/getWeatherData?cityName=' + city));
    });
    return forkJoin(citiesToLoad).pipe(map((data: Weather[]) => {
      return data.filter(cityWeather => cityWeather.cod === 200);
    }));
  }

}
