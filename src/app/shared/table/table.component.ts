import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IData } from 'src/app/types';
import { TableSettingsService } from '../../services/table-settings.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { START_TABLE_PAGE } from 'src/constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor (private apiService: ApiService, private tableSettingsServise: TableSettingsService) {}

  public data: IData[] | null = null;
  public shownColumnNames = this.tableSettingsServise.shownColumns;
  public pageGoForm: FormGroup = new FormGroup({
    itemsPerPage: new FormControl(START_TABLE_PAGE, [
        Validators.max(this.data?.length || START_TABLE_PAGE),
        Validators.min(START_TABLE_PAGE)
      ]),
  });

  public currPage = START_TABLE_PAGE; // TODO: сделать пагинацию

  public ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.data = this.tableSettingsServise.filterByShownConfig(data);
      this.pageGoForm.patchValue({
        itemsPerPage: this.data?.length || START_TABLE_PAGE,
      });
    });
  }
}
