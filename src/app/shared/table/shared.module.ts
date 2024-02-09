import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    TableComponent
  ],
})
export class SharedModule { }
