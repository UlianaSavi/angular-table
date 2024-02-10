import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TableSettingsService } from 'src/app/services/table-settings.service';

@Component({
  selector: 'app-table-columns-settings-modal',
  templateUrl: './table-columns-settings-modal.component.html',
  styleUrls: ['./table-columns-settings-modal.component.css']
})
export class TableColumnsSettingsModalComponent {
  constructor (private tableSettingsServise: TableSettingsService) {}

  public shownColumnNames = this.tableSettingsServise.shownColumns;

  // public namesForm: FormGroup = new FormGroup(); //TODO: динамическое создание формы по shownColumnNames

  public updateNamesList() {
    const newShownColumnsArr = this.shownColumnNames; //TODO: тут вместо этого должны быть данные формы собранные в IRowsToShow объект
    this.tableSettingsServise.setShownColumns(newShownColumnsArr);
  }
}
