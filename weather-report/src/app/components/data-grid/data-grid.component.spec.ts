import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  DataGridComponent
} from './data-grid.component';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';

describe('DataGridComponent', () => {
  let component: DataGridComponent;
  let fixture: ComponentFixture < DataGridComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [DataGridComponent],
        imports: [
          MatTableModule,
          MatProgressBarModule
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridComponent);
    component = fixture.componentInstance;
    component.displayedColumns = [{
      headerName: 'Test',
      prop: 'Test'
    }];
  });
  it('show event emitted', () => {
    const spy = spyOn(component.showDetails, 'emit');
    component.onShowDetails('London');
    expect(spy).toHaveBeenCalledWith('London');
  });
});
