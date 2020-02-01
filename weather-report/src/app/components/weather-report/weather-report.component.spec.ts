import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  WeatherReportComponent
} from './weather-report.component';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import {
  MatTableModule
} from '@angular/material/table';
import {
  DataGridComponent
} from '../data-grid/data-grid.component';
import {
  MatCardModule
} from '@angular/material/card';
import {
  Store
} from '@ngrx/store';
describe('WeatherReportComponent', () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture < WeatherReportComponent > ;
  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [WeatherReportComponent, DataGridComponent],
        imports: [MatProgressBarModule, MatTableModule, MatCardModule],
        providers: [Store]
      })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
