import {
  TestBed,
  async
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  AppComponent
} from './app.component';
import {
  routes
} from './app-routing.module';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  WeatherReportComponent
} from './components/weather-report/weather-report.component';
import {
  DataGridComponent
} from './components/data-grid/data-grid.component';
describe('AppComponent', () => {
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatProgressBarModule,
        MatSelectModule,
        MatTableModule,
        MatButtonModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatCardModule
      ],
      declarations: [
        AppComponent,
        WeatherReportComponent,
        DataGridComponent
      ],
    }).compileComponents();
  }));
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Weather Report');
  });
});
