import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  HourlyWeather
} from '../models/hourly-weather.model';
import {
  SharedService
} from '../shared/services/shared.service';


@Injectable({
  providedIn: 'root'
})
export class HourlyWeatherService {

  constructor(private http: HttpClient, private sharedService: SharedService) {}
  getHourlyWeatherDetails(cityDetails) {
    return this.http.get < HourlyWeather > ('http://localhost:9000/getHourlyWeatherData?cityName=' + cityDetails.cityName + '\'');
  }
}
