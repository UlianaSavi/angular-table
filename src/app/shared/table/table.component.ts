import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IData, IRowsToShow } from 'src/app/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor (private apiService: ApiService) {}

  public data: IData[] | null = null;
  public shownRows: IRowsToShow = {
    isActive: false,
    balance: true,
    picture: false,
    age: false,
    name: false,
    company: false,
    email: false,
    address: false,
    tags: false,
    favoriteFruit: false,
  };

  public ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
      console.log('DATA: ', this.data);
    });
  }
}
