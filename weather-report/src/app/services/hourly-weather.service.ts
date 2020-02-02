import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  HourlyWeather
} from '../models/hourly-weather.model';

@Injectable({
  providedIn: 'root'
})
export class HourlyWeatherService {
  constructor(private http: HttpClient) {}
  getHourlyWeatherDetails(cityDetails) {
    return this.http.get < HourlyWeather > ('http://localhost:9000/getHourlyWeatherData?cityName=' + cityDetails.cityName + '\'');
  }
}
