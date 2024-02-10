import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IData, IRowsToShow, SortTypes } from 'src/app/types';
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
  public currSortType = SortTypes.DEFAULT;
  public sortTypes = SortTypes;
  public initialData: IData[] | null = null;
  public shownColumnNames: IRowsToShow | null = null;
  public pageGoForm: FormGroup = new FormGroup({
    itemsPerPage: new FormControl(START_TABLE_PAGE, [
        Validators.max(this.data?.length || START_TABLE_PAGE),
        Validators.min(START_TABLE_PAGE)
      ]),
  });
  public filterInput = new FormControl('', []);
  public currPage = START_TABLE_PAGE; // TODO: сделать пагинацию
  public isModalSettingsOpen = false;

  public ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.data = this.tableSettingsServise.filterByShownConfig(data);
      this.initialData = this.data;
      this.pageGoForm.patchValue({
        itemsPerPage: this.data?.length || START_TABLE_PAGE,
      });
    });

    this.tableSettingsServise.shownColumns$.subscribe((value) => {
      this.shownColumnNames = value;
      if (this.initialData) {
        this.data = this.tableSettingsServise.filterByShownConfig(this.initialData);
      }
    });
  }

  public openColumnsSettingsModal() {
    this.isModalSettingsOpen = !this.isModalSettingsOpen;
  }

  public sort(name: string) {
    let type = this.currSortType;
    switch (this.currSortType) {
      case this.sortTypes.DEFAULT:
        type = this.sortTypes.ASC
        break;
      case this.sortTypes.ASC:
        type = this.sortTypes.DESC
        break;
      case this.sortTypes.DESC:
        type = this.sortTypes.DEFAULT
        break;
    }
    this.currSortType = type;
    if (this.data) {
      this.tableSettingsServise.sort(this.data, name, type);
    }
  }
}
