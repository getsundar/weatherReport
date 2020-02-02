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
  // type any to render any model structure
  @Input() dataToRender$: Observable < any > ;
  @Input() displayedColumns: ColumnProp[];
  @Input() showAction;
  @Input() buttonLabel;
  @Output() showDetails: EventEmitter < any > = new EventEmitter();
  public columnsToDisplay = [];
  ngOnInit() {
    this.columnsToDisplay = this.displayedColumns.map(column => column.prop);
    // action column is shown or hidden with the inputs
    if (this.showAction) {
      this.columnsToDisplay.push('actions');
    }
  }
  onShowDetails(cityToShow) {
    this.showDetails.emit(cityToShow);
  }

}
