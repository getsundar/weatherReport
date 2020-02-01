import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  ColumnProp
} from 'src/app/models/column-prop.model';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() dataToRender$: Observable < any > ;
  @Input() displayedColumns: ColumnProp[];
  @Input() showAction;
  @Output() showHourlyDetails: EventEmitter < any > = new EventEmitter();
  columnsToDisplay = [];
  ngOnInit() {
    this.displayedColumns.forEach(column => this.columnsToDisplay.push(column.prop));
    if (this.showAction) {
      this.columnsToDisplay.push('actions');
    }
  }
  onShowingHourlyDetails(cityToShow) {
    this.showHourlyDetails.emit(cityToShow);
  }

}
