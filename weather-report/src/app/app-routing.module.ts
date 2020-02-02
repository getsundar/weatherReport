import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  WeatherReportComponent
} from './components/weather-report/weather-report.component';
export const routes: Routes = [{
  path: '',
  component: WeatherReportComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
