import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IData } from 'src/app/types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor (private apiService: ApiService) {}

  public DataData: IData | null = null;

  public ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.DataData = data;
      console.log('DATA: ', this.DataData);
    });
  }
}
