import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IData } from 'src/app/types';
import { TableSettings } from '../../services/table-settings.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor (private apiService: ApiService, private tableSettings: TableSettings) {}

  public data: IData[] | null = null;
  public ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.data = this.tableSettings.filterByShownConfig(data);
      console.log('DATA: ', this.data);
    });
  }
}
